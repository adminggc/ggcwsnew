import { Card, CardContent } from "@/components/ui/card";
import { Heart, Car, Hospital, Brain, Check } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Medical Wellness",
      description: "Comprehensive healthcare services combining traditional medical expertise with modern wellness approaches for optimal health outcomes.",
      features: ["Preventive Care Programs", "Wellness Consulting", "Health Optimization"],
      backgroundImage: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Car,
      title: "Premium Automotive",
      description: "Luxury automotive solutions delivering exceptional performance, comfort, and reliability for discerning clients.",
      features: ["Luxury Vehicle Services", "Custom Solutions", "Premium Maintenance"],
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Hospital,
      title: "Selective Healthcare",
      description: "Specialized healthcare services tailored to individual needs, providing personalized medical care and treatment solutions.",
      features: ["Personalized Treatment", "Specialist Consultations", "Advanced Diagnostics"],
      backgroundImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Brain,
      title: "AI & Smart Systems",
      description: "Cutting-edge artificial intelligence and smart system solutions that optimize operations and enhance decision-making capabilities.",
      features: ["AI Implementation", "Smart Automation", "Data Analytics"],
      backgroundImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Our Service Pillars
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            Four comprehensive domains of excellence delivering integrated solutions for your complete wellbeing
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group bg-warm-beige rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-burgundy rounded-xl flex items-center justify-center mb-4 group-hover:bg-dark-burgundy transition-colors duration-300">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div 
                      className="h-32 rounded-xl bg-cover bg-center mb-4" 
                      style={{ backgroundImage: `url(${service.backgroundImage})` }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-burgundy mb-4">{service.title}</h3>
                  <p className="text-charcoal leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="text-sm text-charcoal space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-burgundy mr-2 flex-shrink-0" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
