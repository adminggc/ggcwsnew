import { Card, CardContent } from "@/components/ui/card";
import { Heart, Car, Hospital, Brain, Check } from "lucide-react";

// Import the authentic four pillar images with Nordic landscapes
import medicalWellnessImage from "@assets/group_2_1750408571988.png";
import premiumDrivingImage from "@assets/2497596885-2497596885_1750408571986.png";
import aiSmartSystemsImage from "@assets/group_3_1750408571989.png";
import selectiveHealthcareImage from "@assets/group_2_copy_3_1750408571989.png";

export default function Services() {
  const services = [
    {
      icon: Heart,
      image: medicalWellnessImage,
      title: "Medical Wellness",
      description: "Every program and service are a personalized fusion of regenerative medicine, technology, nutrition, micronutrient therapy, lifestyle management - designed to unlock each client's unique potential. This is for those who seek not just to live healthily, but to live meaningfully, powerfully, vibrantly from within."
    },
    {
      icon: Car,
      image: premiumDrivingImage,
      title: "Solution for Premium Drivings",
      description: "More than just buying, leasing, maintaining, repairing, restoring, and upgrading premium pre-owned vehicles (such as Porsche, Volvo, BMW, etc.), we represent a statement of taste and individuality. Each car is a lifestyle declaration, each journey is a curated experience."
    },
    {
      icon: Brain,
      image: aiSmartSystemsImage,
      title: "AI & Smart Systems",
      description: "By integrating AI, biometric technology, behavioral analytics, we build dynamic personal health and lifestyle profiles. This allows us to deliver truly tailor - made, real - time wellness solutions."
    },
    {
      icon: Hospital,
      image: selectiveHealthcareImage,
      title: "Selective Healthcare Services",
      description: "A curated network of trusted domestic and international healthcare partners, offering streamlined, private and efficient care experiences tailored to discerning clientele."
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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            return (
              <Card key={index} className="group bg-white rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto object-contain"
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
