import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/drink_master/",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/styles/_shared.scss";',
      },
    },
  },
});
