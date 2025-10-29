import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  domContentLoaded?: number;
  windowLoad?: number;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  enableLogging?: boolean;
}

export function PerformanceMonitor({ 
  onMetricsUpdate, 
  enableLogging = process.env.NODE_ENV === 'development' 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    const updateMetrics = (newMetrics: Partial<PerformanceMetrics>) => {
      setMetrics(prev => {
        const updated = { ...prev, ...newMetrics };
        onMetricsUpdate?.(updated);
        if (enableLogging) {
          console.log('Performance Metrics Updated:', newMetrics);
        }
        return updated;
      });
    };

    // Measure Core Web Vitals
    const measureCoreWebVitals = () => {
      // Largest Contentful Paint (LCP)
      if ('LargestContentfulPaint' in window) {
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          updateMetrics({ lcp: lastEntry.startTime });
        }).observe({ entryTypes: ['largest-contentful-paint'] });
      }

      // First Input Delay (FID)
      if ('FirstInputDelay' in window) {
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            updateMetrics({ fid: entry.processingStart - entry.startTime });
          }
        }).observe({ entryTypes: ['first-input'] });
      }

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        updateMetrics({ cls: clsValue });
      }).observe({ entryTypes: ['layout-shift'] });

      // First Contentful Paint (FCP)
      new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ fcp: entry.startTime });
          }
        }
      }).observe({ entryTypes: ['paint'] });
    };

    // Measure Navigation Timing
    const measureNavigationTiming = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        updateMetrics({
          ttfb: navigation.responseStart - navigation.requestStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          windowLoad: navigation.loadEventEnd - navigation.loadEventStart
        });
      }
    };

    // Initialize measurements
    measureCoreWebVitals();
    
    // Measure navigation timing after load
    if (document.readyState === 'complete') {
      measureNavigationTiming();
    } else {
      window.addEventListener('load', measureNavigationTiming);
    }

    // Resource timing monitoring
    const monitorResources = () => {
      const resources = performance.getEntriesByType('resource');
      const slowResources = resources.filter(resource => resource.duration > 1000);
      
      if (slowResources.length > 0 && enableLogging) {
        console.warn('Slow loading resources detected:', slowResources);
      }
    };

    const resourceMonitorInterval = setInterval(monitorResources, 5000);

    return () => {
      clearInterval(resourceMonitorInterval);
      window.removeEventListener('load', measureNavigationTiming);
    };
  }, [onMetricsUpdate, enableLogging]);

  // Performance optimization hints
  useEffect(() => {
    if (!enableLogging) return;

    const logPerformanceHints = () => {
      const hints = [];

      if (metrics.lcp && metrics.lcp > 2500) {
        hints.push('LCP is slow. Consider optimizing images and critical resources.');
      }

      if (metrics.fid && metrics.fid > 100) {
        hints.push('FID is high. Consider reducing JavaScript execution time.');
      }

      if (metrics.cls && metrics.cls > 0.1) {
        hints.push('CLS is high. Ensure proper sizing for images and content.');
      }

      if (metrics.fcp && metrics.fcp > 1800) {
        hints.push('FCP is slow. Consider optimizing critical rendering path.');
      }

      if (hints.length > 0) {
        console.group('Performance Optimization Hints:');
        hints.forEach(hint => console.warn(hint));
        console.groupEnd();
      }
    };

    const timer = setTimeout(logPerformanceHints, 3000);
    return () => clearTimeout(timer);
  }, [metrics, enableLogging]);

  // Don't render anything in production
  if (!enableLogging) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-3 rounded-lg text-xs font-mono max-w-xs z-50">
      <div className="font-bold mb-2">Performance Metrics</div>
      <div className="space-y-1">
        {metrics.lcp && (
          <div className={`${metrics.lcp > 2500 ? 'text-red-400' : metrics.lcp > 1800 ? 'text-yellow-400' : 'text-green-400'}`}>
            LCP: {Math.round(metrics.lcp)}ms
          </div>
        )}
        {metrics.fid && (
          <div className={`${metrics.fid > 100 ? 'text-red-400' : metrics.fid > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            FID: {Math.round(metrics.fid)}ms
          </div>
        )}
        {metrics.cls && (
          <div className={`${metrics.cls > 0.1 ? 'text-red-400' : metrics.cls > 0.05 ? 'text-yellow-400' : 'text-green-400'}`}>
            CLS: {metrics.cls.toFixed(3)}
          </div>
        )}
        {metrics.fcp && (
          <div className={`${metrics.fcp > 1800 ? 'text-red-400' : metrics.fcp > 1200 ? 'text-yellow-400' : 'text-green-400'}`}>
            FCP: {Math.round(metrics.fcp)}ms
          </div>
        )}
        {metrics.ttfb && (
          <div className={`${metrics.ttfb > 800 ? 'text-red-400' : metrics.ttfb > 400 ? 'text-yellow-400' : 'text-green-400'}`}>
            TTFB: {Math.round(metrics.ttfb)}ms
          </div>
        )}
      </div>
    </div>
  );
}