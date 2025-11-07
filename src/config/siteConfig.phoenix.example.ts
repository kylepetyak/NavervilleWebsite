/**
 * EXAMPLE Site Configuration - Phoenix, Arizona Location
 *
 * This is an example showing how to customize the template for a different location.
 * To use this for your Phoenix location:
 * 1. Copy this file to `siteConfig.ts`
 * 2. Update all placeholder values with your actual information
 * 3. Add your team photos and update image URLs
 * 4. Deploy!
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "Camelback Medical Centers",
    tagline: "The Pain Relief Clinic",
    legalName: "Camelback Medical Centers - Phoenix",
    shortName: "CMC Phoenix",
    type: "Chiropractic Office",
  },

  // Location Information
  location: {
    city: "Phoenix",
    state: "Arizona",
    stateAbbrev: "AZ",
    county: "Maricopa County",
    region: "Greater Phoenix metropolitan area",

    // Full address
    address: {
      street: "1234 East Camelback Road",
      city: "Phoenix",
      state: "AZ",
      zip: "85016",
      country: "United States",
    },

    // Geographic coordinates (Phoenix example)
    coordinates: {
      latitude: "33.5101",
      longitude: "-112.0391",
    },

    // Founded year (optional)
    cityFounded: "1881",
    cityFounder: "Jack Swilling",
  },

  // Contact Information
  contact: {
    phone: "(602) 555-1234",
    phoneRaw: "6025551234",
    email: "info@camelbackphoenix.com",
    fax: "(602) 555-1235",

    // Hours of operation
    hours: {
      display: "Mon-Fri: 7AM-6PM | Sat: 8AM-12PM",
      detailed: {
        monday: "7:00 AM - 6:00 PM",
        tuesday: "7:00 AM - 6:00 PM",
        wednesday: "7:00 AM - 6:00 PM",
        thursday: "7:00 AM - 6:00 PM",
        friday: "7:00 AM - 6:00 PM",
        saturday: "8:00 AM - 12:00 PM",
        sunday: "Closed",
      },
    },
  },

  // Website & Social Media
  web: {
    domain: "camelbackphoenix.com",
    url: "https://camelbackphoenix.com",

    social: {
      facebook: "https://facebook.com/camelbackphoenix",
      instagram: "https://instagram.com/camelbackphoenix",
      twitter: "https://twitter.com/camelbackphoenix",
      linkedin: "https://linkedin.com/company/camelbackphoenix",
      youtube: "https://youtube.com/@camelbackphoenix",
    },

    // Google Business
    googleReviewLink: "https://g.page/r/YOUR_GOOGLE_REVIEW_CODE/review",
    googlePlaceId: "ChIJYOUR_PLACE_ID",
  },

  // Branding & Design
  branding: {
    primaryColor: "#2563EB", // blue-600
    secondaryColor: "#F97316", // orange-500 (Arizona colors!)
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
      price: 39,          // Phoenix pricing example
      originalPrice: 425,
      savings: 386,
      description: "New Patient Special",
      includes: [
        "Comprehensive consultation",
        "Complete examination",
        "Digital X-rays (if needed)",
        "Personalized treatment plan",
      ],
    },
  },

  // Team Members
  team: [
    {
      id: "dr-martinez",
      name: "Dr. Carlos Martinez DC",
      title: "Doctor of Chiropractic",
      credentials: "DC",
      bio: "Over 20 years serving the Phoenix community with excellence in chiropractic care",
      specialties: ["Chiropractic Care", "Sports Medicine", "Pain Management"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Phoenix resident for 25 years, Suns season ticket holder",
    },
    {
      id: "dr-thompson",
      name: "Dr. Sarah Thompson PT",
      title: "Physical Therapist",
      credentials: "PT, DPT",
      bio: "Specializing in sports rehabilitation and active recovery",
      specialties: ["Physical Therapy", "Sports Rehabilitation", "Active Release"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Arizona State University alumni",
    },
    {
      id: "dr-patel",
      name: "Dr. Raj Patel MD",
      title: "Sports Medicine Physician",
      credentials: "MD",
      bio: "Board-certified in sports medicine with focus on non-surgical solutions",
      specialties: ["Sports Medicine", "Regenerative Medicine", "Injury Prevention"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Former team physician for local high schools",
    },
  ],

  // Local Landmarks & References (Phoenix-specific)
  localLandmarks: {
    famous: [
      {
        name: "Camelback Mountain",
        description: "iconic hiking destination and city symbol",
        category: "outdoor",
      },
      {
        name: "Phoenix Zoo",
        description: "popular family attraction",
        category: "recreation",
      },
      {
        name: "Desert Botanical Garden",
        description: "world-renowned desert garden",
        category: "cultural",
      },
      {
        name: "Papago Park",
        description: "red rock formations and trails",
        category: "outdoor",
      },
      {
        name: "Arizona Biltmore",
        description: "historic luxury resort",
        category: "landmark",
      },
      {
        name: "Piestewa Peak",
        description: "popular hiking trail",
        category: "outdoor",
      },
    ],

    schools: [
      {
        name: "Paradise Valley Unified School District",
        shortName: "PVUSD",
      },
      {
        name: "Scottsdale Unified School District",
        shortName: "SUSD",
      },
    ],

    events: [
      {
        name: "Phoenix Open",
        description: "PGA Tour golf tournament",
      },
      {
        name: "Arizona State Fair",
        description: "annual state fair",
      },
      {
        name: "Phoenix Pride Festival",
        description: "community celebration",
      },
    ],

    downtown: "Downtown Phoenix",
  },

  // SEO Keywords (Phoenix-specific)
  seo: {
    primaryKeywords: [
      "phoenix chiropractor",
      "chiropractor phoenix az",
      "phoenix medical center",
      "physical therapy phoenix",
      "back pain treatment phoenix",
      "phoenix wellness center",
      "camelback chiropractor",
    ],

    secondaryKeywords: [
      "phoenix healthcare",
      "maricopa county chiropractor",
      "phoenix pain relief",
      "sports injury phoenix",
      "phoenix physical therapy",
      "scottsdale chiropractor",
      "paradise valley chiropractor",
    ],

    localModifiers: [
      "near me",
      "phoenix az",
      "in phoenix",
      "phoenix arizona",
      "maricopa county",
      "east phoenix",
    ],
  },

  // Page-specific content (Phoenix-customized)
  pages: {
    home: {
      heroTitle: "Expert Pain Relief & Wellness Care in Phoenix, AZ",
      heroSubtitle: "Your trusted partner for chiropractic care, physical therapy, and holistic wellness in the heart of Phoenix",
    },

    about: {
      heroTitle: "About Camelback Medical Centers – Phoenix, Arizona",
      heroSubtitle: "Your trusted chiropractic and wellness center in the heart of Phoenix, AZ",

      missionTitle: "Our Mission Serving Phoenix, AZ",
      missionSubtitle: "We're committed to being your trusted chiropractic and wellness partner in the Phoenix community",

      rootedTitle: "Rooted in Phoenix, Arizona Legacy",
      rootedContent: [
        `Founded in 1881 in the Salt River Valley, Phoenix, AZ has grown from a small agricultural community into the nation's fifth-largest city. Like the legendary phoenix bird, our city embodies resilience and renewal—values that inspire our approach to healthcare. From Camelback Mountain to the Desert Botanical Garden, the spirit of the Southwest shapes our commitment to wellness.`,
        `Just as Phoenix has transformed into a thriving metropolis while honoring its desert heritage, Camelback Medical Centers combines time-tested healing traditions with cutting-edge medical technology. We serve Phoenix families, athletes, and active seniors who embrace the Arizona lifestyle.`,
      ],

      whyLocationTitle: "Why Phoenix, Arizona Inspires Our Work",
      whyLocationPoints: [
        {
          title: "Active Desert Lifestyle",
          description: "From Camelback Mountain to Papago Park, Phoenix residents embrace outdoor activities year-round and prioritize staying active and healthy",
        },
        {
          title: "Sports & Recreation Culture",
          description: "Home to professional sports teams and world-class golf, Phoenix's athletic culture aligns with our sports medicine expertise",
        },
        {
          title: "Growing Community",
          description: "Phoenix's rapid growth and diverse population inspire us to provide accessible, inclusive healthcare for all backgrounds",
        },
        {
          title: "Desert Innovation",
          description: "Like Phoenix itself, we blend innovation with tradition—combining modern treatments with natural healing principles",
        },
        {
          title: "Sun-Powered Wellness",
          description: "Our year-round sunshine philosophy matches Phoenix's climate: bright, warm, and focused on positive outcomes",
        },
      ],

      teamTitle: "Meet Our Phoenix Chiropractors & Healthcare Providers",
      teamSubtitle: "Our team members aren't just healthcare professionals—they're your Phoenix neighbors",
    },
  },

  // Mission & Values (same across locations, or customize)
  mission: [
    {
      icon: "Users",
      title: "Community-Centered Care",
      description: "We understand Phoenix families and their unique health needs",
    },
    {
      icon: "Heart",
      title: "Whole-Person Healthcare",
      description: "Treating the entire person, not just symptoms, for lasting wellness",
    },
    {
      icon: "MapPin",
      title: "Accessible & Local",
      description: "Convenient location with flexible scheduling for busy Phoenix lives",
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
      googleAnalyticsId: "G-XXXXXXXXXX",
      googleTagManagerId: "GTM-XXXXXXX",
    },

    // Facebook Pixel
    facebookPixel: {
      enabled: false,
      pixelId: "",
    },
  },
};

// Helper functions (same across all configs)
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

export type SiteConfig = typeof siteConfig;
