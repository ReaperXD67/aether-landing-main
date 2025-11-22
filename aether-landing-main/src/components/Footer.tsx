import { Github, Twitter, Instagram, Disc, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="footer" className="relative pt-24 pb-12 overflow-hidden border-t border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 shadow-[0_0_30px_rgba(0,255,255,0.5)]"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/40 transition-all duration-500"></div>
                <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white font-bold text-xl flex items-center justify-center shadow-lg border border-white/20">
                  <span>AI</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-wide">
                  Aether<span className="text-primary">AI</span>
                </span>
                <p className="text-xs text-blue-200/60 tracking-widest uppercase mt-0.5">Future Intelligence</p>
              </div>
            </div>
            <p className="text-blue-100/60 leading-relaxed max-w-sm">
              Empowering enterprises with next-generation AI that integrates seamlessly into your workflow. Secure, scalable, and stunningly efficient.
            </p>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Button size="icon" variant="ghost" className="relative rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/5 hover:border-primary/50">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Button size="icon" variant="ghost" className="relative rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/5 hover:border-primary/50">
                  <Github className="w-5 h-5" />
                </Button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Button size="icon" variant="ghost" className="relative rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/5 hover:border-primary/50">
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Button size="icon" variant="ghost" className="relative rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/5 hover:border-primary/50">
                  <Disc className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Use Cases</h4>
            <ul className="space-y-3">
              {["Sales Intelligence", "Customer Support", "Strategic Consulting", "Talent Acquisition"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Enterprise</h4>
            <ul className="space-y-3">
              {["Security & Compliance", "Vendor Profile", "ROI Calculator", "Book a Demo"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press Kit", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100/60 hover:text-primary transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="font-bold text-white text-lg">Stay Updated</h4>
            <p className="text-blue-100/60 text-sm">Get the latest AI insights delivered to your inbox.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary hover:text-black transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/40 text-sm">
            © {new Date().getFullYear()} AetherAI Inc. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-blue-100/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
