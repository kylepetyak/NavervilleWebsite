import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { downloadPDF } from "./PDFGenerator";
import { 
  Clock,
  User,
  Calendar,
  Share2,
  Download,
  Search,
  MapPin,
  Phone,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Target,
  Heart,
  Users,
  CheckCircle2,
  Quote,
  FileText,
  Mail
} from "lucide-react";

interface BlogPostTemplateProps {
  postId?: number;
  onNavigateToHome: () => void;
  onNavigateToBlog: () => void;
}

// Table of contents for different posts
const tableOfContentsData = {
  1: [
    { id: "understanding-adhd", title: "Understanding ADHD in Daily Life", level: 2 },
    { id: "morning-routine", title: "Creating Structure in Morning Routines", level: 2 },
    { id: "school-preparation", title: "School Preparation Strategies", level: 3 },
    { id: "breakfast-tips", title: "Nutritional Foundation", level: 3 },
    { id: "work-blocks", title: "Implementing Focused Work Blocks", level: 2 },
    { id: "break-activities", title: "Strategic Break Activities", level: 3 },
    { id: "evening-wind-down", title: "Evening Wind-Down Protocols", level: 2 },
    { id: "weekly-planning", title: "Weekly Planning & Flexibility", level: 2 }
  ],
  2: [
    { id: "understanding-back-pain", title: "Understanding Chronic Back Pain", level: 2 },
    { id: "common-causes", title: "Common Causes in Active Adults", level: 2 },
    { id: "workplace-factors", title: "Workplace Contributing Factors", level: 3 },
    { id: "sports-injuries", title: "Sports-Related Back Issues", level: 3 },
    { id: "treatment-options", title: "Comprehensive Treatment Approaches", level: 2 },
    { id: "chiropractic-care", title: "Chiropractic Treatment Benefits", level: 3 },
    { id: "physical-therapy", title: "Physical Therapy Integration", level: 3 },
    { id: "lifestyle-changes", title: "Lifestyle Modifications for Prevention", level: 2 },
    { id: "when-to-seek-help", title: "When to Seek Professional Help", level: 2 }
  ],
  3: [
    { id: "winter-nutrition", title: "Boosting Immunity During Illinois Winters", level: 2 },
    { id: "immune-foods", title: "Immune-Supporting Foods", level: 2 },
    { id: "vitamin-d", title: "Addressing Vitamin D Deficiency", level: 3 },
    { id: "seasonal-produce", title: "Winter Seasonal Produce", level: 3 },
    { id: "meal-planning", title: "Strategic Winter Meal Planning", level: 2 },
    { id: "hydration", title: "Staying Hydrated in Dry Weather", level: 3 },
    { id: "supplement-basics", title: "Essential Winter Supplements", level: 2 },
    { id: "exercise-nutrition", title: "Fueling Indoor Winter Workouts", level: 2 }
  ]
};

const relatedPosts = [
  {
    id: 1,
    title: "Managing ADHD Symptoms Through Nutrition",
    excerpt: "Discover how dietary choices can support focus and attention...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbnV0cml0aW9uJTIwaGVhbHRoeSUyMGRpZXR8ZW58MXx8fHwxNzU2NDg0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "8 min read",
    category: "Nutrition"
  },
  {
    id: 2,
    title: "Exercise Benefits for ADHD Management",
    excerpt: "Physical activity as a powerful tool for improving focus...",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVyY2lzZSUyMGZpdG5lc3MlMjB3b3Jrb3V0fGVufDF8fHx8MTc1NjQ4NDk4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "6 min read",
    category: "Wellness"
  },
  {
    id: 3,
    title: "Sleep Strategies for ADHD Children",
    excerpt: "Creating bedtime routines that promote better rest...",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHNsZWVwaW5nJTIwYmVkcm9vbXxlbnwxfHx8fDE3NTY0ODQ5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "10 min read",
    category: "Sleep Health"
  }
];

