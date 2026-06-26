import { Link } from "react-router-dom";
import { ArrowRightIcon, SparklesIcon, CheckCircle2Icon, DotIcon } from "lucide-react";
import { motion } from "framer-motion";

const EASE = "easeOut" as const;

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
});

const barHeights = [44, 72, 58, 86, 64, 92, 78];

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(239,68,68,0.18),transparent)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#fbfaf8] to-transparent" />

            {/* Floating orbs */}
            <div className="pointer-events-none absolute -z-10 top-24 left-[8%] size-72 rounded-full bg-rose-300/20 blur-[80px]" />
            <div className="pointer-events-none absolute -z-10 top-40 right-[5%] size-96 rounded-full bg-orange-200/20 blur-[100px]" />

            {/* Hero text area */}
            <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                {/* Badge */}
                <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/80 px-3.5 py-1.5 text-sm font-medium text-red-500 shadow-sm shadow-red-200/40 backdrop-blur">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-50" />
                        <span className="relative inline-flex size-2 rounded-full bg-red-500" />
                    </span>
                    AI-Powered Social Media Automation
                </motion.div>

                {/* Headline */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="mx-auto max-w-5xl font-serif text-5xl font-semibold leading-[1.0] tracking-tight text-slate-950 sm:text-6xl md:text-7xl xl:text-[88px]"
                >
                    Schedule smarter.
                    <br />
                    <span className="bg-gradient-to-r from-red-500 via-rose-400 to-orange-400 bg-clip-text italic text-transparent">
                        Grow faster.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-500 sm:text-lg"
                >
                    Scheduler lets you create, schedule, and auto-engage across all your social platforms — powered by AI that writes your captions and replies for you.
                </motion.p>

                {/* CTAs */}
                <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/login"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-red-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/45 sm:w-auto"
                    >
                        Start for free
                        <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                    <a
                        href="#how-it-works"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/80 px-8 py-3.5 text-[15px] font-semibold text-slate-800 shadow-sm shadow-slate-200/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-md sm:w-auto"
                    >
                        See how it works
                    </a>
                </motion.div>

                {/* Trust line */}
                <motion.p {...fadeUp(0.4)} className="mt-5 text-xs font-medium text-slate-400">
                    No credit card required · Free forever plan available
                </motion.p>
            </div>

            {/* Dashboard Preview */}
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="relative mx-auto max-w-6xl px-4 pb-0 sm:px-6 lg:px-8"
            >
                {/* Glow under dashboard */}
                <div className="absolute inset-x-12 bottom-0 -z-10 h-28 rounded-[100%] bg-red-500/25 blur-3xl" />
                <div className="absolute inset-x-32 bottom-4 -z-10 h-16 rounded-[100%] bg-orange-400/15 blur-2xl" />

                {/* Browser chrome */}
                <div className="overflow-hidden rounded-t-[2rem] border border-white/90 bg-white/70 shadow-[0_32px_80px_rgba(15,23,42,0.18),0_0_0_1px_rgba(15,23,42,0.04)] backdrop-blur-xl">
                    {/* Title bar */}
                    <div className="flex items-center gap-2 border-b border-slate-200/70 bg-white/75 px-4 py-3 sm:px-5">
                        <div className="size-3 rounded-full bg-red-400/90 shadow-sm" />
                        <div className="size-3 rounded-full bg-amber-400/90 shadow-sm" />
                        <div className="size-3 rounded-full bg-emerald-400/90 shadow-sm" />
                        <div className="mx-3 hidden h-7 max-w-xs flex-1 rounded-full border border-slate-200 bg-slate-50 shadow-inner sm:block" />
                        <div className="ml-auto flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-red-500">
                            <SparklesIcon className="size-3.5" />
                            <span className="size-1.5 rounded-full bg-red-400" />
                        </div>
                    </div>

                    {/* Dashboard body */}
                    <div className="bg-gradient-to-br from-slate-50 via-white to-red-50/40 p-4 sm:p-6 lg:p-8">
                        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                            {/* Left panel */}
                            <div className="rounded-3xl border border-white bg-white/90 p-4 shadow-sm shadow-slate-200/80 sm:p-5">
                                {/* Stats row */}
                                <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        { val: "12", label: "Scheduled" },
                                        { val: "48", label: "Published" },
                                        { val: "4", label: "Accounts" },
                                        { val: "3", label: "AI Rules" },
                                    ].map((s, i) => (
                                        <motion.div
                                            key={s.label}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.4, delay: 0.7 + i * 0.08, ease: EASE }}
                                            className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-red-100/60"
                                        >
                                            <div className="text-2xl font-bold tabular-nums text-slate-950">{s.val}</div>
                                            <div className="mt-1 text-xs font-medium text-slate-400">{s.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Activity feed */}
                                <div className="space-y-1 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-inner shadow-slate-100">
                                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Recent Activity</div>
                                    {[
                                        { text: "Post published to LinkedIn & Twitter", time: "2m ago" },
                                        { text: "AI replied to 3 comments", time: "15m ago" },
                                        { text: "New post scheduled for tomorrow 9am", time: "1h ago" },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.text}
                                            initial={{ opacity: 0, x: -12 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: 0.9 + i * 0.1, ease: EASE }}
                                            className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-slate-50"
                                        >
                                            <DotIcon className="size-5 shrink-0 text-red-300" />
                                            <span className="flex-1 text-left text-sm text-slate-600">{item.text}</span>
                                            <span className="shrink-0 text-xs font-medium text-slate-300">{item.time}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right panel — analytics */}
                            <div className="hidden rounded-3xl border border-slate-700/60 bg-slate-950 p-5 shadow-2xl shadow-slate-950/25 lg:block">
                                <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="size-2.5 rounded-full bg-red-400" />
                                            <span className="h-2.5 w-24 rounded-full bg-white/20" />
                                        </div>
                                        <CheckCircle2Icon className="size-4 text-emerald-400" />
                                    </div>
                                    <div className="grid grid-cols-7 items-end gap-2">
                                        {barHeights.map((height, index) => (
                                            <div key={index} className="flex min-h-44 items-end rounded-full bg-white/5 p-1">
                                                <motion.div
                                                    className="w-full rounded-full bg-gradient-to-t from-red-500 to-orange-300 shadow-[0_0_20px_rgba(248,113,113,0.4)]"
                                                    initial={{ height: "0%" }}
                                                    animate={{ height: `${height}%` }}
                                                    transition={{ duration: 0.7, delay: 0.8 + index * 0.06, ease: EASE }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="grid grid-cols-3 gap-3">
                                        <span className="h-2 rounded-full bg-white/15" />
                                        <span className="h-2 rounded-full bg-white/10" />
                                        <span className="h-2 rounded-full bg-white/15" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
