import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { LazyImage } from "./LazyImage";
import { VideoTestimonial } from "./VideoTestimonial";
import { GoogleReviews } from "./GoogleReviews";
import { ProviderModal } from "./ProviderModal";
import drJamesPhoto from 'figma:asset/9978c4b65e44e1ca2df1864c117d9581d170d50b.png';
import { 
  Phone, 
  Play, 
  CheckCircle, 
  Star, 
  Users, 
  Calendar,
  Award,
  Heart,
  Zap,
  Shield,
  Target,
  Activity,
  Brain,
  Stethoscope,
  Timer,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  Hand
} from "lucide-react";

interface HomePageProps {
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToBooking?: () => void;
  onNavigateToTargetGroup?: (targetGroup: string) => void;
}

import { getConditionSlug } from "./serviceData";

export function HomePage({ onNavigateToConditions, onNavigateToBlog, onNavigateToService, onNavigateToBooking, onNavigateToTargetGroup }: HomePageProps) {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleLearnMore = (provider: any) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <LazyImage
            src="https://images.unsplash.com/photo-1646369506164-f8f24d4d6d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGF0aWVudCUyMHNtaWxpbmclMjByZWxpZWZ8ZW58MXx8fHwxNzU2NDg4MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Patient experiencing relief"
            className="w-full h-full object-cover"
            priority={true}
            loading="eager"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Feel Better, Move Better—<br />Rediscover Your Best Self
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Experience our integrated care model tailored for Naperville
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={onNavigateToBooking}
              >
                Schedule Appointment
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 text-blue-600 border-blue-600 hover:bg-blue-50">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: (630) 416-1151
              </Button>
            </div>

            {/* Video Section */}
            {isVideoPlaying ? (
              <div className="max-w-2xl mx-auto">
                <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
                  <div className="aspect-video">
                    <iframe
                      src="https://www.youtube.com/embed/9yMHsuvRfmg?si=b1Cwd5zxpsHPHEVD&autoplay=1"
                      title="Camelback Medical Centers Video"
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white text-gray-900"
                      onClick={() => setIsVideoPlaying(false)}
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto relative cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1544187702-067d81860901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHRlc3RpbW9uaWFsJTIwcGF0aWVudHxlbnwxfHx8fDE3NTY0ODgxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Video testimonial"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    width={400}
                    height={192}
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm">Discover the Camelback Difference</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
                    VIDEO
                  </div>
                </div>
              </div>
            )}

            {/* Rotating Hero Messages */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">Take Charge of Your Health</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Feel Energized Again</Badge>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Step Into Comfort</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introductory Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Is Pain or Discomfort Holding You Back from Fully Enjoying Life in Naperville?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Are you relying on pain meds just to get through the day?",
                "Is tossing and turning from discomfort keeping you up at night?",
                "Want to stay active with family or friends, only to be sidelined by nagging pain?"
              ].map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Wondering if relief will ever stick?",
                "Feeling older than your age due to physical limitations?",
                "Is life's spark fading under chronic aches and fatigue?"
              ].map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{challenge}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">If you answered "yes" to any of these, you're not alone—and there's hope.</p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={onNavigateToBooking}
            >
              Find Your Solution Today
            </Button>
          </div>
        </div>
      </section>

      {/* 3. Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hear from Patients Just Like You in Naperville
            </h2>
            <p className="text-lg text-gray-600">Real stories from real people who found their path back to wellness</p>
          </div>
          
          {/* Video Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <VideoTestimonial
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailUrl="https://images.unsplash.com/photo-1632053652571-a6a45052bbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXRpZW50JTIwdGVzdGltb25pYWwlMjB2aWRlbyUyMG1lZGljYWx8ZW58MXx8fHwxNzU2NDg4Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              quote="I could finally play with my grandkids pain-free after just 4 visits. The team here truly cares about getting to the root of the problem."
              name="John D."
              service="Physical Therapy"
              rating={5}
            />
            <VideoTestimonial
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailUrl="https://images.unsplash.com/photo-1659353886868-753b0c5c5772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHBhdGllbnQlMjByZWNvdmVyeSUyMG1lZGljYWx8ZW58MXx8fHwxNzU2NDg4NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              quote="After years of chronic back pain, I was skeptical. But their integrated approach worked when nothing else did. I'm back to hiking again!"
              name="Sarah M."
              service="Chiropractic Care"
              rating={5}
            />
            <VideoTestimonial
              videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
              thumbnailUrl="https://images.unsplash.com/photo-1646369506164-f8f24d4d6d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcGF0aWVudCUyMHNtaWxpbmclMjByZWxpZWZ8ZW58MXx8fHwxNzU2NDg4MTUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              quote="The difference is night and day. I sleep better, move better, and feel like myself again. Worth every penny of the investment."
              name="Mike R."
              service="Comprehensive Treatment"
              rating={5}
            />
          </div>

          {/* Google Reviews Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                What Our Naperville Patients Are Saying
              </h3>
              <p className="text-gray-600">
                Real reviews from real patients who've experienced our care
              </p>
            </div>
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* 4. Why Our Method Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why the Camelback Approach Works
            </h2>
            <p className="text-lg text-gray-600">Five pillars that set us apart from traditional care</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Modern Technology",
                description: "Advanced diagnostic and therapeutic tools for precise, effective treatment",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Heart,
                title: "Natural Techniques",
                description: "Drug-free methods that support lasting healing and your body's natural recovery",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: Users,
                title: "Integrated Care Model",
                description: "Blending chiropractic, physical therapy, and wellness resources under one roof",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Target,
                title: "Corrective Focus",
                description: "Root cause solutions, not just temporary relief—fixing problems for good",
                color: "bg-orange-100 text-orange-600"
              },
              {
                icon: Award,
                title: "Inspiring Care",
                description: "Passionate professionals with a track record of positive reviews and results",
                color: "bg-yellow-100 text-yellow-600"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className={`rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Quick CTA Reminder */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Moving Again?</h2>
          <div className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg mb-6 shadow-lg">
            <span className="text-2xl mr-3">$29</span>
            <span>New Patient Special Appointment</span>
          </div>
          <p className="text-blue-100 mb-6">Consultation + Examination + X-Rays (Regular $425 Value)</p>
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
            onClick={onNavigateToBooking}
          >
            Schedule Your $29 Appointment
          </Button>
        </div>
      </section>

      {/* 6. Who We Serve & Conditions */}
      <section id="conditions-types" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600">Comprehensive care for every stage of life</p>
          </div>
          
          {/* Patient Types - Now First */}
          <div className="mb-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, name: "Families", description: "Complete family care from kids to grandparents", slug: "families" },
                { icon: Activity, name: "Athletes", description: "Performance optimization and injury recovery", slug: "athletes" },
                { icon: Heart, name: "Pregnant Moms", description: "Safe, gentle care during pregnancy", slug: "pregnant-moms" },
                { icon: Users, name: "Pediatrics", description: "Specialized care for growing children", slug: "pediatrics" },
                { icon: Stethoscope, name: "Adults", description: "Comprehensive adult healthcare solutions", slug: "adults" },
                { icon: Award, name: "Active Seniors", description: "Maintaining mobility and independence", slug: "active-seniors" }
              ].map((type, index) => (
                <div 
                  key={index} 
                  className="text-center p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group"
                  onClick={() => onNavigateToTargetGroup && onNavigateToTargetGroup(type.slug)}
                >
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <type.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{type.name}</h4>
                  <p className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors">{type.description}</p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conditions We Treat - Now Second with Icons */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Conditions We Treat</h3>
              <p className="text-lg text-gray-600">Expert care for a wide range of health conditions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { icon: Activity, name: "Back Pain" },
                { icon: Target, name: "Neck Pain" },
                { icon: Brain, name: "Headaches" },
                { icon: Zap, name: "Sciatica" },
                { icon: Shield, name: "Arthritis" },
                { icon: Activity, name: "Sports Injuries" },
                { icon: AlertTriangle, name: "Car Accidents" },
                { icon: Award, name: "Work Injuries" },
                { icon: Hand, name: "Carpal Tunnel" },
                { icon: Activity, name: "Knee Pain" },
                { icon: Target, name: "Hip Pain" },
                { icon: Shield, name: "Shoulder Pain" },
                { icon: Activity, name: "Elbow Pain" },
                { icon: Target, name: "Foot Pain" },
                { icon: Brain, name: "TMJ" },
                { icon: Zap, name: "Vertigo" },
                { icon: AlertTriangle, name: "Whiplash" },
                { icon: Brain, name: "Concussions" },
                { icon: Activity, name: "Neuropathy" },
                { icon: Target, name: "Plantar Fasciitis" },
                { icon: Shield, name: "Scoliosis" },
                { icon: Timer, name: "Sleep Issues" },
                { icon: Brain, name: "ADHD" },
                { icon: Heart, name: "Allergies & Asthma" }
              ].map((condition, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 transition-all cursor-pointer group"
                  onClick={() => {
                    const slug = getConditionSlug(condition.name);
                    if (onNavigateToService) {
                      onNavigateToService(slug);
                    } else {
                      onNavigateToConditions();
                    }
                  }}
                >
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                    <condition.icon className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">{condition.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet the Team */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Naperville Providers
            </h2>
            <p className="text-lg text-gray-600">Expert care from professionals who call Naperville home</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Nabzdyk DC",
                title: "Doctor of Chiropractic",
                image: drJamesPhoto,
                bio: "Over 30 years serving Naperville families with comprehensive chiropractic care"
              },
              {
                name: "Dr. Michael Chen",
                title: "Physical Medicine Specialist",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "North High School alumnus specializing in sports medicine and rehabilitation"
              },
              {
                name: "Lisa Rodriguez, PT",
                title: "Lead Physical Therapist",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                bio: "Community volunteer and expert in movement rehabilitation"
              }
            ].map((provider, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="mb-6">
                    {typeof provider.image === 'string' ? (
                      <LazyImage
                        src={provider.image}
                        alt={provider.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                        width={128}
                        height={128}
                      />
                    ) : (
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                        loading="lazy"
                        decoding="async"
                        width={128}
                        height={128}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                  <p className="text-blue-600 mb-3">{provider.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{provider.bio}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleLearnMore(provider)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us / Credibility */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Naperville Turns to Camelback
            </h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                At Naperville Camelback Medical Centers, you benefit from an integrated team of chiropractors, 
                medical professionals, and rehabilitation therapists—all collaborating to tackle the root of your pain. 
                Our modern clinic is just around the corner, offering same-day access, walk-ins, and cutting-edge 
                diagnostic services so you can get better—faster.
              </p>
              <p className="mt-4">
                With tailored treatment plans that span adjustments, physical therapy, injections, and more, 
                plus a $29 initial evaluation deal, relief has never been more accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Services Overview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services in Naperville
            </h2>
            <p className="text-lg text-gray-600">Comprehensive care under one roof</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Brain, name: "Brain Health & Stress Support", description: "Cognitive wellness and stress management" },
              { icon: Stethoscope, name: "Chiropractic Care", description: "Spinal adjustments and alignment therapy" },
              { icon: Activity, name: "Spinal Decompression", description: "Non-surgical disc and nerve relief" },
              { icon: Target, name: "Trigger Point Injections", description: "Targeted pain relief therapy" },
              { icon: Users, name: "Physical Rehabilitation", description: "Movement restoration and strength building" },
              { icon: Heart, name: "Platelet Rich Plasma (PRP)", description: "Regenerative healing treatments" },
              { icon: Zap, name: "Acupuncture", description: "Traditional healing for modern problems" },
              { icon: Users, name: "Massage Therapy", description: "Therapeutic muscle and soft tissue work" },
              { icon: Activity, name: "Knee Regeneration Therapy", description: "Advanced joint restoration treatments" },
              { icon: Stethoscope, name: "Diagnostic Testing", description: "Comprehensive health assessments" },
              { icon: Shield, name: "Allergy Testing & Treatment", description: "Identify and treat allergic reactions" }
            ].map((service, index) => (
              <Card key={index} className="p-4 hover:shadow-md transition-shadow cursor-pointer" onClick={onNavigateToConditions}>
                <CardContent className="text-center">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Metrics / Counters */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "30+", label: "Years Serving Naperville", icon: Calendar },
              { number: "15,000+", label: "Patients Served", icon: Users },
              { number: "50,000+", label: "Treatments Performed", icon: Activity },
              { number: "500+", label: "5-Star Reviews", icon: Star }
            ].map((stat, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-white bg-opacity-20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Community & Recognition */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Naperville Community Commitment
              </h2>
              <div className="space-y-4">
                {[
                  "Proud sponsors of Naperville youth sports leagues",
                  "Regular health fairs at local community centers", 
                  "School wellness presentations and education programs",
                  "Active participants in Naperville charity initiatives",
                  "Supporting local businesses and community events"
                ].map((commitment, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <LazyImage
                src="https://images.unsplash.com/photo-1677640724372-adb865d29aa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBoZWFsdGglMjByZWNvZ25pdGlvbiUyMGF3YXJkc3xlbnwxfHx8fDE3NTY0ODgxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Community recognition and awards"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Provider Modal */}
      {isModalOpen && selectedProvider && (
        <ProviderModal
          provider={selectedProvider}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}