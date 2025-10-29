/**
 * GoHighLevel Integration Component
 *
 * This component handles the initialization of GoHighLevel tracking
 * and provides hooks for GHL integration throughout the app.
 */

import { useEffect } from 'react';
import { initializeGHL, trackPageView } from '../services/ghlService';
import { ghlConfig } from '../config/ghl';

export function GHLIntegration() {
  useEffect(() => {
    // Initialize GHL on component mount
    if (ghlConfig.enabled) {
      initializeGHL();

      // Track initial page view
      trackPageView('Home', window.location.href);
    }

    // Track page views on route changes
    const handleRouteChange = () => {
      if (ghlConfig.enableTracking) {
        trackPageView(document.title, window.location.href);
      }
    };

    // Listen for route changes (for SPA navigation)
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // This component doesn't render anything
  return null;
}

/**
 * Hook to track GHL events in functional components
 */
export function useGHLTracking() {
  const { trackEvent, trackPhoneClick, trackSpecialOfferClick, trackAppointmentIntent } = require('../services/ghlService');

  return {
    trackEvent,
    trackPhoneClick,
    trackSpecialOfferClick,
    trackAppointmentIntent,
  };
}

/**
 * GHL Phone Click Tracker Component
 * Wrap phone number links with this component to track clicks
 */
interface PhoneClickTrackerProps {
  children: React.ReactNode;
  source: string;
  onClick?: () => void;
}

export function PhoneClickTracker({ children, source, onClick }: PhoneClickTrackerProps) {
  const { trackPhoneClick } = useGHLTracking();

  const handleClick = () => {
    trackPhoneClick(source);
    if (onClick) {
      onClick();
    }
  };

  return (
    <span onClick={handleClick}>
      {children}
    </span>
  );
}

/**
 * GHL Appointment Button Tracker
 * Wrap appointment booking buttons with this to track intent
 */
interface AppointmentButtonTrackerProps {
  children: React.ReactNode;
  serviceType?: string;
  onClick?: () => void;
}

export function AppointmentButtonTracker({ children, serviceType, onClick }: AppointmentButtonTrackerProps) {
  const { trackAppointmentIntent } = useGHLTracking();

  const handleClick = () => {
    trackAppointmentIntent(serviceType);
    if (onClick) {
      onClick();
    }
  };

  return (
    <span onClick={handleClick}>
      {children}
    </span>
  );
}
