import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  Users,
  Baby,
  Heart,
  UserCheck,
  Clock,
  Shield,
  Target,
  Activity,
  Brain,
  Stethoscope,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface FamiliesPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;

}

export function FamiliesPage({ onNavigateToService, onNavigateToBooking }: FamiliesPageProps) {
  const familyServices = [
    {
      title: "Pediatric Care",
      description: "Gentle, specialized care for infants and children",
      icon: Baby,
      services: ["Gentle adjustments", "ADHD support", "Developmental wellness", "Injury prevention"]
    },
    {
      title: "Adult Healthcare",
      description: "Comprehensive solutions for busy parents and adults",
      icon: UserCheck,
      services: ["Chronic pain relief", "Work injury treatment", "Stress management", "Preventive care"]
    },
    {
      title: "Senior Care",
      description: "Maintaining mobility and independence for grandparents",
      icon: Clock,
      services: ["Arthritis management", "Balance improvement", "Fall prevention", "Age-related pain relief"]
    },
    {
      title: "Pregnancy Support",
      description: "Safe, effective care throughout pregnancy",
      icon: Heart,
      services: ["Prenatal adjustments", "Postpartum recovery", "Pregnancy wellness", "Natural pain relief"]
    }
  ];

  const commonConditions = [
    "Back Pain", "Neck Pain", "Headaches", "ADHD", "Allergies & Asthma", "Sleep Issues",
    "Sports Injuries", "Arthritis", "Sciatica", "Car Accident Injuries"
  ];

  const testimonials = [
    {
      quote: "Finally, healthcare that works for our whole family. My kids actually look forward to their visits, and my husband's back pain is finally under control.",
      name: "Sarah M.",
      location: "Naperville Family",
      rating: 5
    },
    {
      quote: "Three generations of our family come here. Dr. James treats everyone from my 5-year-old grandson to my 75-year-old mother with equal care and expertise.",
      name: "Jennifer K.",
      location: "Multi-generational Patient",
      rating: 5
    },
    {
      quote: "The convenience of having all our family's healthcare needs met in one place is incredible. Same-day appointments saved us when my teenager got injured at soccer.",
      name: "Mike and Lisa R.",
      location: "Naperville Parents",
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
                Complete Family Healthcare in Naperville
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From newborn wellness to senior care, we provide comprehensive healthcare solutions for every member of your family under one roof.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Family Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Same-day appointments</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>All ages welcome</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family receiving healthcare together"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Solutions for Every Family Member
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Age-appropriate care that grows with your family's changing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {familyServices.map((service, index) => (
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

      {/* Why Families Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Naperville Families Trust Camelback
            </h2>
            <p className="text-lg text-gray-600">
              More than just healthcare – we're your family's wellness partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe for All Ages",
                description: "Gentle, age-appropriate treatments from infants to seniors"
              },
              {
                icon: Target,
                title: "Family-Centered Care",
                description: "Coordinated treatment plans that consider the whole family"
              },
              {
                icon: Activity,
                title: "Convenient Scheduling",
                description: "Same-day appointments and flexible scheduling for busy families"
              },
              {
                icon: Heart,
                title: "Trusted Experience",
                description: "Over 30 years serving Naperville families with compassionate care"
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

      {/* Common Family Conditions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Common Conditions We Treat for Families
            </h2>
            <p className="text-lg text-gray-600">
              From childhood injuries to adult chronic pain, we've got your family covered
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

      {/* Family Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Naperville Families Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from families just like yours
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
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
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
            Ready to Give Your Family the Care They Deserve?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Naperville families who trust Camelback Medical Centers for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Family Consultation
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