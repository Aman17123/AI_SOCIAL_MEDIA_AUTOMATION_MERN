import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiX, SiInstagram } from "@icons-pack/react-simple-icons";

const EASE = "easeOut" as const;

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function FeatureSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Feature 1: Smart Scheduling — with a visual weekly schedule mockup */
function SchedulingFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const scheduleRows = [
    { time: "9am", posts: [{ label: "X", color: "accent" }] },
    { time: "12pm", posts: [{ label: "IG", color: "status-scheduled" }] },
    {
      time: "3pm",
      posts: [
        { label: "X", color: "accent" },
        { label: "LI", color: "status-scheduled" },
      ],
    },
  ];

  return (
    <FeatureSection className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
        Smart Scheduling
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        Drag, drop, done.
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
        Visualize your week at a glance. Drag posts between time slots, and
        Scheduler adjusts publishing across every connected platform.
      </p>
      <div ref={ref} className="rounded-xl border border-border bg-ink p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[11px] font-semibold text-text font-display">
            Week View
          </span>
          <span className="text-[10px] text-muted">Jul 21–25</span>
        </div>
        <div className="space-y-1">
          {scheduleRows.map((row, ri) => (
            <div key={ri} className="flex items-center gap-3">
              <span className="w-10 text-right text-[10px] text-muted tabular-nums">
                {row.time}
              </span>
              <div className="flex-1 flex gap-1.5 min-h-[28px] border-t border-border/50 items-center">
                {row.posts.map((post, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={inView ? { opacity: 1, scaleX: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + ri * 0.1 + pi * 0.05,
                      ease: EASE,
                    }}
                    className={`rounded-md px-2 py-1 text-[10px] font-bold font-display origin-left ${
                      post.color === "accent"
                        ? "bg-accent/15 text-accent"
                        : "bg-status-scheduled/15 text-status-scheduled"
                    }`}
                  >
                    {post.label}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeatureSection>
  );
}

/* Feature 2: AI Composer — with a code/prompt style mockup */
function AIComposerFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <FeatureSection className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-status-scheduled/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-status-scheduled">
        AI Composer
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        Describe it. AI writes it.
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
        Give a prompt, pick a tone, and Scheduler generates platform-optimized
        captions with hashtags — ready to schedule or tweak.
      </p>
      <div
        ref={ref}
        className="rounded-xl border border-border bg-ink p-4 font-mono text-xs"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="text-muted mb-2"># Prompt</div>
          <div className="text-text mb-4">
            &quot;Write a thread about launching a new feature&quot;
          </div>
          <div className="text-muted mb-2"># Generated</div>
          <div className="space-y-1.5 text-text/80">
            <div className="flex gap-2">
              <span className="text-accent">1/</span>
              <span>
                Introducing smart scheduling — set it once, publish everywhere.
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">2/</span>
              <span>Connect X, LinkedIn, Instagram & Facebook in seconds.</span>
            </div>
            <div className="flex gap-2">
              <span className="text-accent">3/</span>
              <span>Queue a full week in 20 minutes. Free to start. 🚀</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-md bg-accent/10 px-2 py-1 text-accent text-[10px] font-semibold">
              Schedule
            </span>
            <span className="rounded-md bg-raised px-2 py-1 text-muted text-[10px]">
              Edit
            </span>
          </div>
        </motion.div>
      </div>
    </FeatureSection>
  );
}

/* Feature 3: Multi-Platform — stat-led */
function MultiPlatformFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const platforms = [
    { icon: SiX, name: "X / Twitter", color: "text-text" },
    { icon: LinkedInIcon, name: "LinkedIn", color: "text-status-scheduled" },
    { icon: SiInstagram, name: "Instagram", color: "text-status-error" },
  ];

  return (
    <FeatureSection className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-status-live/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-status-live">
        Multi-Platform
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        One post. Every platform.
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
        Write once, publish everywhere. Scheduler adapts your content for each
        platform&apos;s format and audience.
      </p>
      <div ref={ref} className="rounded-xl border border-border bg-ink p-5">
        <div className="text-[11px] text-muted mb-3 font-display font-medium uppercase tracking-wider">
          Connected
        </div>
        <div className="space-y-3">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: EASE }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-8 items-center justify-center rounded-lg bg-raised ${p.color}`}
                >
                  <p.icon className="size-4" />
                </span>
                <span className="text-sm text-text">{p.name}</span>
              </div>
              <span className="flex items-center gap-1.5 text-[11px] text-status-live">
                <span className="size-1.5 rounded-full bg-status-live" />
                Connected
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </FeatureSection>
  );
}

/* Feature 4: Analytics — stat highlight */
function AnalyticsFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  const bars = [35, 52, 41, 68, 55, 72, 60, 85, 73, 90];

  return (
    <FeatureSection className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
        Activity Dashboard
      </div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        See what&apos;s working.
      </h3>
      <p className="text-sm text-muted leading-relaxed mb-6 max-w-sm">
        Track engagement, reach, and publishing performance across all platforms
        in one dashboard.
      </p>
      <div ref={ref} className="rounded-xl border border-border bg-ink p-5">
        <div className="flex items-end justify-between mb-4">
          <div>
            <div className="text-3xl font-bold text-white font-display tabular-nums">
              1,247
            </div>
            <div className="text-[11px] text-muted">Total reach this week</div>
          </div>
          <div className="flex items-center gap-1 text-status-live text-xs font-medium">
            +18% from last week
          </div>
        </div>
        <div className="flex items-end gap-1 h-20">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: "0%" }}
              animate={inView ? { height: `${h}%` } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.05, ease: EASE }}
              className="flex-1 rounded-sm bg-accent/30"
            />
          ))}
        </div>
      </div>
    </FeatureSection>
  );
}

export default function Features() {
  const headRef = useRef<HTMLDivElement>(null);
  const headInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section id="features" className="relative overflow-hidden py-24 sm:py-32">
      {/* Subtle radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(232,168,56,0.06),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
            What you get
          </div>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Everything your content
            <br />
            pipeline needs.
          </h2>
          <p className="mt-4 max-w-lg text-muted leading-relaxed">
            From drafting to publishing, every tool lives in one place. No more
            tab-switching between five different apps.
          </p>
        </motion.div>

        {/* Varied feature layout — not a 3-col grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          <SchedulingFeature />
          <AIComposerFeature />
          <MultiPlatformFeature />
          <AnalyticsFeature />
        </div>
      </div>
    </section>
  );
}
