# 🗺️ Masterplan: El Oráculo De Beltfos Landing Page

**Job ID:** `job_20260528_oraculo_de_beltfos`
**Architect:** Architect-Design
**Status:** Approved & Ready for Swarm Manager
**Overview:** Build a premium landing page for "El Oráculo De Beltfos" sports prediction brand. It features a responsive layout modeled on chatgpickst.com, using a premium dark aubergine and fuchsia color palette, with an interactive chat component, stats tracking, accordion FAQs, and visual brand assets.

---

## 📖 Reference Files Read

*The Architect read these files before designing this plan:*
| File | Key Observations |
|:-----|:-----------------|
| `chatgpickst.com/content.md` | Layout structure of ChatGPicksT featuring Navigation, Hero, Chat Mockup, Stats, Pain points, Eligibility gate, Features, Steps, FAQs, CTA, and Footer. |

---

## 🏗️ Execution DAG (Directed Acyclic Graph)

*Note to Manager: Parse this table to generate `router.json` and provision task folders with `task.json`.*

| Task ID | Target File / Dir | Dependencies | Required Skills | Context Files to Read | Anti-Goals (DO NOT) | Task Description |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `01_create_landing_page` | `index.html` | None | `[]` | `['logo.png', 'logo 2.jpg', 'oraculo.png', 'portada.jpg']` | `['Do NOT use TailwindCSS', 'Do NOT use React/Next/Vite', 'Do NOT use external UI frameworks']` | Create the single-page application structure (`index.html`), premium styles with dark aubergine and fuchsia glow (`index.css`), and the dynamic chat animation/accordion logic (`index.js`). |

---

## 🔌 API Contracts

*Exact data shapes for all inter-task data flow. Workers MUST conform to these.*

### Client-side Routing / State
No API contracts required. The application consists entirely of frontend client-side HTML, CSS, and Vanilla Javascript.

---

## ⚠️ Risk Analysis (Pre-Mortem)

*How this plan might fail:*

| Risk | Probability | Impact | Mitigation |
|:-----|:-----------|:-------|:-----------|
| Image file path resolution errors | Low | Broken images in UI | Use relative paths (`./logo.png`, etc.) and verify loading in manual testing. |
| Incompatible HSL or hex color contrast | Low | Poor readability | Adhere strictly to the dark aubergine base and neon fuchsia highlights for contrast. |

---

## 🛑 Architect Handoff
*I have finalized this Masterplan based on user approval. I am now FREEZING to protect my context window.*

**User Action Required:** Open a new chat window and type `join swarm` or `manage` to spawn the **Manager**. The Manager will read this Masterplan, build the workspace, and dispatch Workers. Return to me for review.
