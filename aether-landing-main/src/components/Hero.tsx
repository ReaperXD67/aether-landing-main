import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { ChatbotAnimation } from "./ChatbotAnimation";

const stats = [
  { label: "Languages", value: "12+", description: "Supported" },
  { label: "Response Time", value: "300ms", description: "Average" },
  { label: "Accuracy", value: "99.9%", description: "Uptime" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Creative Scrolling Animated Background - Cyber Grid & Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)]"></div>

        {/* Moving Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] animate-[grid-move_20s_linear_infinite]"></div>

        {/* Floating Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.2
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [null, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        <div className="flex flex-col items-center text-center gap-16">
          <div className="space-y-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-primary text-sm font-medium px-6 py-2.5 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(0,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
              <span className="tracking-wide uppercase text-xs font-bold">Next Gen AI Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tight"
            >
              Transform Your Business <br />
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-blue-500 animate-gradient-x">
                  With AI Power
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600 blur-3xl opacity-20 -z-10"></span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-100/60 max-w-2xl mx-auto leading-relaxed font-light"
            >
              Experience the future of automation with our cutting-edge AI solutions. Let us handle the complex while you focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Button className="relative overflow-hidden group px-10 py-7 text-lg font-bold bg-white text-black hover:bg-white/90 transition-all transform hover:-translate-y-1 shadow-[0_0_40px_rgba(255,255,255,0.3)] rounded-full">
                <span className="relative z-10 flex items-center">
                  Get Started Now
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button
                variant="outline"
                className="group px-10 py-7 text-lg font-bold border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all rounded-full backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  Watch Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 pt-16"
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="relative group"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition duration-500"></div>
                  <div className="relative bg-black/40 backdrop-blur-xl p-6 rounded-2xl border border-white/10 group-hover:border-primary/50 transition-all duration-300">
                    <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-blue-200/60 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Chatbot Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="w-full max-w-5xl mx-auto -mt-12 relative z-20"
          >
            <ChatbotAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
