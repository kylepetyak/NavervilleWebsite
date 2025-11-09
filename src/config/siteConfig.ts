/**
 * Site Configuration Template
 *
 * This is a TEMPLATE configuration file with placeholder content.
 * Replace ALL values below with your actual business information.
 *
 * For detailed instructions, see TEMPLATE_CUSTOMIZATION_GUIDE.md
 */

export const siteConfig = {
  // Business Information
  business: {
    name: "Your Medical Center Name",
    tagline: "Your Tagline Here",
    legalName: "Your Medical Center Name LLC",
    shortName: "Your Business",
    type: "Medical Clinic", // Medical Clinic, Chiropractic Office, Physical Therapy Center, etc.
  },

  // Location Information
  location: {
    city: "Your City",
    state: "Your State",
    stateAbbrev: "YS",
    county: "Your County",
    region: "Your region description", // Optional: e.g., "Greater Metropolitan Area"

    // Full address
    address: {
      street: "123 Main Street",
      city: "Your City",
      state: "YS",
      zip: "12345",
      country: "United States",
    },

    // Geographic coordinates (Get from Google Maps)
    coordinates: {
      latitude: "00.0000",
      longitude: "-00.0000",
    },

    // City history (optional)
    cityFounded: "1800",
    cityFounder: "City Founder Name",
  },

  // Contact Information
  contact: {
    phone: "(555) 123-4567",
    phoneRaw: "5551234567", // Same number without formatting
    email: "info@yourbusiness.com",
    fax: "(555) 123-4568",

    // Hours of operation
    hours: {
      display: "Mon-Fri: 8AM-6PM | Sat: 9AM-2PM",
      detailed: {
        monday: "8:00 AM - 6:00 PM",
        tuesday: "8:00 AM - 6:00 PM",
        wednesday: "8:00 AM - 6:00 PM",
        thursday: "8:00 AM - 6:00 PM",
        friday: "8:00 AM - 6:00 PM",
        saturday: "9:00 AM - 2:00 PM",
        sunday: "Closed",
      },
    },
  },

  // Website & Social Media
  web: {
    domain: "yourbusiness.com",
    url: "https://yourbusiness.com",

    social: {
      facebook: "https://facebook.com/yourbusiness",
      instagram: "https://instagram.com/yourbusiness",
      twitter: "https://twitter.com/yourbusiness",
      linkedin: "https://linkedin.com/company/yourbusiness",
      youtube: "https://youtube.com/@yourbusiness",
    },

    // Google Business Profile
    googleReviewLink: "https://g.page/r/YOUR_REVIEW_LINK",
    googlePlaceId: "YOUR_GOOGLE_PLACE_ID", // Optional
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
      id: "provider-1",
      name: "Dr. First Last",
      title: "Doctor of Chiropractic",
      credentials: "DC",
      bio: "Your provider bio and experience here",
      specialties: ["Chiropractic Care", "Pain Management", "Wellness"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Local connection or community involvement",
    },
    {
      id: "provider-2",
      name: "Dr. Second Name",
      title: "Physical Therapist",
      credentials: "PT, DPT",
      bio: "Your provider bio and experience here",
      specialties: ["Physical Therapy", "Sports Rehabilitation"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Local connection or community involvement",
    },
    {
      id: "provider-3",
      name: "Third Provider Name",
      title: "Sports Medicine Specialist",
      credentials: "MD",
      bio: "Your provider bio and experience here",
      specialties: ["Sports Medicine", "Injury Prevention"],
      education: [],
      imageUrl: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      localConnection: "Local connection or community involvement",
    },
  ],

  // Local Landmarks & References (CUSTOMIZE FOR YOUR CITY!)
  localLandmarks: {
    famous: [
      {
        name: "City Park Name",
        description: "popular park or outdoor space",
        category: "outdoor",
      },
      {
        name: "Historic Downtown",
        description: "historic downtown area",
        category: "cultural",
      },
      {
        name: "Local Trail Name",
        description: "walking or biking trail",
        category: "outdoor",
      },
      {
        name: "Community Center",
        description: "local community gathering place",
        category: "recreation",
      },
      {
        name: "Famous Landmark",
        description: "well-known local landmark",
        category: "landmark",
      },
      {
        name: "Recreation Area",
        description: "popular recreation destination",
        category: "outdoor",
      },
    ],

    schools: [
      {
        name: "School District Name",
        shortName: "District #",
      },
    ],

    events: [
      {
        name: "Annual Festival",
        description: "annual community festival",
      },
      {
        name: "Community Event",
        description: "popular local event",
      },
    ],

    downtown: "Downtown Area Name",
  },

  // SEO Keywords (CUSTOMIZE FOR YOUR LOCATION!)
  seo: {
    primaryKeywords: [
      "chiropractor yourcity",
      "chiropractor yourcity state",
      "yourcity medical center",
      "physical therapy yourcity",
      "back pain treatment yourcity",
      "yourcity wellness center",
    ],

    secondaryKeywords: [
      "yourcity healthcare",
      "yourcounty chiropractor",
      "yourcity pain relief",
      "sports injury yourcity",
      "yourcity physical therapy",
    ],

    localModifiers: [
      "near me",
      "yourcity st",
      "in yourcity",
      "yourcity state",
      "yourcounty",
    ],
  },

  // Page-specific content
  pages: {
    home: {
      heroTitle: "Expert Pain Relief & Wellness Care in Your City",
      heroSubtitle: "Your trusted partner for chiropractic care, physical therapy, and holistic wellness",
    },

    about: {
      heroTitle: "About Your Business – Your City, State",
      heroSubtitle: "Your trusted healthcare center serving the local community",

      missionTitle: "Our Mission Serving Your Community",
      missionSubtitle: "We're committed to being your trusted healthcare partner in the community",

      rootedTitle: "Rooted in Your Community",
      rootedContent: [
        `Your city has a rich history and vibrant community spirit that inspires our approach to healthcare. We believe in combining the best of traditional healing methods with modern medical advances to serve local families.`,
        `Just as your community has grown and evolved while maintaining its unique character, we honor time-tested healing practices while embracing innovative treatment approaches. Our team is dedicated to providing personalized care that fits your lifestyle and goals.`,
      ],

      whyLocationTitle: "Why Your Community Inspires Our Work",
      whyLocationPoints: [
        {
          title: "Active Community",
          description: "Your community values health, wellness, and staying active through local parks, trails, and recreational facilities",
        },
        {
          title: "Family Values",
          description: "Local families prioritize health and wellness, seeking quality care close to home",
        },
        {
          title: "Cultural Vitality",
          description: "Your community celebrates wellness through events, activities, and a commitment to healthy living",
        },
        {
          title: "Growing Together",
          description: "We're proud to be part of this thriving community and support residents' health journeys",
        },
        {
          title: "Accessible Care",
          description: "Convenient location with flexible scheduling for busy lives in your area",
        },
      ],

      teamTitle: "Meet Our Healthcare Providers",
      teamSubtitle: "Our team members aren't just healthcare professionals—they're your neighbors",
    },
  },

  // Mission & Values
  mission: [
    {
      icon: "Users",
      title: "Community-Centered Care",
      description: "We understand local families and their unique health needs",
    },
    {
      icon: "Heart",
      title: "Whole-Person Healthcare",
      description: "Treating the entire person, not just symptoms, for lasting wellness",
    },
    {
      icon: "MapPin",
      title: "Accessible & Local",
      description: "Convenient location with flexible scheduling for busy lives",
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
