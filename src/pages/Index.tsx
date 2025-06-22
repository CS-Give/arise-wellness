
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Technologies />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
