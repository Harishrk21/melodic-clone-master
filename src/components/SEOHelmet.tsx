// SEOHelmet.tsx - Reusable SEO component
// Install: npm install react-helmet-async
// Then wrap your App with <HelmetProvider> in main.tsx

import { Helmet } from 'react-helmet-async';
import { seoPages, baseSEO, routeMapping } from '@/config/seoConfig';

interface SEOHelmetProps {
  page: keyof typeof seoPages;
}

export const SEOHelmet = ({ page }: SEOHelmetProps) => {
  const seo = seoPages[page];
  // Use routeMapping to get correct URL path (handles kebab-case routes)
  const routePath = routeMapping[page] || '';
  const currentUrl = `${baseSEO.siteUrl}${routePath}`;
  const ogImage = seo.ogImage || baseSEO.defaultOGImage;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords.join(', ')} />

      {/* Canonical URL - CRITICAL for SEO */}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={baseSEO.siteName} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seo.title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={seo.title} />

      {/* Geo Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content={baseSEO.location} />
      <meta name="geo.position" content="13.1318;80.2081" />
      <meta name="ICBM" content="13.1318, 80.2081" />

      {/* Additional Meta Tags */}
      <meta name="author" content={baseSEO.siteName} />
      <meta name="robots" content={seo.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Viewport and Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#9333ea" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />

      {/* Language and Region */}
      <html lang="en" />
      <meta httpEquiv="content-language" content="en-IN" />
      
      {/* Additional SEO */}
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org - JSON-LD will be handled separately via StructuredData component */}
    </Helmet>
  );
};

// Example usage in a page component:
// import { SEOHelmet } from '@/components/SEOHelmet';
// 
// const Guitar = () => {
//   return (
//     <>
//       <SEOHelmet page="guitar" />
//       {/* Your page content */}
//     </>
//   );
// };