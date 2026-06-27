// =====================================
// SafeHer Ultra X - Trip Monitor
// File: js/trip-monitor.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_trip_status";

  function getTrip() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "null"
      );
    } catch {
      return null;
    }
  }

  function startTrip() {
    const destination = prompt("Enter your destination:");

    if (destination === null) return;

    const place = destination.trim();

    if (!place) {
      alert("Destination cannot be empty.");
      return;
    }

    const trip = {
      destination: place,
      startedAt: new Date().toLocaleString(),
      active: true
    };

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(trip)
    );

    alert("🚕 Trip started successfully.");
  }

  function viewTrip() {
    const trip = getTrip();

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

  function openMenu() {
    const option = prompt(
      "Trip Monitor\n\n" +
      "1 = Start Trip\n" +
      "2 = View Trip\n" +
      "3 = End Trip"
    );

    switch (option) {

      case "1":
        startTrip();
        break;

      case "2":
        viewTrip();
        break;

      case "3":
        endTrip();
        break;

      default:
        break;
    }
  }

  function init() {
    const btn =
      document.getElementById("tripBtn");

    if (!btn) return;

    btn.addEventListener(
      "click",
      openMenu
    );
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );

})();
