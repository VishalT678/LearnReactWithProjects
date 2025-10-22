# 01 Background Changer (React + Vite)

A focused mini‑project to master foundational React concepts by building an interactive background color changer. This project is intentionally small so you can iterate fast and understand React state, props, and event handling clearly.

## Why this project exists
- To learn how React state (`useState`) drives the UI
- To practice handling user events (clicks) and updating styles dynamically
- To get comfortable structuring a tiny React app with clear, reusable parts

## What you will learn (key concepts)
- React component basics (functional components)
- `useState` for reactive UI
- Passing props to child components
- Handling events and deriving UI from state
- Tailwind or plain CSS utilities for quick styling

## Learning path (step‑by‑step)
1) Boot the app with Vite and verify hot reload
2) Render a list of color choices (buttons/swatches)
3) Add `useState` to store the selected color
4) On click, update the state; bind the state to the container’s style/class
5) Extract a small button component; pass color and onClick via props
6) Add a reset button + keyboard accessibility

## Tech stack
- React 18, Vite
- Tailwind CSS (optional) or plain CSS modules

## Setup & scripts
- Install deps: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Preview build: `npm run preview`

## Folder structure (essentials)
- `src/App.jsx`: Main UI + state
- `src/index.css` / `src/App.css`: Styles
- `public/`: Static assets

## Exercises to master the concepts
- Add a custom color input (HEX) and apply it
- Persist chosen color in `localStorage`
- Animate background transitions (CSS transitions)

## Next steps
- Convert to a theme switcher (light/dark/system)
- Extract color palette to a JSON/config and render dynamically
