import { Button } from "@/components/ui/button";
import { Check, X, Shield, Eye, EyeOff, Lock, Server, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const comparisons = [
  {
    label: "Presence",
    other: "Joins as an obvious participant",
    ours: "Lives on your screen. Invisible to the call.",
    icon: EyeOff
  },
  {
    label: "Transcription",
    other: "Slow, often delayed after the call",
    ours: "Real-time transcript with <300ms latency",
    icon: Zap
  },
  {
    label: "Security",
    other: "Bot records entire meeting",
    ours: "On-device capture with SOC 2, ISO 27001, HIPAA",
    icon: Shield
  },
  {
    label: "Follow-up",
    other: "Manual writing required",
    ours: "Automatic summaries + emails seconds after",
    icon: Server
  },
];

const Security = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="security" className="py-32 relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,255,255,0.05),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-widest uppercase mb-6">
            <EyeOff className="w-3 h-3" /> No Meeting Bots
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How <span className="text-primary">AetherAI</span> stays <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">invisible and secure.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-24 max-w-6xl mx-auto">
          {/* Other AI Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-red-500/5 rounded-3xl blur-xl group-hover:bg-red-500/10 transition-colors"></div>
            <div className="relative bg-black/40 border border-red-500/20 rounded-3xl p-8 overflow-hidden backdrop-blur-sm h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-red-400 font-mono text-sm tracking-wider uppercase">Other AI Notetakers</span>
                <X className="w-5 h-5 text-red-500" />
              </div>

              {/* Visual Representation */}
              <div className="relative aspect-video bg-black/50 rounded-xl border border-white/5 mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-transparent">
                    <span className="text-xs text-white/50">User</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border-2 border-red-500 animate-pulse">
                    <span className="text-xs text-red-400 font-bold">BOT</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-transparent">
                    <span className="text-xs text-white/50">User</span>
                  </div>
                </div>
                <div className="absolute bottom-4 bg-red-500/90 text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce">
                  ⚠ Recording in progress
                </div>
              </div>

              <p className="text-gray-400 text-sm">
                Intrusive bots join your calls, record everything, and store data on third-party clouds. Visible to everyone.
              </p>
            </div>
          </motion.div>

          {/* Aether AI Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-xl group-hover:bg-primary/20 transition-colors"></div>
            <div className="relative bg-black/40 border border-primary/30 rounded-3xl p-8 overflow-hidden backdrop-blur-sm h-full shadow-[0_0_30px_rgba(0,255,255,0.1)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-primary font-mono text-sm tracking-wider uppercase">AetherAI Stealth</span>
                <Shield className="w-5 h-5 text-primary" />
              </div>

              {/* Visual Representation */}
              <div className="relative aspect-video bg-black/50 rounded-xl border border-primary/20 mb-6 flex items-center justify-center overflow-hidden group-hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,255,0.05)_50%)] bg-[size:100%_4px]"></div>
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-transparent">
                    <span className="text-xs text-white/50">User</span>
                  </div>
                  {/* Invisible Overlay */}
                  <div className="absolute w-full h-full border-2 border-primary/30 rounded-xl pointer-events-none">
                    <div className="absolute top-2 right-2 flex gap-1">
                      <span className="w-1 h-1 bg-primary rounded-full animate-ping"></span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center border-2 border-transparent">
                    <span className="text-xs text-white/50">User</span>
                  </div>
                </div>
                <div className="absolute bottom-4 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full font-bold backdrop-blur-md">
                  <Lock className="w-3 h-3 inline mr-1" /> Local Processing
                </div>
              </div>

              <p className="text-blue-100/80 text-sm">
                Zero bots. AetherAI lives locally on your device, capturing audio directly from the system. 100% private and invisible.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Comparison List */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {comparisons.map((line, index) => (
              <motion.div
                key={line.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="md:col-span-3 flex items-center gap-3 text-white/60 font-medium uppercase tracking-wider text-xs">
                  <line.icon className="w-4 h-4 text-primary/50" />
                  {line.label}
                </div>
                <div className="md:col-span-4 text-sm text-red-300/60 flex items-center gap-2">
                  <X className="w-4 h-4 shrink-0" />
                  {line.other}
                </div>
                <div className="md:col-span-5 text-sm text-white font-medium flex items-center gap-2 bg-primary/5 p-2 rounded-lg border border-primary/10 group-hover:border-primary/30 transition-colors">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {line.ours}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20 space-y-8">
          <p className="text-blue-200/60 text-lg">
            Trusted by teams who care about security and immaculate meeting notes.
          </p>
          <Button className="bg-white text-black px-10 py-6 text-lg font-bold rounded-full hover:bg-blue-50 transition-all shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]">
            Secure Your Meetings Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Security;
