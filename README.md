## React Pokedex

[ReactPokedex](https://reactpokedex-3f2b4.web.app/) is the second part of a three-phase project to build a Pokedex app using three distinct React tech stacks. This version is a single page app that uses client side rendering to display 12 randomly selected Pokémon. Users can select Pokémon to visit dynamic URLs and view detailed information about each one.

Authorized users gain access to an admin panel, where they can interact with the app's database - fetching Pokémon data from the [PokeAPI](https://pokeapi.co/), and saving, updating, or deleting Pokémon records stored in a Firestore database.

React Pokedex is built with [React](https://react.dev/) + [Vite](https://vite.dev/) as the React framework and build tool, [Firebase](https://firebase.google.com/) for hosting, and Firebase [Firestore](https://firebase.google.com/docs/firestore) for cloud-based data storage. The app also leverages [Material UI](https://mui.com/) for Material-inspired UI components and [CSS Modules](https://github.com/css-modules/css-modules) for styling.

## Goals

1. Build a simple, single-page application with vanilla React + Vite
2. **Showcase new React 19 hooks and APIs by fetching from a database without useEffect or 3rd party libraries and methods**
3. Gain a deeper understanding of React's CSR vs. Next.js's SSR and dynamic loading
4. Get an introduction to Firestore and Firebase
5. Explore a React design methodology using MUI
6. Conduct an informal developer experience review using: vanilla React + Vite, Firebase, Firestore, Material UI, CSS Modules

## Todo

- [x] Project scaffolding (materialUI, firebase, prettier, etc)
- [x] Host project with Firebase Hosting
- [x] Build out basic UI
- [x] Implement PokeAPI calls
- [x] Display data
- [x] Setup Firestore DB
- [x] Refine UI
- [x] Refine 'client' actions
- [x] Add 'client' action error-handling
- [x] Final UI refinement pass
- [x] Update README (summary, review, tidying)

## Extras

- [ ] Firebase authorization
- [ ] Extra Pokémon data
- [ ] Extra Fonts
- [ ] Dark and Light mode
- [ ] Fetch throttling
- [ ] Handle caching
- [ ] Optimistic updates
- [ ] Analytics

## Scripts

```bash
pnpm dev
# launch development server with live reloading, updates, and debugging.

pnpm build
# bundle project and create deployable app

firebase deploy
# Deploy newest version of built project (which is located in /dist)
# run this after 'pnpm build'
```

## Review

REACT + Vite (React Framework) - 7/10

- Pros
  - CSR feels nice, fast, uncomplicated for smaller apps
  - App setup with Vite is fast and easy
  - Vite hot reload and builds are really fast
  - Docs for core features are great
- Cons
  - Needs extra libraries for a fully fleshed out experience (React Router, React Query, etc)
  - At the mercy of library authors to keep their libraries up-to-date
  - No native SSR
  - No image component like next.js
  - Docs for experimental things are just okay

FIREBASE (Hosting) - 7/10

- Pros
  - Easy access to a full suite of features (analytics, database, cloud, authentication)
  - UI and UX for the dashboard is great. Data communication+++
  - Automatically utilizes a CDN, no extra setup
  - Nearly instant deploys to production
- Cons
  - Paywall for many core features (app hosting, auto github deploys, cloud functions, etc)
  - Adds many files/overhead; in case you want to use one of their 10+ features.
  - Confusion between Firebase hosting (static, CSR sites) vs. Firebase 'app' hosting (full stack, SSR sites)
  - Documentation for brand new project was just okay
  - Firestore dashboard only updates once a day. Hard to accurately track reads and writes.
  - Github auto deploys randomly require access to all github projects (not just the firebase project)

FIRESTORE (Database) - 8/10

- Pros

  - Excellent, efficient, straightforward online console interface
  - Straightforward syntax

- Cons

  - Decent amount of overhead when adding to project
  - Slight learning curve. Not 1:1 similar like when going from something like sqlite to postgresql
  - No way to perform some 'normal' actions like dropping a whole table with one command

MATERIAL UI (Component Library) - 3/10

- Pros
  - Provides many components for many different use cases
  - If you have time to make custom themes, MUI can look great
- Cons
  - Customizing MUI component styles sucks. Sx, theme, styled components, etc feel much worse than just using Tailwind
  - Very time consuming to customize component styles
  - MUI's design is old. The framework's UI is still on Material 2. (Material 3 released 3 years ago)
  - MUI is confusingly, competing against themselves with 3 or 4 other half-baked products (Base UI, Joy UI, MUI System)
  - The only way to use responsive breakpoints (sm, md, lg, xl, etc) on MUI components is through the Grid component, media queries, or adding MUI System to a project

CSS MODULES (CSS 'framework') - 6.5/10

- Pros
  - Tsx looks a lot cleaner without Tailwind style clutter
  - Deeper control with dedicated CSS files
- Cons
  - A new CSS file for every component is a lot of work and hard to keep track of
  - Consistent CSS formatting between module files is time consuming
  - Constant swapping between css and tsx files is tiring

## Dev Notes

- Permissions granted through Firebase Firestore @ https://console.firebase.google.com/
- Firebase: cb
