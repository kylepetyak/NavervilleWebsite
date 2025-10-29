import { useState, Suspense, lazy } from "react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SEOHead } from "./components/SEOHead";
import { CriticalCSS } from "./components/CriticalCSS";
import { useNavigation } from "./hooks/useNavigation";

// Critical components loaded immediately
import { Navigation } from "./components/Navigation";

// Non-critical components loaded lazily
const HomePage = lazy(() => import("./components/HomePage").then(module => ({ default: module.HomePage })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));
const AppRouter = lazy(() => import("./components/AppRouter").then(module => ({ default: module.AppRouter })));
const PerformanceMonitor = lazy(() => import("./components/PerformanceMonitor").then(module => ({ default: module.PerformanceMonitor })));

export default function App() {
  const navigation = useNavigation();
  
  const {
    currentPage,
    currentBlogPost,
    currentServiceSlug,
    currentTargetGroup,
    navigateToHome,
    navigateToConditions,
    navigateToWhoWeServe,
    navigateToTargetGroup,
    navigateToBlog,
    navigateToBlogPost,
    navigateToDetailedBlogPost,
    navigateToPagesOverview,
    navigateToAbout,
    navigateToServiceTemplate,
    navigateToService,
    navigateToBooking,
    navigateToContact,
  } = navigation;

  // Get SEO data based on current page
  const getSEOData = () => {
    switch (currentPage) {
      case 'home':
        return {
          title: 'Camelback Medical Centers - Naperville | Chiropractic & Physical Therapy',
          description: 'Expert chiropractic care, physical therapy, and wellness services in Naperville, IL. $29 new patient special. Call (630) 416-1151 to schedule your appointment today.',
          keywords: 'chiropractor naperville, physical therapy naperville, medical center naperville, back pain treatment, neck pain relief',
          canonicalUrl: 'https://camelbackmedical.com',
          pageType: 'website' as const
        };
      case 'blog':
        return {
          title: 'Health & Wellness Blog - Camelback Medical Centers Naperville',
          description: 'Expert health tips, wellness advice, and medical insights from Naperville\'s trusted healthcare providers.',
          keywords: 'health blog, wellness tips, medical advice, naperville health',
          canonicalUrl: 'https://camelbackmedical.com/blog',
          pageType: 'website' as const
        };
      case 'services':
        return {
          title: 'Medical Services - Camelback Medical Centers Naperville',
          description: 'Comprehensive medical services including chiropractic care, physical therapy, pain management, and wellness treatments in Naperville, IL.',
          keywords: 'medical services naperville, chiropractic services, physical therapy services, pain management',
          canonicalUrl: 'https://camelbackmedical.com/services',
          pageType: 'service' as const
        };
      default:
        return {
          title: 'Camelback Medical Centers - Naperville Healthcare',
          description: 'Quality healthcare services in Naperville, Illinois.',
          keywords: 'healthcare naperville, medical center',
          canonicalUrl: 'https://camelbackmedical.com',
          pageType: 'website' as const
        };
    }
  };

  const seoData = getSEOData();

  // Optimized loading fallback with minimal content
  const OptimizedFallback = () => (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <div className="text-sm text-gray-500">Loading...</div>
        </div>
      </div>
    </div>
  );

  // Check if we should render a specific page route (not home)
  if (currentPage !== 'home') {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-white">
          <SEOHead {...seoData} />
          <CriticalCSS route={currentPage} />
          
          <Suspense fallback={<OptimizedFallback />}>
            <AppRouter
              currentPage={currentPage}
              currentBlogPost={currentBlogPost}
              currentServiceSlug={currentServiceSlug}
              currentTargetGroup={currentTargetGroup}
              navigationHandlers={navigation}
            />
          </Suspense>
          
          {/* Load performance monitor after main content */}
          <Suspense fallback={null}>
            <PerformanceMonitor />
          </Suspense>
        </div>
      </ErrorBoundary>
    );
  }

  // Optimized home page render - critical path first
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white">
        <SEOHead {...seoData} />
        <CriticalCSS route="home" />
        
        {/* Critical navigation loads immediately */}
        <Navigation
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToWhoWeServe={navigateToWhoWeServe}
          onNavigateToBlog={navigateToBlog}
          onNavigateToPagesOverview={navigateToPagesOverview}
          onNavigateToAbout={navigateToAbout}
          onNavigateToBooking={navigateToBooking}
          currentPage={currentPage}
          currentBlogPost={currentBlogPost}
          onNavigateToBlogPost={navigateToBlogPost}
        />

        {/* HomePage loads with priority */}
        <Suspense fallback={
          <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center space-y-6">
                <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                  Camelback Medical Centers
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Expert healthcare in Naperville
                </p>
              </div>
            </div>
          </div>
        }>
          <HomePage 
            onNavigateToConditions={navigateToConditions}
            onNavigateToBlog={navigateToBlog}
            onNavigateToService={navigateToService}
            onNavigateToBooking={navigateToBooking}
            onNavigateToTargetGroup={navigateToTargetGroup}
          />
        </Suspense>

        {/* Footer loads after main content */}
        <Suspense fallback={
          <div className="bg-gray-900 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p>&copy; 2025 Camelback Medical Centers - Naperville</p>
            </div>
          </div>
        }>
          <Footer 
            onNavigateToConditions={navigateToConditions}
            onNavigateToBlog={navigateToBlog}
            onNavigateToBooking={navigateToBooking}
          />
        </Suspense>

        {/* Performance monitor loads last */}
        <Suspense fallback={null}>
          <PerformanceMonitor />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}