# 02 Password Generator (React + Vite)

A practical tool to generate secure passwords with adjustable length and rules. Built to deepen your understanding of controlled inputs, derived state, and side effects.

## Why this project exists
- To practice form controls and lifted state
- To derive output from multiple toggles and a numeric slider
- To learn clipboard interactions and validations

## What you will learn (key concepts)
- Controlled inputs (slider, checkboxes)
- Derived state (building a character set from options)
- `useEffect` to sync UI or regenerate when options change
- Copy to clipboard with `navigator.clipboard`
- Basic validation and UX (min length, strength indicator)

## Learning path (step‑by‑step)
1) Render inputs: length slider, include numbers, include symbols
2) Build the character pool based on toggles
3) Generate password with a randomizer function
4) Show strength feedback (weak/ok/strong)
5) Implement Copy button and success feedback
6) Persist preferences in `localStorage`

## Tech stack
- React 18, Vite
- Optional: Tailwind CSS for fast UI

## Setup & scripts
- `npm install`
- `npm run dev`
- `npm run build`

## Folder highlights
- `src/App.jsx`: Core generator logic and UI
- `src/index.css`: Styles

## Exercises
- Add exclude ambiguous chars (like l/I/0/O)
- Add pronounceable mode
- Add entropy calculation and meter

## Next steps
- Extract generator to a reusable hook
- Add unit tests for generator function
