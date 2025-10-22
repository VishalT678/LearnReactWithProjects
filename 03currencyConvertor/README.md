# 03 Currency Converter (React + Vite)

Convert between currencies using live exchange rates. This project focuses on custom hooks, controlled inputs, and data fetching.

## Why this project exists
- To learn how to encapsulate fetching logic in a custom hook
- To practice bi‑directional data entry (amount and currency)
- To improve state lifting and component composition

## What you will learn (key concepts)
- Custom hook: `useCurrencyInfo` for fetching and caching
- Controlled inputs and validation (`InputBox.jsx`)
- Lifting state up between two inputs
- Memoization to avoid unnecessary re‑renders

## Learning path (step‑by‑step)
1) Build two inputs (amount + currency) with a swap button
2) Implement `useCurrencyInfo` to fetch rates
3) Compute converted amount on change
4) Handle loading/error states
5) Add currency list dropdown + keyboard nav

## Tech stack
- React 18, Vite
- Fetch API (or Axios)

## Setup & scripts
- `npm install`
- `npm run dev`
- `npm run build`

## Folder highlights
- `src/hooks/useCurrencyInfo.js`: Fetch and cache rates
- `src/component/InputBox.jsx`: Reusable input component

## Exercises
- Add debounce for API calls
- Add historical rate chart
- Persist last used currencies

## Next steps
- Extract rate storage into context for cross‑page reuse
