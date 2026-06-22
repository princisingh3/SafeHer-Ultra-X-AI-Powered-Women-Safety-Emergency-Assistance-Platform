// =====================================
// SafeHer Ultra X - Voice SOS
// File: js/voice-sos.js
// =====================================

(function () {
  "use strict";

  function startVoiceRecognition() {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported on this device.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function (event) {
      const text = event.results[0][0].transcript.toLowerCase();

      if (text.includes("help") || text.includes("sos")) {
        const sosBtn = document.getElementById("sosBtn");
        if (sosBtn) {
          sosBtn.click();
        }
      }
    };

    recognition.start();
  }

  function initVoiceSOS() {
    const btn = document.getElementById("voiceSOSBtn");
    if (!btn) return;

    btn.addEventListener("click", startVoiceRecognition);
  }

  document.addEventListener("DOMContentLoaded", initVoiceSOS);
})();
