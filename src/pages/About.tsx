import { Shield, Leaf, Award, Users } from 'lucide-react';
import razProductDetailsImage from '@/assets/raz-product-details.jpg';

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "We source only the finest hemp flower, carefully selected for superior terpene profiles and consistency."
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "Every product meets federal and state regulations, ensuring legal peace of mind for our customers."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Master cultivators and extraction specialists create each blend with precision and care."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "We prioritize customer satisfaction with transparent testing and exceptional service."
    }
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-raz-black via-raz-black/95 to-raz-black" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-druk text-6xl md:text-8xl text-white neon-text mb-6">
              ABOUT RAZ
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Pioneering the future of premium cannabis experiences through innovation, 
              quality, and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="font-druk text-4xl md:text-6xl text-foreground mb-6">
                OUR STORY
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Born from a passion for premium cannabis experiences, RAZ represents the perfect 
                fusion of traditional craftsmanship and cutting-edge innovation. Our journey began 
                with a simple vision: to create the finest THC-P diamond infused pre-rolls that 
                deliver consistent, exceptional experiences.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every RAZ product is the result of meticulous attention to detail, from sourcing 
                the highest quality hemp flower to our proprietary diamond infusion process. 
                We believe that cannabis should be enjoyed responsibly, safely, and legally.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-raz-red to-raz-blue text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
                  Our Products
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={razProductDetailsImage}
                alt="RAZ Product Details"
                className="w-full rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -inset-4 bg-gradient-to-r from-raz-blue/20 to-raz-red/20 rounded-2xl blur-xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-druk text-4xl md:text-6xl text-foreground neon-text mb-6">
              OUR VALUES
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at RAZ
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div 
                  key={value.title}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-raz-red to-raz-blue rounded-full flex items-center justify-center group-hover:shadow-neon transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-druk text-2xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-raz-blue/10 via-transparent to-raz-red/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-druk text-4xl md:text-6xl text-foreground neon-text mb-8">
              THE RAZ PROMISE
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Every RAZ product undergoes rigorous third-party testing to ensure purity, 
              potency, and safety. We're committed to transparency, quality, and delivering 
              the premium experience you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['Lab Tested', 'Federally Compliant', 'Child-Proof Packaging', 'Premium Hemp'].map((promise) => (
                <div key={promise} className="glass px-6 py-3 rounded-full">
                  <span className="font-poppins-bold text-foreground">{promise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;