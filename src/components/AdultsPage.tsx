import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  UserCheck,
  Briefcase,
  Activity,
  Brain,
  Heart,
  Shield,
  Target,
  Clock,
  Star,
  CheckCircle,
  Zap
} from "lucide-react";

interface AdultsPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;

}

export function AdultsPage({ onNavigateToService, onNavigateToBooking }: AdultsPageProps) {
  const adultServices = [
    {
      title: "Chronic Pain Management",
      description: "Long-term solutions for persistent pain conditions",
      icon: Activity,
      services: ["Back pain treatment", "Neck pain relief", "Arthritis management", "Sciatica therapy"]
    },
    {
      title: "Work-Related Injuries",
      description: "Treatment and prevention of workplace injuries",
      icon: Briefcase,
      services: ["Repetitive strain injuries", "Ergonomic assessments", "Desk posture correction", "Workers' comp care"]
    },
    {
      title: "Stress & Lifestyle Support",
      description: "Holistic approaches to modern life challenges",
      icon: Brain,
      services: ["Stress management", "Sleep improvement", "Headache relief", "Wellness coaching"]
    },
    {
      title: "Preventive Healthcare",
      description: "Proactive care to maintain optimal health",
      icon: Shield,
      services: ["Health screenings", "Nutritional guidance", "Exercise programs", "Wellness plans"]
    }
  ];

  const lifeStages = [
    {
      title: "Young Adults (20-30s)",
      description: "Building healthy habits for life",
      focus: ["Career stress management", "Injury prevention", "Posture correction", "Wellness foundation"]
    },
    {
      title: "Mid-Career (30-40s)",
      description: "Balancing work, family, and health",
      focus: ["Work-life balance", "Parenting stress relief", "Energy optimization", "Preventive care"]
    },
    {
      title: "Established Adults (40-50s)",
      description: "Maintaining health through busy years",
      focus: ["Chronic condition management", "Hormone support", "Stress reduction", "Active lifestyle maintenance"]
    },
    {
      title: "Pre-Retirement (50-60s)",
      description: "Preparing for healthy golden years",
      focus: ["Joint health preservation", "Mobility maintenance", "Health optimization", "Activity preparation"]
    }
  ];

  const commonConditions = [
    "Back Pain", "Neck Pain", "Headaches", "Arthritis", "Sciatica", "Work Injuries",
    "Carpal Tunnel", "Stress", "Sleep Issues", "Chronic Fatigue"
  ];

  const testimonials = [
    {
      quote: "After years of chronic back pain from my desk job, I finally found relief. I can work pain-free and enjoy my weekends again without constant discomfort.",
      name: "Michael R.",
      details: "Software Engineer, 42",
      rating: 5
    },
    {
      quote: "The integrated approach to my stress and headaches has been life-changing. I feel more energetic and focused than I have in years.",
      name: "Lisa K.",
      details: "Marketing Director, 38",
      rating: 5
    },
    {
      quote: "As a nurse, I'm on my feet all day. The preventive care program has kept me healthy and injury-free throughout my demanding career.",
      name: "Sandra M.",
      details: "Registered Nurse, 45",
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
                Comprehensive Healthcare for Busy Adults
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From chronic pain relief to preventive wellness, we help Naperville adults stay healthy, active, and pain-free through every stage of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Adult Health Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Briefcase className="h-4 w-4 text-blue-600" />
                  <span>Workers' comp accepted</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsfGVufDF8fHx8MTc1NjQ4ODIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Adult receiving professional healthcare treatment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adult Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Solutions for Adult Life
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Addressing the unique health challenges that come with adult responsibilities and lifestyle demands
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {adultServices.map((service, index) => (
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

      {/* Life Stage-Specific Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Care That Evolves with Your Life
            </h2>
            <p className="text-lg text-gray-600">
              Targeted healthcare approaches for different stages of adult life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {lifeStages.map((stage, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold text-gray-900 mb-2">{stage.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Focus Areas:</p>
                    <ul className="space-y-1">
                      {stage.focus.map((area, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-1">
                          <div className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></div>
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

      {/* Why Adults Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Naperville Adults Trust Camelback
            </h2>
            <p className="text-lg text-gray-600">
              Professional healthcare that fits your busy adult lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Same-day appointments and extended hours for busy professionals"
              },
              {
                icon: Target,
                title: "Results-Focused",
                description: "Efficient treatments that get you back to your life quickly"
              },
              {
                icon: Heart,
                title: "Comprehensive Care",
                description: "Address root causes, not just symptoms for lasting relief"
              },
              {
                icon: Zap,
                title: "Modern Techniques",
                description: "Latest evidence-based treatments and technologies"
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

      {/* Common Adult Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Adult Health Conditions We Address
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive treatment for the most common adult health challenges
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {commonConditions.map((condition, index) => (
              <Card 
                key={index}
                className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onNavigateToService && onNavigateToService(condition.toLowerCase().replace(/\s+/g, '-').replace('&', 'and'))}
              >
                <CardContent className="p-0">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                    {condition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Adult Patient Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Naperville Professionals
            </h2>
            <p className="text-lg text-gray-600">
              Real results from busy adults who prioritized their health
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
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Invest in Your Health Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Naperville adults who have made their health a priority with comprehensive, professional care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Adult Health Consultation
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