import { requireAuth } from "./guard.js";
import { initTheme } from "./theme.js";
import { clearSession } from "./storage.js";

function initDashboardPage() {
  initTheme();

  document.querySelector("#logout-btn").addEventListener("click", () => {
    clearSession();
    window.location.href = "index.html";
  });
}

// Protected page: only build it if the user IS logged in
if (requireAuth()) {
  initDashboardPage();
}
