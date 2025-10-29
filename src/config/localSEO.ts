/**
 * Local SEO Configuration for Camelback Medical Centers - Naperville
 * This file contains all the local business information for SEO optimization
 */

export const businessInfo = {
  name: "Camelback Medical Centers - Naperville",
  legalName: "Camelback Medical Centers LLC",
  description: "Expert chiropractic care, physical therapy, and wellness services in Naperville, IL. Serving families, athletes, and individuals seeking natural pain relief and optimal health.",

  // Contact Information
  phone: "(630) 416-1151",
  phoneFormatted: "+16304161151",
  email: "info@camelbackmedical.com",

  // Address Information
  address: {
    streetAddress: "123 Main Street", // UPDATE WITH ACTUAL ADDRESS
    addressLocality: "Naperville",
    addressRegion: "IL",
    postalCode: "60540",
    addressCountry: "US"
  },

  // Geographic Coordinates for Naperville
  geo: {
    latitude: "41.7508",
    longitude: "-88.1535"
  },

  // Service Area
  serviceArea: [
    "Naperville, IL",
    "Aurora, IL",
    "Wheaton, IL",
    "Lisle, IL",
    "Bolingbrook, IL",
    "Downers Grove, IL",
    "DuPage County, IL",
    "Will County, IL"
  ],

  // Business Hours
  openingHours: [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-14:00"
  ],
  openingHoursDetailed: {
    monday: "8:00 AM - 6:00 PM",
    tuesday: "8:00 AM - 6:00 PM",
    wednesday: "8:00 AM - 6:00 PM",
    thursday: "8:00 AM - 6:00 PM",
    friday: "8:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM",
    sunday: "Closed"
  },

  // Website & Social Media
  url: "https://camelbackmedical.com",
  logo: "https://camelbackmedical.com/logo.png",
  image: "https://camelbackmedical.com/og-image.jpg",

  socialMedia: {
    facebook: "https://www.facebook.com/camelbackmedical",
    instagram: "https://www.instagram.com/camelbackmedical",
    linkedin: "https://www.linkedin.com/company/camelbackmedical",
    youtube: "https://www.youtube.com/@camelbackmedical"
  },

  // Medical Specialties
  medicalSpecialties: [
    "Chiropractic",
    "Physical Therapy",
    "Sports Medicine",
    "Pain Management",
    "Rehabilitation",
    "Spinal Decompression",
    "Massage Therapy",
    "Acupuncture"
  ],

  // Conditions Treated (for SEO)
  conditionsTreated: [
    "Back Pain",
    "Neck Pain",
    "Headaches",
    "Sciatica",
    "Arthritis",
    "Sports Injuries",
    "Car Accident Injuries",
    "Work Injuries",
    "Carpal Tunnel Syndrome",
    "Knee Pain",
    "Hip Pain",
    "Shoulder Pain"
  ],

  // Price Range
  priceRange: "$$",

  // Payment Methods
  paymentAccepted: [
    "Cash",
    "Credit Card",
    "Debit Card",
    "Insurance",
    "HSA",
    "FSA"
  ],

  // Languages Spoken
  languages: ["English", "Spanish"],

  // Founded Year
  foundingDate: "1994",

  // Special Offers
  specialOffer: {
    name: "New Patient Special",
    price: "$29",
    regularPrice: "$425",
    description: "Consultation + Examination + X-Rays"
  }
};

