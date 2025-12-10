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

// ✅ Páginas de productos que SÍ existen ahora mismo
import Products from "./pages/Products";
import Product2gThcp from "./pages/Product2gThcp";

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

          {/* Otras páginas */}
          <Route path="/lab-testing" element={<LabTesting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/wholesale-portal" element={<WholesalePortal />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
