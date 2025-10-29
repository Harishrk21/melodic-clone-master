import { Video, Clock, Award, HeadphonesIcon, BookOpen, Users } from "lucide-react";
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
      icon: HeadphonesIcon,
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
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose MusicMaster?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the best online music education with our comprehensive features
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
