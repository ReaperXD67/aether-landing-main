import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ChatbotAnimation from "@/components/ChatbotAnimation";

const quickLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
];

const stats = [
  { label: "Languages", value: "12+", description: "Real-time transcription" },
  { label: "Response time", value: "300ms", description: "Fastest live answers" },
  { label: "Accuracy", value: "95%", description: "Trusted by teams" },
];

const Hero = () => {
  const { ref: copyRef, isVisible: copyVisible } = useScrollAnimation(0.15);
  const { ref: mockRef, isVisible: mockVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center gap-12">

          <div
            ref={copyRef}
            className={`space-y-8 max-w-4xl transition-all duration-[1100ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              copyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-primary shadow-lg shadow-white/30">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              #1 AI assistant for meetings
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Takes perfect notes, answers questions in real-time, and makes you the most
              prepared person on every call.
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Cluely lives on your screen—undetectable to everyone else—so you can stay in
              the moment while AI captures decisions, drafts follow-ups, and tells you
              exactly what to say next.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-crystal hero-glow px-10 py-5 text-base md:text-lg font-semibold">
                Get for Windows
              </Button>
              <Button
                variant="outline"
                className="glass border border-white/70 px-10 py-5 text-base md:text-lg font-semibold text-primary hover:text-white hover:bg-primary/90 transition-all duration-500 hover:shadow-xl"
              >
                Watch demo <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 justify-center text-left">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-[140px]">
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="text-sm font-semibold text-foreground/60">{stat.label}</p>
                  <p className="text-xs text-foreground/60">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={mockRef}
            className={`w-full max-w-4xl transition-all duration-[1100ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              mockVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <ChatbotAnimation />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
