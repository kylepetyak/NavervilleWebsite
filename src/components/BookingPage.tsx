import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Phone, 
  Clock, 
  CheckCircle, 
  Calendar,
  MapPin,
  Users,
  FileText,
  CreditCard,
  AlertCircle
} from "lucide-react";

interface BookingPageProps {
  onNavigateToHome: () => void;
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
  onNavigateToAbout?: () => void;
}

export function BookingPage({ 
  onNavigateToHome, 
  onNavigateToConditions, 
  onNavigateToBlog,
  onNavigateToAbout 
}: BookingPageProps) {
  
  // Load the calendar widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero / Top Callout */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYXBwb2ludG1lbnQlMjBzY2hlZHVsaW5nfGVufDF8fHx8MTc1NjQ4ODE1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Medical appointment scheduling"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Schedule Your Appointment & Contact Us
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                Book online, call us, or visit our Naperville location.
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Same-day appointments and walk-ins available. Our online scheduling makes it easy to find the perfect time for your visit.
              </p>
            </div>
            
            {/* Quick Info Badges */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                <Clock className="mr-2 h-4 w-4" />
                Same-Day Available
              </Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                <Users className="mr-2 h-4 w-4" />
                Walk-Ins Welcome
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2">
                <MapPin className="mr-2 h-4 w-4" />
                Naperville Location
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Widget Area */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Calendar Container */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border-0 bg-white">
                <CardContent className="p-8">
                  {/* Calendar Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Appointment & Contact Us</h2>
                    <p className="text-gray-600">Select your preferred date and time using our online booking system, or contact us directly.</p>
                    
                    {/* Contact Info Quick Access */}
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <div className="flex flex-col sm:flex-row gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-blue-600" />
                          <span className="font-medium">Call: (630) 416-1151</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>1220 Hobson Rd, Naperville, IL 60540</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Embedded Calendar Widget */}
                  <div className="w-full">
                    <iframe 
                      src="https://api.leadconnectorhq.com/widget/booking/2FY3vpednakT4F3kwmzF" 
                      style={{
                        width: '100%',
                        border: 'none',
                        overflow: 'hidden',
                        minHeight: '600px'
                      }}
                      scrolling="no" 
                      id="2FY3vpednakT4F3kwmzF_1758399494949"
                      title="Appointment Booking Calendar"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Clinic Hours */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-blue-600" />
                    Clinic Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mon-Fri:</span>
                      <span className="font-medium">8:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday:</span>
                      <span className="font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday:</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Appointment Types */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Appointment Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">New Patient Consultation</p>
                        <p className="text-sm text-gray-600">$29 Special - Includes exam & X-rays</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Follow-up Visit</p>
                        <p className="text-sm text-gray-600">Ongoing treatment sessions</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Urgent Care</p>
                        <p className="text-sm text-gray-600">Same-day appointments available</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="border-0 shadow-md bg-orange-50">
                <CardContent className="p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Tips</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Arrive 15 minutes early for paperwork</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Bring ID and insurance card</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700">Wear comfortable clothing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Alternate Call Option */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Prefer to Book by Phone?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our friendly staff is ready to help you schedule your appointment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
              <Phone className="mr-2 h-5 w-5" />
              Call (630) 416-1151
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
          <p className="mt-6 text-blue-100">
            Mon-Fri: 8AM-7PM | Sat: 9AM-2PM | Walk-ins Welcome
          </p>
        </div>
      </section>

      {/* Trust & Reminder Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What to Expect at Your Visit
            </h2>
            <p className="text-lg text-gray-600">
              We've made your appointment process simple and stress-free
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FileText,
                title: "What to Bring",
                items: [
                  "Valid photo ID",
                  "Insurance card",
                  "List of current medications",
                  "Previous medical records (if applicable)"
                ]
              },
              {
                icon: CreditCard,
                title: "Payment Options",
                items: [
                  "Most insurance plans accepted",
                  "Cash, check, or credit card",
                  "$29 new patient special",
                  "Flexible payment plans available"
                ]
              },
              {
                icon: Clock,
                title: "Cancellation Policy",
                items: [
                  "24-hour notice appreciated",
                  "Easy online rescheduling",
                  "Same-day cancellations accepted",
                  "No cancellation fees"
                ]
              },
              {
                icon: Users,
                title: "Patient Experience",
                items: [
                  "Comfortable, modern facility",
                  "Friendly, professional staff",
                  "Thorough consultation process",
                  "Personalized treatment plans"
                ]
              }
            ].map((section, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <section.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <button 
              onClick={onNavigateToHome}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={onNavigateToConditions}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={onNavigateToAbout || (() => {})}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About Us
            </button>
            <button 
              onClick={onNavigateToBlog}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Health Blog
            </button>
            <span className="text-blue-600 font-medium">
              Contact & Booking (Current Page)
            </span>
            <a 
              href="#faq" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              FAQs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}