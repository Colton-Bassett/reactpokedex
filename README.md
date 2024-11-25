## React Pokedex

React + Vite, Material UI, Emotion, Firebase Hosting, Firestore

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Goals

1. Build a simple, full-stack application with vanilla React + Vite
2. **Showcase new React 19 hooks and APIs by fetching from a database without useEffect or other older lifecycle React methods**
3. Gain a deeper understanding of React's CSR vs. Next.js's SSR and dynamic loading
4. Explore a Material UI methodology (again)
5. Conduct an informal developer experience review using: vanilla React + Vite, Firebase, Firestore, Material UI, and Emotion

## Todo

- [x] Project scaffolding (materialui, emotion, prettier, etc)
- [x] Host project on Firebase Hosting
- [x] Build out basic UI
- [x] Implement PokeAPI calls
- [x] Display data
- [x] Setup firestore db
- [x] Refine UI
- [x] Refine other actions + error handling (fetchRandomPokemon)
- [x] API Error handling
- [x] Fix loading components
- [x] Finish material-ifying and react-ifying the UI
- [x] Replace favicon with React
- [ ] Final UI refinement pass
- [ ] Remove console.log statements
- [ ] Refine Help/Disclaimer text
- [ ] Update README (summary, review, tidying)

## Extras

- [ ] Implement basic authorization
- [ ] Add extra Pokémon data
- [ ] Add Fonts
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

- MATERIAL UI
- The solutions to customize MUI components (sx, theme, styled components aka css in jsx) feel really bad. I ended up using external css modules and just wished I had tailwind.

- MUI's design is old. The framework is still on material 2. They're currently working on updating to material 3, but material 3 came out 3 years ago.

- There is a component called <grid2> because <grid> isn't good anymore... but it still exists ???

- The only way to use responsive breakpoints (sm, md, lg, xl, etc) on MUI components is through the Grid component, media queries, or adding another MUI library to my project.

- REACT
- No image component like next.js

- No native ssr

- With react router dom i have to create a useEffect to scroll to the top of a page after a navigate. AINTNOWAY this isn't just built in behavior. Crazy town

- CSR feels really fast and nice for smaller apps

- Never refreshing with CSR between page navigations is cool

- FIREBASE
- You need the paid version for new firebase 'app' hosting (easily confused with firebase hosting) which provides automatic github deploys and SSR + full stack app capability (nextjs)

- Documentation for a brand new project was just okay. Startup was a little confusing for a complete newcomer to firebase.

- When adding Firebase to an app, it adds a lot of files and overhead; just in case you want to use one of their 10+ features.

- To setup github auto deploys, Firebase wanted access to ALL of my github projects instead of just my singular firebase project.

- Deployment was easy but my project ended up with a lot of extra files, so as a deployment solution only, it's kind of bad.

- If you're using firebase, it's ideally for all the features you get in addition to hosting (analytics, database, cloud, authentication, etc).

- Firebase hosting is for single page or static apps only.

- Firebase hosting automatically takes advantage of a CDN, no extra setup. Very cool.

- Firebase cloud functions require the paid version and I did not like that.

- UI of Firebase is awesome. Console looks really clean. Data communication great.

- Can't just drop a table on Firestore collection. I have to fetch all documents and then delete in batches.

- Dashboard for Firestore seems to only update once a day. It's hard to accurately track how many reads and writes I actually have. Went from 97 reads --> 6.6k the next day.

CSS MODULES

- Having to make a new css file for every component was a chore. I even had some components share stylesheets cause I got kinda tired of it.

- Formatting css stylesheets to be consistent with others in the project was annoying. I spent a nontrivial time just organizing syntax.

- Taking styles completely out of the tsx made components look cleaner and easier to read at a glance.

- Dedicated style files meant more fine control for certain things that are a pain in Tailwind.

- I got really tired of swapping between css files and tsx files and hunting down style sheets, etc. There are just many many style sheets...
