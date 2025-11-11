import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Award, Music, BookOpen, Users, Target, Star, Clock, CheckCircle, Trophy, GraduationCap } from "lucide-react";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const ABRSM = () => {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "ABRSM", url: "https://www.saregapadhasa.com/abrsm" }
  ]);
  const grades = [
    { level: "Grades 1-3", desc: "Foundation levels for beginners", color: "from-blue-500 to-cyan-500" },
    { level: "Grades 4-5", desc: "Intermediate development", color: "from-purple-500 to-pink-500" },
    { level: "Grades 6-8", desc: "Advanced performance", color: "from-orange-500 to-red-500" },
    { level: "Diploma", desc: "Professional certification", color: "from-amber-500 to-yellow-500" }
  ];

  const features = [
    { icon: Users, title: "Qualified Tutors", desc: "Learn from experienced ABRSM-certified instructors with proven track records" },
    { icon: BookOpen, title: "Structured Syllabus", desc: "Follow the official ABRSM curriculum with comprehensive study materials" },
    { icon: Target, title: "Personalized Training", desc: "Tailored lessons designed to match your pace and learning style" },
    { icon: Clock, title: "Flexible Scheduling", desc: "Choose class times that work best for your busy schedule" },
    { icon: Trophy, title: "High Success Rate", desc: "Our students consistently achieve distinction and merit grades" },
    { icon: Music, title: "All Instruments", desc: "Piano, guitar, violin, voice, and more instruments covered" }
  ];

  const examComponents = [
    { name: "Performance", desc: "Three pieces from the ABRSM repertoire", icon: Music },
    { name: "Scales & Arpeggios", desc: "Technical exercises for your grade level", icon: Target },
    { name: "Sight Reading", desc: "Play an unseen piece after brief preparation", icon: BookOpen },
    { name: "Aural Tests", desc: "Listening skills and musical perception", icon: Star }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SEOHelmet page="abrsm" />
      <StructuredData data={breadcrumbs} />
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6 py-12">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Official ABRSM Exam Center
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            ABRSM Grade Exams
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Unlock your musical potential with world-recognized ABRSM certifications. Our expert tutors guide you through every step of your musical journey, from your first exam to professional diplomas.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
         <a
  href="/contact"
  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all transform hover:scale-105 inline-block"
>
  Start Your Journey With SaReGaPaDhaSa Academy
</a>

            
          </div>
        </section>

        {/* What is ABRSM Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-10 h-10 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What is ABRSM?</h2>
          </div>
          <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
            <p>
              The <strong>Associated Board of the Royal Schools of Music (ABRSM)</strong> is the world's leading authority in music assessments. With over 130 years of expertise, ABRSM exams are recognized globally by schools, universities, and employers as proof of musical achievement.
            </p>
            <p>
              ABRSM offers graded music exams from Initial Grade to Grade 8, plus three diploma levels (DipABRSM, LRSM, FRSM). Each exam assesses your performance skills, technical ability, musical understanding, and sight-reading capabilities, providing a comprehensive evaluation of your musicianship.
            </p>
            <p>
              Our academy provides specialized training that prepares students not just to pass exams, but to develop as confident, well-rounded musicians with skills that last a lifetime.
            </p>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Grade Levels We Offer</h2>
            <p className="text-slate-600 text-lg">Progress through structured levels tailored to your skill development</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grades.map((grade, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${grade.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                <div className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${grade.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">{grade.level}</h3>
                  <p className="text-slate-600">{grade.desc}</p>
                  <div className={`h-1 w-20 bg-gradient-to-r ${grade.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Exam Components */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">What's in the Exam?</h2>
            <p className="text-slate-600 text-lg">Four key components that assess your complete musicianship</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {examComponents.map((component, idx) => {
              const Icon = component.icon;
              return (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border-2 border-slate-100 hover:border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-4 rounded-xl">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-2xl font-bold text-slate-800">{component.name}</h3>
                      <p className="text-slate-600 text-lg">{component.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Features Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Why Train With Us?</h2>
            <p className="text-slate-600 text-lg">Comprehensive preparation that goes beyond the exam</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all border border-slate-200">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Training Process */}
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Training Process</h2>
            <p className="text-xl text-blue-100">A proven pathway to exam success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Assessment", desc: "We evaluate your current level and create a personalized study plan" },
              { step: "2", title: "Preparation", desc: "Structured lessons covering all exam components with regular practice" },
              { step: "3", title: "Excellence", desc: "Mock exams and feedback sessions ensure you're fully prepared" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center space-y-4 hover:bg-white/20 transition-all">
                <div className="w-16 h-16 bg-white text-purple-600 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-blue-100 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <GraduationCap className="w-16 h-16 text-blue-600 mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Benefits of ABRSM Certification</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              "Globally recognized qualification accepted by universities worldwide",
              "Builds confidence through structured achievement milestones",
              "Develops discipline, time management, and performance skills",
              "Enhances college and university applications",
              "Creates opportunities for music scholarships",
              "Provides a framework for lifelong musical development",
              "Improves cognitive abilities and academic performance",
              "Opens doors to teaching and professional music careers"
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-slate-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 py-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Ready to Begin Your Musical Journey?</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join hundreds of successful students who have achieved their ABRSM certifications with us
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
  <a
    href="/contact"
    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center gap-2"
  >
    <Award className="w-6 h-6" />
    Enroll Now
  </a>

  <a
    href="/book-demo"
    className="bg-white text-slate-700 px-10 py-5 rounded-xl font-semibold text-lg border-2 border-slate-300 hover:border-blue-600 hover:shadow-lg transition-all flex items-center gap-2"
  >
    <Music className="w-6 h-6" />
    Schedule Trial Class
  </a>
</div>

        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ABRSM;