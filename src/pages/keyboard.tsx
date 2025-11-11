import React, { useState } from 'react';
import { Users, Award, Clock, BookOpen, Play, Heart, Music, Star, ChevronRight, Sparkles, Target, Zap, Trophy, Piano, Volume2, Headphones,PlayCircle } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateCourseSchema, generateBreadcrumbSchema } from "@/lib/structuredData";
const KeyboardClass = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const courseSchema = generateCourseSchema("Keyboard", "https://www.saregapadhasa.com/keyboard");
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Keyboard Classes", url: "https://www.saregapadhasa.com/keyboard" }
  ]);

  const features = [
    {
      icon: <Piano className="w-8 h-8" />,
      title: "Modern & Classical Fusion",
      description: "Master both Western classical piano techniques and contemporary keyboard styles"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "World-Class Instructors",
      description: "Learn from certified pianists and keyboard experts with international experience"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Grade Exam Preparation",
      description: "Complete preparation for Trinity, ABRSM, and Rockschool grade examinations"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Learning",
      description: "Online and offline classes with recorded sessions and practice materials"
    }
  ];

  const musicalStyles = [
    { name: "Classical Piano", difficulty: "All Levels", description: "Bach, Mozart, Beethoven, and romantic era masterpieces" },
    { name: "Contemporary Pop", difficulty: "Beginner to Advanced", description: "Chart-topping hits and modern arrangements" },
    { name: "Jazz & Blues", difficulty: "Intermediate", description: "Improvisation, chord voicings, and jazz standards" },
    { name: "Film & Bollywood", difficulty: "All Levels", description: "Popular soundtracks and Indian cinema classics" }
  ];

  const learningPath = [
    {
      level: "Foundation",
      topics: ["Keyboard anatomy & posture", "Basic notation reading", "Finger exercises & scales", "Simple melodies (Sa Re Ga Ma)", "Both hands coordination"],
      duration: "3-4 months"
    },
    {
      level: "Intermediate",
      topics: ["Advanced scales & arpeggios", "Chord progressions & harmony", "Sight-reading proficiency", "Genre-specific techniques", "Grade 3-5 exam preparation"],
      duration: "6-8 months"
    },
    {
      level: "Advanced",
      topics: ["Complex compositions", "Improvisation mastery", "Performance techniques", "Advanced music theory", "Grade 6-8 certification"],
      duration: "12-18 months"
    }
  ];

  const keyHighlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "88-Key Mastery",
      description: "Complete piano keyboard proficiency"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multi-Genre Training",
      description: "Classical, Jazz, Pop, and Indian music"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Grade Certifications",
      description: "Trinity & ABRSM exam preparation"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Performance Opportunities",
      description: "Regular recitals and concerts"
    }
  ];

  const gradeExams = [
    { grade: "Initial - Grade 2", focus: "Foundation skills, basic theory, simple pieces", duration: "6-12 months" },
    { grade: "Grade 3 - Grade 5", focus: "Intermediate technique, scales, sight-reading", duration: "12-18 months" },
    { grade: "Grade 6 - Grade 8", focus: "Advanced repertoire, complex theory, performance", duration: "18-24 months" }
  ];

  return (
    <>
    <SEOHelmet page="keyboard" />
    <StructuredData data={courseSchema} />
    <StructuredData data={breadcrumbs} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                🎹 Master the King of Instruments
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Keyboard Classes
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-indigo-100">
                Unlock Your Musical Potential with Expert Piano & Keyboard Training
              </p>
              <p className="text-lg mb-8 text-white/90">
                From your first note to concert-level performances, learn piano and keyboard at India's premier music academy. Master classical techniques, modern styles, and everything in between with SaReGaPaDhaSa's comprehensive curriculum.
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
                    <p className="text-sm text-indigo-100">Active Students</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-sm text-indigo-100">Student Rating</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                <div className="aspect-square flex items-center justify-center">
                  <div className="text-center">
                    <Piano className="w-48 h-48 text-white mx-auto mb-4 opacity-90" />
                    <p className="text-white font-bold text-xl">Professional Keyboard Training</p>
                    <p className="text-indigo-200 text-sm mt-2">88 Keys • Digital & Acoustic • All Genres</p>
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
      <section className="bg-white border-b-2 border-indigo-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyHighlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white p-2 rounded-lg flex-shrink-0">
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

      {/* What is Keyboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What is a Keyboard?</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the versatile instrument that has shaped music across every genre and culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`
                  }}></div>
                </div>
                <div className="text-center relative z-10">
                  <Piano className="w-48 h-48 text-indigo-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-bold text-xl">Modern Digital Keyboard</p>
                  <p className="text-gray-600 text-sm mt-2">61-88 Keys • Touch Sensitive • Multi-Timbral</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                  The Universal Instrument
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The keyboard is the most versatile musical instrument, serving as the foundation for understanding music theory, composition, and performance. From classical piano to modern synthesizers, it spans centuries of musical evolution and every genre imaginable.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                  Acoustic to Digital
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Traditional acoustic pianos produce sound through hammers striking strings, while modern digital keyboards use advanced sampling and synthesis. Both share the same fundamental layout of black and white keys representing the chromatic scale, making skills transferable between instruments.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                  Complete Musical Expression
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With 88 keys spanning over 7 octaves, the keyboard offers the widest range of any instrument. Play melody, harmony, and bass simultaneously. Express dynamics from delicate pianissimo to powerful fortissimo. It's a complete orchestra at your fingertips.
                </p>
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-l-4 border-indigo-600 p-6 rounded-r-lg shadow-md">
                <p className="text-gray-800 italic text-lg">
                  "The piano keys are black and white, but they sound like a million colors in your mind." - Maria Cristina Mena
                </p>
              </div>
            </div>
          </div>

          {/* History Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">A Rich Musical History</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border-2 border-amber-200">
                <div className="text-4xl mb-4">🎼</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">1700s - The Piano is Born</h4>
                <p className="text-gray-700">Bartolomeo Cristofori invented the pianoforte in Italy around 1700, revolutionizing keyboard instruments with dynamic control. The name "pianoforte" means "soft-loud" in Italian.</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
                <div className="text-4xl mb-4">🎹</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">1800s - Golden Age</h4>
                <p className="text-gray-700">The Romantic era saw piano become the "king of instruments." Composers like Chopin, Liszt, and Rachmaninoff pushed technical boundaries while manufacturers perfected modern piano design.</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <div className="text-4xl mb-4">🎛️</div>
                <h4 className="font-bold text-xl text-gray-900 mb-3">1900s - Digital Revolution</h4>
                <p className="text-gray-700">Electronic keyboards and synthesizers emerged, followed by digital pianos with MIDI technology. Today's keyboards combine classical touch with unlimited sound possibilities.</p>
              </div>
            </div>
          </div>

          {/* Features of Keyboard */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 md:p-12 border-2 border-indigo-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Keyboard Features & Advantages</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Volume2 className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Polyphonic Power</h4>
                <p className="text-gray-600">Play multiple notes simultaneously for rich harmonies and complex compositions</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Music className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Visual Learning</h4>
                <p className="text-gray-600">Linear key layout makes music theory and note relationships easy to understand</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Versatile Sounds</h4>
                <p className="text-gray-600">Modern keyboards offer hundreds of instrument sounds and effects in one device</p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Headphones className="w-8 h-8 text-indigo-600" />
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-2">Practice Friendly</h4>
                <p className="text-gray-600">Digital keyboards allow silent practice with headphones anytime, anywhere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn at SaReGaPaDhaSa */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Learn at SaReGaPaDhaSa Academy?</h2>
            <p className="text-xl text-gray-600">Comprehensive keyboard education from foundation to mastery</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-indigo-300">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Musical Styles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Master Multiple Musical Styles</h2>
            <p className="text-xl text-gray-600">From Bach to Bollywood - explore every genre</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {musicalStyles.map((style, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{style.name}</h3>
                  <ChevronRight className="w-6 h-6 text-indigo-600 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-gray-700 text-sm mb-4">{style.description}</p>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">
                  {style.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grade Exams Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">International Grade Examinations</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete preparation for Trinity College London, ABRSM, and Rockschool certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {gradeExams.map((exam, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-200 hover:border-indigo-400 transition-all">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index === 0 ? '1-2' : index === 1 ? '3-5' : '6-8'}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">{exam.grade}</h3>
                <div className="bg-indigo-100 text-indigo-700 inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 mx-auto block text-center w-fit">
                  {exam.duration}
                </div>
                <p className="text-gray-700 text-center">{exam.focus}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What You'll Master in Grade Exams</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">🎵</div>
                <h4 className="font-bold text-gray-900 mb-2">Performance Pieces</h4>
                <p className="text-sm text-gray-600">Multiple contrasting pieces from different periods</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📖</div>
                <h4 className="font-bold text-gray-900 mb-2">Sight Reading</h4>
                <p className="text-sm text-gray-600">Play unfamiliar music at first glance</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">👂</div>
                <h4 className="font-bold text-gray-900 mb-2">Aural Tests</h4>
                <p className="text-sm text-gray-600">Identify rhythms, melodies, and harmonies</p>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-bold text-gray-900 mb-2">Music Theory</h4>
                <p className="text-sm text-gray-600">Comprehensive understanding of musical concepts</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your Keyboard Learning Journey</h2>
            <p className="text-xl text-gray-600">A structured curriculum designed for success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPath.map((level, index) => (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow border-2 border-indigo-200">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-bl-full opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{level.level}</h3>
                  </div>
                  <div className="bg-indigo-600 text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    {level.duration}
                  </div>
                  <ul className="space-y-3">
                    {level.topics.map((topic, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* SaReGaPaDhaSa Teaching Method */}
          <div className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl p-8 md:p-12 border-2 border-indigo-300">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">The SaReGaPaDhaSa Method - A to Z Musical Education</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">D</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Dynamic Control</h4>
                    <p className="text-gray-700 text-sm">Master expression through touch sensitivity and pedaling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">E</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Ear Training</h4>
                    <p className="text-gray-700 text-sm">Develop perfect pitch recognition and harmonic awareness</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">F</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Finger Technique</h4>
                    <p className="text-gray-700 text-sm">Build strength, agility, and proper hand positioning</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">G</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Genre Diversity</h4>
                    <p className="text-gray-700 text-sm">Classical, jazz, pop, Bollywood, and world music</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">H</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Harmony & Theory</h4>
                    <p className="text-gray-700 text-sm">Understand chords, progressions, and composition</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">I</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Indian Classical Integration</h4>
                    <p className="text-gray-700 text-sm">Learn Sa Re Ga Ma Pa Dha Ni Sa on keyboard</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">J</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Joy of Performance</h4>
                    <p className="text-gray-700 text-sm">Regular recitals and concert opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-700 italic text-lg">...and so much more! From K to Z, we cover every aspect of keyboard mastery.</p>
            </div>
          </div>

          {/* Progress Timeline */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Complete Learning Timeline</h3>
              <span className="text-indigo-600 font-semibold">18-36 Months to Advanced Level</span>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-indigo-200 rounded-full -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-0 w-2/3 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full -translate-y-1/2"></div>
              <div className="relative flex justify-between">
                <div className="text-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Start</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-indigo-500 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">4 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-indigo-400 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">12 Months</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-indigo-300 rounded-full border-4 border-white shadow-lg mx-auto mb-2"></div>
                  <p className="text-xs font-semibold text-gray-700">Mastery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Student Achievements</h2>
            <p className="text-xl text-gray-600">Real results from our keyboard program</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🏆</div>
              <h3 className="text-2xl font-bold text-center text-indigo-600 mb-2">95%</h3>
              <p className="text-center text-gray-700 font-semibold mb-2">Grade Exam Pass Rate</p>
              <p className="text-center text-sm text-gray-600">Students successfully clearing Trinity & ABRSM exams</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4 text-center">🎹</div>
              <h3 className="text-2xl font-bold text-center text-indigo-600 mb-2">200+</h3>
              <p className="text-center text-gray-700 font-semibold mb-2">Performance Recitals</p>
              <p className="text-center text-sm text-gray-600">Students performing in concerts and competitions annually</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="text-5xl mb-4 text-center">⭐</div>
              <h3 className="text-2xl font-bold text-center text-indigo-600 mb-2">50+</h3>
              <p className="text-center text-gray-700 font-semibold mb-2">Competition Winners</p>
              <p className="text-center text-sm text-gray-600">National and international keyboard competition awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Begin Your Keyboard Journey Today</h2>
          <p className="text-xl mb-8 text-indigo-100">
            Join over 1000 students mastering the keyboard at SaReGaPaDhaSa Music Academy. From your first chord to concert performances, we're with you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Book Your Free Trial Class
  </button>
</a>
            
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Award className="w-5 h-5" />
              <span>Grade Exam Preparation</span>
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

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">What You Get:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>1-on-1 personalized instruction</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Flexible online/offline classes</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Recorded session access</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Performance opportunities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Grade exam preparation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span>Practice materials & guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
};

export default KeyboardClass;