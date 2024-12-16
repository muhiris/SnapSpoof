import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext", // Target modern browsers (use esnext for optimal output)
    minify: "esbuild", // Use esbuild for minification (faster and recommended)
    outDir: "dist", // Output directory for production build
  }
});
