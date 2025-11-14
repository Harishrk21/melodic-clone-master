import React, { useState } from 'react';
import { Users, Award, Clock, BookOpen, Play, Heart, Music, Star, ChevronRight, Sparkles, Target, Zap, Trophy,PlayCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateCourseSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
const Violin = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const courseSchema = generateCourseSchema("Violin", "https://www.saregapadhasa.com/violin");
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Violin Classes", url: "https://www.saregapadhasa.com/violin" }
  ]);

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Classical & Contemporary",
      description: "Master both Western classical techniques and modern violin styles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "World-Class Instructors",
      description: "Learn from accomplished violinists with international performance experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Personalized Curriculum",
      description: "Tailored learning path designed specifically for your goals and skill level"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Live 1-to-1 Classes",
      description: "Personal attention with flexible scheduling and recorded sessions"
    }
  ];

  const repertoire = [
    { name: "Bach Partitas", difficulty: "Advanced", style: "Baroque", description: "Masterworks of solo violin literature" },
    { name: "Vivaldi Seasons", difficulty: "Intermediate", style: "Baroque", description: "Iconic concertos full of color and emotion" },
    { name: "Suzuki Method", difficulty: "Beginner", style: "Traditional", description: "Time-tested approach for foundational skills" },
    { name: "Contemporary Pieces", difficulty: "All Levels", style: "Modern", description: "Popular music and film scores" }
  ];

  const learningPath = [
    {
      level: "Foundation",
      topics: ["Proper posture & bow hold", "Basic bowing techniques", "Simple melodies & scales", "Reading music notation"],
      duration: "2-4 months"
    },
    {
      level: "Intermediate",
      topics: ["Shifting positions", "Vibrato technique", "Complex bow strokes", "Intermediate repertoire"],
      duration: "6-12 months"
    },
    {
      level: "Advanced",
      topics: ["Advanced techniques", "Concerto performance", "Expression & musicality", "Performance preparation"],
      duration: "12+ months"
    }
  ];

  const keyHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "400+ Years of Tradition",
      description: "Master the queen of instruments"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "All Ages Welcome",
      description: "From children to adults, start anytime"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Ready",
      description: "Prepare for recitals and competitions"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Versatile Repertoire",
      description: "Classical, jazz, folk, and contemporary"
    }
  ];

  return (
    <>
    <SEOHelmet page="violin" />
    <StructuredData data={courseSchema} />
    <StructuredData data={breadcrumbs} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎻 The Queen of Instruments
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Online Violin Classes
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-purple-100">
                Live 1-to-1 Lessons with World-Class Instructors
              </p>
              <p className="text-lg mb-8 text-white/90">
                Looking for the best online violin classes? Learn to play violin from the comfort of your home with qualified teachers. Master classical techniques, develop beautiful tone, and bring music to life through personalized instruction designed for all ages and skill levels.
              </p>
             <div className="flex flex-wrap gap-4">
  <a href="/book-demo">
    <button className="bg-yellow-400 text-purple-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-lg">
      Start Learning Today
    </button>
  </a>
  <a 
    href="https://www.youtube.com/@SaReGaPaDhaSa" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-900 transition-all flex items-center gap-2">
      <PlayCircle size={24} /> Watch Demo
    </button>
  </a>
</div>
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">1000+</p>
                    <p className="text-sm text-purple-100">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-purple-100">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
    {/* Violin Image */}
    <img
      src="/src/assets/violin.jpg"
      alt="Violin"
      className="w-full aspect-square object-cover"
    />
  </div>

  <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-xl transform hover:scale-110 transition-transform">
    <div className="flex items-center gap-2">
      <Trophy className="w-5 h-5" />
      <span>Award-Winning Program</span>
    </div>
  </div>
</div>

          </div>
        </div>
      </section>

      {/* Key Highlights Bar */}
      <section className="bg-white border-b-2 border-purple-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg border border-purple-200">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white p-2 rounded-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Violin */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn the Violin?</h2>
            <div className="w-24 h-1 bg-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why the violin has captivated musicians and audiences for over four centuries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                  }}></div>
                </div>
                <div className="text-center relative z-10">
                  <Music className="w-48 h-48 text-purple-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-700 font-bold text-xl">The Violin</p>
                  <p className="text-gray-600 text-sm mt-2">Expressive • Versatile • Timeless</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  The Instrument
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The violin is a four-stringed wooden instrument known for its expressive voice and incredible range. Often called the "queen of instruments," it can sing with the human voice, soar above orchestras, and touch hearts with its emotional depth. Its compact size belies its powerful sound and versatility.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  Endless Possibilities
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From Bach's sublime partitas to fiddle tunes, from soaring film scores to jazz improvisation, the violin adapts to every musical style. Whether you dream of performing in concert halls, playing in orchestras, or entertaining at gatherings, the violin opens doors to limitless musical expression.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  Cognitive Benefits
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Learning violin enhances memory, improves coordination, boosts concentration, and develops discipline. Studies show that violin training strengthens neural connections and enhances cognitive abilities in both children and adults. It's not just music—it's brain development.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-600 p-6 rounded-r-lg shadow-md">
                <p className="text-gray-800 italic text-lg">
                  "The violin is the most human of all instruments, capable of expressing the full range of human emotion from joy to sorrow, from passion to tranquility."
                </p>
              </div>
            </div>
          </div>

          {/* Musical Versatility */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-purple-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Musical Versatility</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎼</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Classical Music</h4>
                <p className="text-gray-600">Master the great concertos, sonatas, and chamber works of Mozart, Beethoven, and Brahms</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎬</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Modern Repertoire</h4>
                <p className="text-gray-600">Play contemporary pieces, film scores, and popular music arrangements</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🌍</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">World Music</h4>
                <p className="text-gray-600">Explore folk traditions, Celtic fiddle, Indian classical, and jazz improvisation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Our Online Violin Classes?</h2>
            <p className="text-xl text-gray-600">Premium violin education tailored for your success</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-purple-300">
                <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Your Violin Repertoire</h2>
            <p className="text-xl text-gray-600">From baroque masterpieces to contemporary favorites</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repertoire.map((piece, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{piece.name}</h3>
                  <ChevronRight className="w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm mb-4">{piece.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      piece.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      piece.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      piece.difficulty === 'All Levels' ? 'bg-blue-100 text-blue-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {piece.difficulty}
                    </span>
                    <span className="text-xs text-gray-600">{piece.style}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Violin Learning Journey</h2>
            <p className="text-xl text-gray-600">A structured path from your first notes to confident performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-purple-500 to-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  </div>
                  <div className="bg-purple-100 text-purple-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {level.duration}
                  </div>
                  <ul className="space-y-3">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Complete Learning Timeline</h3>
              <span className="text-purple-600 font-semibold">12-24 Months to Performance Ready</span>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-purple-200 rounded-full -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-2/3 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Start</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">4 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-400 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">12 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-300 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Violin Journey Today</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join thousands of students learning violin with qualified teachers from the comfort of home
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
           <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Book Your Free Trial Class
  </button>
</a>
<a href="/contact">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Talk to an Advisor
  </button>
</a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Certified Teachers</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span>1000+ Happy Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default Violin;