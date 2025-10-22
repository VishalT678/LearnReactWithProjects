# 06 Mini Cart Context (React Context API)

A minimal e‑commerce cart to practice global state with Context: adding items from a product list and showing them in a cart view.

## Why this project exists
- To learn app‑wide state (cart) without Redux
- To manage derived values (subtotal, item count)

## What you will learn
- Context provider for cart items and actions
- Immutable updates (add/remove/increment/decrement)
- Computing totals and memoizing derived state
- Lifting product data vs cart state

## Learning path (step‑by‑step)
1) Create `CartContext` with items + actions
2) Implement `CartProvider` with `useReducer` or `useState`
3) Render product list with Add to Cart
4) Build Cart component (list, quantity controls, totals)
5) Persist cart in `localStorage`

## Tech stack
- React 18, Vite

## Setup & scripts
- `npm install`
- `npm run dev`

## Structure
- `src/context/CartContext.js`
- `src/context/CartProvider.jsx`
- `src/components/Productlist.jsx`, `ProductCard.jsx`, `Cart.jsx`

## Exercises
- Add coupon/discount logic
- Add clear cart and empty state UX
- Memoize cart selectors with `useMemo`
