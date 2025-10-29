import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Database,
  FileText,
  Link,
  ArrowRight,
  ArrowLeft,
  Globe,
  Users,
  Search,
  Settings,
  BookOpen,
  Tag,
  Calendar,
  User,
  Navigation,
  Home,
  ChevronRight,
  BarChart3,
  Target,
  Zap,
  CheckCircle2,
  ArrowDownRight,
  ArrowUpRight,
  Network,
  Workflow
} from "lucide-react";

interface CMSStrategyPageProps {
  onNavigateToHome: () => void;
}

// Mock data for CMS collections
const servicesCollection = [
  "Allergies & Asthma",
  "Back Pain Relief", 
  "Chronic Pain Management",
  "Sports Injuries",
  "Physical Therapy",
  "Chiropractic Care",
  "Neck Pain Treatment",
  "Sciatica Relief",
  "Auto Accident Injuries",
  "Work-Related Injuries"
];

const blogPostFields = [
  { field: "Title", type: "Plain Text", description: "SEO-optimized blog post title" },
  { field: "Featured Image", type: "Image", description: "Hero image for post (1200x630)" },
  { field: "Summary/Excerpt", type: "Rich Text", description: "Meta description & preview text" },
  { field: "Body Content", type: "Rich Text", description: "Main article content with formatting" },
  { field: "Author", type: "Reference", description: "Links to Staff collection" },
  { field: "Category", type: "Option", description: "Pain Management, Education, etc." },
  { field: "Tags", type: "Multi-Reference", description: "Topic keywords for filtering" },
  { field: "Related Services", type: "Multi-Reference", description: "Links to Services collection" },
  { field: "Publish Date", type: "Date", description: "Publication timestamp" },
  { field: "Featured Post", type: "Switch", description: "Highlight on blog index" }
];

const bestPractices = [
  {
    element: "CMS Collections",
    practice: "Separate Services and Blog collections for better organization and filtering"
  },
  {
    element: "URL Structure", 
    practice: "Hierarchical URLs: /services/back-pain, /blog/back-pain-exercises"
  },
  {
    element: "Internal Linking",
    practice: "Use contextual anchor text with location keywords: 'back pain treatment in Naperville'"
  },
  {
    element: "Content Relationships",
    practice: "Multi-reference fields to connect blog posts with relevant services"
  },
  {
    element: "SEO Optimization",
    practice: "Include local keywords and meta descriptions in all CMS items"
  },
  {
    element: "Navigation Structure",
    practice: "Clear breadcrumbs and related content sections on every page"
  },
  {
    element: "Content Templates",
    practice: "Consistent layouts for service pages and blog posts with reusable components"
  },
  {
    element: "Image Management",
    practice: "Standardized image sizes and alt text for accessibility and SEO"
  }
];

