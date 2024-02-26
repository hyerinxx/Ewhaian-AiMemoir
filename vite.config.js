import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@features", replacement: "/src/features" },
      { find: "@pages", replacement: "/src/pages" },
    ],
  },
});
