# Deployment Guide - Camelback Medical Centers Naperville

This guide will walk you through deploying your website to Vercel with full production optimizations.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Deploy to Vercel](#quick-deploy-to-vercel)
3. [Environment Variables Setup](#environment-variables-setup)
4. [Post-Deployment Configuration](#post-deployment-configuration)
5. [Local SEO Setup](#local-seo-setup)
6. [Performance Optimization](#performance-optimization)
7. [Monitoring & Analytics](#monitoring--analytics)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- [ ] Vercel account (free tier works great)
- [ ] Node.js 18+ installed locally
- [ ] Git repository access
- [ ] Domain name (optional, Vercel provides free subdomain)
- [ ] GoHighLevel account (for CRM integration)
- [ ] Google Analytics/Tag Manager account (optional)
- [ ] Business information ready (address, phone, hours)

## Quick Deploy to Vercel

### Option 1: Deploy from Git (Recommended)

1. **Connect Your Repository**
   ```bash
   # If not already connected, push your code to GitHub/GitLab
   git add .
   git commit -m "Production-ready website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete (usually 1-2 minutes)

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## Environment Variables Setup

After deploying, you MUST configure environment variables in Vercel:

### Step 1: Access Environment Variables

1. Go to your project in Vercel dashboard
2. Click **Settings** > **Environment Variables**

### Step 2: Add Required Variables

Add these variables (copy from `.env.example`):

#### Essential Variables

```
VITE_APP_NAME=Camelback Medical Centers - Naperville
VITE_APP_URL=https://your-domain.com
VITE_NODE_ENV=production

VITE_BUSINESS_PHONE=(630) 416-1151
VITE_BUSINESS_EMAIL=info@camelbackmedical.com
VITE_BUSINESS_ADDRESS=123 Main Street, Naperville, IL 60540
```

#### GoHighLevel Integration (IMPORTANT!)

```
VITE_GHL_LOCATION_ID=your_actual_location_id
VITE_GHL_API_KEY=your_actual_api_key
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/your_webhook
VITE_GHL_CALENDAR_ID=your_calendar_id
VITE_GHL_FORM_ID=your_form_id
```

See [GHL_INTEGRATION_GUIDE.md](./docs/GHL_INTEGRATION_GUIDE.md) for details.

#### Analytics (Optional)

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_FACEBOOK_PIXEL_ID=your_pixel_id
```

#### Feature Flags

```
VITE_ENABLE_NEWSLETTER=true
VITE_ENABLE_CHAT_WIDGET=true
VITE_ENABLE_BOOKING_WIDGET=true
```

### Step 3: Redeploy

After adding environment variables, trigger a new deployment:
- Go to **Deployments** tab
- Click on the latest deployment
- Click **Redeploy**

## Post-Deployment Configuration

### 1. Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to **Settings** > **Domains**
   - Click "Add Domain"
   - Enter your domain (e.g., `camelbackmedical.com`)

2. **Update DNS Records**

   Add these records in your domain registrar:

   For root domain (`camelbackmedical.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Wait ~24 hours for DNS propagation

### 2. Update Business Information

**IMPORTANT:** Update the actual business address in:

1. `/src/config/localSEO.ts` - Line 26
   ```typescript
   address: {
     streetAddress: "YOUR ACTUAL ADDRESS",
     addressLocality: "Naperville",
     addressRegion: "IL",
     postalCode: "60540",
     addressCountry: "US"
   }
   ```

2. Redeploy after changes

### 3. Sitemap Configuration

1. Update `public/sitemap.xml` with your actual domain
2. Replace all instances of `https://camelbackmedical.com` with your domain
3. Submit sitemap to Google Search Console:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add property for your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

## Local SEO Setup

### 1. Google Business Profile

1. **Claim Your Business**
   - Go to [business.google.com](https://business.google.com)
   - Search for your business or create new listing
   - Verify ownership (phone/postcard)

2. **Complete Profile**
   - [ ] Add business hours (match website)
   - [ ] Upload photos (clinic, staff, services)
   - [ ] Add all services offered
   - [ ] Enable booking button (link to your booking page)
   - [ ] Add Q&A responses
   - [ ] Request reviews from patients

3. **Get Place ID**
   - Use [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   - Add to environment variables: `VITE_GOOGLE_PLACE_ID`

### 2. Local Citations

Create listings on:
- [ ] Yelp for Business
- [ ] Healthgrades
- [ ] Vitals
- [ ] WebMD
- [ ] ZocDoc
- [ ] Better Business Bureau
- [ ] Naperville Chamber of Commerce

Ensure NAP (Name, Address, Phone) is consistent everywhere.

### 3. Schema Markup Verification

1. Test your schema markup:
   - Go to [Rich Results Test](https://search.google.com/test/rich-results)
   - Enter your homepage URL
   - Verify LocalBusiness schema is valid

2. Check for errors and warnings
3. Fix any issues and redeploy

## Performance Optimization

### Production Checklist

- [x] Vite production build configured
- [x] Code splitting enabled
- [x] Terser minification enabled
- [x] CSS code splitting enabled
- [x] Static assets cached
- [x] Images lazy-loaded
- [x] Critical CSS inlined
- [ ] WebP/AVIF images (recommended)
- [ ] CDN for images (recommended)

### Vercel-Specific Optimizations

Vercel automatically provides:
- ✅ Global CDN
- ✅ Edge caching
- ✅ Automatic SSL
- ✅ DDoS protection
- ✅ Gzip/Brotli compression

### Performance Testing

Test your site after deployment:

1. **Google PageSpeed Insights**
   - Visit: [pagespeed.web.dev](https://pagespeed.web.dev)
   - Test your URL
   - Aim for 90+ score

2. **GTmetrix**
   - Visit: [gtmetrix.com](https://gtmetrix.com)
   - Test loading speed
   - Optimize based on recommendations

3. **WebPageTest**
   - Visit: [webpagetest.org](https://webpagetest.org)
   - Run speed test from multiple locations

## Monitoring & Analytics

### 1. Setup Google Analytics 4

1. Create GA4 property
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Uncomment GA script in `index.html`
5. Redeploy

### 2. Setup Google Tag Manager (Optional)

1. Create GTM container
2. Get Container ID (GTM-XXXXXXX)
3. Add to environment variables
4. Uncomment GTM script in `index.html`
5. Configure tags in GTM dashboard

### 3. Vercel Analytics

Enable Vercel Analytics for free:
1. Go to **Analytics** tab in Vercel
2. Click "Enable"
3. View real-time traffic data

### 4. Setup Error Tracking

Consider adding Sentry for error tracking:

```bash
npm install @sentry/react
```

Add to `.env`:
```
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
```

## Troubleshooting

### Build Failures

**Problem:** Build fails on Vercel

**Solutions:**
1. Check Node.js version (should be 18+)
2. Clear Vercel cache: Settings > General > Clear Cache
3. Check build logs for specific errors
4. Ensure all dependencies are in `package.json`
5. Test build locally: `npm run build`

### Environment Variables Not Working

**Problem:** Environment variables undefined

**Solutions:**
1. All Vite env vars MUST start with `VITE_`
2. Redeploy after adding variables
3. Check variable names are exact (case-sensitive)
4. Verify in Settings > Environment Variables

### 404 Errors on Page Refresh

**Problem:** SPA routes return 404

**Solution:**
- Verify `vercel.json` has rewrites configured ✓ (already done)
- Check Vercel logs for routing issues

### GHL Integration Not Working

**Problem:** Forms not submitting to GHL

**Solutions:**
1. Verify all GHL environment variables are set
2. Check GHL webhook is active
3. Test webhook URL in browser
4. Check browser console for errors
5. See [GHL_INTEGRATION_GUIDE.md](./docs/GHL_INTEGRATION_GUIDE.md)

### Slow Load Times

**Problem:** Website loads slowly

**Solutions:**
1. Enable image optimization
2. Use WebP format for images
3. Reduce image file sizes
4. Enable Vercel Image Optimization
5. Check bundle size: `npm run build` and review stats

## Production Checklist

Before going live, verify:

### Content
- [ ] All placeholder text replaced with real content
- [ ] Business name, address, phone verified
- [ ] Service descriptions complete
- [ ] Team bios and photos added
- [ ] Blog posts ready (optional)

### SEO
- [ ] Meta titles and descriptions set
- [ ] Schema markup verified
- [ ] Sitemap submitted to Google
- [ ] Google Business Profile claimed
- [ ] Local citations created
- [ ] Canonical URLs set

### Integrations
- [ ] GoHighLevel connected and tested
- [ ] Contact forms tested
- [ ] Appointment booking tested
- [ ] Phone click tracking verified
- [ ] Analytics tracking verified

### Legal
- [ ] Privacy policy added
- [ ] Terms of service added
- [ ] HIPAA compliance notice (if applicable)
- [ ] Cookie consent (if required)

### Performance
- [ ] PageSpeed score 90+
- [ ] Mobile-friendly test passed
- [ ] All links working
- [ ] Images optimized
- [ ] SSL certificate active

### Testing
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Test appointment booking
- [ ] Test phone number links
- [ ] Check console for errors

## Ongoing Maintenance

### Weekly
- Review GHL leads
- Check form submissions
- Monitor analytics
- Respond to reviews

### Monthly
- Update blog content
- Review SEO rankings
- Check broken links
- Update service information
- Review Google Business posts

### Quarterly
- Review and update content
- Check competitor websites
- Update photos/testimonials
- Review conversion rates
- Optimize underperforming pages

## Support Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Vite Documentation**: https://vitejs.dev
- **React Documentation**: https://react.dev
- **GHL Support**: https://support.gohighlevel.com
- **Google Search Console**: https://search.google.com/search-console

## Need Help?

If you encounter issues:

1. Check this documentation first
2. Review Vercel deployment logs
3. Check browser console for errors
4. Test locally with `npm run build && npm run preview`
5. Contact your development team

---

**Congratulations!** Your website is now production-ready and optimized for Vercel deployment with full local SEO and GHL integration! 🎉
