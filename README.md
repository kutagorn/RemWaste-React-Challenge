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

- **List layout** – I wanted to go for a look like reddit. 
- **Progress stepper** – vertical icon stack (desktop) / mini bar (mobile).
- **Summary panel** – selected skip, hire period & price shown in a card with a single _Continue →_ button (desktop); sticky bar on mobile.
- **Teal + orange palette** – no resemblance to WW-Waste blue / yellow.
- **Subtle motion** – Framer-motion hover & press, list items slide-in.

---

## 🏗️ Tech stack

- Build – Vite + React 18 + TS 
- Styling – styled-components 
- Data – plain fetch


Data pulled from  
`/api/skips/by-location?postcode=NR32&area=Lowestoft` (as requested).

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
