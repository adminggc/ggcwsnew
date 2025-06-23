import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    // Remove Replit-specific plugins for production
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? []  // Skip Replit plugins in production
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // For Vercel, we'll handle shared/assets differently or copy them to client
      "@shared": path.resolve(__dirname, "./src/shared"),  // Move shared to client/src
      "@assets": path.resolve(__dirname, "./src/assets"),  // Move assets to client/src
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});