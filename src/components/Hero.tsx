import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-music-learning.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background py-24 md:py-36">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
                Live 1-to-1 {" "}
                <span className="text-primary">Offline & Online</span> Music Classes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                Taught by professional tutors for all ages. Learn at our centers (offline) or from home (online). Instructions in English & all major Indian languages.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">75+</p>
                  <p className="text-sm text-muted-foreground">Professional Tutors</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">120+</p>
                  <p className="text-sm text-muted-foreground">Cities Worldwide</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="hero" size="lg" className="group">
                <a href="/book-demo">Book a FREE Demo</a>
              </Button>
              <Button variant="success" size="lg">
                WhatsApp Us
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="Student learning music online with professional instructor"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-80 h-80 bg-primary/20 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-6 -left-6 w-80 h-80 bg-success/20 rounded-full blur-3xl -z-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
