import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { VideoTestimonial } from "./VideoTestimonial";
import { BreadcrumbNav } from "./BreadcrumbNav";
import { 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Users, 
  Stethoscope,
  Target,
  Heart,
  Shield,
  Zap,
  Activity,
  Brain,
  ArrowRight,
  Award,
  Calendar
} from "lucide-react";

import { ServiceData } from "./serviceData";

interface ServicePageProps {
  serviceName: string;
  ServiceIcon?: any;
  heroImage: string;
  serviceData?: ServiceData;
  onNavigateToHome: () => void;
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
}

interface ServicePageData {
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  aboutCondition: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  whyItWorks: {
    title: string;
    subtitle: string;
    methods: {
      icon: any;
      title: string;
      description: string;
      color: string;
    }[];
  };
  treatment: {
    title: string;
    subtitle: string;
    treatments: string[];
  };
  relatedResources: {
    title: string;
    links: {
      title: string;
      description: string;
      type: "service" | "blog";
    }[];
  };
  testimonials: {
    title: string;
    stories: {
      quote: string;
      name: string;
      condition: string;
      rating: number;
    }[];
  };
  faqs: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

// Default data - can be customized per service
const defaultServiceData: ServicePageData = {
  hero: {
    headline: "Allergies & Asthma Care in Naperville",
    subheadline: "Comprehensive, natural treatment for allergies and asthma using advanced diagnostic testing and personalized care plans tailored to Naperville families.",
    ctaText: "Schedule Your $29 New Patient Special"
  },
  aboutCondition: {
    title: "Understanding Allergies & Asthma",
    description: "Allergies and asthma often go hand-in-hand, affecting millions of people and significantly impacting quality of life. These conditions occur when your immune system overreacts to normally harmless substances in the environment.",
    keyPoints: [
      "Environmental and seasonal allergies can trigger asthma symptoms",
      "Food sensitivities may contribute to respiratory inflammation", 
      "Stress and lifestyle factors often worsen allergic reactions",
      "Early intervention can prevent symptoms from becoming chronic"
    ]
  },
  whyItWorks: {
    title: "Why the Camelback Method Works",
    subtitle: "Our integrated approach addresses root causes, not just symptoms",
    methods: [
      {
        icon: Stethoscope,
        title: "Advanced Diagnostics",
        description: "Comprehensive allergy testing and lung function assessments to identify specific triggers",
        color: "bg-blue-100 text-blue-600"
      },
      {
        icon: Heart,
        title: "Natural Treatments",
        description: "Drug-free therapies that support your body's natural healing and reduce inflammation",
        color: "bg-green-100 text-green-600"
      },
      {
        icon: Users,
        title: "Collaborative Care",
        description: "Our medical team works together to create personalized treatment plans",
        color: "bg-purple-100 text-purple-600"
      },
      {
        icon: Target,
        title: "Naperville-Focused",
        description: "Treatment plans designed for local environmental factors and lifestyle needs",
        color: "bg-orange-100 text-orange-600"
      }
    ]
  },
  treatment: {
    title: "How We Help",
    subtitle: "Comprehensive care that addresses allergies and asthma from multiple angles",
    treatments: [
      "Complete allergy testing (environmental, food, and chemical sensitivities)",
      "Pulmonary function testing and breathing assessments",
      "Nutritional counseling and anti-inflammatory diet planning",
      "Chiropractic care to improve respiratory function and reduce stress",
      "Acupuncture for immune system balance and symptom relief",
      "Environmental modification recommendations for your home and workplace",
      "Natural supplementation and herbal remedies",
      "Ongoing monitoring and adjustment of treatment plans"
    ]
  },
  relatedResources: {
    title: "Explore Nearby Topics",
    links: [
      {
        title: "ADHD Treatment",
        description: "Natural approaches to attention and focus challenges",
        type: "service"
      },
      {
        title: "Stress Management",
        description: "Techniques for reducing stress-related health impacts",
        type: "blog"
      },
      {
        title: "Pediatric Care",
        description: "Specialized treatment for children with allergies",
        type: "service"
      },
      {
        title: "Nutrition Counseling",
        description: "Anti-inflammatory diet strategies for better health",
        type: "service"
      }
    ]
  },
  testimonials: {
    title: "Real Experiences in Naperville",
    stories: [
      {
        quote: "My son's asthma attacks have virtually disappeared since starting care here. The natural approach really works!",
        name: "Jennifer M.",
        condition: "Pediatric Asthma",
        rating: 5
      },
      {
        quote: "Finally found relief from seasonal allergies without relying on daily medications. The team here is amazing.",
        name: "Robert C.", 
        condition: "Seasonal Allergies",
        rating: 5
      },
      {
        quote: "The comprehensive testing revealed food triggers I never knew about. My quality of life has improved dramatically.",
        name: "Maria L.",
        condition: "Food Allergies",
        rating: 5
      }
    ]
  },
  faqs: {
    title: "Common Questions",
    questions: [
      {
        question: "How long does it take to see results from allergy treatment?",
        answer: "Many patients notice improvements within 2-4 weeks of starting treatment. However, complete resolution of symptoms typically takes 3-6 months as we address underlying causes and allow your immune system to rebalance."
      },
      {
        question: "Do you accept insurance for allergy and asthma treatments?",
        answer: "We accept most major insurance plans. Our staff will verify your benefits and help you understand your coverage for both diagnostic testing and treatments before you begin care."
      },
      {
        question: "Can you help with both children and adults?",
        answer: "Absolutely! Our team has extensive experience treating allergies and asthma in patients of all ages, from young children to seniors. We tailor our approach based on age-specific needs and sensitivities."
      },
      {
        question: "What makes your approach different from traditional allergy treatment?",
        answer: "While traditional medicine often focuses on suppressing symptoms with medications, we work to identify and address the root causes of allergic reactions. Our integrated approach combines advanced testing, natural therapies, and lifestyle modifications for lasting results."
      },
      {
        question: "How do I prepare for my first appointment?",
        answer: "Bring a list of current medications, any previous allergy test results, and a symptom diary if you have one. Avoid antihistamines for 3-5 days before testing if possible. Our team will provide specific preparation instructions when you schedule."
      }
    ]
  }
};

export function ServicePageTemplate({ 
  serviceName, 
  ServiceIcon, 
  heroImage, 
  serviceData: providedServiceData,
  onNavigateToHome, 
  onNavigateToConditions, 
  onNavigateToBlog 
}: ServicePageProps) {
  const serviceData = providedServiceData || defaultServiceData;

  const breadcrumbItems = [
    { label: "Home", onClick: onNavigateToHome },
    { label: "Services", onClick: onNavigateToConditions },
    { label: serviceName, isActive: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BreadcrumbNav items={breadcrumbItems} />
        </div>
      </div>

      {/* 1. Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                {ServiceIcon && (
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
                    <ServiceIcon className="h-6 w-6 text-blue-600" />
                  </div>
                )}
                <Badge className="bg-blue-100 text-blue-800">Naperville Care</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {serviceData.hero.headline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {serviceData.hero.subheadline}
              </p>
              <div className="space-y-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  {serviceData.hero.ctaText}
                </Button>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>(630) 555-0123</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>Same-day appointments</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src={heroImage}
                alt={serviceName}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">$29</div>
                  <div className="text-sm">New Patient Special</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About This Condition */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.aboutCondition.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {serviceData.aboutCondition.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceData.aboutCondition.keyPoints.map((point, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Camelback Method Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.whyItWorks.title}
            </h2>
            <p className="text-lg text-gray-600">
              {serviceData.whyItWorks.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.whyItWorks.methods.map((method, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto ${method.color}`}>
                    <method.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-900">{method.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Treatment Overview */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.treatment.title}
            </h2>
            <p className="text-lg text-gray-600">
              {serviceData.treatment.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceData.treatment.treatments.map((treatment, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-200 transition-colors">
                <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-gray-700">{treatment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Internal Links to Related Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.relatedResources.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.relatedResources.links.map((link, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {link.type === 'service' ? 'Service' : 'Article'}
                    </Badge>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Patient Stories / Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.testimonials.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceData.testimonials.stories.map((story, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic">"{story.quote}"</blockquote>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{story.name}</p>
                    <p className="text-sm text-blue-600">{story.condition}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Accordion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {serviceData.faqs.title}
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {serviceData.faqs.questions.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 8. Secondary CTA with Local Trust */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take the next step in your health?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Naperville families who have found relief through our integrated approach.
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Conveniently Located</div>
                  <div className="text-sm text-blue-100">123 Main Street, Naperville</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Call Today</div>
                  <div className="text-sm text-blue-100">(630) 555-0123</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Clock className="h-5 w-5" />
                <div className="text-left">
                  <div className="font-semibold">Extended Hours</div>
                  <div className="text-sm text-blue-100">Mon-Fri 8AM-7PM</div>
                </div>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* 9. Footer Navigation / Mini-Sitemap */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Explore More</h3>
            <p className="text-gray-600">Discover other ways we can help you achieve optimal health</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={onNavigateToHome} className="hover:text-blue-600 transition-colors">Home</button></li>
                <li><button onClick={onNavigateToConditions} className="hover:text-blue-600 transition-colors">All Services</button></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Meet the Team</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Patient Portal</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Popular Services</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Back Pain Relief</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Headache Treatment</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Sports Injuries</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Pediatric Care</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={onNavigateToBlog} className="hover:text-blue-600 transition-colors">Health Blog</button></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Insurance</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">New Patients</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(630) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Naperville, IL</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Fri 8AM-7PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}