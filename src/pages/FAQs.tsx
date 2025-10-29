import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const FAQs = () => {
  const faqs = [
    { q: "Can music be learnt online and what is the class format?", a: "Yes, all our classes are live 1-to-1 sessions for better outcomes." },
    { q: "Which instruments do you teach?", a: "Guitar, Keyboard/Piano, Vocals (Hindustani, Carnatic & Western), Violin, Flute and Drums." },
    { q: "Do you teach for Grade Exams?", a: "Yes, we coach for Trinity College London and Rockschool (RSL)." },
    { q: "Do you teach music to adults?", a: "Absolutely. We teach all ages 6 to 60+." },
    { q: "Which platform is used to conduct classes?", a: "Zoom, Google Meet or our proprietary web classroom." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">FAQs</h1>
        <div className="grid gap-4">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-lg border p-6">
              <h2 className="text-lg font-semibold mb-2">{item.q}</h2>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQs;


