import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";

const steps = [
    { step: "01", title: "Connect Your Accounts", description: "Link your social profiles in seconds. We support Twitter, LinkedIn, Facebook, and Instagram." },
    { step: "02", title: "Create or Generate Content", description: "Write your own post or let our AI craft a caption and image based on your prompt." },
    { step: "03", title: "Schedule & Publish", description: "Pick a time, select your platforms, and hit schedule. We handle publishing automatically." },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="relative overflow-hidden bg-white py-24 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,68,68,0.12),transparent_40%)]" />
            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-red-500/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500 shadow-sm shadow-red-100/70">
                        <CheckCircleIcon className="size-3" />
                        Simple setup
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Up and running in <span className="text-red-400 italic">minutes</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-lg leading-relaxed text-slate-500">No complicated onboarding, no steep learning curve. Just connect, create, and grow.</p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    {steps.map((s, i) => (
                        <div key={s.step} className="group relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm shadow-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/70">
                            <div className="mb-8 flex items-center justify-between">
                                <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl border border-red-100 bg-red-50 shadow-inner shadow-white">
                                    <span className="text-sm font-semibold text-red-500">{s.step}</span>
                                </div>
                                {i < steps.length - 1 && <ArrowRightIcon className="hidden size-4 text-slate-300 transition-transform duration-300 group-hover:translate-x-1 md:block" />}
                            </div>
                            <h3 className="mb-2 font-semibold text-slate-950">{s.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-500">{s.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
