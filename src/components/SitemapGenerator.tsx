// This component generates XML sitemaps for better SEO
// In a real implementation, this would be a server-side script

export const generateSitemap = () => {
  const baseUrl = 'https://camelbackmedical.com';
  const currentDate = new Date().toISOString();
  
  const pages = [
    {
      url: '',
      priority: '1.0',
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      url: '/about',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: currentDate
    },
    {
      url: '/services',
      priority: '0.9',
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      url: '/blog',
      priority: '0.8',
      changefreq: 'daily',
      lastmod: currentDate
    },
    {
      url: '/conditions',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      url: '/who-we-serve',
      priority: '0.8',
      changefreq: 'weekly',
      lastmod: currentDate
    },
    {
      url: '/booking',
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: currentDate
    }
  ];

  const conditions = [
    'back-pain', 'neck-pain', 'headaches', 'sciatica', 'arthritis',
    'sports-injuries', 'car-accidents', 'work-injuries', 'carpal-tunnel',
    'knee-pain', 'hip-pain', 'shoulder-pain', 'elbow-pain', 'foot-pain',
    'tmj', 'vertigo', 'whiplash', 'concussions', 'neuropathy',
    'plantar-fasciitis', 'scoliosis', 'sleep-issues', 'adhd', 'allergies-asthma'
  ];

  const whoWeServe = [
    'families', 'athletes', 'pregnant-moms', 'pediatrics', 'adults', 'active-seniors'
  ];

  // Add condition pages
  conditions.forEach(condition => {
    pages.push({
      url: `/conditions/${condition}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: currentDate
    });
  });

  // Add who we serve pages
  whoWeServe.forEach(group => {
    pages.push({
      url: `/who-we-serve/${group}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: currentDate
    });
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

export const generateBlogSitemap = () => {
  const baseUrl = 'https://camelbackmedical.com';
  const currentDate = new Date().toISOString();
  
  // Sample blog posts - in a real app, this would come from your CMS/database
  const blogPosts = [
    {
      slug: 'understanding-back-pain-causes-and-treatment',
      lastmod: currentDate,
      priority: '0.6'
    },
    {
      slug: 'benefits-of-chiropractic-care-for-athletes',
      lastmod: currentDate,
      priority: '0.6'
    },
    {
      slug: 'pregnancy-and-chiropractic-care-safety-guide',
      lastmod: currentDate,
      priority: '0.6'
    },
    {
      slug: 'preventing-workplace-injuries-ergonomic-tips',
      lastmod: currentDate,
      priority: '0.6'
    },
    {
      slug: 'natural-headache-relief-techniques',
      lastmod: currentDate,
      priority: '0.6'
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${blogPosts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${post.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemap;
};

// Function to generate structured data for different page types
export const generateStructuredData = (pageType: string, data: any) => {
  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Camelback Medical Centers - Naperville",
    "url": "https://camelbackmedical.com",
    "logo": "https://camelbackmedical.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Naperville",
      "addressRegion": "IL",
      "postalCode": "60540",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+16304161151",
      "contactType": "Customer Service"
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
    "medicalSpecialties": ["Chiropractic", "Physical Therapy", "Pain Management"]
  };

  switch (pageType) {
    case 'homepage':
      return {
        "@context": "https://schema.org",
        "@graph": [
          baseOrganization,
          {
            "@type": "WebSite",
            "name": "Camelback Medical Centers - Naperville",
            "url": "https://camelbackmedical.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://camelbackmedical.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        ]
      };

    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "MedicalProcedure",
        "name": data.name,
        "description": data.description,
        "provider": baseOrganization
      };

    case 'blog':
      return {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": data.title,
        "description": data.description,
        "author": baseOrganization,
        "publisher": baseOrganization,
        "datePublished": data.publishDate,
        "dateModified": data.modifiedDate,
        "mainEntityOfPage": data.url
      };

    default:
      return baseOrganization;
  }
};