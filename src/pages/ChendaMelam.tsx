import React, { useState } from 'react';
import { Users, Award, Clock, BookOpen, Play, Heart, Drum, Star, ChevronRight, Sparkles, Target, Zap, Trophy,PlayCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import chenda1 from "../assets/chenda1.jpg";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const ChendaMelam = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Chenda Melam", url: "https://www.saregapadhasa.com/chenda-melam" }
  ]);

  const features = [
    {
      icon: <Drum className="w-8 h-8" />,
      title: "Traditional Techniques",
      description: "Master authentic Kerala percussion methods passed down through generations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from acclaimed Chenda masters with decades of performance experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Structured Curriculum",
      description: "Progress through carefully designed levels from beginner to advanced"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Online classes that fit your schedule with recorded sessions available"
    }
  ];

  const rhythmPatterns = [
    { name: "Panchari Melam", difficulty: "Intermediate", duration: "45 beats", description: "Sacred temple rhythm with five variations" },
    { name: "Pandi Melam", difficulty: "Advanced", duration: "128 beats", description: "The most complex and prestigious melam form" },
    { name: "Champa", difficulty: "Beginner", duration: "32 beats", description: "Foundational rhythm for learning basics" },
    { name: "Chempada", difficulty: "Intermediate", duration: "64 beats", description: "Dynamic rhythm with intricate patterns" }
  ];

  const learningPath = [
    {
      level: "Foundation",
      topics: ["Chenda anatomy & care", "Basic grip techniques", "Simple rhythmic patterns", "Posture & stance"],
      duration: "2-3 months"
    },
    {
      level: "Intermediate",
      topics: ["Complex talas", "Panchari melam basics", "Group coordination", "Speed development"],
      duration: "4-6 months"
    },
    {
      level: "Advanced",
      topics: ["Pandi melam mastery", "Improvisation skills", "Temple festival styles", "Performance techniques"],
      duration: "6-12 months"
    }
  ];

  const keyHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "2000+ Years of Heritage",
      description: "Ancient art form from Kerala's temple traditions"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Powerful Sound",
      description: "Thunderous rhythms heard miles away"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Performance Ready",
      description: "Train for temple festivals and cultural events"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Spiritual Connection",
      description: "Sacred art connecting to divine heritage"
    }
  ];

  return (
    <>
    <SEOHelmet page="chendaMelam" />
    <StructuredData data={breadcrumbs} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-amber-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white py-20">
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
                🥁 Traditional Kerala Percussion Art
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Chenda Melam
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-orange-100">
                The Thunderous Heartbeat of Kerala's Heritage
              </p>
              <p className="text-lg mb-8 text-white/90">
                Experience the power, precision, and spirituality of one of India's most magnificent percussion traditions. Learn the sacred art of Chenda Melam from master drummers at SaReGaPaDhaSa Music Academy.
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
                    <p className="font-bold text-lg">500+</p>
                    <p className="text-sm text-orange-100">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-orange-100">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>
            
             <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={chenda1} 
                  alt="Chenda Melam Performance" 
                  className="w-full h-full object-cover aspect-square"
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
      <section className="bg-white border-b-2 border-orange-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-2 rounded-lg flex-shrink-0">
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

      {/* What is Chenda Melam */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What is Chenda Melam?</h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the ancient percussion ensemble that has echoed through Kerala's temples for millennia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                  }}></div>
                </div>
                <div className="text-center relative z-10">
                  <Drum className="w-48 h-48 text-orange-600 mx-auto mb-4 animate-pulse" />
                  <p className="text-gray-700 font-bold text-xl">Traditional Chenda Drum</p>
                  <p className="text-gray-600 text-sm mt-2">Jackwood Cylinder • Leather Heads • Sacred Instrument</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  Ancient Origins
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Chenda Melam is an ancient percussion ensemble from Kerala, India, creating one of the world's most powerful and rhythmically complex musical experiences. This sacred art form has been the spiritual soundtrack of Kerala's temples for over 2,000 years.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  The Instrument
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Chenda is a cylindrical drum made from jackwood, with leather heads on both ends. It produces thunderous sounds that can be heard miles away. Players use two sticks – one curved and one straight – to create the distinctive rhythmic patterns.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  The Experience
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  When multiple Chenda players perform together in melam (ensemble), they create intricate polyrhythmic patterns that build to ecstatic crescendos. The experience is both physically powerful and spiritually transcendent.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-600 p-6 rounded-r-lg shadow-md">
                <p className="text-gray-800 italic text-lg">
                  "Chenda Melam is not just music—it's a spiritual experience that connects performers and listeners to Kerala's divine heritage through the language of rhythm."
                </p>
              </div>
            </div>
          </div>

          {/* Cultural Significance */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12 border-2 border-orange-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cultural Significance</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🛕</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Temple Festivals</h4>
                <p className="text-gray-600">Essential part of Kerala's temple rituals and festivals, especially during Thrissur Pooram</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🎭</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Cultural Identity</h4>
                <p className="text-gray-600">Symbol of Kerala's rich cultural heritage and artistic excellence</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">🙏</span>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Spiritual Practice</h4>
                <p className="text-gray-600">Sacred offering to deities, connecting divine and earthly realms</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn at SaReGaPaDhaSa?</h2>
            <p className="text-xl text-gray-600">World-class Chenda Melam education tailored for modern learners</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-orange-300">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rhythm Patterns */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master Traditional Rhythm Patterns</h2>
            <p className="text-xl text-gray-600">Learn the authentic melam compositions performed in Kerala's temples</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rhythmPatterns.map((pattern, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{pattern.name}</h3>
                  <ChevronRight className="w-6 h-6 text-orange-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm mb-4">{pattern.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      pattern.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                      pattern.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {pattern.difficulty}
                    </span>
                    <span className="text-xs text-gray-600">{pattern.duration} cycle</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Chenda Melam Journey</h2>
            <p className="text-xl text-gray-600">A structured path from beginner to master performer</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((level, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  </div>
                  <div className="bg-orange-100 text-orange-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {level.duration}
                  </div>
                  <ul className="space-y-3">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
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
              <span className="text-orange-600 font-semibold">12-24 Months to Mastery</span>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-orange-200 rounded-full -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-2/3 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Start</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">3 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">9 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-orange-300 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Chenda Melam Journey Today</h2>
          <p className="text-xl mb-8 text-orange-100">
            Join hundreds of students learning this magnificent percussion tradition at SaReGaPaDhaSa Music Academy
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
           <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Book Your Free Trial Class
  </button>
</a>
<a href="/contact">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Schedule Your consultation
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
              <span>500+ Happy Students</span>
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

export default ChendaMelam;