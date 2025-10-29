# GoHighLevel (GHL) Integration Guide

This guide explains how to integrate GoHighLevel CRM with your Camelback Medical Centers website.

## Table of Contents
1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
3. [Environment Variables](#environment-variables)
4. [Features](#features)
5. [Usage Examples](#usage-examples)
6. [Testing](#testing)
7. [Troubleshooting](#troubleshooting)

## Overview

GoHighLevel is integrated into this website to provide:
- Lead capture and tracking
- Appointment booking
- Contact form submissions
- User activity tracking
- Chat widget (optional)
- Marketing automation

## Setup Instructions

### Step 1: Get Your GHL Credentials

1. Log in to your GoHighLevel account
2. Navigate to **Settings** > **Business Profile**
3. Find and copy your **Location ID**
4. Go to **Settings** > **API**
5. Create a new API key and copy it

### Step 2: Configure Calendar & Forms

1. In GHL, go to **Calendars**
2. Create or select a calendar for appointments
3. Copy the **Calendar ID**
4. Go to **Sites** > **Forms**
5. Create your contact forms
6. Copy the **Form IDs** you want to use

### Step 3: Set Up Webhooks

1. In GHL, navigate to **Settings** > **Webhooks**
2. Create a new webhook for form submissions
3. Copy the webhook URL
4. Configure which events to track (recommended: form submissions, appointments)

### Step 4: Update Environment Variables

Copy `.env.example` to `.env.local` and fill in your GHL credentials:

```bash
cp .env.example .env.local
```

Then update these variables:

```env
VITE_GHL_LOCATION_ID=your_location_id_here
VITE_GHL_API_KEY=your_api_key_here
VITE_GHL_WEBHOOK_URL=https://services.leadconnectorhq.com/hooks/your_webhook_id
VITE_GHL_CALENDAR_ID=your_calendar_id_here
VITE_GHL_FORM_ID=your_form_id_here
```

### Step 5: Enable GHL Features

In your `.env.local`, enable the features you want to use:

```env
VITE_ENABLE_CHAT_WIDGET=true
VITE_ENABLE_BOOKING_WIDGET=true
```

### Step 6: Deploy

After configuring, rebuild and deploy your application:

```bash
npm run build
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_GHL_LOCATION_ID` | Yes | Your GHL location ID |
| `VITE_GHL_API_KEY` | Yes | Your GHL API key |
| `VITE_GHL_WEBHOOK_URL` | Yes | Webhook URL for form submissions |
| `VITE_GHL_CALENDAR_ID` | No | Calendar ID for appointment booking |
| `VITE_GHL_FORM_ID` | No | Default form ID |
| `VITE_ENABLE_CHAT_WIDGET` | No | Enable/disable chat widget |
| `VITE_ENABLE_BOOKING_WIDGET` | No | Enable/disable booking widget |

## Features

### 1. Lead Tracking

Automatically tracks website visitors and their activities:
- Page views
- Button clicks
- Form submissions
- Phone number clicks

### 2. Contact Form Integration

Forms automatically submit to GHL:
- New patient forms
- Contact forms
- Newsletter signups

### 3. Appointment Booking

Integrated booking widget for scheduling appointments:
- Opens GHL calendar widget
- Pre-fills patient information
- Syncs with GHL calendar

### 4. Chat Widget

Live chat functionality:
- Appears on all pages
- Customizable position and theme
- Connects to GHL conversations

### 5. Event Tracking

Tracks important user actions:
- Special offer clicks
- Service page visits
- Phone call clicks
- Appointment intent

## Usage Examples

### Tracking Form Submissions

```typescript
import { submitNewPatientForm } from '@/services/ghlService';

const handleFormSubmit = async (formData) => {
  const result = await submitNewPatientForm({
    firstName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    chiefComplaint: formData.complaint,
    preferredDate: formData.appointmentDate,
  });

  if (result.success) {
    console.log('Lead submitted to GHL successfully');
  }
};
```

### Tracking Phone Clicks

```typescript
import { PhoneClickTracker } from '@/components/GHLIntegration';

<PhoneClickTracker source="Hero Section">
  <Button>
    <Phone /> Call Now: (630) 416-1151
  </Button>
</PhoneClickTracker>
```

### Tracking Appointment Intent

```typescript
import { AppointmentButtonTracker } from '@/components/GHLIntegration';

<AppointmentButtonTracker serviceType="New Patient Consultation">
  <Button onClick={handleBooking}>
    Schedule Appointment
  </Button>
</AppointmentButtonTracker>
```

### Manual Event Tracking

```typescript
import { trackEvent } from '@/services/ghlService';

// Track custom events
trackEvent('video_played', {
  video_title: 'Patient Testimonial',
  video_duration: 120,
});

trackEvent('service_viewed', {
  service_name: 'Chiropractic Care',
  service_category: 'Back Pain',
});
```

### Opening Booking Widget

```typescript
import { openBookingWidget } from '@/services/ghlService';

const handleBookNow = () => {
  openBookingWidget(); // Uses default calendar ID
  // or
  openBookingWidget('specific-calendar-id');
};
```

## Testing

### Development Testing

1. Use GHL's test/sandbox environment
2. Set up test webhooks
3. Verify console logs for tracking events
4. Check GHL dashboard for test leads

### Production Testing

1. Submit a test form with identifiable data
2. Check GHL contacts for the new lead
3. Verify tags and custom fields are correct
4. Test appointment booking flow
5. Verify phone click tracking

## Troubleshooting

### Common Issues

#### 1. GHL Script Not Loading

**Problem:** GHL tracking script fails to load

**Solution:**
- Check that `VITE_GHL_LOCATION_ID` is set correctly
- Verify the location ID in your GHL account
- Check browser console for errors
- Ensure your GHL account is active

#### 2. Forms Not Submitting to GHL

**Problem:** Form submissions don't appear in GHL

**Solution:**
- Verify webhook URL is correct
- Check GHL webhook configuration
- Ensure webhook is active and listening
- Check network tab for failed requests
- Verify API key permissions

#### 3. Chat Widget Not Appearing

**Problem:** Chat widget doesn't show up

**Solution:**
- Verify `VITE_ENABLE_CHAT_WIDGET=true`
- Check that GHL chat widget is configured in GHL dashboard
- Ensure location ID is correct
- Clear browser cache and reload

#### 4. Events Not Tracking

**Problem:** Custom events don't appear in GHL

**Solution:**
- Verify GHL script is loaded (check window.ghl object)
- Ensure tracking is enabled in production
- Check event names match GHL expectations
- Verify location ID is correct

### Debug Mode

To enable debug logging, add to your `.env.local`:

```env
VITE_DEBUG_GHL=true
```

Then check browser console for detailed GHL tracking logs.

## Best Practices

1. **Always test in sandbox first** - Use GHL's test environment before production
2. **Tag leads appropriately** - Use consistent tagging for better organization
3. **Track meaningful events** - Don't over-track; focus on conversion events
4. **Handle errors gracefully** - Always wrap GHL calls in try-catch
5. **Respect user privacy** - Follow GDPR/CCPA guidelines
6. **Monitor webhook status** - Regularly check webhook health in GHL
7. **Use custom fields wisely** - Keep custom fields organized and documented

## Support

For GHL-specific issues:
- GoHighLevel Support: https://support.gohighlevel.com
- GHL API Documentation: https://highlevel.stoplight.io

For integration issues with this website:
- Check the `/src/services/ghlService.ts` file
- Review the `/src/config/ghl.ts` configuration
- Contact your development team

## Additional Resources

- [GHL API Documentation](https://highlevel.stoplight.io)
- [GHL Webhooks Guide](https://help.gohighlevel.com/support/solutions/articles/48001185304)
- [GHL Calendar Widget Setup](https://help.gohighlevel.com/support/solutions/folders/48000687519)
