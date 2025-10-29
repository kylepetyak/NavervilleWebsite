import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SocialShare } from "./SocialShare";
import { 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
  BookOpen,
  Heart,
  MessageCircle
} from "lucide-react";

interface BlogPostDetailProps {
  postId: number;
  onNavigateToBlog: () => void;
  onNavigateToHome: () => void;
}

// Mock detailed blog post data
const blogPostsData = {
  1: {
    id: 1,
    title: "5 Essential Exercises for Back Pain Relief",
    excerpt: "Discover proven exercises that can help alleviate chronic back pain and improve your daily quality of life.",
    content: `
      <p>Back pain affects millions of Americans every day, and if you're one of them, you know how debilitating it can be. The good news is that with the right exercises and consistent practice, you can significantly reduce your pain and improve your quality of life.</p>
      
      <p>At Camelback Medical Centers in Naperville, we've helped thousands of patients overcome chronic back pain through a combination of professional treatment and targeted home exercises. Today, I want to share five essential exercises that have proven effective for our patients.</p>
      
      <h3>1. Cat-Cow Stretch</h3>
      <p>This gentle yoga-inspired movement helps improve flexibility in your spine and can provide immediate relief from stiffness.</p>
      <p><strong>How to do it:</strong></p>
      <ul>
        <li>Start on your hands and knees in a tabletop position</li>
        <li>Slowly arch your back, dropping your belly toward the floor (Cow pose)</li>
        <li>Then round your spine toward the ceiling, tucking your chin to your chest (Cat pose)</li>
        <li>Repeat 10-15 times, moving slowly and mindfully</li>
      </ul>
      
      <h3>2. Knee-to-Chest Stretches</h3>
      <p>This exercise helps stretch the lower back muscles and can reduce tension in the lumbar region.</p>
      <p><strong>Instructions:</strong></p>
      <ul>
        <li>Lie on your back with knees bent and feet flat on the floor</li>
        <li>Bring one knee to your chest, grasping it with both hands</li>
        <li>Hold for 20-30 seconds</li>
        <li>Repeat with the other leg</li>
        <li>For a deeper stretch, bring both knees to your chest simultaneously</li>
      </ul>
      
      <h3>3. Pelvic Tilts</h3>
      <p>Pelvic tilts strengthen your abdominal muscles and help stabilize your lower back.</p>
      <p><strong>Technique:</strong></p>
      <ul>
        <li>Lie on your back with knees bent</li>
        <li>Tighten your abdominal muscles and push your lower back into the floor</li>
        <li>Hold for 5 seconds, then relax</li>
        <li>Repeat 10-15 times</li>
      </ul>
      
      <h3>4. Bird Dog Exercise</h3>
      <p>This exercise improves core stability and strengthens the muscles that support your spine.</p>
      <p><strong>How to perform:</strong></p>
      <ul>
        <li>Start in a tabletop position</li>
        <li>Extend your right arm forward and left leg back simultaneously</li>
        <li>Hold for 5-10 seconds</li>
        <li>Return to starting position and repeat with opposite arm and leg</li>
        <li>Complete 10 repetitions on each side</li>
      </ul>
      
      <h3>5. Bridge Exercise</h3>
      <p>Bridges strengthen your glutes and hamstrings while supporting your lower back.</p>
      <p><strong>Steps:</strong></p>
      <ul>
        <li>Lie on your back with knees bent and feet flat</li>
        <li>Squeeze your glutes and lift your hips off the ground</li>
        <li>Hold for 5-10 seconds</li>
        <li>Lower back down slowly</li>
        <li>Repeat 10-15 times</li>
      </ul>
      
      <h3>Important Considerations</h3>
      <p>While these exercises are generally safe for most people, it's important to remember that every case of back pain is unique. If you experience increased pain during any of these exercises, stop immediately and consult with a healthcare professional.</p>
      
      <p>At our Naperville clinic, we always recommend starting slowly and gradually increasing the intensity and duration of your exercises. Consistency is more important than intensity when it comes to managing back pain.</p>
      
      <h3>When to Seek Professional Help</h3>
      <p>If your back pain persists for more than a few days, or if you experience any of the following symptoms, it's time to schedule an appointment:</p>
      <ul>
        <li>Pain that radiates down your leg</li>
        <li>Numbness or tingling in your legs or feet</li>
        <li>Pain that worsens despite rest and self-care</li>
        <li>Pain accompanied by fever</li>
        <li>Loss of bladder or bowel control</li>
      </ul>
      
      <p>Remember, while these exercises can be incredibly helpful, they're just one part of a comprehensive approach to back pain management. At Camelback Medical Centers, we combine exercise therapy with other proven treatments to help our Naperville patients achieve lasting relief.</p>
    `,
    image: "https://images.unsplash.com/photo-1714929818299-914d3114bcec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluZSUyMGhlYWx0aCUyMGV4ZXJjaXNlfGVufDF8fHx8MTc1NjQ4MzIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    author: {
      name: "Dr. James Nabzdyk DC",
      title: "Doctor of Chiropractic",
      bio: "Dr. Nabzdyk has been serving the Naperville community for over 30 years, specializing in non-invasive pain management and spinal health. He is passionate about educating patients on preventive care and wellness.",
      image: "https://images.unsplash.com/photo-1659353888477-6e6aab941b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjB3cml0aW5nJTIwbWVkaWNhbCUyMG5vdGVzfGVufDF8fHx8MTc1NjQ4MzQxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    date: "Jan 15, 2025",
    readTime: "5 min read",
    category: "Pain Management",
    tags: ["Back Pain", "Exercise", "Physical Therapy", "Wellness"],
    relatedPosts: [2, 4, 6]
  }
  // Add more detailed posts as needed
};

