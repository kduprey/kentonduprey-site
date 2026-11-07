import { defineConfig } from "oxfmt";
import ultracite from "ultracite/oxfmt";

import { GENERATED_IGNORE_PATTERNS } from "./oxlint.config.mts";

export default defineConfig({
  ...ultracite,
  ignorePatterns: [
    ...(ultracite.ignorePatterns ?? []),
    ...GENERATED_IGNORE_PATTERNS,
  ],
});
