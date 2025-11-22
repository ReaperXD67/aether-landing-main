import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import Footer from "@/components/Footer";
import { ParallaxSection } from "@/components/ParallaxSection";
import { ScrollingShowcase } from "@/components/ScrollingShowcase";
import { ComparisonSection } from "@/components/ComparisonSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxSection />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <ScrollingShowcase />
        <Features />
        <ComparisonSection />
        <Testimonials />
        <Security />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
