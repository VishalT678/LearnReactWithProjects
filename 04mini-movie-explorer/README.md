# 04 Mini Movie Explorer (React + Router)

A small app to browse movies, navigate between pages, and view details. This project emphasizes routing, layout composition, and list/detail UI patterns.

## Why this project exists
- To learn client-side routing with React Router
- To practice building list → detail flows
- To compose a layout (Navbar/Footer) reused across pages

## What you will learn
- React Router: routes, `<Link>`, params, `useParams`
- Nested layouts and 404 handling
- Reusable components (Navbar, Layout, MovieCard)
- Data fetching pattern for list and detail pages

## Learning path (step‑by‑step)
1) Build routes for Home, Movies, MovieDetails, About, Github, NotFound
2) Add a shared layout (Navbar + Footer)
3) Render movies grid; navigate to details with a route param (e.g. `/movies/:id`)
4) Fetch detail data by id; handle loading/error
5) Add a NotFound page for bad routes

## Tech stack
- React 18, Vite
- React Router

## Setup & scripts
- `npm install`
- `npm run dev`
- `npm run build`

## Structure
- `src/pages/`: Home, Movies, MovieDetails, About, Github, NotFound
- `src/components/`: Navbar, Layout, MovieCard, Footer
- `src/App.jsx`: Router setup

## Exercises
- Add search and pagination for movies
- Add a favorites list with `localStorage`
- Add skeleton loaders for better UX
