import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Rockschool = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Rockschool (RSL) Grade Exams</h1>
        <p className="text-muted-foreground max-w-2xl">Coaching for RSL Awards (Rockschool) with focus on performance pieces, technical exercises, and musicianship.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Rockschool;


