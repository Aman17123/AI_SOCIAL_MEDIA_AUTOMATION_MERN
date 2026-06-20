import { Link } from "react-router-dom";

const footerLinks = {
    Product: ["Features", "How it works", "Pricing", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
};

export default function Footer() {
    return (
        <footer className="border-t border-slate-200/70 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="lg:col-span-2">
                        <Link to="/" onClick={() => scrollTo(0, 0)} className="mb-5 inline-flex items-center gap-2.5">
                            <span className="grid size-9 place-items-center rounded-2xl border border-red-100 bg-white shadow-sm shadow-red-100/70">
                                <img src="/logo.svg" alt="logo" className="size-5" />
                            </span>
                            <span className="font-serif text-xl font-semibold tracking-tight text-slate-950">Scheduler</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-500">The AI-powered social media scheduler that helps creators and teams grow faster with less effort.</p>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <div className="mb-5 text-xs font-semibold uppercase tracking-widest text-slate-500">{category}</div>
                            <ul className="space-y-1">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-sm text-slate-500 transition-colors hover:text-red-500">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-8 sm:flex-row">
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
        </footer>
    );
}
