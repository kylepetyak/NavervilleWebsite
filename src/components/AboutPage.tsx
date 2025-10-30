import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SpecialOfferBanner } from "./SpecialOfferBanner";
import { ProviderModal } from "./ProviderModal";
import { useState } from "react";
import drJamesPhoto from 'figma:asset/9978c4b65e44e1ca2df1864c117d9581d170d50b.png';
import { 
  Phone, 
  CheckCircle, 
  Users, 
  Heart,
  MapPin,
  Shield,
  Target,
  Award
} from "lucide-react";

interface AboutPageProps {
  onNavigateToHome: () => void;
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
}

export function AboutPage({ onNavigateToHome, onNavigateToConditions, onNavigateToBlog }: AboutPageProps) {
  const [selectedProvider, setSelectedProvider] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (provider) => {
    setSelectedProvider(provider);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1730567482526-bba3346fa759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXBlcnZpbGxlJTIwcml2ZXJ3YWxrJTIwaWxsaW5vaXN8ZW58MXx8fHwxNzU2NDgwNjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Naperville Riverwalk Illinois"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                About Camelback Medical Centers – Naperville, Illinois
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Your trusted chiropractic and wellness center in the heart of Naperville, IL
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                Meet Our Team
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Connection to Naperville */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Rooted in Naperville, Illinois Legacy
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p>
                  Founded in 1831 by Joseph Naper on the DuPage River, Naperville, IL's blend of history, charm,
                  and growth inspires our approach to healthcare. From the iconic Riverwalk and Moser Tower's
                  Millennium Carillon to the historic Naper Settlement, community and wellness are woven into
                  Naperville's spirit.
                </p>
                <p>
                  Just as Naperville has grown from a small settlement into one of Chicago's premier western
                  suburbs while preserving its character, Camelback Medical Centers believes in honoring
                  traditional chiropractic healing methods while embracing modern medical advances for
                  Naperville families.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1558742527-f21ddb6b29c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMHRvd24lMjBkb3dudG93biUyMGhpc3RvcmljfGVufDF8fHx8MTc1NjQ4MDY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Historic downtown area"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Our Mission Serving Naperville, IL
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              We're committed to being your trusted chiropractic and wellness partner in the Naperville community
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community-Centered Care",
                description: "We understand Naperville families and their unique health needs"
              },
              {
                icon: Heart,
                title: "Whole-Person Healthcare",
                description: "Treating the entire person, not just symptoms, for lasting wellness"
              },
              {
                icon: MapPin,
                title: "Accessible & Local",
                description: "Convenient location with flexible scheduling for busy Naperville lives"
              },
              {
                icon: Shield,
                title: "Evidence-Driven",
                description: "Combining proven medical practices with innovative treatment approaches"
              },
              {
                icon: Target,
                title: "Person-First Approach",
                description: "Every treatment plan is customized to your individual goals and lifestyle"
              },
              {
                icon: Award,
                title: "Your Wellness Partner",
                description: "Supporting your health journey from acute care to long-term wellness"
              }
            ].map((mission, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <mission.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{mission.title}</h3>
                <p className="text-gray-600 text-sm">{mission.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Love This Community */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1736456084924-c39e02004cfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBwYXJrJTIwZmFtaWx5JTIwYWN0aXZpdGllc3xlbnwxfHx8fDE3NTY0ODA2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Naperville community activities"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Why Naperville, Illinois Inspires Our Work
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Active Lifestyle:</strong> From the DuPage River Trail to Centennial Beach and
                    Knoch Knolls Park, Naperville, IL residents value staying active and healthy
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Excellence in Education:</strong> Naperville's top-rated schools (Districts 203 and 204)
                    reflect the community's commitment to learning and growth—values we share in healthcare
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Cultural Vitality:</strong> From the Naperville Municipal Band to Historic Downtown
                    and DuPage County events, this community celebrates wellness in all its forms
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Family-Oriented Values:</strong> Naperville's parks (including Riverwalk),
                    festivals like Ribfest, and community events show how much families matter here
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>Innovation & Tradition:</strong> Like Naperville itself, our chiropractic center blends
                    cutting-edge medical technology with time-tested healing principles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Banner */}
      <SpecialOfferBanner />

      {/* Team Connection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Meet Our Naperville Chiropractors & Healthcare Providers
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Our team members aren't just healthcare professionals—they're your Naperville neighbors
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Nabzdyk DC",
                title: "Doctor of Chiropractic",
                image: drJamesPhoto,
                connection: "Over 30 years serving the community, passionate about educating families on wellness"
              },
              {
                name: "Dr. Michael Chen",
                title: "Physical Medicine Specialist",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                connection: "Grew up in Naperville, North High School alumnus"
              },
              {
                name: "Lisa Rodriguez, PT",
                title: "Lead Physical Therapist",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                connection: "Volunteers at Naperville youth sports leagues"
              }
            ].map((provider, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="mb-6">
                    {typeof provider.image === 'string' ? (
                      <ImageWithFallback
                        src={provider.image}
                        alt={provider.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    ) : (
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-32 h-32 rounded-full mx-auto object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{provider.name}</h3>
                  <p className="text-blue-600 mb-3">{provider.title}</p>
                  <p className="text-sm text-gray-600 mb-4 italic">{provider.connection}</p>
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

      {/* Secondary CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight text-white drop-shadow-sm">
            Ready to start your health journey with a provider who knows your community?
          </h2>
          <p className="text-xl mb-8 text-white/95 max-w-3xl mx-auto font-medium">
            Experience healthcare that understands Naperville's unique lifestyle and values
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-lg font-semibold">
              Meet Our Team
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Visit
            </Button>
          </div>
          <div className="mt-8 text-center space-y-4">
            <div className="inline-flex items-center bg-orange-500 hover:bg-orange-600 transition-colors text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
              <span className="text-3xl mr-3 font-bold">$29</span>
              <span>New Patient Special - Save $396!</span>
            </div>
            <div className="space-y-2 bg-blue-700/40 backdrop-blur-sm rounded-lg px-6 py-4 inline-block">
              <p className="font-bold text-xl text-white">Call Now: (630) 416-1151</p>
              <p className="text-white/90 font-medium">Mon-Fri: 8AM-7PM | Sat: 9AM-2PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Modal */}
      {selectedProvider && (
        <ProviderModal
          provider={selectedProvider}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProvider(null);
          }}
        />
      )}
    </div>
  );
}