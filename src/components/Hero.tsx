import { Button } from "@/components/ui/button";
import { ArrowRight, Users, MapPin, Sparkles, Crown, Music } from "lucide-react";
import heroImage from "../assets/logo.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24 md:py-36">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-yellow-900/10" />
      
      {/* Elegant grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3712_1px,transparent_1px),linear-gradient(to_bottom,#d4af3712_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Golden glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-900/30 to-yellow-900/30 border border-amber-500/40 backdrop-blur-sm shadow-lg shadow-amber-500/20">
              <Crown className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-semibold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Premium Music Education
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                <span className="text-white">Welcome to</span>
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  SaReGaPaDhaSa
                </span>
                <br />
                <span className="text-white">Music Academy</span>
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                  & Live Band
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                Experience premium music education with live 1-to-1 classes and professional live band performances for all your events.
              </p>
            </div>

            {/* Luxury Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="group relative flex items-center gap-4 bg-gradient-to-br from-amber-950/60 to-yellow-950/40 p-5 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover:shadow-amber-400/70 transition-all duration-300">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <div className="relative">
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">15+</p>
                  <p className="text-sm text-amber-300/80 font-medium">Professional Tutors</p>
                </div>
              </div>
              
              <div className="group relative flex items-center gap-4 bg-gradient-to-br from-amber-950/60 to-yellow-950/40 p-5 rounded-2xl border border-amber-500/30 backdrop-blur-sm hover:border-amber-400/60 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-16 w-16 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/50 group-hover:shadow-amber-400/70 transition-all duration-300">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <div className="relative">
                  <p className="text-4xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent">200+</p>
<p className="text-sm text-amber-300/80 font-medium">Happy Students</p>

                </div>
              </div>
            </div>

            {/* Golden CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="group relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 text-black font-bold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-amber-500/50 hover:shadow-amber-400/70 transition-all duration-300 border-0 overflow-hidden"
              >
                <a href="/book-demo" className="relative flex items-center gap-2 z-10">
                  Book a FREE Demo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="group relative bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-500 hover:via-blue-400 hover:to-blue-500 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-400/70 transition-all duration-300 border-0 overflow-hidden"
              >
                <a href="/liveband" className="relative flex items-center gap-2 z-10">
                  <Music className="h-5 w-5" />
                  Book Live Band
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
    asChild
    size="lg"
    className="relative bg-black text-amber-400 font-bold px-8 py-6 text-lg rounded-xl border-2 border-amber-500/50 hover:border-amber-400 hover:bg-amber-950/30 shadow-lg shadow-amber-500/20 hover:shadow-amber-400/40 transition-all duration-300 backdrop-blur-sm"
  >
    <a 
      href="https://wa.me/919003066873?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20music%20classes." 
      target="_blank" 
      rel="noopener noreferrer"
    >
      WhatsApp Us
    </a>
  </Button>
            </div>
          </div>

          {/* Right Image - Luxury Frame */}
          <div className="relative animate-fade-in">
            {/* Outer golden glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 rounded-3xl blur-2xl opacity-30 animate-pulse" />
            
            {/* Decorative corners */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl" />
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-amber-400 rounded-tr-2xl" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-amber-400 rounded-bl-2xl" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-4 border-r-4 border-amber-400 rounded-br-2xl" />
            
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-3xl" />
              <img
                src={heroImage}
                alt="Student learning music online with professional instructor"
                className="relative rounded-3xl shadow-2xl w-full object-cover border-2 border-amber-500/40 group-hover:border-amber-400/70 transition-all duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Floating golden particles */}
              <div className="absolute top-10 -right-6 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75" />
              <div className="absolute top-1/3 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-20 -right-8 w-4 h-4 bg-amber-300 rounded-full animate-ping opacity-75" style={{ animationDelay: '1s' }} />
            </div>

            {/* Background luxury accent orbs */}
            <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-amber-600/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-yellow-500/15 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;