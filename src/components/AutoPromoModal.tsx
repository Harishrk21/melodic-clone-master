import { useEffect, useState, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-music-learning.png";

const MIN_MS = 2 * 60 * 1000;
const INITIAL_DELAY_MS = 80 * 1000; // first popup after 10s

const AutoPromoModal = () => {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    // First popup shortly after load, then every 2 minutes
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
          <div className="relative hidden md:block p-6 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 overflow-hidden">
            <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-purple-500/30 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-pink-500/30 blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=800&fit=crop" 
              alt="Music learning" 
              className="relative z-10 rounded-2xl shadow-2xl w-full h-full object-cover" 
            />
            <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/60 backdrop-blur-sm rounded-xl p-4 text-white">
              <p className="text-sm font-bold">🎵 Join 1000+ Happy Students</p>
              <p className="text-xs mt-1 opacity-90">Live classes • Expert tutors • All instruments</p>
            </div>
          </div>
          <div className="p-6 md:p-8 bg-gradient-to-br from-background to-card">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-1.5 text-xs font-bold text-purple-600 border border-purple-200">
              ✨ EXCLUSIVE OFFER • JOIN NOW
            </div>
            <DialogHeader>
              <DialogTitle className="text-3xl md:text-4xl font-bold leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Unlock Your Musical Potential
              </DialogTitle>
              <DialogDescription className="text-base mt-2 text-foreground/80">
                Transform your passion into mastery with <span className="font-bold text-purple-600">elite 1-on-1 coaching</span>
              </DialogDescription>
            </DialogHeader>
            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-foreground"><strong>World-class instructors</strong> with 10+ years experience</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-foreground"><strong>Personalized curriculum</strong> tailored to your goals</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">✓</div>
                <span className="text-foreground"><strong>Flexible scheduling</strong> — online or in-person</span>
              </div>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
              <p className="text-xs font-semibold text-amber-900">🔥 LIMITED TIME: First 20 students get 50% off their first month!</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild variant="hero" size="lg" className="w-full text-base font-bold shadow-lg hover:shadow-xl transition-all">
                <a href="/book-demo">🎸 Book FREE Trial Class</a>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button asChild variant="success" size="lg" className="font-semibold">
                  <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-semibold">
                  <a href="/contact">📞 Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutoPromoModal;