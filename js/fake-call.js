// =====================================
// SafeHer Ultra X - Fake Call Module
// File: js/fake-call.js
// =====================================

(function () {
  "use strict";

  function startFakeCall() {
    const callerName =
      prompt("Enter caller name:", "Family Member") || "Unknown Caller";

    const delayInput = prompt(
      "Start fake call after how many seconds?",
      "5"
    );

    const delay = Number(delayInput);

    if (!Number.isFinite(delay) || delay < 0) {
      alert("Please enter a valid number of seconds.");
      return;
    }

    alert(`📞 Fake call scheduled in ${delay} second(s).`);

    setTimeout(() => {
      const answer = confirm(
        `📞 Incoming Call\n\n${callerName}\n\nPress OK to Answer or Cancel to Decline.`
      );

      if (answer) {
        alert(`Connected to "${callerName}" (Simulation Only)`);
      } else {
        alert("Call Declined");
      }
    }, delay * 1000);
  }

  function initFakeCall() {
    const fakeCallBtn = document.getElementById("fakeCallBtn");

    if (!fakeCallBtn) {
      return;
    }

    fakeCallBtn.addEventListener("click", startFakeCall);
  }

  document.addEventListener("DOMContentLoaded", initFakeCall);
})();
