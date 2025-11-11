import React, { useState } from 'react';
import { Users, Award, Clock, BookOpen, Play, Heart, Music, Star, ChevronRight, Sparkles, Target, Zap, Trophy, Wind,PlayCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateCourseSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
const FlutePage = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const courseSchema = generateCourseSchema("Flute", "https://www.saregapadhasa.com/flute");
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Flute Classes", url: "https://www.saregapadhasa.com/flute" }
  ]);

  const features = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Classical Techniques",
      description: "Master authentic Indian classical flute methods from renowned traditions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from accomplished flute maestros with years of performance experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Structured Curriculum",
      description: "Progress through carefully designed levels from beginner to advanced"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Online and offline classes that fit your schedule with recorded sessions"
    }
  ];

  const ragas = [
    { name: "Yaman", difficulty: "Beginner", duration: "15 mins", description: "Foundational evening raga perfect for beginners" },
    { name: "Bhairavi", difficulty: "Intermediate", duration: "20 mins", description: "Expressive morning raga with emotional depth" },
    { name: "Malkauns", difficulty: "Advanced", duration: "25 mins", description: "Profound midnight raga requiring mastery" },
    { name: "Bhimpalasi", difficulty: "Intermediate", duration: "18 mins", description: "Afternoon raga with rich melodic phrases" }
  ];

  const learningPath = [
    {
      level: "Foundation",
      topics: ["Breath control & embouchure", "Basic scales (Sa Re Ga Ma)", "Finger positioning", "Posture & holding"],
      duration: "2-3 months"
    },
    {
      level: "Intermediate",
      topics: ["Raga exploration", "Alankar & taan practice", "Ornamentation techniques", "Rhythm coordination"],
      duration: "4-6 months"
    },
    {
      level: "Advanced",
      topics: ["Complex ragas mastery", "Improvisation skills", "Performance techniques", "Composition & bandish"],
      duration: "6-12 months"
    }
  ];

  const keyHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "3000+ Years of Tradition",
      description: "Ancient instrument from Vedic heritage"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Soulful Melodies",
      description: "Create enchanting, meditative music"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Ready",
      description: "Train for concerts and cultural events"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Spiritual Connection",
      description: "Divine instrument of Lord Krishna"
    }
  ];

  const handleRedirect = () => {
    window.location.href = '/contact';
  };

  return (
    <>
    <SEOHelmet page="flute" />
    <StructuredData data={courseSchema} />
    <StructuredData data={breadcrumbs} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20">
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
                🎵 Classical Indian Wind Instrument
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Bansuri Flute
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                The Divine Voice of Indian Classical Music
              </p>
              <p className="text-lg mb-8 text-white/90">
                Experience the soulful, meditative beauty of the Bansuri flute. Learn this ancient instrument that has captivated hearts for millennia at SaReGaPaDhaSa Music Academy.
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
                    <p className="font-bold text-lg">800+</p>
                    <p className="text-sm text-blue-100">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-blue-100">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 aspect-square flex items-center justify-center">
                  <Wind className="w-64 h-64 text-white/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="w-32 h-32 text-white animate-pulse" />
                  </div>
                </div>
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
      <section className="bg-white border-b-2 border-blue-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-2 rounded-lg flex-shrink-0">
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

      {/* What is Bansuri Flute */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What is the Bansuri Flute?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the ancient bamboo flute that has enchanted souls across India for thousands of years
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                  }}></div>
                </div>
                <div className="text-center relative z-10">
                  <Wind className="w-48 h-48 text-blue-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-700 font-bold text-xl">Traditional Bansuri</p>
                  <p className="text-gray-600 text-sm mt-2">Bamboo • Side-Blown • Divine Instrument</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  Ancient Heritage
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Bansuri is a transverse bamboo flute deeply rooted in Indian classical music tradition. Dating back over 3,000 years, it's the instrument of Lord Krishna and has been immortalized in Indian mythology and art.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  The Instrument
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Made from bamboo with six or seven finger holes, the Bansuri produces hauntingly beautiful tones. Its simple design belies the incredible complexity and emotional depth achievable by skilled players.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  The Experience
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Playing the Bansuri is a meditative experience that connects breath, mind, and music. Its soulful melodies can express the full spectrum of human emotions, from joy to devotion to profound melancholy.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                <p className="text-gray-800 italic text-lg">
                  "The Bansuri is more than an instrument—it's a spiritual companion that transforms breath into meditation and music into prayer."
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cultural Significance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🕉️</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Divine Connection</h4>
                <p className="text-gray-600">Sacred instrument of Lord Krishna, symbolizing divine love and spiritual enlightenment</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎭</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Classical Tradition</h4>
                <p className="text-gray-600">Central to Hindustani classical music and countless raga performances</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🧘</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Meditative Practice</h4>
                <p className="text-gray-600">Promotes mindfulness, breath control, and inner peace through music</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn at SaReGaPaDhaSa?</h2>
            <p className="text-xl text-gray-600">World-class Bansuri education tailored for modern learners</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-blue-300">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ragas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master Classical Ragas</h2>
            <p className="text-xl text-gray-600">Learn the traditional ragas that form the foundation of Indian classical music</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ragas.map((raga, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{raga.name}</h3>
                  <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm mb-4">{raga.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      raga.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      raga.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {raga.difficulty}
                    </span>
                    <span className="text-xs text-gray-600">{raga.duration} practice</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Bansuri Journey</h2>
            <p className="text-xl text-gray-600">A structured path from beginner to accomplished flutist</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  </div>
                  <div className="bg-blue-100 text-blue-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {level.duration}
                  </div>
                  <ul className="space-y-3">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
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
              <span className="text-blue-600 font-semibold">12-24 Months to Mastery</span>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-blue-200 rounded-full -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-2/3 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Start</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">3 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-400 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">9 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-300 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Bansuri Journey Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of students learning this divine instrument at SaReGaPaDhaSa Music Academy
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Enroll now free Trial Class
  </button>
</a>
<a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Schedule Consultation
  </button>
</a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Certified Instructors</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span>800+ Happy Students</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default FlutePage;