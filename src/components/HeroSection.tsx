import { useEffect, useState } from 'react';
import razHeroImage from '@/assets/raz-hero-products.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={razHeroImage}
          alt="RAZ THC-P Diamond Infused Pre-Rolls"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-raz-black/60 via-raz-black/40 to-raz-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-raz-blue/20 via-transparent to-raz-red/20" />
      </div>
      
      {/* Parallax floating elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-hybrid opacity-40 float-animation" />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-indica opacity-50 float-animation" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-gradient-sativa opacity-60 float-animation" style={{ animationDelay: '4s' }} />
      </div>

      {/* Main hero content - centered and elevated */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* RAZ Logo - Massive and glowing */}
        <div className="mb-8 animate-fade-in">
          <h1 className="font-druk text-8xl md:text-9xl lg:text-[14rem] text-white neon-text tracking-tighter drop-shadow-2xl">
            RAZ
          </h1>
          <div className="h-3 w-40 bg-gradient-hero mx-auto rounded-full mb-8 shadow-neon" />
        </div>

        {/* Enhanced tagline with premium styling */}
        <div className="animate-slide-in-left" style={{ animationDelay: '0.5s' }}>
          <h2 className="font-poppins-bold text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-xl">
            Diamond Infused Pre-Rolls
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Experience premium <span className="text-raz-blue font-bold">1.5G THC-P</span> infused pre-rolls. 
            Three distinct strains, each with unique flavors and effects. 
            <span className="text-raz-red font-bold">100% federally compliant</span> hemp flower.
          </p>
          
          {/* Premium feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['THC-P Diamond Infused', 'Lab Tested', 'Child-Proof Packaging', 'Florida Compliant'].map((feature, index) => (
              <div 
                key={feature}
                className="glass px-4 py-2 rounded-full text-white font-poppins-bold text-sm shadow-glass animate-fade-in"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1s' }}>
          <button className="px-10 py-5 bg-gradient-to-r from-raz-red to-raz-red/80 text-white font-poppins-bold text-xl rounded-2xl hover:shadow-red-glow transition-all duration-300 hover:scale-105 shadow-2xl">
            Explore Strains
          </button>
          <button className="px-10 py-5 glass text-white font-poppins-bold text-xl rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105 border border-white/20">
            Learn More
          </button>
        </div>

        {/* Compliance badge - enhanced */}
        <div className="mt-12 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <div className="inline-flex items-center gap-3 glass px-8 py-4 rounded-full shadow-glass border border-white/20">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg" />
            <span className="text-lg font-poppins-bold text-white">
              100% Federally Compliant • THC &lt; 0.3%
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center shadow-glow">
          <div className="w-2 h-4 bg-white rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-white text-sm mt-2 font-poppins-bold">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;