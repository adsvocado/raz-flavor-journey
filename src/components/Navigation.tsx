import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import razLogo from "@/assets/logo_raz.png";

const simpleLinks = [
  { name: "Home", href: "/" },
  { name: "Lab Testing", href: "/lab-testing" },
  { name: "Contact Us", href: "/contact" },
  { name: "Wholesale Portal", href: "/wholesale-portal" },
];

const productLinks = [
  { name: "2G THCP", href: "/products/2g-thcp" },
  { name: "2G THCA", href: "/products/2g-thca" },
  { name: "1.5G THCP", href: "/products/1-5g-thcp" }, // puedes ajustar la ruta luego
];

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setIsMobileOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Desktop / Global navbar */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10 w-auto" />
            </Link>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {simpleLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-black hover:text-primary hover:shadow-glass"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Products dropdown (desktop) */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsProductsOpen((v) => !v)}
                  className={`inline-flex items-center gap-1 px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                    location.pathname.startsWith("/products")
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-black hover:text-primary hover:shadow-glass"
                  }`}
                >
                  Products
                  <ChevronDown className="w-4 h-4" />
                </button>

                {/* Dropdown panel */}
                {isProductsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-40 rounded-2xl glass shadow-lg py-2">
                    {productLinks.map((prod) => (
                      <Link
                        key={prod.name}
                        to={prod.href}
                        className="block w-full text-left px-4 py-2 text-sm font-poppins text-black hover:bg-white/40 rounded-xl"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        {prod.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile toggle button */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg glass hover:shadow-neon transition-all duration-300"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isMobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />

        <div
          className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${
            isMobileOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-4">
            {simpleLinks.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-foreground hover:bg-white/5 hover:shadow-glass"
                }`}
                style={{
                  animationDelay: `${index * 0.05}s`,
                  animation: isMobileOpen ? "slide-in-left 0.4s ease-out forwards" : "none",
                }}
              >
                <span className="font-poppins-bold text-lg">{item.name}</span>
              </Link>
            ))}

            {/* Products section (mobile) */}
            <div className="pt-4 mt-2 border-t border-white/10">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60 mb-2">
                Products
              </p>
              {productLinks.map((prod, index) => (
                <Link
                  key={prod.name}
                  to={prod.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-foreground text-sm font-poppins hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                  style={{
                    animationDelay: `${(simpleLinks.length + index) * 0.05}s`,
                    animation: isMobileOpen ? "slide-in-left 0.4s ease-out forwards" : "none",
                  }}
                >
                  {prod.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
