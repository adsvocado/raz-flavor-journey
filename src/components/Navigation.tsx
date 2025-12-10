import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import razLogo from "@/assets/logo_raz.png";

const mainLinks = [
  { name: "Home", href: "/" },
  { name: "Lab Testing", href: "/lab-testing" },
  { name: "Contact Us", href: "/contact" },
  { name: "Wholesale Portal", href: "/wholesale-portal" },
];

const productLinks = [
  { name: "2G THCP", href: "/products/2g-thcp" },
  { name: "2G THCA", href: "/products/2g-thca" },
  { name: "1.5G THCP", href: "/products/1-5g-thcp" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* NAV DESKTOP */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10 w-auto" />
            </Link>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Home
              </Link>

              {/* Lab Testing */}
              <Link
                to="/lab-testing"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/lab-testing")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Lab Testing
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/contact")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Contact Us
              </Link>

              {/* DROPDOWN DESKTOP */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                    location.pathname.startsWith("/products/")
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-black hover:text-primary hover:shadow-glass"
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* PANEL DROPDOWN – FONDO SÓLIDO FORZADO */}
                <div
                  className={`absolute top-full left-0 pt-2 transition-all duration-200 z-50 ${
                    isProductsOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  <div
                    className="rounded-2xl py-2 shadow-xl border border-black/10 min-w-[180px]"
                    style={{ backgroundColor: "#ffffff", backdropFilter: "none" }}
                  >
                    <ul className="flex flex-col">
                      {productLinks.map((product) => (
                        <li key={product.href}>
                          <Link
                            to={product.href}
                            className="block px-4 py-2 text-sm font-poppins text-black hover:bg-black/5 rounded-xl transition-colors"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Wholesale Portal */}
              <Link
                to="/wholesale-portal"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/wholesale-portal")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary hover:shadow-glass"
                }`}
              >
                Wholesale Portal
              </Link>
            </div>

            {/* BOTÓN MOBILE */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg glass hover:shadow-neon transition-all duration-300"
            >
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* MENÚ MOBILE */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />

        <div
          className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-3">
            <Link
              to="/"
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isActive("/")
                  ? "bg-gradient-holographic-dark text-black shadow-neon"
                  : "text-foreground hover:bg-white/5 hover:shadow-glass"
              }`}
            >
              <span className="font-poppins-bold text-base">Home</span>
            </Link>

            <Link
              to="/lab-testing"
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isActive("/lab-testing")
                  ? "bg-gradient-holographic-dark text-black shadow-neon"
                  : "text-foreground hover:bg-white/5 hover:shadow-glass"
              }`}
            >
              <span className="font-poppins-bold text-base">Lab Testing</span>
            </Link>

            <Link
              to="/contact"
              className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                isActive("/contact")
                  ? "bg-gradient-holographic-dark text-black shadow-neon"
                  : "text-foreground hover:bg-white/5 hover:shadow-glass"
              }`}
            >
              <span className="font-poppins-bold text-base">Contact Us</span>
            </Link>

            {/* Products Mobile */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-poppins-bold text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                Products
              </p>
              {productLinks.map((product) => (
                <Link
                  key={product.href}
                  to={product.href}
                  className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                >
                  {product.name}
                </Link>
              ))}
            </div>

            {/* Wholesale */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <Link
                to="/wholesale-portal"
                className={`block text-center w-full px-4 py-3 rounded-full font-poppins-bold text-sm transition-all duration-300 hover:scale-105 ${
                  isActive("/wholesale-portal")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-foreground border border-white/20 hover:bg-white/5 hover:shadow-glass"
                }`}
              >
                Wholesale Portal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
