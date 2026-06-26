import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon, MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const { user } = { user: false };
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
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`sticky top-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "border-b border-white/60 bg-white/80 shadow-[0_4px_24px_rgba(15,23,42,0.07)] backdrop-blur-2xl"
                    : "border-b border-transparent bg-[#fbfaf8]/60 backdrop-blur-md"
            }`}
        >
            <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={() => scrollTo(0, 0)}
                    className="group flex items-center gap-2.5"
                >
                    <span className="relative grid size-9 place-items-center rounded-2xl border border-red-100 bg-white shadow-sm shadow-red-100/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_0_0_4px_rgba(239,68,68,0.12),0_6px_16px_rgba(239,68,68,0.18)]">
                        <img src="/logo.svg" alt="logo" className="size-5" />
                    </span>
                    <span className="text-xl font-semibold font-serif tracking-tight text-slate-950 lg:text-2xl">
                        Scheduler
                    </span>
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-0.5 rounded-full border border-slate-200/70 bg-white/70 p-1 text-sm text-slate-500 shadow-sm shadow-slate-200/60 backdrop-blur">
                    {navLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="relative rounded-full px-4 py-2 font-medium transition-all duration-200 hover:bg-slate-950 hover:text-white"
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
                            className="group flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-500/25"
                        >
                            Go to Dashboard <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                        </Link>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-950"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/login"
                                className="group flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/35"
                            >
                                Get Started <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen((v) => !v)}
                    className="flex sm:hidden size-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:border-red-200 hover:text-red-500"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
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
                        className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl sm:hidden"
                    >
                        <div className="flex flex-col gap-1 p-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-red-50 hover:text-red-600"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-2 flex flex-col gap-2 border-t border-slate-100 pt-4">
                                <Link
                                    to="/login"
                                    onClick={() => setMobileOpen(false)}
                                    className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-medium text-slate-700"
                                >
                                    Sign In
                                </Link>
                                <Link
                                    to="/login"
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center justify-center gap-2 rounded-full bg-red-500 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-red-500/20"
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
