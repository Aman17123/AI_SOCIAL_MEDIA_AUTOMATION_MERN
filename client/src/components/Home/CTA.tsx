import { Link } from "react-router-dom";
import { ArrowRightIcon, SparklesIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="bg-[#fbfaf8] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40, scale: 0.98 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950 p-8 text-center shadow-2xl shadow-slate-950/30 sm:p-16 lg:p-24"
                >
                    {/* Multi-layer background */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(239,68,68,0.38),transparent)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_110%,rgba(139,92,246,0.15),transparent)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:56px_56px]" />

                    {/* Top edge glow */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />

                    {/* Floating sparkle decorations */}
                    <div className="pointer-events-none absolute top-8 left-8 size-32 rounded-full border border-white/5" />
                    <div className="pointer-events-none absolute bottom-8 right-8 size-48 rounded-full border border-white/5" />

                    <div className="relative">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="mb-7 inline-flex items-center gap-1.5 rounded-full border border-red-300/20 bg-white/8 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-200 backdrop-blur"
                        >
                            <SparklesIcon className="size-3" />
                            Ready to grow?
                        </motion.div>

                        {/* Headline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
                        >
                            Automate your social
                            <br />
                            <span className="bg-gradient-to-r from-red-300 via-rose-200 to-orange-200 bg-clip-text italic text-transparent">
                                media today
                            </span>
                        </motion.h2>

                        {/* Sub-copy */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mx-auto mt-6 max-w-lg text-lg leading-8 text-slate-300"
                        >
                            Join thousands of creators and marketers who trust Scheduler to grow their audience on autopilot.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <Link
                                to="/login"
                                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-red-500 px-10 py-4 text-[15px] font-semibold text-white shadow-2xl shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/50 sm:w-auto"
                            >
                                {/* Shimmer sweep */}
                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                Get Started Free
                                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                            <a
                                href="#pricing"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/8 px-10 py-4 text-[15px] font-medium text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 sm:w-auto"
                            >
                                View Pricing
                            </a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.55 }}
                            className="mt-6 text-xs text-slate-500"
                        >
                            No credit card required · Cancel anytime
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
