import { StarIcon } from "lucide-react";

const testimonials = [
    {
        name: "Sarah K.",
        role: "Marketing Manager",
        avatar: "S",
        avatarBg: "from-red-400 to-pink-400",
        text: "Scheduler has saved our team 10+ hours a week. The AI composer is genuinely impressive — it writes content that sounds like us.",
    },
    {
        name: "Marcus L.",
        role: "Indie Creator",
        avatar: "M",
        avatarBg: "from-violet-400 to-purple-500",
        text: "I used to dread posting. Now I queue up a whole week of content in 20 minutes. The smart scheduling feature alone is worth it.",
    },
    {
        name: "Priya D.",
        role: "Startup Founder",
        avatar: "P",
        avatarBg: "from-sky-400 to-blue-500",
        text: "Finally a scheduler that's beautiful AND powerful. The clean dashboard makes it easy to see exactly what's going out and when.",
    },
];

export default function Testimonials() {
    return (
        <section className="relative overflow-hidden bg-[#fbfaf8] py-24 sm:py-28">
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),transparent_34%),radial-gradient(ellipse_at_15%_10%,rgba(239,68,68,0.1),transparent_32%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-white/80 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500 shadow-sm shadow-red-100/70 backdrop-blur">
                        <StarIcon className="size-3 " />
                        Testimonials
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Loved by <span className="text-red-400">creators &amp; teams</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-slate-500">Join thousands of people who automate their social media with Scheduler.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col gap-5 rounded-3xl border border-white bg-white/82 p-6 shadow-sm shadow-slate-200/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl hover:shadow-red-100/60">
                            <p className="flex-1 text-sm leading-7 text-slate-600">"{t.text}"</p>
                            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-sm font-bold text-white shadow-lg shadow-slate-300/80`}>{t.avatar}</div>
                                <div>
                                    <div className="text-sm font-semibold text-slate-950">{t.name}</div>
                                    <div className="text-xs text-slate-400">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
