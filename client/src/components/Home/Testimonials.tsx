import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = "easeOut" as const;

const testimonials = [
    {
        name: "Sarah K.",
        role: "Marketing Manager",
        avatar: "S",
        text: "We went from spending 2 hours a day on posting to 20 minutes a week. The AI composer actually sounds like our brand voice — not generic AI slop.",
        metric: "10+ hrs/week saved",
    },
    {
        name: "Marcus L.",
        role: "Indie Creator",
        avatar: "M",
        text: "I queue up a whole week of content in one sitting, then forget about it. The scheduling is smart enough that posts go out when my audience is actually online.",
        metric: "23 posts/week avg",
    },
    {
        name: "Priya D.",
        role: "Startup Founder",
        avatar: "P",
        text: "Clean dashboard, no bloat. I can see exactly what's going out, where, and when. Finally a scheduler that respects my time.",
        metric: "4 platforms, 1 tool",
    },
];

export default function Testimonials() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });

    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="mb-14 max-w-2xl"
                >
                    <div className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
                        From real users
                    </div>
                    <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                        Trusted by creators
                        <br />
                        <span className="text-accent">and teams alike.</span>
                    </h2>
                </motion.div>

                {/* Testimonial cards — asymmetric grid on desktop */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <TestimonialCard key={i} t={t} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ t, index }: { t: (typeof testimonials)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
            className={`flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-muted ${
                index === 1 ? "md:-mt-4" : ""
            }`}
        >
            <div>
                {/* Metric badge */}
                <div className="mb-4 inline-flex rounded-md bg-ink px-2.5 py-1 text-[11px] font-semibold text-accent font-display tabular-nums">
                    {t.metric}
                </div>
                {/* Quote */}
                <p className="text-sm leading-relaxed text-text/80">
                    &ldquo;{t.text}&rdquo;
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-raised text-xs font-bold text-accent font-display">
                    {t.avatar}
                </div>
                <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                </div>
            </div>
        </motion.div>
    );
}
