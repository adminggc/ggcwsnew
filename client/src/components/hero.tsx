import { Button } from "@/components/ui/button";

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
      {/* Nordic cityscape background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(146, 45, 29, 0.4), rgba(146, 45, 29, 0.4)), url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Premium Wellbeing
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-warm-beige mb-8 font-light">
          Excellence in Healthcare & Corporate Solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={() => scrollToSection('services')}
            className="bg-burgundy hover:bg-dark-burgundy text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Services
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
