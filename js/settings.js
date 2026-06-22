// =====================================
// SafeHer Ultra X - Settings Module
// File: js/settings.js
// =====================================

(function () {
  "use strict";

  const THEME_KEY = "safeher_theme";

  function applyTheme(theme) {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_KEY, theme);
  }

  function toggleTheme() {
    const current =
      document.body.getAttribute("data-theme") || "light";

    const next = current === "light" ? "dark" : "light";

    applyTheme(next);

    alert("Theme changed to " + next + " mode.");
  }

  function initSettings() {
    const savedTheme =
      localStorage.getItem(THEME_KEY) || "light";

    applyTheme(savedTheme);

    const settingsBtn =
      document.getElementById("settingsBtn");

    if (!settingsBtn) return;

    settingsBtn.addEventListener("click", toggleTheme);
  }

  document.addEventListener(
    "DOMContentLoaded",
    initSettings
  );
})();
