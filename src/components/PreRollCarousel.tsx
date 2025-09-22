import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import prerollBase from '@/assets/preroll-base.png';
import prerollTypography from '@/assets/preroll-typography.png';
import alienCookies from '@/assets/alien-cookies.jpg';
import strawberryKush from '@/assets/strawberry-kush.jpg';
import alazkanThunderfuck from '@/assets/alazkan-thunderfuck.jpg';

const preRolls = [
  {
    id: 1,
    name: 'Alien Cookies',
    type: 'INDICA',
    effects: 'Relaxing, Euphoric, Sleepy',
    flavor: 'Sweet, Earthy, Vanilla',
    thc: '28-32%',
    weight: '1.5G',
    image: alienCookies,
    gradient: 'from-green-500 via-emerald-400 to-teal-300',
    glowColor: 'shadow-green-500/30',
    description: 'Perfect for evening relaxation and stress relief.'
  },
  {
    id: 2,
    name: 'Strawberry Kush',
    type: 'SATIVA',
    effects: 'Energizing, Creative, Uplifting',
    flavor: 'Berry, Sweet, Fruity',
    thc: '24-28%',
    weight: '1.5G',
    image: strawberryKush,
    gradient: 'from-red-500 via-pink-400 to-rose-300',
    glowColor: 'shadow-red-500/30',
    description: 'Ideal for daytime creativity and social activities.'
  },
  {
    id: 3,
    name: 'Alaskan Thunderfuck',
    type: 'HYBRID',
    effects: 'Balanced, Focus, Euphoric',
    flavor: 'Pine, Citrus, Diesel',
    thc: '26-30%',
    weight: '1.5G',
    image: alazkanThunderfuck,
    gradient: 'from-blue-500 via-cyan-400 to-sky-300',
    glowColor: 'shadow-blue-500/30',
    description: 'Perfect balance of mind and body effects.'
  }
];

const PreRollCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentPreRoll = preRolls[currentIndex];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % preRolls.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + preRolls.length) % preRolls.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'INDICA': return <Leaf className="w-5 h-5" />;
      case 'SATIVA': return <Zap className="w-5 h-5" />;
      case 'HYBRID': return <Heart className="w-5 h-5" />;
      default: return <Leaf className="w-5 h-5" />;
    }
  };

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentPreRoll.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="absolute inset-0 bg-background/85 backdrop-blur-sm" />
      <div className={`absolute inset-0 bg-gradient-to-r ${currentPreRoll.gradient} opacity-10 transition-all duration-1000`} />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Pre-Roll Image with 3D Effect */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group cursor-pointer">
                {/* 3D Pre-Roll Container */}
                <div 
                  className={`relative w-80 h-96 transition-all duration-700 ease-out transform group-hover:scale-110 group-hover:rotate-y-12 ${currentPreRoll.glowColor} group-hover:shadow-2xl`}
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Pre-Roll Base Image */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:rotateY-6">
                    <img
                      src={prerollBase}
                      alt={`${currentPreRoll.name} Pre-Roll`}
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                  
                  {/* Floating Brand Typography */}
                  <div className="absolute -top-8 -right-8 transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
                    <img
                      src={prerollTypography}
                      alt="RAZ Typography"
                      className="w-32 h-32 object-contain opacity-80"
                    />
                  </div>

                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${currentPreRoll.gradient} opacity-20 rounded-full blur-xl scale-75 group-hover:scale-90 transition-all duration-700`} />
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-2 bg-gradient-to-r ${currentPreRoll.gradient} rounded-full opacity-60 animate-float`}
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 10)}%`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: `${3 + i}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Product Information */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Type Badge */}
              <div className="flex justify-center lg:justify-start">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold text-sm shadow-lg`}>
                  {getTypeIcon(currentPreRoll.type)}
                  <span>{currentPreRoll.type}</span>
                </div>
              </div>

              {/* Product Name */}
              <div className="space-y-4">
                <h1 className="font-druk text-4xl md:text-6xl lg:text-7xl text-foreground tracking-tight">
                  {currentPreRoll.name}
                </h1>
                <div className={`h-1 w-32 bg-gradient-to-r ${currentPreRoll.gradient} rounded-full mx-auto lg:mx-0`} />
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {currentPreRoll.description}
              </p>

              {/* Product Stats Grid */}
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto lg:mx-0">
                <div className="glass p-4 rounded-2xl text-center">
                  <div className="text-2xl font-druk text-foreground">{currentPreRoll.thc}</div>
                  <div className="text-sm text-muted-foreground font-semibold">THC Content</div>
                </div>
                <div className="glass p-4 rounded-2xl text-center">
                  <div className="text-2xl font-druk text-foreground">{currentPreRoll.weight}</div>
                  <div className="text-sm text-muted-foreground font-semibold">Premium Weight</div>
                </div>
              </div>

              {/* Effects & Flavor */}
              <div className="space-y-4">
                <div className="glass p-4 rounded-2xl">
                  <h3 className="font-bold text-foreground mb-2">Effects</h3>
                  <p className="text-muted-foreground">{currentPreRoll.effects}</p>
                </div>
                <div className="glass p-4 rounded-2xl">
                  <h3 className="font-bold text-foreground mb-2">Flavor Profile</h3>
                  <p className="text-muted-foreground">{currentPreRoll.flavor}</p>
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                size="lg" 
                className={`px-8 py-4 bg-gradient-to-r ${currentPreRoll.gradient} text-white font-bold text-lg rounded-2xl hover:scale-105 transition-all duration-300 ${currentPreRoll.glowColor} hover:shadow-2xl`}
              >
                Shop {currentPreRoll.name}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full glass border border-white/20 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-20">
        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-12 h-12 rounded-full glass border border-white/20 text-foreground hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {preRolls.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isAnimating}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? `bg-gradient-to-r ${currentPreRoll.gradient} shadow-lg scale-125` 
                : 'bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Product Counter */}
      <div className="absolute top-8 right-8 glass px-4 py-2 rounded-full border border-white/20 z-20">
        <span className="text-sm font-bold text-foreground">
          {String(currentIndex + 1).padStart(2, '0')} / {String(preRolls.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
};

export default PreRollCarousel;