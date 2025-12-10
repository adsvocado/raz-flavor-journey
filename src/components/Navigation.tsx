import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import razLogo from "@/assets/logo_raz.png";

const productLinks = [
  { name: "2G THCP", href: "/products/2g-thcp" },
  { name: "2G THCA", href: "/products/2g-thca" },
  { name: "1.5G THCP", href: "/products/1-5g-thcp" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu
  const [isProductsOpen, setIsProductsOpen] = useState(false); // Dropdown
  const location = useLocation();

  // Close mobile + dropdown when changing page
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* NAVBAR */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO */}
            <Link to="/" className="hover:scale-105 transition-transform duration-300">
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10" />
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center space-x-8">

              {/* Home */}
              <Link
                to="/"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all ${
                  isActive("/") ? "bg-gradient-holographic-dark text-black shadow-neon" : "text-black hover:text-primary"
                }`}
              >
                Home
              </Link>

              {/* Lab Testing */}
              <Link
                to="/lab-testing"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all ${
                  isActive("/lab-testing") ? "bg-gradient-holographic-dark text-black shadow-neon" : "text-black hover:text-primary"
                }`}
              >
                Lab Testing
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all ${
                  isActive("/contact") ? "bg-gradient-holographic-dark text-black shadow-neon" : "text-black hover:text-primary"
                }`}
              >
                Contact Us
              </Link>

              {/* PRODUCTS DROPDOWN — NOW CLICK TO OPEN */}
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-full font-poppins-bold text-sm transition-all ${
                    location.pathname.startsWith("/products/")
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-black hover:text-primary"
                  }`}
                >
                  Products
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isProductsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN PANEL — SOLID COLOR, NO TRANSPARENCY */}
                {isProductsOpen && (
                  <div className="absolute left-0 top-full mt-2 bg-white border border-black/10 shadow-xl rounded-2xl py-2 min-w-[180px] z-50">
                    {productLinks.map((product) => (
                      <Link
                        key={product.href}
                        to={product.href}
                        className="block px-4 py-2 text-sm text-black hover:bg-black/5 rounded-xl transition"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Wholesale */}
              <Link
                to="/wholesale-portal"
                className={`px-4 py-2 rounded-full font-poppins-bold text-sm transition-all ${
                  isActive("/wholesale-portal")
                    ? "bg-gradient-holographic-dark text-black shadow-neon"
                    : "text-black hover:text-primary"
                }`}
              >
                Wholesale Portal
              </Link>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg glass"
            >
              {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-raz-black/90 backdrop-blur-xl p-6 md:hidden">
          <div className="mt-14 space-y-3">

            <Link to="/" className="block p-3 rounded-xl text-white">Home</Link>
            <Link to="/lab-testing" className="block p-3 rounded-xl text-white">Lab Testing</Link>
            <Link to="/contact" className="block p-3 rounded-xl text-white">Contact Us</Link>

            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-white/50 mb-2 uppercase">Products</p>

              {productLinks.map((product) => (
                <Link
                  key={product.href}
                  to={product.href}
                  className="block px-3 py-2 rounded-lg text-white hover:bg-white/10"
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <Link
              to="/wholesale-portal"
              className="block text-center p-3 rounded-full text-white border border-white"
            >
              Wholesale Portal
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
