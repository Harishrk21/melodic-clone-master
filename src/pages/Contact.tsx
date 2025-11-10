import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, Music, Users, Award, CheckCircle2, MessageCircle } from 'lucide-react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Simulate API call
    setTimeout(() => {
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
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
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
                      placeholder="+91 98765 43210"
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
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-all">
                    <Phone className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-all">
                    <Mail className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">info@saregapadhasa.com</p>
                    <p className="text-gray-600">admissions@saregapadhasa.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-all">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">123 Music Street, Avadi</p>
                    <p className="text-gray-600">Chennai, Tamil Nadu 600054</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:bg-purple-50 p-3 rounded-lg transition-all cursor-pointer">
                  <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-all">
                    <Clock className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Working Hours</p>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: 10:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Music className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Expert Instructors</p>
                    <p className="text-purple-100 text-sm">Learn from certified professionals</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Small Batch Size</p>
                    <p className="text-purple-100 text-sm">Personalized attention guaranteed</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Award className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Certified Courses</p>
                    <p className="text-purple-100 text-sm">Get recognized certificates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Find Us Here</h3>
              <div className="rounded-lg overflow-hidden h-48">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.85576792513436!2d80.20470992494506!3d13.118669789916673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52645e64a29e21%3A0xe2d5b6a2ee4ba35f!2sTrusted%20Private%20Finance%20in%20Chennai%20-%20CBS%20Finance!5e0!3m2!1sen!2sin!4v1762576453488!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=13.11873476860294,80.20484671759945" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block mt-4"
              >
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Open in Google Maps
                </Button>
              </a>
            </div>

            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/917299817996" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl p-6 text-white hover:from-green-600 hover:to-green-700 transition-all transform hover:scale-105 cursor-pointer">
                <div className="flex items-center justify-center space-x-3">
                  <MessageCircle className="h-8 w-8" />
                  <div>
                    <p className="text-xl font-bold">Chat with us on WhatsApp</p>
                    <p className="text-green-100 text-sm">Quick responses guaranteed</p>
                  </div>
                </div>
              </div>
            </a>
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