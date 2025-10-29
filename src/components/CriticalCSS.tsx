import { useEffect } from 'react';

interface CriticalCSSProps {
  route?: string;
}

export function CriticalCSS({ route = 'home' }: CriticalCSSProps) {
  useEffect(() => {
    // Inject critical CSS based on route
    const criticalStyles = getCriticalStyles(route);
    
    if (criticalStyles) {
      const styleElement = document.createElement('style');
      styleElement.id = `critical-css-${route}`;
      styleElement.textContent = criticalStyles;
      document.head.appendChild(styleElement);

      return () => {
        const element = document.getElementById(`critical-css-${route}`);
        if (element) {
          element.remove();
        }
      };
    }
  }, [route]);

  return null;
}

function getCriticalStyles(route: string): string {
  const commonCritical = `
    /* Critical CSS optimized for FCP */
    .min-h-screen { min-height: 100vh; contain: layout style; }
    .bg-white { background-color: #ffffff; }
    .bg-blue-50 { background-color: #eff6ff; }
    .bg-blue-600 { background-color: #2563eb; }
    .bg-gradient-to-br { 
      background-image: linear-gradient(to bottom right, var(--tw-gradient-stops)); 
      will-change: auto;
    }
    .from-blue-50 { --tw-gradient-from: #eff6ff; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(239, 246, 255, 0)); }
    .to-white { --tw-gradient-to: #ffffff; }
    
    /* Typography - optimized for CLS prevention */
    .text-4xl { font-size: 2.25rem; line-height: 2.5rem; font-display: swap; }
    .text-6xl { font-size: 3.75rem; line-height: 1; font-display: swap; }
    .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
    .text-2xl { font-size: 1.5rem; line-height: 2rem; }
    .font-bold { font-weight: 700; }
    .text-gray-900 { color: #111827; }
    .text-gray-600 { color: #4b5563; }
    .text-blue-600 { color: #2563eb; }
    .text-white { color: #ffffff; }
    
    /* Layout - GPU accelerated where beneficial */
    .relative { position: relative; }
    .max-w-7xl { max-width: 80rem; }
    .max-w-3xl { max-width: 48rem; }
    .mx-auto { margin-left: auto; margin-right: auto; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
    .text-center { text-align: center; }
    .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 1.5rem; }
    .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 1rem; }
    .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 0.5rem; }
    
    /* Flexbox */
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    
    /* Animation - optimized for performance */
    .animate-spin { 
      animation: spin 1s linear infinite; 
      will-change: transform;
      transform: translateZ(0);
    }
    
    /* Spinner styles */
    .w-8 { width: 2rem; }
    .h-8 { height: 2rem; }
    .border-2 { border-width: 2px; }
    .border-t-transparent { border-top-color: transparent; }
    .rounded-full { border-radius: 9999px; }
    
    /* Text sizes */
    .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
    .text-gray-500 { color: #6b7280; }
    
    /* Responsive - mobile-first */
    @media (min-width: 640px) {
      .sm\\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
    }
    
    @media (min-width: 768px) {
      .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
    }
    
    @media (min-width: 1024px) {
      .lg\\:px-8 { padding-left: 2rem; padding-right: 2rem; }
    }
    
    /* Keyframes */
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `;

  const routeSpecificStyles = {
    home: `
      /* Home page specific critical styles */
      .overflow-hidden { overflow: hidden; }
      .opacity-10 { opacity: 0.1; }
      .w-full { width: 100%; }
      .h-full { height: 100%; }
      .object-cover { object-fit: cover; }
    `,
    blog: `
      /* Blog page specific critical styles */
      .prose { max-width: 65ch; }
      .prose-lg { font-size: 1.125rem; line-height: 1.75rem; }
    `,
    services: `
      /* Services page specific critical styles */
      .grid { display: grid; }
      .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
      .gap-6 { gap: 1.5rem; }
      
      @media (min-width: 768px) {
        .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }
      
      @media (min-width: 1024px) {
        .lg\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      }
    `
  };

  return commonCritical + (routeSpecificStyles[route] || '');
}