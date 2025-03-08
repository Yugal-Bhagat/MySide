import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'MySide' with your repository name
export default defineConfig({
  plugins: [react()],
  base: '/MySide/', // 👈 This is required for GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
