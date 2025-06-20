import { Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
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
    <footer className="bg-burgundy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4">GG Corporation Vietnam</h3>
            <p className="text-warm-beige mb-6 leading-relaxed">
              Leading the way in premium wellbeing solutions, delivering excellence across healthcare, automotive, and technology sectors.
            </p>
            <div className="flex space-x-4">
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Facebook size={20} />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Linkedin size={20} />
              </Button>
              <Button 
                size="icon" 
                variant="ghost"
                className="w-10 h-10 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all duration-300"
              >
                <Instagram size={20} />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-warm-beige">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Medical Wellness
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Premium Automotive
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Selective Healthcare
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  AI & Smart Systems
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-warm-beige">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('vision')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Vision & Mission
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('core-values')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Core Values
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <p className="text-warm-beige">
            © 2024 GG Corporation Vietnam. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
