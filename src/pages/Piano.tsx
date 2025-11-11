import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Users, Trophy, Clock, Star, CheckCircle, PlayCircle, Award, Headphones, BookOpen, Target, Zap } from "lucide-react";
import heroImage from "../assets/keyboard.png";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateCourseSchema, generateBreadcrumbSchema } from "@/lib/structuredData";

const Guitar = () => {
  const [activeTab, setActiveTab] = useState("acoustic");

  const courseSchema = generateCourseSchema("Piano", "https://www.saregapadhasa.com/piano");
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "Piano Classes", url: "https://www.saregapadhasa.com/piano" }
  ]);

  const guitarTypes = [
    {
      id: "acoustic",
      name: "Acoustic Piano",
      description: "The traditional grand and upright pianos with authentic sound. Perfect for classical training and serious pianists who want the genuine touch and tone.",
      features: ["Rich, natural sound", "Weighted hammer action", "Dynamic range & expression", "Traditional craftsmanship"],
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600&h=400&fit=crop"
    },
    {
      id: "electric",
      name: "Digital Piano",
      description: "Modern technology meets traditional piano. Digital pianos offer authentic feel with added features like recording, multiple voices, and headphone practice.",
      features: ["Weighted keys", "Multiple instrument sounds", "Recording capabilities", "Headphone connectivity"],
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop"
    },
    {
      id: "classical",
      name: "Keyboard",
      description: "Portable and versatile instrument ideal for beginners and performers. Perfect for learning basics and exploring different sounds and styles.",
      features: ["Lightweight & portable", "Built-in rhythms", "Affordable entry point", "Easy to maintain"],
      image: "https://images.unsplash.com/photo-1556449895-a33c9dba33dd?w=600&h=400&fit=crop"
    },
    {
      id: "bass",
      name: "Synthesizer",
      description: "Electronic keyboards for modern music production. Create unique sounds, experiment with effects, and dive into contemporary music styles.",
      features: ["Sound synthesis", "MIDI connectivity", "Effects & modulation", "Perfect for electronic music"],
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=400&fit=crop"
    }
  ];

  const learningPath = [
    {
      level: "Beginner",
      duration: "3-6 months",
      topics: ["Basic chords & strumming", "Finger positioning", "Music theory fundamentals", "Simple songs & rhythms"],
      icon: BookOpen
    },
    {
      level: "Intermediate",
      duration: "6-12 months",
      topics: ["Advanced chord progressions", "Lead guitar techniques", "Scale mastery", "Genre-specific styles"],
      icon: Target
    },
    {
      level: "Advanced",
      duration: "12+ months",
      topics: ["Complex compositions", "Improvisation skills", "Performance techniques", "Professional recording"],
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
    { name: "Fingerstyle", desc: "Pluck strings individually for intricate melodies" },
    { name: "Strumming Patterns", desc: "Master rhythm with various strumming techniques" },
    { name: "Barre Chords", desc: "Unlock the full fretboard with movable chords" },
    { name: "Hammer-ons & Pull-offs", desc: "Create smooth, legato phrases" },
    { name: "Bending & Vibrato", desc: "Add emotion and expression to your playing" },
    { name: "Slide Guitar", desc: "Create unique sounds with slide techniques" }
  ];

  const genres = [
    "Rock", "Blues", "Jazz", "Classical", "Folk", "Metal", 
    "Pop", "Country", "Flamenco", "Fingerstyle", "Reggae", "Funk"
  ];

  return (
    <>
      <SEOHelmet page="piano" />
      <StructuredData data={courseSchema} />
      <StructuredData data={breadcrumbs} />

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Master the <span className="text-yellow-400">Piano</span>
                </h1>
                <p className="text-xl mb-8 text-purple-100">
                  Looking for best online Piano classes near you? Learn to play Piano for all age groups from the comfort of your home with the best qualified Piano teachers.
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
              </div>
              <div className="hidden md:block">
                <img src={heroImage} alt="Guitar Learning" className="rounded-2xl shadow-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Why Choose SaReGaPaDhaSa?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <benefit.icon className="text-purple-600 mb-4" size={48} />
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types of Guitars */}
        <section className="py-16 bg-gradient-to-b from-gray-50 to-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Explore Different Guitars</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose the perfect guitar that matches your musical style and aspirations. Each type offers unique sounds and possibilities.
            </p>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {guitarTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setActiveTab(type.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeTab === type.id
                      ? "bg-purple-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-purple-100"
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>

            {/* Active Guitar Type Display */}
            {guitarTypes.map((type) => (
              activeTab === type.id && (
                <div key={type.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="h-80 md:h-auto">
                      <img src={type.image} alt={type.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 className="text-3xl font-bold mb-4 text-gray-800">{type.name}</h3>
                      <p className="text-gray-600 mb-6 text-lg">{type.description}</p>
                      <div className="space-y-3">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-3">
                            <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                            <span className="text-gray-700">{feature}</span>
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Your Guitar Learning Journey</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Structured curriculum designed to take you from beginner to advanced player with proven teaching methods.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {learningPath.map((level, idx) => (
                <div key={idx} className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <level.icon size={48} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{level.level}</h3>
                  <p className="text-purple-200 mb-6">{level.duration}</p>
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
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Master Essential Techniques</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Learn the fundamental and advanced techniques that will elevate your guitar playing to professional levels.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techniques.map((technique, idx) => (
                <div key={idx} className="bg-white border-2 border-purple-100 rounded-xl p-6 hover:border-purple-400 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-800">{technique.name}</h4>
                      <p className="text-gray-600">{technique.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Genres Section */}
        <section className="py-16 bg-purple-900 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Play Any Genre You Love</h2>
            <p className="text-center text-purple-200 mb-12 max-w-2xl mx-auto">
              From rock anthems to classical masterpieces, learn to play guitar across all musical styles.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {genres.map((genre, idx) => (
                <div key={idx} className="bg-white bg-opacity-10 backdrop-blur-sm px-6 py-3 rounded-full font-semibold hover:bg-opacity-20 transition-all cursor-pointer">
                  {genre}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Book a Trial", desc: "Schedule your free trial class with our guitar experts" },
                { step: "2", title: "Get Assessed", desc: "We evaluate your skill level and musical goals" },
                { step: "3", title: "Start Learning", desc: "Begin your personalized guitar learning journey" },
                { step: "4", title: "Track Progress", desc: "Monitor your growth and achieve milestones" }
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Guitar Journey?</h2>
            <p className="text-xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Join thousands of students who have transformed their musical dreams into reality with SaReGaPaDhaSa.
            </p>
            <a href="/book-demo">
  <button className="bg-yellow-400 text-purple-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-2xl">
    Book Your Free Trial Class
  </button>
</a>
            <p className="mt-6 text-purple-200">No credit card required • Cancel anytime</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Guitar;