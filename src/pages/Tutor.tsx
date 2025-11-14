import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Music, Users, Award, TrendingUp, Globe, Clock, CheckCircle2, Star, BookOpen, Calendar, IndianRupee, X } from 'lucide-react';
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";

const Tutor = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    primaryInstrument: '',
    secondaryInstruments: '',
    experience: '',
    qualifications: '',
    teachingMode: '',
    availability: '',
    expectedRate: '',
    languages: '',
    aboutYourself: '',
    youtubeChannel: '',
    portfolio: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
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
    if (!formData.primaryInstrument.trim()) newErrors.primaryInstrument = 'Primary instrument is required';
    if (!formData.experience.trim()) newErrors.experience = 'Experience is required';
    if (!formData.qualifications.trim()) newErrors.qualifications = 'Qualifications are required';
    if (!formData.teachingMode) newErrors.teachingMode = 'Please select teaching mode';
    if (!formData.aboutYourself.trim()) newErrors.aboutYourself = 'Please tell us about yourself';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
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
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          primaryInstrument: formData.primaryInstrument,
          secondaryInstruments: formData.secondaryInstruments,
          experience: formData.experience,
          qualifications: formData.qualifications,
          teachingMode: formData.teachingMode,
          availability: formData.availability,
          expectedRate: formData.expectedRate,
          languages: formData.languages,
          aboutYourself: formData.aboutYourself,
          youtubeChannel: formData.youtubeChannel,
          portfolio: formData.portfolio,
          _subject: `New Tutor Application - ${formData.fullName}`,
          _replyto: formData.email
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          primaryInstrument: '',
          secondaryInstruments: '',
          experience: '',
          qualifications: '',
          teachingMode: '',
          availability: '',
          expectedRate: '',
          languages: '',
          aboutYourself: '',
          youtubeChannel: '',
          portfolio: ''
        });
        setErrors({});
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
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
      <SEOHelmet page="tutor" />
      <StructuredData data={generateBreadcrumbSchema([
        { name: "Home", url: "https://www.saregapadhasa.com" },
        { name: "Tutor", url: "https://www.saregapadhasa.com/tutor" }
      ])} />
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-9xl animate-pulse">♪</div>
            <div className="absolute bottom-10 right-10 text-9xl animate-pulse">♫</div>
            <div className="absolute top-1/2 left-1/4 text-7xl animate-pulse">♬</div>
            <div className="absolute top-1/3 right-1/3 text-8xl animate-pulse">♩</div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-4">
                🎵 Join Our Teaching Community
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Become a <span className="text-yellow-300">Music Tutor</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                Share your passion for music and inspire the next generation of musicians with SaReGaPaDhaSa Music Academy
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-sm text-purple-200">Active Students</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold">50+</p>
                  <p className="text-sm text-purple-200">Expert Tutors</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                  <p className="text-3xl font-bold">4.8★</p>
                  <p className="text-sm text-purple-200">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Teach With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join a platform that values your expertise and helps you grow as an educator
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-purple-100">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Competitive Earnings</h3>
              <p className="text-gray-600 leading-relaxed">
                Set your own rates and earn competitively. Get paid on time with transparent payment terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-indigo-100">
              <div className="bg-gradient-to-br from-indigo-500 to-blue-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Flexible Schedule</h3>
              <p className="text-gray-600 leading-relaxed">
                Create your own schedule and teach at your convenience. Perfect work-life balance guaranteed.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-blue-100">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Teach Worldwide</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with students from around the globe through our online platform. Expand your reach.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-cyan-100">
              <div className="bg-gradient-to-br from-cyan-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Growing Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a supportive community of passionate music educators and collaborate with peers.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-teal-100">
              <div className="bg-gradient-to-br from-teal-500 to-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Teaching Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access curated teaching materials, lesson plans, and resources to enhance your classes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-green-100">
              <div className="bg-gradient-to-br from-green-500 to-emerald-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Recognition & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Build your reputation with student reviews and ratings. Grow your teaching career with us.
              </p>
            </div>
          </div>
        </div>

        {/* Application Form Section */}
        <div className="container mx-auto px-4 pb-20 max-w-5xl">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Apply to Join Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Fill out the application form below and we'll review your profile within 48 hours
              </p>
            </div>

            {submitStatus === 'success' && (
              <Alert className="mb-8 bg-green-50 border-green-200">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <AlertDescription className="text-green-800 text-base">
                  <strong>Application Submitted Successfully!</strong> Thank you for applying. We'll review your application and get back to you within 48 hours.
                </AlertDescription>
              </Alert>
            )}

            {submitStatus === 'error' && (
              <Alert className="mb-8 bg-red-50 border-red-200">
                <X className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-red-800 text-base">
                  <strong>Submission Failed.</strong> Please try again or contact us directly at saregapadhasa14@gmail.com
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-8">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-purple-100 p-2 rounded-lg mr-3">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  Personal Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`h-12 ${errors.fullName ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={`h-12 ${errors.email ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 90030 66873"
                      className={`h-12 ${errors.phone ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Languages You Can Teach In
                    </label>
                    <Input
                      name="languages"
                      value={formData.languages}
                      onChange={handleChange}
                      placeholder="e.g., English, Tamil, Hindi"
                      className="h-12 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Teaching Expertise */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-3">
                    <Music className="h-6 w-6 text-indigo-600" />
                  </div>
                  Teaching Expertise
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Instrument/Vocal <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="primaryInstrument"
                      value={formData.primaryInstrument}
                      onChange={handleChange}
                      placeholder="e.g., Guitar, Piano, Carnatic Vocals"
                      className={`h-12 ${errors.primaryInstrument ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.primaryInstrument && <p className="text-red-500 text-sm mt-1">{errors.primaryInstrument}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Secondary Instruments (if any)
                    </label>
                    <Input
                      name="secondaryInstruments"
                      value={formData.secondaryInstruments}
                      onChange={handleChange}
                      placeholder="e.g., Keyboard, Flute"
                      className="h-12 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Teaching Experience (Years) <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g., 5 years"
                      className={`h-12 ${errors.experience ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Teaching Mode <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="teachingMode"
                      value={formData.teachingMode}
                      onChange={handleChange}
                      className={`w-full h-12 px-4 border rounded-md focus:outline-none focus:ring-2 transition-all ${errors.teachingMode ? 'border-red-500' : 'border-gray-300 focus:ring-purple-500'}`}
                    >
                      <option value="">Select mode</option>
                      <option value="online">Online Only</option>
                      <option value="offline">Offline Only</option>
                      <option value="both">Both Online & Offline</option>
                    </select>
                    {errors.teachingMode && <p className="text-red-500 text-sm mt-1">{errors.teachingMode}</p>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Qualifications & Certifications <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    placeholder="List your degrees, certifications, awards, and relevant qualifications..."
                    rows={4}
                    className={`resize-none ${errors.qualifications ? 'border-red-500' : 'focus:ring-purple-500'}`}
                  />
                  {errors.qualifications && <p className="text-red-500 text-sm mt-1">{errors.qualifications}</p>}
                </div>
              </div>

              {/* Availability & Rates */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  Availability & Rates
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Weekly Availability
                    </label>
                    <Input
                      name="availability"
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="e.g., Mon-Fri evenings, Weekends"
                      className="h-12 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Expected Rate (per hour)
                    </label>
                    <div className="relative">
                      <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        name="expectedRate"
                        value={formData.expectedRate}
                        onChange={handleChange}
                        placeholder="e.g., 500-1000"
                        className="h-12 pl-10 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* About & Portfolio */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="bg-green-100 p-2 rounded-lg mr-3">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  About You & Portfolio
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell Us About Yourself <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="aboutYourself"
                      value={formData.aboutYourself}
                      onChange={handleChange}
                      placeholder="Share your teaching philosophy, musical journey, and what makes you a great teacher..."
                      rows={5}
                      className={`resize-none ${errors.aboutYourself ? 'border-red-500' : 'focus:ring-purple-500'}`}
                    />
                    {errors.aboutYourself && <p className="text-red-500 text-sm mt-1">{errors.aboutYourself}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        YouTube Channel (if any)
                      </label>
                      <Input
                        name="youtubeChannel"
                        value={formData.youtubeChannel}
                        onChange={handleChange}
                        placeholder="https://youtube.com/@yourchannel"
                        className="h-12 focus:ring-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Portfolio/Website Link
                      </label>
                      <Input
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="h-12 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 text-lg font-semibold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                      Submitting Application...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <CheckCircle2 className="mr-3 h-6 w-6" />
                      Submit Application
                    </span>
                  )}
                </Button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  By submitting, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-purple-100">
                Join our team in four simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Apply</h3>
                <p className="text-purple-100">Submit your application with all required details</p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Review</h3>
                <p className="text-purple-100">Our team reviews your profile and credentials</p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Interview</h3>
                <p className="text-purple-100">Quick demo session to assess teaching style</p>
              </div>

              <div className="text-center">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                  <span className="text-4xl font-bold text-cyan-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Start Teaching</h3>
                <p className="text-purple-100">Get onboarded and begin your teaching journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutor;