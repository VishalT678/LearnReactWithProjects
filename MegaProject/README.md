# MegaProject (React + Appwrite)

A larger playground project combining routing, state management, and Appwrite backend services (auth/storage/database).

## Why this project exists
- To practice building a more realistic app structure
- To integrate with a BaaS (Appwrite) for auth and data

## What you will learn
- Component architecture and reusable UI patterns
- Appwrite SDK usage (configure client, auth, storage)
- Global state patterns (store) and side effects
- Environment/config management for Vite

## Learning path (step‑by‑step)
1) Configure Appwrite client and environment variables
2) Implement auth flows (signup/login/logout)
3) Build CRUD pages with Appwrite database
4) Manage global state for user/session
5) Add file uploads and image handling via storage

## Setup & scripts
- `npm install`
- `npm run dev`

## Structure
- `src/components/`: UI building blocks
- `src/appwrite/`: Appwrite client, helpers
- `src/store/`: State management
- `src/config/`: Config/env helpers

## Next steps
- Add protected routes and role-based access
- Add optimistic updates and caching layer
- Write unit/integration tests for critical flows
