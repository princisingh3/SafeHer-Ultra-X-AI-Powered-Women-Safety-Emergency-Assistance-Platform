// =====================================
// SafeHer Ultra X - SOS Module
// File: js/sos.js
// =====================================

(function () {
  "use strict";

  const SOS_HISTORY_KEY = "safeher_sos_history";
  const CONTACTS_KEY = "safeher_contacts";

  function saveSOSHistory() {
    const history = JSON.parse(
      localStorage.getItem(SOS_HISTORY_KEY) || "[]"
    );

    history.push({
      time: new Date().toLocaleString(),
      online: navigator.onLine
    });

    localStorage.setItem(
      SOS_HISTORY_KEY,
      JSON.stringify(history)
    );
  }

  function getEmergencyContacts() {
    try {
      return JSON.parse(
        localStorage.getItem(CONTACTS_KEY) || "[]"
      );
    } catch {
      return [];
    }
  }

  function triggerSOS() {
    saveSOSHistory();

    const contacts = getEmergencyContacts();

    let message =
      "🆘 SOS ACTIVATED\n\n" +
      "Time: " +
      new Date().toLocaleString() +
      "\n\n";

    if (contacts.length > 0) {
      message += "Emergency Contacts:\n";

      contacts.forEach((contact, index) => {
        message +=
          `${index + 1}. ${contact.name} (${contact.phone})\n`;
      });

      message +=
        "\nPlease contact these people or share your location immediately.";
    } else {
      message +=
        "No emergency contacts have been added yet.\nPlease add at least one contact.";
    }

    alert(message);

    // Vibrate if supported
    if ("vibrate" in navigator) {
      navigator.vibrate([500, 200, 500, 200, 500]);
    }
  }

  function initSOS() {
    const btn = document.getElementById("sosBtn");

    if (!btn) return;

    btn.addEventListener("click", triggerSOS);
  }

  document.addEventListener(
    "DOMContentLoaded",
    initSOS
  );
})();
