import { Button } from "./ui/button";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ConditionsPage } from "./ConditionsPage";
import { ServicesPage } from "./ServicesPage";
import { WhoWeServePage } from "./WhoWeServePage";
import { FamiliesPage } from "./FamiliesPage";
import { AthletesPage } from "./AthletesPage";
import { PregnantMomsPage } from "./PregnantMomsPage";
import { PediatricsPage } from "./PediatricsPage";
import { AdultsPage } from "./AdultsPage";
import { ActiveSeniorsPage } from "./ActiveSeniorsPage";
import { BlogIndexPage } from "./BlogIndexPage";
import { BlogPostTemplate } from "./BlogPostTemplate";
import { BlogPostDetail } from "./BlogPostDetail";
import { AboutPage } from "./AboutPage";
import { BookingPage } from "./BookingPage";
import { PagesOverview } from "./PagesOverview";
import { ServicePageTemplate } from "./ServicePageTemplate";
import { SEODesignSpec } from "./SEODesignSpec";
import { getServiceBySlug } from "./serviceData";
import { Heart } from "lucide-react";

interface AppRouterProps {
  currentPage: string;
  currentBlogPost: number | null;
  currentServiceSlug: string | null;
  currentTargetGroup: string | null;
  navigationHandlers: {
    navigateToHome: () => void;
    navigateToConditions: () => void;
    navigateToServices: () => void;
    navigateToWhoWeServe: () => void;
    navigateToTargetGroup: (targetGroup: string) => void;
    navigateToBlog: () => void;
    navigateToBlogPost: (postId: number) => void;
    navigateToDetailedBlogPost: (postId: number) => void;
    navigateToPagesOverview: () => void;
    navigateToAbout: () => void;
    navigateToServiceTemplate: () => void;
    navigateToService: (serviceSlug: string) => void;
    navigateToBooking: () => void;
    navigateToSEOSpec?: () => void;
  };
}

