import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }), // enable new JSX runtime
    tailwindcss(),
  ],
});
