import { StarIcon, QuoteIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
    {
        name: "Sarah K.",
        role: "Marketing Manager",
        avatar: "S",
        avatarBg: "from-red-400 to-pink-500",
        text: "Scheduler has saved our team 10+ hours a week. The AI composer is genuinely impressive — it writes content that sounds like us.",
        stars: 5,
    },
    {
        name: "Marcus L.",
        role: "Indie Creator",
        avatar: "M",
        avatarBg: "from-violet-400 to-purple-500",
        text: "I used to dread posting. Now I queue up a whole week of content in 20 minutes. The smart scheduling feature alone is worth it.",
        stars: 5,
    },
    {
        name: "Priya D.",
        role: "Startup Founder",
        avatar: "P",
        avatarBg: "from-sky-400 to-blue-500",
        text: "Finally a scheduler that's beautiful AND powerful. The clean dashboard makes it easy to see exactly what's going out and when.",
        stars: 5,
    },
];

export default function Testimonials() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });
    const cardsRef = useRef<HTMLDivElement>(null);
    const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

    return (
        <section className="relative overflow-hidden bg-[#fbfaf8] py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_15%,rgba(239,68,68,0.09),transparent)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_85%_85%,rgba(139,92,246,0.07),transparent)]" />
            {/* Decorative blur blobs */}
            <div className="pointer-events-none absolute top-1/4 left-[5%] size-80 rounded-full bg-rose-200/25 blur-[100px]" />
            <div className="pointer-events-none absolute bottom-1/4 right-[5%] size-64 rounded-full bg-violet-200/20 blur-[80px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500 shadow-sm shadow-red-100/70 backdrop-blur">
                        <StarIcon className="size-3 fill-red-400 text-red-400" />
                        Testimonials
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Loved by{" "}
                        <span className="text-red-400">creators &amp; teams</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-slate-500">
                        Join thousands of people who automate their social media with Scheduler.
                    </p>
                </motion.div>

                {/* Cards */}
                <div ref={cardsRef} className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 32 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                            className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 p-7 shadow-sm shadow-slate-200/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-red-100 hover:shadow-xl hover:shadow-red-100/50"
                        >
                            {/* Decorative quote icon */}
                            <QuoteIcon className="absolute top-5 right-5 size-8 text-slate-100 transition-colors duration-300 group-hover:text-red-100" />

                            {/* Stars */}
                            <div className="flex gap-0.5">
                                {Array.from({ length: t.stars }).map((_, si) => (
                                    <StarIcon key={si} className="size-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            {/* Quote text */}
                            <p className="flex-1 text-sm leading-7 text-slate-600">"{t.text}"</p>

                            {/* Author */}
                            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-sm font-bold text-white shadow-md`}>
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-950">{t.name}</div>
                                    <div className="text-xs text-slate-400">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
