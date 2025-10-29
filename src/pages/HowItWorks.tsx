import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Learn Music Online in 3 Simple Steps</h1>
        <section className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-2">Book</h2>
            <p>Book a FREE demo session. We will contact you soon.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-2">Experience</h2>
            <p>Experience our web-based classroom — no extra downloads required.</p>
          </div>
          <div className="rounded-lg border p-6">
            <h2 className="text-xl font-semibold mb-2">Start</h2>
            <p>Liked the demo? Upgrade and begin your musical journey.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;


