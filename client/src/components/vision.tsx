export default function Vision() {
  return (
    <section id="vision" className="relative py-20 min-h-screen flex items-center">
      {/* Nordic cityscape background for Vision section */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(146, 45, 29, 0.8), rgba(146, 45, 29, 0.8)), url('https://images.unsplash.com/photo-1519410011136-aa8eba9617ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-8">
            VISION
          </h2>
          <p className="text-2xl lg:text-3xl text-warm-beige mb-12 font-light leading-relaxed">
            To become the leading premium wellbeing ecosystem in Southeast Asia, setting new standards for integrated healthcare, automotive excellence, and intelligent technology solutions.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">2030</div>
              <div className="text-warm-beige">Regional Leadership Goal</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">50K+</div>
              <div className="text-warm-beige">Lives Impacted</div>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-4xl font-bold text-white mb-4">100%</div>
              <div className="text-warm-beige">Sustainable Practices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
