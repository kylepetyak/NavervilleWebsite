import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  Baby,
  Brain,
  Heart,
  Shield,
  Activity,
  Star,
  CheckCircle,
  Users,
  Smile
} from "lucide-react";

interface PediatricsPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;

}

export function PediatricsPage({ onNavigateToService, onNavigateToBooking }: PediatricsPageProps) {
  const pediatricServices = [
    {
      title: "Gentle Pediatric Adjustments",
      description: "Safe, comfortable chiropractic care for children",
      icon: Baby,
      services: ["Gentle spinal adjustments", "Cranial therapy", "Postural assessment", "Growth monitoring"]
    },
    {
      title: "Developmental Support",
      description: "Supporting healthy development milestones",
      icon: Activity,
      services: ["Motor skill development", "Balance improvement", "Coordination training", "Movement patterns"]
    },
    {
      title: "ADHD & Learning Support",
      description: "Natural approaches to focus and attention",
      icon: Brain,
      services: ["Neurofeedback therapy", "Behavioral support", "Sensory integration", "Concentration techniques"]
    },
    {
      title: "Wellness Education",
      description: "Teaching healthy habits from an early age",
      icon: Smile,
      services: ["Nutrition guidance", "Exercise education", "Posture training", "Lifestyle coaching"]
    }
  ];

  const ageGroups = [
    {
      title: "Infants (0-12 months)",
      description: "Gentle care for the littlest patients",
      concerns: ["Colic relief", "Sleep issues", "Breastfeeding difficulties", "Developmental delays"]
    },
    {
      title: "Toddlers (1-3 years)",
      description: "Supporting active exploration and growth",
      concerns: ["Fall injuries", "Walking development", "Balance issues", "Behavioral challenges"]
    },
    {
      title: "School Age (4-12 years)",
      description: "Addressing school and activity-related issues",
      concerns: ["Backpack injuries", "Sports injuries", "Posture problems", "Growing pains"]
    },
    {
      title: "Teenagers (13-18 years)",
      description: "Supporting adolescent health and development",
      concerns: ["Sports injuries", "Text neck", "Scoliosis", "Stress management"]
    }
  ];

  const commonConditions = [
    "ADHD", "Allergies & Asthma", "Headaches", "Sleep Issues", "Sports Injuries", "Growing Pains",
    "Scoliosis", "Ear Infections", "Colic", "Behavioral Issues"
  ];

  const testimonials = [
    {
      quote: "My son's ADHD symptoms improved dramatically after just a few months of care. His teachers noticed the difference in his focus and behavior at school.",
      name: "Maria L.",
      details: "Mom of 8-year-old",
      rating: 5
    },
    {
      quote: "The gentle approach with my infant daughter was amazing. Her colic disappeared, and she finally started sleeping through the night.",
      name: "Jennifer K.",
      details: "First-time Mom",
      rating: 5
    },
    {
      quote: "After my teenager's sports injury, they got him back to playing soccer faster than we expected. The care was professional and kid-friendly.",
      name: "David R.",
      details: "Father of Teen Athlete",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Gentle, Specialized Care for Growing Children
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                From infancy through adolescence, we provide safe, effective healthcare that supports your child's natural development and helps them thrive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Pediatric Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Safe for all ages</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-red-600" />
                  <span>Kid-friendly environment</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBoZWFsdGhjYXJlJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU2NDg4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Child receiving gentle healthcare treatment"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pediatric Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Pediatric Healthcare Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Age-appropriate care that grows with your child's changing needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pediatricServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-green-600" />
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

      {/* Age-Specific Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Care Tailored to Every Age
            </h2>
            <p className="text-lg text-gray-600">
              Specialized approaches for each stage of childhood development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <h3 className="font-bold text-gray-900 mb-2">{group.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="space-y-2">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Common Concerns:</p>
                    <ul className="space-y-1">
                      {group.concerns.map((concern, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center space-x-1">
                          <div className="w-1 h-1 bg-green-400 rounded-full flex-shrink-0"></div>
                          <span>{concern}</span>
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

      {/* Why Choose Pediatric Care */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Pediatric Chiropractic Care?
            </h2>
            <p className="text-lg text-gray-600">
              Natural, safe approaches to children's health and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Gentle",
                description: "Techniques specifically designed for growing bodies"
              },
              {
                icon: Brain,
                title: "Drug-Free Solutions",
                description: "Natural approaches without medication side effects"
              },
              {
                icon: Activity,
                title: "Improved Function",
                description: "Better sleep, behavior, and overall development"
              },
              {
                icon: Users,
                title: "Family-Centered",
                description: "Care that involves and educates the whole family"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pediatric Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Childhood Conditions We Address
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive care for the health challenges children face
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
                  <p className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">
                    {condition}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Naperville Parents Are Saying
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from families who trust us with their children's care
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
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Give Your Child the Best Start in Health
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join Naperville families who trust Camelback Medical Centers for gentle, effective pediatric care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Pediatric Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Call: (630) 416-1151
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}