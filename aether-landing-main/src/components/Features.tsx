import { Brain, Mail, NotebookPen, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const featureVisuals: Record<string, JSX.Element> = {
  ask: (
    <div className="feature-visual bg-gradient-to-br from-[#14306b] via-[#1d1850] to-[#090f2b]">
      <div className="bubble floating delay-75">What should I say?</div>
      <div className="response">
        “Share the integration checklist and confirm Wednesday’s kickoff.”
      </div>
      <div className="cursor" />
    </div>
  ),
  emails: (
    <div className="feature-visual bg-gradient-to-br from-[#f7f3ff] to-[#ddecff] text-foreground">
      <div className="email-card floating">
        <div className="email-header">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="ml-auto text-xs font-semibold">Follow-up</span>
        </div>
        <p className="email-body">
          Hi team, thanks for the call. Here’s the recap and next steps...
        </p>
      </div>
    </div>
  ),
  people: (
    <div className="feature-visual bg-gradient-to-br from-[#041c2c] via-[#08263b] to-[#0b2948] text-white">
      <div className="profile-card floating delay-100">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60">Next up</p>
        <p className="text-lg font-semibold">Alicia Nguyen</p>
        <p className="text-sm text-white/70">VP Operations · Lumenor</p>
        <div className="mt-4 text-xs text-white/60">Key topics</div>
        <ul className="text-sm space-y-1 text-white/80">
          <li>• Deployment timeline</li>
          <li>• Security checklist</li>
        </ul>
      </div>
    </div>
  ),
  notes: (
    <div className="feature-visual bg-gradient-to-br from-white to-[#f2f6ff] text-foreground">
      <div className="note-card floating delay-150">
        <p className="text-sm font-semibold">Meeting Summary</p>
        <ul className="mt-3 text-sm space-y-2 text-foreground/70">
          <li>✔ Decision: rollout pilot to sales pod A.</li>
          <li>✔ Action: send procurement package.</li>
          <li>✔ Next call: Thursday · 10am PST.</li>
        </ul>
      </div>
    </div>
  ),
};

const Features = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="enterprise" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`max-w-4xl mx-auto text-center mb-20 transition-all duration-1000 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.6em] text-foreground/60 mb-4">
            Four ways we make your meetings better
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Meeting AI that helps during the call, not after.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);

            return (
              <div
                key={feature.title}
                ref={cardRef}
                className={`glass rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-700 ${
                  cardVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>{featureVisuals[feature.id]}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-foreground/70 mb-5">{feature.description}</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {feature.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
