# RemWaste - React Coding Challenge 

Redesign of the **“Choose Your Skip Size”** step at  
<https://wewantwaste.co.uk> – completely re-imagined, yet 100 % functional.

---

## ✨ What I built

**Original Page**

![image](https://github.com/user-attachments/assets/cdd97e87-20f9-4830-9120-257d74322db6)

**Original Page Mobile**

![image](https://github.com/user-attachments/assets/0798839a-f5d7-4551-be0b-aba1070a737f)


**Redisigned page**

![image](https://github.com/user-attachments/assets/7dbc7fac-6616-498d-8844-94afcc253732)

**Redisigned Page Mobile**

![image](https://github.com/user-attachments/assets/539e0524-c848-4106-87ae-c1e54ac00c85)

Key differences:

- **List layout** – each skip is a horizontal row: thumbnail → meta → price.
- **Progress stepper** – vertical icon stack (desktop) / mini bar (mobile).
- **Summary panel** – selected skip, hire period & price shown in a card with a single _Continue →_ button (desktop); sticky bar on mobile.
- **Teal + orange palette** – no resemblance to WW-Waste blue / yellow.
- **Subtle motion** – Framer-motion hover & press, list items slide-in.
- **responsive** (320 px – 1440 px) and **keyboard-accessible**.

---

## 🏗️ Tech stack

Build – Vite + React 18 + TS — lightweight setup, instant HMR, Type-Script safety.
Styling – styled-components — styles live next to JSX, dynamic props, no class-name drift.
Motion – Framer Motion — declarative hover / tap / layout animations.
Data – plain fetch (¹) — only one endpoint, a state library would be over-kill.
Icons – lucide-react — tree-shakable SVG icon set.

¹ Data pulled from  
`/api/skips/by-location?postcode=NR32&area=Lowestoft` (as requested).

---

## 📁 Folder structure

- src/
- api/skipService.ts // fetcher
- hooks/useSkips.ts // data hook
- components/
- SkipCard.tsx // row component
- SkipGrid.tsx // list container + mobile CTA
- Stepper.tsx // progress nav
- SummaryCard.tsx // sidebar summary
- DesktopCTA.tsx // sidebar continue btn
- pages/
- ChooseSkip.tsx // assembled page
- utils/formatters.ts // £ price helper
- GlobalStyle.tsx // reset + design tokens

---

## ▶️ Running the project

```bash
# 1. install
npm install

# 2. dev server
npm run dev

# 3. production build + preview
npm run build
npm run preview

Node ≥ 16 & npm ≥ 9 required.
```
