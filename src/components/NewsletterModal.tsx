import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "./ui/dialog";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Mail, 
  X, 
  CheckCircle, 
  User, 
  Heart,
  BookOpen,
  Zap
} from "lucide-react";

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function NewsletterModal({ isOpen, onClose }: NewsletterModalProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const newsletterInterests = [
    { id: "pain-management", label: "Pain Management Tips", icon: Heart },
    { id: "exercise-wellness", label: "Exercise & Wellness", icon: Zap },
    { id: "health-education", label: "Health Education", icon: BookOpen },
    { id: "naperville-events", label: "Naperville Health Events", icon: User }
  ];

  const handleInterestChange = (interestId: string, checked: boolean) => {
    if (checked) {
      setInterests([...interests, interestId]);
    } else {
      setInterests(interests.filter(id => id !== interestId));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);

    // Auto-close after success message
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
      setEmail("");
      setFirstName("");
      setInterests([]);
    }, 3000);
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
    setEmail("");
    setFirstName("");
    setInterests([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        {!isSubmitted ? (
          <div className="grid md:grid-cols-2">
            {/* Left Side - Image & Branding */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-white">
              <div className="absolute inset-0 opacity-20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1695462131822-368776114494?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwd2VsbG5lc3MlMjBibG9nJTIwd3JpdGluZ3xlbnwxfHx8fDE3NTY0ODMyMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Newsletter background"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-center space-y-6">
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Stay Healthy with Us</h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Join thousands of Naperville residents who trust us for weekly health insights, 
                    exercise tips, and community wellness updates.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm">Weekly health tips from our experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm">Exclusive Naperville health events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm">Special offers & promotions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-300" />
                    <span className="text-sm">No spam, unsubscribe anytime</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="p-8">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Join Our Newsletter
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Get personalized health content delivered to your inbox
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Interests */}
                <div className="space-y-3">
                  <Label>I'm interested in: (optional)</Label>
                  <div className="space-y-3">
                    {newsletterInterests.map((interest) => {
                      const Icon = interest.icon;
                      return (
                        <div key={interest.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={interest.id}
                            checked={interests.includes(interest.id)}
                            onCheckedChange={(checked) => 
                              handleInterestChange(interest.id, checked as boolean)
                            }
                          />
                          <div className="flex items-center space-x-2">
                            <Icon className="h-4 w-4 text-blue-600" />
                            <Label 
                              htmlFor={interest.id}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {interest.label}
                            </Label>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Privacy Notice */}
                <div className="text-xs text-gray-500 bg-gray-50 p-3 rounded-lg">
                  By subscribing, you agree to receive marketing emails from Camelback Medical Centers - Naperville. 
                  You can unsubscribe at any time. View our Privacy Policy for more information.
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>Subscribe to Newsletter</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="p-12 text-center">
            <div className="space-y-6">
              <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Welcome to Our Community!
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Thanks for subscribing, {firstName}! You'll start receiving our weekly health insights 
                  and Naperville community updates in your inbox soon.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>What's next?</strong> Check your email for a welcome message with exclusive content 
                  just for our subscribers, including our "5-Minute Daily Wellness Routine" guide.
                </p>
              </div>

              <Button onClick={handleClose} className="bg-blue-600 hover:bg-blue-700">
                Continue Reading
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}