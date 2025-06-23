
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";
import HowItWorks from "@/components/HowItWorks";
import BenefitsSection from "@/components/BenefitsSection";
import WhyChoose from "@/components/WhyChoose";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead />
      <div className="min-h-screen">
        <main role="main">
          <Hero />
          <Technologies />
          <HowItWorks />
          <BenefitsSection />
          <WhyChoose />
          <CallToAction />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
