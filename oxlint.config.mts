import { defineConfig } from "oxlint";
import core from "ultracite/oxlint/core";
import next from "ultracite/oxlint/next";
import react from "ultracite/oxlint/react";

export const GENERATED_IGNORE_PATTERNS = [
  ".claude",
  "packages/db/prisma/migrations",
  "packages/db/src/generated",
];

export default defineConfig({
  env: core.env,
  extends: [core, react, next],
  ignorePatterns: [
    ...(core.ignorePatterns ?? []),
    ...GENERATED_IGNORE_PATTERNS,
  ],
  overrides: [
    {
      // Workspace package entrypoints are the declared package.json "exports".
      files: ["packages/*/src/index.ts"],
      rules: { "oxc/no-barrel-file": "off" },
    },
  ],
  rules: {
    // React component files are named after their exported component.
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, kebabCase: true, pascalCase: true } },
    ],
  },
});
