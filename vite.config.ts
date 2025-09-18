import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),        // zwingend für React SPA
    tailwindcss(),
    tsconfigPaths(),
    VitePWA({
      workbox: {
        maximumFileSizeToCacheInBytes: 30 * 1024 * 1024
      },
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "My React App",
        short_name: "ReactApp",
        description: "My React Application with PWA support",
        theme_color: "#ffffff",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  optimizeDeps: {
    include: ["@react-three/drei", "three"]
  },
  build: {
    chunkSizeWarningLimit: 2000, // Größe in KB
    outDir: "dist",               // Output für SPA Build
  },
  root: ".",                     // Projekt-Root, index.html sollte hier liegen
});