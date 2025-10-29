import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container mx-auto px-4 py-10 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
        <p className="text-muted-foreground">Have questions? Send us a message and we’ll get back soon.</p>
        <form className="max-w-xl grid gap-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Phone" />
          <Textarea placeholder="How can we help?" />
          <Button type="button">Send Message</Button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;


