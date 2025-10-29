import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import { 
  Heart,
  Baby,
  Shield,
  Activity,
  Star,
  CheckCircle,
  Clock,
  Users
} from "lucide-react";

interface PregnantMomsPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;

}

export function PregnantMomsPage({ onNavigateToService, onNavigateToBooking }: PregnantMomsPageProps) {
  const pregnancyServices = [
    {
      title: "Prenatal Chiropractic Care",
      description: "Safe, gentle adjustments throughout pregnancy",
      icon: Heart,
      services: ["Webster technique", "Pelvic alignment", "Round ligament relief", "Sciatica treatment"]
    },
    {
      title: "Pregnancy Wellness",
      description: "Comprehensive support for expectant mothers",
      icon: Activity,
      services: ["Exercise guidance", "Nutrition counseling", "Sleep improvement", "Stress management"]
    },
    {
      title: "Labor Preparation",
      description: "Optimize your body for delivery",
      icon: Shield,
      services: ["Pelvic positioning", "Birth preparation", "Natural pain relief", "Comfort techniques"]
    },
    {
      title: "Postpartum Recovery",
      description: "Support for new mothers after delivery",
      icon: Users,
      services: ["Recovery planning", "Diastasis recti care", "Breastfeeding support", "Energy restoration"]
    }
  ];

  const commonConcerns = [
    "Back Pain", "Sciatica", "Hip Pain", "Round Ligament Pain", "Headaches", "Sleep Issues",
    "Nausea", "Fatigue", "Pelvic Pain", "Postural Changes"
  ];

  const testimonials = [
    {
      quote: "The prenatal care I received made such a difference in my pregnancy. My back pain disappeared, and I felt so much more comfortable throughout my third trimester.",
      name: "Amanda R.",
      details: "Mom of 2, Naperville",
      rating: 5
    },
    {
      quote: "Dr. James used the Webster technique and helped my breech baby turn naturally. I avoided a C-section thanks to his expertise!",
      name: "Sarah K.",
      details: "First-time Mom",
      rating: 5
    },
    {
      quote: "The postpartum support was incredible. They helped me recover faster and get back to feeling like myself again while caring for my newborn.",
      name: "Jessica M.",
      details: "New Mom, Naperville",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Safe, Gentle Care for Expecting Mothers
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Experience comfort throughout your pregnancy journey with specialized prenatal chiropractic care designed specifically for expecting mothers in Naperville.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-pink-600 hover:bg-pink-700"
                  onClick={onNavigateToBooking}
                >
                  Schedule Prenatal Consultation
                </Button>
                <Button size="lg" variant="outline">
                  Call: (630) 416-1151
                </Button>
              </div>
              <div className="mt-6 flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>Safe for all trimesters</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4 text-pink-600" />
                  <span>Gentle techniques only</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMG1vbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU2NDg4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Pregnant woman receiving gentle healthcare"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pregnancy Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Prenatal & Postpartum Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting you and your baby's health from conception through recovery
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pregnancyServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-6 w-6 text-pink-600" />
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

      {/* Benefits of Prenatal Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Prenatal Chiropractic Care?
            </h2>
            <p className="text-lg text-gray-600">
              Research-backed benefits for both mother and baby
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Safer Delivery",
                description: "Proper pelvic alignment can reduce labor time and complications"
              },
              {
                icon: Activity,
                title: "Pain Relief",
                description: "Natural relief from pregnancy-related back pain and discomfort"
              },
              {
                icon: Baby,
                title: "Optimal Positioning",
                description: "Webster technique helps encourage proper fetal positioning"
              },
              {
                icon: Clock,
                title: "Faster Recovery",
                description: "Better preparation leads to quicker postpartum healing"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Pregnancy Concerns */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pregnancy Concerns We Address
            </h2>
            <p className="text-lg text-gray-600">
              Safe, effective relief for common pregnancy discomforts
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
                  <p className="text-sm font-medium text-gray-700 group-hover:text-pink-600 transition-colors">
                    {concern}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mom Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Stories from Naperville Moms
            </h2>
            <p className="text-lg text-gray-600">
              Real experiences from mothers who trusted us with their care
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
      <section className="py-20 bg-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience a More Comfortable Pregnancy
          </h2>
          <p className="text-xl text-pink-100 mb-8">
            Join hundreds of Naperville mothers who chose gentle, safe prenatal care for their pregnancy journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-pink-600 hover:bg-gray-100"
              onClick={onNavigateToBooking}
            >
              Schedule Prenatal Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-pink-600">
              Call: (630) 416-1151
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}