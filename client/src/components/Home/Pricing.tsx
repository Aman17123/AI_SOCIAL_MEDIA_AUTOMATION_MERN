import { CheckIcon, CircleCheckBigIcon } from "lucide-react";
import { Link } from "react-router-dom";

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
    return (
        <section id="pricing" className="relative overflow-hidden bg-white py-24 sm:py-28">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,68,68,0.1),transparent_40%),linear-gradient(180deg,#ffffff_0%,#fbfaf8_100%)]" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-red-500/15 bg-red-500/10 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-red-500 shadow-sm shadow-red-100/70">
                        <CircleCheckBigIcon className="size-3" />
                        Simple pricing
                    </div>
                    <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                        Plans for every stage
                        <br />
                        <span className="text-red-400 italic">of growth</span>
                    </h2>
                    <p className="mx-auto mt-5 max-w-md text-slate-500">Start free, upgrade when you're ready. Cancel anytime — no hidden fees.</p>
                </div>

                <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-3">
                    {pricingPlans.map((plan) => (
                        <div key={plan.name} className={`relative flex min-h-[430px] flex-col gap-6 overflow-hidden rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 ${plan.highlight ? "bg-slate-950 text-white border-slate-800 shadow-2xl shadow-slate-950/20 md:-mt-4 md:min-h-[462px]" : "bg-white/85 text-slate-950 border-slate-200/80 shadow-sm shadow-slate-200/70 hover:border-red-100 hover:shadow-xl hover:shadow-red-100/70"}`}>
                            {plan.highlight && (
                                <>
                                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-red-500/25 to-transparent" />
                                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-lg shadow-slate-950/20">Most Popular</div>
                                </>
                            )}
                            <div>
                                <div className={`mb-1 text-sm font-semibold ${plan.highlight ? "text-red-200" : "text-red-500"}`}>{plan.name}</div>
                                <div className="flex items-end gap-1">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className={`mb-1.5 text-sm ${plan.highlight ? "text-slate-400" : "text-slate-400"}`}>{plan.period}</span>
                                </div>
                                <p className={`mt-2 text-sm leading-relaxed ${plan.highlight ? "text-slate-300" : "text-slate-500"}`}>{plan.description}</p>
                            </div>

                            <ul className="space-y-2.5">
                                {plan.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2.5 text-sm">
                                        <div className={`flex size-4 shrink-0 items-center justify-center rounded-full ${plan.highlight ? "bg-red-500" : "bg-red-50"}`}>
                                            <CheckIcon className={`w-2.5 h-2.5 ${plan.highlight ? "text-white" : "text-red-500"}`} />
                                        </div>
                                        <span className={plan.highlight ? "text-slate-200" : "text-slate-600"}>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/#" className={`mt-auto rounded-full px-6 py-3 text-center text-sm font-semibold transition-all duration-300 ${plan.highlight ? "bg-white text-slate-950 shadow-lg shadow-white/10 hover:bg-red-50" : "bg-red-500 text-white shadow-lg shadow-red-500/20 hover:bg-red-600 hover:shadow-red-500/35"}`}>
                                {plan.cta}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