export function AppRouter({ 
  currentPage, 
  currentBlogPost, 
  currentServiceSlug,
  currentTargetGroup,
  navigationHandlers 
}: AppRouterProps) {
  const {
    navigateToHome,
    navigateToConditions,
    navigateToServices,
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
    navigateToSEOSpec,
  } = navigationHandlers;

  // Services page
  if (currentPage === 'services') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToWhoWeServe={navigateToWhoWeServe}
          onNavigateToServices={navigateToServices}
          onNavigateToBlog={navigateToBlog}
          onNavigateToPagesOverview={navigateToPagesOverview}
          onNavigateToAbout={navigateToAbout}
          onNavigateToBooking={navigateToBooking}
          currentPage={currentPage}
          currentBlogPost={currentBlogPost}
          onNavigateToBlogPost={navigateToBlogPost}
        />
        <ServicesPage 
          onNavigateToService={navigateToService}
          onNavigateToTargetGroup={navigateToTargetGroup}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Who We Serve page
  if (currentPage === 'who-we-serve') {
    return (
      <div className="min-h-screen bg-white">
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
        <WhoWeServePage 
          onNavigateToTargetGroup={navigateToTargetGroup}
          onNavigateToBooking={navigateToBooking}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Target group pages
  if (currentPage === 'target-group' && currentTargetGroup) {
    let TargetGroupPage;
    
    switch (currentTargetGroup) {
      case 'families':
        TargetGroupPage = FamiliesPage;
        break;
      case 'athletes':
        TargetGroupPage = AthletesPage;
        break;
      case 'pregnant-moms':
        TargetGroupPage = PregnantMomsPage;
        break;
      case 'pediatrics':
        TargetGroupPage = PediatricsPage;
        break;
      case 'adults':
        TargetGroupPage = AdultsPage;
        break;
      case 'active-seniors':
        TargetGroupPage = ActiveSeniorsPage;
        break;
      default:
        TargetGroupPage = null;
    }

    if (!TargetGroupPage) {
      return (
        <div className="min-h-screen bg-white">
          <Navigation
            onNavigateToHome={navigateToHome}
            onNavigateToConditions={navigateToConditions}
            onNavigateToWhoWeServe={navigateToWhoWeServe}
            onNavigateToServices={navigateToServices}
            onNavigateToBlog={navigateToBlog}
            onNavigateToPagesOverview={navigateToPagesOverview}
            onNavigateToAbout={navigateToAbout}
            onNavigateToBooking={navigateToBooking}
            currentPage={currentPage}
            currentBlogPost={currentBlogPost}
            onNavigateToBlogPost={navigateToBlogPost}
          />
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
              <Button onClick={navigateToServices} className="bg-blue-600 hover:bg-blue-700">
                View All Services
              </Button>
            </div>
          </div>
          <Footer 
            onNavigateToConditions={navigateToConditions}
            onNavigateToBlog={navigateToBlog}
          />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
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
          currentTargetGroup={currentTargetGroup}
          onNavigateToBlogPost={navigateToBlogPost}
        />
        <TargetGroupPage 
          onNavigateToService={navigateToService}
          onNavigateToBooking={navigateToBooking}
          onNavigateToHome={navigateToHome}
          onNavigateToWhoWeServe={navigateToWhoWeServe}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Conditions page (keeping for backwards compatibility)
  if (currentPage === 'conditions') {
    return (
      <div className="min-h-screen bg-white">
        <Navigation
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToWhoWeServe={navigateToWhoWeServe}
          onNavigateToServices={navigateToServices}
          onNavigateToBlog={navigateToBlog}
          onNavigateToPagesOverview={navigateToPagesOverview}
          onNavigateToAbout={navigateToAbout}
          onNavigateToBooking={navigateToBooking}
          currentPage={currentPage}
          currentBlogPost={currentBlogPost}
          onNavigateToBlogPost={navigateToBlogPost}
        />
        <ConditionsPage 
          onNavigateToHome={navigateToHome} 
          onNavigateToService={navigateToService}
          onNavigateToServices={navigateToServices}
          onNavigateToAbout={navigateToAbout}
          onNavigateToBooking={navigateToBooking}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Blog index page
  if (currentPage === 'blog') {
    return (
      <div className="min-h-screen bg-white">
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
        <BlogIndexPage onNavigateToHome={navigateToHome} onNavigateToPost={navigateToBlogPost} />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Blog post template
  if (currentPage === 'blog-post' && currentBlogPost) {
    return (
      <div className="min-h-screen bg-white">
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
        <BlogPostTemplate 
          postId={currentBlogPost}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Blog post detail (standalone)
  if (currentPage === 'blog-post-detail' && currentBlogPost) {
    return (
      <div className="min-h-screen bg-white">
        <BlogPostDetail 
          postId={currentBlogPost}
          onNavigateToBlog={navigateToBlog}
          onNavigateToHome={navigateToHome}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // About page
  if (currentPage === 'about') {
    return (
      <div className="min-h-screen bg-white">
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
        <AboutPage 
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Booking page
  if (currentPage === 'booking') {
    return (
      <div className="min-h-screen bg-white">
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
        <BookingPage 
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
          onNavigateToAbout={navigateToAbout}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Pages overview
  if (currentPage === 'pages-overview') {
    return (
      <div className="min-h-screen bg-white">
        <PagesOverview
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
          onNavigateToBlogPost={navigateToBlogPost}
          onNavigateToDetailedBlogPost={navigateToDetailedBlogPost}
          onNavigateToAbout={navigateToAbout}
          onNavigateToServiceTemplate={navigateToServiceTemplate}
          onNavigateToSEOSpec={navigateToSEOSpec}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }



  // Service template page
  if (currentPage === 'service-template') {
    return (
      <div className="min-h-screen bg-white">
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
        <ServicePageTemplate
          serviceName="Allergies & Asthma"
          ServiceIcon={Heart}
          heroImage="https://images.unsplash.com/photo-1637930030080-4ec4b95914c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWxsZXJneSUyMGFzdGhtYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTY0ODkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // Individual service page
  if (currentPage === 'service' && currentServiceSlug) {
    const serviceData = getServiceBySlug(currentServiceSlug);
    
    if (!serviceData) {
      // Service not found page
      return (
        <div className="min-h-screen bg-white">
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
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
              <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
              <Button onClick={navigateToConditions} className="bg-blue-600 hover:bg-blue-700">
                View All Conditions
              </Button>
            </div>
          </div>
          <Footer 
            onNavigateToConditions={navigateToConditions}
            onNavigateToBlog={navigateToBlog}
          />
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-white">
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
        <ServicePageTemplate
          serviceName={serviceData.name}
          ServiceIcon={serviceData.icon}
          heroImage={serviceData.heroImage}
          serviceData={serviceData}
          onNavigateToHome={navigateToHome}
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
        <Footer 
          onNavigateToConditions={navigateToConditions}
          onNavigateToBlog={navigateToBlog}
        />
      </div>
    );
  }

  // SEO Design Specification page
  if (currentPage === 'seo-spec') {
    return (
      <div className="min-h-screen bg-white">
        <SEODesignSpec onNavigateToHome={navigateToHome} />
      </div>
    );
  }

  // Return null for unmatched routes (will fall back to home page in App.tsx)
  return null;
}