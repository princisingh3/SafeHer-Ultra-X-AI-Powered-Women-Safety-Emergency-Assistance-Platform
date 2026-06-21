// =====================================
// SafeHer Ultra X - SOS Module
// File: js/sos.js
// =====================================

(function () {
  "use strict";

  function showSOSAlert() {
    const confirmed = window.confirm(
      "🚨 Do you want to activate the SOS alert?"
    );

    if (!confirmed) {
      return;
    }

    // Placeholder for future emergency actions
    // (location sharing, SMS, API call, etc.)
    alert("🆘 SOS Activated! Emergency workflow started.");
    console.log("SOS activated at:", new Date().toISOString());
  }

  function initSOS() {
    const sosButton = document.getElementById("sosBtn");

    if (!sosButton) {
      console.warn("SOS button (#sosBtn) not found.");
      return;
    }

    sosButton.addEventListener("click", showSOSAlert);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSOS);
  } else {
    initSOS();
  }
})();
