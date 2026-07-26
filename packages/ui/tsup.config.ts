import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  dts: true,
  entryPoints: ["src/index.tsx"],
  external: ["react"],
  format: ["cjs", "esm"],
  sourcemap: true,
  ...options,
}));
