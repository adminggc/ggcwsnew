import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
              Premium Wellbeing
            </h2>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              A luxury-level, high‑quality approach to health and wellness that includes high‑end products & services: organic skincare, supplements, personalized nutrition/fitness plans, and access to elite trainers, therapists, and health experts.
            </p>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              We offer luxury experiences including retreats, spa resorts, mindful travel, and wellness sessions in exclusive settings featuring yoga, meditation, and fitness programs.
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              Our holistic approach integrates physical health, mental clarity, emotional balance, and spiritual practices, emphasizing lifestyle changes over quick fixes with personalized solutions based on DNA, biomarkers, and psychological profiles.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Holistic Approach
              </Badge>
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Personalized Solutions
              </Badge>
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Luxury Experience
              </Badge>
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Sustainable Ethics
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Premium wellbeing facilities representing GG Corporation's luxury approach" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">AI-driven</div>
              <div className="text-sm">Health Insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
