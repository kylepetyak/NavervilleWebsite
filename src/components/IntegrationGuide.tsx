import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, ExternalLink, Video, Star } from "lucide-react";

export function IntegrationGuide() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Integration Guide: Video Testimonials & Google Reviews
        </h2>
        <p className="text-gray-600">
          Here's how to connect your real video testimonials and Google reviews
        </p>
      </div>

      {/* Video Testimonials Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Video className="h-5 w-5 text-blue-600" />
            <span>Video Testimonials Integration</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Step 1: Upload Your Videos</h3>
            <p className="text-gray-700 mb-3">Upload your video testimonials to one of these platforms:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <Badge variant="outline" className="p-3 justify-center">
                <strong>YouTube</strong> - Best for SEO
              </Badge>
              <Badge variant="outline" className="p-3 justify-center">
                <strong>Vimeo</strong> - Professional appearance
              </Badge>
              <Badge variant="outline" className="p-3 justify-center">
                <strong>Wistia</strong> - Marketing focused
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Step 2: Get Embed URLs</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700 mb-2"><strong>YouTube:</strong></p>
              <code className="text-xs bg-white p-2 rounded block">
                https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1
              </code>
              <p className="text-sm text-gray-700 mb-2 mt-3"><strong>Vimeo:</strong></p>
              <code className="text-xs bg-white p-2 rounded block">
                https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Step 3: Update the VideoTestimonial Component</h3>
            <p className="text-gray-700 mb-2">Replace the placeholder URLs in the VideoTestimonial components:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-xs text-gray-800">
{`<VideoTestimonial
  videoUrl="YOUR_ACTUAL_VIDEO_EMBED_URL"
  thumbnailUrl="YOUR_VIDEO_THUMBNAIL_IMAGE"
  quote="Patient's actual quote"
  name="Patient's real name"
  service="Service they received"
/>`}
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Google Reviews Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <span>Google Reviews Integration</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Option 1: Google My Business API (Dynamic)</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-gray-700">Get a Google API key from Google Cloud Console</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-gray-700">Enable the Google My Business API</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
                <span className="text-gray-700">Create a service to fetch reviews automatically</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Option 2: Manual Update (Simple)</h3>
            <p className="text-gray-700 mb-3">
              Copy reviews from your Google My Business dashboard and update the mockGoogleReviews array in GoogleReviews.tsx:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-xs text-gray-800">
{`const realGoogleReviews = [
  {
    id: "1",
    author: "Real Customer Name",
    rating: 5,
    text: "Actual review text from Google",
    date: "2 weeks ago",
    profileImage: "customer_photo_url"
  },
  // Add more real reviews...
];`}
              </code>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Option 3: Google Reviews Widget</h3>
            <p className="text-gray-700 mb-3">Use a third-party service for automatic integration:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">EmbedSocial</h4>
                <p className="text-sm text-gray-600 mb-2">Automatic Google reviews widget</p>
                <a href="https://embedsocial.com" target="_blank" className="text-blue-600 text-sm flex items-center">
                  Visit EmbedSocial <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
              <div className="border rounded-lg p-4">
                <h4 className="font-medium mb-2">Trustmary</h4>
                <p className="text-sm text-gray-600 mb-2">Reviews management platform</p>
                <a href="https://trustmary.com" target="_blank" className="text-blue-600 text-sm flex items-center">
                  Visit Trustmary <ExternalLink className="h-3 w-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Step 4: Link to Your Google Business Profile</h3>
            <p className="text-gray-700 mb-2">Update the "View All Reviews" button to link to your actual Google Business profile:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <code className="text-xs text-gray-800">
                https://www.google.com/maps/place/YOUR_BUSINESS_NAME
              </code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Implementation Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
              <span className="text-gray-700">Always get written permission before using patient testimonials</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
              <span className="text-gray-700">Ensure HIPAA compliance when sharing patient stories</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
              <span className="text-gray-700">Use high-quality thumbnails for video testimonials</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
              <span className="text-gray-700">Regularly update reviews to keep content fresh</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="h-4 w-4 text-green-600 mt-1" />
              <span className="text-gray-700">Consider adding schema markup for better SEO</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}