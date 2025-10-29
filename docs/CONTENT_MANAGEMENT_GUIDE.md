# Content Management Guide

Complete guide for managing images, logos, and content on your Camelback Medical Centers website.

## Table of Contents
1. [Adding Your Company Logo](#adding-your-company-logo)
2. [Adding Custom Images](#adding-custom-images)
3. [Optimizing Images for Web](#optimizing-images-for-web)
4. [Managing Blog Content](#managing-blog-content)
5. [Updating Page Content](#updating-page-content)
6. [Best Practices](#best-practices)

## Adding Your Company Logo

### Step 1: Prepare Your Logo

**Recommended Formats:**
- **Primary**: SVG (scalable, small file size) - BEST
- **Alternative**: PNG with transparent background
- **Backup**: JPG (if no transparency needed)

**Recommended Sizes:**
- Header logo: 300x100px (or 3:1 ratio)
- Footer logo: 200x66px
- Favicon: 512x512px
- Social media: 1200x630px

### Step 2: Add Logo Files

1. **Add logo to public folder:**
   ```
   public/
   ├── logo.svg          (or logo.png)
   ├── logo-dark.svg     (for dark backgrounds, optional)
   ├── logo-icon.svg     (just the icon, for mobile)
   └── apple-touch-icon.png (180x180px)
   ```

2. **Add to assets folder (for React imports):**
   ```
   src/assets/
   └── logo.svg
   ```

### Step 3: Update Logo in Components

**In Navigation Component** (`src/components/Navigation.tsx`):
```typescript
// Find the logo section and replace with:
import logo from '../assets/logo.svg';

// In the component:
<img
  src={logo}
  alt="Camelback Medical Centers - Naperville"
  className="h-12 w-auto"
  width="300"
  height="100"
/>
```

**In Footer Component** (`src/components/Footer.tsx`):
```typescript
import logo from '../assets/logo.svg';

<img
  src={logo}
  alt="Camelback Medical Centers"
  className="h-10 w-auto"
/>
```

### Step 4: Update SEO/Schema Markup

In `/src/config/localSEO.ts`:
```typescript
export const businessInfo = {
  // ...
  logo: "https://yourdomain.com/logo.png",  // Update this
  image: "https://yourdomain.com/og-image.jpg",  // Update this
  // ...
};
```

### Step 5: Create Favicon Package

1. **Use a favicon generator:**
   - Go to https://realfavicongenerator.net/
   - Upload your logo (512x512px PNG)
   - Generate all favicon formats

2. **Download and add to public folder:**
   ```
   public/
   ├── favicon.ico
   ├── favicon.svg
   ├── favicon-16x16.png
   ├── favicon-32x32.png
   ├── apple-touch-icon.png (180x180)
   ├── android-chrome-192x192.png
   └── android-chrome-512x512.png
   ```

3. **Update manifest.json:**
   ```json
   {
     "icons": [
       {
         "src": "/android-chrome-192x192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "/android-chrome-512x512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```

## Adding Custom Images

### Image Organization

Create this folder structure:
```
public/images/
├── team/              # Staff photos
│   ├── dr-james.jpg
│   ├── dr-chen.jpg
│   └── lisa-rodriguez.jpg
├── services/          # Service images
│   ├── chiropractic.jpg
│   ├── physical-therapy.jpg
│   └── massage-therapy.jpg
├── facility/          # Clinic photos
│   ├── exterior.jpg
│   ├── reception.jpg
│   └── treatment-room.jpg
├── testimonials/      # Patient photos (with permission)
│   └── patient-1.jpg
├── blog/              # Blog post images
│   └── 2025/
│       └── 01/
└── general/           # General use images
    ├── hero-bg.jpg
    └── cta-bg.jpg
```

### Image Specifications

| Use Case | Dimensions | Format | Max File Size |
|----------|------------|--------|---------------|
| Hero Images | 1920x1080px | JPG/WebP | 200KB |
| Team Photos | 800x800px | JPG | 150KB |
| Service Images | 1200x800px | JPG/WebP | 200KB |
| Thumbnail | 600x400px | JPG/WebP | 100KB |
| Blog Featured | 1200x630px | JPG/WebP | 150KB |
| Icons | 512x512px | SVG/PNG | 50KB |

### Adding Images to Pages

**Method 1: Public Folder (Static Images)**
```typescript
// In any component
<img
  src="/images/team/dr-james.jpg"
  alt="Dr. James Nabzdyk, DC - Chiropractor"
  loading="lazy"
  width="800"
  height="800"
/>
```

**Method 2: Assets Folder (Imported Images)**
```typescript
import drJamesPhoto from '../assets/images/dr-james.jpg';

<img
  src={drJamesPhoto}
  alt="Dr. James Nabzdyk, DC"
  loading="lazy"
/>
```

**Method 3: Using LazyImage Component (Recommended)**
```typescript
import { LazyImage } from './LazyImage';

<LazyImage
  src="/images/team/dr-james.jpg"
  alt="Dr. James Nabzdyk, DC - Expert Chiropractor in Naperville"
  width={800}
  height={800}
  className="rounded-lg"
  priority={false}  // true for above-fold images
/>
```

### Updating Team Photos

In `/src/components/HomePage.tsx`, find the "Meet the Team" section:

```typescript
const providers = [
  {
    name: "Dr. James Nabzdyk DC",
    title: "Doctor of Chiropractic",
    image: "/images/team/dr-james.jpg",  // UPDATE THIS
    bio: "Over 30 years serving Naperville families..."
  },
  {
    name: "Dr. Michael Chen",
    title: "Physical Medicine Specialist",
    image: "/images/team/dr-chen.jpg",  // UPDATE THIS
    bio: "North High School alumnus..."
  },
  // Add more team members...
];
```

## Optimizing Images for Web

### Image Optimization Tools

**Online Tools (Free):**
- **TinyPNG/TinyJPG**: https://tinypng.com - Best for PNG/JPG
- **Squoosh**: https://squoosh.app - Google's image optimizer
- **Compressor.io**: https://compressor.io - Multi-format

**Command Line (Advanced):**
```bash
# Install ImageMagick
brew install imagemagick  # Mac
sudo apt-get install imagemagick  # Linux

# Optimize JPEG
convert input.jpg -quality 85 -strip output.jpg

# Resize and optimize
convert input.jpg -resize 1200x800 -quality 85 output.jpg

# Convert to WebP
cwebp -q 85 input.jpg -o output.webp
```

### Image Optimization Checklist

Before uploading any image:

- [ ] Resize to correct dimensions (don't upload 4000px images)
- [ ] Compress to reduce file size (aim for <200KB)
- [ ] Convert to WebP when possible (better compression)
- [ ] Remove EXIF data (privacy and file size)
- [ ] Use descriptive filenames (dr-james-chiropractor.jpg, not IMG_1234.jpg)
- [ ] Add proper alt text for SEO and accessibility

### Converting to WebP

**Why WebP?**
- 25-35% smaller than JPEG
- Supports transparency (like PNG)
- Better quality at same file size

**How to Convert:**
1. Use Squoosh.app
2. Upload your image
3. Select WebP on right side
4. Adjust quality to 85
5. Download

**Using WebP in HTML:**
```html
<picture>
  <source srcset="/images/hero.webp" type="image/webp">
  <img src="/images/hero.jpg" alt="Description">
</picture>
```

## Managing Blog Content

Blog content is managed through a JSON-based system. See the detailed guide in:
- [BLOG_MANAGEMENT_GUIDE.md](./BLOG_MANAGEMENT_GUIDE.md)

Quick overview:
1. Add blog posts to `/src/content/blog-posts.json`
2. Add images to `/public/images/blog/`
3. System automatically generates pages and SEO

## Updating Page Content

### Homepage Content

**File**: `/src/components/HomePage.tsx`

**Sections to Update:**

1. **Hero Section** (Lines ~74-95)
   ```typescript
   <h1>Your Main Headline</h1>
   <p>Your subheadline</p>
   ```

2. **Services Section** (Lines ~527-562)
   ```typescript
   const services = [
     {
       icon: Brain,
       name: "Service Name",
       description: "Service description"
     },
     // Add or modify services
   ];
   ```

3. **Testimonials** (Lines ~219-244)
   ```typescript
   <VideoTestimonial
     quote="Customer testimonial text"
     name="Customer Name"
     service="Service Used"
     rating={5}
   />
   ```

### About Page Content

**File**: `/src/components/AboutPage.tsx`

Update mission, vision, and team information.

### Services Page Content

**File**: `/src/components/serviceData.ts`

This file contains all service and condition information. Update descriptions, benefits, and details here.

## Best Practices

### Image Best Practices

1. **Always include alt text** - Describe the image for SEO and accessibility
   ```typescript
   alt="Dr. James examining patient's spine at Naperville clinic"
   ```

2. **Use lazy loading** - Except for above-the-fold images
   ```typescript
   loading="lazy"  // or priority={false} for LazyImage
   ```

3. **Specify dimensions** - Prevents layout shift
   ```typescript
   width={800} height={600}
   ```

4. **Use descriptive filenames**
   - ✅ Good: `naperville-chiropractic-treatment-room.jpg`
   - ❌ Bad: `IMG_1234.jpg`

5. **Keep file sizes small**
   - Hero images: <200KB
   - Regular photos: <150KB
   - Thumbnails: <100KB

### Content Best Practices

1. **Update regularly** - Fresh content helps SEO
2. **Use local keywords** - "Naperville", "DuPage County", etc.
3. **Include CTAs** - Every section should guide users
4. **Mobile-first** - Test on mobile devices
5. **Accessibility** - Use semantic HTML, proper headings

### Logo Best Practices

1. **SVG preferred** - Scales perfectly, small file size
2. **Transparent background** - Works on any color
3. **Simple design** - Looks good at small sizes
4. **Monochrome version** - For single-color uses
5. **Proper aspect ratio** - Usually 2:1 or 3:1

## Quick Reference Commands

### Deploy After Content Changes

```bash
# Test locally first
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to Vercel
git add .
git commit -m "Update content and images"
git push

# Or use Vercel CLI
vercel --prod
```

### Common File Locations

| Content Type | File Location |
|--------------|---------------|
| Logo | `src/assets/logo.svg` |
| Team Photos | `public/images/team/` |
| Blog Images | `public/images/blog/` |
| Service Images | `public/images/services/` |
| Homepage Text | `src/components/HomePage.tsx` |
| Services Info | `src/components/serviceData.ts` |
| Business Info | `src/config/localSEO.ts` |
| Blog Posts | `src/content/blog-posts.json` |

## Getting Help

If you need assistance:
1. Check this guide first
2. Review the component files
3. Test changes locally before deploying
4. Keep backups of original files
5. Contact your development team

## Next Steps

1. [ ] Add your company logo
2. [ ] Upload team photos
3. [ ] Add facility images
4. [ ] Optimize all images
5. [ ] Update homepage content
6. [ ] Create first blog posts
7. [ ] Test on mobile devices
8. [ ] Deploy to production

---

Need help with blog content? See [BLOG_MANAGEMENT_GUIDE.md](./BLOG_MANAGEMENT_GUIDE.md)

Need help with SEO? See [SEO_STRATEGY_GUIDE.md](./SEO_STRATEGY_GUIDE.md)
