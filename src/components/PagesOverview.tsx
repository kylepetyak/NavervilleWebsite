import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Home, 
  Stethoscope, 
  BookOpen, 
  FileText, 
  Settings,
  Eye,
  Users,
  Heart,
  ChevronRight,
  Code2,
  Layout,
  Database,
  Calendar
} from "lucide-react";

interface PagesOverviewProps {
  onNavigateToHome: () => void;
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
  onNavigateToBlogPost: (id: number) => void;
  onNavigateToDetailedBlogPost: (id: number) => void;
  onNavigateToAbout?: () => void;
  onNavigateToServiceTemplate?: () => void;
  onNavigateToBooking?: () => void;
  onNavigateToSEOSpec?: () => void;
}

const pagesList = [
  {
    name: "Home Page",
    description: "Original 15-section home page with 'Feel Better, Move Better' theme, challenge section, testimonials, and comprehensive medical practice features",
    icon: Home,
    status: "Complete",
    sections: [
      "Hero Section with Video Thumbnail",
      "Challenge/Pain Point Section", 
      "Patient Testimonials",
      "Why Our Method Works",
      "Who We Serve (Patient Types)",
      "Conditions We Treat (with Icons)",
      "Meet the Team",
      "Services Overview", 
      "Metrics & Stats",
      "Process Steps (3-Phase)",
      "Urgency/Cost Reminder",
      "Final CTA"
    ],
    features: ["15 Strategic Sections", "Video Testimonials", "Google Reviews Integration", "$29 Special Offer"],
    route: "home"
  },
  {
    name: "About Us Page",
    description: "Naperville-focused about page with community connection, mission, and local provider information",
    icon: Users,
    status: "Complete",
    sections: [
      "Hero Section",
      "Rooted in Naperville's Legacy", 
      "Mission & Values Grid",
      "Community Inspiration",
      "Special Offer Banner",
      "Team Profiles with Modals",
      "Secondary CTA Section"
    ],
    features: ["Community Focus", "Local History", "Interactive Team Profiles", "Naperville-Specific Content"],
    route: "about"
  },
  {
    name: "Conditions We Treat",
    description: "Comprehensive services page with responsive icon grid and detailed condition information",
    icon: Stethoscope,
    status: "Complete",
    sections: [
      "Hero Section",
      "Services Overview Grid",
      "Detailed Condition Cards",
      "Treatment Approaches",
      "FAQ Section",
      "Contact CTA"
    ],
    features: ["Responsive Grid Layout", "Detailed Service Cards", "Professional Icons", "Mobile Optimized"],
    route: "conditions"
  },
  {
    name: "Blog Index Page",
    description: "Gary Vee-style blog structure with advanced search, filtering, and newsletter integration",
    icon: BookOpen,
    status: "Complete",
    sections: [
      "Hero Banner",
      "Search & Filter System",
      "Featured Article Display",
      "Regular Posts Grid",
      "Sidebar with Popular Posts",
      "Newsletter Signup",
      "Trending Topics"
    ],
    features: ["Advanced Search", "Category Filtering", "Newsletter Modal", "Social Proof"],
    route: "blog"
  },
  {
    name: "Blog Post Template",
    description: "Standard blog post layout with navigation integration and related posts",
    icon: FileText,
    status: "Complete",
    sections: [
      "Article Header",
      "Content Area",
      "Author Info",
      "Related Posts",
      "Social Sharing",
      "Navigation Integration"
    ],
    features: ["Clean Typography", "Social Sharing", "Related Content", "Responsive Layout"],
    route: "blog-post-template",
    demo: "Blog Post ID 1"
  },
  {
    name: "Blog Post Detail",
    description: "Comprehensive standalone blog post with enhanced features and sidebar",
    icon: FileText,
    status: "Complete (Alternative)",
    sections: [
      "Custom Navigation Bar",
      "Article Header with Meta",
      "Featured Image",
      "Rich Content Area",
      "Table of Contents",
      "Newsletter Signup Sidebar",
      "Appointment Booking CTA",
      "Author Bio Section",
      "Related Articles Grid"
    ],
    features: ["Standalone Navigation", "Table of Contents", "Enhanced CTAs", "Rich Sidebar"],
    route: "blog-post-detail",
    demo: "Detailed View ID 1"
  },

  {
    name: "Service Page Template",
    description: "Reusable template for all condition/service pages following healthcare UX best practices",
    icon: Heart,
    status: "Complete",
    sections: [
      "Hero Section with Local CTA",
      "About This Condition",
      "Why Camelback Method Works",
      "Treatment Overview",
      "Related Resources Links",
      "Patient Stories/Testimonials",
      "FAQ Accordion",
      "Secondary CTA with Trust Elements",
      "Footer Navigation/Mini-Sitemap"
    ],
    features: ["Healthcare UX Standards", "Reusable Components", "Local Trust Elements", "Professional Medical Design"],
    route: "service-template"
  }
];

const technicalFeatures = [
  {
    name: "Universal Navigation System",
    description: "Shared Navigation component with mobile hamburger menu, search, and breadcrumbs",
    icon: Layout,
    features: ["Mobile Responsive", "Search Integration", "Breadcrumb Navigation", "Active State Highlighting"]
  },
  {
    name: "Advanced Search Component",
    description: "Cross-content search with real-time results and keyboard navigation",
    icon: Database,
    features: ["Real-time Search", "Categorized Results", "Keyboard Navigation", "Smart Filtering"]
  },
  {
    name: "Component Architecture",
    description: "Modular design with reusable components and consistent styling",
    icon: Code2,
    features: ["ShadCN UI Integration", "Consistent Typography", "Responsive Design", "Professional Medical Aesthetic"]
  }
];

