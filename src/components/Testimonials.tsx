import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Guitar Student",
      content: "The instructors are incredibly patient and skilled. I've learned more in 3 months here than I did in a year of self-learning!",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Piano Student",
      content: "Flexible scheduling and personalized attention made all the difference. My son loves his piano classes!",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      role: "Vocal Student",
      content: "Preparing for my Trinity grade exam has been smooth thanks to the structured curriculum and expert guidance.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-black relative overflow-hidden">
      {/* Glowing orbs background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3712_1px,transparent_1px),linear-gradient(to_bottom,#d4af3712_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Join thousands of happy students learning music with{" "}
            <span className="text-amber-400 font-medium">MusicMaster</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-br from-amber-950/60 to-yellow-950/40 border border-amber-500/30 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-5 w-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" 
                    />
                  ))}
                </div>
                <p className="text-gray-400 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="pt-2 border-t border-amber-500/20">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-amber-300/80 font-medium">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
