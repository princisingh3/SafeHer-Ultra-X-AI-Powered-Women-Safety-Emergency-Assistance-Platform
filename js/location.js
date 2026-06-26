// =====================================
// SafeHer Ultra X - Location Module
// File: js/location.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_last_location";

  function saveLocation(latitude, longitude) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        latitude,
        longitude,
        time: new Date().toLocaleString()
      })
    );
  }

  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    saveLocation(latitude, longitude);

    const mapLink =
      `https://maps.google.com/?q=${latitude},${longitude}`;

    const message =
      `📍 Current Location

Latitude: ${latitude}
Longitude: ${longitude}

Map:
${mapLink}`;

    if (navigator.share) {
      navigator.share({
        title: "My Current Location",
        text: message
      }).catch(() => {});
    }

    alert(message);
  }

  function showLastLocation() {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      alert("No saved location found.");
      return;
    }

    const data = JSON.parse(saved);

    alert(
`📍 Last Saved Location

Latitude: ${data.latitude}
Longitude: ${data.longitude}

Saved:
${data.time}`
    );
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Location permission denied.");
        break;

      case error.POSITION_UNAVAILABLE:
        alert("Location unavailable.");
        break;

      case error.TIMEOUT:
        alert("Location request timed out.");
        break;

      default:
        showLastLocation();
    }
  }

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      showLocation,
      showError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  }

  function init() {
    const btn =
      document.getElementById("locationBtn");

    if (!btn) return;

    btn.addEventListener(
      "click",
      getCurrentLocation
    );
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
