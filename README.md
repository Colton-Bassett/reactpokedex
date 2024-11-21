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
- [ ] Refine api actions (fetchRandomPokemon)
- [ ] Error handling
- [ ] Implement basic authorization
- [x] Finish material-ifying and react-ifying the UI
- [x] Replace favicon with React
- [ ] Update README (summary, review, tidying)

## Extras

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

- just setup hosting with firebase. Looks like you need the paid version for new firebase 'app' hosting, which has automatic github deploys and SSR + full stack app deploys (nextjs). Seems like a more modern solution. I instead setup regular firebase hosting which was a little confusing. The documentation was just okay.

- i don't really like that i have to add the npm install firebase to my project just for a simple deploy

- i don't really like that firebase wanted access to my entire github account (instead of just a repository) in order to deploy

- overall deploying was pretty painless and easy, but it seems if you're using firebase, it's probably for all the other features you get in addition to hosting (analytics, database, cloud, authentication, etc)

- firebase hosting is mainly for single page or static apps

- seems like firebase hosting automatically takes advantage of a CDN so I don't have to set that up. Very cool.

- i wanted to use firebase cloud functions but i had to enter a credit card and i did not like that

- data display of firebase is awesome. I really like looking at the console. UI is good

- i can't do a drop table on firebase firestore collection. I have to fetch all documents and then delete each one in batches

- dashboard for firestore seems to only update once a day or something, Hard to accurately track how many reads and writes I actually have. Went from 97 reads --> 6.6k the next day

CSS MODULES

- Having to make a new css file for every component was a chore. I even had some components share stylesheets cause I got kinda tired of it.

- Formatting css stylesheets to be consistent with others in the project was annoying. I spent a nontrivial time just organizing syntax.

- Taking styles completely out of the tsx made components look cleaner and easier to read at a glance.

- Dedicated style files meant more fine control for certain things that are a pain in Tailwind.

- I got really tired of swapping between css files and tsx files and hunting down style sheets, etc. There are just many many style sheets...
