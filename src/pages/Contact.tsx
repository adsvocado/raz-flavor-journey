import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@razbrand.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+1 (555) RAZ-HEMP',
      description: 'Mon-Fri 9AM-6PM EST'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Florida, United States',
      description: 'Premium hemp cultivation facility'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'Weekend support available'
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
              CONTACT RAZ
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Have questions about our premium THC-P diamond infused pre-rolls? 
              We're here to help you find the perfect experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="font-druk text-4xl text-foreground mb-6">
                  GET IN TOUCH
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ready to experience RAZ? Have questions about our products? 
                  Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-poppins-bold text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-poppins-bold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-poppins-bold text-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-poppins-bold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 glass rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-raz-red to-raz-blue text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-druk text-4xl text-foreground mb-6">
                  REACH OUT
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Multiple ways to connect with the RAZ team. Choose what works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div 
                      key={info.title}
                      className="flex items-start gap-4 glass p-6 rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-r from-raz-red to-raz-blue rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-poppins-bold text-lg text-foreground mb-1">
                          {info.title}
                        </h3>
                        <p className="text-primary font-poppins-bold mb-1">
                          {info.details}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Info */}
              <div className="glass p-6 rounded-2xl">
                <h3 className="font-druk text-2xl text-foreground mb-4">
                  CUSTOMER SUPPORT
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our dedicated support team is here to help with product questions, 
                  order assistance, and general inquiries about RAZ premium pre-rolls.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Product Info', 'Order Support', 'Compliance Questions', 'Wholesale Inquiries'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-poppins-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-druk text-4xl md:text-6xl text-foreground neon-text mb-6">
              FREQUENTLY ASKED
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions about RAZ products
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                question: "Are RAZ products federally compliant?",
                answer: "Yes, all RAZ products contain less than 0.3% THC and are 100% federally compliant hemp products."
              },
              {
                question: "What is THC-P diamond infusion?",
                answer: "Our proprietary process infuses premium hemp flower with THC-P diamonds for enhanced potency and consistency."
              },
              {
                question: "How should I store my pre-rolls?",
                answer: "Store in the original child-proof packaging in a cool, dry place away from direct sunlight."
              },
              {
                question: "Do you ship nationwide?",
                answer: "We ship to all states where hemp products are legal. Check your local laws before ordering."
              }
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-2xl">
                <h3 className="font-poppins-bold text-lg text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;