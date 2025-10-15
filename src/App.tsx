import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Vision from "./pages/Vision";
import Founder from "./pages/Founder";
import Factsheet from "./pages/Factsheet";
import Fellowship from "./pages/Fellowship";
import Media from "./pages/Media";
import Donate from "./pages/Donate";
import Join from "./pages/Join";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

// Replace this with your actual logo
import Logo from "./assets/logo.jpg"; 

const queryClient = new QueryClient();

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.scrollY > 0) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  // Loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading (replace with actual loading logic if needed)
    const timer = setTimeout(() => setLoading(false), 1000); // 1 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    // Full-screen loader
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <img src={Logo} alt="Logo" className="w-32 h-32 animate-pulse" />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/vision" element={<Vision />} />
                  <Route path="/founder" element={<Founder />} />
                  <Route path="/factsheet" element={<Factsheet />} />
                  <Route path="/fellowship" element={<Fellowship />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/donate" element={<Donate />} />
                  <Route path="/join" element={<Join />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
