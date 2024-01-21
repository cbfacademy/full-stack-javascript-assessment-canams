/// <reference types="vitest" />

import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["**/*.test.tsx"],
    globals: true,
    setupFiles: "./src/setupTests.ts",
  },
})

