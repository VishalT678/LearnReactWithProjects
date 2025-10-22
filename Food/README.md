# Food App (Client + Server)

A mini full‑stack app showing a food menu with filters and search.

## Projects
- app (React + Vite): UI with search and category filters
- server (Node + Express + TypeScript): Serves JSON and images

## What you learn
- React state, props, and component composition
- Search and category filters
- Fetching from an Express server
- Serving static assets from Node

## Run server
```
cd server
npm install
npm run server
```
(Starts nodemon + tsc watcher; serves JSON at http://localhost:9000 and images at /images)

## Run client
```
cd app
npm install
npm run dev
```

## Notable files
- app/src/components/Headers.jsx
- app/src/components/Cards.jsx
- server/src/index.ts