/**
 * Generate comprehensive local business schema markup
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Schema
      {
        "@type": "MedicalBusiness",
        "@id": `${businessInfo.url}#organization`,
        "name": businessInfo.name,
        "legalName": businessInfo.legalName,
        "description": businessInfo.description,
        "url": businessInfo.url,
        "logo": {
          "@type": "ImageObject",
          "url": businessInfo.logo,
          "width": 300,
          "height": 100
        },
        "image": businessInfo.image,
        "telephone": businessInfo.phoneFormatted,
        "email": businessInfo.email,
        "address": {
          "@type": "PostalAddress",
          ...businessInfo.address
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": businessInfo.geo.latitude,
          "longitude": businessInfo.geo.longitude
        },
        "openingHoursSpecification": businessInfo.openingHours.map(hours => ({
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": hours.split(' ')[0],
          "opens": hours.split(' ')[1].split('-')[0],
          "closes": hours.split(' ')[1].split('-')[1]
        })),
        "priceRange": businessInfo.priceRange,
        "paymentAccepted": businessInfo.paymentAccepted.join(", "),
        "currenciesAccepted": "USD",
        "areaServed": businessInfo.serviceArea.map(area => ({
          "@type": "City",
          "name": area
        })),
        "sameAs": Object.values(businessInfo.socialMedia),
        "foundingDate": businessInfo.foundingDate,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Medical Services",
          "itemListElement": businessInfo.medicalSpecialties.map(specialty => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": specialty
            }
          }))
        }
      },

      // Medical Clinic Schema
      {
        "@type": "MedicalClinic",
        "@id": `${businessInfo.url}#medical-clinic`,
        "name": businessInfo.name,
        "description": businessInfo.description,
        "url": businessInfo.url,
        "telephone": businessInfo.phoneFormatted,
        "address": {
          "@type": "PostalAddress",
          ...businessInfo.address
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": businessInfo.geo.latitude,
          "longitude": businessInfo.geo.longitude
        },
        "openingHours": businessInfo.openingHours,
        "medicalSpecialty": businessInfo.medicalSpecialties,
        "availableService": businessInfo.medicalSpecialties.map(specialty => ({
          "@type": "MedicalProcedure",
          "name": specialty,
          "availableLanguage": businessInfo.languages
        }))
      },

      // Local Business Schema
      {
        "@type": "LocalBusiness",
        "@id": `${businessInfo.url}#local-business`,
        "name": businessInfo.name,
        "description": businessInfo.description,
        "url": businessInfo.url,
        "telephone": businessInfo.phoneFormatted,
        "address": {
          "@type": "PostalAddress",
          ...businessInfo.address
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": businessInfo.geo.latitude,
          "longitude": businessInfo.geo.longitude
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "priceRange": businessInfo.priceRange,
        "hasMap": `https://www.google.com/maps/search/?api=1&query=${businessInfo.geo.latitude},${businessInfo.geo.longitude}`
      },

      // Website Schema
      {
        "@type": "WebSite",
        "@id": `${businessInfo.url}#website`,
        "url": businessInfo.url,
        "name": businessInfo.name,
        "description": businessInfo.description,
        "publisher": {
          "@id": `${businessInfo.url}#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${businessInfo.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      },

      // Special Offer Schema
      {
        "@type": "Offer",
        "@id": `${businessInfo.url}#new-patient-special`,
        "name": businessInfo.specialOffer.name,
        "description": businessInfo.specialOffer.description,
        "price": businessInfo.specialOffer.price.replace('$', ''),
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": `${businessInfo.url}/booking`,
        "seller": {
          "@id": `${businessInfo.url}#organization`
        },
        "priceValidUntil": "2025-12-31"
      }
    ]
  };
}

/**
 * Generate breadcrumb schema for a given page
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
}

/**
 * Local SEO Keywords for Naperville
 */
export const localSEOKeywords = {
  primary: [
    "chiropractor naperville",
    "chiropractor naperville il",
    "naperville chiropractor",
    "physical therapy naperville",
    "naperville physical therapy",
    "back pain naperville",
    "neck pain treatment naperville"
  ],
  secondary: [
    "chiropractor near me naperville",
    "best chiropractor naperville",
    "sports injury naperville",
    "car accident injury naperville",
    "sciatica treatment naperville",
    "spinal decompression naperville",
    "massage therapy naperville",
    "acupuncture naperville"
  ],
  neighborhood: [
    "downtown naperville chiropractor",
    "naperville riverwalk area chiropractor",
    "95th street naperville chiropractor",
    "aurora naperville chiropractor",
    "wheaton naperville chiropractor"
  ]
};
