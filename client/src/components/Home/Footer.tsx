import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GlobeIcon, MessageCircleIcon, AtSignIcon, Share2Icon } from "lucide-react";

const footerLinks = {
    Product: ["Features", "How it works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

const socialLinks = [
    { icon: MessageCircleIcon, label: "Twitter" },
    { icon: GlobeIcon, label: "LinkedIn" },
    { icon: AtSignIcon, label: "Instagram" },
    { icon: Share2Icon, label: "Facebook" },
];

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="border-t border-slate-200/60 bg-white"
        >
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    {/* Brand column */}
                    <div className="lg:col-span-2">
                        <Link
                            to="/"
                            onClick={() => scrollTo(0, 0)}
                            className="group mb-5 inline-flex items-center gap-2.5"
                        >
                            <span className="grid size-9 place-items-center rounded-2xl border border-red-100 bg-white shadow-sm shadow-red-100/70 transition-all duration-300 group-hover:shadow-[0_0_0_4px_rgba(239,68,68,0.1)]">
                                <img src="/logo.svg" alt="logo" className="size-5" />
                            </span>
                            <span className="font-serif text-xl font-semibold tracking-tight text-slate-950">Scheduler</span>
                        </Link>
                        <p className="mb-6 max-w-xs text-sm leading-relaxed text-slate-500">
                            The AI-powered social media scheduler that helps creators and teams grow faster with less effort.
                        </p>
                        {/* Social icons */}
                        <div className="flex items-center gap-2">
                            {socialLinks.map(({ icon: Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    className="grid size-9 place-items-center rounded-xl border border-slate-200 bg-white text-slate-400 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:text-red-500 hover:shadow-md hover:shadow-red-100/60"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">{category}</div>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-slate-500 transition-all duration-200 hover:translate-x-0.5 hover:text-red-500 inline-block"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/60 pt-8 sm:flex-row">
                    <p className="text-xs text-slate-400">© {new Date().getFullYear()} Scheduler. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-slate-400 transition-colors hover:text-red-500">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-slate-400 transition-colors hover:text-red-500">
                            Terms of Service
                        </a>
                        <Link to="/login" className="text-xs text-slate-400 transition-colors hover:text-red-500">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
