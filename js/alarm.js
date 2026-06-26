// =====================================
// SafeHer Ultra X - Alarm Module
// File: js/alarm.js
// =====================================

(function () {
  "use strict";

  let audioContext = null;
  let oscillator = null;
  let gainNode = null;

  function stopAlarm() {
    try {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
      }

      if (gainNode) {
        gainNode.disconnect();
        gainNode = null;
      }

      if (audioContext) {
        audioContext.close();
        audioContext = null;
      }

      if ("vibrate" in navigator) {
        navigator.vibrate(0);
      }

      alert("🔕 Emergency Alarm Stopped");

    } catch (error) {
      console.error(error);
    }
  }

  function startAlarm() {
    if (oscillator) {
      stopAlarm();
      return;
    }

    try {
      audioContext =
        new (window.AudioContext || window.webkitAudioContext)();

      oscillator = audioContext.createOscillator();
      gainNode = audioContext.createGain();

      oscillator.type = "square";
      oscillator.frequency.value = 1000;

      gainNode.gain.value = 0.4;

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();

      if ("vibrate" in navigator) {
        navigator.vibrate([500, 300, 500, 300, 500]);
      }

      alert("🚨 Emergency Alarm Started");

    } catch (error) {
      console.error(error);
      alert("Unable to start alarm.");
    }
  }

  function initAlarm() {
    const btn = document.getElementById("alarmBtn");

    if (!btn) return;

    btn.addEventListener("click", function () {
      if (oscillator) {
        stopAlarm();
      } else {
        startAlarm();
      }
    });
  }

  document.addEventListener(
    "DOMContentLoaded",
    initAlarm
  );
})();
