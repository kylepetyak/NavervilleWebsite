import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { X, GraduationCap, Heart, Users, Calendar } from "lucide-react";
import drJamesPhoto from 'figma:asset/9978c4b65e44e1ca2df1864c117d9581d170d50b.png';

interface ProviderData {
  name: string;
  title: string;
  image: string | any;
  connection: string;
  fullBio?: string;
  education?: string[];
  specialties?: string[];
  experience?: string;
  philosophy?: string;
}

interface ProviderModalProps {
  provider: ProviderData;
  isOpen: boolean;
  onClose: () => void;
}

export function ProviderModal({ provider, isOpen, onClose }: ProviderModalProps) {
  // Dr. James's detailed information
  const drJamesDetails = {
    fullBio: `Dr. James Nabzdyk's journey into healthcare began with a personal challenge. As a young adolescent, he suffered from severe migraine headaches and digestive issues. When traditional medical treatments consisting of various medications failed to provide relief, he took matters into his own hands.

    Noticing that his symptoms worsened when he ate certain foods, Dr. James began experimenting with dietary changes and started feeling better. This personal experience sparked his interest in healthcare and led him to pursue a Bachelor of Science degree from Northern Illinois University.

    While in college, he was introduced to the chiropractic profession and found his calling. The chiropractic philosophy of discovering and treating the root cause of problems proactively, rather than simply reacting to symptoms and masking them with drugs, resonated deeply with his personal experience and practical nature.`,
    
    education: [
      "Bachelor of Science - Northern Illinois University",
      "Doctor of Chiropractic - National University of Health Sciences (1991)",
      "Extensive postgraduate continuing education courses"
    ],
    
    specialties: [
      "Subluxation Complex Treatment",
      "Pediatric Chiropractic Care", 
      "Nutritional Counseling",
      "Lifestyle Medicine",
      "Preventive Healthcare",
      "Patient Education"
    ],
    
    experience: "Over 30 years of clinical practice",
    
    philosophy: "Dr. Nabzdyk is passionate about educating patients on how to take better care of themselves and helping them understand how subluxation affects their health. He particularly enjoys working with children because they respond well to treatment and because establishing good health habits early leads to better outcomes throughout life."
  };

  const isDrJames = provider.name === "Dr. James Nabzdyk DC";
  const details = isDrJames ? drJamesDetails : {};

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            Meet {provider.name}
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
          <DialogDescription>
            Learn more about {provider.name}, their background, education, and approach to healthcare.
          </DialogDescription>
        </DialogHeader>
        
        {/* Top Section - Photo and Basic Info */}
        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-shrink-0">
            {typeof provider.image === 'string' ? (
              <img
                src={provider.image}
                alt={provider.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-lg mx-auto md:mx-0"
              />
            ) : (
              <img
                src={provider.image}
                alt={provider.name}
                className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-lg mx-auto md:mx-0"
              />
            )}
          </div>
          
          <div className="flex-1 space-y-4 min-w-0">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 break-words">{provider.name}</h3>
              <p className="text-lg md:text-xl text-blue-600 mb-2">{provider.title}</p>
              <p className="text-gray-600 italic break-words">{provider.connection}</p>
            </div>

            {isDrJames && details.experience && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold text-gray-900">Experience</span>
                </div>
                <p className="text-gray-700">{details.experience}</p>
              </div>
            )}
          </div>
        </div>

        {/* Content Sections */}
        {isDrJames ? (
          <div className="space-y-8">
            {/* Personal Journey - Full Width */}
            {details.fullBio && (
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Heart className="h-5 w-5 md:h-6 md:w-6 text-red-500 mr-2 flex-shrink-0" />
                  Personal Journey
                </h4>
                <div className="space-y-4 text-gray-700">
                  {details.fullBio.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-sm md:text-base">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Education & Specialties - Responsive Layout */}
            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-6">
              {details.education && (
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 flex-shrink-0" />
                    Education & Training
                  </h4>
                  <ul className="space-y-3">
                    {details.education.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm md:text-base break-words">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {details.specialties && (
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Areas of Focus</h4>
                  <div className="flex flex-wrap gap-2">
                    {details.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Treatment Philosophy - Full Width */}
            {details.philosophy && (
              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 md:h-6 md:w-6 text-green-600 mr-2 flex-shrink-0" />
                  Treatment Philosophy
                </h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {details.philosophy}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 italic text-lg">
              Detailed provider information coming soon.
            </p>
          </div>
        )}

        <div className="border-t pt-6 mt-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-sm md:text-base px-4 py-2 break-words">
              Schedule with {provider.name.split(' ')[1] || provider.name}
            </Button>
            <Button variant="outline" className="text-sm md:text-base px-4 py-2">
              Learn About Services
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}