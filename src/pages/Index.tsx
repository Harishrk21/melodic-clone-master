import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingDemoBar from "@/components/FloatingDemoBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CourseGrid />
        <Features />
        <Testimonials />
      </main>
      <Footer />
      <FloatingDemoBar />
    </div>
  );
};

export default Index;
