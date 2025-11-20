import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "1",
    title: "Start Cluely",
    description: "Click Start Cluely before your meeting begins. It sits quietly on your screen—never joins as a participant.",
    visual: (
      <div className="step-visual start">
        <div className="cursor" />
        <div className="badge">Start Cluely</div>
      </div>
    ),
  },
  {
    number: "2",
    title: "End Cluely",
    description: "Tap Stop when you wrap. Cluely has already captured context, tasks, and smart suggestions in the background.",
    visual: (
      <div className="step-visual stop">
        <div className="control-bar">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="stop-btn">■</div>
      </div>
    ),
  },
  {
    number: "3",
    title: "Get notes",
    description: "Share gorgeous notes, action items, and follow-up emails seconds after the call—automatically.",
    visual: (
      <div className="step-visual notes">
        <div className="note-line" />
        <div className="note-line short" />
        <div className="note-line" />
        <div className="note-pill">Follow-up email</div>
      </div>
    ),
  },
];

const Testimonials = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="careers" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,82,255,0.06),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={sectionRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-all duration-1000 ${
            sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.6em] text-foreground/60 mb-4">Meeting notes in 3 steps</p>
          <h2 className="text-4xl md:text-5xl font-semibold">The easiest way to get beautiful, shareable meeting notes.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);

            return (
              <div
                key={step.number}
                ref={cardRef}
                className={`glass rounded-3xl p-8 border border-white/50 shadow-xl transition-all duration-700 ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="text-sm uppercase tracking-[0.4em] text-foreground/50 mb-4">Step {step.number}</div>
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-foreground/70 leading-relaxed mb-6">{step.description}</p>
                <div>{step.visual}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
