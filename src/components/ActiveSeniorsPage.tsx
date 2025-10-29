import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BreadcrumbNav, generateBreadcrumbs } from "./BreadcrumbNav";
import { 
  Clock,
  Activity,
  Heart,
  Shield,
  Brain,
  Bone,
  Star,
  CheckCircle,
  Users,
  Target,
  TrendingUp
} from "lucide-react";

interface ActiveSeniorsPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;
  onNavigateToHome?: () => void;
  onNavigateToWhoWeServe?: () => void;
}

export function ActiveSeniorsPage({ 
  onNavigateToService, 
  onNavigateToBooking, 
  onNavigateToHome, 
  onNavigateToWhoWeServe 
}: ActiveSeniorsPageProps) {
  const seniorServices = [
    {
      title: "Arthritis Management",
      description: "Comprehensive care for joint health and mobility",
      icon: Bone,
      services: ["Joint pain relief", "Mobility improvement", "Inflammation reduction", "Movement therapy"]
    },
    {
      title: "Balance & Fall Prevention",
      description: "Maintaining stability and preventing injuries",
      icon: Shield,
      services: ["Balance training", "Strength building", "Coordination improvement", "Home safety assessment"]
    },
    {
      title: "Active Lifestyle Support",
      description: "Stay engaged in the activities you love",
      icon: Activity,
      services: ["Golf performance", "Walking programs", "Gardening comfort", "Recreational activities"]
    },
    {
      title: "Wellness & Vitality",
      description: "Holistic approaches to healthy aging",
      icon: Heart,
      services: ["Energy enhancement", "Sleep improvement", "Cognitive support", "Nutritional guidance"]
    }
  ];

  const ageGroups = [
    {
      title: "Early Seniors (60-70)",
      description: "Transition to retirement with vitality",
      focus: ["Maintaining work stamina", "Preparing for retirement", "Preventing age-related decline", "Optimizing health"]
    },
    {
      title: "Active Seniors (70-80)",
      description: "Embracing an active retirement lifestyle",
      focus: ["Travel comfort", "Grandparent activities", "Hobby maintenance", "Social engagement"]
    },
    {
      title: "Golden Years (80+)",
      description: "Independence and comfort in later years",
      focus: ["Mobility preservation", "Pain management", "Independence maintenance", "Quality of life"]
    }
  ];

  const commonConcerns = [
    "Arthritis", "Back Pain", "Neck Pain", "Balance Issues", "Mobility Problems", "Sleep Issues",
    "Chronic Pain", "Stiffness", "Fatigue", "Joint Pain"
  ];

  const testimonials = [
    {
      quote: "At 72, I thought my golfing days were over due to back pain. Now I'm playing 18 holes pain-free and even improved my handicap!",
      name: "Robert K.",
      details: "Retired Engineer, 72",
      rating: 5
    },
    {
      quote: "The balance program has given me confidence again. I'm no longer afraid of falling and can enjoy my daily walks with peace of mind.",
      name: "Margaret S.",
      details: "Retired Teacher, 78",
      rating: 5
    },
    {
      quote: "My arthritis was limiting everything I loved doing. The gentle treatments here have given me my independence back.",
      name: "William M.",
      details: "Retired Businessman, 69",
      rating: 5
    }
  ];

  const breadcrumbItems = generateBreadcrumbs(
    'target-group',
    undefined,
    'active-seniors',
    onNavigateToHome,
    undefined,
    undefined,
    onNavigateToWhoWeServe
  );

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Stay Active, Independent, and Pain-Free
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Age is just a number. Our specialized care for active seniors helps you maintain the lifestyle you love while managing the natural changes that come with time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Senior Wellness Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span>Gentle, senior-focused care</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>Flexible appointment times</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmUlMjBzZW5pb3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NjQ4ODIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Active senior enjoying healthy lifestyle"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Senior Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Specialized Care for Active Seniors
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Healthcare solutions designed specifically for the unique needs and goals of active older adults
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seniorServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.services.map((item, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Age-Specific Approaches */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Care That Adapts to Your Stage of Life
            </h2>
            <p className="text-lg text-gray-600">
              Personalized approaches for different phases of your senior years
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold text-gray-900 mb-2">{group.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Key Focus Areas:</p>
                    <ul className="space-y-1">
                      {group.focus.map((area, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-1">
                          <div className="w-1 h-1 bg-amber-400 rounded-full flex-shrink-0"></div>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Senior Care */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Active Aging Advantage
            </h2>
            <p className="text-lg text-gray-600">
              Why seniors choose us for their healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Gentle Techniques",
                description: "Modified treatments appropriate for aging bodies and conditions"
              },
              {
                icon: Brain,
                title: "Holistic Approach",
                description: "Addressing physical, mental, and emotional aspects of healthy aging"
              },
              {
                icon: TrendingUp,
                title: "Functional Goals",
                description: "Focus on maintaining independence and doing what you love"
              },
              {
                icon: Users,
                title: "Experienced Team",
                description: "Providers who understand and respect the senior experience"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-amber-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Senior Concerns */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Senior Health Concerns We Address
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive care for the challenges that come with aging
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonConcerns.map((concern, index) => (
              <Card 
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onNavigateToService && onNavigateToService(concern.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'))}
              >
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-amber-600 transition-colors">
                    {concern}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories from Active Naperville Seniors
            </h2>
            <p className="text-lg text-gray-600">
              Real results from seniors who chose to stay active and healthy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.details}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <SpecialOfferBanner />

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Your Best Years Are Still Ahead
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join active Naperville seniors who are living life to the fullest with expert healthcare support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-amber-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Senior Wellness Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600">
              Call: (630) 416-1151
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}