import { Button } from "@/components/ui/button";

interface InstrumentHeroProps {
  instrument: string;
  description: string;
  imageSrc: string;
}

const InstrumentHero = ({ instrument, description, imageSrc }: InstrumentHeroProps) => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary text-lg font-medium">Live 1 to 1</p>
            <h1 className="text-5xl md:text-6xl font-bold">
              Online <span className="text-primary">{instrument}</span> Classes
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Book a FREE Demo
              </Button>
              <Button variant="success" size="lg">
                WhatsApp Us
              </Button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img
              src={imageSrc}
              alt={`${instrument} classes`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstrumentHero;
