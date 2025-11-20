import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { ParallaxSection } from "@/components/ParallaxSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxSection />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
