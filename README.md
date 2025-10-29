
  # Camelback Medical Centers - Naperville

  A production-ready website for Camelback Medical Centers in Naperville, Illinois. Built with React, TypeScript, and Vite, optimized for local SEO and integrated with GoHighLevel CRM.

  ## Features

  - ✅ **Production-Ready**: Fully optimized for Vercel deployment
  - ✅ **Local SEO Optimized**: Comprehensive schema markup for Naperville, IL
  - ✅ **GoHighLevel Integration**: Ready for CRM and marketing automation
  - ✅ **Performance Optimized**: Code splitting, lazy loading, minification
  - ✅ **Mobile-First**: Responsive design for all devices
  - ✅ **Accessibility**: WCAG compliant components
  - ✅ **Analytics Ready**: Google Analytics, Tag Manager, Facebook Pixel
  - ✅ **PWA Support**: Manifest and service worker ready

  ## Quick Start

  ### Development

  ```bash
  # Install dependencies
  npm install

  # Start development server
  npm run dev
  ```

  The site will be available at `http://localhost:3000`

  ### Production Build

  ```bash
  # Build for production
  npm run build

  # Preview production build
  npm run preview
  ```

  ## Deployment

  ### Deploy to Vercel (Recommended)

  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

  See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions.

  ### Quick Deployment Steps

  1. **Connect Repository**: Import your Git repository to Vercel
  2. **Configure Environment**: Add environment variables (see `.env.example`)
  3. **Deploy**: Click deploy and wait for build to complete
  4. **Configure Domain**: Add your custom domain in Vercel settings

  ## Documentation

  - [Deployment Guide](./DEPLOYMENT.md) - Comprehensive deployment instructions
  - [GHL Integration Guide](./docs/GHL_INTEGRATION_GUIDE.md) - GoHighLevel setup

  ## Configuration

  ### Environment Variables

  Copy `.env.example` to `.env.local` and configure:

  ```bash
  cp .env.example .env.local
  ```

  **Required Variables:**
  - `VITE_BUSINESS_PHONE` - Your phone number
  - `VITE_BUSINESS_EMAIL` - Your email
  - `VITE_BUSINESS_ADDRESS` - Your physical address

  **GoHighLevel Integration:**
  - `VITE_GHL_LOCATION_ID` - Your GHL location ID
  - `VITE_GHL_API_KEY` - Your GHL API key
  - `VITE_GHL_WEBHOOK_URL` - Webhook for form submissions

  ## Local SEO Features

  - ✅ Comprehensive LocalBusiness schema markup
  - ✅ Medical organization structured data
  - ✅ Geographic meta tags (Naperville, IL)
  - ✅ Google Business Profile integration ready
  - ✅ Service area markup
  - ✅ Opening hours schema
  - ✅ Special offer schema ($29 new patient special)

  ## Performance Optimizations

  - **Code Splitting**: Automatic route-based splitting
  - **Lazy Loading**: Components and images load on demand
  - **Asset Optimization**: Minified JS/CSS, optimized images
  - **Caching**: Strategic cache headers for static assets
  - **Compression**: Gzip/Brotli via Vercel

  ## Available Scripts

  ```bash
  npm run dev          # Start development server
  npm run build        # Build for production
  npm run preview      # Preview production build
  npm run type-check   # TypeScript type checking
  npm run clean        # Clean build directory
  ```

  ## Original Design

  This website was converted from a Figma design:
  https://www.figma.com/design/9WN7enQ6Yfd03N0eG6Yz67/CMC-Naperville

  ---

  **Ready to Deploy!** See [DEPLOYMENT.md](./DEPLOYMENT.md) for next steps.

