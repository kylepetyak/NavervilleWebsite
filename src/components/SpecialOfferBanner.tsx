import { Button } from "./ui/button";
import { Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SpecialOfferBannerProps {
  className?: string;
}

export function SpecialOfferBanner({ className = "" }: SpecialOfferBannerProps) {
  return (
    <section className={`py-16 bg-gray-800 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gray-700 rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            {/* Left Side - Call to Action */}
            <div className="p-8 lg:p-12 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Start Your Health Journey
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 text-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (630) 416-1151
                </Button>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 text-lg"
                >
                  Schedule Appointment
                </Button>
              </div>
            </div>

            {/* Right Side - Special Offer Image Placeholder */}
            <div className="relative h-96 lg:h-auto flex items-center justify-center bg-gray-600">
              <div className="w-full h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="bg-gray-500 rounded-lg p-8 max-w-sm mx-auto">
                    <div className="text-gray-300 text-lg font-semibold mb-4">
                      Special Offer Image
                    </div>
                    <div className="text-gray-400 text-sm">
                      Placeholder for promotional<br />
                      offer image/graphic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}