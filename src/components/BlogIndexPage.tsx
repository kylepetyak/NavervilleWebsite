import { useState, useMemo } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { NewsletterModal } from "./NewsletterModal";
import { 
  Search,
  Calendar,
  Clock,
  User,
  TrendingUp,
  BookOpen,
  Mail,
  Phone,
  ChevronRight,
  X
} from "lucide-react";

interface BlogIndexPageProps {
  onNavigateToHome: () => void;
  onNavigateToPost: (postId: number) => void;
}

// Mock blog posts data
const blogPosts = [
  {
    id: 1,
    title: "5 Essential Exercises for Back Pain Relief",
    excerpt: "Discover proven exercises that can help alleviate chronic back pain and improve your daily quality of life.",
    image: "https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMGhlYWx0aCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NjQ4MzIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Dr. James Nabzdyk",
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Pain Management",
    featured: true
  },
  {
    id: 2,
    title: "Understanding Chronic Pain: A Comprehensive Guide",
    excerpt: "Learn about the different types of chronic pain, their causes, and modern treatment approaches available.",
    image: "https://images.unsplash.com/photo-1749044071257-ca1e6783cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NTY0ODMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Dr. Michael Chen",
    date: "Jan 12, 2025",
    readTime: "8 min read",
    category: "Education",
    featured: false
  },
  {
    id: 3,
    title: "Nutrition for Joint Health: What Naperville Residents Should Know",
    excerpt: "Explore how proper nutrition can support joint health and reduce inflammation for better mobility.",
    image: "https://images.unsplash.com/photo-1670165088604-5a39f5c1be51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwbnV0cml0aW9ufGVufDF8fHx8MTc1NjQxMTY5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Lisa Rodriguez, PT",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    category: "Nutrition",
    featured: false
  },
  {
    id: 4,
    title: "Workplace Ergonomics: Preventing Office-Related Injuries",
    excerpt: "Simple adjustments to your workspace can prevent common injuries and improve your work-life comfort.",
    image: "https://images.unsplash.com/photo-1637243218672-d338945efdf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBlcmdvbm9taWNzfGVufDF8fHx8MTc1NjQ4MzIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Dr. James Nabzdyk",
    date: "Jan 8, 2025",
    readTime: "4 min read",
    category: "Prevention",
    featured: false
  },
  {
    id: 5,
    title: "Sports Injury Recovery: Getting Back to Your Active Lifestyle",
    excerpt: "Professional guidance on recovering from sports injuries and preventing future occurrences.",
    image: "https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMGhlYWx0aCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NjQ4MzIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Lisa Rodriguez, PT",
    date: "Jan 5, 2025",
    readTime: "7 min read",
    category: "Sports Medicine",
    featured: false
  },
  {
    id: 6,
    title: "Managing Stress and Its Impact on Physical Health",
    excerpt: "Understanding the connection between stress and physical symptoms, plus practical management strategies.",
    image: "https://images.unsplash.com/photo-1749044071257-ca1e6783cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NTY0ODMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: "Dr. Michael Chen",
    date: "Jan 3, 2025",
    readTime: "6 min read",
    category: "Mental Health",
    featured: false
  }
];

const popularPosts = [
  { title: "5 Essential Exercises for Back Pain Relief", readTime: "5 min" },
  { title: "Understanding Chronic Pain: A Comprehensive Guide", readTime: "8 min" },
  { title: "Nutrition for Joint Health", readTime: "6 min" },
  { title: "Workplace Ergonomics Tips", readTime: "4 min" }
];

const categories = ["All Posts", "Pain Management", "Education", "Nutrition", "Prevention", "Sports Medicine", "Mental Health"];

