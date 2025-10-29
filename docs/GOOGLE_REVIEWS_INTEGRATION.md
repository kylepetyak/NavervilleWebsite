# Google Reviews Integration Guide

Complete guide to integrating your existing Google Business Profile reviews into your website.

## Table of Contents
1. [Getting Your Google Place ID](#getting-your-google-place-id)
2. [Reviews Integration Options](#reviews-integration-options)
3. [Displaying Reviews on Website](#displaying-reviews-on-website)
4. [Review Widget Setup](#review-widget-setup)
5. [Maximizing Your Reviews](#maximizing-your-reviews)
6. [Review Management](#review-management)

## Getting Your Google Place ID

Your Google Place ID is a unique identifier for your business that allows you to access reviews via API.

### Method 1: Place ID Finder (Easiest)

1. **Go to:** https://developers.google.com/maps/documentation/places/web-service/place-id

2. **Search for:** "Camelback Medical Centers Naperville"

3. **Copy the Place ID** - It looks like: `ChIJxxxxxxxxxxxxxxxxxxxxx`

4. **Save it** - You'll need this for the website

### Method 2: From Google Maps URL

1. **Find your business** on Google Maps
2. **Share** → **Copy link**
3. **Look for** the part after `1s0x` or `/place/`
4. **Extract** the Place ID

### Method 3: From Google Search Console

1. Go to search.google.com/search-console
2. Find your verified property
3. Look in the property settings

## Reviews Integration Options

You have several ways to display your Google reviews on the website:

### Option 1: Google Reviews Widget (Recommended)

**Pros:**
- Always up-to-date
- Shows real reviews automatically
- Free
- Easy to implement

**Cons:**
- Requires API key (free tier available)
- Limited customization

### Option 2: Manual Review Embedding

**Pros:**
- Full design control
- No API calls needed
- Faster loading

**Cons:**
- Manually update reviews
- Time-consuming

### Option 3: Third-Party Widget

**Pros:**
- Feature-rich
- Auto-updates
- Beautiful designs

**Cons:**
- Often paid
- External dependency

## Displaying Reviews on Website

### Step 1: Get Google Places API Key

1. **Go to:** https://console.cloud.google.com/

2. **Create a new project** (or select existing)
   - Name: "Naperville Website"

3. **Enable APIs:**
   - Search for "Places API"
   - Click "Enable"

4. **Create credentials:**
   - Credentials → Create Credentials → API Key
   - Copy the API key
   - Restrict it (important for security):
     - Application restrictions: HTTP referrers
     - Add your domain: `*.camelbackmedical.com/*`
     - API restrictions: Places API

5. **Save API key** for environment variables

### Step 2: Add to Environment Variables

Add to your `.env.local`:

```env
VITE_GOOGLE_PLACE_ID=your_place_id_here
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

Add to Vercel environment variables (for production):
1. Go to Vercel Dashboard
2. Settings → Environment Variables
3. Add both variables above

### Step 3: Update Google Reviews Component

The component at `/src/components/GoogleReviews.tsx` is ready to use. Just update it:

```typescript
import { useEffect, useState } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url: string;
}

export function GoogleReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!placeId || !apiKey) {
      console.warn('Google Place ID or API Key not configured');
      setLoading(false);
      return;
    }

    // Fetch reviews
    fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if (data.result?.reviews) {
          setReviews(data.result.reviews.slice(0, 6)); // Show 6 most recent
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching reviews:', err);
        setLoading(false);
      });
  }, [placeId, apiKey]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (!reviews.length) {
    return null;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <img
              src={review.profile_photo_url}
              alt={review.author_name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <h4 className="font-semibold">{review.author_name}</h4>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{review.text}</p>
          <p className="text-xs text-gray-400 mt-2">
            {new Date(review.time * 1000).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}
```

## Review Widget Setup

### Option A: Embed Google Review Badge

Google provides a free review badge you can embed:

**HTML to add to your homepage:**

```html
<!-- Add to /src/components/HomePage.tsx -->
<div className="google-reviews-badge text-center my-8">
  <a
    href="https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center bg-white border border-gray-300 rounded-lg px-6 py-4 shadow-md hover:shadow-lg transition-shadow"
  >
    <img
      src="/google-logo.png"
      alt="Google"
      className="w-6 h-6 mr-3"
    />
    <div className="text-left">
      <div className="flex items-center mb-1">
        <span className="text-2xl font-bold mr-2">4.9</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
        </div>
      </div>
      <p className="text-sm text-gray-600">Based on 150+ Google reviews</p>
    </div>
  </a>
</div>
```

### Option B: Review Carousel

Display reviews in a rotating carousel:

```typescript
// Add to /src/components/ReviewCarousel.tsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FEATURED_REVIEWS = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Dr. James is amazing! After years of chronic back pain, I'm finally pain-free. The entire team is professional and caring.",
    date: "2 weeks ago"
  },
  {
    name: "John D.",
    rating: 5,
    text: "Best chiropractor in Naperville! I can play with my grandkids again without pain. Highly recommend!",
    date: "1 month ago"
  },
  // Add more reviews...
];

export function ReviewCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % FEATURED_REVIEWS.length);
  const prev = () => setCurrent((current - 1 + FEATURED_REVIEWS.length) % FEATURED_REVIEWS.length);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
          ))}
        </div>
        <p className="text-gray-600 italic">"{FEATURED_REVIEWS[current].text}"</p>
        <p className="mt-4 font-semibold">{FEATURED_REVIEWS[current].name}</p>
        <p className="text-sm text-gray-500">{FEATURED_REVIEWS[current].date}</p>
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        {FEATURED_REVIEWS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              index === current ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

## Maximizing Your Reviews

### Showcase Reviews Throughout Site

**1. Homepage Hero Section:**
```html
<div className="trust-indicators flex items-center justify-center space-x-4">
  <div className="flex">
    <span className="text-yellow-400 text-xl">★★★★★</span>
  </div>
  <p className="text-gray-600">4.9/5 from 150+ Google reviews</p>
</div>
```

**2. Service Pages:**
```html
<div className="bg-blue-50 p-6 rounded-lg my-8">
  <h3 className="font-bold mb-2">What Our Patients Say</h3>
  <div className="flex mb-2">
    <span className="text-yellow-400">★★★★★</span>
  </div>
  <p className="italic text-gray-700">"Best back pain treatment in Naperville!"</p>
  <p className="text-sm text-gray-600 mt-2">- Michael R., Google Review</p>
</div>
```

**3. Booking Page:**
```html
<div className="text-center mb-8">
  <p className="text-lg font-semibold mb-2">Join 150+ Happy Patients</p>
  <div className="flex justify-center">
    <span className="text-yellow-400 text-2xl">★★★★★</span>
  </div>
  <p className="text-gray-600">Rated 4.9/5 on Google</p>
</div>
```

**4. Footer:**
```html
<div className="text-center">
  <a
    href="https://g.page/r/YOUR_PLACE_ID/review"
    target="_blank"
    className="inline-flex items-center text-white hover:text-blue-200"
  >
    <span className="mr-2">⭐ 4.9/5 on Google</span>
    <span className="text-sm">(150+ reviews)</span>
  </a>
</div>
```

### Get More Reviews Systematically

Since you already have great reviews, keep the momentum going:

**1. Create Review Request Links**

Generate your review link:
```
https://search.google.com/local/writereview?placeid=YOUR_PLACE_ID
```

Make it short with a URL shortener:
```
https://bit.ly/naperville-review
or
https://review.camelbackmedical.com (redirect)
```

**2. QR Code for Reception Desk**

Create a QR code that links to your review page:
- Use qr-code-generator.com
- Link to your Google review URL
- Print and display at checkout desk

**3. Email Template (Integrate with GHL)**

```html
Subject: How was your visit? 🌟

Hi [Patient Name],

Thank you for choosing Camelback Medical Centers!

We hope you're already feeling better after your recent visit.

Would you mind taking 60 seconds to share your experience on Google? Your review helps other Naperville residents find quality care.

[Leave a Review Button → Links to Google Review URL]

Thank you for your trust!

Dr. James and Team
Camelback Medical Centers
(630) 416-1151
```

**4. SMS Follow-up (via GHL)**

```
Hi [Name]! Thanks for visiting CMC Naperville. If you're happy with your care, we'd love a quick Google review: [short-link]

Reply STOP to opt out
```

**5. In-Person Request**

Train staff to say:
> "If you're happy with your visit today, we'd really appreciate a Google review. It helps other people in Naperville find us. Here's a card with a QR code you can scan!"

## Review Management

### Responding to Reviews

**Response Template (Positive):**
```
Thank you so much for the wonderful review, [Name]! 🙏

We're thrilled to hear that you're experiencing relief from your [condition]. Helping our Naperville community live pain-free is why we do what we do!

If you ever need anything, don't hesitate to reach out.

- Dr. James and the CMC Team
(630) 416-1151
```

**Response Template (Negative):**
```
Thank you for your feedback, [Name].

We're sorry to hear your experience didn't meet your expectations. We take all feedback seriously and would appreciate the opportunity to make this right.

Please call us at (630) 416-1151 so we can address your concerns directly.

- Dr. James
Camelback Medical Centers
```

**Response Best Practices:**
- Respond within 24 hours
- Thank them by name
- Keep it professional
- Never be defensive
- Offer to resolve offline
- Include your phone number

### Monitoring Reviews

**Daily Check:**
- Check Google Business dashboard
- Respond to new reviews
- Thank positive reviews
- Address negative reviews

**Weekly Review:**
- Analyze trends
- Note common compliments
- Identify improvement areas
- Share with team

**Monthly Analysis:**
- Average rating trend
- Number of new reviews
- Response rate
- Keywords mentioned

### Review Goals

**Short-term (3 months):**
- Maintain 4.8+ rating
- Get 20+ new reviews
- Respond to 100% of reviews
- Feature reviews on website

**Long-term (12 months):**
- Reach 200+ total reviews
- Maintain 4.9+ rating
- Win more local searches
- Build review velocity

## Schema Markup for Reviews

Your website already includes review schema in `/src/config/localSEO.ts`. Make sure to update it with real data:

```typescript
export const businessInfo = {
  // ... other fields

  reviews: {
    aggregateRating: {
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1"
    }
  }
};
```

This helps Google display your star rating in search results!

## Troubleshooting

### Reviews Not Showing

**Check:**
1. Is Place ID correct?
2. Is API key configured?
3. Is API enabled in Google Cloud?
4. Are there CORS issues? (Check browser console)
5. Did you deploy environment variables to Vercel?

### Can't Find Place ID

Try searching for:
- Your business name + Naperville
- Your address
- Your phone number

### Reviews Outdated

Reviews are cached for performance. To refresh:
1. Clear cache
2. Redeploy site
3. Check API quota hasn't been exceeded

## Quick Setup Checklist

- [ ] Get Google Place ID
- [ ] Get Google Maps API Key
- [ ] Add to environment variables
- [ ] Update GoogleReviews component
- [ ] Test locally
- [ ] Deploy to Vercel
- [ ] Verify reviews display
- [ ] Add review widgets to key pages
- [ ] Create review request system
- [ ] Set up automated follow-ups (GHL)
- [ ] Train staff on asking for reviews
- [ ] Print QR codes for office
- [ ] Monitor and respond to reviews

## Resources

**Tools:**
- Place ID Finder: https://developers.google.com/maps/documentation/places/web-service/place-id
- QR Code Generator: https://www.qr-code-generator.com/
- URL Shortener: https://bitly.com
- Google Cloud Console: https://console.cloud.google.com/

**Your Links:**
- Google Business Dashboard: https://business.google.com
- Review Link: `https://g.page/r/YOUR_PLACE_ID/review`
- Google Maps: `https://g.page/YOUR_BUSINESS_NAME`

---

**You're already ahead with great reviews - now let's make sure everyone sees them!**
