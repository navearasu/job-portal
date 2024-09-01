import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000, // Port to run the development server
    open: true, // Open the app in the browser on start
  },
  build: {
    outDir: 'dist', // Directory to output the build files
    sourcemap: true, // Generate source maps for easier debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Alias '@' to the '/src' directory
    },
  },
});
