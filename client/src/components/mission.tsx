import { Badge } from "@/components/ui/badge";

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern collaborative workspace representing GG Corporation's mission-driven approach" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-8">
              Our Mission
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Empowering Excellence:</strong> We deliver comprehensive wellbeing solutions that enhance quality of life through innovative healthcare, premium automotive services, and intelligent technology integration.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Sustainable Impact:</strong> Our commitment extends beyond immediate solutions to create lasting positive change in communities, fostering sustainable growth and environmental responsibility.
              </p>
              <p className="text-lg text-charcoal leading-relaxed">
                <strong className="text-burgundy">Partnership Excellence:</strong> We build enduring relationships with clients, partners, and stakeholders, founded on trust, transparency, and mutual success.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-warm-beige rounded-xl">
                <div className="text-2xl font-bold text-burgundy">24/7</div>
                <div className="text-sm text-charcoal">Support Available</div>
              </div>
              <div className="text-center p-4 bg-warm-beige rounded-xl">
                <div className="text-2xl font-bold text-burgundy">ISO</div>
                <div className="text-sm text-charcoal">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
