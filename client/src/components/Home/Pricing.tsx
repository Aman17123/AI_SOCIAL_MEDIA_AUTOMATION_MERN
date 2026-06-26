import { CheckIcon, CircleCheckBigIcon, SparklesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pricingPlans = [
    {
        name: "Starter",
        price: "Free",
        period: "",
        description: "Perfect for creators just getting started with social media automation.",
        features: ["2 social accounts", "10 scheduled posts/month", "AI content (5 credits/mo)", "Basic dashboard"],
        cta: "Get Started Free",
        highlight: false,
    },
    {
        name: "Pro",
        price: "$29",
        period: "/month",
        description: "Everything you need to grow and automate your social presence.",
        features: ["Unlimited accounts", "Unlimited scheduling", "AI content (200 credits/mo)", "Priority support"],
        cta: "Start 14-day Free Trial",
        highlight: true,
    },
    {
        name: "Agency",
        price: "$79",
        period: "/month",
        description: "For teams and agencies managing multiple brands at scale.",
        features: ["Everything in Pro", "5 team members", "Unlimited AI credits", "Custom AI personas", "Dedicated support"],
        cta: "Contact Sales",
        highlight: false,
    },
];

export default function Pricing() {
    const headRef = useRef<HTMLDivElement>(null);
    const headInView = useInView(headRef, { once: true, margin: "-60px" });
    const cardsRef = useRef<HTMLDivElement>(null);
    const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

    return (
        <section id="pricing" className="relative overflow-hidden bg-white py-24 sm:py-32">
            {/* Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(239,68,68,0.08),transparent)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fbfaf8_100%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    ref={headRef}
                    initial={{ opacity: 0, y: 24 }}
                    animate={headInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-red-500/8 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500">
                        <CircleCheckBigIcon className="size-3" />
                        Simple pricing
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Plans for every stage
                        <br />
                        <span className="italic text-red-400">of growth</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-slate-500">
                        Start free, upgrade when you're ready. Cancel anytime — no hidden fees.
                    </p>
                </motion.div>

                {/* Pricing cards */}
                <div ref={cardsRef} className="grid grid-cols-1 items-start gap-5 pt-5 md:grid-cols-3">
                    {pricingPlans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 32 }}
                            animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                            className={`relative ${plan.highlight ? "md:-mt-5" : ""}`}
                        >
                            {/* Badge sits OUTSIDE the overflow-hidden card so it's never clipped */}
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-500 to-rose-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-red-500/30 whitespace-nowrap">
                                    <SparklesIcon className="size-3" />
                                    Most Popular
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative flex flex-col gap-6 overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                                    plan.highlight
                                        ? "border-slate-700/60 bg-slate-950 text-white shadow-2xl shadow-slate-950/25 pt-10 md:pb-12"
                                        : "border-slate-200/80 bg-white/90 text-slate-950 shadow-sm shadow-slate-200/70 hover:border-red-100 hover:shadow-xl hover:shadow-red-100/60"
                                }`}
                            >
                            {plan.highlight && (
                                <>
                                    {/* Glow layers */}
                                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-red-500/20 to-transparent" />
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_30%_at_50%_0%,rgba(239,68,68,0.25),transparent)]" />
                                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-400/60 to-transparent" />
                                </>
                            )}


                            <div className="relative">
                                <div className={`mb-1.5 text-sm font-semibold ${plan.highlight ? "text-red-300" : "text-red-500"}`}>
                                    {plan.name}
                                </div>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                                    <span className={`mb-1.5 text-sm font-medium ${plan.highlight ? "text-slate-400" : "text-slate-400"}`}>
                                        {plan.period}
                                    </span>
                                </div>
                                <p className={`mt-2.5 text-sm leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="relative space-y-3">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-3 text-sm">
                                        <div className={`flex size-5 shrink-0 items-center justify-center rounded-full ${plan.highlight ? "bg-red-500/20 ring-1 ring-red-400/30" : "bg-red-50 ring-1 ring-red-100"}`}>
                                            <CheckIcon className={`w-3 h-3 ${plan.highlight ? "text-red-300" : "text-red-500"}`} />
                                        </div>
                                        <span className={plan.highlight ? "text-slate-300" : "text-slate-600"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/#"
                                className={`relative mt-auto overflow-hidden rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-all duration-300 ${
                                    plan.highlight
                                        ? "bg-white text-slate-950 shadow-lg shadow-white/10 hover:bg-red-50"
                                        : "bg-red-500 text-white shadow-lg shadow-red-500/20 hover:-translate-y-0.5 hover:bg-red-600 hover:shadow-red-500/35"
                                }`}
                            >
                                {plan.cta}
                             </Link>
                            </div>{/* end inner card div */}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
