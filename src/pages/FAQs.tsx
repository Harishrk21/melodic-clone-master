import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Music, Guitar, Piano, Mic, Clock, Users, Award, Globe, ShoppingBag, MessageCircle, Phone, Calendar, CheckCircle, Star, Video } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/structuredData";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const faqs = [
    { 
      q: "Can music be learnt online and what is the class format?", 
      a: "Absolutely! Online music learning is highly effective with the right approach. All our classes are live 1-to-1 sessions conducted via high-quality video conferencing. This personalized format ensures you get undivided attention from expert instructors, immediate feedback, and a customized learning pace tailored to your goals. Our interactive platform includes screen sharing for sheet music, real-time demonstrations, and session recording for practice.",
      category: "classes",
      icon: Video
    },
    { 
      q: "Which instruments do you teach?", 
      a: "We offer comprehensive training across a wide range of instruments including Guitar (Acoustic, Electric, Bass), Keyboard/Piano, Vocals (Hindustani Classical, Carnatic Classical & Western Contemporary), Violin, Flute, Drums & Percussion, Veena, Mandolin, and even traditional instruments like Chendamelam. Whether you're interested in Western or Indian classical music, we have expert instructors for every genre!",
      category: "instruments",
      icon: Music
    },
    { 
      q: "Do you teach for Grade Exams?", 
      a: "Yes! We provide specialized coaching for internationally recognized grade examinations including Trinity College London and Rockschool (RSL). Our structured curriculum is designed to prepare students thoroughly for these certifications, with dedicated focus on theory, practical performance, and exam techniques. Many of our students have achieved distinctions in these prestigious exams.",
      category: "exams",
      icon: Award
    },
    { 
      q: "Do you teach music to adults?", 
      a: "Absolutely! Music has no age limit. We welcome students from ages 6 to 60+ and beyond. Our adult programs are specially designed considering work schedules, learning pace, and musical goals. Whether you're fulfilling a childhood dream, picking up an old hobby, or learning for relaxation, we have flexible timings and customized lesson plans for adult learners.",
      category: "classes",
      icon: Users
    },
    { 
      q: "Which platform is used to conduct classes?", 
      a: "We offer flexible platform options based on your preference and comfort. Classes can be conducted via Zoom, Google Meet, or our advanced proprietary web-based classroom (no downloads required!). Our custom platform features HD video/audio, interactive whiteboard, screen sharing, session recording, and an integrated practice scheduler - all designed specifically for optimal music education.",
      category: "classes",
      icon: Globe
    },
    {
      q: "Do you sell musical instruments?",
      a: "Yes! We have a wide range of quality musical instruments available for purchase including guitars, keyboards, pianos, violins, flutes, drums, veena, mandolin, and more. We help you choose the right instrument based on your learning level and budget. Our instruments come with quality assurance and guidance on proper maintenance. Contact us for current inventory and pricing!",
      category: "instruments",
      icon: ShoppingBag
    },
    {
      q: "What is the duration of each class?",
      a: "Standard classes are 45-60 minutes long, depending on the course and student level. We also offer flexible duration options for advanced students or those preparing for exams. Each session is structured to include warm-up, technique practice, new content, and review - ensuring comprehensive learning in every class.",
      category: "classes",
      icon: Clock
    },
    {
      q: "Can I choose my class timings?",
      a: "Yes! We understand everyone has different schedules. We offer flexible timing slots including morning, afternoon, evening, and weekend sessions. During enrollment, you can choose timings that work best for you, and our instructors will accommodate your preferred schedule as much as possible.",
      category: "classes",
      icon: Calendar
    },
    {
      q: "Do you offer group classes?",
      a: "While we primarily focus on 1-to-1 sessions for personalized attention and faster progress, we do offer group classes for specific programs like ensemble training, music theory workshops, and performance preparation. Group sessions are great for collaborative learning and can be more economical. Contact us to know more about current group offerings!",
      category: "classes",
      icon: Users
    },
    {
      q: "What if I miss a class?",
      a: "Life happens! If you need to miss a scheduled class, just inform us at least 24 hours in advance, and we'll reschedule it at a mutually convenient time. We record sessions (with your permission) so you can review them later. Our flexible policy ensures you don't lose any paid classes.",
      category: "classes",
      icon: Calendar
    },
    {
      q: "Do I need to buy an instrument before starting?",
      a: "Not necessarily! For the first few trial classes, you can explore the instrument using our guidance. However, to practice effectively at home, having your own instrument is highly recommended. We can guide you in selecting the right instrument within your budget and even help you purchase quality instruments from us at competitive prices.",
      category: "instruments",
      icon: ShoppingBag
    },
    {
      q: "Are certificates provided after course completion?",
      a: "Yes! Upon successful completion of your course, you'll receive a course completion certificate from SaReGaPaDhaSa Music Academy. For students preparing for Trinity or Rockschool exams, you'll receive internationally recognized certifications directly from those institutions upon passing the exams.",
      category: "exams",
      icon: Award
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'classes', label: 'Classes & Format', icon: Video },
    { id: 'instruments', label: 'Instruments', icon: Guitar },
    { id: 'exams', label: 'Exams & Certificates', icon: Award }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const stats = [
    { icon: Users, number: "500+", label: "Happy Students" },
    { icon: Music, number: "15+", label: "Instruments Taught" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Star, number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <SEOHelmet page="faqs" />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Home", url: "https://www.saregapadhasa.com" },
        { name: "FAQs", url: "https://www.saregapadhasa.com/faqs" }
      ])} />
      <StructuredData data={generateFAQSchema(faqs.map(f => ({ question: f.q, answer: f.a })))} />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <HelpCircle className="mx-auto mb-6 animate-bounce" size={60} />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              Everything you need to know about learning music with us
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-purple-900 px-8 py-4 rounded-full font-semibold hover:bg-purple-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                Book FREE Demo <Calendar size={20} />
              </a>
              <a href="https://wa.me/919361623134" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                WhatsApp Us <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl text-center hover:shadow-2xl transition-all transform hover:scale-105 border border-purple-100">
                <Icon className="mx-auto mb-3 text-purple-600" size={32} />
                <p className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${
                    isActive 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg' 
                      : 'bg-white text-gray-700 hover:bg-purple-50 shadow border border-purple-100'
                  }`}
                >
                  <Icon size={20} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* FAQs Grid */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const Icon = faq.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-purple-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex items-start justify-between gap-4 hover:bg-purple-50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                          {faq.q}
                        </h2>
                        {!isOpen && (
                          <p className="text-sm text-gray-500">Click to expand answer</p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0 mt-1">
                      {isOpen ? (
                        <ChevronUp className="text-purple-600" size={28} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={28} />
                      )}
                    </div>
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-6 pl-20">
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-5 border-l-4 border-purple-600">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Instruments We Teach Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Instruments We Teach & Sell
            </h2>
            <p className="text-xl text-gray-600">Learn from experts and buy quality instruments</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Western Instruments */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl">
                    <Guitar className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Western Instruments</h3>
                </div>
                <ul className="space-y-3">
                  {['Guitar (Acoustic, Electric, Bass)', 'Keyboard & Piano', 'Drums & Percussion', 'Violin', 'Flute', 'Western Vocals'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Indian Instruments */}
              <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-8 border border-orange-100 hover:shadow-xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-orange-600 to-pink-600 p-3 rounded-xl">
                    <Music className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Indian Instruments</h3>
                </div>
                <ul className="space-y-3">
                  {['Carnatic Vocals', 'Hindustani Vocals', 'Veena', 'Violin (Carnatic)', 'Flute (Bansuri)', 'Mandolin', 'Chendamelam', 'Mridangam'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
              <ShoppingBag className="mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-3">Need an Instrument?</h3>
              <p className="text-purple-100 mb-6">We sell quality instruments at competitive prices. Get expert guidance on choosing the right instrument for your journey!</p>
              <a href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105">
                Inquire About Instruments <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <MessageCircle className="mx-auto mb-6 animate-pulse" size={60} />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              We're here to help! Get in touch with us and we'll answer all your queries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/919361623134" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                WhatsApp Us <MessageCircle />
              </a>
              <a href="tel:+919884188770" className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                Call Now <Phone />
              </a>
              <a href="/contact" className="bg-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                Contact Form <Calendar />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;