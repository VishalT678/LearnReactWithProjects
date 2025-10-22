# Food App (React Client + Express Server)

A mini full‑stack project: a React UI that fetches a menu from a Node/Express server and supports search and category filters.

## Why this project exists
- To connect a React frontend with a Node/Express backend
- To practice fetching JSON and serving static assets (images)
- To build real UI features: search, category filters, and cards

## What you will learn
- React: state, props, lifting state, derived filters
- Express: routes, static assets, CORS
- Client–server integration and environment setup

## Learning path (step‑by‑step)
1) Build a static card UI (design first)
2) Set up Express to serve JSON and `/images` statics
3) Fetch data in the client and render grid of cards
4) Add search (case‑insensitive filter by name)
5) Add category buttons (All/Breakfast/Lunch/Dinner)
6) Polish design, handle loading and error states

## Tech stack
- Client: React + Vite, Tailwind CSS (optional)
- Server: Node + Express (+ TypeScript)

## Setup
### Server
```
cd server
npm install
npm run server   # runs tsc -w + nodemon dist/index.js
# API: http://localhost:9000
# Images: http://localhost:9000/images/<filename>.png
```

### Client
```
cd app
npm install
npm run dev
```

## Project structure
- `app/`
  - `src/components/Headers.jsx`: Search input + category buttons
  - `src/components/Cards.jsx`: Cards grid, renders fetched data
  - `src/App.jsx`: State orchestration (search, filters, data)
- `server/`
  - `src/index.ts`: Express app (JSON + static images)
  - `public/images/*`: Served at `/images`

## API
- `GET /` → returns an array of food items: `{ name, price, text, image, type }`
- `GET /images/:file` → returns static image files

## Common pitfalls
- Install server deps before running: `npm install` (no `node_modules` → "Cannot find module 'express'")
- Use full image URL on the client: `http://localhost:9000${food.image}`
- Always filter from the original array, not the already‑filtered list

## Exercises
- Add price range filtering and sort (price asc/desc)
- Add skeleton loaders and error toasts
- Extract data fetching into a custom hook
- Move search/filter state to a global store (Context/Redux)
