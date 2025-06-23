import { Badge } from "@/components/ui/badge";
import missionBackground from "@assets/rectangle_3.jpg";

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
          </div>
          <div className="relative">
            <img
              src={missionBackground}
              alt="Premium wellbeing facilities representing GG Corporation's luxury approach" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-6 rounded-xl shadow-lg">
              <div className="text-1xl font-bold">Health Insights</div>
              <div className="text-sm">AI-driven</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
