import { useState } from 'react';
import { Zap, Heart, Moon, CheckCircle } from 'lucide-react';
import alaskanImage from '@/assets/alaskan-thunderfuck.jpg';

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const products = [
    {
      id: 'alaskan',
      name: 'Alaskan Thunderfuck',
      type: 'HYBRID',
      flavor: 'Piney with earthy undertones and a hint of citrus',
      effects: ['Euphoric', 'Creative', 'Balanced', 'Uplifting'],
      description: 'Experience the perfect balance of mind and body with this legendary Alaskan strain. Known for its potent effects and unique flavor profile.',
      color: 'blue',
      gradient: 'bg-gradient-hybrid',
      image: alaskanImage,
      icon: Zap,
      thc: '1.5G',
      cbd: '<0.3%'
    },
    {
      id: 'alien',
      name: 'Alien Cookies',
      type: 'INDICA',
      flavor: 'Sweet vanilla cookies with mysterious alien tang',
      effects: ['Relaxing', 'Sedating', 'Body High', 'Sleep Aid'],
      description: 'Unwind with this otherworldly indica blend. Perfect for evening relaxation and deep, restful sleep.',
      color: 'green',
      gradient: 'bg-gradient-indica',
      image: alaskanImage,
      icon: Moon,
      thc: '1.5G',
      cbd: '<0.3%'
    },
    {
      id: 'strawberry',
      name: 'Strawberry Kush',
      type: 'SATIVA',
      flavor: 'Fresh strawberries with tropical fruit notes',
      effects: ['Energizing', 'Focus', 'Creative', 'Mood Boost'],
      description: 'Elevate your day with this delicious sativa. Bursting with fruity flavors and energizing effects.',
      color: 'red',
      gradient: 'bg-gradient-sativa',
      image: alaskanImage,
      icon: Heart,
      thc: '1.5G',
      cbd: '<0.3%'
    }
  ];

  const currentProduct = products[activeProduct];

  const features = [
    'Premium THC-P Diamond Infusion',
    'Laboratory Tested for Purity',
    '100% Federally Compliant Hemp',
    'Child-Proof Packaging',
    'Florida Cannabinoids Certified',
    'Expert Crafted Blends'
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-raz-black via-raz-black/95 to-raz-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-druk text-6xl md:text-8xl text-white neon-text mb-6">
              OUR PRODUCTS
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Premium THC-P diamond infused pre-rolls crafted for the ultimate experience
            </p>
          </div>
        </div>
      </section>

      {/* Product Selector */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex gap-4 p-2 glass rounded-full">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(index)}
                    className={`px-6 py-3 rounded-full font-poppins-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                      activeProduct === index
                        ? `${product.gradient} text-white shadow-neon`
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    {product.type}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="relative">
              <div className="product-card p-8 text-center">
                <div className="relative mb-6">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full max-w-sm mx-auto rounded-xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className={`absolute -inset-4 ${currentProduct.gradient} opacity-20 rounded-xl blur-xl`} />
                </div>
                
                <div className={`inline-block px-4 py-2 ${currentProduct.gradient} text-white rounded-full font-poppins-bold text-sm mb-4`}>
                  {currentProduct.type}
                </div>
                
                <h3 className="font-druk text-3xl text-foreground mb-2">
                  {currentProduct.name}
                </h3>
                
                <div className="text-center">
                  <span className="text-2xl font-poppins-bold text-foreground">{currentProduct.thc}</span>
                  <span className="text-sm text-muted-foreground ml-2">THC-P Diamond Infused</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Flavor Profile
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {currentProduct.flavor}
                </p>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Effects
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentProduct.effects.map((effect) => (
                    <span
                      key={effect}
                      className="px-4 py-2 glass rounded-full text-foreground font-poppins-bold text-sm"
                    >
                      {effect}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-druk text-4xl text-foreground mb-4">
                  Experience
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {currentProduct.description}
                </p>
              </div>

              <button className={`px-8 py-4 ${currentProduct.gradient} text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105`}>
                Shop {currentProduct.type}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-gradient-to-br from-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-druk text-4xl md:text-6xl text-foreground neon-text mb-6">
              PREMIUM FEATURES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every RAZ pre-roll is crafted with premium features for the ultimate experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature}
                className="flex items-center gap-4 glass p-6 rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-raz-red to-raz-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="font-poppins-bold text-foreground text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-raz-blue/10 via-transparent to-raz-red/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-druk text-4xl md:text-6xl text-foreground neon-text mb-8">
              READY TO EXPERIENCE RAZ?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Discover the perfect strain for your needs. Premium quality, 
              guaranteed satisfaction, 100% federally compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-5 bg-gradient-to-r from-raz-red to-raz-blue text-white font-poppins-bold text-xl rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
                Shop All Products
              </button>
              <button className="px-10 py-5 glass text-foreground font-poppins-bold text-xl rounded-2xl hover:shadow-glass transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;