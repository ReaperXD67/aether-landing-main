import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, X, Zap, Shield, Brain, Clock } from "lucide-react";

const comparisonData = [
    {
        feature: "Context Awareness",
        traditional: "Keywords only",
        aether: "Full Semantic Understanding",
        icon: Brain,
    },
    {
        feature: "Processing Speed",
        traditional: "Post-call processing (Minutes)",
        aether: "Real-time Streaming (ms)",
        icon: Clock,
    },
    {
        feature: "Action Items",
        traditional: "Manual tagging required",
        aether: "Auto-detected & Assigned",
        icon: Zap,
    },
    {
        feature: "Data Privacy",
        traditional: "Standard Cloud Storage",
        aether: "Local-First & E2E Encrypted",
        icon: Shield,
    },
];

export const ComparisonSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    return (
        <section ref={containerRef} className="py-32 relative overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,255,255,0.1),transparent_70%)]"></div>

            <motion.div
                style={{ opacity, scale }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Why Choose <span className="text-primary">Aether</span>?
                    </h2>
                    <p className="text-blue-200/60 text-xl max-w-2xl mx-auto">
                        See how we stack up against traditional solutions.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-3 gap-4 mb-8 text-center pb-4 border-b border-white/10">
                        <div className="text-white/40 font-semibold uppercase tracking-wider text-sm">Feature</div>
                        <div className="text-white/40 font-semibold uppercase tracking-wider text-sm">Traditional AI</div>
                        <div className="text-primary font-bold uppercase tracking-wider text-sm shadow-[0_0_15px_rgba(0,255,255,0.3)] inline-block bg-primary/10 rounded-full py-1 px-4 mx-auto border border-primary/30">
                            Aether AI
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    <div className="space-y-6">
                        {comparisonData.map((item, index) => (
                            <ComparisonRow key={item.feature} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

const ComparisonRow = ({ item, index }: { item: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group"
        >
            {/* Feature Name */}
            <div className="flex items-center gap-3 text-white font-medium">
                <div className="p-2 rounded-lg bg-white/5 text-white/60 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-5 h-5" />
                </div>
                {item.feature}
            </div>

            {/* Traditional AI */}
            <div className="flex items-center gap-3 text-white/40 font-medium md:justify-center">
                <X className="w-4 h-4 text-red-500/50" />
                {item.traditional}
            </div>

            {/* Aether AI */}
            <div className="relative group/aether">
                <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover/aether:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-3 text-white font-bold md:justify-center bg-primary/10 border border-primary/20 rounded-xl p-3 shadow-[0_0_10px_rgba(0,255,255,0.1)] group-hover/aether:shadow-[0_0_20px_rgba(0,255,255,0.3)] group-hover/aether:border-primary/50 transition-all">
                    <Check className="w-4 h-4 text-primary" />
                    {item.aether}
                </div>
            </div>
        </motion.div>
    );
};
