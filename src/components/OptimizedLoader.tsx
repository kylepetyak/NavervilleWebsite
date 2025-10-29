interface OptimizedLoaderProps {
  message?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'centered' | 'inline';
}

export function OptimizedLoader({ 
  message = "Loading...", 
  size = 'md',
  variant = 'centered' 
}: OptimizedLoaderProps) {
  const sizeClasses = {
    sm: 'w-4 h-4 border',
    md: 'w-8 h-8 border-2',
    lg: 'w-12 h-12 border-4'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm', 
    lg: 'text-base'
  };

  if (variant === 'inline') {
    return (
      <div className="flex items-center space-x-2">
        <div className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin`}></div>
        <span className={`${textSizeClasses[size]} text-gray-500`}>{message}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-8">
      <div className="text-center space-y-2">
        <div className={`${sizeClasses[size]} border-blue-600 border-t-transparent rounded-full animate-spin mx-auto`}></div>
        <div className={`${textSizeClasses[size]} text-gray-500`}>{message}</div>
      </div>
    </div>
  );
}

// Preload component for critical resources
export function PreloadCriticalResources() {
  return (
    <>
      <link rel="preload" as="style" href="/styles/globals.css" />
      <link rel="dns-prefetch" href="//images.unsplash.com" />
      <link rel="preconnect" href="//images.unsplash.com" crossOrigin="" />
    </>
  );
}