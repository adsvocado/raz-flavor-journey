import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Package, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigationItems = [
  {
    name: 'Home',
    href: '/',
    icon: Home
  },
  {
    name: 'About Us',
    href: '/about',
    icon: Info
  },
  {
    name: 'Products',
    href: '/products',
    icon: Package
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: Phone
  }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass backdrop-blur-xl shadow-glass' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="font-druk text-2xl md:text-3xl text-foreground neon-text hover:scale-105 transition-transform duration-300">
              RAZ
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'bg-gradient-to-r from-raz-red to-raz-blue text-white shadow-neon'
                        : 'text-foreground hover:text-primary hover:shadow-glass'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg glass hover:shadow-neon transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />
        
        <div className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${
          isOpen ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-4 opacity-0'
        }`}>
          <div className="space-y-4">
            {navigationItems.map((item, index) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? 'bg-gradient-to-r from-raz-red to-raz-blue text-white shadow-neon'
                      : 'text-foreground hover:bg-white/5 hover:shadow-glass'
                  }`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isOpen ? 'slide-in-left 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-poppins-bold text-lg">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-raz-red to-raz-blue text-white font-poppins-bold text-lg rounded-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
              Shop RAZ Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;