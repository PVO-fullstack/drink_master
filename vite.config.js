import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    resolve: {
      alias: {
        src: '/src',
        components: '/src/components',
        icons: '/src/components/icons',
      },
    },
    plugins: [react()],
    base: '/',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./src/styles/_shared.scss";',
        },
      },
    },
  };
  if (command !== 'serve') {
    config.base = '/drink_master/';
  }
  return config;
});
