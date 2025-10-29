import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { LazyImage } from "./LazyImage";

interface VideoTestimonialProps {
  videoUrl: string;
  thumbnailUrl: string;
  quote: string;
  name: string;
  service: string;
  rating?: number;
}

export function VideoTestimonial({ 
  videoUrl, 
  thumbnailUrl, 
  quote, 
  name, 
  service, 
  rating = 5 
}: VideoTestimonialProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  if (isPlaying) {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="aspect-video">
          <iframe
            src={videoUrl}
            title={`${name} testimonial`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="p-6">
          <div className="flex mb-3">
            {[...Array(rating)].map((_, i) => (
              <div key={i} className="w-4 h-4 text-yellow-400">★</div>
            ))}
          </div>
          <blockquote className="text-gray-700 mb-4 italic">
            "{quote}"
          </blockquote>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-blue-600">{service}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer" onClick={handlePlayClick}>
      <div className="relative aspect-video">
        <LazyImage
          src={thumbnailUrl}
          alt={`${name} video testimonial`}
          className="w-full h-full object-cover"
          width={400}
          height={225}
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center group">
          <Button
            size="lg"
            className="bg-white/90 hover:bg-white text-blue-600 rounded-full p-4"
          >
            <Play className="h-6 w-6" />
          </Button>
        </div>
        <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
          VIDEO
        </div>
      </div>
      <div className="p-6">
        <div className="flex mb-3">
          {[...Array(rating)].map((_, i) => (
            <div key={i} className="w-4 h-4 text-yellow-400">★</div>
          ))}
        </div>
        <blockquote className="text-gray-700 mb-4 italic">
          "{quote}"
        </blockquote>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-blue-600">{service}</p>
        </div>
      </div>
    </div>
  );
}