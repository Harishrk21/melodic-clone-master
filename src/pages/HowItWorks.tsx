import React, { useState } from 'react';
import { Music, Video, Award, Users, Clock, Globe, CheckCircle, Phone, Mail, MapPin, MessageCircle, Youtube, Instagram, ArrowRight, Star, Calendar, Headphones, BookOpen } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Calendar,
      title: "Book Your FREE Demo",
      description: "Schedule a complimentary demo session with our expert instructors. No credit card required, no commitments.",
      details: [
        "Choose your preferred time slot",
        "Select your instrument of interest",
        "Get matched with the perfect instructor",
        "Receive instant confirmation via email & WhatsApp"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Video,
      title: "Experience Our Platform",
      description: "Join your live, interactive session through our advanced web-based classroom. No downloads, no hassle.",
      details: [
        "Crystal-clear HD video & audio quality",
        "Real-time interactive whiteboard",
        "Screen sharing for sheet music & tutorials",
        "Record sessions for future practice"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Music,
      title: "Begin Your Journey",
      description: "Loved the demo? Choose your package and start your personalized musical journey with us today!",
      details: [
        "Flexible scheduling options",
        "Customized learning path",
        "Progress tracking & assessments",
        "Certificate upon course completion"
      ],
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits = [
    { icon: Globe, title: "Learn From Anywhere", desc: "Connect from home, office, or on-the-go" },
    { icon: Users, title: "Expert Instructors", desc: "Learn from certified professionals with 10+ years experience" },
    { icon: Clock, title: "Flexible Timing", desc: "Morning, evening, or weekend slots available" },
    { icon: Award, title: "Certified Courses", desc: "Get recognized certificates on completion" },
    { icon: Headphones, title: "One-on-One Sessions", desc: "Personalized attention for faster learning" },
    { icon: BookOpen, title: "Structured Curriculum", desc: "Progressive learning from basics to advanced" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      course: "Carnatic Vocal",
      rating: 5,
      text: "The demo session was amazing! The instructor was patient and the platform is so easy to use. I'm now in my 3rd month!"
    },
    {
      name: "Arjun Kumar",
      course: "Guitar",
      rating: 5,
      text: "I was skeptical about online learning, but SaReGaPaDhaSa changed my mind. The quality is exceptional!"
    },
    {
      name: "Lakshmi Nair",
      course: "Keyboard",
      rating: 5,
      text: "My daughter loves her lessons! The structured approach and friendly teachers make all the difference."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Your Musical Journey Starts Here
            </h1>
            <p className="text-xl md:text-2xl text-purple-200 mb-8">
              Learn music online in just 3 simple steps. No hidden fees, no complicated processes.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-white text-purple-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-100 transition-all transform hover:scale-105 shadow-2xl">
              Book FREE Demo Now <ArrowRight />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">Three simple steps to musical excellence</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveStep(index)}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity blur-xl`}></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-transparent hover:border-purple-200">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.color} mb-6 shadow-lg`}>
                    <Icon className="text-white" size={40} />
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                      {index + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-gray-800">{step.title}</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                        <CheckCircle className={`text-green-500 flex-shrink-0 mt-0.5`} size={18} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Between Steps and Benefits */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-12 text-white text-center shadow-2xl mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Musical Journey?</h3>
          <p className="text-xl mb-8 text-purple-100">Book your FREE demo session today - no commitments required!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              Book Demo Session <Calendar size={20} />
            </a>
            <a href="https://wa.me/917299817996" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg inline-flex items-center gap-2">
              WhatsApp Us <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600">Experience the best in online music education</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all hover:scale-105 border border-purple-100">
                  <div className="bg-gradient-to-br from-purple-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600">Real experiences from real students</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-purple-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-purple-600">{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl p-12 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative z-10">
            <Music className="mx-auto mb-6 animate-bounce" size={60} />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Your FREE Demo Awaits!</h2>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Don't wait to start your musical journey. Book your complimentary demo session now and experience world-class music education from the comfort of your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="/contact" className="bg-white text-purple-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                Book FREE Demo <ArrowRight />
              </a>
              <a href="tel:7299817996" className="bg-green-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2">
                Call Now <Phone />
              </a>
            </div>
            <p className="text-purple-200">Questions? WhatsApp us at <a href="https://wa.me/917299817996" className="underline font-semibold hover:text-white">7299817996</a></p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;