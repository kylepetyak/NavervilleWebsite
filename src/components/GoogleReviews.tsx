import { Star, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import featuredReviewsData from '../content/featured-reviews.json';

interface GoogleReview {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
  source: string;
  verified: boolean;
}

export function GoogleReviews() {
  // Use your actual reviews from JSON
  const { businessRating, featuredReviews } = featuredReviewsData;
  const averageRating = businessRating.averageRating;
  const totalReviews = businessRating.totalReviews;

  // Get your Google Business review link (update this with your actual link)
  const googleReviewLink = import.meta.env.VITE_GOOGLE_REVIEW_LINK || 'https://g.page/r/YOUR_PLACE_ID/review';

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
          onClick={() => window.open(googleReviewLink, '_blank')}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View All Reviews on Google
        </Button>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {featuredReviews.slice(0, 4).map((review) => (
          <Card key={review.id} className="p-4">
            <CardContent className="p-0">
              <div className="flex items-start space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                  {review.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-900">{review.author}</h4>
                      {review.verified && (
                        <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
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
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-gray-500">Posted on {review.source}</span>
                {review.helpful && (
                  <span className="text-xs text-gray-500">{review.helpful} people found this helpful</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-4">
        <p className="text-gray-600 mb-4">
          See what {totalReviews}+ Naperville patients are saying about their experience
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.open(googleReviewLink, '_blank')}
        >
          Read More Google Reviews
        </Button>
      </div>
    </div>
  );
}