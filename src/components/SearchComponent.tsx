import { useState, useEffect, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Search, X, FileText, Target, Clock, User } from "lucide-react";

interface SearchResult {
  type: 'blog' | 'service' | 'page';
  title: string;
  excerpt?: string;
  url: string;
  category?: string;
  author?: string;
  readTime?: string;
}

interface SearchComponentProps {
  onNavigate?: (type: string, id?: number) => void;
  onNavigateToConditions?: () => void;
  onNavigateToBlog?: () => void;
  className?: string;
}

// Mock search data - in real implementation, this would come from your CMS/API
const searchData: SearchResult[] = [
  // Blog posts
  {
    type: 'blog',
    title: 'Top Tips for Structuring an ADHD-Friendly Routine in Naperville',
    excerpt: 'Discover practical, evidence-based strategies to create daily structures that support focus, reduce overwhelm, and help your family thrive with ADHD.',
    url: '/blog/adhd-routine-tips',
    category: 'ADHD Support',
    author: 'Dr. Sarah Mitchell',
    readTime: '12 min read'
  },
  {
    type: 'blog',
    title: 'Managing Chronic Back Pain: A Comprehensive Guide for Naperville Residents',
    excerpt: 'Learn about effective treatment options, lifestyle modifications, and local resources to help you overcome chronic back pain.',
    url: '/blog/chronic-back-pain-guide',
    category: 'Pain Management',
    author: 'Dr. James Nabzdyk',
    readTime: '15 min read'
  },
  {
    type: 'blog',
    title: 'Nutrition Strategies for Optimal Health During Naperville Winters',
    excerpt: 'Discover how proper nutrition can boost your immune system, maintain energy levels, and support overall wellness during winter.',
    url: '/blog/winter-nutrition-guide',
    category: 'Nutrition & Wellness',
    author: 'Lisa Rodriguez, PT',
    readTime: '10 min read'
  },
  // Services
  {
    type: 'service',
    title: 'Back Pain Relief',
    excerpt: 'Comprehensive treatment for chronic back pain using chiropractic care, physical therapy, and pain management techniques.',
    url: '/services/back-pain-relief',
    category: 'Pain Management'
  },
  {
    type: 'service',
    title: 'ADHD Support',
    excerpt: 'Specialized care for children and adults with ADHD, including behavioral strategies and family support.',
    url: '/services/adhd-support',
    category: 'Mental Health'
  },
  {
    type: 'service',
    title: 'Sports Injury Recovery',
    excerpt: 'Expert treatment for sports-related injuries with focus on getting you back to your active lifestyle.',
    url: '/services/sports-injury-recovery',
    category: 'Sports Medicine'
  },
  {
    type: 'service',
    title: 'Physical Therapy',
    excerpt: 'Personalized physical therapy programs to restore mobility, strength, and function.',
    url: '/services/physical-therapy',
    category: 'Rehabilitation'
  },
  {
    type: 'service',
    title: 'Chiropractic Care',
    excerpt: 'Gentle, effective chiropractic treatments for spine health and overall wellness.',
    url: '/services/chiropractic-care',
    category: 'Chiropractic'
  },
  // Pages
  {
    type: 'page',
    title: 'Our Team',
    excerpt: 'Meet the experienced healthcare providers serving the Naperville community.',
    url: '#team'
  },
  {
    type: 'page',
    title: 'Contact Us',
    excerpt: 'Get in touch with Camelback Medical Centers for appointments and questions.',
    url: '#contact'
  }
];

export function SearchComponent({ onNavigate, onNavigateToConditions, onNavigateToBlog, className = "" }: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Search functionality
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.excerpt?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase()) ||
      item.author?.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Limit to 8 results

    setResults(filteredResults);
    setIsOpen(filteredResults.length > 0);
    setSelectedIndex(-1);
  }, [query]);

  // Handle click outside to close
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => Math.max(prev - 1, -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          handleSelectResult(results[selectedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelectResult = (result: SearchResult) => {
    setQuery("");
    setIsOpen(false);
    inputRef.current?.blur();

    // Handle navigation based on result type
    if (result.type === 'blog') {
      // Extract blog post ID from URL or title matching
      const blogPostMap = {
        'Top Tips for Structuring an ADHD-Friendly Routine in Naperville': 1,
        'Managing Chronic Back Pain: A Comprehensive Guide for Naperville Residents': 2,
        'Nutrition Strategies for Optimal Health During Naperville Winters': 3
      };
      const postId = blogPostMap[result.title as keyof typeof blogPostMap] || 1;
      onNavigate?.('blog-post', postId);
    } else if (result.type === 'service') {
      onNavigateToConditions?.();
    } else if (result.type === 'page') {
      if (result.url.startsWith('#')) {
        // Scroll to section on home page
        onNavigate?.('home');
        setTimeout(() => {
          const element = document.querySelector(result.url);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  const clearSearch = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          ref={inputRef}
          placeholder="Search articles, services..."
          className="pl-10 pr-10 bg-gray-50 border-gray-200 focus:bg-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
            onClick={clearSearch}
          >
            <X className="h-3 w-3" />
          </Button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 shadow-lg border border-gray-200">
          <CardContent className="p-0">
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 cursor-pointer border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
                    index === selectedIndex ? 'bg-blue-50' : ''
                  }`}
                  onClick={() => handleSelectResult(result)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {result.type === 'blog' ? (
                        <FileText className="h-4 w-4 text-green-600" />
                      ) : result.type === 'service' ? (
                        <Target className="h-4 w-4 text-blue-600" />
                      ) : (
                        <div className="h-4 w-4 bg-gray-400 rounded-full" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {result.title}
                        </h4>
                        {result.category && (
                          <Badge variant="secondary" className="text-xs">
                            {result.category}
                          </Badge>
                        )}
                      </div>
                      {result.excerpt && (
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          {result.excerpt}
                        </p>
                      )}
                      {result.type === 'blog' && (result.author || result.readTime) && (
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          {result.author && (
                            <div className="flex items-center space-x-1">
                              <User className="h-3 w-3" />
                              <span>{result.author}</span>
                            </div>
                          )}
                          {result.readTime && (
                            <div className="flex items-center space-x-1">
                              <Clock className="h-3 w-3" />
                              <span>{result.readTime}</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {results.length === 8 && (
              <div className="p-3 bg-gray-50 border-t border-gray-200">
                <p className="text-xs text-gray-600 text-center">
                  Showing first 8 results. Be more specific for better results.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}