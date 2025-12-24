import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Assuming this is correct for your setup


export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  
  build: {
  
    cssMinify: 'lightningcss',
  },
  css: {
 
    lightningcss: {

    },
  },
  
});