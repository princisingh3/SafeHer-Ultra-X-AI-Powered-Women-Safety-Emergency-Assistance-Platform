// =====================================
// SafeHer Ultra X - Medical ID
// File: js/medical.js
// =====================================

(function () {
  "use strict";

  const STORAGE_KEY = "safeher_medical_id";

  function getMedicalData() {
    try {
      return JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "{}"
      );
    } catch {
      return {};
    }
  }

  function saveMedicalData(data) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(data)
    );
  }

  function editMedicalInfo() {
    const existing = getMedicalData();

    const name = prompt("Full Name:", existing.name || "");
    if (name === null) return;

    const bloodGroup = prompt(
      "Blood Group:",
      existing.bloodGroup || ""
    );
    if (bloodGroup === null) return;

    const allergies = prompt(
      "Allergies (Optional):",
      existing.allergies || ""
    );
    if (allergies === null) return;

    const medicalNote = prompt(
      "Medical Note (Optional):",
      existing.medicalNote || ""
    );
    if (medicalNote === null) return;

    saveMedicalData({
      name: name.trim(),
      bloodGroup: bloodGroup.trim(),
      allergies: allergies.trim(),
      medicalNote: medicalNote.trim(),
      updatedAt: new Date().toLocaleString()
    });

    alert("✅ Medical ID saved successfully.");
  }

  function viewMedicalInfo() {
    const data = getMedicalData();

    if (!data.name) {
      alert("No Medical ID found.");
      return;
    }

    alert(
      "🩺 Medical ID\n\n" +
      "Name: " + data.name + "\n" +
      "Blood Group: " + data.bloodGroup + "\n" +
      "Allergies: " + (data.allergies || "-") + "\n" +
      "Medical Note: " + (data.medicalNote || "-") + "\n\n" +
      "Last Updated:\n" +
      data.updatedAt
    );
  }

  function clearMedicalInfo() {
    localStorage.removeItem(STORAGE_KEY);
    alert("🗑️ Medical ID deleted.");
  }

  function openMenu() {
    const option = prompt(
      "Medical ID\n\n" +
      "1 = View\n" +
      "2 = Edit\n" +
      "3 = Delete"
    );

    switch (option) {
      case "1":
        viewMedicalInfo();
        break;

      case "2":
        editMedicalInfo();
        break;

      case "3":
        clearMedicalInfo();
        break;

      default:
        break;
    }
  }

  function init() {
    const btn = document.getElementById("medicalBtn");

    if (!btn) return;

    btn.addEventListener("click", openMenu);
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
