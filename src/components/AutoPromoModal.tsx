import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-music-learning.png";

const MIN_MS = 1 * 60 * 1000;
const INITIAL_DELAY_MS = 10 * 1000; // first popup after 10s

const AutoPromoModal = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // First popup shortly after load, then every 5 minutes
    const kickoff = window.setTimeout(() => setOpen(true), INITIAL_DELAY_MS);
    timerRef.current = window.setInterval(() => setOpen(true), MIN_MS) as unknown as number;
    return () => {
      window.clearTimeout(kickoff);
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl overflow-hidden p-0 border-0">
        <div className="relative grid md:grid-cols-2">
          <div className="relative hidden md:block p-6 bg-gradient-to-br from-primary/20 via-success/20 to-background">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-success/30 blur-3xl" />
            <img src={heroImage} alt="Music learning" className="relative z-10 rounded-2xl shadow-2xl w-full object-cover" />
          </div>
          <div className="p-6 md:p-8 bg-gradient-to-br from-background to-card">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              FREE TRIAL • Limited Slots
            </div>
            <DialogHeader>
              <DialogTitle className="text-2xl md:text-3xl leading-tight">
                Book a FREE Trial Class
              </DialogTitle>
              <DialogDescription className="text-base">
                Live 1‑to‑1 MUSIC CLASS — <span className="font-semibold text-foreground">Offline & Online</span>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-medium">75+ Tutors</span>
              <span className="rounded-full bg-success/10 px-3 py-1 text-success font-medium">120+ Cities</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800 font-medium">English + Regional</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Begin your music journey and get trained by a qualified teacher. Join at our nearby centers (offline) or learn from home (online).
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="success">WhatsApp</Button>
              <Button variant="default" onClick={() => setOpen(false)}>Register Now</Button>
              <Button asChild variant="hero">
                <a href="/book-demo">Book a FREE Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutoPromoModal;


