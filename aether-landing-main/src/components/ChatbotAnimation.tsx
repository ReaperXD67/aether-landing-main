import { useEffect, useMemo, useRef, useState } from "react";

const conversation = [
  { sender: "User", tone: "text-foreground/70", text: "Can you recap the action items from this call?" },
  {
    sender: "Cluely",
    tone: "text-white",
    text: "Absolutely. 1) Send the pricing proposal. 2) Schedule the hardware walkthrough. 3) Share the benchmark deck with their ops lead.",
  },
  { sender: "User", tone: "text-foreground/70", text: "Anything else I should mention before we wrap?" },
  {
    sender: "Cluely",
    tone: "text-white",
    text: "Remind them we're already ingesting their requirements and confirm the next sync for Wednesday at 10am.",
  },
];

const TYPING_SPEED = 28;
const MESSAGE_PAUSE = 1600;

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
          return prev;
        }
        return activeMessage.text.slice(0, prev.length + 1);
      });
    }, TYPING_SPEED);

    return () => {
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  }, [activeMessage]);

  useEffect(() => {
    if (!isTyping) {
      pauseTimeoutRef.current = window.setTimeout(() => {
        setIndex((prev) => (prev + 1) % conversation.length);
      }, MESSAGE_PAUSE);
    }
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
    };
  }, [isTyping]);

  return (
    <div className="relative rounded-[40px] bg-gradient-to-br from-[#1d2a53] via-[#1b2442] to-[#0a1633] p-10 text-white overflow-hidden shadow-2xl border border-white/10 hero-glow w-full">
      <div className="absolute -top-24 -right-12 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-8 w-24 h-24 bg-[#5c80ff]/40 rounded-3xl blur-2xl" />
      <div className="relative space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60">Live assistant</p>
            <p className="text-lg font-semibold">Cluely Holo Chat</p>
          </div>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            300ms response
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-semibold text-white/70">Transcript feed</div>
          <div className="bg-white/5 rounded-2xl border border-white/10 p-4 space-y-4">
            <div className="text-xs uppercase tracking-[0.3em] text-white/50">real-time transcript</div>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-2xl bg-white/10 flex items-center justify-center text-sm font-semibold">You</div>
                <div className="text-sm text-white/80 leading-relaxed max-w-sm">
                  “So just to recap—you need new cabinets and lighting...”
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-2xl bg-primary/20 flex items-center justify-center text-sm font-semibold">AI</div>
                <div className="text-sm text-white/80 leading-relaxed max-w-sm">
                  “I'll send a quote within the hour. Let's do a kickoff call next Wednesday.”
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 rounded-3xl border border-white/20 p-5 space-y-4 floating">
          <div className="flex items-center justify-between text-white/70 text-sm">
            <span>Suggested reply</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Typing
            </span>
          </div>
          <div className="rounded-2xl bg-black/20 p-4 border border-white/10 min-h-[140px]">
            <div className={`text-xs uppercase tracking-[0.4em] mb-2 ${activeMessage.tone}`}>
              {activeMessage.sender}
            </div>
            <p className={`text-base leading-relaxed ${activeMessage.tone}`}>{displayed}</p>
            {isTyping && (
              <div className="mt-3 flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/50 animate-bounce delay-100" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/30 animate-bounce delay-200" />
              </div>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button className="text-xs uppercase tracking-[0.4em] text-white/60 hover:text-white transition">
              Ask • ⌘⏎
            </button>
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm">
              What should I say?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotAnimation;

