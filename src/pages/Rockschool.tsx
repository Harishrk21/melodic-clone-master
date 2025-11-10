import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Trophy, BookOpen, Users, CheckCircle, Star, Award, Target } from "lucide-react";

const Rockschool = () => {
  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Performance Pieces",
      description: "Master contemporary music from rock, pop, and modern genres with expert guidance on authentic performance styles and techniques."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Technical Exercises",
      description: "Build solid foundations with carefully structured technical work covering scales, arpeggios, and instrument-specific techniques."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Musicianship Skills",
      description: "Develop essential music reading, aural skills, and improvisation abilities tailored to contemporary music styles."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Coaching",
      description: "Learn from experienced instructors who understand Rockschool's modern approach and examination requirements."
    }
  ];

  const grades = [
    { level: "Debut - Grade 3", color: "from-blue-500 to-cyan-500", description: "Foundation levels for beginners" },
    { level: "Grade 4 - 5", color: "from-purple-500 to-pink-500", description: "Intermediate development" },
    { level: "Grade 6 - 8", color: "from-orange-500 to-red-500", description: "Advanced performance skills" }
  ];

  const benefits = [
    "Internationally recognized qualifications",
    "Contemporary repertoire from popular music",
    "UCAS points for university applications (Grade 6-8)",
    "Digital grade books and online theory resources",
    "Focus on real-world musical skills",
    "Flexible exam formats including digital submissions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center transform -rotate-6">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Rockschool Grade Exams
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Master contemporary music through RSL Awards (Rockschool) qualifications. We prepare students for internationally recognized grade examinations that celebrate modern musical styles.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-700">Grades Debut - 8</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <Award className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-700">Globally Recognized</span>
            </div>
          </div>
        </div>

        {/* What is Rockschool Section */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold">What is Rockschool?</h2>
          </div>
          <div className="space-y-4 text-gray-100 text-lg leading-relaxed">
            <p>
              Rockschool, part of RSL Awards, is the world's leading provider of contemporary music education and graded examinations. Unlike traditional classical exams, Rockschool focuses on popular music genres including rock, pop, metal, funk, and more.
            </p>
            <p>
              Our structured curriculum takes students from complete beginners (Debut) through to advanced performers (Grade 8), with each grade offering a perfect balance of performance, technical skills, and musicianship development. Rockschool qualifications are recognized by UCAS and universities worldwide.
            </p>
          </div>
        </div>

        {/* Grade Levels */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Grade Pathway</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Progress through structured levels designed for contemporary musicians
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {grades.map((grade, index) => (
              <div key={index} className="group hover:scale-105 transition-transform duration-300">
                <div className={`bg-gradient-to-br ${grade.color} rounded-2xl p-8 text-white shadow-xl h-full`}>
                  <div className="space-y-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{grade.level}</h3>
                    <p className="text-white/90 text-lg">{grade.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Training Program</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive preparation covering all aspects of the Rockschool examination
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 md:p-12 border border-orange-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Why Choose Rockschool?
              </h2>
              <p className="text-gray-600 text-lg">
                Join thousands of students worldwide pursuing contemporary music qualifications
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Exam Components */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Exam Components</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each examination includes carefully designed sections to assess your complete musicianship
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Three Performance Pieces", desc: "Choose from diverse repertoire lists", icon: "🎸" },
              { title: "Technical Exercises", desc: "Scales, chords, and techniques", icon: "🎹" },
              { title: "Sight Reading", desc: "Unprepared piece performance", icon: "📖" },
              { title: "Ear Tests", desc: "Musical perception assessment", icon: "👂" }
            ].map((component, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="text-4xl mb-4">{component.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600 text-sm">{component.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Rock Your Musical Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start your Rockschool grade examination preparation today and gain qualifications that matter in the modern music industry.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a Trial Session
            </button>
            <button className="bg-black/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black/30 transition-colors duration-300 border-2 border-white/30">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Rockschool;