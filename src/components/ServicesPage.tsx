import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Activity,
  Brain,
  Bone,
  Heart,
  Zap,
  Users,
  Shield,
  Target,
  AlertCircle,
  Stethoscope,
  Hand,
  Footprints,
  Baby,
  Moon,
  Trophy,
  Car,
  Briefcase,
  ArrowRight,
  UserCheck,
  Clock
} from "lucide-react";

// Import condition data
import { getConditionSlug } from "./serviceData";

interface ServicesPageProps {
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToTargetGroup?: (targetGroup: string) => void;
  onNavigateToBooking?: () => void;
}

const targetGroups = [
  {
    id: "families",
    name: "Families",
    icon: Users,
    description: "Complete family care from kids to grandparents",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoZWFsdGhjYXJlJTIwbWVkaWNhbHxlbnwxfHx8fDE3NTY0ODgyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Pediatric care for growing children",
      "Adult health and wellness",
      "Senior mobility and independence",
      "Pregnancy and family planning support"
    ]
  },
  {
    id: "athletes",
    name: "Athletes",
    icon: Trophy,
    description: "Performance optimization and injury recovery",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwc3BvcnRzJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzU2NDg4MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Sports injury treatment and prevention",
      "Performance enhancement programs",
      "Recovery and rehabilitation",
      "Movement analysis and optimization"
    ]
  },
  {
    id: "pregnant-moms",
    name: "Pregnant Moms",
    icon: Heart,
    description: "Safe, gentle care during pregnancy",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMG1vbSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzU2NDg4MjIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Prenatal chiropractic care",
      "Pregnancy wellness programs",
      "Postpartum recovery support",
      "Safe pain relief during pregnancy"
    ]
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    icon: Baby,
    description: "Specialized care for growing children",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBoZWFsdGhjYXJlJTIwY2hpbGRyZW58ZW58MXx8fHwxNzU2NDg4MjI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Gentle pediatric adjustments",
      "ADHD and developmental support",
      "Childhood injury treatment",
      "Wellness education for kids"
    ]
  },
  {
    id: "adults",
    name: "Adults",
    icon: UserCheck,
    description: "Comprehensive adult healthcare solutions",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHVsdCUyMGhlYWx0aGNhcmUlMjBtZWRpY2FsfGVufDF8fHx8MTc1NjQ4ODIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Chronic pain management",
      "Work-related injury treatment",
      "Stress and lifestyle support",
      "Preventive healthcare solutions"
    ]
  },
  {
    id: "active-seniors",
    name: "Active Seniors",
    icon: Clock,
    description: "Maintaining mobility and independence",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY3RpdmUlMjBzZW5pb3IlMjBoZWFsdGhjYXJlfGVufDF8fHx8MTc1NjQ4ODIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Arthritis management",
      "Balance and fall prevention", 
      "Mobility enhancement programs",
      "Age-related pain relief"
    ]
  }
];

const conditions = [
  { name: "Allergies & Asthma", icon: Heart, category: "respiratory" },
  { name: "Arthritis", icon: Bone, category: "joints" },
  { name: "ADHD", icon: Brain, category: "neurological" },
  { name: "Back Pain", icon: Activity, category: "pain" },
  { name: "Carpal Tunnel", icon: Hand, category: "pain" },
  { name: "Car Accident Injuries", icon: Car, category: "injury" },
  { name: "Concussions", icon: Brain, category: "neurological" },
  { name: "Elbow Pain", icon: Zap, category: "pain" },
  { name: "Foot Pain", icon: Footprints, category: "pain" },
  { name: "Headache & Migraine", icon: Brain, category: "neurological" },
  { name: "Hip Pain", icon: Activity, category: "pain" },
  { name: "Knee Pain", icon: Bone, category: "pain" },
  { name: "Low Back Pain", icon: Activity, category: "pain" },
  { name: "Mobility Problems", icon: Users, category: "movement" },
  { name: "Neck Pain", icon: Activity, category: "pain" },
  { name: "Neuropathy", icon: Zap, category: "neurological" },
  { name: "Plantar Fasciitis", icon: Footprints, category: "pain" },
  { name: "Pregnancy", icon: Baby, category: "wellness" },
  { name: "Sciatica", icon: Zap, category: "pain" },
  { name: "Scoliosis", icon: Activity, category: "spine" },
  { name: "Shoulder Pain", icon: Activity, category: "pain" },
  { name: "Sleep Issues", icon: Moon, category: "wellness" },
  { name: "Sports Injuries", icon: Trophy, category: "injury" },
  { name: "TMJ", icon: AlertCircle, category: "pain" },
  { name: "Vertigo", icon: Brain, category: "neurological" },
  { name: "Whiplash", icon: Activity, category: "injury" },
  { name: "Work Injuries", icon: Briefcase, category: "injury" }
];

export function ServicesPage({ onNavigateToService, onNavigateToTargetGroup, onNavigateToBooking }: ServicesPageProps) {
  const handleConditionClick = (conditionName: string) => {
    const slug = getConditionSlug(conditionName);
    if (onNavigateToService) {
      onNavigateToService(slug);
    }
  };

  const handleTargetGroupClick = (targetGroupId: string) => {
    if (onNavigateToTargetGroup) {
      onNavigateToTargetGroup(targetGroupId);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Services at Camelback Medical Centers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive healthcare solutions tailored for every stage of life and every health condition. 
            Discover who we serve and the conditions we treat with expert, integrative care.
          </p>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our specialized care is designed for every member of your family and every stage of life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetGroups.map((group, index) => (
              <Card 
                key={group.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                onClick={() => handleTargetGroupClick(group.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={group.image}
                    alt={`${group.name} healthcare services`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center space-x-3 text-white">
                      <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                        <group.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{group.name}</h3>
                        <p className="text-sm text-white/90">{group.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <ul className="space-y-2 mb-4">
                    {group.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <div className="bg-blue-100 rounded-full w-1.5 h-1.5 mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="group/btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTargetGroupClick(group.id);
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Expert care for a comprehensive range of health conditions using integrative, evidence-based approaches
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {conditions.map((condition, index) => (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-blue-300 bg-white"
                onClick={() => handleConditionClick(condition.name)}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="bg-blue-50 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-100 transition-colors">
                    <condition.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 group-hover:text-blue-700 transition-colors" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {condition.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your condition? We treat many more health issues than listed here.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Us About Your Condition
            </Button>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <SpecialOfferBanner />

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Camelback Medical Centers?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our integrated approach combines the best of traditional and modern medicine
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "Expert Care",
                description: "Board-certified providers with specialized training",
                color: "bg-blue-100 text-blue-600"
              },
              {
                icon: Heart,
                title: "Integrative Approach",
                description: "Combining multiple therapies for optimal results",
                color: "bg-green-100 text-green-600"
              },
              {
                icon: Target,
                title: "Personalized Treatment",
                description: "Customized care plans for your unique needs",
                color: "bg-purple-100 text-purple-600"
              },
              {
                icon: Shield,
                title: "Proven Results",
                description: "Over 30 years serving the Naperville community",
                color: "bg-orange-100 text-orange-600"
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
    </div>
  );
}