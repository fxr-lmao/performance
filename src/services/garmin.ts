import * as AuthSession from 'expo-auth-session';

/**
 * Garmin Health SDK & OAuth Configuration
 * Note: Since this is a "No-backend" architecture, we are handling OAuth
 * via deep-linking/AuthSession and using an on-device webhook receiver
 * (or polling fallback) to keep all data local.
 */

// Placeholder for Garmin Client ID (to be configured in Garmin Developer Portal)
const GARMIN_CLIENT_ID = 'YOUR_GARMIN_CLIENT_ID';
const GARMIN_AUTH_URL = 'https://connect.garmin.com/oauthConfirm';

export class GarminService {
  /**
   * Initializes the Garmin OAuth Flux
   * Prompts the user to authorize the app to access Garmin Health data.
   * 
   * Uses the modern AuthSession.useAuthRequest pattern via a static wrapper.
   * In production, this would be called from a React component using the hook directly.
   */
  static async authorize(): Promise<string | null> {
    const redirectUri = AuthSession.makeRedirectUri({
      scheme: 'victor-performance',
    });

    const authUrl = `${GARMIN_AUTH_URL}?oauth_callback=${encodeURIComponent(redirectUri)}&client_id=${GARMIN_CLIENT_ID}`;

    try {
      // Use openAuthSessionAsync instead of the deprecated startAsync
      const result = await AuthSession.openAuthSessionAsync(authUrl, redirectUri);
      if (result.type === 'success' && result.url) {
        // Parse the oauth_token from the redirect URL
        const params = new URLSearchParams(result.url.split('?')[1] || '');
        const oauthToken = params.get('oauth_token');
        if (oauthToken) {
          return oauthToken;
        }
      }
    } catch (error) {
      console.error('Garmin OAuth Error:', error);
    }
    return null;
  }

  /**
   * On-device Webhook Listener / Data Sync
   * Since we are zero-server, this simulates webhook reception by pulling
   * the latest FIT files and HRV data directly from Garmin API via background fetch.
   */
  static async syncLatestData() {
    console.log('Fetching latest Garmin Health Data (HRV, Sleep, FIT)...');
    // Implementation for pulling daily summaries, sleep data, and FIT files
    // to calculate TSB and HRV Delta for the Readiness Engine.
  }
}
