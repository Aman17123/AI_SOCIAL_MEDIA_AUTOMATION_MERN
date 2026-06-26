import { CalendarDaysIcon, Wand2Icon, Share2Icon, ZapIcon, BarChart3Icon, HashIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
    {
        icon: CalendarDaysIcon,
        title: "Smart Scheduling",
        description: "Queue posts across all platforms with a single click. Set it once and let us handle the rest.",
        accent: "bg-rose-500/10 text-rose-500 ring-rose-500/20",
        glow: "group-hover:shadow-rose-500/15",
        border: "group-hover:border-rose-300/40",
    },
    {
        icon: Wand2Icon,
        title: "AI Content Generator",
        description: "Generate on-brand captions and stunning images with our built-in AI. Never stare at a blank page again.",
        accent: "bg-violet-500/10 text-violet-400 ring-violet-500/20",
        glow: "group-hover:shadow-violet-500/15",
        border: "group-hover:border-violet-300/40",
    },
    {
        icon: BarChart3Icon,
        title: "Activity Dashboard",
        description: "Get a bird's eye view of all published posts, scheduled content, and engagement activity in one place.",
        accent: "bg-sky-500/10 text-sky-400 ring-sky-500/20",
        glow: "group-hover:shadow-sky-500/15",
        border: "group-hover:border-sky-300/40",
    },
    {
        icon: Share2Icon,
        title: "Multi-Platform",
        description: "Connect Twitter, LinkedIn, Facebook, and Instagram. Post everywhere from one unified workspace.",
        accent: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
        glow: "group-hover:shadow-emerald-500/15",
        border: "group-hover:border-emerald-300/40",
    },
    {
        icon: ZapIcon,
        title: "Instant Publishing",
        description: "Need to go live now? Publish immediately or schedule for peak engagement times with full timezone support.",
        accent: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
        glow: "group-hover:shadow-amber-500/15",
        border: "group-hover:border-amber-300/40",
    },
    {
        icon: HashIcon,
        title: "Hashtag Suggestions",
        description: "Get AI-powered hashtag suggestions to reach a wider audience and maximize your content's discoverability.",
        accent: "bg-red-500/10 text-red-400 ring-red-500/20",
        glow: "group-hover:shadow-red-500/15",
        border: "group-hover:border-red-300/40",
    },
];

function FeatureCard({ f, index }: { f: (typeof features)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.08, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.058] p-6 shadow-xl shadow-slate-950/20 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${f.border}`}
        >
            {/* Top shimmer line on hover */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {/* Corner glow */}
            <div className={`absolute -top-6 -right-6 size-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${f.glow.replace("group-hover:shadow", "bg")}`} />

            <div className={`mb-5 flex size-11 items-center justify-center rounded-2xl ring-1 ${f.accent} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                <f.icon className="size-5" />
            </div>
            <h3 className="mb-2 font-semibold text-white">{f.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{f.description}</p>
        </motion.div>
    );
}

export default function Features() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });

    return (
        <section id="features" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-32">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_20%_0%,rgba(239,68,68,0.2),transparent)] " />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_80%,rgba(139,92,246,0.12),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-3xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-400/25 bg-red-500/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-300 backdrop-blur">
                        <ZapIcon className="size-3" />
                        Everything you need
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                        Automate your entire
                        <br />
                        <span className="bg-gradient-to-r from-red-300 via-rose-200 to-orange-200 bg-clip-text italic text-transparent">
                            social media workflow
                        </span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
                        From content creation to scheduling — Scheduler handles it all so you can focus on what matters most.
                    </p>
                </motion.div>

                {/* Feature cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, i) => (
                        <FeatureCard key={f.title} f={f} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
