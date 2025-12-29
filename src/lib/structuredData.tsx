// structuredData.ts - Schema.org JSON-LD for rich snippets

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MusicSchool",
  "name": "Saregapadhasa Music Academy",
  "alternateName": "Saregapadhasa",
  "url": "https://www.saregapadhasa.com",
  "logo": "https://www.saregapadhasa.com/logo.png",
  "image": "https://www.saregapadhasa.com/og-image.jpg",
  "description": "Premier music academy in Kolathur, Chennai offering professional music education in guitar, piano, vocals, drums, violin, flute, and keyboard. Trinity, ABRSM & Rockschool certified courses.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.20, Ground Floor, 1st Main Road, Srinivasa Nagar",
    "addressLocality": "Kolathur",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600099",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "13.1318",
    "longitude": "80.2081"
  },
  "telephone": [
    "+91-93616-23134",
    "+91-98841-88770"
  ],
  "email": "info@saregapadhasa.com",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/saregapadhasa",
    "https://www.instagram.com/saregapadhasa",
    "https://www.youtube.com/@saregapadhasa"
  ]
});


export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.saregapadhasa.com/#business",
  "name": "Saregapadhasa Music Academy",
  "image": "https://www.saregapadhasa.com/og-image.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No.20, Ground Floor, 1st Main Road, Srinivasa Nagar",
    "addressLocality": "Kolathur",
    "addressRegion": "TN",
    "postalCode": "600099",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 13.1318,
    "longitude": 80.2081
  },
  "url": "https://www.saregapadhasa.com",
  "telephone": [
    "+91-93616-23134",
    "+91-98841-88770"
  ],
  "priceRange": "$$",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150"
  }
});


export const generateCourseSchema = (courseName: string, courseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  "name": `${courseName} Classes`,
  "description": `Professional ${courseName} lessons at Saregapadhasa Music Academy in Kolathur, Chennai.`,
  "provider": {
    "@type": "Organization",
    "name": "Saregapadhasa Music Academy",
    "sameAs": "https://www.saregapadhasa.com"
  },
  "url": courseUrl,
  "educationalCredentialAwarded": "Trinity College London, ABRSM, Rockschool Certification",
  "coursePrerequisites": "No prior experience required",
  "availableLanguage": ["English", "Tamil", "Hindi"],
  "offers": {
    "@type": "Offer",
    "category": "Music Education",
    "priceCurrency": "INR",
    "availability": "InStock"
  }
});


export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});


export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});


// Component to inject structured data
export const StructuredData = ({ data }: { data: object | object[] }) => {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

