import { useEffect, useState } from "react";

export const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-cluely-sky" />

      <div
        className="absolute top-16 right-[18%] w-36 h-36 rounded-full bg-[#ffeacc] sun-glow opacity-90"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      />

      <div
        className="absolute top-32 left-10 w-60 h-20 rounded-full bg-white/55 blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="absolute top-48 left-1/3 w-72 h-24 rounded-full bg-white/40 blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.06}px)`,
        }}
      />
      <div
        className="absolute bottom-28 left-[-10%] w-[55%] h-[38vh] opacity-75"
        style={{
          background:
            "linear-gradient(180deg, rgba(91,135,209,0.65) 0%, rgba(64,102,167,0.9) 100%)",
          clipPath: "polygon(0% 100%, 15% 70%, 32% 72%, 52% 38%, 78% 56%, 100% 100%)",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />
      <div
        className="absolute bottom-10 right-[-12%] w-[65%] h-[42vh] opacity-65"
        style={{
          background:
            "linear-gradient(180deg, rgba(58,90,160,0.8) 0%, rgba(33,60,116,0.95) 100%)",
          clipPath: "polygon(0% 100%, 10% 60%, 28% 72%, 46% 42%, 64% 60%, 86% 36%, 100% 100%)",
          transform: `translateY(${scrollY * 0.04}px)`,
        }}
      />

      <div
        className="absolute bottom-0 inset-x-0 h-36 bg-white/95"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      />
    </div>
  );
};
