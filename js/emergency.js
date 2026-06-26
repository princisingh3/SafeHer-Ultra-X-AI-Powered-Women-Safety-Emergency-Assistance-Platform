// =====================================
// SafeHer Ultra X - Emergency Message
// File: js/emergency.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_sos_message";

  function getMessage() {
    return (
      localStorage.getItem(STORAGE_KEY) ||
      "🚨 I am in danger. Please help me immediately. My location will be shared."
    );
  }

  function saveMessage() {
    const current = getMessage();

    const message = prompt(
      "Enter your emergency message:",
      current
    );

    if (message === null) return;

    const text = message.trim();

    if (!text) {
      alert("Message cannot be empty.");
      return;
    }

    localStorage.setItem(STORAGE_KEY, text);

    alert("✅ Emergency message saved successfully.");
  }

  function viewMessage() {
    alert(
      "🚨 Saved Emergency Message\n\n" +
      getMessage()
    );
  }

  function resetMessage() {
    localStorage.removeItem(STORAGE_KEY);

    alert("✅ Emergency message reset to default.");
  }

  function openMenu() {
    const option = prompt(
      "Emergency Message\n\n" +
      "1 = View Message\n" +
      "2 = Edit Message\n" +
      "3 = Reset Default"
    );

    switch (option) {
      case "1":
        viewMessage();
        break;

      case "2":
        saveMessage();
        break;

      case "3":
        resetMessage();
        break;

      default:
        break;
    }
  }

  function init() {
    const btn =
      document.getElementById("emergencyMsgBtn");

    if (!btn) return;

    btn.addEventListener("click", openMenu);
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
