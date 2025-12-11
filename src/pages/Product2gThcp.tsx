import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Product images
import thcp2gSingle from "@/assets/2g-thcp-single.jpg";
import thcp2gProducts from "@/assets/2g-thcp-products.jpg";
import thcp2gBox from "@/assets/2g-thcp-box.jpg";
// Flavor images
import thcp2gNightCrawler from "@/assets/thcp-2g-night-crawler.png";
import thcp2gCactusJack from "@/assets/thcp-2g-cactus-jack.png";
import thcp2gGeorgiaPie from "@/assets/thcp-2g-georgia-pie.png";
import thcp2gMiamiMintz from "@/assets/thcp-2g-miami-mintz.png";
import thcp2gDayCrawler from "@/assets/thcp-2g-day-crawler.png";
import thcp2gForbiddenFruit from "@/assets/thcp-2g-forbidden-fruit.png";

const productImages = [thcp2gSingle, thcp2gProducts, thcp2gBox];

const flavors = [
  { id: 1, name: "Night Crawler", type: "Indica", image: thcp2gNightCrawler, gradient: "from-purple-500 to-indigo-600", pdfUrl: "#" },
  { id: 2, name: "Cactus Jack", type: "Sativa", image: thcp2gCactusJack, gradient: "from-green-500 to-emerald-600", pdfUrl: "#" },
  { id: 3, name: "Georgia Pie", type: "Hybrid", image: thcp2gGeorgiaPie, gradient: "from-amber-500 to-yellow-600", pdfUrl: "#" },
  { id: 4, name: "Miami Mintz", type: "Hybrid", image: thcp2gMiamiMintz, gradient: "from-blue-400 to-cyan-500", pdfUrl: "#" },
  { id: 5, name: "Day Crawler", type: "Sativa", image: thcp2gDayCrawler, gradient: "from-gray-500 to-slate-600", pdfUrl: "#" },
  { id: 6, name: "Forbidden Fruit", type: "Indica", image: thcp2gForbiddenFruit, gradient: "from-purple-400 to-pink-500", pdfUrl: "#" },
];

const productInfo = {
  name: "2G THCP",
  strainType: "Available in six strains, including sativa, hybrid, and indica options. Each preroll is infused with THCP diamonds and bold terpene profiles.",
  effects: ["Potent", "Flavorful", "Long-Lasting", "Body and Mind Elevation"],
  strainName: "Choose from six strains, each offering its own flavor and effect. Perfect for users who want a strong, smooth, terpene-rich 2g preroll experience.",
};

const Product2gThcp = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-thcp opacity-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-druk text-5xl lg:text-7xl text-foreground mb-4">{productInfo.name}</h1>
            <p className="text-xl text-muted-foreground">THC-P Diamond Infused Pre-Rolls</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product Images */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <img
                  src={productImages[activeImageIndex]}
                  alt={productInfo.name}
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -inset-4 bg-gradient-thcp opacity-20 rounded-2xl blur-xl -z-10" />
                
                {productImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-foreground hover:scale-110 transition-transform"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeImageIndex ? "bg-gradient-thcp shadow-neon scale-125" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div>
                <h3 className="font-druk text-3xl text-foreground mb-4">Strain Type</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{productInfo.strainType}</p>
              </div>

              <div>
                <h3 className="font-druk text-3xl text-foreground mb-4">Effects</h3>
                <div className="flex flex-wrap gap-3">
                  {productInfo.effects.map((effect, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-foreground font-poppins-bold text-sm bg-white/20 backdrop-blur-md border border-gray-200 shadow-md"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-druk text-3xl text-foreground mb-4">Strain Name</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{productInfo.strainName}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Flavors Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-druk text-4xl lg:text-5xl text-foreground mb-2">Available Flavors</h2>
            <p className="text-muted-foreground text-lg">Six unique strains to choose from</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {flavors.map((flavor, index) => (
              <motion.div
                key={flavor.id}
                className="glass rounded-3xl p-6 hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <div className="relative h-64 w-full">
                    <img
                      src={flavor.image}
                      alt={flavor.name}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${flavor.gradient} opacity-20`} />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-druk text-2xl text-foreground mb-2">{flavor.name}</h3>
                  <p className="text-muted-foreground text-sm">{flavor.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Product2gThcp;
