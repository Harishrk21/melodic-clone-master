import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Store = () => {
  const categories = [
    { name: "Acoustic Guitar" },
    { name: "Electric Guitar" },
    { name: "Keyboard" },
    { name: "Books" },
    { name: "Bansuri (Hindustani) Flute" },
    { name: "Carnatic Flute" },
    { name: "Bass Guitar" },
    { name: "Guitar Strings" },
    { name: "Microphones" },
  ];

  const benefits = [
    { title: "Best Gear", desc: "We deal only with the best brands and companies." },
    { title: "Easy Finance Options", desc: "EMI & easy finance options from our payment partners." },
    { title: "Friendly advice", desc: "Talk to our in‑house gear experts for guidance." },
    { title: "More Benefits*", desc: "2 Free 30-min Online Classes from our tutors." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-12 space-y-12">
        <section className="text-center space-y-3">
          <h1 className="text-3xl md:text-5xl font-bold">Buy Music Instruments Online</h1>
          <p className="text-muted-foreground">Handcrafted curation. Shipped worldwide.</p>
        </section>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {categories.map((c) => (
              <Card key={c.name} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center font-semibold">{c.name}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Why buy musical instruments through SareGaPaDhaSa?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <Card key={b.title}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Store;


