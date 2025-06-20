import { Card, CardContent } from "@/components/ui/card";
import { User, TrendingUp, Building, Gem, Users, Target } from "lucide-react";
import coreValuesBackground from "@assets/core_values_1750396646546.png";

export default function CoreValues() {
  const values = [
    {
      icon: User,
      title: "Empowered Living",
      description: "Clients own their health, technology, lifestyle, mobility, and quality of life."
    },
    {
      icon: TrendingUp,
      title: "High Performance",
      description: "Solutions designed for sustainable life, work, and operations—not chasing trends."
    },
    {
      icon: Building,
      title: "Interdisciplinary Excellence",
      description: "Integrating medicine, tech, lifestyle, finance—a modern living model for next‑generation leaders."
    },
    {
      icon: Gem,
      title: "Simplicity – Sophistication – Distinction",
      description: "Designs and services refine complexity with aesthetic and experiential elegance."
    },
    {
      icon: Users,
      title: "Deep Personalization",
      description: "Every client's ecosystem is unique—honoring individuality through data-driven, transparent, custom solutions."
    }
  ];

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
            Core Values
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            The fundamental principles that guide every decision and action at GG Corporation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="bg-white rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 border-0">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-burgundy mb-4">{value.title}</h3>
                  <p className="text-charcoal leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
