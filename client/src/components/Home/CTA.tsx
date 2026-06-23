import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

export default function CTA() {
    return (
        <section className="bg-[#fbfaf8] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-center shadow-2xl shadow-slate-950/20 sm:p-14 lg:p-20">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,68,68,0.34),transparent_48%),linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:auto,58px_58px,58px_58px]" />
                    <div className="relative">
                        <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-300/20 bg-white/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-100 backdrop-blur">Ready to grow?</div>
                        <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                            Automate your social
                            <br />
                            <span className="bg-gradient-to-r from-red-300 via-rose-200 to-orange-200 bg-clip-text italic text-transparent">media today</span>
                        </h2>
                        <p className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-300">Join thousands of creators and marketers who trust Scheduler to grow their audience on autopilot.</p>

                        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Link to="/login" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-10 py-4 text-[15px] font-semibold text-white shadow-xl shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/40 sm:w-auto">
                                Get Started Free <ArrowRightIcon className="size-4" />
                            </Link>
                            <a href="#pricing" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-10 py-4 text-[15px] font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto">
                                View Pricing
                            </a>
                        </div>

                        <p className="mt-6 text-xs text-slate-400">No credit card required · Cancel anytime</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
