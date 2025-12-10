import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Index from "./pages/Index";
import Contact from "./pages/Contact";
import LabTesting from "./pages/LabTesting";
import FAQs from "./pages/FAQs";
import WholesalePortal from "./pages/WholesalePortal";
import NotFound from "./pages/NotFound";

// 🔹 PÁGINAS DE PRODUCTOS (asegúrate de que estos archivos existen en src/pages)
import Products from "./pages/Products";
import Product2gThcp from "./pages/Product2gThcp";
import Product2gThca from "./pages/Product2gThca";
// Si más adelante creas una página específica para 1.5G THCP,
// puedes cambiar esta ruta para usar ese componente en vez de <Products />.

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Index />} />

          {/* Productos */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/2g-thcp" element={<Product2gThcp />} />
          <Route path="/products/2g-thca" element={<Product2gThca />} />
          {/* De momento esta puede reutilizar Products hasta que tengas una página propia */}
          <Route path="/products/1-5g-thcp" element={<Products />} />

          {/* Otras páginas */}
          <Route path="/lab-testing" element={<LabTesting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/wholesale-portal" element={<WholesalePortal />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
