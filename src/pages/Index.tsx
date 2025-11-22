import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateOrganizationSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/structuredData";

const Index = () => {

  const structuredSchemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.saregapadhasa.com" }
    ])
  ];

  return (
    <div className="min-h-screen">
      <SEOHelmet page="home" />

      {/* Single JSON-LD output — BEST for Google */}
      <StructuredData data={structuredSchemas} />

      <Navigation />
      <main>
        <Hero />
        <CourseGrid />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
