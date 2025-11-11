import React, { useState } from 'react';
import { Users, Award, Clock, BookOpen, Play, Heart, Music, Star, ChevronRight, Sparkles, Target, Zap, Trophy, Headphones,PlayCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateCourseSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
const DrumsPage = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const courseSchema = generateCourseSchema("Drums", "https://www.saregapadhasa.com/drums");
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Drum Classes", url: "https://www.saregapadhasa.com/drums" }
  ]);

  const features = [
    {
      icon: <Music className="w-8 h-8" />,
      title: "Modern Techniques",
      description: "Master contemporary drumming styles from rock to jazz to electronic"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Professional Drummers",
      description: "Learn from experienced performers with extensive stage and studio experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Progressive Curriculum",
      description: "Structured learning path from basic beats to complex polyrhythms"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Online classes with personalized timing and recorded session access"
    }
  ];

  const drumStyles = [
    { name: "Rock Drumming", difficulty: "Beginner", duration: "4/4 time", description: "Powerful backbeats and driving rhythms" },
    { name: "Jazz Drumming", difficulty: "Advanced", duration: "Swing/Complex", description: "Intricate brush work and improvisational skills" },
    { name: "Pop Drumming", difficulty: "Beginner", duration: "4/4 time", description: "Clean grooves and consistent pocket playing" },
    { name: "Funk & Fusion", difficulty: "Intermediate", duration: "Syncopated", description: "Ghost notes and complex coordination patterns" }
  ];

  const learningPath = [
    {
      level: "Foundation",
      topics: ["Drum kit anatomy & setup", "Basic grip & posture", "Single & double strokes", "Basic rock beats"],
      duration: "2-3 months"
    },
    {
      level: "Intermediate",
      topics: ["Paradiddles & rudiments", "Fill patterns", "Genre-specific grooves", "Dynamic control"],
      duration: "4-6 months"
    },
    {
      level: "Advanced",
      topics: ["Complex polyrhythms", "Double bass techniques", "Improvisation", "Studio & live performance"],
      duration: "6-12 months"
    }
  ];

  const keyHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "All Genres Covered",
      description: "Rock, Jazz, Pop, Metal, Electronic, and more"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Progress",
      description: "Play your first song within weeks"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Ready",
      description: "Prepare for bands, recordings, and live shows"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Creative Expression",
      description: "Develop your unique drumming voice"
    }
  ];

  return (
    <>
    <SEOHelmet page="drums" />
    <StructuredData data={courseSchema} />
    <StructuredData data={breadcrumbs} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white py-20">
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
                🥁 Master the Beat
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Drum Classes
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                The Rhythm Revolution Starts Here
              </p>
              <p className="text-lg mb-8 text-white/90">
                Unleash your inner drummer with comprehensive online drum lessons. From basic beats to advanced techniques, learn the instrument that drives every great song at SaReGaPaDhaSa Music Academy.
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
                {/* Replace this placeholder with your actual drum image */}
                <div className="w-full aspect-square bg-gradient-to-br from-slate-700 to-blue-900 flex items-center justify-center">
                  <Music className="w-48 h-48 text-white/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/60 text-sm">Replace with drum kit image</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold shadow-xl transform hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Top-Rated Program</span>
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

      {/* What is Drums */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn Drums?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the instrument that is the backbone of modern music
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
                  <Music className="w-48 h-48 text-blue-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-700 font-bold text-xl">Complete Drum Kit</p>
                  <p className="text-gray-600 text-sm mt-2">Snare • Toms • Bass • Cymbals • Hi-Hat</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  The Foundation of Music
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Drums form the rhythmic foundation of virtually every musical genre. As a drummer, you become the heartbeat of any band, controlling tempo, dynamics, and energy. This powerful role makes drums one of the most sought-after instruments to master.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  Physical & Mental Benefits
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Drumming provides an incredible full-body workout while developing coordination, concentration, and timing. It's proven to reduce stress, improve brain function, and boost confidence. Plus, it's one of the most fun ways to stay active!
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  Versatile Expression
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  From thunderous rock beats to subtle jazz brushwork, drums offer limitless creative possibilities. Express yourself through rhythm in any style—rock, jazz, pop, metal, electronic, funk, Latin, and beyond.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-6 rounded-r-lg shadow-md">
                <p className="text-gray-800 italic text-lg">
                  "The drums aren't just an instrument—they're a conversation between body, mind, and music. Every beat tells a story."
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12 border-2 border-blue-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">What You'll Experience</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎸</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Band Performance</h4>
                <p className="text-gray-600">Join or form bands, play live shows, and collaborate with other musicians</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎵</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Studio Recording</h4>
                <p className="text-gray-600">Learn professional recording techniques and session drumming skills</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">⚡</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Creative Freedom</h4>
                <p className="text-gray-600">Develop your unique style and improvise with confidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn at SaReGaPaDhaSa?</h2>
            <p className="text-xl text-gray-600">Professional drum education designed for all skill levels</p>
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

      {/* Drum Styles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Different Drumming Styles</h2>
            <p className="text-xl text-gray-600">Master various genres and techniques</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {drumStyles.map((style, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{style.name}</h3>
                  <ChevronRight className="w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm mb-4">{style.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      style.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      style.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {style.difficulty}
                    </span>
                    <span className="text-xs text-gray-600">{style.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Drumming Journey</h2>
            <p className="text-xl text-gray-600">A clear path from beginner to professional drummer</p>
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
      <section className="py-20 bg-gradient-to-r from-slate-800 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Drumming Journey Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students learning drums at SaReGaPaDhaSa Music Academy
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            
            
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Professional Instructors</span>
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

export default DrumsPage;