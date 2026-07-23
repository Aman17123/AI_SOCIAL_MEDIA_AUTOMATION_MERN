import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const footerLinks = {
    Product: ["Features", "How it works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.footer
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="border-t border-border"
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
                            <span className="grid size-9 place-items-center rounded-xl border border-border bg-surface transition-colors duration-300 group-hover:border-accent/30">
                                <img src="/logo.svg" alt="logo" className="size-5" />
                            </span>
                            <span className="font-display text-xl font-semibold tracking-tight text-white">Scheduler</span>
                        </Link>
                        <p className="mb-6 max-w-xs text-sm leading-relaxed text-muted">
                            The scheduling tool that gets out of your way. Write, queue, publish — across every platform, from one place.
                        </p>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted font-display">{category}</div>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-sm text-muted transition-colors duration-200 hover:text-accent inline-block"
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
                <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
                    <p className="text-xs text-muted">© {new Date().getFullYear()} Scheduler. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-xs text-muted transition-colors hover:text-accent">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-xs text-muted transition-colors hover:text-accent">
                            Terms of Service
                        </a>
                        <Link to="/login" className="text-xs text-muted transition-colors hover:text-accent">
                            Sign In
                        </Link>
                    </div>
                </div>
            </div>
        </motion.footer>
    );
}
