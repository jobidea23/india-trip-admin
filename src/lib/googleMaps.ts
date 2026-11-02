// Loads Google Maps JS API dynamically. Returns false if key not configured.

let loaded = false;
let loadingPromise: Promise<boolean> | null = null;

export function getGoogleMapsKey() {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
}

export function isMapsConfigured() {
  return Boolean(getGoogleMapsKey());
}

export function loadGoogleMaps(): Promise<boolean> {
  if (loaded) return Promise.resolve(true);
  if (loadingPromise) return loadingPromise;
  const key = getGoogleMapsKey();
  if (!key) return Promise.resolve(false);
  loadingPromise = new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places,geometry`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      loaded = true;
      resolve(true);
    };
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
  return loadingPromise;
}

export function haversineKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }) {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((a.lat * Math.PI) / 180) *
      Math.cos((b.lat * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
