import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Award, Users, BookOpen, Target, Star, CheckCircle, GraduationCap } from "lucide-react";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const Trinity = () => {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Trinity", url: "https://www.saregapadhasa.com/trinity" }
  ]);
  const instruments = [
    { name: "Guitar", icon: "🎸", grades: "Initial - Grade 8" },
    { name: "Piano/Keyboard", icon: "🎹", grades: "Initial - Grade 8" },
    { name: "Drums", icon: "🥁", grades: "Initial - Grade 8" },
    { name: "Ukulele", icon: "🎸", grades: "Initial - Grade 8" },
    { name: "Violin", icon: "🎻", grades: "Initial - Grade 8" },
    { name: "Voice", icon: "🎤", grades: "Initial - Grade 8" }
  ];

  const examComponents = [
    {
      title: "Repertoire",
      icon: Music,
      description: "Three carefully selected pieces from Trinity's comprehensive syllabus, showcasing diverse musical styles from classical to contemporary.",
      details: ["Classical pieces", "Jazz standards", "Pop & rock songs", "World music"]
    },
    {
      title: "Technical Work",
      icon: Target,
      description: "Essential scales, arpeggios, and technical exercises that build fundamental musicianship and instrumental proficiency.",
      details: ["Scales & arpeggios", "Sight reading", "Improvisation", "Technical studies"]
    },
    {
      title: "Aural Skills",
      icon: BookOpen,
      description: "Developing critical listening abilities including pitch recognition, rhythmic accuracy, and musical memory.",
      details: ["Melody recall", "Rhythm recognition", "Chord identification", "Musical analysis"]
    }
  ];

  const whyTrinity = [
    {
      icon: Award,
      title: "Globally Recognized",
      description: "Trinity College London qualifications are respected worldwide by educational institutions and employers."
    },
    {
      icon: Star,
      title: "Flexible Syllabus",
      description: "Choose from a wide range of musical styles - classical, jazz, rock, pop, and contemporary music."
    },
    {
      icon: Users,
      title: "Expert Coaching",
      description: "Our experienced instructors provide personalized guidance tailored to each student's learning pace."
    },
    {
      icon: GraduationCap,
      title: "Progressive Learning",
      description: "Structured pathway from Initial to Grade 8, with optional performance diplomas beyond."
    }
  ];

  const gradeLevels = [
    { grade: "Initial", level: "Foundation", color: "from-green-500 to-emerald-600" },
    { grade: "Grades 1-3", level: "Elementary", color: "from-blue-500 to-cyan-600" },
    { grade: "Grades 4-5", level: "Intermediate", color: "from-purple-500 to-pink-600" },
    { grade: "Grades 6-8", level: "Advanced", color: "from-orange-500 to-red-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEOHelmet page="trinity" />
      <StructuredData data={breadcrumbs} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Internationally Recognized Music Education
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Trinity College London
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Grade Examinations
              </span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive coaching for Trinity College London music exams. Master repertoire, technical work, and aural skills with our expert instructors across multiple instruments.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Start Your Journey with SaReGaPaDhaSa
  </button>
</a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Instruments Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Instruments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our wide range of instruments, each with complete grade progression from Initial to Grade 8</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {instruments.map((instrument, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {instrument.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{instrument.name}</h3>
              <p className="text-xs text-gray-500">{instrument.grades}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Components */}
      <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exam Components</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our comprehensive training covers all essential components of Trinity College London examinations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {examComponents.map((component, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <component.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{component.title}</h3>
                <p className="text-gray-600 mb-4">{component.description}</p>
                <ul className="space-y-2">
                  {component.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Progressive Grade Levels</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Structured learning pathway designed to develop musicianship from foundation to advanced levels</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {gradeLevels.map((level, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <div className={`bg-gradient-to-br ${level.color} p-8 text-white`}>
                <div className="absolute top-0 right-0 text-8xl font-bold opacity-10">
                  {index + 1}
                </div>
                <div className="relative z-10">
                  <div className="text-sm font-semibold uppercase tracking-wider mb-2 opacity-90">
                    {level.level}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{level.grade}</h3>
                  <p className="text-sm opacity-90">
                    {index === 0 && "Perfect for beginners starting their musical journey"}
                    {index === 1 && "Building fundamental skills and confidence"}
                    {index === 2 && "Developing technical proficiency and expression"}
                    {index === 3 && "Mastering advanced techniques and artistry"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Trinity */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Trinity College London?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Join thousands of students worldwide who trust Trinity qualifications for their musical development</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyTrinity.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
       <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    Ready to Start Your Musical Journey?
  </h2>
  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
    Join our Trinity College London exam preparation program and achieve internationally recognized qualifications
  </p>
  <div className="flex flex-wrap gap-4 justify-center">
    <a
      href="/book-demo"
      className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
    >
      Book a Trial Class
    </a>
    <a
      href="/contact"
      className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all"
    >
      Contact Us
    </a>
  </div>
</div>

      </section>

      <Footer />
    </div>
  );
};

export default Trinity;