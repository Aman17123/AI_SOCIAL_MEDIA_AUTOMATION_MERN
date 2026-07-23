import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-ink/80 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-2xl"
          : "border-b border-transparent bg-ink/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => scrollTo(0, 0)}
          className="group flex items-center gap-2.5"
        >
          <span className="relative grid size-9 place-items-center rounded-xl border border-border bg-surface transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_0_0_3px_rgba(232,168,56,0.1)]">
            <img src="/logo.svg" alt="logo" className="size-5" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-white">
            Scheduler
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-0.5 rounded-lg border border-border bg-surface/80 p-1 text-sm text-muted backdrop-blur">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-md px-4 py-2 font-medium transition-colors duration-200 hover:bg-raised hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {user ? (
            <Link
              to="/dashboard"
              className="group flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_16px_rgba(232,168,56,0.3)]"
            >
              Dashboard
              <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-muted transition-colors hover:text-text"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="group flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_16px_rgba(232,168,56,0.3)]"
              >
                Get Started
                <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex sm:hidden size-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/30 hover:text-accent"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <XIcon className="size-4" />
          ) : (
            <MenuIcon className="size-4" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-border bg-surface/95 backdrop-blur-xl sm:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-text transition-colors hover:bg-raised hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg border border-border px-4 py-3 text-center text-sm font-medium text-text"
                >
                  Sign In
                </Link>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-center text-sm font-semibold text-ink"
                >
                  Get Started <ArrowRightIcon className="size-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
