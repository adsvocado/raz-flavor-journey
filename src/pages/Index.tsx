import PreRollCarousel from "@/components/PreRollCarousel";
import StrainShowcase from "@/components/StrainShowcase";
import InfiniteScroll from "@/components/InfiniteScroll";
import ProductStorytellingScroll from "@/components/ProductStorytellingScroll";
import ComplianceSection from "@/components/ComplianceSection";
import NewsletterSection from "@/components/NewsletterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      {/* Banner estático — ya NO usamos HeroSection */}
      <PreRollCarousel />

      <InfiniteScroll />
      <StrainShowcase />

      {/* Si quieres activar estas secciones, descomenta */}
      {/* <ProductStorytellingScroll /> */}
      {/* <ComplianceSection /> */}

      <NewsletterSection />
    </main>
  );
};

export default Index;