export function CMSStrategyPage({ onNavigateToHome }: CMSStrategyPageProps) {
  return (
    <div>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full">
              <Database className="mr-2 h-5 w-5" />
              <span className="font-semibold">CMS Strategy Guide</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Webflow CMS Strategy & Content Link Architecture
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Internal reference for designers and developers to understand our content management system structure, 
              linking strategy, and layout components for Camelback Medical Centers - Naperville.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: CMS Collections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              CMS Collections Overview
            </h2>
            <p className="text-lg text-gray-600">
              Our content is organized into two primary collections that work together seamlessly
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services Collection */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center space-x-3">
                  <Target className="h-6 w-6" />
                  <span>Services Collection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Individual service pages for each treatment we offer in Naperville
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Service Pages Include:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {servicesCollection.slice(0, 6).map((service, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{service}</span>
                        </div>
                      ))}
                      <div className="flex items-center space-x-2 text-gray-500">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">+ {servicesCollection.length - 6} more services</span>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Total Services:</span>
                      <Badge variant="secondary">{servicesCollection.length} pages</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts Collection */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center space-x-3">
                  <BookOpen className="h-6 w-6" />
                  <span>Blog Posts Collection</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Educational articles and health tips that support our services
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Key CMS Fields:</h4>
                    <div className="space-y-3">
                      {blogPostFields.slice(0, 5).map((field, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                          <div>
                            <span className="text-sm font-medium text-gray-900">{field.field}</span>
                            <span className="text-xs text-gray-500 ml-2">({field.type})</span>
                            <p className="text-xs text-gray-600 mt-1">{field.description}</p>
                          </div>
                        </div>
                      ))}
                      <div className="text-xs text-gray-500 ml-5">
                        + {blogPostFields.length - 5} more fields
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2: Pillar and Spoke Diagram */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pillar & Spoke Content Strategy
            </h2>
            <p className="text-lg text-gray-600">
              How our service pages (pillars) connect with supporting blog content (spokes)
            </p>
          </div>

          <div className="relative">
            {/* Visual Diagram */}
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
              
              {/* Supporting Blog Posts - Left Side */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Supporting Blog Posts</h3>
                {[
                  "5 Exercises for Back Pain Relief",
                  "Understanding Chronic Pain",
                  "When to See a Specialist"
                ].map((post, index) => (
                  <Card key={index} className="w-64 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-900">{post}</span>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <Tag className="h-3 w-3 mr-1" />
                        <span>Back Pain, Exercise</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Arrows pointing to center */}
              <div className="hidden lg:flex flex-col space-y-4">
                <ArrowRight className="h-6 w-6 text-blue-600" />
                <ArrowRight className="h-6 w-6 text-blue-600" />
                <ArrowRight className="h-6 w-6 text-blue-600" />
              </div>

              {/* Central Service Page */}
              <div className="flex flex-col items-center">
                <Card className="w-80 border-4 border-blue-600 shadow-lg">
                  <CardHeader className="bg-blue-600 text-white text-center">
                    <CardTitle className="flex items-center justify-center space-x-3">
                      <Target className="h-6 w-6" />
                      <span>Service Page (Pillar)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Back Pain Relief
                    </h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Treatment Overview</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Conditions We Treat</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Treatment Methods</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                        <span>Related Articles Section</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="mt-4 text-center">
                  <Badge className="bg-blue-100 text-blue-800">
                    Primary Landing Page for "Back Pain Naperville"
                  </Badge>
                </div>
              </div>

              {/* Arrows pointing from center */}
              <div className="hidden lg:flex flex-col space-y-4">
                <ArrowLeft className="h-6 w-6 text-green-600" />
                <ArrowLeft className="h-6 w-6 text-green-600" />
                <ArrowLeft className="h-6 w-6 text-green-600" />
              </div>

              {/* Related Blog Posts - Right Side */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">Related Articles</h3>
                {[
                  "Workplace Ergonomics Tips",
                  "Naperville Exercise Programs", 
                  "Patient Success Stories"
                ].map((post, index) => (
                  <Card key={index} className="w-64 hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-5 w-5 text-green-600" />
                        <span className="text-sm font-medium text-gray-900">{post}</span>
                      </div>
                      <div className="mt-2 flex items-center text-xs text-gray-500">
                        <Link className="h-3 w-3 mr-1" />
                        <span>Links back to service</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategy Explanation */}
            <div className="mt-16 bg-white p-8 rounded-lg shadow-sm border">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Content Strategy Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Search className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">SEO Authority</h4>
                  <p className="text-sm text-gray-600">Multiple pages targeting related keywords strengthen overall domain authority</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Journey</h4>
                  <p className="text-sm text-gray-600">Blog posts educate and nurture leads toward service pages</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content ROI</h4>
                  <p className="text-sm text-gray-600">Each blog post supports multiple services and vice versa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Internal Linking Flow Examples */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Internal Linking Flow Examples
            </h2>
            <p className="text-lg text-gray-600">
              How contextual links create seamless navigation between blog posts and services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Blog Post Example */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center space-x-3">
                  <FileText className="h-5 w-5" />
                  <span>Blog Post Page Example</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    "5 Essential Exercises for Back Pain Relief"
                  </h3>
                  <div className="prose prose-sm text-gray-700">
                    <p>
                      Back pain affects millions of Americans every day. The good news is that with the right exercises 
                      and consistent practice, you can significantly reduce your pain...
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mx-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <Link className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Contextual Link Example:</strong>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        "If your back pain persists despite these exercises, consider scheduling a consultation with our 
                        <a href="/services/back-pain-relief" className="text-blue-600 underline font-medium hover:text-blue-700">
                          back pain specialists in Naperville
                        </a> 
                        for a comprehensive treatment plan."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 mx-6 mb-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Related Articles</h4>
                  <div className="space-y-2">
                    {["Understanding Chronic Pain", "Workplace Ergonomics", "When to See a Specialist"].map((article, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <ArrowRight className="h-4 w-4 text-gray-500" />
                        <a href="#" className="text-sm text-blue-600 hover:underline">{article}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Page Example */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center space-x-3">
                  <Target className="h-5 w-5" />
                  <span>Service Page Example</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Back Pain Relief in Naperville
                  </h3>
                  <div className="prose prose-sm text-gray-700">
                    <p>
                      Our comprehensive back pain treatment program combines chiropractic care, physical therapy, 
                      and pain management techniques...
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-600 p-4 mx-6 mb-6">
                  <div className="flex items-start space-x-3">
                    <Link className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Cross-linking to Blog:</strong>
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        "Learn more about 
                        <a href="/blog/back-pain-exercises" className="text-green-600 underline font-medium hover:text-green-700">
                          exercises you can do at home
                        </a> 
                        to complement your professional treatment."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 p-4 mx-6 mb-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Educational Resources</h4>
                  <div className="space-y-2">
                    {["Back Pain Exercise Guide", "Understanding Your Diagnosis", "Recovery Timeline"].map((resource, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4 text-gray-500" />
                        <a href="#" className="text-sm text-green-600 hover:underline">{resource}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4: Navigation & Breadcrumbs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Navigation & Breadcrumb Structure
            </h2>
            <p className="text-lg text-gray-600">
              Consistent navigation patterns that guide users and improve SEO
            </p>
          </div>

          <div className="space-y-12">
            {/* Header Navigation Mock */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Navigation className="h-5 w-5 text-blue-600" />
                  <span>Header Navigation Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-blue-600 rounded"></div>
                      <span className="font-bold text-gray-900">Camelback Medical</span>
                    </div>
                    <div className="hidden md:flex items-center space-x-6 text-sm">
                      <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                      <a href="#" className="text-gray-700 hover:text-blue-600">About Us</a>
                      <div className="relative group">
                        <button className="text-gray-700 hover:text-blue-600 flex items-center space-x-1">
                          <span>Services</span>
                          <ChevronRight className="h-3 w-3" />
                        </button>
                        <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-2 mt-1 hidden group-hover:block">
                          <div className="space-y-1 w-48">
                            <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Back Pain Relief</a>
                            <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Sports Injuries</a>
                            <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Physical Therapy</a>
                          </div>
                        </div>
                      </div>
                      <a href="#" className="text-gray-700 hover:text-blue-600">Health Blog</a>
                      <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Call Now
                    </Button>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <strong>Dynamic Links:</strong> Service dropdown populates from CMS Services collection
                </div>
              </CardContent>
            </Card>

            {/* Breadcrumb Examples */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span>Breadcrumb Patterns</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Page Breadcrumb</h4>
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center space-x-2 text-sm">
                    <Home className="h-4 w-4 text-gray-500" />
                    <span className="text-blue-600">Home</span>
                    <ChevronRight className="h-3 w-3 text-gray-400" />
                    <span className="text-blue-600">Services</span>
                    <ChevronRight className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-700">Back Pain Relief</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Blog Post Breadcrumb</h4>
                  <div className="bg-gray-50 p-3 rounded-lg flex items-center space-x-2 text-sm">
                    <Home className="h-4 w-4 text-gray-500" />
                    <span className="text-blue-600">Home</span>
                    <ChevronRight className="h-3 w-3 text-gray-400" />
                    <span className="text-blue-600">Health Blog</span>
                    <ChevronRight className="h-3 w-3 text-gray-400" />
                    <span className="text-blue-600">Pain Management</span>
                    <ChevronRight className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-700">5 Exercises for Back Pain</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">SEO Benefits</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Provides clear site hierarchy for search engines</li>
                    <li>• Creates additional internal linking opportunities</li>
                    <li>• Improves user experience and reduces bounce rate</li>
                    <li>• Enables rich snippets in search results</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5: Best Practices Table */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Best Practices Summary
            </h2>
            <p className="text-lg text-gray-600">
              Key guidelines for maintaining an effective CMS and linking strategy
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-900 text-white">
              <CardTitle className="flex items-center space-x-3">
                <Settings className="h-5 w-5" />
                <span>Implementation Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Strategy Element
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Best Practice
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {bestPractices.map((practice, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                              <CheckCircle2 className="h-4 w-4 text-blue-600" />
                            </div>
                            <div className="text-sm font-medium text-gray-900">
                              {practice.element}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-700 leading-relaxed">
                            {practice.practice}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Implementation Notes */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Implement?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            This CMS strategy ensures scalable content management and optimal SEO performance for Camelback Medical Centers.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold mb-2">Quick Setup</h3>
                <p className="text-sm text-gray-600">
                  CMS collections can be implemented in Webflow within 2-3 hours
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <Network className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-bold mb-2">Scalable Structure</h3>
                <p className="text-sm text-gray-600">
                  Add new services and blog posts without breaking existing links
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white text-gray-900">
              <CardContent className="p-6">
                <BarChart3 className="h-8 w-8 text-orange-600 mb-4" />
                <h3 className="font-bold mb-2">SEO Optimized</h3>
                <p className="text-sm text-gray-600">
                  Built-in best practices for local search and content discovery
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            CMS Strategy Guide for Camelback Medical Centers - Naperville | Internal Reference Document
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Last Updated: January 2025 | Version 1.0
          </p>
        </div>
      </footer>
    </div>
  );
}