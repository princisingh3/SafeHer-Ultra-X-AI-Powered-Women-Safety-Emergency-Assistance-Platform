// =====================================
// SafeHer Ultra X - Medical ID
// File: js/medical.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_medical_id";

  function editMedicalInfo() {
    const existing = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    const name = prompt("Full Name:", existing.name || "");
    if (name === null) return;

    const bloodGroup = prompt(
      "Blood Group:",
      existing.bloodGroup || ""
    );
    if (bloodGroup === null) return;

    const allergies = prompt(
      "Allergies (optional):",
      existing.allergies || ""
    );
    if (allergies === null) return;

    const emergencyNote = prompt(
      "Medical Note (optional):",
      existing.emergencyNote || ""
    );
    if (emergencyNote === null) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        name: name.trim(),
        bloodGroup: bloodGroup.trim(),
        allergies: allergies.trim(),
        emergencyNote: emergencyNote.trim()
      })
    );

    alert("✅ Medical ID saved.");
  }

  function viewMedicalInfo() {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "{}"
    );

    if (!data.name) {
      alert("No Medical ID found. Please add your details.");
      return;
    }

    alert(
      "🩺 Medical ID\n\n" +
        "Name: " + data.name + "\n" +
        "Blood Group: " + data.bloodGroup + "\n" +
        "Allergies: " + data.allergies + "\n" +
        "Note: " + data.emergencyNote
    );
  }

  function initMedical() {
    const btn = document.getElementById("medicalBtn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const view = confirm(
        "Press OK to view Medical ID.\nPress Cancel to edit it."
      );

      if (view) {
        viewMedicalInfo();
      } else {
        editMedicalInfo();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", initMedical);
})();
