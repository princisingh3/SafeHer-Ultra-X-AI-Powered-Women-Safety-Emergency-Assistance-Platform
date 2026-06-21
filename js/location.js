// =====================================
// SafeHer Ultra X - Location Module
// File: js/location.js
// =====================================

(function () {
  "use strict";

  function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    alert(
      `📍 Current Location\n\nLatitude: ${latitude}\nLongitude: ${longitude}`
    );

    console.log("Current Location:", {
      latitude,
      longitude,
    });
  }

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("Location permission denied.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("Location request timed out.");
        break;
      default:
        alert("Unable to get your location.");
    }
  }

  function getCurrentLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      showLocation,
      showError,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  }

  function initLocation() {
    const locationBtn = document.getElementById("locationBtn");

    if (!locationBtn) return;

    locationBtn.addEventListener("click", getCurrentLocation);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLocation);
  } else {
    initLocation();
  }
})();
