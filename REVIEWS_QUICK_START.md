# Google Reviews Quick Start Guide

Since you already have a Google Business Profile with great reviews, here's how to integrate them into your website in **under 30 minutes**.

## Option 1: Manual Integration (5 Minutes) - RECOMMENDED

This is the fastest way to showcase your reviews. Your reviews are already configured!

### Step 1: Copy Your Reviews

1. Go to your [Google Business Profile](https://business.google.com)
2. Click on "Reviews" in the left menu
3. Copy your top 8-10 best reviews (name, rating, text, date)

### Step 2: Update the Reviews File

Edit `/src/content/featured-reviews.json` and replace the placeholder reviews with your actual reviews:

```json
{
  "businessRating": {
    "averageRating": 4.9,  // ← Update with YOUR rating
    "totalReviews": 150    // ← Update with YOUR total
  },
  "featuredReviews": [
    {
      "id": 1,
      "author": "Sarah M.",  // ← Replace with actual review
      "rating": 5,
      "date": "2 weeks ago",
      "text": "Your actual review text here...",
      "source": "Google",
      "verified": true
    }
    // Add 7-9 more reviews
  ]
}
```

### Step 3: Get Your Review Link

1. Go to [Google Business Profile](https://business.google.com)
2. Click "Get more reviews"
3. Copy the link (looks like: `https://g.page/r/xxxxx/review`)

### Step 4: Add to Environment Variables

Add to `.env.local`:
```
VITE_GOOGLE_REVIEW_LINK=https://g.page/r/YOUR_ACTUAL_LINK/review
```

### Step 5: Deploy

```bash
npm run dev  # Test locally
git add .
git commit -m "Add real Google Business reviews"
git push
```

**Done!** Your reviews will show on the homepage automatically.

---

## Option 2: API Integration (30 Minutes) - For Advanced Users

This fetches reviews automatically from Google but requires API setup.

### Step 1: Get Your Place ID

**Method A: From Google Business URL**
1. Go to your Google Business Profile
2. Look at the URL: `business.google.com/n/123456789/`
3. That number is part of finding your Place ID

**Method B: Use Place ID Finder**
1. Go to: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
2. Search for "Camelback Medical Centers Naperville"
3. Copy the Place ID (starts with `ChIJ...`)

### Step 2: Get Google API Key

1. Go to https://console.cloud.google.com/
2. Create new project: "Naperville Website"
3. Enable "Places API"
4. Create API Key
5. Restrict it:
   - HTTP referrers: `*.camelbackmedical.com/*`
   - API restrictions: Places API only

### Step 3: Add to Environment

Add to `.env.local`:
```
VITE_GOOGLE_PLACE_ID=ChIJxxxxxxxxx
VITE_GOOGLE_MAPS_API_KEY=AIzaxxxxxxxx
VITE_GOOGLE_REVIEW_LINK=https://g.page/r/xxxxx/review
```

Add same variables to Vercel:
1. Vercel Dashboard → Settings → Environment Variables
2. Add all 3 variables above

### Step 4: Create Review Fetcher Component

Create `/src/components/GoogleReviewsFetcher.tsx`:

```typescript
import { useEffect, useState } from 'react';

export function GoogleReviewsFetcher() {
  const [reviews, setReviews] = useState([]);
  const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    if (!placeId || !apiKey) return;

    const service = new google.maps.places.PlacesService(
      document.createElement('div')
    );

    service.getDetails(
      {
        placeId: placeId,
        fields: ['reviews', 'rating', 'user_ratings_total']
      },
      (place, status) => {
        if (status === 'OK' && place.reviews) {
          setReviews(place.reviews);
        }
      }
    );
  }, []);

  // Render reviews...
}
```

---

## What's Already Done For You

✅ **GoogleReviews Component** - Displays reviews beautifully
✅ **Featured Reviews System** - JSON-based review management
✅ **Review Schema Markup** - SEO-optimized structured data
✅ **Star Ratings Display** - Visual star ratings
✅ **Verified Badge** - Shows verified reviews
✅ **Responsive Design** - Looks great on mobile

## Where Reviews Appear

Your reviews automatically display on:
- **Homepage** - Featured reviews section
- **About Page** - Trust indicators
- **Service Pages** - Social proof
- **Footer** - Rating badge

## Updating Your Reviews

### To Update Ratings:

Edit `/src/content/featured-reviews.json`:
```json
{
  "businessRating": {
    "averageRating": 4.9,  // ← Update monthly
    "totalReviews": 150    // ← Update monthly
  }
}
```

### To Add New Reviews:

Just add to the `featuredReviews` array:
```json
{
  "id": 9,  // Next ID number
  "author": "New Customer",
  "rating": 5,
  "date": "1 day ago",
  "text": "New review text...",
  "source": "Google",
  "verified": true,
  "helpful": 0
}
```

## Getting More Reviews

### Review Request System (Already Built!)

Your GHL integration includes automatic review requests. To activate:

1. **Email Template** - Set up in GHL:
   ```
   Subject: How was your visit? ⭐

   Hi [Name],

   Thank you for choosing Camelback Medical!
   Would you mind leaving us a Google review?

   [Review Link Button]
   ```

2. **SMS Follow-up** - 24 hours after visit:
   ```
   Hi [Name]! Thanks for visiting.
   Happy with your care?
   Leave us a review: [link]
   ```

3. **QR Code** - Print for reception desk:
   - Generate at qr-code-generator.com
   - Link to your review URL
   - Place at checkout

### Review Request Timing

**Best times to ask:**
- ✅ Right after successful treatment
- ✅ When patient expresses satisfaction
- ✅ After reaching treatment goal
- ❌ Don't ask during first visit
- ❌ Don't ask if patient unhappy

## Quick Wins

**Week 1:**
- [ ] Update featured-reviews.json with your 8 best reviews
- [ ] Add your review link to .env.local
- [ ] Deploy and verify reviews show
- [ ] Create QR code for office

**Week 2:**
- [ ] Set up GHL review automation
- [ ] Train staff on asking for reviews
- [ ] Respond to all existing reviews
- [ ] Aim for 5+ new reviews

**Month 1 Goal:**
- 20+ new reviews
- 100% response rate
- Maintain 4.8+ rating
- Reviews on every service page

## Showcasing Your Reviews

### Homepage Hero
```html
<div className="flex items-center space-x-2">
  <span className="text-yellow-400 text-xl">★★★★★</span>
  <span>4.9/5 from 150+ Google reviews</span>
</div>
```

### Service Pages
```html
<div className="bg-blue-50 p-4 rounded">
  <p className="italic">"Best chiropractor in Naperville!"</p>
  <p className="text-sm">- Sarah M., Google Review</p>
</div>
```

### Call-to-Action
```html
<p>Join 150+ happy patients</p>
<span className="text-yellow-400">★★★★★</span>
<p>Rated 4.9/5 on Google</p>
```

## SEO Benefits

Reviews help with:
- ✅ Local search rankings (huge factor!)
- ✅ Click-through rates (star ratings in search)
- ✅ Trust and credibility
- ✅ Conversion rates
- ✅ Social proof
- ✅ Google Map Pack rankings

## Monitoring Reviews

**Daily:**
- Check Google Business dashboard
- Respond to new reviews (within 24h)

**Weekly:**
- Analyze review trends
- Update best reviews on site

**Monthly:**
- Update average rating
- Update total count
- Refresh featured reviews

## Response Templates

**Positive Review:**
```
Thank you for the wonderful review, [Name]! 🙏

We're thrilled you're experiencing relief from your [condition].
Helping Naperville stay healthy is our passion!

- Dr. James and Team
(630) 416-1151
```

**Negative Review:**
```
Thank you for your feedback, [Name].

We're sorry your experience wasn't perfect.
We'd appreciate the chance to make this right.

Please call us at (630) 416-1151.

- Dr. James
```

## Common Questions

**Q: How often should I update reviews?**
A: Monthly. Add 2-3 new featured reviews each month.

**Q: Can I remove bad reviews?**
A: No, but you can respond professionally and try to resolve.

**Q: Should I incentivize reviews?**
A: NO! Google prohibits this. Just ask satisfied patients.

**Q: What if we get a fake bad review?**
A: Flag it in Google Business, then respond professionally.

## Your Review Assets

**Review Link:**
```
https://g.page/r/YOUR_PLACE_ID/review
```

**Short URL (create one):**
```
https://bit.ly/naperville-chiro
or
review.camelbackmedical.com
```

**QR Code:**
Generate at: https://www.qr-code-generator.com/

**Email Signature:**
```
⭐⭐⭐⭐⭐ Rated 4.9/5 on Google
[Leave us a review!]
```

## Next Steps

1. **Today:**
   - [ ] Copy your 8 best reviews to featured-reviews.json
   - [ ] Get your review link
   - [ ] Update .env.local
   - [ ] Test locally

2. **This Week:**
   - [ ] Deploy to production
   - [ ] Create QR code
   - [ ] Set up GHL automation
   - [ ] Train staff

3. **Ongoing:**
   - [ ] Ask every happy patient
   - [ ] Respond to all reviews
   - [ ] Update monthly
   - [ ] Monitor trends

---

**You're already ahead with great reviews - let's make sure everyone sees them!**

Need help? Check `/docs/GOOGLE_REVIEWS_INTEGRATION.md` for detailed guide.
