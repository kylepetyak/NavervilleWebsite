/**
 * Site Configuration Template
 *
 * This file contains all customizable content for the website.
 * To create a site for a different location:
 * 1. Copy this file
 * 2. Update all values below
 * 3. Replace imports throughout the codebase
 *
 * All hardcoded content has been moved here for easy customization.
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "Camelback Medical Centers",
    tagline: "The Pain Relief Clinic",
    legalName: "Camelback Medical Centers - Naperville",
    shortName: "CMC Naperville",
    type: "Medical Clinic", // Medical Clinic, Chiropractic Office, Physical Therapy Center, etc.
  },

  // Location Information
  location: {
    city: "Naperville",
    state: "Illinois",
    stateAbbrev: "IL",
    county: "DuPage County",
    region: "Chicago's premier western suburbs", // Optional regional context

    // Full address
    address: {
      street: "123 Main Street",
      city: "Naperville",
      state: "IL",
      zip: "60540",
      country: "United States",
    },

    // Geographic coordinates
    coordinates: {
      latitude: "41.7508",
      longitude: "-88.1535",
    },

    // Founded year (optional)
    cityFounded: "1831",
    cityFounder: "Joseph Naper",
  },

  // Contact Information
  contact: {
    phone: "(630) 416-1151",
    phoneRaw: "6304161151", // For tel: links
    email: "info@camelbackmedical.com",
    fax: "(630) 416-1152",

    // Hours of operation
    hours: {
      display: "Mon-Fri: 8AM-7PM | Sat: 9AM-2PM",
      detailed: {
        monday: "8:00 AM - 7:00 PM",
        tuesday: "8:00 AM - 7:00 PM",
        wednesday: "8:00 AM - 7:00 PM",
        thursday: "8:00 AM - 7:00 PM",
        friday: "8:00 AM - 7:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed",
      },
    },
  },

  // Website & Social Media
  web: {
    domain: "camelbackmedical.com",
    url: "https://camelbackmedical.com",

    social: {
      facebook: "https://facebook.com/camelbackmedical",
      instagram: "https://instagram.com/camelbackmedical",
      twitter: "https://twitter.com/camelbackmedical",
      linkedin: "https://linkedin.com/company/camelbackmedical",
      youtube: "https://youtube.com/@camelbackmedical",
    },

    // Google Business
    googleReviewLink: "https://share.google/SfA3o8kkHjJZxGWuW",
    googlePlaceId: "", // Add your Google Place ID here
  },

  // Branding & Design
  branding: {
    primaryColor: "#2563EB", // blue-600
    secondaryColor: "#F97316", // orange-500
    accentColor: "#10B981", // green-500

    // Logo files (in /public)
    logo: {
      svg: "/logo.svg",
      png: "/logo.png",
      favicon: "/favicon.svg",
    },
  },

  // Pricing & Offers
  offers: {
    newPatientSpecial: {
      price: 29,
      originalPrice: 425,
      savings: 396,
      description: "New Patient Special",
      includes: [
        "Comprehensive consultation",
        "Complete examination",
        "X-rays (if needed)",
        "Treatment plan discussion",
      ],
    },
  },

  // Team Members
  team: [
    {
      id: "dr-james",
      name: "Dr. James Nabzdyk DC",
      title: "Doctor of Chiropractic",
      credentials: "DC",
      bio: "Over 30 years serving the community, passionate about educating families on wellness",
      specialties: ["Chiropractic Care", "Wellness", "Pain Management"],
      education: [],
      imageKey: "drJamesPhoto", // References imported image
      localConnection: "Over 30 years serving the community, passionate about educating families on wellness",
    },
    {
      id: "dr-chen",
      name: "Dr. Michael Chen",
      title: "Physical Medicine Specialist",
      credentials: "MD",
      bio: "Grew up in Naperville, North High School alumnus",
      specialties: ["Physical Medicine", "Sports Medicine"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Grew up in Naperville, North High School alumnus",
    },
    {
      id: "lisa-rodriguez",
      name: "Lisa Rodriguez, PT",
      title: "Lead Physical Therapist",
      credentials: "PT, DPT",
      bio: "Volunteers at Naperville youth sports leagues",
      specialties: ["Physical Therapy", "Sports Rehabilitation"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Volunteers at Naperville youth sports leagues",
    },
  ],

  // Local Landmarks & References (for location-specific content)
  localLandmarks: {
    famous: [
      {
        name: "Naperville Riverwalk",
        description: "scenic walking path along the DuPage River",
        category: "outdoor",
      },
      {
        name: "Moser Tower's Millennium Carillon",
        description: "iconic bell tower",
        category: "landmark",
      },
      {
        name: "Naper Settlement",
        description: "historic outdoor museum",
        category: "cultural",
      },
      {
        name: "Centennial Beach",
        description: "popular swimming spot",
        category: "recreation",
      },
      {
        name: "DuPage River Trail",
        description: "extensive biking and walking trail",
        category: "outdoor",
      },
      {
        name: "Knoch Knolls Park",
        description: "community park with activities",
        category: "recreation",
      },
    ],

    schools: [
      {
        name: "Naperville Community Unit School District 203",
        shortName: "District 203",
      },
      {
        name: "Indian Prairie Community Unit School District 204",
        shortName: "District 204",
      },
    ],

    events: [
      {
        name: "Ribfest",
        description: "annual summer festival",
      },
      {
        name: "Naperville Municipal Band",
        description: "community music performances",
      },
      {
        name: "Last Fling",
        description: "Labor Day festival",
      },
    ],

    downtown: "Historic Downtown Naperville",
  },

  // SEO Keywords (location-specific)
  seo: {
    primaryKeywords: [
      "naperville chiropractor",
      "chiropractor naperville il",
      "naperville medical center",
      "physical therapy naperville",
      "back pain treatment naperville",
      "naperville wellness center",
    ],

    secondaryKeywords: [
      "naperville healthcare",
      "dupage county chiropractor",
      "naperville pain relief",
      "sports injury naperville",
      "naperville physical therapy",
    ],

    localModifiers: [
      "near me",
      "naperville il",
      "in naperville",
      "naperville illinois",
      "dupage county",
    ],
  },

  // Page-specific content
  pages: {
    home: {
      heroTitle: "Expert Pain Relief & Wellness Care in Naperville, IL",
      heroSubtitle: "Your trusted partner for chiropractic care, physical therapy, and holistic wellness in the heart of Naperville",
    },

    about: {
      heroTitle: "About Camelback Medical Centers – Naperville, Illinois",
      heroSubtitle: "Your trusted chiropractic and wellness center in the heart of Naperville, IL",

      missionTitle: "Our Mission Serving Naperville, IL",
      missionSubtitle: "We're committed to being your trusted chiropractic and wellness partner in the Naperville community",

      rootedTitle: "Rooted in Naperville, Illinois Legacy",
      rootedContent: [
        `Founded in 1831 by Joseph Naper on the DuPage River, Naperville, IL's blend of history, charm, and growth inspires our approach to healthcare. From the iconic Riverwalk and Moser Tower's Millennium Carillon to the historic Naper Settlement, community and wellness are woven into Naperville's spirit.`,
        `Just as Naperville has grown from a small settlement into one of Chicago's premier western suburbs while preserving its character, Camelback Medical Centers believes in honoring traditional chiropractic healing methods while embracing modern medical advances for Naperville families.`,
      ],

      whyLocationTitle: "Why Naperville, Illinois Inspires Our Work",
      whyLocationPoints: [
        {
          title: "Active Lifestyle",
          description: "From the DuPage River Trail to Centennial Beach and Knoch Knolls Park, Naperville, IL residents value staying active and healthy",
        },
        {
          title: "Excellence in Education",
          description: "Naperville's top-rated schools (Districts 203 and 204) reflect the community's commitment to learning and growth—values we share in healthcare",
        },
        {
          title: "Cultural Vitality",
          description: "From the Naperville Municipal Band to Historic Downtown and DuPage County events, this community celebrates wellness in all its forms",
        },
        {
          title: "Family-Oriented Values",
          description: "Naperville's parks (including Riverwalk), festivals like Ribfest, and community events show how much families matter here",
        },
        {
          title: "Innovation & Tradition",
          description: "Like Naperville itself, our chiropractic center blends cutting-edge medical technology with time-tested healing principles",
        },
      ],

      teamTitle: "Meet Our Naperville Chiropractors & Healthcare Providers",
      teamSubtitle: "Our team members aren't just healthcare professionals—they're your Naperville neighbors",
    },
  },

  // Mission & Values
  mission: [
    {
      icon: "Users",
      title: "Community-Centered Care",
      description: "We understand Naperville families and their unique health needs",
    },
    {
      icon: "Heart",
      title: "Whole-Person Healthcare",
      description: "Treating the entire person, not just symptoms, for lasting wellness",
    },
    {
      icon: "MapPin",
      title: "Accessible & Local",
      description: "Convenient location with flexible scheduling for busy Naperville lives",
    },
    {
      icon: "Shield",
      title: "Evidence-Driven",
      description: "Combining proven medical practices with innovative treatment approaches",
    },
    {
      icon: "Target",
      title: "Person-First Approach",
      description: "Every treatment plan is customized to your individual goals and lifestyle",
    },
    {
      icon: "Award",
      title: "Your Wellness Partner",
      description: "Supporting your health journey from acute care to long-term wellness",
    },
  ],

  // Integration Settings
  integrations: {
    // GoHighLevel
    ghl: {
      enabled: false,
      locationId: "",
      apiKey: "",
      webhookUrl: "",
    },

    // Google Analytics
    analytics: {
      googleAnalyticsId: "",
      googleTagManagerId: "",
    },

    // Facebook Pixel
    facebookPixel: {
      enabled: false,
      pixelId: "",
    },
  },
};

// Helper functions for common patterns
export const getFullAddress = () => {
  const { address } = siteConfig.location;
  return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
};

export const getBusinessNameWithLocation = () => {
  return `${siteConfig.business.name} - ${siteConfig.location.city}`;
};

export const getCityState = () => {
  return `${siteConfig.location.city}, ${siteConfig.location.stateAbbrev}`;
};

export const getCityStateFull = () => {
  return `${siteConfig.location.city}, ${siteConfig.location.state}`;
};

export const getPhoneLink = () => {
  return `tel:${siteConfig.contact.phoneRaw}`;
};

export const getEmailLink = () => {
  return `mailto:${siteConfig.contact.email}`;
};

// Export type for TypeScript support
export type SiteConfig = typeof siteConfig;
