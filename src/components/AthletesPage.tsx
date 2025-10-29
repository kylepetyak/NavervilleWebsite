import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  Trophy,
  Target,
  Activity,
  Zap,
  Timer,
  TrendingUp,
  Shield,
  Brain,
  Star,
  CheckCircle,
  ArrowRight
} from "lucide-react";

interface AthletesPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;

}

export function AthletesPage({ onNavigateToService, onNavigateToBooking }: AthletesPageProps) {
  const athleteServices = [
    {
      title: "Sports Injury Treatment",
      description: "Rapid recovery from acute and chronic sports injuries",
      icon: Activity,
      services: ["Acute injury care", "Chronic pain management", "Soft tissue therapy", "Joint mobilization"]
    },
    {
      title: "Performance Enhancement",
      description: "Optimize your athletic potential and prevent injuries",
      icon: TrendingUp,
      services: ["Movement analysis", "Strength assessment", "Flexibility programs", "Performance optimization"]
    },
    {
      title: "Recovery & Rehabilitation",
      description: "Advanced recovery protocols to get you back in the game",
      icon: Timer,
      services: ["Recovery planning", "Rehabilitation exercises", "Return-to-sport protocols", "Maintenance programs"]
    },
    {
      title: "Preventive Care",
      description: "Stay ahead of injuries with proactive wellness",
      icon: Shield,
      services: ["Injury prevention", "Pre-season screening", "Biomechanical analysis", "Conditioning support"]
    }
  ];

  const sportsSupported = [
    "Football", "Basketball", "Soccer", "Baseball", "Tennis", "Golf",
    "Running", "Cycling", "Swimming", "Wrestling", "Track & Field", "Gymnastics"
  ];

  const commonInjuries = [
    "Sports Injuries", "Back Pain", "Neck Pain", "Shoulder Pain", "Knee Pain", "Ankle Injuries",
    "Elbow Pain", "Concussions", "Whiplash", "Muscle Strains"
  ];

  const testimonials = [
    {
      quote: "After tearing my ACL, I thought my football career was over. The team at Camelback got me back on the field stronger than ever. I'm now playing Division I football!",
      name: "Marcus J.",
      sport: "High School Football Player",
      rating: 5
    },
    {
      quote: "The performance analysis they did completely changed my game. My golf swing is more consistent, and I've dropped 5 strokes off my handicap.",
      name: "Jennifer S.",
      sport: "Competitive Golfer",
      rating: 5
    },
    {
      quote: "As a marathon runner, I deal with constant aches and pains. Their maintenance program keeps me running pain-free and hitting new personal records.",
      name: "David K.",
      sport: "Marathon Runner",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Peak Performance Starts with Expert Care
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Whether you're a weekend warrior or elite athlete, our sports medicine specialists help you perform at your best, recover faster, and prevent injuries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Performance Assessment
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Trophy className="h-4 w-4 text-yellow-600" />
                  <span>All sports & levels</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Timer className="h-4 w-4 text-green-600" />
                  <span>Rapid recovery</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc3BvcnRzJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzU2NDg4MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Athletic performance and sports medicine"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Athlete Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Sports Medicine Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From injury treatment to performance optimization, we provide complete care for athletes of all levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {athleteServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-blue-600" />
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

      {/* Sports We Support */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Sports We Support
            </h2>
            <p className="text-lg text-gray-600">
              Specialized care for athletes in all sports and competition levels
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportsSupported.map((sport, index) => (
              <Card key={index} className="p-4 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Trophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-700">{sport}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Advantage */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The Camelback Athletic Advantage
            </h2>
            <p className="text-lg text-gray-600">
              Why top athletes choose us for their healthcare needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Precision Diagnosis",
                description: "Advanced assessment techniques to identify exact injury mechanisms"
              },
              {
                icon: Zap,
                title: "Rapid Recovery",
                description: "Evidence-based treatments that get you back to competition faster"
              },
              {
                icon: Brain,
                title: "Performance Focus",
                description: "Not just injury treatment - optimization for peak athletic performance"
              },
              {
                icon: Shield,
                title: "Injury Prevention",
                description: "Proactive strategies to prevent future injuries and maintain longevity"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Athletic Injuries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Athletic Injuries We Treat
            </h2>
            <p className="text-lg text-gray-600">
              From acute trauma to overuse injuries, we treat it all
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonInjuries.map((injury, index) => (
              <Card 
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onNavigateToService && onNavigateToService(injury.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'))}
              >
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {injury}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Athlete Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Local Athletes
            </h2>
            <p className="text-lg text-gray-600">
              Real results from athletes who trust Camelback Medical Centers
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
                    <div className="text-sm text-gray-600">{testimonial.sport}</div>
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Elevate Your Athletic Performance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join elite athletes who trust Camelback Medical Centers for peak performance and injury prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Performance Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call: (630) 416-1151
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}