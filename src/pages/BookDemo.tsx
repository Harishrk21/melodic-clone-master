import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const BookDemo = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Book a FREE Demo</h1>
        <form className="max-w-xl grid gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Phone" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Instrument" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="guitar">Guitar</SelectItem>
              <SelectItem value="piano">Piano</SelectItem>
              <SelectItem value="vocals">Vocals</SelectItem>
              <SelectItem value="drums">Drums</SelectItem>
              <SelectItem value="violin">Violin</SelectItem>
              <SelectItem value="flute">Flute</SelectItem>
            </SelectContent>
          </Select>
          <Button type="button" variant="hero">Book Demo</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;


