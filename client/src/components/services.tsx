import { Card, CardContent } from "@/components/ui/card";
import { Heart, Car, Hospital, Brain, Check } from "lucide-react";

// Import the exact images from your original HTML structure
import medicalWellnessTitle from "@assets/medical_wellness_1750396646547.png";
import medicalWellnessDesc from "@assets/vector_smart_object_3_1750396646549.png";
import premiumDrivingTitle from "@assets/vector_smart_object_4_1750396646549.png";
import premiumDrivingDesc from "@assets/vector_smart_object_5_1750396646550.png";
import selectiveHealthcareTitle from "@assets/selective_healthcare_serv_1750396646548.png";
import selectiveHealthcareDesc from "@assets/vector_smart_object_6_1750396646550.png";
import aiSmartSystemsTitle from "@assets/ai_smart_systems_1750396646545.png";
import aiSmartSystemsDesc from "@assets/vector_smart_object_7_1750396646550.png";

export default function Services() {
  const services = [
    {
      icon: Heart,
      titleImage: medicalWellnessTitle,
      descImage: medicalWellnessDesc,
      title: "Medical Wellness",
      description: "Every program and service are a personalized fusion of regenerative medicine, technology, nutrition, micronutrient therapy, lifestyle management - designed to unlock each client's unique potential. This is for those who seek not just to live healthily, but to live meaningfully, powerfully, vibrantly from within.",
      features: ["Regenerative Medicine", "Technology Integration", "Nutrition & Micronutrient Therapy", "Lifestyle Management"]
    },
    {
      icon: Car,
      titleImage: premiumDrivingTitle,
      descImage: premiumDrivingDesc,
      title: "Solution for Premium Drivings",
      description: "More than just buying, leasing, maintaining, repairing, restoring, and upgrading premium pre-owned vehicles (such as Porsche, Volvo, BMW, etc.), we represent a statement of taste and individuality. Each car is a lifestyle declaration, each journey is a curated experience.",
      features: ["Premium Pre-owned Vehicles", "Porsche, Volvo, BMW", "Lifestyle Declaration", "Curated Experience"]
    },
    {
      icon: Brain,
      titleImage: aiSmartSystemsTitle,
      descImage: aiSmartSystemsDesc,
      title: "AI & Smart Systems",
      description: "By integrating AI, biometric technology, behavioral analytics, we build dynamic personal health and lifestyle profiles. This allows us to deliver truly tailor - made, real - time wellness solutions.",
      features: ["AI Integration", "Biometric Technology", "Behavioral Analytics", "Real-time Wellness Solutions"]
    },
    {
      icon: Hospital,
      titleImage: selectiveHealthcareTitle,
      descImage: selectiveHealthcareDesc,
      title: "Selective Healthcare Services",
      description: "A curated network of trusted domestic and international healthcare partners, offering streamlined, private and efficient care experiences tailored to discerning clientele.",
      features: ["Curated Healthcare Network", "Domestic & International Partners", "Private & Efficient Care", "Discerning Clientele"]
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
                    <div className="mb-4 text-center">
                      <img 
                        src={service.titleImage} 
                        alt={service.title}
                        className="mx-auto mb-4 max-h-8 w-auto"
                      />
                      <img 
                        src={service.descImage} 
                        alt={service.description}
                        className="mx-auto max-w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
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
