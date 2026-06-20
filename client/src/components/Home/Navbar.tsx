import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function Navbar() {
    const { user } = { user: false };

    return (
        <nav className="sticky top-0 z-50 border-b border-white/70 bg-[#fbfaf8]/75 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-2xl">
            <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" onClick={() => scrollTo(0, 0)} className="group flex items-center gap-2.5">
                    <span className="grid size-9 place-items-center rounded-2xl border border-red-100 bg-white shadow-sm shadow-red-100/70 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md group-hover:shadow-red-200/80">
                        <img src="/logo.svg" alt="logo" className="size-5.5" />
                    </span>
                    <span className="text-xl lg:text-2xl font-semibold font-serif tracking-tight text-slate-950">Scheduler</span>
                </Link>
                <div className="hidden md:flex items-center gap-1 rounded-full border border-slate-200/70 bg-white/65 p-1 text-sm text-slate-500 shadow-sm shadow-slate-200/60">
                    <a href="#features" className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-950 hover:text-white">
                        Features
                    </a>
                    <a href="#how-it-works" className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-950 hover:text-white">
                        How it works
                    </a>
                    <a href="#pricing" className="rounded-full px-4 py-2 transition-all duration-200 hover:bg-slate-950 hover:text-white">
                        Pricing
                    </a>
                </div>

                {user ? (
                    <Link to="/dashboard" className="group flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-500 hover:shadow-red-500/25">
                        Go to Dashboard <ArrowRightIcon className="size-3.5" />
                    </Link>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/login" className="hidden text-sm font-medium text-slate-600 transition-colors hover:text-slate-950 sm:block">
                            Sign In
                        </Link>
                        <Link to="/login" className="group flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/35">
                            Get Started <ArrowRightIcon className="size-3.5" />
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
