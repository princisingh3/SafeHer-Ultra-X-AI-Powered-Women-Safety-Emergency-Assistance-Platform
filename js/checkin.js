// =====================================
// SafeHer Ultra X - Safety Check-In
// File: js/checkin.js
// =====================================

(function () {
  "use strict";

  let timerId = null;

  function startCheckIn() {
    const minutes = prompt(
      "Check-in reminder after how many minutes?",
      "15"
    );

    if (!minutes) return;

    const delay = Number(minutes);

    if (isNaN(delay) || delay <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      alert(
        "⏰ Safety Check-In Reminder\n\nPlease confirm that you are safe."
      );
    }, delay * 60 * 1000);

    alert("✅ Check-in reminder has been started.");
  }

  function initCheckIn() {
    const btn = document.getElementById("checkInBtn");

    if (!btn) return;

    btn.addEventListener("click", startCheckIn);
  }

  document.addEventListener(
    "DOMContentLoaded",
    initCheckIn
  );
})();
