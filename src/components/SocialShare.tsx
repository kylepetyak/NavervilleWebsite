import { Button } from "./ui/button";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  Link, 
  MessageCircle,
  Share2
} from "lucide-react";
import { toast } from "sonner@2.0.3";

interface SocialShareProps {
  title: string;
  url?: string;
  className?: string;
  size?: "sm" | "default" | "lg";
  showLabels?: boolean;
}

export function SocialShare({ 
  title, 
  url = window.location.href, 
  className = "",
  size = "default",
  showLabels = false 
}: SocialShareProps) {
  
  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    
    switch (platform) {
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, 
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=CamelbackNaper`, 
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, 
          '_blank',
          'width=600,height=400'
        );
        break;
      case 'email':
        const subject = encodeURIComponent(`Check out this health article: ${title}`);
        const body = encodeURIComponent(`I thought you might find this interesting:\n\n${title}\n\n${url}\n\nFrom Camelback Medical Centers - Naperville`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          toast.success("Link copied to clipboard!");
        }).catch(() => {
          toast.error("Failed to copy link");
        });
        break;
      case 'whatsapp':
        window.open(
          `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`, 
          '_blank'
        );
        break;
    }
  };

  const buttonSize = size === "sm" ? "sm" : size === "lg" ? "lg" : "default";
  const iconSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";

  const shareButtons = [
    {
      platform: 'facebook',
      icon: Facebook,
      label: 'Facebook',
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      platform: 'twitter',
      icon: Twitter,
      label: 'Twitter',
      color: 'hover:bg-sky-50 hover:text-sky-600'
    },
    {
      platform: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:bg-blue-50 hover:text-blue-700'
    },
    {
      platform: 'email',
      icon: Mail,
      label: 'Email',
      color: 'hover:bg-gray-50 hover:text-gray-700'
    },
    {
      platform: 'copy',
      icon: Link,
      label: 'Copy Link',
      color: 'hover:bg-green-50 hover:text-green-600'
    }
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabels && (
        <span className="text-sm font-medium text-gray-700 mr-2">Share:</span>
      )}
      {shareButtons.map(({ platform, icon: Icon, label, color }) => (
        <Button
          key={platform}
          variant="outline"
          size={buttonSize}
          onClick={() => handleShare(platform)}
          className={`${color} transition-colors`}
          title={`Share on ${label}`}
        >
          <Icon className={iconSize} />
          {showLabels && size !== "sm" && (
            <span className="ml-2">{label}</span>
          )}
        </Button>
      ))}
    </div>
  );
}