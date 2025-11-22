import { Brain, Mail, NotebookPen, Users, Check, X, Zap, Shield, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";

const features = [
  {
    id: "ask",
    icon: Brain,
    title: "Ask AI",
    description: "AI that answers questions for you, live in every meeting.",
    details: ["Understands your screen & transcript", "Real-time call guidance"],
  },
  {
    id: "emails",
    icon: Mail,
    title: "Instant follow-up emails",
    description: "Send perfectly drafted recaps seconds after the call ends.",
    details: ["Auto-detected action items", "One-click send from your inbox"],
  },
  {
    id: "people",
    icon: Users,
    title: "Know who you're meeting",
    description: "Get instant dossiers with roles, history, and talking points.",
    details: ["Works for prospects & teammates", "Delivered before every call"],
  },
  {
    id: "notes",
    icon: NotebookPen,
    title: "Beautiful meeting notes",
    description: "Share-ready notes generated automatically while you talk.",
    details: ["Timestamped decisions", "Links to everything discussed"],
  },
];

const AnimatedChat = () => (
  <div className="feature-visual bg-gradient-to-br from-[#14306b] via-[#1d1850] to-[#090f2b] relative overflow-hidden group perspective-1000">
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

    {/* 3D Tilt Container */}
    <div className="space-y-4 relative z-10 p-4 transition-transform duration-500 group-hover:rotate-y-12 group-hover:rotate-x-6 transform-style-3d">
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-2xl rounded-tl-none p-4 max-w-[80%] shadow-lg transform transition-all duration-300 group-hover:translate-z-10"
      >
        <p className="text-sm text-white/90">What's the status of the Q3 roadmap?</p>
      </motion.div>

      <motion.div
        className="bg-primary/20 backdrop-blur-md border border-primary/30 rounded-2xl rounded-tr-none p-4 ml-auto max-w-[80%] shadow-lg transform transition-all duration-300 group-hover:translate-z-20"
      >
        <div className="flex space-x-1">
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-100"></span>
          <span className="w-2 h-2 bg-primary rounded-full animate-bounce delay-200"></span>
        </div>
        <p className="text-sm text-white/90 mt-2 hidden group-hover:block animate-fade-in">
          On track. Beta launch scheduled for Oct 15th.
        </p>
      </motion.div>
    </div>

    {/* Holographic Overlay */}
    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
  </div>
);

const AnimatedEmail = () => (
  <div className="feature-visual bg-gradient-to-br from-[#f7f3ff] to-[#ddecff] text-foreground relative overflow-hidden group perspective-1000">
    <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-marquee"></div>

    <div className="email-card floating group-hover:scale-105 transition-transform duration-500 relative z-10 bg-white shadow-xl rounded-xl p-4 border border-gray-100 group-hover:rotate-y-[-5deg] transform-style-3d">
      <div className="email-header flex items-center gap-2 mb-4 border-b border-gray-100 pb-2">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-auto text-xs font-semibold text-gray-500 group-hover:text-primary transition-colors">Drafting...</span>
      </div>

      <div className="space-y-3">
        <div className="h-2 bg-gray-200 rounded w-3/4 group-hover:bg-primary/20 transition-colors duration-300"></div>
        <div className="h-2 bg-gray-200 rounded w-full group-hover:bg-primary/20 transition-colors duration-300 delay-75"></div>
        <div className="h-2 bg-gray-200 rounded w-5/6 group-hover:bg-primary/20 transition-colors duration-300 delay-150"></div>
      </div>

      <div className="mt-6 flex justify-end">
        <div className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-md shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2">
          Send <SendIcon className="w-3 h-3" />
        </div>
      </div>
    </div>

    {/* Particle Effects */}
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:animate-ping" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${i * 0.2}s` }}></div>
      ))}
    </div>
  </div>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
);

const featureVisuals: Record<string, JSX.Element> = {
  ask: <AnimatedChat />,
  emails: <AnimatedEmail />,
  people: (
    <div className="feature-visual bg-gradient-to-br from-[#041c2c] via-[#08263b] to-[#0b2948] text-white overflow-hidden group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent)] animate-pulse-slow"></div>

      {/* Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/50 shadow-[0_0_15px_rgba(0,255,255,0.8)] z-20 opacity-0 group-hover:opacity-100 group-hover:animate-scan"></div>

      <div className="profile-card floating delay-100 relative z-10 border border-white/10 bg-black/40 backdrop-blur-xl p-4 rounded-xl group-hover:border-primary/50 transition-colors duration-300">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 ring-2 ring-white/20 group-hover:ring-primary transition-all"></div>
          <div>
            <p className="text-base font-bold group-hover:text-primary transition-colors">Alicia Nguyen</p>
            <p className="text-xs text-white/60">VP Ops · Lumenor</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-white/40 group-hover:text-white/80 transition-colors">
            <Globe className="w-3 h-3" /> <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-white/40 group-hover:text-white/80 transition-colors">
            <Zap className="w-3 h-3" /> <span>Decision Maker</span>
          </div>
        </div>
      </div>
    </div>
  ),
  notes: (
    <div className="feature-visual bg-gradient-to-br from-white to-[#f2f6ff] text-foreground overflow-hidden group">
      <div className="note-card floating delay-150 relative bg-white p-6 rounded-xl shadow-lg border border-gray-100 group-hover:scale-105 transition-transform duration-300">
        <div className="absolute -right-4 -top-4 w-16 h-16 bg-yellow-400/20 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
        <p className="text-sm font-bold mb-4 flex items-center gap-2">
          <NotebookPen className="w-4 h-4 text-primary" /> Live Notes
        </p>
        <ul className="space-y-3">
          {[1, 2, 3].map((i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 text-xs text-gray-600 group-hover:text-gray-900 transition-colors"
            >
              <span className={`mt-0.5 w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-green-500' : 'bg-gray-300 group-hover:bg-primary transition-colors delay-100'}`}></span>
              <span className="h-2 bg-gray-100 rounded w-full group-hover:bg-gray-200 transition-colors"></span>
            </motion.li>
          ))}
        </ul>

        {/* Magic Pen Effect */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg text-white">
            <Check className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  ),
};

const Features = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-32 relative overflow-hidden bg-black/40">
      <div className="absolute inset-0 bg-stars opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-24 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-6 inline-block shadow-[0_0_15px_rgba(0,255,255,0.3)]">
            Intelligence
          </span>
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-6">
            Meeting AI that helps <br />
            <span className="text-primary">during the call</span>, not after.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);

            return (
              <div
                key={feature.title}
                ref={cardRef}
                className={`group relative rounded-[2rem] p-1 transition-all duration-700 ${cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-[2rem] opacity-100 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-purple-500/50 to-blue-500/50 rounded-[2rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                <div className="relative h-full bg-[#0A0F1C] rounded-[1.9rem] p-8 overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
                  <div className="mb-8 relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-white/60 leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                    {featureVisuals[feature.id]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
