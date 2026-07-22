import { Request, Response } from "express";
import zernio from "../config/zernio.js";
import { Account } from "../models/Accounts.js";
import { User } from "../models/user.js";
import { AuthRequest } from "../middlewares/authMiddleware.js";

// helper to ensure user has a zernio profile
const getOrCreateZernioProfile = async (user: any): Promise<string> => {
  try {
    const result = await zernio.profiles.listProfiles();
    const data = result.data as any;
    const profiles: any[] = Array.isArray(data)
      ? data
      : data?.profiles || data?.data || [];
    if (profiles.length > 0) {
      const pid = profiles[0]._id || profiles[0]._id;
      await User.findByIdAndUpdate(user._id, { zernioProfileId: pid });
      return pid;
    }
    const createResult = await zernio.profiles.createProfile({
      body: { name: `${user.name} || ${user.email}'s workspace` } as any,
    });
    const created = (createResult.data as any)?.profile || createResult.data;

    const pid = created?._id || created?.id;

    if (!pid) {
      throw new Error("failed to crate Zernio profile - no ID returned");
    }

    await User.findByIdAndUpdate(user._id, { zernioProfileId: pid });
    return pid;
  } catch (error: any) {
    console.error("getOrCreateZernioProfile Error:", error?.message || error);
    throw error;
  }
};

// Generaate Oauth authorization URL
// GEt api/auth/connect/:platform

export const generateAuthUrl = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { platform } = req.params;
    const profileId = await getOrCreateZernioProfile((req as any).user);

    const origin = req.headers.origin || `${req.protocol}://${req.get("host")}`;
    const redirectUrl = `${origin}/accounts`;

    console.log(`[generateAuthUrl] platform=${platform}, profileId=${profileId}, redirectUrl=${redirectUrl}`);

    const result = await zernio.connect.getConnectUrl({
      path: { platform: platform as any },
      query: {
        profileId: profileId,
        redirect_url: redirectUrl,
      },
    });

    const data = result.data as any;

    console.log(`[generateAuthUrl] Zernio response:`, JSON.stringify(data));

    const authUrl = data.authUrl || data.authURL || data.url;

    if (!authUrl) {
      throw new Error(
        `Zernio returned no authUrl. Full response: ${JSON.stringify(data)}`,
      );
    }

    res.json({ url: authUrl });
  } catch (error: any) {
    console.error(error?.response?.data || error);
    res.status(500).json({
      message: error?.message || "Server error",
    });
  }
};

// sync connected account from zernio to MongoDB
//GET /api/auth/sync

export const syncAccounts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const profileId = await getOrCreateZernioProfile((req as any).user);
    console.log(`[syncAccounts] userId=${(req as any).user._id}, profileId=${profileId}`);

    const result = await zernio.accounts.listAccounts({
      query: { profileId } as any,
    });

    const data = result.data as any;
    const zernioAccounts: any[] =
      data?.accounts || (Array.isArray(data) ? data : []);

    console.log(`[syncAccounts] Zernio returned ${zernioAccounts.length} accounts:`, JSON.stringify(zernioAccounts));

    const supportedPlatforms = ["twitter", "linkedin", "facebook", "instagram"];
    const syncedAccounts = [];

    for (const zAccount of zernioAccounts) {
      const zid = zAccount._id || zAccount.id;
      if (!zid) {
        console.warn("[syncAccounts] Skipping account with no ID:", zAccount);
        continue;
      }

      const rawPlatform = (
        zAccount.platform ||
        zAccount.type ||
        ""
      ).toLowerCase();
      const normalizedPlatform = supportedPlatforms.find((p) =>
        rawPlatform.includes(p),
      );

      if (!normalizedPlatform) {
        console.log(
          `[syncAccounts] Skipping unsupported platform: "${rawPlatform}"`,
          zAccount,
        );
        continue;
      }

      console.log(`[syncAccounts] Upserting account: zid=${zid}, platform=${normalizedPlatform}, handle=${zAccount.username || zAccount.name || zAccount.handle}`);

      const account = await Account.findOneAndUpdate(
        { zernioAccountId: zid },
        {
          user: (req as any).user._id,
          platform: normalizedPlatform,
          handle:
            zAccount.username || zAccount.name || zAccount.handle || "Unknown",
          zernioAccountId: zid,
          status: "connected",
          avatarURL:
            zAccount.avatarUrl ||
            zAccount.picture ||
            zAccount.profile_image_url,
        },
        { upsert: true, returnDocument: "after" },
      );
      syncedAccounts.push(account);
    }

    console.log(`[syncAccounts] Synced ${syncedAccounts.length} accounts to MongoDB`);
    res.json(syncedAccounts);
  } catch (error) {
    console.error("[syncAccounts] Error:", (error as any)?.message || error);
    res.status(500).json({ message: (error as any)?.message || "Server error" });
  }
};
