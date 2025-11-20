import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navLinks = [
  { label: "Pricing", href: "#pricing" },
  { label: "Enterprise", href: "#enterprise" },
  { label: "Careers", href: "#careers" },
  { label: "Blog", href: "#blog" },
];

const Navbar = () => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setCtaVisible(current > 140);

      setHidden(current > 24);

      lastScrollY.current = current;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-40 bg-transparent transition-transform duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/70 text-primary font-black text-lg flex items-center justify-center shadow-lg">
                ⊕
              </div>
              <div>
                <p className="text-xl font-semibold tracking-tight">Cluely</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Meetings</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <span className="text-foreground/70">Shimmer</span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <Button variant="ghost" className="text-sm font-medium hover:bg-white/60 transition-colors">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-4 right-6 z-50 transition-all duration-500 ${
          ctaVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <Button className="btn-crystal flex items-center gap-2 font-semibold px-5 py-2">
          <Monitor className="w-4 h-4" />
          Get for Windows
        </Button>
      </div>
    </>
  );
};

export default Navbar;
