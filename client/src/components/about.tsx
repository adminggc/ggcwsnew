import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-burgundy mb-6">
              GG Corporation Vietnam
            </h2>
            <p className="text-lg text-charcoal mb-6 leading-relaxed">
              At GG Corporation, we are dedicated to delivering premium wellbeing solutions that transform lives and elevate experiences. Our comprehensive approach integrates cutting-edge healthcare services with innovative corporate solutions.
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              With a commitment to excellence and a vision for sustainable growth, we serve as your trusted partner in achieving optimal wellness, operational efficiency, and technological advancement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                20+ Years Experience
              </Badge>
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Premium Quality
              </Badge>
              <Badge className="bg-white text-burgundy px-6 py-3 rounded-full font-semibold hover:bg-gray-50">
                Trusted Partner
              </Badge>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Modern corporate building representing GG Corporation's professional presence" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-burgundy text-white p-6 rounded-xl shadow-lg">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
