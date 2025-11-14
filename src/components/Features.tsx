import { Video, Clock, Award, Headphones, BookOpen, Users, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Live 1-to-1 Classes",
      description: "Personalized attention with one-on-one video sessions tailored to your learning pace",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose class timings that fit your schedule. Learn at your own convenience",
    },
    {
      icon: Award,
      title: "Grade Certifications",
      description: "Prepare for Trinity, ABRSM, and RSL grade exams with expert guidance",
    },
    {
      icon: Headphones,
      title: "Professional Tutors",
      description: "Learn from 75+ certified music professionals with years of teaching experience",
    },
    {
      icon: BookOpen,
      title: "Structured Curriculum",
      description: "Follow a well-designed syllabus that takes you from beginner to advanced levels",
    },
    {
      icon: Users,
      title: "All Ages Welcome",
      description: "Courses designed for children, teens, and adults. It's never too late to start!",
    },
    {
      icon: Wrench,
      title: "Instrument Servicing",
      description: "Professional maintenance and repair services for all musical instruments",
      hasButton: true,
    },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-yellow-900/10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3712_1px,transparent_1px),linear-gradient(to_bottom,#d4af3712_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-4">
            Why Choose SaReGaPaDhaSa?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Experience the best online music education with our comprehensive features and{" "}
            <span className="text-amber-300 font-semibold">certified professionals</span>
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-gradient-to-br from-amber-950/60 to-yellow-950/40 border border-amber-500/30 backdrop-blur-sm hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-600 shadow-lg shadow-amber-500/50 flex items-center justify-center mb-6 group-hover:shadow-amber-400/70 transition-all duration-300">
                    <Icon className="h-8 w-8 text-black" />
                  </div>
                  <CardTitle className="text-xl font-bold bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-200 bg-clip-text text-transparent">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  
                  {feature.hasButton && (
                    <a
                      href="/contact"
                      className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Book Service
                    </a>
                  )}
                </CardContent>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-yellow-500/0 group-hover:from-amber-500/5 group-hover:to-yellow-500/5 transition-all duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;