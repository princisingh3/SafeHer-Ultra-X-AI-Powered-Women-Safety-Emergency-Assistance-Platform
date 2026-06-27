// =====================================
// SafeHer Ultra X - Voice SOS
// File: js/voice-sos.js
// =====================================

(function () {
  "use strict";

  let recognition = null;
  let isListening = false;

  function startVoiceSOS() {
    if (isListening) {
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice recognition is not supported on this device.");
      return;
    }

    recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    isListening = true;

    recognition.onstart = function () {
      alert("🎤 Listening...\nSay 'Help' or 'SOS'");
    };

    recognition.onresult = function (event) {
      const text =
        event.results[0][0].transcript.toLowerCase();

      console.log("Voice:", text);

      if (
        text.includes("help") ||
        text.includes("sos")
      ) {
        const sosBtn =
          document.getElementById("sosBtn");

        if (sosBtn) {
          sosBtn.click();
        }
      } else {
        alert("No SOS keyword detected.");
      }
    };

    recognition.onerror = function () {
      alert("Voice recognition failed.");
    };

    recognition.onend = function () {
      isListening = false;
    };

    recognition.start();
  }

  function init() {
    const btn =
      document.getElementById("voiceSOSBtn");

    if (!btn) return;

    btn.addEventListener(
      "click",
      startVoiceSOS
    );
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
