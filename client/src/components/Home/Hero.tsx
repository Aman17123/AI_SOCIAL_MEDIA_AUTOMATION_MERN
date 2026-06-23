import { Link } from "react-router-dom";
import { ArrowRightIcon, CheckCircle2Icon, DotIcon, SparklesIcon } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,68,68,0.16),transparent_42%),radial-gradient(ellipse_at_85%_20%,rgba(15,23,42,0.08),transparent_34%),linear-gradient(180deg,#fbfaf8_0%,#ffffff_58%,#f8fafc_100%)]" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
            <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-white/80 to-transparent" />

            <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-28">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-200/80 bg-white/75 px-3.5 py-1.5 text-sm font-medium text-red-500 shadow-sm shadow-red-200/40 backdrop-blur">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-40" />
                        <span className="relative inline-flex size-2 rounded-full bg-red-500" />
                    </span>
                    AI-Powered Social Media Automation
                </div>

                <h1 className="mx-auto max-w-5xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-6xl md:text-7xl xl:text-8xl">
                    Schedule smarter.
                    <br />
                    <span className="bg-gradient-to-r from-red-500 via-rose-400 to-orange-300 bg-clip-text italic text-transparent">Grow faster.</span>
                </h1>

                <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">Scheduler lets you create, schedule, and auto-engage across all your social platforms — powered by AI that writes your captions and replies for you.</p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link to="/login" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-500 px-8 py-3.5 text-[15px] font-semibold text-white shadow-xl shadow-red-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/40 sm:w-auto">
                        Start for free <ArrowRightIcon className="size-4" />
                    </Link>
                    <a href="#how-it-works" className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/75 px-8 py-3.5 text-[15px] font-semibold text-slate-800 shadow-sm shadow-slate-200/70 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white sm:w-auto">
                        See how it works
                    </a>
                </div>

                <p className="mt-5 text-xs font-medium text-slate-400">No credit card required · Free forever plan available</p>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 pb-0 sm:px-6 lg:px-8">
                <div className="absolute inset-x-8 bottom-0 -z-10 h-24 rounded-[100%] bg-red-500/20 blur-3xl" />
                <div className="overflow-hidden rounded-t-[2rem] border border-white/80 bg-white/65 shadow-[0_30px_90px_rgba(15,23,42,0.16)] backdrop-blur-xl">
                    <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white/70 px-4 py-3 sm:px-5">
                        <div className="size-3 rounded-full bg-red-400 shadow-sm" />
                        <div className="size-3 rounded-full bg-amber-400 shadow-sm" />
                        <div className="size-3 rounded-full bg-emerald-400 shadow-sm" />
                        <div className="mx-3 hidden h-7 max-w-xs flex-1 rounded-full border border-slate-200 bg-slate-50 shadow-inner sm:block" />
                        <div className="ml-auto flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3 py-1 text-red-500">
                            <SparklesIcon className="size-3.5" />
                            <span className="size-1.5 rounded-full bg-red-400" />
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-slate-50 via-white to-red-50/50 p-4 sm:p-6 lg:p-8">
                        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="rounded-3xl border border-white bg-white/85 p-4 shadow-sm shadow-slate-200/80 sm:p-5">
                                <div className="mb-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                                    {[
                                        { val: "12", label: "Scheduled" },
                                        { val: "48", label: "Published" },
                                        { val: "4", label: "Accounts" },
                                        { val: "3", label: "AI Rules" },
                                    ].map((s) => (
                                        <div key={s.label} className="rounded-2xl border border-slate-200/70 bg-gradient-to-b from-white to-slate-50/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-slate-200">
                                            <div className="text-2xl font-bold tabular-nums text-slate-950">{s.val}</div>
                                            <div className="mt-1 text-xs font-medium text-slate-400">{s.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-inner shadow-slate-100">
                                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-400">Recent Activity</div>
                                    {[
                                        { text: "Post published to LinkedIn & Twitter", time: "2m ago" },
                                        { text: "AI replied to 3 comments", time: "15m ago" },
                                        { text: "New post scheduled for tomorrow 9am", time: "1h ago" },
                                    ].map((item) => (
                                        <div key={item.text} className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-slate-50">
                                            <DotIcon className="size-5 shrink-0 text-red-300" />
                                            <span className="flex-1 text-left text-sm text-slate-600">{item.text}</span>
                                            <span className="shrink-0 text-xs font-medium text-slate-300">{item.time}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden rounded-3xl border border-slate-200/70 bg-slate-950 p-5 shadow-xl shadow-slate-950/15 lg:block">
                                <div className="grid h-full grid-rows-[auto_1fr_auto] gap-5">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className="size-2.5 rounded-full bg-red-400" />
                                            <span className="h-2.5 w-24 rounded-full bg-white/20" />
                                        </div>
                                        <CheckCircle2Icon className="size-4 text-emerald-300" />
                                    </div>
                                    <div className="grid grid-cols-7 items-end gap-2">
                                        {[44, 72, 58, 86, 64, 92, 78].map((height, index) => (
                                            <div key={index} className="flex min-h-44 items-end rounded-full bg-white/5 p-1">
                                                <div className="w-full rounded-full bg-gradient-to-t from-red-500 to-orange-300 shadow-[0_0_22px_rgba(248,113,113,0.35)]" style={{ height: `${height}%` }} />
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
            </div>
        </section>
    );
}
