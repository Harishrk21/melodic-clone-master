import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Trinity = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Trinity College London Grade Exams</h1>
        <p className="text-muted-foreground max-w-2xl">Structured coaching for Trinity grades with repertoire, technical work, and aural skills. Available for Guitar, Piano/Keyboard, Drums, Ukulele and more.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Trinity;


