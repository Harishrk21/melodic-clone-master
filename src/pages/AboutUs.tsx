import React, { useState } from 'react';
import { Music, Award, Users, Heart, Target, Sparkles, BookOpen, Trophy, Star, ChevronRight, Clock, Globe, Zap, Crown } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import founderImage from '../assets/keyboard.png';
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const AboutUs = () => {
  const [activeValue, setActiveValue] = useState(0);

  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://www.saregapadhasa.com" },
    { name: "About", url: "https://www.saregapadhasa.com/about" }
  ]);

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
    <SEOHelmet page="about" />
    <StructuredData data={breadcrumbs} />
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
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    In a significant milestone, we are proud to announce our strategic collaboration with{' '}
                    <a 
                      href="https://cbsgroups.in/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 font-semibold hover:text-pink-600 transition-colors underline decoration-2 decoration-purple-300 hover:decoration-pink-300"
                    >
                      Chetana Business Solutions (CBS Groups)
                    </a>
                    , a renowned name in business excellence and innovation. This partnership enables us to enhance our 
                    operational capabilities and expand our reach while maintaining the highest standards of music education.
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

      {/* Founder Profile */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20">
              <Crown className="w-5 h-5" />
              <span className="text-sm font-semibold tracking-wide">Founder & Chief Mentor</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-3">SURESH J</h2>
            <p className="text-purple-100">Perambur, Chennai, India • +91-9361623134 • surees114@gmail.com</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Summary Card */}
            <div className="lg:col-span-2">
              <div className="relative rounded-3xl p-8 md:p-10 bg-white/10 border border-white/20 shadow-xl overflow-hidden">
                <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/15 border border-white/20">10+ Years Teaching</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/15 border border-white/20">Trinity Grade 8 (Piano, Guitar, Theory)</span>
                  <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/15 border border-white/20">Online & Offline</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-3">Professional Summary</h3>
                <p className="text-white/90 leading-relaxed">
                  Passionate music educator specializing in piano, guitar, and music theory. Experienced in preparing students for Trinity College London grade examinations (Grades 1–8), with a focus on strong fundamentals, confident performance, and enjoyable learning for all age groups.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 gap-6">
                  <div className="rounded-2xl p-5 bg-white/10 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-5 h-5" />
                      <h4 className="font-semibold">Core Competencies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Piano & Guitar Instruction','Music Theory Training','Trinity Exam Prep','Customized Lesson Plans'].map((chip) => (
                        <span key={chip} className="px-3 py-1 rounded-full text-xs bg-white/15 border border-white/20">{chip}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl p-5 bg-white/10 border border-white/20">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-5 h-5" />
                      <h4 className="font-semibold">Teaching Strengths</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['Online & Offline Teaching','Progress Evaluation','Patience & Communication','Performance Coaching'].map((chip) => (
                        <span key={chip} className="px-3 py-1 rounded-full text-xs bg-white/15 border border-white/20">{chip}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Detail Cards */}
            <div className="space-y-6">
              <div className="rounded-2xl p-6 bg-white/10 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  <h4 className="text-xl font-bold">Education & Certification</h4>
                </div>
                <p className="text-white/90 font-semibold">Trinity College London</p>
                <ul className="text-white/90 text-sm mt-2 space-y-1">
                  <li>• Grade 8 – Piano</li>
                  <li>• Grade 8 – Guitar</li>
                  <li>• Grade 8 – Music Theory</li>
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-white/10 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Crown className="w-5 h-5" />
                  <h4 className="text-xl font-bold">Professional Experience</h4>
                </div>
                <p className="text-white/90 font-semibold">Freelance Music Teacher</p>
                <p className="text-white/90 text-sm mb-2">Perambur, Chennai • Jan 2017 – Present</p>
                <ul className="text-white/90 text-sm space-y-1">
                  <li>• Private and group classes for piano, guitar, and theory (Grades 1–8).</li>
                  <li>• Trinity exam training with structured mock tests and feedback.</li>
                  <li>• Engaging online sessions via Zoom/Google Meet.</li>
                  <li>• Personalized lesson plans to suit goals and pace.</li>
                  <li>• Performance coaching for recitals and events.</li>
                </ul>
              </div>

              <div className="rounded-2xl p-6 bg-white/10 border border-white/20">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <h4 className="text-xl font-bold">Student Success</h4>
                </div>
                <ul className="text-white/90 text-sm space-y-1 mb-4">
                  <li>• 50+ students cleared Trinity exams under guidance.</li>
                  <li>• High pass rates with multiple distinctions and merits.</li>
                </ul>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl p-3 bg-white/10 border border-white/20">
                    <p className="text-xs text-purple-100">Tools & DAWs</p>
                    <p className="text-sm font-semibold">Zoom, Meet, Skype • GarageBand, FL Studio (Basic)</p>
                  </div>
                  <div className="rounded-xl p-3 bg-white/10 border border-white/20">
                    <p className="text-xs text-purple-100">Instruments</p>
                    <p className="text-sm font-semibold">Piano • Guitar (Acoustic, Electric, Classical)</p>
                  </div>
                  <div className="rounded-xl p-3 bg-white/10 border border-white/20 col-span-2">
                    <p className="text-xs text-purple-100">Languages</p>
                    <p className="text-sm font-semibold">English, Tamil</p>
                  </div>
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
            <a href="/book-demo" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl inline-block">
              Enroll Now - Free Trial Class
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all inline-block">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;