import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/_shared.scss";',
        },
      },
    },
  };
  if (command !== "serve") {
    config.base = "/drink_master/";
  }
  return config;
});
