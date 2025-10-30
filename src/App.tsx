import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guitar from "./pages/Guitar";
import Piano from "./pages/Piano";
import Vocals from "./pages/Vocals";
import Drums from "./pages/Drums";
import Violin from "./pages/Violin";
import Flute from "./pages/Flute";
import NotFound from "./pages/NotFound";
import HowItWorks from "./pages/HowItWorks";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Tutor from "./pages/Tutor";
import BookDemo from "./pages/BookDemo";
import Trinity from "./pages/Trinity";
import ABRSM from "./pages/ABRSM";
import Rockschool from "./pages/Rockschool";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import ChendaMelam from "./pages/ChendaMelam";
import AutoPromoModal from "@/components/AutoPromoModal";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guitar" element={<Guitar />} />
          <Route path="/piano" element={<Piano />} />
          <Route path="/vocals" element={<Vocals />} />
          <Route path="/drums" element={<Drums />} />
          <Route path="/violin" element={<Violin />} />
          <Route path="/flute" element={<Flute />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/trinity" element={<Trinity />} />
          <Route path="/abrsm" element={<ABRSM />} />
          <Route path="/rockschool" element={<Rockschool />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/store" element={<Store />} />
          <Route path="/chenda-melam" element={<ChendaMelam />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AutoPromoModal />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
