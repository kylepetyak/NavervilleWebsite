import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { 
  Activity,
  Brain,
  Bone,
  Heart,
  Zap,
  Users,
  Clock,
  Shield,
  Target,
  AlertCircle,
  Stethoscope,
  Eye,
  Ear,
  Hand,
  Footprints,
  Baby,
  Moon,
  Trophy,
  Car,
  Briefcase,
  Phone
} from "lucide-react";

interface Condition {
  name: string;
  icon: any;
  category: string;
}

const conditions: Condition[] = [
  { name: "Allergies & Asthma", icon: Activity, category: "respiratory" },
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

import { getConditionSlug } from "./serviceData";

interface ConditionsPageProps {
  onNavigateToHome: () => void;
  onNavigateToService?: (serviceSlug: string) => void;
  onNavigateToServices?: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToBooking?: () => void;
}

export function ConditionsPage({ onNavigateToHome, onNavigateToService, onNavigateToServices, onNavigateToAbout, onNavigateToBooking }: ConditionsPageProps) {
  const handleConditionClick = (conditionName: string) => {
    const slug = getConditionSlug(conditionName);
    if (onNavigateToService) {
      onNavigateToService(slug);
    } else {
      console.log(`Navigate to ${conditionName} page`);
    }
  };

  return (
    <div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conditions We Treat at Camelback Medical Centers — Naperville
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our comprehensive approach addresses a wide range of health conditions, 
            from acute injuries to chronic pain management. Find your condition below 
            to learn more about our targeted treatment options.
          </p>
        </div>
      </section>

      {/* Conditions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {conditions.map((condition, index) => (
              <Card 
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-200 hover:border-blue-300"
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
        </div>
      </section>

      {/* Special Offer Banner */}
      <SpecialOfferBanner />

      {/* Quick Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Information?
            </h3>
            <p className="text-gray-600">
              Explore other sections of our website to learn more about our approach and team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card 
              className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={onNavigateToServices}
            >
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Our Services</h4>
                <p className="text-gray-600 text-sm">
                  Learn about our comprehensive treatment approaches and methodologies.
                </p>
              </CardContent>
            </Card>
            <Card 
              className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={onNavigateToAbout}
            >
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Meet Our Team</h4>
                <p className="text-gray-600 text-sm">
                  Get to know the experienced providers who will guide your care.
                </p>
              </CardContent>
            </Card>
            <Card 
              className="text-center p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={onNavigateToBooking}
            >
              <CardContent className="p-0">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
                <p className="text-gray-600 text-sm">
                  Find our location, hours, and get in touch to schedule your visit.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-4">Camelback Medical Centers - Naperville</h3>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
            <span>123 Main Street, Naperville, IL 60540</span>
            <span>(630) 555-0123</span>
            <span>Mon-Fri: 8AM-7PM | Sat: 9AM-2PM</span>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-xs text-gray-400">
            <p>&copy; 2025 Camelback Medical Centers - Naperville. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}