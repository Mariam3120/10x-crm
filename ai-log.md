# AI Usage Log — 10X CRM

Tool used throughout: **Claude (Claude Code in VS Code)**.
This log documents how I used AI while building the project, what I kept,
what I changed, what I rejected, and what I learned.

---

## Entry 1 — Dark/Light theme  🔁 (prompt refinement)

**Goal:** Add a dark/light theme toggle that remembers the choice.

**Prompt v1 (too vague):**
> "how do I make a dark and light theme toggle in js"

The first answer was generic and used hardcoded colors.

**Prompt v2 (refined):**
> "I use SCSS. Make a dark/light theme where colors are CSS custom
> properties, toggled by a `light` class on `<body>`, default dark, and the
> choice saved in localStorage under the key `crm_theme`."

**Result:** ✅ Used the refined version.

**What I learned:** SCSS variables are compile-time (frozen when Sass builds),
but **CSS custom properties are runtime**, so theme switching must use custom
properties. The refined prompt gave a far more useful answer — being specific
about *my* setup mattered.

---

## Entry 2 — Building client cards  🧐 (critical evaluation)

**Goal:** Render each client as a card.

**Prompt:**
> "build one card element from a client object"

The AI's answer used `innerHTML` with a template string containing client data.
I recognized this could be an **XSS risk** — if a client name contained HTML,
`innerHTML` would execute it. I pushed back and asked to rewrite it safely.

**Result:** 🔧 Modified. We replaced `innerHTML` with a small helper that uses
`document.createElement` and `textContent`.

**What I learned:** `innerHTML` parses its input as HTML (dangerous with
user/API data); `textContent` inserts it as plain text (safe). I now use
`textContent` for anything from users or an API, and only allow `innerHTML`
for static strings I control.

---

## Entry 3 — First JavaScript debugging

**Goal:** Make the theme toggle button work.

**Prompt:** I pasted my code and the console error:
> "Uncaught ReferenceError: applyTheme is not defined"

**Result:** ✅ Used the fix after understanding it. I had renamed the function
to `setTheme` but one call still said `applyTheme`.

**What I learned:** When you rename something, you must update **every** place
that uses it. Also, `ReferenceError: X is not defined` literally means the name
doesn't exist — read the error and it points you to the fix.

---

## Entry 4 — Fetching clients from the API

**Goal:** Load 30 clients from DummyJSON with proper error handling.

**Prompt:**
> "async function to GET dummyjson users?limit=30, map them into my client
> model, wrapped in try/catch, and check response.ok"

**Result:** ✅ Used.

**What I learned:** `fetch` only **rejects** on a network failure — a 404 or 500
still **resolves** with `ok: false`. So `try/catch` alone isn't enough; I must
check `response.ok` and throw myself. I also learned `map()` is the clean way to
translate the API's shape into my own `Client` model.

---

## Entry 5 — Signup validation (all errors at once)

**Goal:** Validate the signup form and show every error at the same time.

**Prompt:**
> "validate 5 fields on submit, show all errors at once not one by one,
> don't save if anything is invalid"

**Result:** ✅ Used.

**What I learned:** The `let isValid = true` flag pattern — check every rule,
set the flag to `false` on each failure, and only `return` at the end — shows
all errors together. I also learned the difference between `some()` (returns
true/false, used to detect a duplicate email) and `find()` (returns the object,
used in login to get the user).
