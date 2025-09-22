import razHeroImage from '@/assets/raz-hero-products.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] bg-raz-black flex items-center justify-center overflow-hidden">
      <img
        src={razHeroImage}
        alt="RAZ THC-P Diamond Infused Pre-Rolls"
        className="w-full h-auto object-contain"
      />
    </section>
  );
};

export default HeroSection;