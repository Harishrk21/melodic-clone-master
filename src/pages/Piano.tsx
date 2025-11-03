import { useState } from "react";
import { Users, Trophy, Clock, Star, CheckCircle, PlayCircle, Award, Headphones, BookOpen, Target, Zap } from "lucide-react";

// Mock Navigation Component (Replace with: import Navigation from "@/components/Navigation";)
const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black">
      <div className="container mx-auto flex h-28 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-3">
          <div className="h-24 w-24 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            LOGO
          </div>
          <span className="text-2xl font-bold text-white">SareGaPaDhaSa Music Academy</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold">
            Book a FREE Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

// Mock Footer Component (Replace with: import Footer from "@/components/Footer";)
const Footer = () => (
  <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SareGaPaDhaSa</h3>
          <p className="text-gray-400">Empowering musicians worldwide with quality online music education.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Teachers</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Email: info@saregapadhasa.com</li>
            <li>Phone: +1 234 567 8900</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>
      <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2024 SareGaPaDhaSa Music Academy. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Piano = () => {
  const [activeTab, setActiveTab] = useState("acoustic");

  const pianoTypes = [
    {
      id: "acoustic",
      name: "Acoustic Piano",
      description: "The timeless classic with authentic sound. Acoustic pianos offer unmatched resonance and touch sensitivity, perfect for classical training and serious musicians.",
      features: ["Natural acoustic sound", "Superior touch response", "Rich harmonic resonance", "Traditional craftsmanship"],
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop"
    },
    {
      id: "digital",
      name: "Digital Piano",
      description: "Modern convenience meets authentic feel. Digital pianos offer portability, various sounds, and features like recording and metronomes.",
      features: ["Weighted keys", "Multiple sound options", "Headphone practice", "Built-in learning tools"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
    },
    {
      id: "grand",
      name: "Grand Piano",
      description: "The pinnacle of piano craftsmanship. Grand pianos deliver the fullest, most nuanced sound with superior mechanical action.",
      features: ["Superior sound projection", "Enhanced dynamics", "Professional grade", "Concert hall quality"],
      image: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&h=400&fit=crop"
    },
    {
      id: "keyboard",
      name: "Keyboard/Synthesizer",
      description: "Versatility for modern music. Keyboards and synthesizers offer endless sound possibilities for contemporary styles.",
      features: ["Diverse sound library", "Portable & lightweight", "MIDI connectivity", "Perfect for pop & electronic"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop"
    }
  ];

  const learningPath = [
    {
      level: "Beginner",
      duration: "3-6 months",
      topics: ["Hand position & posture", "Basic scales & chords", "Reading sheet music", "Simple melodies & songs"],
      icon: BookOpen
    },
    {
      level: "Intermediate",
      duration: "6-12 months",
      topics: ["Complex chord progressions", "Classical pieces", "Both-hand coordination", "Music theory mastery"],
      icon: Target
    },
    {
      level: "Advanced",
      duration: "12+ months",
      topics: ["Concert repertoire", "Advanced techniques", "Improvisation & composition", "Performance mastery"],
      icon: Award
    }
  ];

  const benefits = [
    { icon: Users, title: "1-on-1 Live Classes", desc: "Personal attention from expert instructors" },
    { icon: Clock, title: "Flexible Scheduling", desc: "Learn at your own pace and time" },
    { icon: Trophy, title: "Certified Teachers", desc: "Learn from qualified music professionals" },
    { icon: Headphones, title: "Online & Offline", desc: "Choose your preferred learning mode" },
    { icon: Star, title: "All Age Groups", desc: "Courses designed for kids, teens & adults" },
    { icon: Zap, title: "Quick Progress", desc: "Structured curriculum for faster learning" }
  ];

  const techniques = [
    { name: "Hand Independence", desc: "Master playing different rhythms with each hand" },
    { name: "Scales & Arpeggios", desc: "Build finger strength and fluidity across keys" },
    { name: "Sight Reading", desc: "Develop the ability to play music at first sight" },
    { name: "Pedaling Techniques", desc: "Learn to use sustain and soft pedals effectively" },
    { name: "Dynamics & Expression", desc: "Add emotion through volume and tempo control" },
    { name: "Chord Voicings", desc: "Explore different ways to play and arrange chords" }
  ];

  const genres = [
    "Classical", "Jazz", "Pop", "Blues", "Contemporary", "Ragtime",
    "Gospel", "Film Scores", "Latin", "R&B", "Soul", "New Age"
  ];

  const heroImage = "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1200&h=600&fit=crop";

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="bg-gradient-to-b from-zinc-950 to-black">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white py-20 overflow-hidden border-b border-zinc-800">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Master the <span className="text-blue-400">Piano</span>
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Looking for best online Piano classes near you? Learn to play Piano for all age groups from the comfort of your home with the best qualified Piano teachers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                    Start Learning Today
                  </button>
                  <button className="border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all flex items-center gap-2">
                    <PlayCircle size={24} /> Watch Demo
                  </button>
                </div>
              </div>
              <div className="hidden md:block">
                <img src={heroImage} alt="Piano Learning" className="rounded-2xl shadow-2xl border border-zinc-800" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose SaReGaPaDhaSa?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-zinc-900 to-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-zinc-700">
                  <benefit.icon className="text-blue-400 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Pianos */}
        <section className="py-16 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Explore Different Pianos</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Choose the perfect piano that matches your musical style and aspirations. Each type offers unique sounds and possibilities.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {pianoTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === type.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-zinc-900 text-gray-300 hover:bg-zinc-800 border border-zinc-700"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>

            {/* Active Piano Type Display */}
            {pianoTypes.map((type) => (
              activeTab === type.id && (
                <div key={type.id} className="bg-zinc-900 rounded-2xl shadow-xl overflow-hidden border border-zinc-800">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-80 md:h-auto">
                      <img src={type.image} alt={type.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-white">{type.name}</h3>
                      <p className="text-gray-300 mb-6 text-lg">{type.description}</p>
                      <div className="space-y-3">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </section>

        {/* Learning Path */}
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Your Piano Learning Journey</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to advanced player with proven teaching methods.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {learningPath.map((level, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-800">
                  <level.icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                  <p className="text-blue-200 mb-6">{level.duration}</p>
                  <ul className="space-y-3">
                    {level.topics.map((topic, topicIdx) => (
                      <li key={topicIdx} className="flex items-start gap-2">
                        <Star size={20} className="text-yellow-400 flex-shrink-0 mt-1" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Techniques Section */}
        <section className="py-16 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">Master Essential Techniques</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Learn the fundamental and advanced techniques that will elevate your piano playing to professional levels.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, idx) => (
                <div key={idx} className="bg-zinc-900 border-2 border-zinc-800 rounded-xl p-6 hover:border-blue-600 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-900 text-blue-300 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">{technique.name}</h4>
                      <p className="text-gray-400">{technique.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Genres Section */}
        <section className="py-16 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white border-y border-zinc-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Play Any Genre You Love</h2>
            <p className="text-center text-blue-200 mb-12 max-w-2xl mx-auto">
              From classical masterpieces to modern jazz, learn to play piano across all musical styles.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {genres.map((genre, idx) => (
                <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full font-semibold hover:bg-opacity-20 transition-all cursor-pointer border border-blue-800">
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book a Trial", desc: "Schedule your free trial class with our piano experts" },
                { step: "2", title: "Get Assessed", desc: "We evaluate your skill level and musical goals" },
                { step: "3", title: "Start Learning", desc: "Begin your personalized piano learning journey" },
                { step: "4", title: "Track Progress", desc: "Monitor your growth and achieve milestones" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white border-t border-zinc-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Piano Journey?</h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join thousands of students who have transformed their musical dreams into reality with SareGaPaDhaSa Music Academy.
            </p>
            <button className="bg-blue-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl">
              Book Your Free Trial Class
            </button>
            <p className="mt-6 text-blue-200">No credit card required • Cancel anytime</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Piano;