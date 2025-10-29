/**
 * GoHighLevel API Service
 *
 * This service handles all interactions with the GoHighLevel CRM API.
 * Use these functions to submit leads, book appointments, and track user activities.
 */

import { ghlConfig } from '../config/ghl';

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  source?: string;
  tags?: string[];
  customFields?: Record<string, any>;
}

export interface AppointmentData {
  contactId: string;
  calendarId: string;
  appointmentDate: string;
  appointmentTime: string;
  serviceType: string;
  notes?: string;
}

export interface LeadData extends ContactData {
  leadSource: string;
  campaignId?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  pageUrl?: string;
}

/**
 * Submit a contact/lead to GoHighLevel
 */
export async function submitContact(data: ContactData): Promise<any> {
  if (!ghlConfig.enabled || !ghlConfig.webhookUrl) {
    console.warn('GHL is not configured. Contact submission skipped.');
    return { success: false, error: 'GHL not configured' };
  }

  try {
    const payload = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      source: data.source || 'Website',
      tags: data.tags || ['Website Lead'],
      locationId: ghlConfig.locationId,
      customFields: data.customFields || {},
      timestamp: new Date().toISOString(),
    };

    const response = await fetch(ghlConfig.webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`GHL API error: ${response.statusText}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact to GHL:', error);
    return { success: false, error };
  }
}

/**
 * Track a page view in GoHighLevel
 */
export function trackPageView(pageName: string, pageUrl?: string): void {
  if (!ghlConfig.enabled || !ghlConfig.enableTracking) {
    return;
  }

  try {
    // GHL tracking via window object (if GHL script is loaded)
    if (typeof window !== 'undefined' && (window as any).ghl) {
      (window as any).ghl.track('page_view', {
        page: pageName,
        url: pageUrl || window.location.href,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
}

/**
 * Track a custom event in GoHighLevel
 */
export function trackEvent(eventName: string, eventData?: Record<string, any>): void {
  if (!ghlConfig.enabled || !ghlConfig.enableTracking) {
    return;
  }

  try {
    if (typeof window !== 'undefined' && (window as any).ghl) {
      (window as any).ghl.track(eventName, {
        ...eventData,
        timestamp: new Date().toISOString(),
      });
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

/**
 * Submit a new patient form to GoHighLevel
 */
export async function submitNewPatientForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  chiefComplaint?: string;
  preferredDate?: string;
  preferredTime?: string;
  howDidYouHear?: string;
}): Promise<any> {
  return submitContact({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    source: 'New Patient Form',
    tags: ['New Patient', 'Website Lead', '$29 Special Interest'],
    customFields: {
      chief_complaint: data.chiefComplaint || '',
      preferred_appointment_date: data.preferredDate || '',
      preferred_appointment_time: data.preferredTime || '',
      how_did_you_hear: data.howDidYouHear || 'Website',
      special_offer: '$29 New Patient Special',
    },
  });
}

/**
 * Submit a contact form to GoHighLevel
 */
export async function submitContactForm(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}): Promise<any> {
  return submitContact({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    phone: data.phone,
    source: 'Contact Form',
    tags: ['Website Lead', 'Contact Form'],
    customFields: {
      message: data.message,
      subject: data.subject || 'General Inquiry',
    },
  });
}

/**
 * Track appointment booking intent
 */
export function trackAppointmentIntent(serviceType?: string): void {
  trackEvent('appointment_intent', {
    service_type: serviceType || 'General',
    page: 'Booking',
  });
}

/**
 * Track phone call click
 */
export function trackPhoneClick(source: string): void {
  trackEvent('phone_click', {
    source,
    phone_number: '(630) 416-1151',
  });
}

/**
 * Track special offer interest
 */
export function trackSpecialOfferClick(offerName: string): void {
  trackEvent('special_offer_click', {
    offer_name: offerName,
    offer_value: '$29',
  });
}

/**
 * Initialize GHL tracking
 * Call this on app mount
 */
export function initializeGHL(): void {
  if (!ghlConfig.enabled) {
    console.log('GHL integration is disabled');
    return;
  }

  // Load GHL tracking script
  const scriptUrl = `https://widgets.leadconnectorhq.com/loader.js?locationId=${ghlConfig.locationId}`;

  const script = document.createElement('script');
  script.src = scriptUrl;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    console.log('GHL tracking script loaded successfully');
  };

  script.onerror = () => {
    console.error('Failed to load GHL tracking script');
  };

  document.head.appendChild(script);
}

/**
 * Load GHL chat widget
 */
export function loadGHLChatWidget(): void {
  if (!ghlConfig.chatWidget.enabled || !ghlConfig.locationId) {
    return;
  }

  // GHL chat widget will be loaded via the main tracking script
  // Additional configuration can be added here
  console.log('GHL chat widget enabled');
}

/**
 * Open GHL booking widget
 */
export function openBookingWidget(calendarId?: string): void {
  if (!ghlConfig.bookingWidget.enabled) {
    console.warn('GHL booking widget is not enabled');
    return;
  }

  const id = calendarId || ghlConfig.calendarId;

  if (typeof window !== 'undefined' && (window as any).ghl) {
    (window as any).ghl.openCalendar(id);
  } else {
    // Fallback: Open booking page in new tab
    const bookingUrl = `https://calendly.com/camelback-naperville`; // Update with actual URL
    window.open(bookingUrl, '_blank');
  }
}
