const Footer = () => {
  return (
    <footer id="blog" className="bg-white/80 border-t border-white/70 py-16 mt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 text-sm text-foreground/70">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-primary text-white font-black text-lg flex items-center justify-center shadow-lg">
                ⊕
              </div>
              <div>
                <p className="text-lg font-semibold text-foreground">Cluely</p>
                <p className="text-xs uppercase tracking-[0.4em]">Meetings</p>
              </div>
            </div>
            <p>
              Meeting AI that helps during the call—not after. SOC 2, ISO 27001, HIPAA, GDPR, and CCPA compliant.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Use Cases</h4>
            <ul className="space-y-2">
              <li>Sales</li>
              <li>Support</li>
              <li>Consulting</li>
              <li>Recruiting</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Enterprise</h4>
            <ul className="space-y-2">
              <li>Security</li>
              <li>Vendor Profile</li>
              <li>ROI Calculator</li>
              <li>Book a Demo</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>Manifesto</li>
              <li>Press</li>
              <li>Careers</li>
              <li>Bug Bounty</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Support</h4>
            <ul className="space-y-2">
              <li>Help Center</li>
              <li>Contact Us</li>
              <li>Status</li>
              <li>Discord</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-3">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Data Processing</li>
              <li>Subprocessors</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-foreground/60 gap-4">
          <p>© {new Date().getFullYear()} Cluely. All systems operational.</p>
          <div className="flex gap-4">
            <span>Twitter</span>
            <span>Discord</span>
            <span>Instagram</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
