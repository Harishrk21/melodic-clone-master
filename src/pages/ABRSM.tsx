import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ABRSM = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">ABRSM Grade Exams</h1>
        <p className="text-muted-foreground max-w-2xl">Preparation for ABRSM performance grades and theory exams with qualified tutors and a structured syllabus.</p>
      </main>
      <Footer />
    </div>
  );
};

export default ABRSM;


