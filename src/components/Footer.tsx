import { 
  MapPin,
  Clock,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

interface FooterProps {
  onNavigateToConditions: () => void;
  onNavigateToBlog: () => void;
  onNavigateToBooking?: () => void;
}

export function Footer({ 
  onNavigateToConditions, 
  onNavigateToBlog,
  onNavigateToBooking
}: FooterProps) {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Camelback Medical Centers</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">3416 South Route 59 #108, Naperville, IL 60564</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">(630) 416-1151</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@camelbacknaperville.com</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={onNavigateToBooking} className="hover:text-blue-400 transition-colors">Book Appointment</button></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><button onClick={onNavigateToConditions} className="hover:text-blue-400 transition-colors">Conditions</button></li>
              <li><a href="#team" className="hover:text-blue-400 transition-colors">Meet the Team</a></li>
              <li><button onClick={onNavigateToBlog} className="hover:text-blue-400 transition-colors">Blog</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 8AM-7PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Saturday: 9AM-2PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Sunday: Closed</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-blue-400 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Camelback Medical Centers - Naperville. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}