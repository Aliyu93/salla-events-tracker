const l = /* @__PURE__ */ new Map();
console.log("[StoreEventsTracker] Script loaded");
(typeof window > "u" || !window.Salla) && console.error("[StoreEventsTracker] Salla is not available. Make sure Salla Twilight SDK is loaded.");
window.Salla.onReady(() => {
  console.log("[StoreEventsTracker] Salla ready, registering tracker..."), window.Salla.analytics.registerTracker({
    name: "StoreEventsTracker",
    track: (e, a) => {
      const r = l.get(e);
      if (r)
        try {
          r(a);
        } catch (o) {
          console.error(`Error handling event ${e}:`, o);
        }
    },
    page: (e) => {
      console.log("[StoreEventsTracker] Page Event:", e);
    }
  }), console.log("[StoreEventsTracker] Tracker registered successfully");
});
