import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Music, Users, Award, CheckCircle2, MessageCircle } from 'lucide-react';
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('https://formspree.io/f/xzzybgbz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          interest: formData.interest,
          _subject: `New Contact Inquiry - ${formData.name}${formData.subject ? `: ${formData.subject}` : ''}`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interest: ''
        });
        setErrors({});
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setIsSubmitting(false);
        setSubmitStatus('error');
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <>
    <SEOHelmet page="contact" />
    <StructuredData data={generateBreadcrumbSchema([
      { name: "Home", url: "https://www.saregapadhasa.com" },
      { name: "Contact", url: "https://www.saregapadhasa.com/contact" }
    ])} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">♪</div>
          <div className="absolute bottom-10 right-10 text-8xl">♫</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">♬</div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Get In Touch</h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto">
              Start your musical journey with SaReGaPaDhaSa Music Academy
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll respond within 24 hours</p>
              </div>

              {submitStatus === 'success' && (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              )}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`transition-all ${errors.name ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`transition-all ${errors.email ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 93616 23134"
                      className={`transition-all ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm Interested In
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="vocal">Vocal Music</option>
                      <option value="instruments">Instrumental Music</option>
                      <option value="carnatic">Carnatic Music</option>
                      <option value="hindustani">Hindustani Music</option>
                      <option value="western">Western Music</option>
                      <option value="kids">Kids Classes</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className="focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your requirements..."
                    rows={6}
                    className={`transition-all resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'focus:ring-purple-500'}`}
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-all">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600 text-sm">+91 93616 23134</p>
                    <p className="text-gray-600 text-sm">91 9884188770</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-all">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600 text-sm">info@saregapadhasa.com</p>
                    <p className="text-gray-600 text-sm">admissions@saregapadhasa.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600 text-sm">Visit our academy @ No.20, Ground Floor,Srinivasa Nagar,1st Main Road</p>
                    <p className="text-gray-600 text-sm">Kolathur,Chennai-600099</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-all">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Working Hours</p>
                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Music className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Expert Instructors</p>
                    <p className="text-purple-100 text-xs">Learn from certified professionals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Small Batch Size</p>
                    <p className="text-purple-100 text-xs">Personalized attention guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-sm">Certified Courses</p>
                    <p className="text-purple-100 text-xs">Get recognized certificates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/919361623134" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-5 text-white hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="h-7 w-7" />
                  <div>
                    <p className="text-lg font-bold">Chat on WhatsApp</p>
                    <p className="text-green-100 text-xs">Quick responses guaranteed</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Map Section - Full Width */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us on the Map</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="rounded-xl overflow-hidden h-96 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.691380826477!2d80.20226937454882!3d13.118727111636646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52656118767107%3A0x647d6d42f4fe5b5a!2sSaReGaPaDhaSa%20Music%20Academy%20%7C%20Music%20School%20in%20Kolathur!5e0!3m2!1sen!2sin!4v1766979195196!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-xl">
                <MapPin className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-lg text-gray-800 mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm mb-1">Visit our academy @ No.20, Ground Floor,Srinivasa Nagar,1st Main Road</p>
                <p className="text-gray-600 text-sm mb-4">Kolathur,Chennai,TamilNadu-600099</p>
                <p className="text-purple-600 text-sm font-medium">Easy access from all parts of Chennai</p>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=13.118727111636646,80.20226937454882" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 py-6 text-base">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">What age groups do you teach?</h3>
              <p className="text-gray-600">We offer classes for all age groups, from kids (5+) to adults and seniors.</p>
            </div>

            <div className="p-6 bg-indigo-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Do you offer online classes?</h3>
              <p className="text-gray-600">Yes! We provide both in-person and live online classes for your convenience.</p>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">What instruments can I learn?</h3>
              <p className="text-gray-600">We teach keyboard, guitar, violin, flute, tabla, mridangam, and many more instruments.</p>
            </div>

            <div className="p-6 bg-purple-50 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Can I schedule a trial class?</h3>
              <p className="text-gray-600">Absolutely! Contact us to book your free trial class and experience our teaching.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;