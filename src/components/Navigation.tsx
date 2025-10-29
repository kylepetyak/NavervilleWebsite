import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "./ui/sheet";
import { SearchComponent } from "./SearchComponent";
import { BreadcrumbNav, generateBreadcrumbs } from "./BreadcrumbNav";
import logoImage from 'figma:asset/58ea7108aa384cc83baadb0fd98691daf4a8c4e4.png';
import { Phone, Menu, X, Search } from "lucide-react";

interface NavigationProps {
  onNavigateToHome: () => void;
  onNavigateToConditions: () => void;
  onNavigateToWhoWeServe?: () => void;
  onNavigateToBlog: () => void;
  onNavigateToPagesOverview?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToBooking?: () => void;
  currentPage?: string;
  currentBlogPost?: number;
  currentTargetGroup?: string;
  onNavigateToBlogPost?: (postId: number) => void;
}

export function Navigation({ 
  onNavigateToHome, 
  onNavigateToConditions,
  onNavigateToWhoWeServe, 
  onNavigateToBlog, 
  onNavigateToPagesOverview,
  onNavigateToAbout,
  onNavigateToBooking,
  currentPage = 'home',
  currentBlogPost,
  currentTargetGroup,
  onNavigateToBlogPost
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleNavigate = (type: string, id?: number) => {
    if (type === 'home') {
      onNavigateToHome();
    } else if (type === 'blog-post' && id && onNavigateToBlogPost) {
      onNavigateToBlogPost(id);
    }
    setIsMobileMenuOpen(false);
  };

  const handleSectionNavigation = (sectionId: string) => {
    if (currentPage !== 'home') {
      onNavigateToHome();
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const breadcrumbs = generateBreadcrumbs(
    currentPage,
    currentBlogPost,
    currentTargetGroup,
    onNavigateToHome,
    onNavigateToBlog,
    onNavigateToConditions,
    onNavigateToWhoWeServe
  );

  return (
    <>
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button 
                onClick={onNavigateToHome}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img 
                  src={logoImage} 
                  alt="Camelback Medical Centers - The Pain Relief Clinic" 
                  className="h-12 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <button 
                onClick={onNavigateToHome}
                className={`transition-colors text-sm ${
                  currentPage === 'home' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </button>
              <button 
                onClick={onNavigateToAbout || (() => handleSectionNavigation('about'))}
                className={`transition-colors text-sm ${
                  currentPage === 'about' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About Us
              </button>
              <button 
                onClick={onNavigateToWhoWeServe}
                className={`transition-colors text-sm ${
                  currentPage === 'who-we-serve' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Who We Serve
              </button>
              <button 
                onClick={onNavigateToConditions}
                className={`transition-colors text-sm ${
                  currentPage === 'conditions' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Conditions We Treat
              </button>
              <button 
                onClick={onNavigateToBlog}
                className={`transition-colors text-sm ${
                  currentPage === 'blog' || currentPage === 'blog-post' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Health Blog
              </button>
              <button 
                onClick={() => handleSectionNavigation('team')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-sm"
              >
                Our Team
              </button>
              <button 
                onClick={() => {
                  if (onNavigateToBooking) {
                    onNavigateToBooking();
                  }
                }}
                className={`transition-colors text-sm ${
                  currentPage === 'booking' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact & Booking
              </button>
            </div>

            {/* Search and Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                {showSearch ? (
                  <div className="flex items-center space-x-2">
                    <SearchComponent
                      onNavigate={handleNavigate}
                      onNavigateToConditions={onNavigateToConditions}
                      onNavigateToBlog={onNavigateToBlog}
                      className="w-64"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowSearch(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSearch(true)}
                    className="text-gray-600 hover:text-blue-600"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                )}
              </div>

              {/* Developer Links */}
              {onNavigateToPagesOverview && (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={onNavigateToPagesOverview}
                    className="text-xs text-gray-400 hover:text-blue-400 transition-colors opacity-60"
                    title="View All Pages"
                  >
                    Pages
                  </button>
                </div>
              )}

              {/* Book Appointment Button */}
              <Button 
                onClick={onNavigateToBooking}
                className="bg-blue-600 hover:bg-blue-700 text-sm"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <Menu className="h-5 w-5" />
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Mobile navigation menu with links to all pages and search functionality
                  </SheetDescription>
                  <div className="flex flex-col space-y-6 mt-6">
                    {/* Mobile Search */}
                    <div>
                      <SearchComponent
                        onNavigate={handleNavigate}
                        onNavigateToConditions={onNavigateToConditions}
                        onNavigateToBlog={onNavigateToBlog}
                        className="w-full"
                      />
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="space-y-4">
                      <button 
                        onClick={() => handleNavigate('home')}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'home' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Home
                      </button>
                      <button 
                        onClick={() => {
                          if (onNavigateToAbout) {
                            onNavigateToAbout();
                            setIsMobileMenuOpen(false);
                          } else {
                            handleSectionNavigation('about');
                          }
                        }}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'about' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        About Us
                      </button>
                      <button 
                        onClick={() => {
                          if (onNavigateToWhoWeServe) {
                            onNavigateToWhoWeServe();
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'who-we-serve' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Who We Serve
                      </button>
                      <button 
                        onClick={() => {
                          onNavigateToConditions();
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'conditions' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Conditions We Treat
                      </button>
                      <button 
                        onClick={() => {
                          onNavigateToBlog();
                          setIsMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'blog' || currentPage === 'blog-post' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Health Blog
                      </button>
                      <button 
                        onClick={() => handleSectionNavigation('team')}
                        className="block w-full text-left py-2 px-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Our Team
                      </button>
                      <button 
                        onClick={() => {
                          if (onNavigateToBooking) {
                            onNavigateToBooking();
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`block w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          currentPage === 'booking' 
                            ? 'bg-blue-50 text-blue-600 font-medium' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        Contact & Booking
                      </button>
                    </div>

                    {/* Mobile Actions */}
                    <div className="space-y-3 pt-6 border-t border-gray-200">
                      <Button 
                        onClick={() => {
                          if (onNavigateToBooking) {
                            onNavigateToBooking();
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className="w-full bg-blue-600 hover:bg-blue-700 justify-start"
                      >
                        Book Appointment
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Phone className="mr-2 h-4 w-4" />
                        Call: (630) 416-1151
                      </Button>
                    </div>

                    {/* Developer Links */}
                    {onNavigateToPagesOverview && (
                      <div className="pt-4 border-t border-gray-200 space-y-2">
                        <button 
                          onClick={() => {
                            onNavigateToPagesOverview();
                            setIsMobileMenuOpen(false);
                          }}
                          className="block text-xs text-gray-400 hover:text-blue-400 transition-colors"
                        >
                          View All Pages
                        </button>
                      </div>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb Navigation */}
      {breadcrumbs.length > 0 && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <BreadcrumbNav items={breadcrumbs} />
          </div>
        </div>
      )}
    </>
  );
}