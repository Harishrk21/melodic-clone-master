import React, { useState } from 'react';
import { Music, Mic2, Heart, Award, Users, Clock, BookOpen, Star, Sparkles, Volume2, Headphones, Trophy, CheckCircle,PlayCircle, Play } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const VocalsPage = () => {
  const [activeStyle, setActiveStyle] = useState('carnatic');

  const vocalStyles = {
    carnatic: {
      title: "Carnatic Vocals",
      description: "Master the classical South Indian tradition with our expert guidance in ragas, talas, and traditional compositions.",
      features: ["Alapana & Niraval", "Varnam & Kriti", "Bhajan & Thillana", "Manodharma Sangeetham"],
      image: "🎵"
    },
    hindustani: {
      title: "Hindustani Vocals",
      description: "Explore the rich North Indian classical tradition with training in khayal, thumri, and dhrupad styles.",
      features: ["Raga Development", "Taan & Gamak", "Bandish Practice", "Improvisation Techniques"],
      image: "🎼"
    },
    western: {
      title: "Western Vocals",
      description: "Learn contemporary and classical Western vocal techniques from pop to opera with modern training methods.",
      features: ["Vocal Techniques", "Breath Control", "Pop & Rock Styles", "Music Theory"],
      image: "🎤"
    }
  };

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white pt-20 pb-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">India's Premier Vocal Training Academy</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Discover Your
                <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  True Voice
                </span>
              </h1>
              
              <p className="text-xl text-purple-100 leading-relaxed">
                Master Carnatic, Hindustani, and Western vocals at SaReGaPaDhaSa Music Academy. 
                Transform your passion into excellence with personalized 1-on-1 training from India's finest vocal maestros.
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
              
              <div className="flex items-center space-x-8 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold">5000+</div>
                  <div className="text-purple-200 text-sm">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">50+</div>
                  <div className="text-purple-200 text-sm">Expert Teachers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold">4.9★</div>
                  <div className="text-purple-200 text-sm">Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-3xl backdrop-blur-lg border-4 border-white/30 shadow-2xl flex items-center justify-center">
                <Mic2 className="w-48 h-48 text-white/80" />
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-purple-900 p-4 rounded-2xl shadow-xl rotate-12">
                  <Star className="w-8 h-8" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-pink-400 text-white p-4 rounded-2xl shadow-xl -rotate-12">
                  <Music className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Vocals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Are <span className="text-purple-600">Vocal Classes?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-3xl shadow-lg">
                <Volume2 className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Art of Singing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Vocal training is the journey of discovering and refining your natural instrument - your voice. 
                  It encompasses breathing techniques, pitch control, tonal quality, rhythm mastery, and emotional expression 
                  that transforms ordinary singing into captivating musical performances.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-3xl shadow-lg">
                <BookOpen className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Three Magnificent Traditions</h3>
                <p className="text-gray-700 leading-relaxed">
                  At SaReGaPaDhaSa, we offer comprehensive training in Carnatic (South Indian classical), 
                  Hindustani (North Indian classical), and Western vocal styles. Each tradition offers unique 
                  techniques, scales, and emotional expressions that enrich your musical vocabulary and versatility.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl shadow-lg text-center">
                <Heart className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Emotional Expression</h4>
                <p className="text-sm text-gray-600">Connect deeply with melodies and convey feelings through your voice</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-2xl shadow-lg text-center">
                <Headphones className="w-10 h-10 text-teal-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Perfect Pitch</h4>
                <p className="text-sm text-gray-600">Develop your ear and sing with accuracy and confidence</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl shadow-lg text-center">
                <Music className="w-10 h-10 text-purple-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Versatile Repertoire</h4>
                <p className="text-sm text-gray-600">Master classical, devotional, film, and contemporary songs</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-2xl shadow-lg text-center">
                <Trophy className="w-10 h-10 text-red-500 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Performance Ready</h4>
                <p className="text-sm text-gray-600">Build stage presence and confidence for live performances</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vocal Styles Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Explore <span className="text-purple-600">Vocal Styles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your path or master multiple traditions. Each style offers unique beauty and technical excellence.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            {Object.keys(vocalStyles).map((style) => (
              <button
                key={style}
                onClick={() => setActiveStyle(style)}
                className={`px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                  activeStyle === style
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {vocalStyles[style].title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-6xl">{vocalStyles[activeStyle].image}</div>
                <h3 className="text-3xl font-bold text-gray-900">{vocalStyles[activeStyle].title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{vocalStyles[activeStyle].description}</p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-lg">What You'll Learn:</h4>
                  {vocalStyles[activeStyle].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white p-3 rounded-xl">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Personalized Learning</h4>
                      <p className="text-gray-600 text-sm">One-on-one classes tailored to your voice, goals, and learning pace</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white p-3 rounded-xl">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Expert Instructors</h4>
                      <p className="text-gray-600 text-sm">Learn from trained classical artists with years of performance experience</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-2xl">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-600 text-white p-3 rounded-xl">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Flexible Scheduling</h4>
                      <p className="text-gray-600 text-sm">Choose class timings that fit your lifestyle and commitments</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Learn at SaReGaPaDhaSa */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Learn at <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">SaReGaPaDhaSa Music Academy?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of traditional excellence and modern teaching methods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Certified Expert Teachers</h3>
              <p className="text-gray-700">
                Learn from accomplished artists who have performed at prestigious venues and trained under legendary gurus. 
                Our teachers hold advanced degrees in music and have 10+ years of teaching experience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-pink-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized 1-on-1 Classes</h3>
              <p className="text-gray-700">
                No group sessions - every class is exclusively yours. We assess your unique voice, understand your goals, 
                and create a custom curriculum that accelerates your progress and builds on your strengths.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Headphones className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Learning Platform</h3>
              <p className="text-gray-700">
                State-of-the-art virtual classroom with HD audio, practice recordings, detailed feedback, and progress tracking. 
                Access your lessons anytime and practice with accompaniment tracks.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-green-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Structured Curriculum</h3>
              <p className="text-gray-700">
                From beginner basics to advanced concerts, our scientifically designed syllabus ensures steady progression. 
                Master Sarali Varisai, Alankarams, ragas, and compositions systematically.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-yellow-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Opportunities</h3>
              <p className="text-gray-700">
                Showcase your talent in our virtual concerts, annual recitals, and competitions. 
                Build confidence and stage presence with regular performance training and constructive feedback.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Holistic Development</h3>
              <p className="text-gray-700">
                Beyond technique, we nurture musicianship, cultural appreciation, and artistic expression. 
                Learn music theory, history, and the spiritual essence behind each composition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Your Learning Journey</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              A proven step-by-step path from beginner to performing artist
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Foundation", desc: "Voice assessment, breathing exercises, and basic scales" },
              { step: "02", title: "Building Skills", desc: "Pitch training, rhythm mastery, and simple compositions" },
              { step: "03", title: "Advanced Techniques", desc: "Complex ragas, improvisation, and ornamentations" },
              { step: "04", title: "Performance", desc: "Concert preparation, stage presence, and artistic expression" }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
                  <div className="text-5xl font-bold text-yellow-300 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-purple-100">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white/30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Music className="w-20 h-20 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Discover Your Voice?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their singing with SaReGaPaDhaSa. 
            Start with a FREE trial class today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Book Your Free Trial Class
  </button>
</a>
            
          </div>
          <div className="mt-8 text-gray-400">
            <p>✓ No credit card required • ✓ Instant booking • ✓ Expert guidance</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default VocalsPage;