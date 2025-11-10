import React, { useState } from 'react';
import { Music, Users, Award, Clock, Phone, Mail, Instagram, Facebook, Star, Heart, Sparkles, Guitar, Mic, Drum, Calendar, MapPin, CheckCircle, PlayCircle, Trophy, Globe, Youtube, ChevronRight, ChevronLeft, X } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import logo from "../assets/logo.jpeg";
const LiveBandPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const performanceVideos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Carnatic Fusion Wedding Performance",
      description: "A beautiful blend of classical and contemporary music",
      views: "50K",
      category: "Wedding"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Corporate Event - Multi-language Medley",
      description: "Tamil, Hindi, and English hits in one electrifying set",
      views: "35K",
      category: "Corporate"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Traditional Instrumental Showcase",
      description: "Pure instrumental magic with violin, flute, and percussion",
      views: "80K",
      category: "Cultural"
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Reception Night - High Energy Performance",
      description: "Dance numbers and romantic melodies",
      views: "45K",
      category: "Reception"
    }
  ];

  const galleryImages = [
    { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800", caption: "Live Wedding Performance" },
    { url: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800", caption: "Corporate Event Setup" },
    { url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800", caption: "Cultural Festival" },
    { url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800", caption: "Band in Action" },
    { url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800", caption: "Instrumental Session" },
    { url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800", caption: "Outdoor Performance" }
  ];

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Weddings & Receptions",
      description: "Make your special day unforgettable with live music spanning classical to contemporary",
      features: ["Sangeet ceremony", "Wedding entrance", "Reception party", "Customized playlists"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Corporate Events",
      description: "Professional entertainment for your business gatherings and celebrations",
      features: ["Product launches", "Annual parties", "Team building events", "Award ceremonies"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural Programs",
      description: "Authentic performances celebrating diverse musical traditions",
      features: ["Festival celebrations", "Temple events", "Community gatherings", "Cultural showcases"]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Private Parties",
      description: "Intimate performances for birthdays, anniversaries, and special occasions",
      features: ["Birthday celebrations", "Anniversary parties", "House parties", "Family gatherings"]
    }
  ];

  const testimonials = [
    {
      name: "Priya & Arjun",
      event: "Wedding Reception",
      rating: 5,
      text: "SaReGaPaDhaSa made our wedding reception absolutely magical! The fusion of Carnatic classical with modern songs had everyone dancing. Highly recommended!",
      location: "Chennai"
    },
    {
      name: "Rajesh Kumar",
      event: "Corporate Event",
      rating: 5,
      text: "Professional, punctual, and phenomenal performers. They understood our corporate audience perfectly and delivered an entertaining show.",
      location: "Bangalore"
    },
    {
      name: "Lakshmi Iyer",
      event: "Cultural Festival",
      rating: 5,
      text: "Their instrumental performances are world-class. The blend of traditional and contemporary instruments created a mesmerizing atmosphere.",
      location: "Coimbatore"
    }
  ];

  const features = [
    { icon: <Music className="w-6 h-6" />, title: "Multi-Genre Expertise", desc: "Carnatic, Fusion, Film Songs" },
    { icon: <Globe className="w-6 h-6" />, title: "Multi-Language", desc: "Tamil, Hindi, English, Malayalam" },
    { icon: <Award className="w-6 h-6" />, title: "Professional Setup", desc: "Premium Sound & Lighting" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Timing", desc: "2-8 Hour Performances" },
    { icon: <Users className="w-6 h-6" />, title: "Experienced Team", desc: "10+ Talented Musicians" },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Custom Playlists", desc: "Tailored to Your Event" }
  ];

  const faqs = [
    {
      q: "How far in advance should we book?",
      a: "We recommend booking at least 2-3 months in advance for weddings and major events. However, we can accommodate last-minute requests based on availability."
    },
    {
      q: "Do you provide sound equipment?",
      a: "Yes! We come with professional-grade sound systems, microphones, and lighting suitable for venues of all sizes."
    },
    {
      q: "Can you customize the playlist for our event?",
      a: "Absolutely! We work closely with clients to curate a playlist that matches your preferences, event theme, and audience."
    },
    {
      q: "Do you travel outside Chennai?",
      a: "Yes, we perform across Tamil Nadu and other states. Travel and accommodation costs may apply for outstation events."
    },
    {
      q: "What is included in your packages?",
      a: "Our packages include live musicians, sound equipment, basic lighting, and rehearsal time. Premium packages offer additional features like extended hours and special arrangements."
    },
    {
      q: "Can you perform both traditional and modern songs?",
      a: "Yes! Our specialty is blending traditional Carnatic music with contemporary styles, but we're equally comfortable with pure classical or modern performances."
    }
  ];

  const nextGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevGalleryImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <>
      <Navigation/>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                Chennai's Premier Live Band
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Live Music That
                <span className="block text-yellow-300">Moves Hearts</span>
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-purple-100">
                Carnatic Fusion • Instrumentals • Multi-Language Performances
              </p>
              <p className="text-lg mb-8 text-white/90">
                Transform your events into unforgettable experiences with our blend of traditional and contemporary music. From weddings to corporate events, we bring energy, elegance, and expertise.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#contact" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book Your Event
                </a>
                <a href="#performances" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2">
                  <PlayCircle className="w-5 h-5" />
                  Watch Performances
                </a>
              </div>

              <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg inline-block font-bold shadow-xl">
                <p className="text-sm mb-1">🎉 SPECIAL OFFER</p>
                <p className="text-lg">Limited Time Discount on Bookings!</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800" 
                  alt="Live Band Performance" 
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-4 text-white">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold">4.9/5</span>
                    </div>
                    <div className="h-4 w-px bg-white/30"></div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span className="font-bold">200+ Events</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-bold shadow-xl transform hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5" />
                  <span>Award-Winning Band</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-white border-b-2 border-purple-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Events Performed</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-pink-600 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Professional Musicians</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-gray-600 font-medium">Languages Covered</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About SaReGaPaDhaSa</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Where Tradition Meets Contemporary Energy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Music className="w-8 h-8 text-purple-600" />
                  Our Story
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Based in the cultural heart of Chennai, SaReGaPaDhaSa is a premier live band that specializes in creating unforgettable musical experiences. We blend the soul of Carnatic classical music with the energy of contemporary fusion, creating a unique sound that resonates with audiences of all ages.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-pink-600" />
                  Our Style
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our music is a beautiful fusion of traditional Carnatic instrumentals with modern arrangements. We perform in multiple languages including Tamil, Hindi, English, and Malayalam, ensuring your event connects with every guest. From romantic melodies to high-energy dance numbers, we curate the perfect musical journey.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Heart className="w-8 h-8 text-orange-600" />
                  Our Promise
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We don't just perform music; we create memories. Every event is unique, and we work closely with our clients to understand their vision, customize playlists, and deliver performances that exceed expectations. Your satisfaction is our success.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 hover:shadow-lg transition-all">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Videos Section */}
      <section id="performances" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Watch Our Performances</h2>
            <p className="text-xl text-gray-600">Experience the magic of live music</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {performanceVideos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 cursor-pointer group"
                   onClick={() => setActiveVideo(video)}>
                <div className="relative aspect-video bg-gray-900">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlayCircle className="w-10 h-10 text-purple-600" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-semibold">
                    {video.views} views
                  </div>
                </div>
                <div className="p-4">
                  <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {video.category}
                  </span>
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="https://youtube.com/@SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg">
              <Youtube className="w-6 h-6" />
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
             onClick={() => setActiveVideo(null)}>
          <div className="bg-white rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-2xl font-bold text-gray-900">{activeVideo.title}</h3>
                <button onClick={() => setActiveVideo(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-600">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Perfect music for every occasion</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Performance Gallery</h2>
            <p className="text-xl text-gray-600">Moments from our live shows</p>
          </div>
          
          <div className="relative mb-12">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={galleryImages[currentGalleryIndex].url}
                alt={galleryImages[currentGalleryIndex].caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-xl font-bold">{galleryImages[currentGalleryIndex].caption}</p>
              </div>
            </div>
            
            <button 
              onClick={prevGalleryImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all">
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            
            <button 
              onClick={nextGalleryImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all">
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentGalleryIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentGalleryIndex ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                onClick={() => setCurrentGalleryIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                  index === currentGalleryIndex ? 'ring-4 ring-purple-500 scale-105' : 'hover:scale-105'
                }`}>
                <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real experiences from real events</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200 hover:shadow-xl transition-all">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t border-purple-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-purple-600">{testimonial.event}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about booking us</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-start gap-3">
                  <span className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                    ?
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 ml-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <section className="py-12 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            LIMITED TIME OFFER
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Discount on Show Bookings!</h2>
          <p className="text-xl mb-6 text-white/90">Book now and get exclusive rates for your upcoming event</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-xl">
              Claim Your Discount Now
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's make your event unforgettable</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Call Us</p>
                      <a href="tel:+919361623134" className="text-purple-600 hover:text-purple-700 font-medium">
                        +91 93616 23134
                      </a>
                      <br />
                      <a href="tel:+919003066873" className="text-purple-600 hover:text-purple-700 font-medium">
                        +91 90030 66873
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Email Us</p>
                      <a href="mailto:contact@saregapadhasa.com" className="text-purple-600 hover:text-purple-700 font-medium">
                        contact@saregapadhasa.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 mb-1">Location</p>
                      <p className="text-gray-700">Chennai, Tamil Nadu, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://instagram.com/SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                     className="bg-gradient-to-br from-pink-500 to-purple-500 text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Instagram className="w-7 h-7" />
                  </a>
                  <a href="https://facebook.com/SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                     className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Facebook className="w-7 h-7" />
                  </a>
                  <a href="https://youtube.com/@SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                     className="bg-gradient-to-br from-red-500 to-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Youtube className="w-7 h-7" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border-2 border-purple-300">
                <h4 className="font-bold text-gray-900 mb-2 text-lg">🎵 Why Choose Us?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    Professional & experienced musicians
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    Premium sound & lighting equipment
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    Customized playlists for your event
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    Punctual & professional service
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                    Multi-language performances
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Event Type *</label>
                  <select className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors" required>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="reception">Reception</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="cultural">Cultural Program</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Event Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Location</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    placeholder="Event venue location"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors"
                    rows="4"
                    placeholder="Tell us about your event requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Send Booking Inquiry
                </button>

                <p className="text-sm text-gray-600 text-center">
                  We'll respond within 24 hours with availability and pricing
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Make Your Event Magical?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let SaReGaPaDhaSa bring the energy, elegance, and unforgettable music experience to your special day
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="tel:+919361623134" className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now: +91 93616 23134
            </a>
            <a href="#contact" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              Book Online
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy className="w-5 h-5" />
              <span>200+ Successful Events</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart className="w-5 h-5" />
              <span>100% Client Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-2 rounded-lg">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SaReGaPaDhaSa</h3>
                  <p className="text-xs text-gray-400">Live Band Chennai</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Chennai's premier live band specializing in Carnatic Fusion, Instrumentals, and Multi-language Performances.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#performances" className="hover:text-white transition-colors">Performances</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Weddings & Receptions</li>
                <li>Corporate Events</li>
                <li>Cultural Programs</li>
                <li>Private Parties</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Stay Connected</h4>
              <div className="flex gap-3 mb-4">
                <a href="https://instagram.com/SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                   className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://facebook.com/SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                   className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://youtube.com/@SaReGaPaDhaSa" target="_blank" rel="noopener noreferrer"
                   className="bg-white/10 hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
              <p className="text-gray-400 text-sm mb-2">Subscribe for updates</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-purple-500"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 SaReGaPaDhaSa Live Band. All rights reserved.</p>
            <p className="mt-2">Bringing music to life, one event at a time 🎵</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919361623134"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-bounce"
        title="Chat on WhatsApp"
      >
        <Phone className="w-8 h-8" />
      </a>
      <Footer/>
      </>
    </div>

  );
};

export default LiveBandPage;
