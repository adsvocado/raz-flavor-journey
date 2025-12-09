import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import desktopBanner from "@/assets/hero-slide-1.png";
import mobileBanner from "@/assets/hero-slide-movil.png";

const PreRollCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <motion.section
      ref={sectionRef}
      id="hero-static-banner"
      className="relative w-full min-h-[380px] sm:h-[450px] overflow-hidden py-4 sm:py-[15px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Desktop Banner */}
      <motion.div
        className="absolute inset-0 hidden sm:block"
        style={{
          y,
          scale,
          backgroundImage: `url(${desktopBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Mobile Banner */}
      <motion.div
        className="absolute inset-0 block sm:hidden"
        style={{
          y,
          scale,
          backgroundImage: `url(${mobileBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Overlay suave opcional */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </motion.section>
  );
};

export default PreRollCarousel;