const faqData = {
  1: [
    {
      question: "How long does it take to establish a new ADHD routine?",
      answer: "Most families see initial improvements within 2-3 weeks of consistent implementation. However, fully establishing new habits typically takes 6-8 weeks. The key is starting small and building gradually while maintaining consistency."
    },
    {
      question: "What if my child resists the new routine?",
      answer: "Resistance is normal and expected. Start with just one small change at a time, involve your child in creating the routine, and use visual schedules or reward systems. Our ADHD specialists can help develop personalized strategies that work for your family's unique situation."
    },
    {
      question: "Should routines be the same on weekends?",
      answer: "While some flexibility is healthy, maintaining core elements like wake-up times and meal schedules helps reinforce the routine. You can relax certain aspects while keeping the fundamental structure intact."
    },
    {
      question: "How do I handle disruptions to the routine?",
      answer: "Build flexibility into your routine from the start. Have backup plans for common disruptions and teach your child that routines can be adapted when needed. The goal is structure, not rigidity."
    },
    {
      question: "When should I seek professional help?",
      answer: "Consider professional support if your child continues to struggle significantly with daily routines despite consistent efforts, or if ADHD symptoms are impacting school performance, family relationships, or self-esteem."
    }
  ],
  2: [
    {
      question: "How long does it take to see results from back pain treatment?",
      answer: "Many patients experience some relief within the first few visits, typically 1-2 weeks. However, full recovery depends on the severity and underlying cause of your condition. Most patients see significant improvement within 4-6 weeks of consistent treatment."
    },
    {
      question: "Is chiropractic treatment safe for chronic back pain?",
      answer: "Yes, chiropractic care is generally very safe when performed by a licensed professional. Our comprehensive evaluation ensures that treatment is appropriate for your specific condition. We'll discuss any risks and benefits before beginning treatment."
    },
    {
      question: "Should I continue exercising with back pain?",
      answer: "This depends on the type and severity of your pain. Gentle movement is often beneficial, but high-impact activities should be avoided until properly evaluated. We'll provide specific exercise recommendations based on your condition."
    },
    {
      question: "When should I consider surgery for back pain?",
      answer: "Surgery is typically considered only when conservative treatments haven't provided relief after several months, or in cases of severe neurological symptoms. Most back pain can be effectively managed without surgery."
    },
    {
      question: "Can stress contribute to back pain?",
      answer: "Absolutely. Stress can cause muscle tension and inflammation, contributing to back pain. Our holistic approach addresses both physical and lifestyle factors that may be affecting your condition."
    }
  ],
  3: [
    {
      question: "Do I really need supplements during winter?",
      answer: "While a balanced diet should provide most nutrients, certain supplements like Vitamin D3, Vitamin C, and zinc can be beneficial during winter months when sun exposure is limited and cold/flu season peaks. We recommend consulting with our nutrition specialists for personalized recommendations."
    },
    {
      question: "How can I maintain my energy levels during short winter days?",
      answer: "Focus on protein-rich meals, complex carbohydrates, and foods high in B vitamins. Regular meal timing, adequate hydration, and light exposure when possible also help maintain energy levels during darker months."
    },
    {
      question: "Are there specific foods to boost immunity?",
      answer: "Yes! Foods rich in vitamin C (citrus fruits, bell peppers), zinc (nuts, seeds), and antioxidants (berries, leafy greens) can support immune function. Fermented foods like yogurt and kefir also promote gut health, which is crucial for immunity."
    },
    {
      question: "How much water should I drink in winter?",
      answer: "Despite cooler temperatures, you still need adequate hydration. Aim for 8-10 glasses daily, adjusting for activity level and indoor heating which can be dehydrating. Herbal teas and warm broths can contribute to fluid intake."
    },
    {
      question: "Should I change my diet significantly in winter?",
      answer: "Minor adjustments can be beneficial - incorporating warming foods, seasonal produce, and immune-supporting nutrients. However, major dietary changes should be gradual and ideally guided by a nutrition professional."
    }
  ]
};

