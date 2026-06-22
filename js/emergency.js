// =====================================
// SafeHer Ultra X - Emergency Message
// File: js/emergency.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_sos_message";

  function getSavedMessage() {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      "🚨 I need help. Please contact me immediately."
    );
  }

  function saveMessage() {
    const current = getSavedMessage();

    const message = prompt(
      "Enter your custom emergency message:",
      current
    );

    if (message === null) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, message.trim());

    alert("✅ Emergency message saved successfully.");
  }

  function viewMessage() {
    alert(getSavedMessage());
  }

  function initEmergencyMessage() {
    const button = document.getElementById("emergencyMsgBtn");

    if (!button) return;

    button.addEventListener("click", () => {
      const edit = confirm(
        "Press OK to view your emergency message.\nPress Cancel to edit it."
      );

      if (edit) {
        viewMessage();
      } else {
        saveMessage();
      }
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    initEmergencyMessage
  );
})();
