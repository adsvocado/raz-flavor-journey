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
  const [isOpen, setIsOpen] = useState(false); // menú mobile
  const [isProductsOpen, setIsProductsOpen] = useState(false); // dropdown desktop
  const location = useLocation();

  // cerrar menús cuando cambias de ruta
  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
  }, [location]);

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* NAV DESKTOP + BOTÓN MOBILE */}
      <nav className="glass backdrop-blur-xl shadow-glass sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* LOGO */}
            <Link
              to="/"
              className="hover:scale-105 transition-transform duration-300"
            >
              <img src={razLogo} alt="RAZ" className="h-8 md:h-10 w-auto" />
            </Link>

            {/* LINKS DESKTOP */}
            <div className="hidden md:flex items-center space-x-6">
              {mainLinks.map((item) =>
                item.name === "Wholesale Portal" ? (
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
                ) : item.name === "Contact Us" ||
                  item.name === "Lab Testing" ||
                  item.name === "Home" ? (
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
                ) : null
              )}

              {/* DROPDOWN DESKTOP: PRODUCTS */}
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
                  <ChevronDown className="w-4 h-4" />
                </button>

                {isProductsOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-52 glass rounded-2xl py-3 shadow-glass">
                    <ul className="flex flex-col">
                      {productLinks.map((product) => (
                        <li key={product.href}>
                          <Link
                            to={product.href}
                            className="block px-4 py-2 text-sm font-poppins text-foreground hover:bg-white/10"
                          >
                            {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Wholesale Portal a la derecha */}
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
              {isOpen ? (
                <X className="w-6 h-6 text-black" />
              ) : (
                <Menu className="w-6 h-6 text-black" />
              )}
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
        {/* fondo oscuro */}
        <div className="absolute inset-0 bg-raz-black/90 backdrop-blur-xl" />

        {/* tarjeta del menú */}
        <div
          className={`absolute top-20 left-4 right-4 glass rounded-2xl p-6 transition-all duration-300 ${
            isOpen ? "transform translate-y-0 opacity-100" : "transform -translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-3">
            {/* links principales */}
            {mainLinks
              .filter((l) => l.name !== "Wholesale Portal")
              .map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105 ${
                    isActive(item.href)
                      ? "bg-gradient-holographic-dark text-black shadow-neon"
                      : "text-foreground hover:bg-white/5 hover:shadow-glass"
                  }`}
                  style={{
                    animationDelay: `${index * 0.05}s`,
                    animation: isOpen ? "slide-in-left 0.4s ease-out forwards" : "none",
                  }}
                >
                  <span className="font-poppins-bold text-base">{item.name}</span>
                </Link>
              ))}

            {/* Products (versión mobile, sin hover raro) */}
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="font-poppins-bold text-xs text-muted-foreground mb-2 uppercase tracking-wide">
                Products
              </p>
              {productLinks.map((product, index) => (
                <Link
                  key={product.href}
                  to={product.href}
                  className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-white/5 hover:shadow-glass transition-all duration-300"
                  style={{
                    animationDelay: `${index * 0.05 + 0.15}s`,
                    animation: isOpen ? "slide-in-left 0.4s ease-out forwards" : "none",
                  }}
                >
                  {product.name}
                </Link>
              ))}
            </div>

            {/* Wholesale Portal abajo */}
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
