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

  function getCurrentTheme() {
    return localStorage.getItem(THEME_KEY) || "light";
  }

  function toggleTheme() {
    const nextTheme =
      getCurrentTheme() === "light"
        ? "dark"
        : "light";

    applyTheme(nextTheme);

    alert("✅ Theme changed to " + nextTheme + " mode.");
  }

  function resetSettings() {
    localStorage.removeItem(THEME_KEY);

    applyTheme("light");

    alert("⚙️ Settings reset successfully.");
  }

  function openMenu() {
    const option = prompt(
      "Settings\n\n" +
      "1 = Toggle Theme\n" +
      "2 = Reset Settings"
    );

    switch (option) {
      case "1":
        toggleTheme();
        break;

      case "2":
        resetSettings();
        break;

      default:
        break;
    }
  }

  function init() {
    applyTheme(getCurrentTheme());

    const btn =
      document.getElementById("settingsBtn");

    if (!btn) return;

    btn.addEventListener("click", openMenu);
  }

  document.addEventListener(
    "DOMContentLoaded",
    init
  );
})();
