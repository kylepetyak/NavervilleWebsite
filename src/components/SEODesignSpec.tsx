import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { CheckCircle, AlertCircle, Code, Search, Zap, FileText } from "lucide-react";

interface SEODesignSpecProps {
  onNavigateToHome?: () => void;
}

export function SEODesignSpec({ onNavigateToHome }: SEODesignSpecProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl text-gray-900 mb-2">SEO & Performance Design Specification</h1>
              <p className="text-lg text-gray-600">Camelback Medical Centers – Naperville | Technical Implementation Guide</p>
            </div>
            {onNavigateToHome && (
              <Button onClick={onNavigateToHome} variant="outline">
                ← Back to Site
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="mb-12">
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start space-x-3">
              <Search className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h2 className="text-xl text-gray-900 mb-2">Implementation Goals</h2>
                <ul className="text-gray-700 space-y-1">
                  <li>• Achieve Google Core Web Vitals "Good" scores (LCP ≤2.5s, CLS ≤0.1, INP ≤200ms)</li>
                  <li>• Implement comprehensive Schema.org markup for medical practice visibility</li>
                  <li>• Optimize for local search and medical service discovery</li>
                  <li>• Ensure accessibility compliance (WCAG 2.1 AA)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Schema Markup Specifications */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Code className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl text-gray-900">JSON-LD Schema Markup Components</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* LocalBusiness Schema */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">LocalBusiness Schema</h3>
                <Badge variant="default">Required</Badge>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
{`{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Camelback Medical Centers",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Main St",
    "addressLocality": "Naperville",
    "addressRegion": "IL",
    "postalCode": "60540"
  },
  "telephone": "(630) 416-1151",
  "openingHours": "Mo-Fr 08:00-17:00"
}`}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Implementation:</strong> Include in HTML head of every page. Values must match visible contact information exactly.
              </p>
            </Card>

            {/* Article Schema */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Article Schema</h3>
                <Badge variant="secondary">Blog Posts</Badge>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
{`{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{POST_TITLE}}",
  "author": {
    "@type": "Person",
    "name": "{{AUTHOR_NAME}}"
  },
  "datePublished": "{{ISO_DATE}}",
  "image": "{{HERO_IMAGE_URL}}",
  "publisher": {
    "@type": "Organization",
    "name": "Camelback Medical Centers"
  }
}`}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Template variables:</strong> Replace template placeholders with actual content values.
              </p>
            </Card>

            {/* BreadcrumbList Schema */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">BreadcrumbList Schema</h3>
                <Badge variant="secondary">Sub-pages</Badge>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
{`{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://camelbackmedical.com/"
  }, {
    "@type": "ListItem", 
    "position": 2,
    "name": "Services",
    "item": "https://camelbackmedical.com/services"
  }]
}`}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Auto-generate:</strong> Based on current page hierarchy and breadcrumb component.
              </p>
            </Card>

            {/* FAQPage Schema */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">FAQPage Schema</h3>
                <Badge variant="outline">Conditional</Badge>
              </div>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto mb-4">
{`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "{{QUESTION_TEXT}}",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "{{ANSWER_TEXT}}"
    }
  }]
}`}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Only include:</strong> On pages with visible FAQ sections. Match visible Q&A content exactly.
              </p>
            </Card>
          </div>
        </section>

        {/* Meta Tags & SEO Components */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <FileText className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl text-gray-900">Meta Tags & SEO Components</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Page Title & Description */}
            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Title & Meta Description</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Page Title (50-60 chars)</label>
                  <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                    {`<title>Pain Relief Treatment in Naperville | Camelback Medical</title>`}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">Meta Description (150-160 chars)</label>
                  <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                    {`<meta name="description" content="Expert pain relief and medical care in Naperville. Treating families, athletes, and seniors with comprehensive healthcare solutions. Book your appointment today.">`}
                  </div>
                </div>
              </div>
            </Card>

            {/* Open Graph Tags */}
            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Open Graph (Social Sharing)</h3>
              <div className="space-y-3">
                <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                  {`<meta property="og:title" content="{{PAGE_TITLE}}">`}
                </div>
                <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                  {`<meta property="og:description" content="{{META_DESC}}">`}
                </div>
                <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                  {`<meta property="og:image" content="{{HERO_IMAGE_URL}}">`}
                </div>
                <div className="bg-gray-100 p-3 rounded border font-mono text-sm">
                  {`<meta property="og:url" content="{{CANONICAL_URL}}">`}
                </div>
              </div>
            </Card>

            {/* Canonical URL */}
            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Canonical URL</h3>
              <div className="bg-gray-100 p-3 rounded border font-mono text-sm mb-3">
                {`<link rel="canonical" href="https://camelbackmedical.com/current-page">`}
              </div>
              <p className="text-sm text-gray-600">
                <strong>Auto-generate:</strong> Based on current page route. Prevents duplicate content issues.
              </p>
            </Card>

            {/* Structured Headings */}
            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Heading Hierarchy</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl text-gray-900">H1</span>
                  <span className="text-sm text-gray-600">Main page title (only one per page)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-xl text-gray-900">H2</span>
                  <span className="text-sm text-gray-600">Major sections</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-lg text-gray-900">H3</span>
                  <span className="text-sm text-gray-600">Subsections</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Core Web Vitals Performance */}
        <section className="mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <Zap className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl text-gray-900">Core Web Vitals Optimization</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* LCP Optimization */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg text-gray-900">LCP ≤ 2.5s</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Hero images: fixed dimensions, preload critical resources</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>WebP/AVIF format with fallbacks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Responsive image sizes (srcset)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Above-fold content prioritized</span>
                </li>
              </ul>
            </Card>

            {/* CLS Optimization */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg text-gray-900">CLS ≤ 0.1</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Reserved space for images (aspect-ratio)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Fixed dimensions for embeds/widgets</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Font display: swap for web fonts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>No layout-shifting animations</span>
                </li>
              </ul>
            </Card>

            {/* INP Optimization */}
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg text-gray-900">INP ≤ 200ms</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Minimal JavaScript execution time</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Debounced form inputs</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Efficient event handlers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Code splitting for large components</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Page-Specific Checklists */}
        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-6">Page-Specific Implementation Checklists</h2>
          
          <div className="space-y-6">
            {/* Home Page Checklist */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Home Page</h3>
                <Badge variant="default">Primary Landing</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Required Elements:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>LocalBusiness JSON-LD</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>H1: "Pain Relief Treatment in Naperville"</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Hero image optimized for LCP</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Contact info visible & schema-matched</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Performance Notes:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Hero image: 1200x600px WebP, preload</li>
                    <li>• Reserve space for testimonial carousel</li>
                    <li>• Lazy load below-fold sections</li>
                    <li>• Optimize Google Reviews widget loading</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Service Page Checklist */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Service Template Pages</h3>
                <Badge variant="secondary">Conditions Treated</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Required Elements:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>BreadcrumbList JSON-LD</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>H1: "[Condition] Treatment in Naperville"</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Related articles section</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Service-specific FAQ with schema</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Internal Linking:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2-3 contextual links to related services</li>
                    <li>• "Related Articles" widget (4-6 posts)</li>
                    <li>• Breadcrumb navigation to parent pages</li>
                    <li>• CTA to booking page</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Blog Post Checklist */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg text-gray-900">Blog Post Template</h3>
                <Badge variant="secondary">Content Marketing</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Required Elements:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Article JSON-LD with author/date</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>BreadcrumbList JSON-LD</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Social sharing buttons</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Related posts section</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Content Guidelines:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 2-3 inline links to relevant services</li>
                    <li>• Author bio with medical credentials</li>
                    <li>• Publication date clearly visible</li>
                    <li>• CTA to schedule consultation</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Developer Handoff Notes */}
        <section className="mb-12">
          <h2 className="text-2xl text-gray-900 mb-6">Developer Implementation Notes</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Component Architecture</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Create SEOHead component for all meta tags</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Build SchemaMarkup component with type props</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Implement BreadcrumbNav with auto-generation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Create ImageOptimized component with aspect-ratio</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg text-gray-900 mb-4">Content Management</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>All schema values must match visible content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Meta descriptions: 150-160 characters</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Page titles: 50-60 characters with location</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>Alt text required for all images</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <Separator className="my-8" />

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            This specification ensures optimal search engine visibility and user experience performance.
            <br />
            All implementations should be tested with Google PageSpeed Insights and Search Console.
          </p>
        </div>
      </div>
    </div>
  );
}