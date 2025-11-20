import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const comparisons = [
  {
    label: "Presence",
    other: "Joins as an obvious participant",
    ours: "Lives on your screen. Invisible to the call.",
  },
  {
    label: "Transcription",
    other: "Slow, often delayed after the call",
    ours: "Real-time transcript with <300ms latency",
  },
  {
    label: "Security",
    other: "Bot records entire meeting",
    ours: "On-device capture with SOC 2, ISO 27001, HIPAA",
  },
  {
    label: "Follow-up",
    other: "Manual writing required",
    ours: "Automatic summaries + emails seconds after",
  },
];

const Pricing = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.5em] text-foreground/60 mb-4">
            No meeting bots. 100% undetectable.
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">How Cluely stays invisible and secure.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="comparison-visual other">
            <div className="badge">Other AI notetakers</div>
            <div className="window">
              <div className="window-header">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="window-body">
                <div className="avatar-group">
                  <div className="avatar" />
                  <div className="avatar" />
                  <div className="avatar" />
                </div>
                <p className="text-sm text-white/80">Recording as a participant...</p>
                <div className="warning-banner">
                  <span>Bot joined meeting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="comparison-visual cluely">
            <div className="badge">Cluely</div>
            <div className="window holo">
              <div className="floating-chip">
                <span className="dot dot-green" />
                Invisible overlay
              </div>
              <div className="holo-lines">
                <span />
                <span />
                <span />
              </div>
              <div className="timeline">
                <span className="marker" />
                <span className="marker" />
                <span className="marker" />
              </div>
              <p className="text-sm text-white/80 mt-4">Transcribing locally • No meeting bots</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-[32px] p-8 border border-white/50 shadow-2xl">
          <div className="grid grid-cols-3 text-xs uppercase font-semibold text-foreground/60 tracking-[0.3em] mb-6">
            <span></span>
            <span className="text-center">Other AI Notetakers</span>
            <span className="text-center text-primary">Cluely</span>
          </div>

          <div className="space-y-6">
            {comparisons.map((line) => (
              <div key={line.label} className="grid grid-cols-3 gap-6 items-center py-4 border-t border-white/30">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-foreground/40">{line.label}</p>
                <div className="text-sm text-foreground/70 flex items-center gap-3">
                  <Minus className="w-4 h-4 text-foreground/50" />
                  <span>{line.other}</span>
                </div>
                <div className="text-sm text-primary font-semibold flex items-center gap-3">
                  <Check className="w-4 h-4" />
                  <span>{line.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-foreground/70">
            Trusted by teams who care about security and immaculate meeting notes.
          </p>
          <Button className="bg-primary text-white px-8 py-6 text-lg font-semibold hero-glow">
            Try Cluely on your next meeting
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