// Mock blog posts data that would come from CMS
const blogPostsData = {
  1: {
    title: "Top Tips for Structuring an ADHD-Friendly Routine in Naperville",
    summary: "Discover practical, evidence-based strategies to create daily structures that support focus, reduce overwhelm, and help your family thrive with ADHD in our vibrant Naperville community.",
    category: "ADHD Support",
    author: "Dr. Sarah Mitchell",
    authorTitle: "Child Development Specialist",
    authorImage: "https://images.unsplash.com/photo-1606619788433-2ba22e49d498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwZG9jdG9yJTIwaGVhZHNob3R8ZW58MXx8fHwxNzU2NDg0OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    publishDate: "January 15, 2025",
    readTime: "12 min read",
    featuredImage: "https://images.unsplash.com/photo-1648171124585-fc179fe7f108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBREhEJTIwY2hpbGRyZW4lMjBkYWlseSUyMHJvdXRpbmUlMjBzY2hlZHVsZXxlbnwxfHx8fDE3NTY0ODQ5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    altText: "Child organizing daily routine schedule on wall calendar - ADHD management strategies",
    ctaText: "Explore ADHD Care in Naperville"
  },
  2: {
    title: "Managing Chronic Back Pain: A Comprehensive Guide for Naperville Residents",
    summary: "Learn about effective treatment options, lifestyle modifications, and local resources to help you overcome chronic back pain and return to an active lifestyle in Naperville.",
    category: "Pain Management",
    author: "Dr. James Nabzdyk",
    authorTitle: "Doctor of Chiropractic",
    authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    publishDate: "January 10, 2025", 
    readTime: "15 min read",
    featuredImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMGNoaXJvcHJhY3RpY3xlbnwxfHx8fDE3NTY0ODUwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    altText: "Person receiving chiropractic treatment for back pain relief",
    ctaText: "Explore Back Pain Treatment"
  },
  3: {
    title: "Nutrition Strategies for Optimal Health During Naperville Winters",
    summary: "Discover how proper nutrition can boost your immune system, maintain energy levels, and support overall wellness during the challenging winter months in Illinois.",
    category: "Nutrition & Wellness",
    author: "Lisa Rodriguez, PT",
    authorTitle: "Lead Physical Therapist & Wellness Coach",
    authorImage: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    publishDate: "January 8, 2025",
    readTime: "10 min read", 
    featuredImage: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwbnV0cml0aW9uJTIwaGVhbHRoeSUyMGRpZXR8ZW58MXx8fHwxNzU2NDg0OTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    altText: "Healthy winter nutrition foods including vegetables and fruits",
    ctaText: "Learn About Nutrition Counseling"
  }
};

