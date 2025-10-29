import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaData?: any;
  pageType?: 'website' | 'article' | 'service' | 'location';
}

export function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1200&h=630&fit=crop',
  ogType = 'website',
  schemaData,
  pageType = 'website'
}: SEOHeadProps) {
  
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Add critical performance hints
    const addPreloadHints = () => {
      // Preload critical CSS
      if (!document.querySelector('link[rel="preload"][href*="globals.css"]')) {
        const cssPreload = document.createElement('link');
        cssPreload.rel = 'preload';
        cssPreload.as = 'style';
        cssPreload.href = '/styles/globals.css';
        document.head.appendChild(cssPreload);
      }
      
      // DNS prefetch for external resources
      const dnsPrefetchDomains = ['images.unsplash.com', 'fonts.googleapis.com'];
      dnsPrefetchDomains.forEach(domain => {
        if (!document.querySelector(`link[rel="dns-prefetch"][href="//${domain}"]`)) {
          const dnsPrefetch = document.createElement('link');
          dnsPrefetch.rel = 'dns-prefetch';
          dnsPrefetch.href = `//${domain}`;
          document.head.appendChild(dnsPrefetch);
        }
      });
      
      // Preconnect to critical third parties
      if (!document.querySelector('link[rel="preconnect"][href="//images.unsplash.com"]')) {
        const preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = '//images.unsplash.com';
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      }
    };
    
    addPreloadHints();
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1');
    
    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', ogImage, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:site_name', 'Camelback Medical Centers - Naperville', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    if (canonicalUrl) {
      updateMetaTag('og:url', canonicalUrl, 'property');
      
      // Canonical link
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonicalUrl);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Business-specific meta tags
    updateMetaTag('geo.region', 'US-IL');
    updateMetaTag('geo.placename', 'Naperville, Illinois');
    updateMetaTag('geo.position', '41.7508;-88.1535');
    updateMetaTag('ICBM', '41.7508, -88.1535');

    // Schema.org structured data
    if (schemaData) {
      let schemaScript = document.querySelector('#schema-data');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaData);
    }

    // Generate default schema based on page type
    if (!schemaData) {
      const defaultSchema = generateDefaultSchema(pageType, title, description, canonicalUrl);
      let schemaScript = document.querySelector('#schema-data');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'schema-data';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(defaultSchema);
    }

  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData, pageType]);

  return null;
}

function generateDefaultSchema(pageType: string, title: string, description: string, url?: string) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://camelbackmedical.com/#organization",
        "name": "Camelback Medical Centers - Naperville",
        "url": "https://camelbackmedical.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://camelbackmedical.com/logo.png",
          "width": 300,
          "height": 100
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+16304161151",
          "contactType": "Customer Service",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Naperville",
          "addressRegion": "IL",
          "postalCode": "60540",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.facebook.com/camelbackmedical",
          "https://www.instagram.com/camelbackmedical"
        ]
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://camelbackmedical.com/#medical-organization",
        "name": "Camelback Medical Centers - Naperville",
        "description": "Comprehensive medical care including chiropractic, physical therapy, and wellness services in Naperville, Illinois.",
        "url": "https://camelbackmedical.com",
        "telephone": "+16304161151",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Main Street",
          "addressLocality": "Naperville",
          "addressRegion": "IL",
          "postalCode": "60540",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "41.7508",
          "longitude": "-88.1535"
        },
        "openingHours": [
          "Mo-Fr 08:00-18:00",
          "Sa 09:00-14:00"
        ],
        "medicalSpecialties": [
          "Chiropractic",
          "Physical Therapy",
          "Sports Medicine",
          "Pain Management",
          "Rehabilitation"
        ]
      }
    ]
  };

  if (pageType === 'article') {
    baseSchema["@graph"].push({
      "@type": "Article",
      "headline": title,
      "description": description,
      "url": url,
      "datePublished": new Date().toISOString(),
      "dateModified": new Date().toISOString(),
      "author": {
        "@type": "Organization",
        "@id": "https://camelbackmedical.com/#organization"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://camelbackmedical.com/#organization"
      }
    });
  }

  if (pageType === 'service') {
    baseSchema["@graph"].push({
      "@type": "MedicalProcedure",
      "name": title,
      "description": description,
      "url": url,
      "provider": {
        "@type": "MedicalOrganization",
        "@id": "https://camelbackmedical.com/#medical-organization"
      }
    });
  }

  return baseSchema;
}