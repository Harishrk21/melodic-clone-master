import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CourseGrid from "@/components/CourseGrid";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/structuredData";

const Index = () => {
  const orgSchema = generateOrganizationSchema();
  const localBusiness = generateLocalBusinessSchema();
  return (
    <div className="min-h-screen">
      <SEOHelmet page="home" />
      <StructuredData data={orgSchema} />
      <StructuredData data={localBusiness} />
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
