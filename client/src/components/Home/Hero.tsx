import { Link } from "react-router-dom";
import { ArrowRightIcon, ClockIcon } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SiX, SiInstagram } from "@icons-pack/react-simple-icons";

const EASE = "easeOut" as const;

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
});

const queuePosts = [
    {
        time: "9:00 AM",
        platform: "x" as const,
        content: "New feature drop: scheduling across 4 platforms at once.",
        status: "live" as const,
    },
    {
        time: "12:30 PM",
        platform: "instagram" as const,
        content: "Behind the scenes of building our AI composer.",
        status: "scheduled" as const,
    },
    {
        time: "5:00 PM",
        platform: "x" as const,
        content: "Thread: 7 ways to repurpose one blog post into 30 pieces of content.",
        status: "scheduled" as const,
    },
    {
        time: "Tomorrow",
        platform: "instagram" as const,
        content: "Carousel: The anatomy of a perfectly timed post.",
        status: "queued" as const,
    },
];

const calendarDots = [
    0, 0, 1, 0, 2, 0, 0,
    1, 0, 0, 3, 0, 1, 0,
    0, 2, 0, 0, 1, 0, 0,
    0, 0, 1, 0, 0, 2, 0,
];

function PlatformIcon({ platform }: { platform: "x" | "instagram" }) {
    if (platform === "x") return <SiX className="size-3" />;
    return <SiInstagram className="size-3" />;
}

function QueueTimeline() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="relative w-full">
            {/* Timeline spine */}
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-border" />

            <div className="space-y-3">
                {queuePosts.map((post, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: EASE }}
                        className="relative flex gap-4 pl-0"
                    >
                        {/* Time dot */}
                        <div className="relative z-10 flex flex-col items-center">
                            <div
                                className={`size-[10px] rounded-full border-2 ${
                                    post.status === "live"
                                        ? "border-status-live bg-status-live shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                                        : post.status === "scheduled"
                                        ? "border-status-scheduled bg-status-scheduled"
                                        : "border-border bg-raised"
                                }`}
                            />
                        </div>

                        {/* Post card */}
                        <div
                            className={`flex-1 rounded-xl border p-3 transition-colors ${
                                post.status === "live"
                                    ? "border-status-live/20 bg-status-live/5"
                                    : "border-border bg-surface"
                            }`}
                        >
                            <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex size-5 items-center justify-center rounded-md bg-raised text-muted">
                                        <PlatformIcon platform={post.platform} />
                                    </span>
                                    <span className="text-[11px] font-medium text-muted font-display">
                                        {post.time}
                                    </span>
                                </div>
                                {post.status === "live" && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-status-live/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-status-live">
                                        <span className="size-1 rounded-full bg-status-live animate-pulse" />
                                        Live
                                    </span>
                                )}
                                {post.status === "scheduled" && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-status-scheduled/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-status-scheduled">
                                        <ClockIcon className="size-2.5" />
                                        Scheduled
                                    </span>
                                )}
                            </div>
                            <p className="text-xs leading-relaxed text-text/80 line-clamp-2">
                                {post.content}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

function MiniCalendar() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    const days = ["M", "T", "W", "T", "F", "S", "S"];

    return (
        <div ref={ref} className="rounded-xl border border-border bg-surface p-4">
            <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-text font-display">July 2026</span>
                <span className="text-[10px] text-muted">Week 30</span>
            </div>
            <div className="grid grid-cols-7 gap-1">
                {days.map((d, i) => (
                    <div key={`h-${i}`} className="py-1 text-center text-[10px] font-medium text-muted">
                        {d}
                    </div>
                ))}
                {calendarDots.map((dotCount, i) => (
                    <motion.div
                        key={`d-${i}`}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.02, ease: EASE }}
                        className="flex flex-col items-center justify-center py-1.5 rounded-md hover:bg-raised transition-colors cursor-default"
                    >
                        <span className="text-[10px] text-muted mb-0.5">{i + 1}</span>
                        {dotCount > 0 && (
                            <div className="flex gap-0.5">
                                {Array.from({ length: Math.min(dotCount, 3) }).map((_, j) => (
                                    <span
                                        key={j}
                                        className={`size-1 rounded-full ${
                                            j === 0 ? "bg-accent" : j === 1 ? "bg-status-scheduled" : "bg-status-live"
                                        }`}
                                    />
                                ))}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section className="relative isolate overflow-hidden">
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />

            {/* Hero text area */}
            <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 lg:px-8 lg:pt-32">
                {/* Badge */}
                <motion.div {...fadeUp(0)} className="mb-8 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/80 px-3.5 py-1.5 text-sm font-medium text-muted backdrop-blur">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-status-live opacity-40" />
                        <span className="relative inline-flex size-2 rounded-full bg-status-live" />
                    </span>
                    Social media, scheduled
                </motion.div>

                {/* Headline — uses display font, not gradient text */}
                <motion.h1
                    {...fadeUp(0.1)}
                    className="mx-auto max-w-4xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
                >
                    Queue a week of posts
                    <br />
                    <span className="text-accent">in 20 minutes.</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    {...fadeUp(0.2)}
                    className="mx-auto mt-7 max-w-xl text-base leading-7 text-muted sm:text-lg"
                >
                    Write once, schedule everywhere. Scheduler queues your content
                    across X, LinkedIn, Instagram, and Facebook — so you focus on what to say, not when to post it.
                </motion.p>

                {/* CTAs */}
                <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <Link
                        to="/login"
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-[15px] font-semibold text-ink transition-all duration-300 hover:shadow-[0_0_24px_rgba(232,168,56,0.3)] sm:w-auto"
                    >
                        Start for free
                        <ArrowRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                    <a
                        href="#how-it-works"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface/50 px-8 py-3.5 text-[15px] font-medium text-text transition-all duration-300 hover:border-muted hover:bg-surface sm:w-auto"
                    >
                        See how it works
                    </a>
                </motion.div>

                <motion.p {...fadeUp(0.4)} className="mt-5 text-xs text-muted">
                    No credit card required · Free forever plan
                </motion.p>
            </div>

            {/* Signature element: Queue Timeline + Calendar side by side */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
                className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8"
            >
                {/* Ambient glow */}
                <div className="absolute inset-x-20 bottom-8 -z-10 h-32 rounded-[100%] bg-accent/10 blur-3xl" />

                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                    {/* Queue timeline — the signature element */}
                    <div className="rounded-2xl border border-border bg-surface p-5 sm:p-6">
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                                <div className="size-2 rounded-full bg-status-live" />
                                <span className="text-sm font-semibold text-text font-display">Today&apos;s Queue</span>
                            </div>
                            <span className="text-[11px] text-muted">4 posts queued</span>
                        </div>
                        <QueueTimeline />
                    </div>

                    {/* Right column: calendar + stats */}
                    <div className="flex flex-col gap-4">
                        <MiniCalendar />
                        <div className="rounded-xl border border-border bg-surface p-4">
                            <div className="text-[11px] font-medium text-muted uppercase tracking-wider mb-3">This Week</div>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { val: "23", label: "Posts scheduled" },
                                    { val: "4", label: "Platforms" },
                                    { val: "1.2k", label: "Reach" },
                                    { val: "98%", label: "On-time" },
                                ].map((s) => (
                                    <div key={s.label}>
                                        <div className="text-lg font-bold text-white font-display tabular-nums">{s.val}</div>
                                        <div className="text-[11px] text-muted">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
