export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonical?: string;
  robots?: string;
}

export const baseSEO = {
  siteName: "Saregapadhasa Music Academy",
  location: "Kolathur, Chennai",
  phone: "+91 93616 23134, +91 98841 88770", 
  email: "admission@saregapadhasa.com", 
  address: "No.20, Ground floor, 1st Main Rd, Srinivasa Nagar, Kolathur, Chennai, Tamil Nadu 600099",
  defaultOGImage: "https://www.saregapadhasa.com/og-image.jpg", // Add your default OG image
  siteUrl: "https://www.saregapadhasa.com",
};

// Route mapping: SEO page key -> actual URL path
export const routeMapping: Record<string, string> = {
  home: "",
  guitar: "/guitar",
  piano: "/piano",
  vocals: "/vocals",
  drums: "/drums",
  violin: "/violin",
  flute: "/flute",
  keyboard: "/keyboard",
  trinity: "/trinity",
  abrsm: "/abrsm",
  rockschool: "/rockschool",
  chendaMelam: "/chenda-melam",
  liveBand: "/liveband",
  bookDemo: "/book-demo",
  contact: "/contact",
  about: "/about",
  blog: "/blog",
  store: "/store",
  faqs: "/faqs",
  howItWorks: "/how-it-works",
  tutor: "/tutor",
  notFound: "/404",
};

