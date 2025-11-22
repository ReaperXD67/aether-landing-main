import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Starter",
        price: "$0",
        description: "Perfect for individuals and hobbyists.",
        features: [
            "5 AI Meeting Summaries",
            "Basic Transcription",
            "Email Recap",
            "7-day History"
        ],
        highlight: false
    },
    {
        name: "Pro",
        price: "$29",
        description: "For power users and small teams.",
        features: [
            "Unlimited AI Summaries",
            "Real-time Transcription",
            "Advanced Analytics",
            "CRM Integration",
            "Priority Support"
        ],
        highlight: true
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations requiring control.",
        features: [
            "Everything in Pro",
            "SSO & Admin Controls",
            "Custom Data Retention",
            "Dedicated Success Manager",
            "On-premise Deployment"
        ],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-stars opacity-50" />
            <Navbar />

            <main className="container mx-auto px-6 pt-32 pb-20 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                    >
                        Simple, transparent <br />
                        <span className="text-primary">pricing.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-blue-200/60"
                    >
                        Choose the plan that fits your needs. No hidden fees.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className={`relative p-8 rounded-3xl border ${plan.highlight
                                    ? "bg-primary/10 border-primary/50 shadow-[0_0_50px_rgba(0,255,255,0.2)]"
                                    : "bg-white/5 border-white/10 hover:border-white/20"
                                } backdrop-blur-xl transition-all duration-300 group`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold rounded-full shadow-lg">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-4 flex items-baseline gap-1">
                                {plan.price}
                                {plan.price !== "Custom" && <span className="text-lg text-white/50 font-normal">/month</span>}
                            </div>
                            <p className="text-white/60 mb-8">{plan.description}</p>

                            <Button
                                className={`w-full py-6 text-lg font-bold rounded-xl mb-8 transition-all ${plan.highlight
                                        ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
                                        : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                            >
                                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                            </Button>

                            <ul className="space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                                        <div className={`p-1 rounded-full ${plan.highlight ? "bg-primary/20 text-primary" : "bg-white/10 text-white/60"}`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Pricing;
