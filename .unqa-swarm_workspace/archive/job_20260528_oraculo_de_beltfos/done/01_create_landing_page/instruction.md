# 🐝 Swarm Instruction: 01_create_landing_page

**Target File / Directory:** `index.html`
**Allowed Skills:** `[]`
**Dependencies:** `None`

---

## 🎯 Objective
Create the single-page application structure (`index.html`), premium styles with dark aubergine and fuchsia glow (`index.css`), and the dynamic chat animation/accordion logic (`index.js`).

## 📂 Required Reading
*You MUST read these files before writing any code:*
* `logo.png`
* `logo 2.jpg`
* `oraculo.png`
* `portada.jpg`

## 🔌 API Contract
*Your code MUST conform to these exact data shapes:*
```json
{}
```

## 🚫 Anti-Goals (DO NOT)
* Do NOT use TailwindCSS
* Do NOT use React/Next/Vite
* Do NOT use external UI frameworks

## 📂 Context & Execution Rules
* **Upstream Data:** Review completed outputs from your Dependencies.
* **Failure Recovery:** If this task was previously `failed`, load `exception_recovery.md` and read the Owner's rejection notes in `task.json` → `status_history`.
* **Sandbox Law:** Write only to the Target File. *(Manager Note: If `00_setup`, replace with: "EXCEPTION: Authorized to execute terminal commands in project root.")*

## ✅ Todos (Validation Gates)
Before completing this task, you MUST physically check these boxes:
- [x] **Pre-Flight:** Read all files in "Required Reading" section
- [x] **Pre-Flight:** Performed Atomic Claim in `task.json` + `router.json`
- [x] **Pre-Flight:** Verified dependencies are `done`
- [x] **Execution:** Code compiles without syntax errors and fulfills the Objective
- [x] **Execution:** No hallucinated dependencies (only used allowed skills)
- [x] **Execution:** Conforms to API Contract shapes
- [x] **Post-Flight:** CLEANUP — deleted all test scripts, mocks, temp files, console.logs
- [x] **Post-Flight:** Verified zero violations of Anti-Goals
- [x] **Post-Flight:** Updated `lessons_learned.md` if friction occurred

## 💾 State Update Protocol (Handoff)
1. Update `task.json`: set `current_status` to `done`, append to `status_history`.
2. Update `router.json`: set this task's status to `done`.
3. Append build summary to `description.md` in job root.
4. Move this folder to `done/`.