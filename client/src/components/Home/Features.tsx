import { CalendarDaysIcon, Wand2Icon, Share2Icon, ZapIcon, BarChart3Icon, HashIcon } from "lucide-react";

const features = [
    {
        icon: CalendarDaysIcon,
        title: "Smart Scheduling",
        description: "Queue posts across all platforms with a single click. Set it once and let us handle the rest.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: Wand2Icon,
        title: "AI Content Generator",
        description: "Generate on-brand captions and stunning images with our built-in AI. Never stare at a blank page again.",
        color: "bg-red-50 text-red-500",
    },

    {
        icon: BarChart3Icon,
        title: "Activity Dashboard",
        description: "Get a bird's eye view of all published posts, scheduled content, and engagement activity in one place.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: Share2Icon,
        title: "Multi-Platform",
        description: "Connect Twitter, LinkedIn, Facebook, and Instagram. Post everywhere from one unified workspace.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: ZapIcon,
        title: "Instant Publishing",
        description: "Need to go live now? Publish immediately or schedule for peak engagement times with full timezone support.",
        color: "bg-red-50 text-red-500",
    },
    {
        icon: HashIcon,
        title: "Hashtag Suggestions",
        description: "Get AI-powered hashtag suggestions to reach a wider audience.",
        color: "bg-red-50 text-red-500",
    },
];

export default function Features() {
    return (
        <section id="features" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(239,68,68,0.22),transparent_36%),linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] [background-size:auto,64px_64px,64px_64px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-400/25 bg-red-500/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-200 shadow-sm shadow-red-950/40 backdrop-blur">
                        <ZapIcon className="size-3" />
                        Everything you need
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
                        Automate your entire
                        <br />
                        <span className="bg-gradient-to-r from-red-300 via-rose-200 to-orange-200 bg-clip-text italic text-transparent">social media workflow</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">From content creation to scheduling — Scheduler handles it all so you can focus on what matters most.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f) => (
                        <div key={f.title} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-slate-950/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-300/35 hover:bg-white/[0.075]">
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className={`mb-5 flex size-11 items-center justify-center rounded-2xl ring-1 ring-white/10 ${f.color} shadow-lg shadow-red-950/20 transition-transform duration-300 group-hover:scale-105`}>
                                <f.icon className="size-5" />
                            </div>
                            <h3 className="mb-2 font-semibold text-white">{f.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-400">{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
