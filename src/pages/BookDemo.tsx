import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, Music, Users, Video, Home, CheckCircle2, Sparkles, Gift, Trophy, Star, ArrowRight, Phone, Mail } from 'lucide-react';
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    instrument: '',
    experience: '',
    mode: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const instruments = [
    { value: 'vocal', label: 'Vocal Music', icon: '🎤' },
    { value: 'keyboard', label: 'Keyboard', icon: '🎹' },
    { value: 'guitar', label: 'Guitar', icon: '🎸' },
    { value: 'violin', label: 'Violin', icon: '🎻' },
    { value: 'flute', label: 'Flute', icon: '🪈' },
    { value: 'chendaMelam', label: 'ChendaMelam', icon: '🥁' },
    { value: 'mridangam', label: 'Mridangam', icon: '🥁' },
    { value: 'piano', label: 'Piano', icon: '🎹' },
    { value: 'veena', label: 'Veena', icon: '🎵' },
    { value: 'drums', label: 'Drums', icon: '🥁' }
  ];

  const experienceLevels = [
    { value: 'beginner', label: 'Complete Beginner', desc: 'Never played before' },
    { value: 'some', label: 'Some Experience', desc: '1-2 years of learning' },
    { value: 'intermediate', label: 'Intermediate', desc: '2-5 years of practice' },
    { value: 'advanced', label: 'Advanced', desc: '5+ years experience' }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
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
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.instrument) newErrors.instrument = 'Please select an instrument';
    if (!formData.experience) newErrors.experience = 'Please select your experience level';
    if (!formData.mode) newErrors.mode = 'Please select class mode';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time slot';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
          age: formData.age,
          instrument: formData.instrument,
          experience: formData.experience,
          mode: formData.mode,
          preferredDate: formData.preferredDate,
          preferredTime: formData.preferredTime,
          message: formData.message,
          _subject: `New Book Demo Request - ${formData.name} (${formData.instrument || 'Instrument'})`,
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          instrument: '',
          experience: '',
          mode: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        });
        setErrors({});
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setSubmitStatus(null), 7000);
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      <SEOHelmet page="bookDemo" />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Home", url: "https://www.saregapadhasa.com" },
        { name: "Book Demo", url: "https://www.saregapadhasa.com/book-demo" }
      ])} />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-9xl animate-pulse">♪</div>
            <div className="absolute bottom-10 right-10 text-9xl animate-pulse">♫</div>
            <div className="absolute top-1/3 right-1/4 text-7xl animate-pulse">♬</div>
            <div className="absolute bottom-1/3 left-1/4 text-7xl animate-pulse">♩</div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold">
                <Gift className="h-4 w-4" />
                100% FREE Trial Class - No Payment Required
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Book Your <span className="text-yellow-300">FREE</span> Demo Class
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
                Experience world-class music education. Try before you commit!
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span>Expert Teachers</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span>All Age Groups</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle2 className="h-5 w-5 text-green-300" />
                  <span>Flexible Timings</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-2 border-purple-100">
                {submitStatus === 'success' && (
                  <Alert className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <AlertDescription className="text-green-800 text-base">
                      <strong>Success!</strong> Your demo class has been booked. We'll contact you within 2 hours to confirm your session. Check your email for details!
                    </AlertDescription>
                  </Alert>
                )}

                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <Sparkles className="h-8 w-8 text-purple-600" />
                    Reserve Your Spot
                  </h2>
                  <p className="text-gray-600">Fill in your details and choose your preferred schedule</p>
                </div>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-600" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={`transition-all ${errors.name ? 'border-red-500' : 'focus:ring-purple-500'}`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Age <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="age"
                          type="number"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="Your age"
                          className={`transition-all ${errors.age ? 'border-red-500' : 'focus:ring-purple-500'}`}
                        />
                        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
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
                          className={`transition-all ${errors.email ? 'border-red-500' : 'focus:ring-purple-500'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 93616 23134"
                          className={`transition-all ${errors.phone ? 'border-red-500' : 'focus:ring-purple-500'}`}
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Instrument Selection */}
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Music className="h-5 w-5 text-indigo-600" />
                      Choose Your Instrument <span className="text-red-500">*</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {instruments.map((inst) => (
                        <button
                          key={inst.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, instrument: inst.value }));
                            if (errors.instrument) setErrors(prev => ({ ...prev, instrument: '' }));
                          }}
                          className={`p-4 rounded-xl border-2 transition-all text-center hover:shadow-md ${
                            formData.instrument === inst.value
                              ? 'border-indigo-600 bg-indigo-100 shadow-md'
                              : 'border-gray-200 bg-white hover:border-indigo-300'
                          }`}
                        >
                          <div className="text-3xl mb-2">{inst.icon}</div>
                          <div className="text-sm font-medium text-gray-800">{inst.label}</div>
                        </button>
                      ))}
                    </div>
                    {errors.instrument && <p className="text-red-500 text-sm mt-2">{errors.instrument}</p>}
                  </div>

                  {/* Experience Level */}
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-blue-600" />
                      Your Experience Level <span className="text-red-500">*</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {experienceLevels.map((level) => (
                        <button
                          key={level.value}
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({ ...prev, experience: level.value }));
                            if (errors.experience) setErrors(prev => ({ ...prev, experience: '' }));
                          }}
                          className={`p-4 rounded-xl border-2 transition-all text-left hover:shadow-md ${
                            formData.experience === level.value
                              ? 'border-blue-600 bg-blue-100 shadow-md'
                              : 'border-gray-200 bg-white hover:border-blue-300'
                          }`}
                        >
                          <div className="font-semibold text-gray-800">{level.label}</div>
                          <div className="text-sm text-gray-600">{level.desc}</div>
                        </button>
                      ))}
                    </div>
                    {errors.experience && <p className="text-red-500 text-sm mt-2">{errors.experience}</p>}
                  </div>

                  {/* Class Mode */}
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Video className="h-5 w-5 text-green-600" />
                      Preferred Class Mode <span className="text-red-500">*</span>
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, mode: 'online' }));
                          if (errors.mode) setErrors(prev => ({ ...prev, mode: '' }));
                        }}
                        className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                          formData.mode === 'online'
                            ? 'border-green-600 bg-green-100 shadow-md'
                            : 'border-gray-200 bg-white hover:border-green-300'
                        }`}
                      >
                        <Video className="h-8 w-8 text-green-600 mb-2" />
                        <div className="font-semibold text-gray-800 mb-1">Online Class</div>
                        <div className="text-sm text-gray-600">Join from anywhere via video call</div>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, mode: 'offline' }));
                          if (errors.mode) setErrors(prev => ({ ...prev, mode: '' }));
                        }}
                        className={`p-6 rounded-xl border-2 transition-all hover:shadow-md ${
                          formData.mode === 'offline'
                            ? 'border-green-600 bg-green-100 shadow-md'
                            : 'border-gray-200 bg-white hover:border-green-300'
                        }`}
                      >
                        <Home className="h-8 w-8 text-green-600 mb-2" />
                        <div className="font-semibold text-gray-800 mb-1">In-Person Class</div>
                        <div className="text-sm text-gray-600">Visit our academy @ No.20, Ground Floor,Srinivasa Nagar,1st Main Road,Kolathur,Chennai-600099</div>
                      </button>
                    </div>
                    {errors.mode && <p className="text-red-500 text-sm mt-2">{errors.mode}</p>}
                  </div>

                  {/* Schedule */}
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-yellow-600" />
                      Select Your Preferred Schedule
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <Input
                          name="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className={`transition-all ${errors.preferredDate ? 'border-red-500' : 'focus:ring-yellow-500'}`}
                        />
                        {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 transition-all ${
                            errors.preferredTime ? 'border-red-500' : 'focus:ring-yellow-500'
                          }`}
                        >
                          <option value="">Select a time slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                      </div>
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals, any specific requirements, or questions you have..."
                      rows={4}
                      className="resize-none focus:ring-purple-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 hover:from-purple-700 hover:via-indigo-700 hover:to-blue-700 text-white py-6 text-lg font-bold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Booking Your Demo...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Sparkles className="mr-2 h-6 w-6" />
                        Book FREE Demo Class
                        <ArrowRight className="ml-2 h-6 w-6" />
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* What to Expect */}
              <div className="bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Star className="h-6 w-6" />
                  What to Expect
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-green-300" />
                    <div>
                      <p className="font-semibold">30-Minute Session</p>
                      <p className="text-purple-100 text-sm">Focused, personalized demo class</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-green-300" />
                    <div>
                      <p className="font-semibold">Expert Teacher</p>
                      <p className="text-purple-100 text-sm">Learn from certified professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-green-300" />
                    <div>
                      <p className="font-semibold">Course Overview</p>
                      <p className="text-purple-100 text-sm">Understand curriculum & teaching style</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 mt-1 flex-shrink-0 text-green-300" />
                    <div>
                      <p className="font-semibold">Ask Questions</p>
                      <p className="text-purple-100 text-sm">Clear all doubts about courses</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Need Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+919361623134" className="flex items-center gap-3 p-3 hover:bg-purple-50 rounded-lg transition-all">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Call us</p>
                      <p className="font-semibold text-gray-800">+91 93616 23134</p>
                    </div>
                  </a>
                  <a href="mailto:info@saregapadhasa.com" className="flex items-center gap-3 p-3 hover:bg-indigo-50 rounded-lg transition-all">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Email us</p>
                      <p className="font-semibold text-gray-800">info@saregapadhasa.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 rounded-2xl shadow-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Gift className="h-6 w-6" />
                  Demo Class Benefits
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>100% FREE - No hidden charges</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>No payment required to book</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>No obligation to continue</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Meet your teacher beforehand</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm p-3 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span>Flexible rescheduling available</span>
                  </div>
                </div>
              </div>

              {/* Success Stats */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Our Success</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600">500+</div>
                    <div className="text-sm text-gray-600 mt-1">Active Students</div>
                  </div>
                  <div className="text-center p-4 bg-indigo-50 rounded-xl">
                    <div className="text-3xl font-bold text-indigo-600">15+</div>
                    <div className="text-sm text-gray-600 mt-1">Expert Teachers</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600">10+</div>
                    <div className="text-sm text-gray-600 mt-1">Instruments</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-3xl font-bold text-green-600">98%</div>
                    <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookDemo;