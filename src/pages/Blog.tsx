import React, { useState } from 'react';
import { Search, Calendar, Clock, User, TrendingUp, BookOpen, Music, Award, Heart, MessageCircle, Share2, ChevronRight, Filter, Star, Sparkles, Play, Headphones, Guitar, Piano as PianoIcon, Mic } from 'lucide-react';
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEOHelmet } from "@/components/SEOHelmet";
import { StructuredData, generateBreadcrumbSchema } from "@/lib/structuredData";
const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Guitar Shredding for Beginners",
      slug: "guitar-shredding-beginners-guide",
      excerpt: "Learn essential shredding techniques including alternate picking, sweep picking, and legato playing. This comprehensive guide breaks down complex techniques into easy-to-follow steps that any beginner can master.",
      content: `
        <h2>What is Guitar Shredding?</h2>
        <p>Guitar shredding is a virtuosic playing style characterized by rapid note sequences, complex patterns, and technical precision. While it may seem intimidating at first, with proper practice and technique, anyone can learn to shred.</p>
        
        <h3>Essential Techniques to Master</h3>
        <ol>
          <li><strong>Alternate Picking:</strong> The foundation of all shredding. Practice picking down-up-down-up consistently.</li>
          <li><strong>Economy Picking:</strong> Combining alternate picking with sweep picking for maximum efficiency.</li>
          <li><strong>Legato Playing:</strong> Using hammer-ons and pull-offs to create smooth, flowing passages.</li>
          <li><strong>String Skipping:</strong> Jumping between non-adjacent strings for unique melodic lines.</li>
        </ol>

        <h3>Practice Routine for Beginners</h3>
        <p>Start with 15-20 minutes daily, focusing on:</p>
        <ul>
          <li>Chromatic exercises at 60 BPM</li>
          <li>Three-note-per-string scales</li>
          <li>Basic sweep picking arpeggios</li>
          <li>Speed bursts (short fast passages)</li>
        </ul>

        <h3>Common Mistakes to Avoid</h3>
        <p>Many beginners make these errors that slow their progress:</p>
        <ul>
          <li>Starting too fast - always begin slowly and build speed gradually</li>
          <li>Tensing up - stay relaxed to play faster and avoid injury</li>
          <li>Neglecting rhythm - speed without timing is just noise</li>
          <li>Skipping warm-ups - always warm up before intense practice</li>
        </ul>

        <h3>Recommended Exercises</h3>
        <p>Try these exercises to build your shredding foundation:</p>
        <p><strong>Spider Exercise:</strong> Play 1-2-3-4 on each string using your index, middle, ring, and pinky fingers. Start on the 5th fret and work your way up the neck.</p>
        <p><strong>Pentatonic Runs:</strong> Practice the minor pentatonic scale pattern at increasing speeds, using a metronome to track your progress.</p>

        <h3>Final Tips</h3>
        <p>Remember, shredding is a marathon, not a sprint. Focus on clean execution at slower tempos before increasing speed. Record yourself regularly to track progress and identify areas needing improvement.</p>
      `,
      category: "Guitar",
      author: "Mayank Katare",
      authorBio: "Professional guitarist with 15 years of teaching experience",
      date: "Nov 8, 2025",
      readTime: "8 min read",
      views: "8.5K",
      likes: 421,
      comments: 67,
      tags: ["guitar", "shredding", "technique", "beginner"]
    },
    {
      id: 2,
      title: "One-to-One Singing Classes: Complete Overview and Benefits",
      slug: "one-to-one-singing-classes-overview",
      excerpt: "Discover why personalized vocal training is the most effective way to develop your singing voice. Learn about the benefits, what to expect, and how individual attention can accelerate your musical journey.",
      content: `
        <h2>Why Choose One-to-One Singing Lessons?</h2>
        <p>Individual singing lessons offer unparalleled benefits that group classes simply cannot match. With personalized attention, your instructor can focus entirely on your unique voice, challenges, and goals.</p>

        <h3>Key Benefits of Private Vocal Training</h3>
        <ol>
          <li><strong>Personalized Curriculum:</strong> Lessons tailored to your vocal range, style preferences, and learning pace.</li>
          <li><strong>Immediate Feedback:</strong> Instant correction of technique errors prevents bad habits from forming.</li>
          <li><strong>Flexible Scheduling:</strong> Book lessons at times that work for your lifestyle.</li>
          <li><strong>Faster Progress:</strong> Focused attention accelerates skill development significantly.</li>
          <li><strong>Safe Environment:</strong> Feel comfortable making mistakes and taking risks without peer judgment.</li>
        </ol>

        <h3>What to Expect in Your First Lesson</h3>
        <p>Your initial session typically includes:</p>
        <ul>
          <li>Vocal range assessment</li>
          <li>Discussion of musical goals and interests</li>
          <li>Basic breathing and posture exercises</li>
          <li>Simple warm-up routines</li>
          <li>Introduction to proper vocal technique</li>
        </ul>

        <h3>Typical Lesson Structure</h3>
        <p>Most one-to-one singing lessons follow this format:</p>
        <p><strong>Warm-up (10 minutes):</strong> Breathing exercises, lip trills, and gentle scales to prepare your voice.</p>
        <p><strong>Technique Work (20 minutes):</strong> Focus on specific skills like breath control, pitch accuracy, or resonance.</p>
        <p><strong>Song Work (20 minutes):</strong> Apply techniques to actual songs you want to learn.</p>
        <p><strong>Cool Down (10 minutes):</strong> Gentle exercises and assignment for home practice.</p>

        <h3>Investment and Commitment</h3>
        <p>While private lessons cost more than group classes, the return on investment is substantial. Most students see significant improvement within 3-6 months of weekly lessons.</p>

        <h3>Finding the Right Teacher</h3>
        <p>Look for instructors who:</p>
        <ul>
          <li>Have formal vocal training and teaching credentials</li>
          <li>Specialize in your preferred music genre</li>
          <li>Communicate clearly and encourage questions</li>
          <li>Create a supportive, positive learning environment</li>
          <li>Provide constructive feedback with actionable steps</li>
        </ul>

        <h3>Success Stories</h3>
        <p>Many professional singers credit their success to one-to-one training. The personalized approach allows them to develop their unique sound while mastering fundamental techniques.</p>
      `,
      category: "Singing",
      author: "Annie Jennifer",
      authorBio: "Certified vocal coach specializing in contemporary styles",
      date: "Nov 7, 2025",
      readTime: "6 min read",
      views: "12.3K",
      likes: 678,
      comments: 89,
      tags: ["singing", "vocal-training", "lessons", "music-education"]
    },
    {
      id: 3,
      title: "12 Scientifically Proven Reasons Why Everyone Should Sing",
      slug: "12-reasons-why-everyone-should-sing",
      excerpt: "From boosting immunity to reducing stress, discover the remarkable health benefits of singing backed by scientific research. Singing isn't just for professionals—it's a powerful tool for wellness.",
      content: `
        <h2>The Science Behind Singing's Benefits</h2>
        <p>Research from universities worldwide has demonstrated that singing provides measurable physical, mental, and emotional benefits for people of all ages and skill levels.</p>

        <h3>1. Boosts Your Immune System</h3>
        <p>Studies show that singing increases immunoglobulin A and hydrocortisone levels, strengthening your immune response. Choir members have been found to have better immune function than non-singers.</p>

        <h3>2. Reduces Stress and Anxiety</h3>
        <p>Singing lowers cortisol levels (the stress hormone) while releasing endorphins and oxytocin, creating feelings of happiness and relaxation. Just 20 minutes of singing can significantly reduce anxiety.</p>

        <h3>3. Improves Breathing and Lung Capacity</h3>
        <p>The controlled breathing required for singing exercises your diaphragm and intercostal muscles, increasing lung capacity and oxygen intake. This is particularly beneficial for people with respiratory conditions.</p>

        <h3>4. Enhances Memory and Cognition</h3>
        <p>Learning lyrics and melodies stimulates neural pathways, improving memory formation. Singing has been used successfully in treating patients with Alzheimer's and dementia.</p>

        <h3>5. Strengthens Social Connections</h3>
        <p>Group singing creates powerful bonds between participants. The synchronized activity releases oxytocin, the "bonding hormone," fostering feelings of trust and cooperation.</p>

        <h3>6. Improves Posture and Core Strength</h3>
        <p>Proper singing technique requires good posture and engages core muscles. Regular singing naturally improves your stance and strengthens your abdominal muscles.</p>

        <h3>7. Releases Natural Painkillers</h3>
        <p>Singing triggers the release of endorphins, your body's natural pain relievers. This can help reduce chronic pain and create feelings of euphoria.</p>

        <h3>8. Enhances Confidence and Self-Esteem</h3>
        <p>Successfully learning and performing songs builds confidence. The positive feedback loop of improvement boosts self-esteem in all areas of life.</p>

        <h3>9. Improves Sleep Quality</h3>
        <p>Singing strengthens throat and palate muscles, reducing snoring and sleep apnea symptoms. It also promotes relaxation, leading to better sleep.</p>

        <h3>10. Provides Cardiovascular Benefits</h3>
        <p>Singing increases heart rate variability and improves circulation. The aerobic nature of singing provides a gentle cardiovascular workout.</p>

        <h3>11. Helps Process Emotions</h3>
        <p>Singing allows healthy emotional expression. It can help process grief, joy, anger, and other feelings in a constructive way.</p>

        <h3>12. Increases Lifespan</h3>
        <p>Studies of choir singers show they tend to live longer than non-singers, likely due to the combination of physical, mental, and social benefits.</p>

        <h3>Getting Started</h3>
        <p>You don't need perfect pitch or professional training to enjoy these benefits. Start by singing along to your favorite songs, join a community choir, or take beginner lessons. The key is consistency—even 15 minutes of daily singing can make a difference.</p>
      `,
      category: "Singing",
      author: "Annie Jennifer",
      authorBio: "Certified vocal coach specializing in contemporary styles",
      date: "Nov 5, 2025",
      readTime: "10 min read",
      views: "18.7K",
      likes: 1200,
      comments: 156,
      tags: ["singing", "health", "wellness", "science"]
    },
    {
      id: 4,
      title: "Top 10 Timeless Hindi Male Songs Every Singer Should Master",
      slug: "top-10-hindi-male-songs",
      excerpt: "A carefully curated list of iconic Hindi songs that showcase different vocal techniques and styles. Perfect for beginners to advanced singers looking to expand their Bollywood repertoire.",
      content: `
        <h2>Building Your Hindi Song Repertoire</h2>
        <p>These ten songs represent the finest in Hindi male vocals, spanning decades of Bollywood music. Each offers unique learning opportunities for different vocal techniques.</p>

        <h3>1. "Tum Hi Ho" - Arijit Singh</h3>
        <p><strong>Why Learn It:</strong> Perfect for developing emotional expression and breath control. The song's dynamics range from soft verses to powerful choruses.</p>
        <p><strong>Key Technique:</strong> Controlled vibrato and emotional phrasing</p>
        <p><strong>Difficulty:</strong> Intermediate</p>

        <h3>2. "Kabira" - Tochi Raina & Rekha Bhardwaj</h3>
        <p><strong>Why Learn It:</strong> Excellent for practicing folk-influenced phrasing and developing a rustic tone quality.</p>
        <p><strong>Key Technique:</strong> Folk ornaments and rhythmic variations</p>
        <p><strong>Difficulty:</strong> Intermediate</p>

        <h3>3. "Mere Sapno Ki Rani" - Kishore Kumar</h3>
        <p><strong>Why Learn It:</strong> A masterclass in yodeling and playful vocal delivery. Great for developing vocal agility.</p>
        <p><strong>Key Technique:</strong> Yodeling and rapid register changes</p>
        <p><strong>Difficulty:</strong> Advanced</p>

        <h3>4. "Pal Pal Dil Ke Paas" - Kishore Kumar</h3>
        <p><strong>Why Learn It:</strong> Classic romantic ballad perfect for beginners. Teaches proper breathing and sustained notes.</p>
        <p><strong>Key Technique:</strong> Smooth legato singing and breath management</p>
        <p><strong>Difficulty:</strong> Beginner</p>

        <h3>5. "Channa Mereya" - Arijit Singh</h3>
        <p><strong>Why Learn It:</strong> Develops emotional depth and power in higher registers without straining.</p>
        <p><strong>Key Technique:</strong> Mixed voice and emotional intensity</p>
        <p><strong>Difficulty:</strong> Advanced</p>

        <h3>6. "Gulabi Aankhen" - Mohammed Rafi</h3>
        <p><strong>Why Learn It:</strong> Teaches clarity in fast-paced singing while maintaining musicality.</p>
        <p><strong>Key Technique:</strong> Clear diction and tempo management</p>
        <p><strong>Difficulty:</strong> Intermediate</p>

        <h3>7. "Pehla Nasha" - Udit Narayan</h3>
        <p><strong>Why Learn It:</strong> Perfect for developing a light, romantic vocal quality and learning to navigate key changes.</p>
        <p><strong>Key Technique:</strong> Smooth transitions and light head voice</p>
        <p><strong>Difficulty:</strong> Intermediate</p>

        <h3>8. "Lag Ja Gale" - Lata Mangeshkar (Male Cover Popular)</h3>
        <p><strong>Why Learn It:</strong> Though originally female, male versions teach vulnerability and soft dynamics.</p>
        <p><strong>Key Technique:</strong> Soft singing and emotional restraint</p>
        <p><strong>Difficulty:</strong> Advanced</p>

        <h3>9. "Dekha Ek Khwab" - Kishore Kumar</h3>
        <p><strong>Why Learn It:</strong> Excellent for practicing sustained notes and building vocal stamina.</p>
        <p><strong>Key Technique:</strong> Breath support for long phrases</p>
        <p><strong>Difficulty:</strong> Beginner to Intermediate</p>

        <h3>10. "Tere Bina" - A.R. Rahman & Chinmayi</h3>
        <p><strong>Why Learn It:</strong> Modern composition teaching contemporary phrasing and Sufi influences.</p>
        <p><strong>Key Technique:</strong> Sufi vocal ornaments and improvisation</p>
        <p><strong>Difficulty:</strong> Advanced</p>

        <h3>Practice Tips</h3>
        <ul>
          <li>Start with the original recordings to understand proper pronunciation</li>
          <li>Learn the lyrics meaning to add emotional authenticity</li>
          <li>Practice with instrumental versions (karaoke tracks)</li>
          <li>Record yourself to identify areas needing improvement</li>
          <li>Work with a vocal coach for feedback on technique</li>
        </ul>

        <h3>Conclusion</h3>
        <p>Master these songs and you'll have a solid foundation in Hindi male vocals, covering everything from classic Kishore Kumar to contemporary Arijit Singh styles.</p>
      `,
      category: "General",
      author: "Mayank Katare",
      authorBio: "Professional guitarist with 15 years of teaching experience",
      date: "Nov 3, 2025",
      readTime: "7 min read",
      views: "9.8K",
      likes: 543,
      comments: 92,
      tags: ["hindi-songs", "bollywood", "singing", "male-vocals"]
    }
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { name: "All", icon: <Sparkles className="w-4 h-4" />, count: 330 },
    { name: "Carnatic", icon: <Music className="w-4 h-4" />, count: 45 },
    { name: "Hindustani", icon: <Music className="w-4 h-4" />, count: 38 },
    { name: "Guitar", icon: <Guitar className="w-4 h-4" />, count: 52 },
    { name: "Piano", icon: <PianoIcon className="w-4 h-4" />, count: 41 },
    { name: "Singing", icon: <Mic className="w-4 h-4" />, count: 67 },
    { name: "Music Theory", icon: <BookOpen className="w-4 h-4" />, count: 29 },
    { name: "Buying Guide", icon: <Award className="w-4 h-4" />, count: 23 },
    { name: "Grade Exams", icon: <TrendingUp className="w-4 h-4" />, count: 18 },
    { name: "General", icon: <Sparkles className="w-4 h-4" />, count: 17 }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
  };

  // Full Article View
  if (selectedPost) {
    return (
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={handleBackToList}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-8 group"
          >
            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to All Articles
          </button>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Article Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 md:p-12">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {selectedPost.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {selectedPost.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">{selectedPost.author}</p>
                    <p className="text-purple-100 text-xs">{selectedPost.authorBio}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>{selectedPost.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{selectedPost.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>{selectedPost.comments} comments</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                style={{
                  lineHeight: '1.8',
                }}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-3">TAGS:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 cursor-pointer transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Box */}
              <div className="mt-12 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {selectedPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-900">{selectedPost.author}</p>
                    <p className="text-gray-600">{selectedPost.authorBio}</p>
                  </div>
                </div>
              </div>

              {/* Engagement Buttons */}
              <div className="mt-8 flex items-center gap-4">
                <button className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition-colors">
                  <Heart className="w-5 h-5" />
                  Like this article
                </button>
                <button className="flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts.filter(p => p.id !== selectedPost.id && p.category === selectedPost.category).slice(0, 2).map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleReadMore(post)}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="text-xs text-purple-600 font-semibold mb-2">{post.category}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Blog List View
  return (
    <>
    <SEOHelmet page="blog" />
    <StructuredData data={generateBreadcrumbSchema([
      { name: "Home", url: "https://www.saregapadhasa.com" },
      { name: "Blog", url: "https://www.saregapadhasa.com/blog" }
    ])} />
    <Navigation/>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
            animation: 'pulse 4s ease-in-out infinite'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-6">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-4">
              📚 Music Knowledge Hub
            </div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your Gateway to<br />Musical Mastery
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Expert insights, tutorials, and inspiration from India's leading music education platform
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">37K+</div>
                <div className="text-purple-100">Monthly Readers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">16+</div>
                <div className="text-purple-100">Expert Writers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-3xl font-bold">330+</div>
                <div className="text-purple-100">Free Articles</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-100 sticky top-4">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-lg text-gray-900">Categories</h3>
              </div>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                      selectedCategory === cat.name
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {cat.icon}
                      <span className="font-medium text-sm">{cat.name}</span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      selectedCategory === cat.name
                        ? 'bg-white/20'
                        : 'bg-gray-200'
                    }`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest Articles
                {selectedCategory !== 'All' && (
                  <span className="text-purple-600 ml-2">in {selectedCategory}</span>
                )}
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BookOpen className="w-4 h-4" />
                <span>{filteredPosts.length} articles</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-purple-300 transition-all group">
                  <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Music className="w-20 h-20 text-white/30" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-purple-700">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-white text-xs">
                        <Heart className="w-3 h-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 text-white text-xs">
                        <MessageCircle className="w-3 h-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => handleReadMore(post)}
                        className="text-purple-600 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read Full Article
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Heart className="w-4 h-4 text-gray-400 hover:text-red-500 transition-colors" />
                        </button>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400 hover:text-blue-500 transition-colors" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white relative overflow-hidden mt-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📧 Stay Updated
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Never Miss a Beat</h2>
          <p className="text-xl mb-8 text-purple-100">
            Get weekly music tips, tutorials, and exclusive content delivered straight to your inbox
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-xl whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          
          <p className="text-sm text-purple-100 mt-4">
            Join 37,000+ music enthusiasts already subscribed
          </p>
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;