import HeroSection from '@/components/HeroSection';
import StrainShowcase from '@/components/StrainShowcase'; 
import InfiniteScroll from '@/components/InfiniteScroll';
import ProductStorytellingScroll from '@/components/ProductStorytellingScroll';
import ComplianceSection from '@/components/ComplianceSection';
import PreRollCarousel from '@/components/PreRollCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <InfiniteScroll />
      <StrainShowcase />
      <ProductStorytellingScroll />
      <PreRollCarousel />
      <ComplianceSection />
      <Footer />
    </main>
  );
};

export default Index;