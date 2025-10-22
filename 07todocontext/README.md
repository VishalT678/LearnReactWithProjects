# 07 Todo with Context (React Context API)

A classic Todo app reimplemented with Context to share state/actions across multiple components without prop drilling.

## Why this project exists
- To reinforce Context by managing a non-trivial list state
- To separate reading and mutating logic between components

## What you will learn
- Context provider for todos and actions (add, toggle, remove)
- Immutably updating arrays
- Derived counts (completed vs remaining)
- Component composition (AddTodo, TodoList, TodoItem)

## Learning path (step‑by‑step)
1) Define a Todo shape and initial state
2) Create Context and Provider with todos + actions
3) Build `AddTodo` (input + submit)
4) Build `TodoList` and `TodoItem` (toggle/remove)
5) Add persisted storage in `localStorage`

## Setup & scripts
- `npm install`
- `npm run dev`

## Structure
- `src/context/TodoContext.js`, `TodoProvider.jsx`
- `src/components/AddTodo.jsx`, `TodoList.jsx`, `TodoItem.jsx`

## Exercises
- Add filters (All/Active/Completed)
- Add bulk actions (toggle all, clear completed)
- Add edit-in-place for todo text
