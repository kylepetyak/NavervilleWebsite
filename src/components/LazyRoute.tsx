import { Suspense, lazy, ComponentType } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface LazyRouteProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  props?: any;
  fallback?: React.ReactNode;
  errorFallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export function LazyRoute({ 
  component, 
  props = {}, 
  fallback,
  errorFallback 
}: LazyRouteProps) {
  const LazyComponent = lazy(component);

  const defaultFallback = (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <div className="text-gray-600">Loading...</div>
      </div>
    </div>
  );

  const defaultErrorFallback = ({ error, resetError }: { error: Error; resetError: () => void }) => (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4 max-w-md mx-auto px-4">
        <div className="text-red-600">
          <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>
        <p className="text-gray-600">We're sorry, but there was an error loading this page.</p>
        <button
          onClick={resetError}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-4 text-left">
            <summary className="cursor-pointer text-sm text-gray-500">Error Details</summary>
            <pre className="mt-2 text-xs text-red-600 bg-red-50 p-2 rounded overflow-auto">
              {error.message}
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    </div>
  );

  return (
    <ErrorBoundary fallback={errorFallback || defaultErrorFallback}>
      <Suspense fallback={fallback || defaultFallback}>
        <LazyComponent {...props} />
      </Suspense>
    </ErrorBoundary>
  );
}