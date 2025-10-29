import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";
import { AppRouter } from "./components/AppRouter";
import { useNavigation } from "./hooks/useNavigation";

export default function App() {
  const navigation = useNavigation();
  
  const {
    currentPage,
    currentBlogPost,
    currentServiceSlug,
    navigateToHome,
    navigateToConditions,
    navigateToBlog,
    navigateToBlogPost,
    navigateToDetailedBlogPost,
    navigateToPagesOverview,
    navigateToAbout,
    navigateToServiceTemplate,
    navigateToService,
    navigateToBooking,
  } = navigation;

  // Check if we should render a specific page route (not home)
  if (currentPage !== 'home') {
    return (
      <AppRouter
        currentPage={currentPage}
        currentBlogPost={currentBlogPost}
        currentServiceSlug={currentServiceSlug}
        navigationHandlers={navigation}
      />
    );
  }


  // Default to home page
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation
        onNavigateToHome={navigateToHome}
        onNavigateToConditions={navigateToConditions}
        onNavigateToBlog={navigateToBlog}
        onNavigateToPagesOverview={navigateToPagesOverview}
        onNavigateToAbout={navigateToAbout}
        onNavigateToBooking={navigateToBooking}
        currentPage={currentPage}
        currentBlogPost={currentBlogPost}
        onNavigateToBlogPost={navigateToBlogPost}
      />

      {/* HomePage Component */}
      <HomePage 
        onNavigateToConditions={navigateToConditions}
        onNavigateToBlog={navigateToBlog}
        onNavigateToService={navigateToService}
      />

      {/* Footer */}
      <Footer 
        onNavigateToConditions={navigateToConditions}
        onNavigateToBlog={navigateToBlog}
      />
    </div>
  );
}