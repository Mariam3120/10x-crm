import { requireAuth } from "./guard.js";
import { initTheme } from "./theme.js";
import { initNav } from "./nav.js";
import { loadClients } from "./data.js";

//APP state
let clients = []; //here will be stored 30 clients

//DOM things
const clientsList = document.querySelector("#clients-list");

//helper funciton for visual(money format)
function formatMoney(value) {
  return `$${value.toLocaleString("en-US")}`;
}

//show single centered message in list area
//used for loading clients... and no clients foun!

function showMessage(text) {
  clientsList.innerHTML = `<p class="clients__message">${text}</p>`;
}

/**
 * create an element with a class and (optionally) safe text.
 * textContent NEVER parses HTML, it inserts the string as literal text.
 */
function el(tag, className, text = "") {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== "") node.textContent = text;
  return node;
}
//build one card element from one client object
//no innerHTML
function createClientCard(client) {
  const card = el("article", "client-card");
  card.dataset.id = client.id;

  //top avatar and name and company
  const top = el("div", "client-card__top");

  const avatar = el("img", "client-card__avatar");
  avatar.src = client.image;
  avatar.alt = "";

  const info = document.createElement("div");
  info.append(
    el("h2", "client-card__name", client.name),
    el("p", "client-card__company", client.company),
  );
  top.append(avatar, info);

  //EMAIL
  const email = el("p", "client-card__email", client.email);

  //status badge
  const badge = el(
    "span",
    `badge badge--${client.status.toLowerCase()}`,
    client.status,
  );

  //footer(deal value + delete btn)
  const footer = el("div", "client-card__footer");
  const deal = el("span", "client-card__deal", formatMoney(client.dealValue));

  const deleteBtn = el("button", "client-card__delete", "🗑");
  deleteBtn.type = "button";
  deleteBtn.setAttribute("aria-label", "Delete client");

  footer.append(deal, deleteBtn);

  //assemble
  card.append(top, email, badge, footer);
  return card;
}

//render a list of clients into page
function renderClients(list) {
  clientsList.innerHTML = ""; //clear the container

  if (list.length === 0) {
    showMessage("No clients found.");
    return;
  }

  list.forEach((client) => {
    clientsList.append(createClientCard(client)); //  build + insert each card
  });
}
//error state, message + retry button that re-runs

function showError() {
  clientsList.innerHTML = `
    <div class="clients__message">
      <p>Could not load clients. Check your connection and try again.</p>
      <button id="retry-btn" class="btn btn--primary" type="button">Retry</button>
    </div>
  `;

  document.querySelector("#retry-btn").addEventListener("click", loadAndRender);
}

//load clients (localStorage first, else API) and render them

async function loadAndRender() {
  showMessage("Loading clients...");

  try {
    clients = await loadClients();   // fill the state
    renderClients(clients);          // paint the screen
  } catch (error) {
    console.error(error);
    showError();
  }
}

function initClientsPage() {
  initTheme();
  initNav();
  loadAndRender();
}

// Protected page
if (requireAuth()) {
  initClientsPage();
}