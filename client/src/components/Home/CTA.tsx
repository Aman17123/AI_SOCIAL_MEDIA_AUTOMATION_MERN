import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = "easeOut" as const;

export default function CTA() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 text-center sm:p-16 lg:p-24"
                >
                    {/* Subtle top border accent */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

                    <div className="relative">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl"
                        >
                            Your audience is waiting.
                            <br />
                            <span className="text-accent">Start scheduling.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mx-auto mt-6 max-w-lg text-lg text-muted"
                        >
                            Queue your first week of content in 20 minutes. Free to start, no credit card required.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
                        >
                            <Link
                                to="/login"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-4 text-[15px] font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_24px_rgba(232,168,56,0.3)] sm:w-auto"
                            >
                                Get Started Free
                                <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            </Link>
                            <a
                                href="#pricing"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-raised px-8 py-4 text-[15px] font-medium text-text transition-all duration-300 hover:border-muted sm:w-auto"
                            >
                                View Pricing
                            </a>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.45 }}
                            className="mt-6 text-xs text-muted"
                        >
                            No credit card required · Cancel anytime
                        </motion.p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
