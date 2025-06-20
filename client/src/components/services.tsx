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
      description: "Personalized programs combining regenerative medicine, technology, nutrition, micronutrient therapy, and lifestyle management to unlock unique potential—not just healthy living, but living meaningfully, powerfully, vibrantly."
    },
    {
      icon: Car,
      image: premiumDrivingImage,
      title: "Solution for Premium Drivings",
      description: "More than buying/leasing/maintaining/restoring/upgrading premium pre‑owned vehicles (Porsche, Volvo, BMW, etc.). They represent a statement of taste and individuality—a curated lifestyle and journey experience."
    },
    {
      icon: Hospital,
      image: selectiveHealthcareImage,
      title: "Selective Healthcare Services",
      description: "A curated network of trusted domestic and international healthcare partners offering streamlined, private, efficient care tailored to discerning clients."
    },
    {
      icon: Brain,
      image: aiSmartSystemsImage,
      title: "AI & Smart Systems",
      description: "Integration of AI, biometrics, behavioral analytics to build dynamic personal health and lifestyle profiles—delivering tailor‑made, real‑time wellness solutions."
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
                <div className="flex flex-col h-full">
                  {/* Image section - 1/4 of the height */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Text section - 3/4 of the height */}
                  <div className="flex-1 p-6 bg-white">
                    <h3 className="text-xl font-bold text-burgundy mb-4">
                      {service.title}
                    </h3>
                    <p className="text-charcoal text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
