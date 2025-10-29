import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Users,
  Baby,
  Heart,
  Activity,
  Clock,
  Shield,
  Target,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Stethoscope
} from "lucide-react";

interface WhoWeServePageProps {
  onNavigateToTargetGroup?: (targetGroup: string) => void;
  onNavigateToBooking?: () => void;
}

export function WhoWeServePage({ onNavigateToTargetGroup, onNavigateToBooking }: WhoWeServePageProps) {
  const targetGroups = [
    {
      id: 'families',
      title: 'Families',
      subtitle: 'Complete Healthcare for Every Family Member',
      description: 'From newborn wellness to senior care, we provide comprehensive healthcare solutions for your entire family under one roof.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['All ages welcome', 'Same-day appointments', 'Family care plans', 'Coordinated treatment'],
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'athletes',
      title: 'Athletes',
      subtitle: 'Peak Performance & Injury Recovery',
      description: 'Specialized sports medicine and performance optimization for athletes of all levels, from weekend warriors to professionals.',
      icon: Trophy,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBtZWRpY2luZSUyMGF0aGxldGVzfGVufDF8fHx8MTc1NjQ4ODIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Sports injury treatment', 'Performance optimization', 'Injury prevention', 'Quick recovery protocols'],
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'pregnant-moms',
      title: 'Pregnant Moms',
      subtitle: 'Safe Care Throughout Your Pregnancy Journey',
      description: 'Gentle, safe treatments to support you and your baby through pregnancy, delivery, and postpartum recovery.',
      icon: Heart,
      image: 'https://images.unsplash.com/photo-1544024994-f73b5b9ad24a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMG1vbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU2NDg4MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Prenatal adjustments', 'Labor preparation', 'Postpartum recovery', 'Natural pain relief'],
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      buttonColor: 'bg-pink-600 hover:bg-pink-700'
    },
    {
      id: 'pediatrics',
      title: 'Pediatrics',
      subtitle: 'Gentle Care for Growing Bodies',
      description: 'Specialized pediatric treatments designed for infants, children, and teenagers to support healthy development.',
      icon: Baby,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NjQ4ODIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Gentle adjustments', 'ADHD support', 'Developmental wellness', 'Injury prevention'],
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      buttonColor: 'bg-yellow-600 hover:bg-yellow-700'
    },
    {
      id: 'adults',
      title: 'Adults',
      subtitle: 'Comprehensive Adult Healthcare Solutions',
      description: 'Evidence-based treatments for working adults dealing with chronic pain, stress, and work-related injuries.',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsfGVufDF8fHx8MTc1NjQ4ODIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Chronic pain relief', 'Work injury treatment', 'Stress management', 'Preventive care'],
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      buttonColor: 'bg-purple-600 hover:bg-purple-700'
    },
    {
      id: 'active-seniors',
      title: 'Active Seniors',
      subtitle: 'Maintaining Independence & Mobility',
      description: 'Specialized care focused on helping seniors stay active, mobile, and independent throughout their golden years.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBoZWFsdGhjYXJlJTIwYWN0aXZlfGVufDF8fHx8MTc1NjQ4ODIxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      highlights: ['Arthritis management', 'Balance improvement', 'Fall prevention', 'Age-related pain relief'],
      bgColor: 'bg-teal-50',
      iconColor: 'text-teal-600',
      buttonColor: 'bg-teal-600 hover:bg-teal-700'
    }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Specialized Expertise',
      description: 'Tailored treatments for each demographic\'s unique health needs and challenges'
    },
    {
      icon: Target,
      title: 'Personalized Care Plans',
      description: 'Age-appropriate, condition-specific treatment protocols for optimal outcomes'
    },
    {
      icon: Activity,
      title: 'Comprehensive Services',
      description: 'From prevention to treatment to recovery - we cover every stage of health'
    },
    {
      icon: Users,
      title: 'Family-Centered Approach',
      description: 'Coordinated care that considers the whole family ecosystem'
    }
  ];

  const stats = [
    { number: '30+', label: 'Years of Experience' },
    { number: '10,000+', label: 'Patients Treated' },
    { number: '95%', label: 'Patient Satisfaction' },
    { number: '24/7', label: 'Emergency Support' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Healthcare Designed for <span className="text-blue-200">Who You Are</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8">
              Specialized care tailored to your life stage, activity level, and health goals. 
              Because everyone deserves healthcare that understands their unique needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={onNavigateToBooking}
              >
                Find Your Specialized Care
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Call: (630) 416-1151
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your specialized care pathway designed specifically for your demographic and health needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <Card key={group.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden">
                <div className={`${group.bgColor} p-6 transition-all duration-300 group-hover:scale-105`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`bg-white rounded-full w-12 h-12 flex items-center justify-center`}>
                      <group.icon className={`h-6 w-6 ${group.iconColor}`} />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{group.title}</h3>
                  <p className="text-sm font-medium text-gray-700 mb-3">{group.subtitle}</p>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <ImageWithFallback
                      src={group.image}
                      alt={`${group.title} healthcare services`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-height-relaxed">
                    {group.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {group.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${group.buttonColor} transition-all duration-300`}
                    onClick={() => onNavigateToTargetGroup && onNavigateToTargetGroup(group.id)}
                  >
                    Learn More About {group.title} Care
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Specialized Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Specialized Care?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              One size doesn't fit all in healthcare. Our demographic-specific approach ensures you get exactly the care you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
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

      {/* Success Stories Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Every Demographic
            </h2>
            <p className="text-lg text-gray-600">
              Real results from patients just like you
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Finally found a doctor who understands the unique challenges of treating pregnant women. Safe, effective care throughout my entire pregnancy.",
                name: "Maria S.",
                demographic: "Expecting Mother",
                rating: 5
              },
              {
                quote: "As a competitive runner, I needed someone who understood sports injuries. Back to training faster than ever thanks to their specialized approach.",
                name: "David M.",
                demographic: "Marathon Runner",
                rating: 5
              },
              {
                quote: "At 72, I thought my mobility issues were just part of aging. Wrong! Feeling 20 years younger with their senior-focused treatments.",
                name: "Eleanor K.",
                demographic: "Active Senior",
                rating: 5
              }
            ].map((testimonial, index) => (
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
                    <div className="text-sm text-gray-600">{testimonial.demographic}</div>
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Experience Specialized Care?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Stop settling for generic healthcare. Get the specialized attention you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={onNavigateToBooking}
            >
              Schedule Your Consultation
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