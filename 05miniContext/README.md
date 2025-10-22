# 05 Mini Context Demo (React Context API)

A tiny application to demonstrate React Context for sharing state across multiple components without prop drilling.

## Why this project exists
- To understand when and how to use React Context
- To separate read/update responsibilities across components

## What you will learn
- Creating a context with default shape
- Providing values in `MyProvider.jsx`
- Consuming context in `DisplayValue.jsx` and `UpdateValue.jsx`
- Avoiding unnecessary re-renders by structuring value objects

## Learning path (step‑by‑step)
1) Create `MyContext` with a clear shape (value + setValue)
2) Implement `MyProvider` wrapping the app
3) Consume context in a read-only component (display)
4) Consume context in a write component (update)
5) Optional: split into two contexts (state vs actions)

## Tech stack
- React 18, Vite

## Setup & scripts
- `npm install`
- `npm run dev`

## Structure
- `src/context/MyContext.js`: context definition
- `src/context/MyProvider.jsx`: provider implementation
- `src/components/DisplayValue.jsx`: consumes value
- `src/components/UpdateValue.jsx`: updates value

## Exercises
- Memoize context value with `useMemo`
- Create a custom hook `useMyContext()` for safer consumption
- Add persistence to `localStorage`
