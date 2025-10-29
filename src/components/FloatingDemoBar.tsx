import { Button } from "@/components/ui/button";

const FloatingDemoBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-4 z-[60] px-4">
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-r from-primary to-success text-primary-foreground shadow-2xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4">
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-extrabold leading-tight">Book A FREE DEMO</p>
            <p className="text-sm opacity-90">Let's start your music classes in 3 simple steps</p>
          </div>
          <Button asChild size="lg" variant="secondary" className="font-semibold text-primary">
            <a href="/book-demo">Book Now</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingDemoBar;


