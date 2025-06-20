import { Card, CardContent } from "@/components/ui/card";
import { Gem, Users, Lightbulb, Heart, Leaf, Handshake } from "lucide-react";

export default function CoreValues() {
  const values = [
    {
      icon: Gem,
      title: "Excellence",
      description: "We pursue the highest standards in everything we do, continuously improving our services and exceeding expectations."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "Honesty, transparency, and ethical practices form the foundation of all our relationships and business operations."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to address evolving challenges and opportunities."
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every interaction with empathy, understanding, and genuine care for the wellbeing of others."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices and creating positive long-term impact."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We believe in collaborative relationships that create mutual value and drive collective success."
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