export function BlogPostTemplate({ postId = 1, onNavigateToHome, onNavigateToBlog }: BlogPostTemplateProps) {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Get the current post data or default to post 1
  const currentPost = blogPostsData[postId as keyof typeof blogPostsData] || blogPostsData[1];
  const tableOfContents = tableOfContentsData[postId as keyof typeof tableOfContentsData] || tableOfContentsData[1];
  const faqItems = faqData[postId as keyof typeof faqData] || faqData[1];

  const handleTableOfContentsClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{currentPost.publishDate}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{currentPost.readTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{currentPost.author}</span>
              </div>
            </div>

            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800">
                {currentPost.category}
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {currentPost.title}
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {currentPost.summary}
              </p>
            </div>

            <div className="pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                <Target className="mr-2 h-5 w-5" />
                {currentPost.ctaText}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Image */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <ImageWithFallback
              src={currentPost.featuredImage}
              alt={currentPost.altText}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
              Alt: {currentPost.altText}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area - Two Column Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-10 gap-12">
            
            {/* Left Column - Main Content (70%) */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Table of Contents */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    <BookOpen className="h-5 w-5" />
                    <span>Table of Contents</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleTableOfContentsClick(item.id)}
                      className={`block w-full text-left py-2 px-3 rounded hover:bg-blue-100 transition-colors ${
                        item.level === 2 ? 'font-medium text-blue-800' : 'text-blue-700 text-sm ml-4'
                      }`}
                    >
                      {item.level === 3 && <span className="mr-2">•</span>}
                      {item.title}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Rich Text Content Area */}
              <div className="prose prose-lg max-w-none">
                
                {postId === 1 ? (
                  <div id="understanding-adhd" className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Understanding ADHD in Daily Life
                    </h2>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Living with ADHD in Naperville means navigating the unique challenges of executive function 
                      while taking advantage of our community's excellent resources. From North Central College's 
                      learning support services to the calming influence of the Riverwalk, our city offers many 
                      tools to support neurodivergent families.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      The key to success lies in creating predictable structures that work with ADHD brains, 
                      not against them. This means building in flexibility, using visual cues, and celebrating 
                      small wins along the way.
                    </p>

                    {/* Pull Quote */}
                    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-8">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-xl text-gray-800 font-medium italic">
                        "Start small, celebrate wins. Every positive routine you establish creates a foundation 
                        for the next success."
                      </blockquote>
                      <cite className="block text-sm text-gray-600 mt-2">— Dr. Sarah Mitchell, Child Development Specialist</cite>
                    </div>
                  </div>
                ) : postId === 2 ? (
                  <div id="understanding-back-pain" className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Understanding Chronic Back Pain
                    </h2>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Chronic back pain affects millions of Americans, and here in Naperville, our active lifestyle 
                      can sometimes contribute to or complicate back issues. Whether you're walking the Riverwalk, 
                      playing tennis at Centennial Beach, or commuting to Chicago, back pain can significantly 
                      impact your quality of life.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      The good news is that most back pain is treatable with the right approach. Understanding 
                      the root cause of your pain is the first step toward effective treatment and long-term relief.
                    </p>

                    {/* Pull Quote */}
                    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-8">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-xl text-gray-800 font-medium italic">
                        "Most back pain is not a life sentence. With proper diagnosis and treatment, 
                        you can return to the activities you love."
                      </blockquote>
                      <cite className="block text-sm text-gray-600 mt-2">— Dr. James Nabzdyk, Doctor of Chiropractic</cite>
                    </div>
                  </div>
                ) : (
                  <div id="winter-nutrition" className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Boosting Immunity During Illinois Winters
                    </h2>
                    
                    <p className="text-gray-700 leading-relaxed">
                      Naperville winters can be challenging for maintaining optimal health. The combination of 
                      cold temperatures, reduced sunlight, and holiday indulgences can take a toll on our 
                      immune systems and overall wellness. However, strategic nutrition choices can help 
                      you thrive throughout the winter months.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                      From the farmers markets at Naper Settlement to the excellent grocery stores throughout 
                      our community, Naperville residents have access to fresh, nutritious foods year-round. 
                      The key is knowing how to use nutrition as medicine during the colder months.
                    </p>

                    {/* Pull Quote */}
                    <div className="bg-gray-50 border-l-4 border-blue-600 p-6 my-8">
                      <Quote className="h-8 w-8 text-blue-600 mb-4" />
                      <blockquote className="text-xl text-gray-800 font-medium italic">
                        "Food is medicine. The right nutrients can strengthen your immune system 
                        and keep you energized all winter long."
                      </blockquote>
                      <cite className="block text-sm text-gray-600 mt-2">— Lisa Rodriguez, Physical Therapist & Wellness Coach</cite>
                    </div>
                  </div>
                )}

                <div id="morning-routine" className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Creating Structure in Morning Routines
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Morning routines set the tone for the entire day. For children with ADHD, a well-structured 
                    morning can mean the difference between a smooth day and constant struggles. Here's how 
                    Naperville families are finding success:
                  </p>

                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Consistent Wake-up Time:</strong> Even on weekends, try to stay within 30 minutes of the school schedule</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Visual Schedule:</strong> Use pictures or charts to show each step of the morning routine</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Prepare the Night Before:</strong> Lay out clothes, pack backpacks, prepare lunch</span>
                    </li>
                  </ul>

                  <h3 id="school-preparation" className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    School Preparation Strategies
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Naperville's excellent school districts offer many resources for students with ADHD, 
                    but preparation at home remains crucial. Work with your child's teachers to create 
                    consistent expectations between home and school environments.
                  </p>

                  <h3 id="breakfast-tips" className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    Nutritional Foundation
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    A protein-rich breakfast can significantly impact focus and attention throughout the day. 
                    Consider options like Greek yogurt with berries, eggs with whole grain toast, or a 
                    smoothie with protein powder.
                  </p>
                </div>

                <div id="work-blocks" className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Implementing Focused Work Blocks
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    The Pomodoro Technique, adapted for ADHD minds, can be incredibly effective. Start with 
                    shorter blocks (15-20 minutes) and gradually increase as tolerance builds. Use timers, 
                    background music, or apps to maintain focus during work periods.
                  </p>

                  <h3 id="break-activities" className="text-xl font-bold text-gray-900 mt-8 mb-4">
                    Strategic Break Activities
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    Not all breaks are created equal. Physical movement, deep breathing, or brief outdoor time 
                    can reset attention better than screen-based activities. Take advantage of Naperville's 
                    beautiful parks and walking trails when possible.
                  </p>
                </div>

                <div id="evening-wind-down" className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Evening Wind-Down Protocols
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    A calm evening routine promotes better sleep, which is crucial for ADHD management. 
                    Establish screen-free time at least one hour before bed, and consider calming activities 
                    like reading, gentle stretching, or listening to soft music.
                  </p>
                </div>

                <div id="weekly-planning" className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Weekly Planning & Flexibility
                  </h2>

                  <p className="text-gray-700 leading-relaxed">
                    Sunday planning sessions can set the week up for success. Review the upcoming schedule, 
                    prepare materials needed for activities, and discuss any changes to routine. Remember, 
                    the goal is supportive structure, not rigid perfection.
                  </p>
                </div>
              </div>

              {/* Download Section */}
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-green-900">
                    <Download className="h-5 w-5" />
                    <span>Free Resources for ADHD Families</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-800">
                    Download our professionally designed templates to help implement these strategies at home.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 flex items-center justify-center space-x-2"
                      onClick={() => downloadPDF('morning-routine-kids', 'ADHD_Morning_Routine_for_Kids.pdf')}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Download Morning Routine (Kids PDF)</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-green-600 text-green-700 hover:bg-green-50 flex items-center justify-center space-x-2"
                      onClick={() => downloadPDF('work-block-template-adults', 'ADHD_Work_Block_Template_for_Adults.pdf')}
                    >
                      <FileText className="h-4 w-4" />
                      <span>Download Work Block Template (Adults PDF)</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Inline CTA Block */}
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Need Tailored Support for Your Family?
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Every child with ADHD is unique. Our Naperville specialists can help create 
                    personalized strategies that work for your specific situation and challenges.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                      <Heart className="mr-2 h-5 w-5" />
                      See Our ADHD Care Program
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book an Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Accordion */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                  <p className="text-gray-600">
                    {postId === 1 ? (
                      "Common concerns from Naperville families about ADHD routines"
                    ) : postId === 2 ? (
                      "Common questions about chronic back pain treatment and management"
                    ) : (
                      "Common questions about winter nutrition and immune support"
                    )}
                  </p>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqItems.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>

              {/* Author Box */}
              <Card className="bg-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <ImageWithFallback
                      src={currentPost.authorImage}
                      alt={currentPost.author}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{currentPost.author}</h3>
                      <p className="text-blue-600 mb-3">{currentPost.authorTitle}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {postId === 1 ? (
                          "Dr. Mitchell has been supporting families in the Naperville area for over 12 years, specializing in ADHD, anxiety, and learning differences. She's a frequent speaker at District 203 and 204 parent education events and believes strongly in community-based family support."
                        ) : postId === 2 ? (
                          "Dr. Nabzdyk has been serving the Naperville community for over 30 years, helping thousands of patients find relief from chronic pain. He's passionate about educating families on wellness and takes a holistic approach to chiropractic care."
                        ) : (
                          "Lisa Rodriguez is a licensed physical therapist with specialized training in wellness coaching. She volunteers at Naperville youth sports leagues and is dedicated to helping families achieve optimal health through movement and nutrition."
                        )}
                      </p>
                      <div className="flex items-center space-x-2 mt-4 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Published: {currentPost.publishDate}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Sidebar (30%) */}
            <div className="lg:col-span-3 space-y-8">
              
              {/* Search Bar */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Search Our Blog</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search health topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Related Articles</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {relatedPosts.map((post) => (
                    <div key={post.id} className="group cursor-pointer">
                      <div className="flex space-x-4">
                        <ImageWithFallback
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <Badge variant="secondary" className="text-xs mb-2">
                            {post.category}
                          </Badge>
                          <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-xs text-gray-500 mt-2">
                            <Clock className="h-3 w-3 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      {post.id < relatedPosts.length && <Separator className="mt-6" />}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Newsletter Signup Widget */}
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-900">
                    Stay Updated on Family Health
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-orange-800 text-sm mb-4">
                    Get weekly tips and resources for managing ADHD, nutrition advice, 
                    and updates from our Naperville clinic.
                  </p>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="border-orange-300 focus:border-orange-500"
                    />
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Subscribe to Newsletter
                    </Button>
                  </div>
                  <p className="text-xs text-orange-700 mt-2">
                    No spam. Unsubscribe anytime.
                  </p>
                </CardContent>
              </Card>

              {/* CTA Widget */}
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-blue-100" />
                  <h3 className="font-bold mb-2">Ready for Personalized Care?</h3>
                  <p className="text-blue-100 text-sm mb-4">
                    Schedule a consultation with our ADHD specialists in Naperville.
                  </p>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                    <Phone className="h-4 w-4 mr-2" />
                    Book Appointment
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA + Local Trust Panel */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - CTA */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Support Your Family's ADHD Journey?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Join hundreds of Naperville families who have found success with our 
                comprehensive ADHD support programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Users className="mr-2 h-5 w-5" />
                  Explore ADHD Care in Naperville
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (630) 555-0123
                </Button>
              </div>
            </div>

            {/* Right Side - Local Trust Panel */}
            <Card className="bg-white text-gray-900">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Camelback Medical Centers - Naperville
                </h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Our Location</p>
                      <p className="text-sm text-gray-600">123 Main Street, Naperville, IL 60540</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Call Us Today</p>
                      <p className="text-sm text-gray-600">(630) 555-0123</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Office Hours</p>
                      <p className="text-sm text-gray-600">Mon-Fri: 8AM-7PM | Sat: 9AM-2PM</p>
                    </div>
                  </div>
                </div>

                {/* Small Map Placeholder */}
                <div className="bg-gray-100 rounded-lg p-8 text-center mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1642290607678-756699d8460a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXBlcnZpbGxlJTIwaWxsaW5vaXMlMjBkb3dudG93bnxlbnwxfHx8fDE3NTY0ODQ5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Naperville downtown location"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="flex items-center justify-center mt-3 text-sm text-gray-600">
                    <ExternalLink className="h-4 w-4 mr-1" />
                    <span>View on Google Maps</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Your Visit Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Camelback Medical Centers - Naperville. Specialized ADHD care for families in DuPage County.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This article is for educational purposes only and does not replace professional medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
}