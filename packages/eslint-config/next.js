const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * Next.js apps.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    ...[
      "@vercel/style-guide/eslint/node",
      "@vercel/style-guide/eslint/typescript",
      "@vercel/style-guide/eslint/browser",
      "@vercel/style-guide/eslint/react",
      "@vercel/style-guide/eslint/next",
    ].map(require.resolve),
    "turbo",
  ],
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  plugins: ["only-warn", "json-files"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/"],
  // add rules configurations here
  rules: {
    "json-files/ensure-repository-directory": "error",
    "json-files/no-branch-in-dependencies": "error",
    "json-files/require-engines": "error",
    "json-files/require-license": "error",
    "json-files/restrict-ranges": "error",
    "json-files/sort-package-json": "error",

    "import/no-default-export": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
        ignore: ["global-error.tsx", "not-found.tsx"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|assert)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
  },
};
