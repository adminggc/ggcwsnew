import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Vision from "@/components/vision";
import Mission from "@/components/mission";
import CoreValues from "@/components/core-values";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Vision />
      <Mission />
      <CoreValues />
      <Contact />
      <Footer />
    </div>
  );
}