export function PagesOverview({ 
  onNavigateToHome,
  onNavigateToConditions, 
  onNavigateToBlog,
  onNavigateToBlogPost,
  onNavigateToDetailedBlogPost,
  onNavigateToAbout,
  onNavigateToServiceTemplate,
  onNavigateToSEOSpec
}: PagesOverviewProps) {

  const handleNavigation = (route: string, demo?: string) => {
    switch (route) {
      case 'home':
        onNavigateToHome();
        break;
      case 'about':
        if (onNavigateToAbout) onNavigateToAbout();
        break;
      case 'conditions':
        onNavigateToConditions();
        break;
      case 'blog':
        onNavigateToBlog();
        break;
      case 'blog-post-template':
        onNavigateToBlogPost(1);
        break;
      case 'blog-post-detail':
        onNavigateToDetailedBlogPost(1);
        break;

      case 'service-template':
        if (onNavigateToServiceTemplate) onNavigateToServiceTemplate();
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="bg-white/20 rounded-full p-4">
                <Eye className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Camelback Medical Centers - Website Overview
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Complete website structure with 6 main pages, advanced navigation, and comprehensive medical practice features
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-green-500 text-white px-4 py-2 text-sm">
                6 Complete Pages
              </Badge>
              <Badge className="bg-blue-500 text-white px-4 py-2 text-sm">
                Mobile Responsive
              </Badge>
              <Badge className="bg-purple-500 text-white px-4 py-2 text-sm">
                SEO Optimized
              </Badge>
              <Badge className="bg-orange-500 text-white px-4 py-2 text-sm">
                Medical Practice Ready
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pages Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Website Pages</h2>
            <p className="text-lg text-gray-600">
              Comprehensive medical practice website with advanced features and professional design
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {pagesList.map((page, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <page.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900">{page.name}</CardTitle>
                        <Badge 
                          variant={page.status === "Complete" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {page.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">{page.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Sections */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Page Sections:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {page.sections.map((section, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span>{section}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {page.features.map((feature, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Navigation Button */}
                  <div className="pt-4 border-t border-gray-200">
                    <Button 
                      onClick={() => handleNavigation(page.route)}
                      className="w-full bg-blue-600 hover:bg-blue-700 justify-between"
                    >
                      <span>View {page.name}</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    {page.demo && (
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Demo: {page.demo}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Features */}
          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technical Features & Architecture</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {technicalFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-gray-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{feature.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                  <div className="space-y-1">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="text-xs text-gray-500">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Blog Post Comparison */}
          <div className="mt-16">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                📝 Blog Post Formats Available
              </h3>
              <p className="text-gray-600 text-center mb-6">
                We've created two different blog post experiences - choose the one that best fits your needs:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span>Blog Post Template</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Integrated with main navigation, clean and simple layout, focuses on content readability.
                    </p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">✓ Integrated navigation</div>
                      <div className="text-xs text-gray-500">✓ Clean, minimal design</div>
                      <div className="text-xs text-gray-500">✓ Fast loading</div>
                      <div className="text-xs text-gray-500">✓ Consistent branding</div>
                    </div>
                    <Button 
                      onClick={() => handleNavigation('blog-post-template')}
                      variant="outline" 
                      className="w-full border-blue-300 text-blue-600 hover:bg-blue-50"
                    >
                      View Template Version
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      <span>Blog Post Detail</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-600">
                      Standalone page with enhanced features, sidebar CTAs, table of contents, and comprehensive layout.
                    </p>
                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">✓ Table of contents</div>
                      <div className="text-xs text-gray-500">✓ Newsletter signup sidebar</div>
                      <div className="text-xs text-gray-500">✓ Enhanced appointment CTAs</div>
                      <div className="text-xs text-gray-500">✓ Related articles section</div>
                    </div>
                    <Button 
                      onClick={() => handleNavigation('blog-post-detail')}
                      variant="outline" 
                      className="w-full border-green-300 text-green-600 hover:bg-green-50"
                    >
                      View Detailed Version
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Navigation</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={onNavigateToHome} className="bg-blue-600 hover:bg-blue-700">
                <Home className="mr-2 h-4 w-4" />
                Home Page
              </Button>
              {onNavigateToAbout && (
                <Button onClick={onNavigateToAbout} variant="outline">
                  <Users className="mr-2 h-4 w-4" />
                  About Us
                </Button>
              )}
              <Button onClick={onNavigateToConditions} variant="outline">
                <Stethoscope className="mr-2 h-4 w-4" />
                Services
              </Button>
              <Button onClick={onNavigateToBlog} variant="outline">
                <BookOpen className="mr-2 h-4 w-4" />
                Blog Index
              </Button>
              {onNavigateToSEOSpec && (
                <Button onClick={onNavigateToSEOSpec} variant="outline" className="bg-green-50 border-green-300 text-green-700 hover:bg-green-100">
                  <Settings className="mr-2 h-4 w-4" />
                  SEO Design Spec
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}