# 🎨 Website Template Customization Guide

This Naperville chiropractic website has been converted into a **reusable template** that can be quickly customized for any medical/chiropractic center in any location.

All location-specific content, business information, and branding can be changed by editing a single configuration file!

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration File](#configuration-file)
3. [Step-by-Step Customization](#step-by-step-customization)
4. [Testing Your Changes](#testing-your-changes)
5. [Advanced Customization](#advanced-customization)
6. [Deployment](#deployment)

---

## 🚀 Quick Start

**To customize this template for a new location:**

1. Open `/src/config/siteConfig.ts`
2. Update all the values with your business information
3. Replace the logo files in `/public/`
4. Run `npm run build` to test
5. Deploy to Vercel

That's it! The entire website will automatically update with your information.

---

## 📁 Configuration File

**Location**: `/src/config/siteConfig.ts`

This is the **single source of truth** for all customizable content on the website.

### What It Controls:

✅ Business name and tagline
✅ Location (city, state, address, coordinates)
✅ Contact information (phone, email, hours)
✅ Team members and providers
✅ Pricing and special offers
✅ Local landmarks and references
✅ SEO keywords
✅ Page content (headings, descriptions)
✅ Social media links
✅ Branding colors

---

## 🔧 Step-by-Step Customization

### Step 1: Business Information

```typescript
business: {
  name: "Your Medical Center Name",           // Change to your business name
  tagline: "Your Tagline Here",              // Change to your tagline
  legalName: "Your Legal Business Name LLC",
  shortName: "YourBusiness City",
  type: "Medical Clinic",                     // Or "Chiropractic Office", etc.
}
```

**Example for Phoenix:**
```typescript
business: {
  name: "Camelback Medical Centers",
  tagline: "The Pain Relief Clinic",
  legalName: "Camelback Medical Centers - Phoenix",
  shortName: "CMC Phoenix",
  type: "Chiropractic Office",
}
```

---

### Step 2: Location Information

```typescript
location: {
  city: "YourCity",
  state: "YourState",
  stateAbbrev: "YS",
  county: "Your County",
  region: "Optional regional context",

  address: {
    street: "123 Your Street",
    city: "YourCity",
    state: "YS",
    zip: "12345",
    country: "United States",
  },

  coordinates: {
    latitude: "00.0000",   // Get from Google Maps
    longitude: "-00.0000",
  },

  cityFounded: "1850",              // Optional
  cityFounder: "Founder Name",      // Optional
}
```

**How to get coordinates:**
1. Go to Google Maps
2. Right-click your business location
3. Click the coordinates to copy them

---

### Step 3: Contact Information

```typescript
contact: {
  phone: "(555) 123-4567",
  phoneRaw: "5551234567",     // Same number without formatting
  email: "info@yourbusiness.com",
  fax: "(555) 123-4568",

  hours: {
    display: "Mon-Fri: 8AM-6PM | Sat: 9AM-1PM",
    detailed: {
      monday: "8:00 AM - 6:00 PM",
      tuesday: "8:00 AM - 6:00 PM",
      // ... update for each day
    },
  },
}
```

---

### Step 4: Website & Social Media

```typescript
web: {
  domain: "yourbusiness.com",
  url: "https://yourbusiness.com",

  social: {
    facebook: "https://facebook.com/yourbusiness",
    instagram: "https://instagram.com/yourbusiness",
    // Update with your actual social media URLs
  },

  googleReviewLink: "https://share.google/YOUR_LINK",  // Get from Google Business
  googlePlaceId: "YOUR_GOOGLE_PLACE_ID",              // Optional
}
```

---

### Step 5: Team Members

```typescript
team: [
  {
    id: "dr-smith",
    name: "Dr. John Smith DC",
    title: "Doctor of Chiropractic",
    credentials: "DC",
    bio: "Your provider bio here",
    specialties: ["Chiropractic Care", "Wellness"],
    imageUrl: "https://example.com/photo.jpg",  // Or use imageKey for imported photos
    localConnection: "Local connection or fun fact",
  },
  // Add more team members as needed
]
```

---

### Step 6: Local Landmarks (Important for SEO!)

```typescript
localLandmarks: {
  famous: [
    {
      name: "Your City Downtown",
      description: "historic downtown area",
      category: "cultural",
    },
    {
      name: "City Park",
      description: "popular park",
      category: "outdoor",
    },
    // Add 5-10 well-known local landmarks
  ],

  schools: [
    {
      name: "Your City School District 1",
      shortName: "District 1",
    },
  ],

  events: [
    {
      name: "Annual City Festival",
      description: "summer celebration",
    },
  ],

  downtown: "Historic Downtown YourCity",
}
```

**Why landmarks matter:**
Google uses local landmark mentions for local SEO ranking. Include:
- Parks and trails
- Historic sites
- School districts
- Popular venues
- Annual events

---

### Step 7: SEO Keywords

```typescript
seo: {
  primaryKeywords: [
    "yourcity chiropractor",
    "chiropractor yourcity state",
    "yourcity medical center",
    // 5-10 primary keywords
  ],

  secondaryKeywords: [
    "back pain treatment yourcity",
    "physical therapy yourcity",
    // 5-10 secondary keywords
  ],

  localModifiers: [
    "near me",
    "yourcity st",
    "in yourcity",
  ],
}
```

---

### Step 8: Page Content

The `pages` object controls all major page headings and content:

```typescript
pages: {
  home: {
    heroTitle: "Expert Pain Relief in YourCity, ST",
    heroSubtitle: "Your trusted partner for wellness",
  },

  about: {
    heroTitle: "About Your Business – YourCity, State",
    heroSubtitle: "Your tagline here",
    // ... customize all about page content
  },
}
```

---

### Step 9: Pricing & Offers

```typescript
offers: {
  newPatientSpecial: {
    price: 29,              // Your special price
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
}
```

---

## 🧪 Testing Your Changes

### 1. Test Locally

```bash
# Start development server
npm run dev

# Visit http://localhost:3000
# Check all pages:
# - Home page
# - About page
# - Team sections
# - Contact info
```

### 2. Build for Production

```bash
npm run build
```

If the build succeeds, you're good to go!

### 3. Check SEO

Look for your location mentioned in:
- Page titles
- H1 and H2 headings
- Body content
- Meta descriptions

---

## 🎨 Advanced Customization

### Custom Branding Colors

```typescript
branding: {
  primaryColor: "#2563EB",    // Your primary color (hex)
  secondaryColor: "#F97316",  // Your secondary color
  accentColor: "#10B981",     // Your accent color
}
```

**Note:** Changing colors requires updating Tailwind classes in components.

---

### Adding More Team Members

Just add more objects to the `team` array:

```typescript
team: [
  { /* First provider */ },
  { /* Second provider */ },
  { /* Third provider */ },
  { /* Add as many as you need */ },
]
```

The layout automatically adapts to any number of team members.

---

### Customizing Mission Values

Edit the `mission` array:

```typescript
mission: [
  {
    icon: "Users",                    // Icon name (Users, Heart, MapPin, Shield, Target, Award)
    title: "Your Value Title",
    description: "Your value description",
  },
  // Add or remove mission values as needed
]
```

---

## 🚀 Deployment

### Deploy to Vercel

```bash
# Make sure all changes are committed
git add .
git commit -m "Customize for [Your City]"
git push

# Vercel will automatically deploy
# Or use: vercel --prod
```

### Environment Variables

Don't forget to set these in Vercel:

```
VITE_GOOGLE_REVIEW_LINK=https://share.google/YOUR_LINK
VITE_GHL_LOCATION_ID=your_id  (if using GoHighLevel)
```

---

## ✅ Customization Checklist

Use this checklist to ensure you've updated everything:

### Business Information
- [ ] Business name
- [ ] Tagline
- [ ] Legal name
- [ ] Business type

### Location
- [ ] City name
- [ ] State name
- [ ] Full address
- [ ] GPS coordinates
- [ ] County name
- [ ] Regional context

### Contact
- [ ] Phone number
- [ ] Email address
- [ ] Business hours
- [ ] Fax (optional)

### Web Presence
- [ ] Domain name
- [ ] Website URL
- [ ] Facebook URL
- [ ] Instagram URL
- [ ] Google Review Link
- [ ] Logo files (`/public/logo.png` and `/public/logo.svg`)

### Content
- [ ] Team member photos
- [ ] Team member bios
- [ ] Local landmarks (5-10)
- [ ] School districts
- [ ] Local events
- [ ] Downtown area name

### SEO
- [ ] Primary keywords (with your city)
- [ ] Secondary keywords
- [ ] Page titles
- [ ] Meta descriptions

### Offers & Pricing
- [ ] Special offer price
- [ ] Regular price
- [ ] Offer description

### Testing
- [ ] Run `npm run dev` and check all pages
- [ ] Run `npm run build` successfully
- [ ] Deploy to Vercel
- [ ] Test on mobile devices

---

## 📝 Example: Converting Naperville to Phoenix

**Before (Naperville):**
```typescript
location: {
  city: "Naperville",
  state: "Illinois",
  stateAbbrev: "IL",
  county: "DuPage County",
}
```

**After (Phoenix):**
```typescript
location: {
  city: "Phoenix",
  state: "Arizona",
  stateAbbrev: "AZ",
  county: "Maricopa County",
}
```

The entire website automatically updates!

---

## 🆘 Troubleshooting

### Build Fails

**Error:** "Cannot find module '@/config/siteConfig'"
**Fix:** Make sure `/src/config/siteConfig.ts` exists

**Error:** Icon not rendering
**Fix:** Check that icon name in config matches available icons (Users, Heart, MapPin, Shield, Target, Award, Phone, CheckCircle)

### Content Not Updating

1. Clear cache: `rm -rf dist`
2. Rebuild: `npm run build`
3. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+F5` (Windows)

### Logo Not Showing

1. Ensure logo files exist:
   - `/public/logo.svg` OR
   - `/public/logo.png`
2. Update `siteConfig.ts` logo paths if needed

---

## 📞 Support

Need help customizing? Check:
- Configuration file comments in `/src/config/siteConfig.ts`
- Example config in `/src/config/siteConfig.example.ts` (if provided)
- README.md for general setup

---

## 🎉 You're Done!

Once you've updated the `siteConfig.ts` file and replaced the logo, your website is ready for your new location!

**Pro Tip:** Keep a copy of your customized `siteConfig.ts` file backed up. This makes it easy to deploy to additional locations or restore if needed.

---

**Template Version:** 1.0.0
**Last Updated:** 2025
**Compatible With:** React 18, Vite 6, Tailwind CSS 3
