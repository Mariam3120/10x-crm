import { requireAuth } from "./guard.js";
import { initTheme } from "./theme.js";
import { initNav } from "./nav.js";

function initDashboardPage() {
  initTheme();
  initNav();   // logout + active link now live here
}

if (requireAuth()) {
  initDashboardPage();
}

