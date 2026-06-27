// =====================================
// SafeHer Ultra X - Safety Check-In
// File: js/checkin.js
// =====================================

(function () {
  "use strict";

  let timerId = null;

  function cancelCheckIn() {
    if (timerId) {
      clearTimeout(timerId);
      timerId = null;
      alert("✅ Check-In reminder cancelled.");
    }
  }

  function startCheckIn() {
    const input = prompt(
      "Check-In reminder after how many minutes?",
      "15"
    );

    if (input === null) return;

    const minutes = parseInt(input, 10);

    if (Number.isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid number.");
      return;
    }

    cancelCheckIn();

    timerId = setTimeout(function () {

      alert(
        "⏰ Safety Check-In Reminder\n\nPlease confirm that you are safe."
      );

      timerId = null;

    }, minutes * 60 * 1000);

    alert(
      "✅ Check-In reminder started for " +
      minutes +
      " minute(s)."
    );
  }

  function openMenu() {

    const option = prompt(
      "Safety Check-In\n\n" +
      "1 = Start Reminder\n" +
      "2 = Cancel Reminder"
    );

    switch (option) {

      case "1":
        startCheckIn();
        break;

      case "2":
        cancelCheckIn();
        break;

      default:
        break;
    }
  }

  function init() {

    const btn =
      document.getElementById("checkInBtn");

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
