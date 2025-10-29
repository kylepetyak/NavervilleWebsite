/**
 * GoHighLevel (GHL) Configuration
 *
 * This file contains configuration for GoHighLevel CRM integration.
 * Update the environment variables in .env.local with your actual GHL credentials.
 */

export const ghlConfig = {
  // GHL Location ID (required)
  locationId: import.meta.env.VITE_GHL_LOCATION_ID || '',

  // GHL API Key (required for API calls)
  apiKey: import.meta.env.VITE_GHL_API_KEY || '',

  // GHL Webhook URL (for form submissions)
  webhookUrl: import.meta.env.VITE_GHL_WEBHOOK_URL || '',

  // GHL Calendar ID (for appointment booking)
  calendarId: import.meta.env.VITE_GHL_CALENDAR_ID || '',

  // GHL Form ID (for contact forms)
  formId: import.meta.env.VITE_GHL_FORM_ID || '',

  // GHL API Base URL
  apiBaseUrl: 'https://services.leadconnectorhq.com',

  // Feature flags
  enabled: Boolean(import.meta.env.VITE_GHL_LOCATION_ID),
  enableTracking: import.meta.env.VITE_NODE_ENV === 'production',
  enableConversations: true,
  enableAppointments: true,

  // Chat widget settings
  chatWidget: {
    enabled: import.meta.env.VITE_ENABLE_CHAT_WIDGET === 'true',
    position: 'bottom-right' as const,
    theme: 'light' as const,
  },

  // Booking widget settings
  bookingWidget: {
    enabled: import.meta.env.VITE_ENABLE_BOOKING_WIDGET === 'true',
    defaultServiceType: 'New Patient Consultation',
    showCalendar: true,
  }
};

/**
 * Check if GHL integration is properly configured
 */
export function isGHLConfigured(): boolean {
  return Boolean(
    ghlConfig.locationId &&
    ghlConfig.apiKey
  );
}

/**
 * Get GHL tracking script URL
 */
export function getGHLTrackingScript(): string | null {
  if (!ghlConfig.enabled || !ghlConfig.locationId) {
    return null;
  }

  return `https://widgets.leadconnectorhq.com/loader.js?locationId=${ghlConfig.locationId}`;
}

/**
 * Get GHL chat widget configuration
 */
export function getGHLChatConfig() {
  return {
    locationId: ghlConfig.locationId,
    position: ghlConfig.chatWidget.position,
    theme: ghlConfig.chatWidget.theme,
  };
}
