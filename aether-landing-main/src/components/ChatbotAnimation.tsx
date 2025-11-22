import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const conversation = [
  {
    sender: "AI",
    tone: "text-blue-100",
    text: "Initializing system... Welcome to AetherAI.",
    delay: 0.5
  },
  {
    sender: "AI",
    tone: "text-blue-100",
    text: "I can optimize your workflow with 99.9% efficiency.",
    delay: 1.5
  },
  {
    sender: "AI",
    tone: "text-cyan-300",
    text: "Shall we begin the transformation?",
    delay: 2.5,
    highlight: true
  }
];

const TYPING_SPEED = 20;
const MESSAGE_PAUSE = 2000;

const FloatingBubble = ({ delay, children, className }: { delay: number; children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ y: 20, opacity: 0, scale: 0.8 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

export const ChatbotAnimation = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const typingIntervalRef = useRef<number | null>(null);
  const pauseTimeoutRef = useRef<number | null>(null);

  const activeMessage = useMemo(() => conversation[index], [index]);

  useEffect(() => {
    setDisplayed("");
    setIsTyping(true);

    typingIntervalRef.current = window.setInterval(() => {
      setDisplayed((prev) => {
        if (prev.length >= activeMessage.text.length) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
          setIsTyping(false);

          // Move to next message after delay
          pauseTimeoutRef.current = window.setTimeout(() => {
            setIndex((prev) => (prev + 1) % conversation.length);
          }, MESSAGE_PAUSE) as unknown as number;

          return prev;
        }
        return activeMessage.text.slice(0, prev.length + 1);
      });
    }, TYPING_SPEED);

    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [activeMessage.text]);

  useEffect(() => {
    if (!isTyping) {
      pauseTimeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % conversation.length);
      }, MESSAGE_PAUSE);
    }
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [isTyping]);

  return (
    <div className="relative h-[500px] md:h-[600px] w-full flex items-center justify-center perspective-1000">
      {/* Holographic Base Glow - Larger & Cooler */}
      <div className="absolute bottom-0 w-full md:w-3/4 h-32 bg-primary/10 blur-[120px] rounded-full animate-pulse-slow"></div>

      {/* Floating Elements - Responsive positioning */}
      <FloatingBubble delay={0.2} className="-top-4 left-4 md:-top-12 md:left-10">
        <div className="w-12 h-12 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,100,255,0.2)] animate-float">
          <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-blue-400/50 blur-md"></div>
        </div>
      </FloatingBubble>

      <FloatingBubble delay={0.5} className="top-20 right-4 md:top-10 md:right-10">
        <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.2)] animate-float" style={{ animationDelay: '1s' }}>
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        </div>
      </FloatingBubble>

      {/* Main Interface Container - Much Larger */}
      <motion.div
        initial={{ y: 60, opacity: 0, rotateX: 10 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl px-4"
      >
        <div className={`
          relative bg-black/60 backdrop-blur-2xl 
          rounded-[2rem] p-6 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.6)] 
          border border-white/10 overflow-hidden
          ${activeMessage.highlight ? 'ring-1 ring-primary/50 shadow-[0_0_50px_rgba(0,255,255,0.15)]' : ''}
        `}>
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

          {/* Header */}
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center space-x-6">
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg relative z-10">
                  <span className="text-white font-bold text-2xl md:text-3xl">AI</span>
                </div>
                <div className="absolute -inset-2 bg-primary/40 rounded-2xl blur-lg animate-pulse"></div>
              </div>
              <div>
                <h3 className="font-bold text-white text-xl md:text-2xl tracking-wide">AetherAI <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full ml-2 border border-primary/30 align-middle">ONLINE</span></h3>
                <p className="text-sm text-blue-200/60 font-mono mt-1">SYSTEM_READY // V.2.0.4</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-4 h-4 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-4 h-4 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
          </div>

          {/* Message Area */}
          <div className="min-h-[120px] md:min-h-[160px] relative z-20 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <div className="flex items-start space-x-4">
                  <div className={`text-2xl md:text-4xl font-light leading-relaxed ${activeMessage.tone} drop-shadow-[0_0_15px_rgba(0,200,255,0.4)]`}>
                    {displayed}
                    <span className="inline-block w-3 h-8 md:h-10 bg-primary/80 ml-2 animate-pulse align-middle"></span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer / Input Simulation */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 flex items-center justify-between opacity-60">
            <div className="flex space-x-3">
              <div className="h-3 w-24 bg-white/10 rounded-full"></div>
              <div className="h-3 w-12 bg-white/10 rounded-full"></div>
            </div>
            <div className="text-xs font-mono text-primary/60">PROCESSING_REQUEST...</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatbotAnimation;