export function BlogIndexPage({ onNavigateToHome, onNavigateToPost }: BlogIndexPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handlePostClick = (postId: number) => {
    onNavigateToPost(postId);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const openNewsletterModal = () => {
    setIsNewsletterModalOpen(true);
  };

  return (
    <div>

      {/* Hero Banner */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTY0ODMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical wellness blog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Naperville Insights & Health Tips
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto">
                Explore our expert-backed content for better living in Naperville's health-conscious community
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Our Latest
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4"
                onClick={openNewsletterModal}
              >
                <Mail className="mr-2 h-5 w-5" />
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Accent Strip */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Category Filter */}
          <div className="mb-12 space-y-8">
            {/* Search Bar */}
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="Search articles, topics, or authors..."
                  className="pl-12 pr-10 py-3 text-lg"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                {searchQuery && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                    onClick={clearSearch}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryClick(category)}
                  className={category === selectedCategory ? "bg-blue-600 hover:bg-blue-700" : ""}
                >
                  {category}
                  {category !== "All Posts" && (
                    <span className="ml-2 bg-gray-200 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                      {blogPosts.filter(post => post.category === category).length}
                    </span>
                  )}
                </Button>
              ))}
            </div>

            {/* Search Results Info */}
            {searchQuery && (
              <div className="text-center text-gray-600">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} 
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== "All Posts" && ` in ${selectedCategory}`}
              </div>
            )}
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content Column (3/4 width) */}
            <div className="lg:col-span-3">
              {/* No Results Message */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <Search className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">No Articles Found</h3>
                  <p className="text-gray-600 mb-6">
                    {searchQuery 
                      ? `No articles match "${searchQuery}" in ${selectedCategory === "All Posts" ? "any category" : selectedCategory}.` 
                      : `No articles found in ${selectedCategory}.`
                    }
                  </p>
                  <div className="space-x-4">
                    <Button onClick={clearSearch} variant="outline">
                      Clear Search
                    </Button>
                    <Button onClick={() => setSelectedCategory("All Posts")}>
                      View All Posts
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Featured Post */}
                  {filteredPosts.filter(post => post.featured).map((post) => (
                <Card 
                  key={post.id}
                  className="mb-12 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handlePostClick(post.id)}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                        Featured
                      </Badge>
                    </div>
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                          <span>Read More</span>
                          <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}

                  {/* Regular Posts Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {filteredPosts.filter(post => !post.featured).map((post) => (
                  <Card 
                    key={post.id}
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    onClick={() => handlePostClick(post.id)}
                  >
                    <div className="relative h-48">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge 
                        variant="secondary" 
                        className="absolute top-3 left-3 text-xs bg-white/90 text-gray-700"
                      >
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-1">
                            <User className="h-3 w-3" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">{post.date}</span>
                          <div className="flex items-center text-blue-600 text-sm font-semibold group-hover:text-blue-700">
                            <span>Read More</span>
                            <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar (1/4 width) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Quick Search */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Search</h3>
                <div className="space-y-2">
                  {["Back Pain", "Exercise Tips", "Nutrition", "Stress Management", "Ergonomics"].map((topic) => (
                    <button
                      key={topic}
                      onClick={() => setSearchQuery(topic)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </Card>

              {/* Most Popular Articles */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Most Popular</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div 
                      key={index}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors group"
                      onClick={() => onNavigateToPost(index + 1)}
                    >
                      <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Subscribe CTA */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-center space-y-4">
                  <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
                  <p className="text-sm text-gray-600">
                    Get the latest health insights delivered to your inbox weekly.
                  </p>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={openNewsletterModal}
                  >
                    Subscribe Now
                  </Button>
                </div>
              </Card>

              {/* Trending Topics */}
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-2">
                  {["Back Pain Relief", "Sports Injuries", "Ergonomics", "Nutrition Tips", "Mental Health"].map((topic, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer transition-colors"
                    >
                      <span className="text-sm text-gray-700">{topic}</span>
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Accent Strip */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"></div>

      {/* Footer CTA Panel */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Ready to Take Action on Your Health?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't just read about wellness—experience it with our expert team in Naperville.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Visit
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse All Articles
            </Button>
          </div>
          <div className="mt-8">
            <div className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
              <span className="text-2xl mr-2">$27</span>
              <span>New Patient Special</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">Consultation + Examination + X-Rays ($425 Value)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-4">Camelback Medical Centers - Naperville</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <span>123 Main Street, Naperville, IL 60540</span>
            <span>(630) 555-0123</span>
            <span>Mon-Fri: 8AM-7PM | Sat: 9AM-2PM</span>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-xs text-gray-400">
            <p>&copy; 2025 Camelback Medical Centers - Naperville. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Newsletter Modal */}
      <NewsletterModal 
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </div>
  );
}