// =====================================
// SafeHer Ultra X - Trip Monitor
// File: js/trip-monitor.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_trip_status";

  function startTrip() {
    const destination = prompt("Enter your destination:");

    if (!destination) {
      return;
    }

    const tripData = {
      destination: destination.trim(),
      startedAt: new Date().toLocaleString(),
      active: true
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(tripData)
    );

    alert("🚕 Trip started successfully.");
  }

  function viewTrip() {
    const trip = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "null"
    );

    if (!trip || !trip.active) {
      alert("No active trip found.");
      return;
    }

    alert(
      "🚕 Active Trip\n\n" +
      "Destination: " + trip.destination + "\n" +
      "Started: " + trip.startedAt
    );
  }

  function endTrip() {
    localStorage.removeItem(STORAGE_KEY);
    alert("✅ Trip ended.");
  }

  function initTripMonitor() {
    const btn = document.getElementById("tripBtn");

    if (!btn) return;

    btn.addEventListener("click", () => {
      const action = prompt(
        "Type:\nstart - Start Trip\nview - View Trip\nend - End Trip"
      );

      if (!action) return;

      switch (action.toLowerCase()) {
        case "start":
          startTrip();
          break;
        case "view":
          viewTrip();
          break;
        case "end":
          endTrip();
          break;
        default:
          alert("Invalid option.");
      }
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    initTripMonitor
  );
})();
