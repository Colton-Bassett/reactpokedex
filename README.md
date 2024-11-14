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
- [ ] Host project on Firebase Hosting
- [ ] Build out basic UI
- [ ] Implement PokeAPI calls
- [ ] Display data
- [ ] Setup firestore db
- [ ] Refine UI
- [ ] Error handling
- [ ] Implement basic authorization
- [ ] Finish material-ifying the UI
- [ ] Update README (summary, review, tidying)

## Extras

- [ ] Add extra Pokémon data
- [ ] Add Fonts
- [ ] Dark and Light mode
- [ ] Fetch throttling
- [ ] Handle caching
- [ ] Optimistic updates
- [ ] Analytics

## Review

- MATERIAL UI
- using Material UI's 'sx' prop -- which is the system's solution to customizing css -- is pretty terrible. Looks exactly the same as vanilla html inline css style={{}} syntax. A strict downgrade to typescript

- i really am not a fan of the styled components solution either. It has benefits for sure, but I just don't like how there's huge blocks of styling i have to scroll past to get to the real code. There's also the issue of performance with both the above approaches.

- maybe they have great use-cases in enterprise level solutions where projects get exponentially big, but for smaller projects like these it feels like a lot of boiler plate and a lot of wasted time

- probably sticking with external css files and css modules. More performant + separation of converns. Probably just wishing I had tailwind tbh

- MUI is still stuck on material 2, they're working on material 3. But material 3 came out literally 2 or 3 years ago.

- REACT

- no image component like next.js
- no native ssr
