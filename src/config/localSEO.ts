/**
 * Local SEO Configuration
 * This file uses the siteConfig to generate SEO-optimized business information
 */

import { siteConfig, getFullAddress, getBusinessNameWithLocation } from './siteConfig';

export const businessInfo = {
  name: getBusinessNameWithLocation(),
  legalName: siteConfig.business.legalName,
  description: `Expert chiropractic care, physical therapy, and wellness services in ${siteConfig.location.city}, ${siteConfig.location.stateAbbrev}. Serving families, athletes, and individuals seeking natural pain relief and optimal health.`,

  // Contact Information
  phone: siteConfig.contact.phone,
  phoneFormatted: `+1${siteConfig.contact.phoneRaw}`,
  email: siteConfig.contact.email,

  // Address Information
  address: {
    streetAddress: siteConfig.location.address.street,
    addressLocality: siteConfig.location.address.city,
    addressRegion: siteConfig.location.address.state,
    postalCode: siteConfig.location.address.zip,
    addressCountry: siteConfig.location.address.country === "United States" ? "US" : siteConfig.location.address.country
  },

  // Geographic Coordinates
  geo: {
    latitude: siteConfig.location.coordinates.latitude,
    longitude: siteConfig.location.coordinates.longitude
  },

  // Service Area (customize based on your location)
  serviceArea: [
    `${siteConfig.location.city}, ${siteConfig.location.stateAbbrev}`,
    `${siteConfig.location.county}`,
    "Aurora, IL",
    "Wheaton, IL",
    "Lisle, IL",
    "Bolingbrook, IL",
    "Downers Grove, IL",
    "Will County, IL"
  ],

  // Business Hours (converted to schema.org format)
  openingHours: [
    "Mo-Fr 08:00-19:00",
    "Sa 09:00-14:00"
  ],
  openingHoursDetailed: siteConfig.contact.hours.detailed,

  // Website & Social Media
  url: siteConfig.web.url,
  logo: `${siteConfig.web.url}${siteConfig.branding.logo.png}`,
  image: `${siteConfig.web.url}/og-image.jpg`,
  socialMedia: siteConfig.web.social,

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
    name: siteConfig.offers.newPatientSpecial.description,
    price: `$${siteConfig.offers.newPatientSpecial.price}`,
    regularPrice: `$${siteConfig.offers.newPatientSpecial.originalPrice}`,
    description: siteConfig.offers.newPatientSpecial.includes.join(", ")
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
            "closes": "19:00"
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
 * Local SEO Keywords (dynamically generated from siteConfig)
 */
export const localSEOKeywords = {
  primary: siteConfig.seo.primaryKeywords,
  secondary: siteConfig.seo.secondaryKeywords,
  neighborhood: [
    `downtown ${siteConfig.location.city.toLowerCase()} chiropractor`,
    `${siteConfig.localLandmarks.famous[0].name.toLowerCase()} area chiropractor`,
    `${siteConfig.location.county.toLowerCase()} chiropractor`,
  ]
};