const relatedPostsData = [
  {
    id: 2,
    title: "Understanding Chronic Pain: A Comprehensive Guide",
    image: "https://images.unsplash.com/photo-1749044071257-ca1e6783cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NTY0ODMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Education",
    readTime: "8 min read"
  },
  {
    id: 4,
    title: "Workplace Ergonomics: Preventing Office-Related Injuries",
    image: "https://images.unsplash.com/photo-1637243218672-d338945efdf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBlcmdvbm9taWNzfGVufDF8fHx8MTc1NjQ4MzIzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Prevention",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Managing Stress and Its Impact on Physical Health",
    image: "https://images.unsplash.com/photo-1749044071257-ca1e6783cabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhwYWluJTIwcmVsaWVmJTIwdGhlcmFweXxlbnwxfHx8fDE3NTY0ODMyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Mental Health",
    readTime: "6 min read"
  }
];

export function BlogPostDetail({ postId, onNavigateToBlog, onNavigateToHome }: BlogPostDetailProps) {
  const post = blogPostsData[postId as keyof typeof blogPostsData];
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Button onClick={onNavigateToBlog}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button 
              variant="ghost" 
              onClick={onNavigateToBlog}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Blog</span>
            </Button>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost"
                onClick={onNavigateToHome}
                className="text-gray-700 hover:text-blue-600"
              >
                Home
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Article Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {/* Category Badge */}
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Social Share Buttons */}
            <SocialShare 
              title={post.title}
              showLabels={true}
            />
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <Card className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <ImageWithFallback
                        src={post.author.image}
                        alt={post.author.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {post.author.name}
                      </h4>
                      <p className="text-blue-600 text-sm mb-3">
                        {post.author.title}
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              {/* Table of Contents */}
              <Card className="p-6">
                <h4 className="font-bold text-gray-900 mb-4">In This Article</h4>
                <nav className="space-y-2">
                  <a href="#exercise-1" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    1. Cat-Cow Stretch
                  </a>
                  <a href="#exercise-2" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    2. Knee-to-Chest Stretches
                  </a>
                  <a href="#exercise-3" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    3. Pelvic Tilts
                  </a>
                  <a href="#exercise-4" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    4. Bird Dog Exercise
                  </a>
                  <a href="#exercise-5" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    5. Bridge Exercise
                  </a>
                </nav>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <div className="text-center space-y-4">
                  <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Stay Updated</h4>
                  <p className="text-sm text-gray-600">
                    Get weekly health tips and insights from our Naperville experts.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Subscribe Now
                  </Button>
                </div>
              </Card>

              {/* Schedule Appointment */}
              <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                <div className="text-center space-y-4">
                  <div className="bg-orange-500 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900">Need Help?</h4>
                  <p className="text-sm text-gray-600">
                    Schedule a consultation with our experts.
                  </p>
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm mb-2">
                    $27 New Patient Special
                  </div>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    Schedule Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-lg text-gray-600">
              Continue your health journey with these related topics
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPostsData.map((relatedPost) => (
              <Card 
                key={relatedPost.id}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => window.location.reload()} // In real app, would navigate to the related post
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge 
                    variant="secondary" 
                    className="absolute top-3 left-3 text-xs bg-white/90 text-gray-700"
                  >
                    {relatedPost.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{relatedPost.readTime}</span>
                      </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Take Control of Your Back Pain?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let pain control your life. Our Naperville team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              <BookOpen className="mr-2 h-5 w-5" />
              Browse More Articles
            </Button>
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
    </div>
  );
}