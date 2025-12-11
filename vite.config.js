import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Assuming this is correct for your setup

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  // 👇 ADD THIS CONFIGURATION BLOCK TO FIX THE WARNING
  build: {
    // 1. Explicitly set Lightning CSS as the minifier
    cssMinify: 'lightningcss',
  },
  css: {
    // 2. Configure the minifier to handle errors gracefully
    lightningcss: {
      // Setting this to true tells the compiler to skip over unknown rules (like @property) 
      // instead of flagging them as a warning, which suppresses the console message.
      errorRecovery: true, 
    },
  },
  // 👆 END OF FIX
});