export const seoPages: Record<string, SEOConfig> = {
  home: {
    title: "Saregapadhasa Music Academy - Best Music School in Kolathur, Chennai",
    description: "Learn music from expert tutors at Saregapadhasa Music Academy in Kolathur, Chennai. We offer guitar, piano, vocals, drums, violin, keyboard, and flute classes. Trinity, ABRSM & Rockschool certified courses available. Book a free demo class today!",
    keywords: [
      "music academy in Kolathur",
      "music school in Kolathur",
      "music classes in Chennai",
      "Saregapadhasa Music Academy",
      "best music academy Kolathur",
      "music lessons Chennai",
      "Trinity music classes",
      "ABRSM music school Chennai",
      "guitar classes Kolathur",
      "piano classes Kolathur"
    ],
    ogImage: `${baseSEO.siteUrl}/og-home.jpg`,
  },

  blog: {
    title: "Music Blog | Tutorials, Tips & Guides - Saregapadhasa",
    description: "Explore expert articles on guitar, piano, vocals, music theory, and exam prep. Learn faster with practical tips and step-by-step guides from Saregapadhasa Music Academy.",
    keywords: [
      "music blog",
      "guitar tutorials",
      "piano tips",
      "vocal training guide",
      "music theory articles",
      "Saregapadhasa blog"
    ],
    ogImage: `${baseSEO.siteUrl}/og-blog.jpg`,
  },

  store: {
    title: "Music Store | Instruments & Accessories - Saregapadhasa",
    description: "Buy quality musical instruments and accessories: guitars, keyboards, pianos, drums, violins, flutes, audio gear and more with expert guidance at Saregapadhasa Music Academy.",
    keywords: [
      "buy musical instruments Chennai",
      "music store",
      "guitar keyboard drums for sale",
      "audio equipment Chennai",
      "music accessories"
    ],
    ogImage: `${baseSEO.siteUrl}/og-store.jpg`,
  },

  faqs: {
    title: "FAQs | SaReGaPaDhaSa Music Academy - Common Questions",
    description: "Answers to the most common questions about our classes, schedules, instruments, and certifications at Saregapadhasa Music Academy in Kolathur, Chennai.",
    keywords: [
      "music classes FAQ",
      "Saregapadhasa FAQs",
      "music school questions",
      "online music class details"
    ],
    ogImage: `${baseSEO.siteUrl}/og-faqs.jpg`,
  },

  howItWorks: {
    title: "How It Works | Book Demo and Start Learning - Saregapadhasa",
    description: "See how our 1-on-1 live music classes work. Book a free demo, experience our platform, and start your customized learning journey at Saregapadhasa Music Academy.",
    keywords: [
      "how it works music classes",
      "book free demo music",
      "1-to-1 music classes process"
    ],
    ogImage: `${baseSEO.siteUrl}/og-how-it-works.jpg`,
  },

  tutor: {
    title: "Become a Tutor | Teach at Saregapadhasa Music Academy",
    description: "Join our teaching community. Flexible schedules, competitive earnings, and a supportive platform to grow your music teaching career at Saregapadhasa Music Academy.",
    keywords: [
      "music tutor jobs",
      "teach music online",
      "music teacher application",
      "Saregapadhasa tutor"
    ],
    ogImage: `${baseSEO.siteUrl}/og-tutor.jpg`,
  },

  notFound: {
    title: "Page Not Found | Saregapadhasa Music Academy",
    description: "The page you're looking for doesn't exist. Explore our courses and start your music journey today at Saregapadhasa Music Academy.",
    keywords: [
      "404",
      "page not found",
      "Saregapadhasa"
    ],
    robots: "noindex, nofollow",
    ogImage: `${baseSEO.siteUrl}/og-404.jpg`,
  },
  
  guitar: {
    title: "Guitar Classes in Kolathur | Acoustic & Electric Guitar Lessons - Saregapadhasa",
    description: "Learn guitar from certified instructors at Saregapadhasa Music Academy in Kolathur. Beginner to advanced guitar courses, Trinity & Rockschool certified. Acoustic and electric guitar lessons available. Book your free trial class!",
    keywords: [
      "guitar classes in Kolathur",
      "guitar lessons Chennai",
      "acoustic guitar classes Kolathur",
      "electric guitar lessons Kolathur",
      "best guitar teacher Kolathur",
      "guitar academy Chennai",
      "Trinity guitar course",
      "Rockschool guitar classes"
    ],
    ogImage: `${baseSEO.siteUrl}/og-guitar.jpg`,
  },
  
  piano: {
    title: "Piano Classes in Kolathur | Keyboard Lessons - Saregapadhasa Music Academy",
    description: "Expert piano and keyboard lessons in Kolathur, Chennai. ABRSM and Trinity certified piano courses for all ages. Professional instructors, flexible timings. Join Saregapadhasa Music Academy today!",
    keywords: [
      "piano classes in Kolathur",
      "keyboard lessons Chennai",
      "piano teacher Kolathur",
      "ABRSM piano classes",
      "Trinity piano course",
      "piano academy Chennai",
      "keyboard classes for kids",
      "piano lessons for adults Kolathur"
    ],
    ogImage: `${baseSEO.siteUrl}/og-piano.jpg`,
  },
  
  vocals: {
    title: "Vocal Classes in Kolathur | Singing Lessons Chennai - Saregapadhasa",
    description: "Professional vocal training and singing classes in Kolathur. Learn Carnatic, Hindustani, Western vocals from experienced tutors. Voice training for all levels at Saregapadhasa Music Academy.",
    keywords: [
      "vocal classes in Kolathur",
      "singing classes Chennai",
      "voice training Kolathur",
      "Carnatic music classes",
      "Western vocal lessons",
      "singing teacher Kolathur",
      "music vocal academy Chennai"
    ],
    ogImage: `${baseSEO.siteUrl}/og-vocals.jpg`,
  },
  
  drums: {
    title: "Drum Classes in Kolathur | Percussion Lessons - Saregapadhasa Music Academy",
    description: "Learn drums and percussion at Saregapadhasa Music Academy in Kolathur. Rockschool certified drum courses, professional drum kits, experienced instructors. Start your rhythmic journey today!",
    keywords: [
      "drum classes in Kolathur",
      "percussion lessons Chennai",
      "Rockschool drums Kolathur",
      "drum teacher Chennai",
      "drums academy Kolathur",
      "percussion classes for kids"
    ],
    ogImage: `${baseSEO.siteUrl}/og-drums.jpg`,
  },
  
  violin: {
    title: "Violin Classes in Kolathur | Classical Violin Lessons - Saregapadhasa",
    description: "Classical and contemporary violin classes in Kolathur, Chennai. Trinity and ABRSM certified courses. Learn from professional violinists at Saregapadhasa Music Academy.",
    keywords: [
      "violin classes in Kolathur",
      "violin lessons Chennai",
      "classical violin teacher",
      "Trinity violin course",
      "ABRSM violin classes Kolathur",
      "violin academy Chennai"
    ],
    ogImage: `${baseSEO.siteUrl}/og-violin.jpg`,
  },
  
  flute: {
    title: "Flute Classes in Kolathur | Learn Flute in Chennai - Saregapadhasa",
    description: "Learn flute (Bamboo & Western) at Saregapadhasa Music Academy in Kolathur. Expert flute instructors, Trinity certified courses. Classes for beginners and advanced students.",
    keywords: [
      "flute classes in Kolathur",
      "flute lessons Chennai",
      "bamboo flute classes",
      "Western flute teacher Kolathur",
      "flute academy Chennai"
    ],
    ogImage: `${baseSEO.siteUrl}/og-flute.jpg`,
  },
  
  keyboard: {
    title: "Keyboard Classes in Kolathur | Electronic Keyboard Lessons - Saregapadhasa",
    description: "Professional keyboard classes in Kolathur at Saregapadhasa Music Academy. Learn electronic keyboard, synthesizer, and music production. Certified courses for all skill levels.",
    keywords: [
      "keyboard classes in Kolathur",
      "keyboard lessons Chennai",
      "electronic keyboard teacher",
      "synthesizer classes Kolathur",
      "keyboard academy Chennai"
    ],
    ogImage: `${baseSEO.siteUrl}/og-keyboard.jpg`,
  },
  
  trinity: {
    title: "Trinity College London Music Exams - Certified Training in Kolathur",
    description: "Prepare for Trinity College London music examinations at Saregapadhasa Music Academy in Kolathur. Expert guidance for all instruments and grades. High success rate.",
    keywords: [
      "Trinity music exams Kolathur",
      "Trinity College Chennai",
      "Trinity certified music school",
      "Trinity exam preparation Kolathur"
    ],
    ogImage: `${baseSEO.siteUrl}/og-trinity.jpg`,
  },
  
  abrsm: {
    title: "ABRSM Music Exams Preparation - Kolathur, Chennai | Saregapadhasa",
    description: "ABRSM (Associated Board of the Royal Schools of Music) exam preparation in Kolathur. Expert tutors, proven track record. Join Saregapadhasa Music Academy for quality ABRSM training.",
    keywords: [
      "ABRSM classes Kolathur",
      "ABRSM exam preparation Chennai",
      "Royal Schools of Music Chennai",
      "ABRSM certified teacher Kolathur"
    ],
    ogImage: `${baseSEO.siteUrl}/og-abrsm.jpg`,
  },
  
  rockschool: {
    title: "Rockschool Music Exams - Contemporary Music Certification in Kolathur",
    description: "Rockschool certified contemporary music courses in Kolathur. Learn modern music styles, prepare for Rockschool exams. Guitar, bass, drums, and more at Saregapadhasa Music Academy.",
    keywords: [
      "Rockschool classes Kolathur",
      "Rockschool exams Chennai",
      "contemporary music school",
      "Rockschool guitar Kolathur"
    ],
    ogImage: `${baseSEO.siteUrl}/og-rockschool.jpg`,
  },
  
  chendaMelam: {
    title: "Chenda Melam Classes in Kolathur | Traditional Kerala Percussion",
    description: "Learn authentic Chenda Melam and traditional Kerala percussion at Saregapadhasa Music Academy in Kolathur. Expert trainers in traditional Kerala art forms.",
    keywords: [
      "Chenda Melam classes Kolathur",
      "Kerala percussion Chennai",
      "traditional music classes",
      "Chenda classes Chennai"
    ],
    ogImage: `${baseSEO.siteUrl}/og-chenda-melam.jpg`,
  },
  
  liveBand: {
    title: "Live Band Performance | Wedding & Event Music - Saregapadhasa",
    description: "Premier live band services in Chennai. Professional musicians for weddings, corporate events, and celebrations. Carnatic fusion, contemporary music, and multi-language performances.",
    keywords: [
      "live band Chennai",
      "wedding band Chennai",
      "corporate event music",
      "live music performance",
      "music band for events",
      "Chennai live band"
    ],
    ogImage: `${baseSEO.siteUrl}/og-liveband.jpg`,
  },
  
  bookDemo: {
    title: "Book Free Demo Class | Music Academy in Kolathur - Saregapadhasa",
    description: "Book your free trial music class at Saregapadhasa Music Academy in Kolathur, Chennai. Experience our teaching methodology, meet our tutors. Limited slots available!",
    keywords: [
      "free music demo Kolathur",
      "trial music class Chennai",
      "book music class Kolathur",
      "free guitar class demo"
    ],
    ogImage: `${baseSEO.siteUrl}/og-book-demo.jpg`,
  },
  
  contact: {
    title: "Contact Saregapadhasa Music Academy - Kolathur, Chennai",
    description: "Get in touch with Saregapadhasa Music Academy in Kolathur, Chennai. Visit us, call, or email for admissions, course details, and inquiries. We're here to help!",
    keywords: [
      "music academy contact Kolathur",
      "Saregapadhasa contact number",
      "music school address Kolathur",
      "music academy Chennai location"
    ],
    ogImage: `${baseSEO.siteUrl}/og-contact.jpg`,
  },
  
  about: {
    title: "About Saregapadhasa Music Academy - Premier Music School in Kolathur",
    description: "Learn about Saregapadhasa Music Academy, Kolathur's leading music school. Our vision, experienced faculty, state-of-the-art facilities, and commitment to musical excellence.",
    keywords: [
      "about Saregapadhasa",
      "best music academy Kolathur",
      "music school faculty Chennai",
      "music academy history"
    ],
    ogImage: `${baseSEO.siteUrl}/og-about.jpg`,
  },
};

export const generateMetaTags = (pageKey: string): string => {
  const seo = seoPages[pageKey] || seoPages.home;
  
  return `
    <title>${seo.title}</title>
    <meta name="description" content="${seo.description}" />
    <meta name="keywords" content="${seo.keywords.join(", ")}" />
    
    <!-- Open Graph / Facebook -->
   <!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:title" content="${seo.title}" />
<meta property="og:description" content="${seo.description}" />
<meta property="og:image" content="${seo.ogImage || baseSEO.defaultOGImage}" />
<meta property="og:site_name" content="${baseSEO.siteName}" />

    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    
    <!-- Additional SEO -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="${baseSEO.siteName}" />
    <meta name="geo.region" content="IN-TN" />
    <meta name="geo.placename" content="${baseSEO.location}" />
    <link rel="canonical" href="${seo.canonical || `https://www.saregapadhasa.com/${pageKey === 'home' ? '' : pageKey}`}" />
  `;
};