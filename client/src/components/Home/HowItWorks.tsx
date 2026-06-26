import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
    {
        step: "01",
        title: "Connect Your Accounts",
        description: "Link your social profiles in seconds. We support Twitter, LinkedIn, Facebook, and Instagram.",
        color: "from-red-500 to-rose-400",
        glow: "shadow-red-200",
    },
    {
        step: "02",
        title: "Create or Generate Content",
        description: "Write your own post or let our AI craft a caption and image based on your prompt.",
        color: "from-violet-500 to-purple-400",
        glow: "shadow-violet-200",
    },
    {
        step: "03",
        title: "Schedule & Publish",
        description: "Pick a time, select your platforms, and hit schedule. We handle publishing automatically.",
        color: "from-emerald-500 to-teal-400",
        glow: "shadow-emerald-200",
    },
];

export default function HowItWorks() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });
    const stepsRef = useRef<HTMLDivElement>(null);
    const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

    return (
        <section id="how-it-works" className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(239,68,68,0.09),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.025)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black,transparent)]" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-red-500/8 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500">
                        <CheckCircleIcon className="size-3" />
                        Simple setup
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Up and running in{" "}
                        <span className="italic text-red-400">minutes</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-500">
                        No complicated onboarding, no steep learning curve. Just connect, create, and grow.
                    </p>
                </motion.div>

                {/* Steps */}
                <div ref={stepsRef} className="relative grid gap-6 md:grid-cols-3">
                    {/* Connecting line (desktop) */}
                    <div className="absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] hidden h-px md:block">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={stepsInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                            className="origin-left h-full bg-gradient-to-r from-red-200 via-violet-200 to-emerald-200"
                            style={{ borderTopStyle: "dashed", borderTopWidth: 2, backgroundColor: "transparent" }}
                        />
                    </div>

                    {steps.map((s, i) => (
                        <motion.div
                            key={s.step}
                            initial={{ opacity: 0, y: 32 }}
                            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: "easeOut" }}
                            className="group relative rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm shadow-slate-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/70"
                        >
                            {/* Step number badge */}
                            <div className="mb-7 flex items-center justify-between">
                                <div className={`relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} shadow-lg ${s.glow} transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                                    <span className="text-sm font-bold text-white">{s.step}</span>
                                    {/* Glow ring */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${s.color} opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40`} />
                                </div>
                                {i < steps.length - 1 && (
                                    <ArrowRightIcon className="hidden size-4 text-slate-200 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-400 md:block" />
                                )}
                            </div>
                            <h3 className="mb-3 text-[17px] font-semibold text-slate-950">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-500">{s.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
