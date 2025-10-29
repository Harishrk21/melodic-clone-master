import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Tutor = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Become a Tutor</h1>
        <p className="text-muted-foreground max-w-2xl">Join SareGaPaDhaSa Music Academy as a verified tutor and teach students worldwide.</p>
        <form className="max-w-xl grid gap-4">
          <Input placeholder="Full Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Primary Instrument" />
          <Input placeholder="Experience (years)" />
          <Button type="button">Apply Now</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Tutor;


