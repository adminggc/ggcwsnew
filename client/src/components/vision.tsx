import visionBackground from "@assets/vision_2_1750396646551.png";

export default function Vision() {
  return (
    <section id="vision" className="relative py-20 min-h-screen flex items-center">
      {/* Your authentic vision background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(146, 45, 29, 0.7), rgba(146, 45, 29, 0.7)), url(${visionBackground})`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            VISION
          </h2>
          <p className="text-xl lg:text-2xl text-warm-beige mb-12 font-light leading-relaxed">
            To become a symbol of sustainable prosperity in Asia, where health is personalized, 
            lifestyle is insight‑driven, and every life decision reflects refined inner power.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">Asia</div>
              <div className="text-warm-beige">Sustainable Prosperity Symbol</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">Personalized</div>
              <div className="text-warm-beige">Health Solutions</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">Insight-driven</div>
              <div className="text-warm-beige">Lifestyle Decisions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
