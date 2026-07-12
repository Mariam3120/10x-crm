//shared navigation for protected pages
import { clearSession } from "./storage.js";

//page's purpose is to highlight the current page in the navigation 
// and handle logout functionality

export function initNav(){
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
//window location pathname returns the path of the current page, split by "/" 
// and get the last part (the file name). If it's empty, default to "index.html".
  document.querySelectorAll(".nav__link").forEach(link => {
    if(link.getAttribute("href") ===currentPage){
      link.classList.add("nav__link--active");
    }

  });
  //LOGOUT [remove only the session]
  const logoutBtn = document.querySelector(".nav__logout");
  if(logoutBtn){
    logoutBtn.addEventListener("click", () => {
      clearSession();
      window.location.href = "index.html";
    });
  }

}

//pro chain version
// logoutBtn?.addEventListener("click", () => {
//     clearSession();
//     window.location.href = "index.html";
//   });
