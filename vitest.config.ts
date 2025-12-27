import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    // Try using the resolve helper to make sure the path is absolute
    setupFiles: [path.resolve(__dirname, "./tests/setup.ts")],
  },
});
