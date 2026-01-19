import { EcommerceEventPayload } from '@salla.sa/ecommerce-events-base';
import { listeners } from './auto-listeners-registry';

console.log('[StoreEventsTracker] Script loaded');

if (typeof window === 'undefined' || !window.Salla) {
  console.error('[StoreEventsTracker] Salla is not available. Make sure Salla Twilight SDK is loaded.');
}

window.Salla.onReady(() => {
  console.log('[StoreEventsTracker] Salla ready, registering tracker...');
  window.Salla.analytics.registerTracker({
        name: "StoreEventsTracker",
        track: (eventName: string, payload: EcommerceEventPayload) => {
          const listener = listeners.get(eventName);

          if (!listener) {
            return;
          }

          // Handle the event
          try {
            listener(payload);
          } catch (error) {
            console.error(`Error handling event ${eventName}:`, error);
          }
        },
        page: (payload: any) => {
          console.log('[StoreEventsTracker] Page Event:', payload);
        }
      });
  console.log('[StoreEventsTracker] Tracker registered successfully');
});