import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckCircle2Icon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = "easeOut" as const;

const steps = [
    {
        title: "Connect",
        description: "Link your social profiles in seconds. X, LinkedIn, Instagram, Facebook — one workspace, all of them.",
        detail: "OAuth login, no passwords stored.",
    },
    {
        title: "Write",
        description: "Draft a post or let AI generate it from a prompt. Add images, hashtags, and platform-specific tweaks.",
        detail: "AI generates captions tuned per platform.",
    },
    {
        title: "Queue",
        description: "Pick a time slot or let smart scheduling find the best one. Drag, drop, reorder — your week is set.",
        detail: "Optimized for engagement by timezone.",
    },
];

export default function HowItWorks() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });
    const stepsRef = useRef<HTMLDivElement>(null);
    const stepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

    return (
        <section id="how-it-works" className="relative overflow-hidden py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-ink) 0%,var(--color-surface) 50%,var(--color-ink) 100%)]" />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="mb-16 max-w-2xl"
                >
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
                        <CheckCircle2Icon className="size-3" />
                        How it works
                    </div>
                    <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                        Three steps. Then{" "}
                        <span className="text-accent">you&apos;re live.</span>
                    </h2>
                </motion.div>

                {/* Steps — horizontal on desktop, vertical on mobile */}
                <div ref={stepsRef} className="relative grid gap-6 md:grid-cols-3">
                    {/* Connecting line (desktop only) */}
                    <div className="absolute top-[28px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] hidden h-px md:block">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={stepsInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
                            className="origin-left h-full bg-border"
                        />
                    </div>

                    {steps.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 32 }}
                            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: EASE }}
                            className="group relative"
                        >
                            {/* Step indicator */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="relative flex size-14 shrink-0 items-center justify-center rounded-xl border border-border bg-surface transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-[0_0_12px_rgba(232,168,56,0.15)]">
                                    <span className="font-display text-lg font-bold text-accent">{i + 1}</span>
                                </div>
                                {i < steps.length - 1 && (
                                    <ArrowRightIcon className="hidden size-4 text-border transition-colors duration-300 group-hover:text-muted md:block" />
                                )}
                            </div>
                            <h3 className="font-display text-lg font-semibold text-white mb-2">{s.title}</h3>
                            <p className="text-sm text-muted leading-relaxed mb-2">{s.description}</p>
                            <p className="text-xs text-accent/70 font-medium">{s.detail}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
                    className="mt-14 text-center"
                >
                    <Link
                        to="/login"
                        className="group inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-text transition-all duration-300 hover:border-accent/30 hover:text-accent"
                    >
                        Try it yourself
                        <ArrowRightIcon className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
