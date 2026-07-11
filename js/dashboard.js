import { initTheme } from "./theme.js";
import { clearSession } from "./storage.js";

initTheme();

// Logout: delete ONLY the session, users and clients stay intact
document.querySelector("#logout-btn").addEventListener("click", () => {
  clearSession();
  window.location.href = "index.html";
});
