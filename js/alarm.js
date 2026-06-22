// =====================================
// SafeHer Ultra X - Alarm Module
// File: js/alarm.js
// =====================================

(function () {
  "use strict";

  let audioContext = null;
  let oscillator = null;

  function startAlarm() {
    if (oscillator) {
      stopAlarm();
      return;
    }

    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();

      oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "square";
      oscillator.frequency.setValueAtTime(880, audioContext.currentTime);

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();

      alert("🔔 Emergency Alarm Started");
    } catch (error) {
      console.error(error);
      alert("Unable to start alarm on this device.");
    }
  }

  function stopAlarm() {
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect();
      oscillator = null;
    }

    if (audioContext) {
      audioContext.close();
      audioContext = null;
    }
  }

  function initAlarm() {
    const alarmBtn = document.getElementById("alarmBtn");

    if (!alarmBtn) return;

    alarmBtn.addEventListener("click", () => {
      if (oscillator) {
        stopAlarm();
      } else {
        startAlarm();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initAlarm);
})();
