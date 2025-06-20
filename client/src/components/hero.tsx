import { Button } from "@/components/ui/button";
import heroBackground from "@assets/rectangle_2_1750394780351.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 64;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Your authentic background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(146, 45, 29, 0.3), rgba(146, 45, 29, 0.3)), url(${heroBackground})`
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          GG Corporation
          <span className="block text-warm-beige text-3xl sm:text-4xl lg:text-6xl mt-2">
            Vietnam
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-warm-beige mb-8 font-light max-w-4xl mx-auto leading-relaxed">
          A pioneering ecosystem in the field of Premium Well‑being, promoting sustainable health development 
          as the foundation of a prosperous life—nurturing the body, mind, and inner strength for sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-burgundy hover:bg-dark-burgundy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Explore Our Services
          </Button>
          <Button 
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="border-2 border-white text-white hover:bg-white hover:text-burgundy px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
