import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  profileImage?: string;
}

const mockGoogleReviews: GoogleReview[] = [
  {
    id: "1",
    author: "Jennifer Martinez",
    rating: 5,
    text: "Outstanding care! Dr. Wilson and her team completely transformed my chronic back pain. The $29 consultation was worth every penny and led to a treatment plan that actually worked.",
    date: "2 weeks ago",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612-47be?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "2", 
    author: "Robert Chen",
    rating: 5,
    text: "After my car accident, I was in constant pain. The integrated approach here - combining chiropractic care with physical therapy - got me back to normal faster than I thought possible.",
    date: "1 month ago",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "3",
    author: "Maria Rodriguez",
    rating: 5,
    text: "The staff is incredibly professional and caring. They take time to explain everything and create personalized treatment plans. My migraines are finally under control!",
    date: "3 weeks ago",
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "4",
    author: "David Thompson",
    rating: 5,
    text: "Been coming here for 6 months now. The improvement in my quality of life has been remarkable. Highly recommend to anyone dealing with chronic pain.",
    date: "2 months ago",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "5",
    author: "Lisa Wang",
    rating: 5,
    text: "The clinic is modern, clean, and the technology they use is impressive. But what really sets them apart is the personal attention and genuine care from every staff member.",
    date: "1 week ago",
    profileImage: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "6",
    author: "Michael Johnson",
    rating: 5,
    text: "I was skeptical about chiropractic care, but Dr. Chen changed my mind completely. Professional, effective, and they really listen to your concerns.",
    date: "3 weeks ago",
    profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export function GoogleReviews() {
  const averageRating = 5.0;
  const totalReviews = 247;

  return (
    <div className="space-y-6">
      {/* Google Reviews Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-red-500 to-yellow-500 to-green-500 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm">G</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">Google Reviews</span>
        </div>
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-xl font-semibold text-gray-900">{averageRating}</span>
          <span className="text-gray-600">({totalReviews} reviews)</span>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="mb-6"
          onClick={() => window.open('https://share.google/DMs57BokPEfoYRJO', '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View All Reviews on Google
        </Button>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {mockGoogleReviews.slice(0, 4).map((review) => (
          <Card key={review.id} className="p-4">
            <CardContent className="p-0">
              <div className="flex items-start space-x-3 mb-3">
                {review.profileImage && (
                  <img
                    src={review.profileImage}
                    alt={review.author}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-gray-900">{review.author}</h4>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-4">
        <p className="text-gray-600 mb-4">
          See what {totalReviews}+ patients are saying about their experience
        </p>
        <Button 
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.open('https://share.google/DMs57BokPEfoYRJO', '_blank')}
        >
          Read More Google Reviews
        </Button>
      </div>
    </div>
  );
}