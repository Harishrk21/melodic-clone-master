import React, { useState } from 'react';
import { Music, Award, Users, Heart, Target, Sparkles, BookOpen, Trophy, Star, ChevronRight, Clock, Globe, Zap, Crown } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const AboutUs = () => {
  const [activeValue, setActiveValue] = useState(0);

  const milestones = [
    { year: "2015", title: "Foundation", description: "SaReGaPaDhaSa Music Academy was established with a vision to preserve and promote traditional Indian music" },
    { year: "2018", title: "Expansion", description: "Opened branches across Chennai, reaching 500+ students" },
    { year: "2020", title: "Digital Leap", description: "Launched online classes, connecting with students worldwide" },
    { year: "2023", title: "Excellence Recognition", description: "Awarded 'Best Music Academy' for outstanding contribution to arts education" }
  ];

  const coreValues = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Music",
      description: "We believe music is a universal language that transcends boundaries and touches souls"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence in Education",
      description: "Committed to delivering world-class music education with structured curriculum and expert guidance"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Creating a vibrant community of musicians who inspire and support each other"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Cultural Heritage",
      description: "Preserving and promoting the rich traditions of Indian classical and folk music"
    }
  ];

  const achievements = [
    { number: "2000+", label: "Students Trained", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Expert Instructors", icon: <Award className="w-6 h-6" /> },
    { number: "15+", label: "Music Forms", icon: <Music className="w-6 h-6" /> },
    { number: "98%", label: "Success Rate", icon: <Trophy className="w-6 h-6" /> }
  ];

  const programs = [
    { name: "Carnatic Vocal", students: "800+", icon: "🎤" },
    { name: "Hindustani Classical", students: "500+", icon: "🎵" },
    { name: "Western Vocals", students: "400+", icon: "🎼" },
    { name: "Instrumental", students: "600+", icon: "🎹" },
    { name: "Chenda Melam", students: "200+", icon: "🥁" },
    { name: "Dance Forms", students: "300+", icon: "💃" }
  ];

  return (
    <>
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <span className="flex items-center gap-2">
                <Music className="w-4 h-4" />
                Nurturing Musical Excellence Since 2015
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About SaReGaPaDhaSa
            </h1>
            <p className="text-2xl md:text-3xl mb-4 text-purple-100 font-light">
              Where Tradition Meets Innovation
            </p>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              SaReGaPaDhaSa Music Academy is Chennai's premier destination for comprehensive music education. 
              We blend ancient wisdom with modern teaching methodologies to nurture the next generation of musicians.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white shadow-lg -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
            {achievements.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of passion, dedication, and musical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Founded in 2015, SaReGaPaDhaSa Music Academy emerged from a simple yet powerful vision: to create a 
                  sanctuary where music education transcends conventional boundaries. Our name itself is a tribute to 
                  the seven sacred notes (Swaras) that form the foundation of Indian classical music.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  What began as a small studio in Kolathur, Chennai, has blossomed into a thriving institution with 
                  multiple branches and a global online presence. We've touched the lives of over 2,000 students, 
                  each on their unique musical journey.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our approach combines the time-honored guru-shishya parampara (teacher-student tradition) with 
                  contemporary teaching methodologies, ensuring that ancient musical wisdom remains accessible and 
                  relevant for modern learners.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl p-8 aspect-square flex items-center justify-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.1) 35px, rgba(0,0,0,.1) 70px)`
                  }}></div>
                </div>
                <div className="text-center relative z-10">
                  <Music className="w-48 h-48 text-purple-600 mx-auto mb-6 animate-pulse" />
                  <p className="text-purple-900 font-bold text-2xl">Empowering Musical Dreams</p>
                  <p className="text-purple-700 text-lg mt-2">Since 2015</p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 to-pink-300"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                      <Star className="w-6 h-6 text-white fill-current" />
                    </div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Founder</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative group">
                {/* Image Placeholder with elegant design */}
                <div className="relative w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-8 border-white/20 backdrop-blur-sm bg-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-300/30 to-pink-300/30 flex items-center justify-center">
                    <div className="text-center">
                      <Crown className="w-32 h-32 text-white/60 mx-auto mb-4" />
                      <p className="text-white/80 font-semibold text-lg">Founder Photo</p>
                      <p className="text-white/60 text-sm">Place founder image here</p>
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-400 rounded-full opacity-50 blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Suresh J</h3>
                <p className="text-xl text-purple-100 mb-6">Founder & Chief Mentor</p>
              </div>
              
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-white/90">
                  A visionary musician and educator with over 20 years of experience in Indian classical music, 
                  Suresh J founded SaReGaPaDhaSa with a mission to make quality music education accessible to all.
                </p>
                <p className="text-white/90">
                  Trained under legendary maestros in both Carnatic and Hindustani traditions, he brings a unique 
                  perspective that bridges classical purity with contemporary relevance. His innovative teaching 
                  methods have helped thousands of students discover their musical potential.
                </p>
                <p className="text-white/90">
                  Under his guidance, SaReGaPaDhaSa has become synonymous with excellence, nurturing not just 
                  musicians, but artists who carry forward India's rich musical heritage with pride and creativity.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">20+ Years Experience</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span className="text-sm font-semibold">Multiple Awards</span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-semibold">2000+ Students Mentored</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive music education across diverse traditions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-2 border-transparent hover:border-purple-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{program.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{program.name}</h3>
                    <p className="text-purple-600 font-semibold">{program.students} enrolled</p>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center gap-2 group">
                  Learn More
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the SaReGaPaDhaSa Family</h2>
          <p className="text-xl mb-8 text-purple-100">
            Embark on your musical journey with us. Whether you're a beginner or an advanced learner, 
            we have the perfect program for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl">
              Enroll Now - Free Trial Class
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;