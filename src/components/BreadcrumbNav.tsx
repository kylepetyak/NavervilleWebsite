import { ChevronRight, Home } from "lucide-react";
import { Button } from "./ui/button";

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
  current?: boolean;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function BreadcrumbNav({ items, className = "" }: BreadcrumbNavProps) {
  if (items.length <= 1) return null; // Don't show breadcrumbs for home page only

  return (
    <nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            )}
            {item.current ? (
              <span className="text-gray-700 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-blue-600 hover:text-blue-700 hover:bg-transparent hover:underline"
                onClick={item.onClick}
              >
                {index === 0 && <Home className="h-3 w-3 mr-1" />}
                {item.label}
              </Button>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Helper function to generate breadcrumbs based on current page
export function generateBreadcrumbs(
  currentPage: string,
  currentBlogPost?: number,
  currentTargetGroup?: string,
  onNavigateToHome?: () => void,
  onNavigateToBlog?: () => void,
  onNavigateToConditions?: () => void,
  onNavigateToWhoWeServe?: () => void
): BreadcrumbItem[] {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      label: "Home",
      onClick: onNavigateToHome
    }
  ];

  switch (currentPage) {
    case 'conditions':
      breadcrumbs.push({
        label: "Conditions We Treat",
        current: true
      });
      break;
    
    case 'who-we-serve':
      breadcrumbs.push({
        label: "Who We Serve",
        current: true
      });
      break;
    
    case 'target-group':
      breadcrumbs.push({
        label: "Who We Serve",
        onClick: onNavigateToWhoWeServe
      });
      
      // Add specific target group title based on current target group
      const targetGroupTitles = {
        'families': "Families",
        'athletes': "Athletes",
        'pregnant-moms': "Pregnant Moms",
        'pediatrics': "Pediatrics",
        'adults': "Adults",
        'active-seniors': "Active Seniors"
      };
      
      const groupTitle = targetGroupTitles[currentTargetGroup as keyof typeof targetGroupTitles] || "Target Group";
      breadcrumbs.push({
        label: groupTitle,
        current: true
      });
      break;
    
    case 'blog':
      breadcrumbs.push({
        label: "Health Blog",
        current: true
      });
      break;
    
    case 'blog-post':
      breadcrumbs.push({
        label: "Health Blog",
        onClick: onNavigateToBlog
      });
      
      // Add specific blog post title based on post ID
      const blogPostTitles = {
        1: "ADHD-Friendly Routine Tips",
        2: "Managing Chronic Back Pain",
        3: "Winter Nutrition Strategies"
      };
      
      const postTitle = blogPostTitles[currentBlogPost as keyof typeof blogPostTitles] || "Blog Post";
      breadcrumbs.push({
        label: postTitle,
        current: true
      });
      break;
    
    case 'cms-strategy':
      breadcrumbs.push({
        label: "CMS Strategy Guide",
        current: true
      });
      break;
    
    default:
      // For home page, return empty array (no breadcrumbs needed)
      return [];
  }

  return breadcrumbs;
}