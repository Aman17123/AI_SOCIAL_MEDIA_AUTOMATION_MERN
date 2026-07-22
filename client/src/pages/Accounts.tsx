import { PlusIcon } from "lucide-react";
import { PLATFORMS } from "../assets/assets";
import { useEffect, useRef, useState } from "react";
import AccountList from "../components/AccountList";
import PlatformPickerModal from "../components/PlatformPickerModal";
import toast from "react-hot-toast";
import api from "../api/axios";

const OAUTH_CHANNEL = "zernio-oauth";
const CONNECT_TIMEOUT_MS = 120_000; // 2 min timeout for connecting state

const Accounts = () => {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [connecting, setConnecting] = useState<string | null>(null);
  const [showPlatformPicker, setShowPlatformPicker] = useState(false);
  const channelRef = useRef<BroadcastChannel | null>(null);
  const connectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const connectingRef = useRef<string | null>(null);

  const clearConnecting = () => {
    setConnecting(null);
    connectingRef.current = null;
    if (connectTimerRef.current) {
      clearTimeout(connectTimerRef.current);
      connectTimerRef.current = null;
    }
  };

  const fetchAccounts = async (
    isSync = false,
    platform?: string | null,
    successMsg?: string,
  ) => {
    try {
      if (isSync) {
        const label = platform
          ? platform.charAt(0).toUpperCase() + platform.slice(1)
          : "Social Media";
        toast.loading(`Syncing ${label}...`, { id: "sync" });
        console.log(`[fetchAccounts] Syncing accounts for platform=${platform}`);
        const syncRes = await api.get("/api/oauth/sync");
        console.log(`[fetchAccounts] Sync response:`, syncRes.data);
        toast.success(successMsg || "Account Synced!", { id: "sync" });
      }

      console.log("[fetchAccounts] Fetching accounts from MongoDB");
      const { data } = await api.get("/api/accounts");
      console.log(`[fetchAccounts] Got ${data.length} accounts:`, JSON.stringify(data));
      setAccounts(data);
    } catch (error: any) {
      console.error("[fetchAccounts] Error:", error?.response?.data || error?.message || error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to load accounts",
      );
    }
  };

  // Listen for OAuth completion from other tabs via BroadcastChannel
  useEffect(() => {
    const channel = new BroadcastChannel(OAUTH_CHANNEL);
    channelRef.current = channel;

    channel.onmessage = (event) => {
      const msg = event.data;
      console.log("[BroadcastChannel] Received:", msg);

      if (msg.type === "oauth_connected") {
        clearConnecting();
        stopPolling();
        const label =
          msg.platform.charAt(0).toUpperCase() + msg.platform.slice(1);
        const handle = msg.username ? ` (@${msg.username})` : "";
        toast.success(`${label}${handle} connected!`, { id: "oauth-success" });
        fetchAccounts(true, msg.platform);
      }

      if (msg.type === "oauth_error") {
        clearConnecting();
        stopPolling();
        toast.error(`Connection failed: ${msg.error}`, { id: "oauth-error" });
        fetchAccounts();
      }
    };

    return () => {
      channel.close();
      clearConnecting();
      stopPolling();
    };
  }, []);

  // Also listen for OAuth completion via localStorage (fallback)
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === `${OAUTH_CHANNEL}-connected` && e.newValue) {
        try {
          const msg = JSON.parse(e.newValue);
          console.log("[localStorage fallback] Received:", msg);
          clearConnecting();
          stopPolling();
          if (msg.type === "oauth_connected") {
            const label =
              msg.platform.charAt(0).toUpperCase() + msg.platform.slice(1);
            const handle = msg.username ? ` (@${msg.username})` : "";
            toast.success(`${label}${handle} connected!`, { id: "oauth-success" });
            fetchAccounts(true, msg.platform);
          } else if (msg.type === "oauth_error") {
            toast.error(`Connection failed: ${msg.error}`, { id: "oauth-error" });
            fetchAccounts();
          }
          localStorage.removeItem(`${OAUTH_CHANNEL}-connected`);
        } catch { /* ignore parse errors */ }
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  // Polling fallback: if we opened an OAuth tab and don't hear back, poll accounts
  const startPolling = () => {
    stopPolling();
    pollTimerRef.current = setInterval(async () => {
      try {
        const { data } = await api.get("/api/accounts");
        console.log(`[poll] Accounts check: ${data.length} accounts`);
        if (data.length > accounts.length) {
          clearConnecting();
          stopPolling();
          setAccounts(data);
          toast.success("New account detected!", { id: "poll-success" });
        }
      } catch { /* ignore poll errors */ }
    }, 5000);
  };

  const stopPolling = () => {
    if (pollTimerRef.current) {
      clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  };

  // Handle OAuth redirect params (fires in whatever tab receives the redirect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const connectedPlatform = params.get("connected");
    const connectedUsername = params.get("username");
    const syncNeeded = params.get("sync") === "true";
    const errorMsg = params.get("error");

    if (connectedPlatform || errorMsg || syncNeeded) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    if (connectedPlatform) {
      // This tab is the OAuth callback tab — broadcast to the original tab
      console.log(`[OAuth Callback] Connected: platform=${connectedPlatform}, username=${connectedUsername}`);
      // Broadcast via BroadcastChannel
      try {
        const bc = new BroadcastChannel(OAUTH_CHANNEL);
        bc.postMessage({
          type: "oauth_connected",
          platform: connectedPlatform,
          username: connectedUsername,
        });
        bc.close();
      } catch (e) {
        console.warn("[OAuth Callback] BroadcastChannel failed:", e);
      }
      // Fallback via localStorage
      try {
        localStorage.setItem(
          `${OAUTH_CHANNEL}-connected`,
          JSON.stringify({
            type: "oauth_connected",
            platform: connectedPlatform,
            username: connectedUsername,
          }),
        );
        // Clean up after other tabs have had time to read it
        setTimeout(() => localStorage.removeItem(`${OAUTH_CHANNEL}-connected`), 2000);
      } catch (e) {
        console.warn("[OAuth Callback] localStorage fallback failed:", e);
      }
      // Also sync locally
      const label =
        connectedPlatform.charAt(0).toUpperCase() + connectedPlatform.slice(1);
      const handle = connectedUsername ? ` (@${connectedUsername})` : "";
      fetchAccounts(true, connectedPlatform, `${label}${handle} connected!`);
    } else if (errorMsg) {
      console.log(`[OAuth Callback] Error: ${decodeURIComponent(errorMsg)}`);
      try {
        const bc = new BroadcastChannel(OAUTH_CHANNEL);
        bc.postMessage({
          type: "oauth_error",
          error: decodeURIComponent(errorMsg),
        });
        bc.close();
      } catch (e) {
        console.warn("[OAuth Callback] BroadcastChannel failed:", e);
      }
      try {
        localStorage.setItem(
          `${OAUTH_CHANNEL}-connected`,
          JSON.stringify({ type: "oauth_error", error: decodeURIComponent(errorMsg) }),
        );
        setTimeout(() => localStorage.removeItem(`${OAUTH_CHANNEL}-connected`), 2000);
      } catch { /* ignore */ }
      toast.error(`Connection failed: ${decodeURIComponent(errorMsg)}`);
      fetchAccounts();
    } else if (syncNeeded) {
      fetchAccounts(true, null, "Accounts Synced Successfully");
    } else {
      fetchAccounts();
    }
  }, []);

  const handleConnect = async (platformId: string) => {
    setConnecting(platformId);
    connectingRef.current = platformId;

    // Auto-clear connecting state after timeout (user closed tab, OAuth failed silently, etc.)
    connectTimerRef.current = setTimeout(() => {
      if (connectingRef.current === platformId) {
        console.warn(`[handleConnect] OAuth timeout for ${platformId} — clearing connecting state`);
        toast.error(
          `${platformId} authorization timed out. Please try again.`,
          { id: "oauth-timeout" },
        );
        clearConnecting();
        stopPolling();
      }
    }, CONNECT_TIMEOUT_MS);

    try {
      console.log(`[handleConnect] Getting OAuth URL for platform: ${platformId}`);
      const { data } = await api.get(`/api/oauth/${platformId}/url`);
      const authUrl = data.url || data.authUrl;
      console.log(`[handleConnect] Opening OAuth URL in new tab: ${authUrl?.substring(0, 80)}...`);

      // Open in a new tab instead of replacing current
      window.open(authUrl, "_blank", "noopener,noreferrer");
      toast.success(
        `Opening ${platformId} authorization in a new tab...`,
        { id: "oauth-opening" },
      );
      // Start polling as fallback
      startPolling();
    } catch (error: any) {
      console.error("[handleConnect] Error:", error?.response?.data || error?.message || error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          `Failed to connect ${platformId}`,
      );
      clearConnecting();
    }
  };

  const handleDisconnect = async (accountId: string) => {
    try {
      console.log(`[handleDisconnect] Disconnecting account: ${accountId}`);
      await api.delete(`/api/accounts/${accountId}`);
      toast.success("Account disconnected");
      await fetchAccounts();
    } catch (error: any) {
      console.error("[handleDisconnect] Error:", error?.response?.data || error?.message || error);
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to disconnect account",
      );
    }
  };

  const connectedIds = accounts.map((a) => a.platform);

  return (
    <div className="space-y-8 max-w-4xl">
      {/* header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div>
          <h2 className="text-xl text-slate-900">Connected Accounts</h2>
          <p className="text-slate-500 text-sm mt-0.5">
            {accounts.length} of {PLATFORMS.length} platforms connected
          </p>
        </div>

        <button
          onClick={() => setShowPlatformPicker(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-full font-medium transition-all w-full sm:w-auto justify-center"
        >
          <PlusIcon className="size-4" /> Connect Account
        </button>
      </div>

      {/* platform picker modal */}
      {showPlatformPicker && (
        <PlatformPickerModal
          connectedIds={connectedIds}
          connecting={connecting}
          onClose={() => setShowPlatformPicker(false)}
          onConnect={handleConnect}
        />
      )}

      {/* connected accounts list */}
      <AccountList accounts={accounts} onDisconnect={handleDisconnect} />
    </div>
  );
};

export default Accounts;
