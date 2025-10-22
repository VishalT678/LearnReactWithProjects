# 08 Todo with Redux Toolkit

A Todo app built with Redux Toolkit to learn scalable state management patterns beyond Context.

## Why this project exists
- To learn Redux Toolkit's opinionated, concise APIs
- To model state with slices and reducers

## What you will learn
- Creating a Redux store and provider
- Slice creation (`createSlice`) with actions + reducers
- Selecting data with `useSelector`, dispatching with `useDispatch`
- Immutability with Immer under the hood

## Learning path (step‑by‑step)
1) Configure store and wrap the app with `<Provider>`
2) Create a `todos` slice with add/toggle/remove reducers
3) Use `useSelector` to read todos and counts
4) Use `useDispatch` to modify state
5) Add persistence or middleware (optional)

## Setup & scripts
- `npm install`
- `npm run dev`

## Structure
- `src/store/index.js`: store setup
- `src/store/slices/*`: slice logic

## Exercises
- Add filters and selectors (memoized with Reselect)
- Add async thunks to fetch/save todos
- Add tests for reducers and selectors
