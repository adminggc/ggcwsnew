import { Card, CardContent } from "@/components/ui/card";
import { Heart, Car, Hospital, Brain, Check } from "lucide-react";
import medicalWellnessImg from "@assets/medical_wellness_1750396646547.png";
import selectiveHealthcareImg from "@assets/selective_healthcare_serv_1750396646548.png";
import aiSmartSystemsImg from "@assets/ai_smart_systems_1750396646545.png";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Medical Wellness",
      description: "Personalized programs combining regenerative medicine, technology, nutrition, micronutrient therapy, and lifestyle management to unlock unique potential—not just healthy living, but living meaningfully, powerfully, vibrantly.",
      features: ["Regenerative Medicine", "Personalized Nutrition", "Lifestyle Management", "Micronutrient Therapy"],
      backgroundImage: medicalWellnessImg
    },
    {
      icon: Car,
      title: "Solution for Premium Drivings",
      description: "More than buying/leasing/maintaining/restoring/upgrading premium pre‑owned vehicles (Porsche, Volvo, BMW, etc.). They represent a statement of taste and individuality—a curated lifestyle and journey experience.",
      features: ["Premium Pre-owned Vehicles", "Curated Lifestyle Experience", "Porsche, Volvo, BMW", "Taste & Individuality"],
      backgroundImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      icon: Hospital,
      title: "Selective Healthcare Services",
      description: "A curated network of trusted domestic and international healthcare partners offering streamlined, private, efficient care tailored to discerning clients.",
      features: ["Curated Healthcare Network", "Private & Efficient Care", "International Partners", "Tailored for Discerning Clients"],
      backgroundImage: selectiveHealthcareImg
    },
    {
      icon: Brain,
      title: "AI & Smart Systems",
      description: "Integration of AI, biometrics, behavioral analytics to build dynamic personal health and lifestyle profiles—delivering tailor‑made, real‑time wellness solutions.",
      features: ["AI Integration", "Biometric Analysis", "Behavioral Analytics", "Real-time Wellness Solutions"],
      backgroundImage: aiSmartSystemsImg
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
