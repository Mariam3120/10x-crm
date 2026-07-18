# 10X CRM

A lightweight client-relationship-management app for sales managers. It lets you
register and log in, then manage a base of clients — add, delete, search, filter,
sort, track deal status, write notes, and set follow-up reminders. All data is
stored in the browser, with the initial client base loaded from a public API.

> Built as a front-end-only project (no backend) for the JavaScript module final exam.

---

## ✨ Features

- **Authentication** — sign up and log in with full form validation; sessions
  persist across reloads.
- **Auth guard** — protected pages redirect to login when there is no session.
- **Clients** — load 30 clients from the DummyJSON API, then add (POST),
  delete (DELETE), search, filter by status, and sort.
- **Deal pipeline** — each client has a status: Lead, Contacted, Won, or Lost.
- **Notes & reminders** — add timestamped notes and set a 1-minute follow-up reminder.
- **Dashboard** — key stats, a live clock, pipeline overview, and recent clients.
- **Profile** — edit your details, change your password, and reset the client data.
- **Dark / light theme** — toggle that remembers your choice.
- **Toast notifications** — non-blocking success/error messages (no `alert()`).

---

## 🛠 Tech Stack

- **HTML5** — semantic, accessible markup
- **SCSS** — design tokens, theming with CSS custom properties, BEM naming
- **Vanilla JavaScript (ES Modules)** — no frameworks or libraries
- **DummyJSON API** — source of the initial client data (`fetch`, `async/await`)
- **localStorage** — persistence for users, session, clients, and theme

---

## 🚀 How to Run

Because the project uses ES modules, it must be served over HTTP (not opened as
a `file://` path).

1. Clone the repository:
   ```bash
   git clone <your-repo-url>


├── index.html        # Login
├── signup.html       # Sign up
├── dashboard.html    # Dashboard (protected)
├── clients.html      # Clients (protected)
├── profile.html      # Profile (protected)
├── css/              # Compiled CSS
├── scss/             # Source styles (abstracts, base, components, layout, pages)
└── js/               # storage, guard, theme, nav, ui, validators, data, + one file per page



---

## 📌 Fill in the placeholders
1. **`<your-repo-url>`** — your GitHub repo link
2. **Live Demo** — leave the TODO for now; paste the link right after you deploy
3. **Test Account** — make sure you actually register `demo@test.com` / `demo1234` on your live site so the examiner can use it (or say "please register")
4. **Credits** — add classmates/issues if anyone helped (the PRD rewards honesty here)

> 💡 **Also required by the Tech English module:** your **code comments should be in English**. You've mostly done this already 👍 — just watch a few Georgian-ish notes and English typos as we go. It counts.

---

## 🗺️ FULL features plan (what's next)

| Order | Feature | PRD |
|---|---|---|
| 1 | **Search + filter chips + sort** (`getVisibleClients`) | P4.7 |
| 2 | **Details modal + notes + reminder** | P4.8 |
| 3 | **Real Dashboard** (greeting, clock, 4 stats, pipeline, recent 5) | P3 |
| 4 | **Profile** (edit, change password, reset) | P5 |
| 5 | Polish: status-change on card, `.map` typing, any error-handling gaps | — |

I recommend **starting with Search/Filter/Sort** — it's the most exam-relevant array work (`filter`, `sort`, `includes`), and it builds the `getVisibleClients()` function that everything else on the Clients page will flow through.

Paste the README, tweak the placeholders — then tell me and we'll build **Search + Filter + Sort**. 🔍


🙏 Credits
Built by Mariam Grigolia.
AI assistance: Claude — see ai-log.md for how AI was used.