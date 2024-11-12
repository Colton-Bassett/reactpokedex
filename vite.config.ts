import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define your React Compiler Config (example)
const ReactCompilerConfig = {
  // Example configuration, adjust as needed
  someConfigOption: true, // Replace with actual options for the compiler
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler", ReactCompilerConfig], // Add the compiler plugin here
        ],
      },
    }),
  ],
});
