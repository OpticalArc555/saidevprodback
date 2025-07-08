import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import javascriptObfuscator from 'vite-plugin-javascript-obfuscator';

export default defineConfig({
  plugins: [
    react(),
    javascriptObfuscator({
      compact: true,
      controlFlowFlattening: true,
      deadCodeInjection: true,
      stringArray: true,
      rotateStringArray: true,
      stringArrayEncoding: ['base64'],
      splitStrings: true,
      splitStringsChunkLength: 5,
    }),
  ],
  build: {
    sourcemap: false,       // 🔒 Disable source maps
    minify: 'esbuild',      // ⚡ Minify code with esbuild
  },
 
});
