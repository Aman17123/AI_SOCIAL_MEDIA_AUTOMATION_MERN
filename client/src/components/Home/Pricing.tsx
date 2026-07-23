import { CheckIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = "easeOut" as const;

const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        description: "For creators just getting started with social media scheduling.",
        features: ["2 social accounts", "10 scheduled posts/month", "AI content (5 credits/mo)", "Basic dashboard"],
        cta: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "Everything you need to grow and automate your social presence.",
        features: ["Unlimited accounts", "Unlimited scheduling", "AI content (200 credits/mo)", "Smart time optimization", "Priority support"],
        cta: "Start 14-day Free Trial",
        highlight: true,
    },
    {
        name: "Agency",
        price: "$79",
        period: "/month",
        description: "For teams managing multiple brands at scale.",
        features: ["Everything in Pro", "5 team members", "Unlimited AI credits", "Custom AI personas", "Dedicated support"],
        cta: "Contact Sales",
        highlight: false,
    },
];

export default function Pricing() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });

    return (
        <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
            {/* Subtle radial */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,rgba(232,168,56,0.05),transparent)]" />

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
                        Pricing
                    </div>
                    <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                        Start free. Scale
                        <br />
                        <span className="text-accent">when you&apos;re ready.</span>
                    </h2>
                    <p className="mt-4 max-w-md text-muted">
                        No hidden fees. Cancel anytime.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div className="grid grid-cols-1 items-start gap-4 pt-4 md:grid-cols-3">
                    {pricingPlans.map((plan, i) => (
                        <PricingCard key={plan.name} plan={plan} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function PricingCard({ plan, index }: { plan: (typeof pricingPlans)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
            className={`relative ${plan.highlight ? "md:-mt-4" : ""}`}
        >
            {/* Badge for highlighted plan */}
            {plan.highlight && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 rounded-md bg-accent px-3 py-1 text-[11px] font-bold text-ink whitespace-nowrap font-display">
                    <SparklesIcon className="size-3" />
                    Most Popular
                </div>
            )}

            <div
                className={`relative flex flex-col gap-6 rounded-2xl border p-6 transition-all duration-300 ${
                    plan.highlight
                        ? "border-accent/30 bg-surface shadow-[0_0_30px_rgba(232,168,56,0.08)] pt-8"
                        : "border-border bg-surface hover:border-muted"
                }`}
            >
                {/* Plan name + price */}
                <div>
                    <div className={`mb-1.5 text-sm font-semibold font-display ${plan.highlight ? "text-accent" : "text-muted"}`}>
                        {plan.name}
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-4xl font-bold tracking-tight text-white font-display">{plan.price}</span>
                        <span className="mb-1.5 text-sm text-muted">{plan.period}</span>
                    </div>
                    <p className="mt-2.5 text-sm text-muted leading-relaxed">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2.5">
                    {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-3 text-sm">
                            <div className={`flex size-5 shrink-0 items-center justify-center rounded-md ${plan.highlight ? "bg-accent/15" : "bg-raised"}`}>
                                <CheckIcon className={`w-3 h-3 ${plan.highlight ? "text-accent" : "text-muted"}`} />
                            </div>
                            <span className={plan.highlight ? "text-text" : "text-muted"}>{f}</span>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <Link
                    to="/login"
                    className={`relative mt-auto rounded-lg px-6 py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                        plan.highlight
                            ? "bg-accent text-ink hover:shadow-[0_0_20px_rgba(232,168,56,0.3)]"
                            : "border border-border bg-raised text-text hover:border-muted hover:text-white"
                    }`}
                >
                    {plan.cta}
                </Link>
            </div>
        </motion.div>
    );
}
