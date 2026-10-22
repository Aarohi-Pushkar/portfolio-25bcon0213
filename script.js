(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const year = document.getElementById("year");
  const greeting = document.getElementById("greeting");
  const storageKey = "profile-theme";

  function applyTheme(theme) {
    const isDark = theme === "dark";
    if (isDark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (toggle) {
      toggle.setAttribute("aria-pressed", String(isDark));
      toggle.textContent = isDark
        ? "Switch to light theme"
        : "Switch to dark theme";
    }
  }

  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved || (prefersDark ? "dark" : "light"));

  if (toggle) {
    toggle.addEventListener("click", function () {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  if (greeting) {
    const hour = new Date().getHours();
    const timeOfDay =
      hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    greeting.textContent =
      timeOfDay + " — Aspiring AI/ML Engineer | Python Developer";
  }
})();
