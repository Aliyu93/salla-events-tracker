const l = /* @__PURE__ */ new Map();
(typeof window > "u" || !window.Salla) && console.error("Salla is not available. Make sure Salla Twilight SDK is loaded.");
window.Salla.onReady(() => {
  window.Salla.analytics.registerTracker({
    name: "StoreEventsTracker",
    track: (e, r) => {
      const a = l.get(e);
      if (a)
        try {
          a(r);
        } catch (n) {
          console.error(`Error handling event ${e}:`, n);
        }
    },
    page: (e) => {
      console.log("Page Event:", e);
    }
  });
});
