// =====================================
// SafeHer Ultra X - Fake Call Module
// File: js/fake-call.js
// =====================================

(function () {
  "use strict";

  let fakeCallTimer = null;

  function clearFakeCall() {
    if (fakeCallTimer) {
      clearTimeout(fakeCallTimer);
      fakeCallTimer = null;
    }
  }

  function startFakeCall() {
    clearFakeCall();

    const callerName =
      prompt("Enter caller name:", "Family Member");

    if (callerName === null) return;

    const name = callerName.trim() || "Unknown Caller";

    const delayInput = prompt(
      "Start fake call after how many seconds?",
      "5"
    );

    if (delayInput === null) return;

    const delay = parseInt(delayInput, 10);

    if (Number.isNaN(delay) || delay < 0) {
      alert("Please enter a valid number.");
      return;
    }

    alert(`📞 Fake call will start in ${delay} second(s).`);

    fakeCallTimer = setTimeout(function () {

      const answer = confirm(
        `📞 Incoming Call\n\n${name}\n\nPress OK to Answer\nPress Cancel to Decline`
      );

      if (answer) {
        alert(`✅ Connected to ${name}\n\n(Simulation Only)`);
      } else {
        alert("❌ Call Declined");
      }

      fakeCallTimer = null;

    }, delay * 1000);
  }

  function init() {
    const btn = document.getElementById("fakeCallBtn");

    if (!btn) return;

    btn.addEventListener("click", startFakeCall);
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
