const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint:recommended", "prettier", "turbo"],
  plugins: ["only-warn", "json-files"],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    ".*.js",
    "node_modules/",
    "dist/",
  ],
  overrides: [
    {
      files: ["*.js?(x)", "*.ts?(x)"],
    },
  ],
  rules: {
    "json-files/ensure-repository-directory": "error",
    "json-files/no-branch-in-dependencies": "error",
    "json-files/require-engines": "error",
    "json-files/require-license": "error",
    "json-files/restrict-ranges": "error",
    "json-files/sort-package-json": "error",
    "no-console": "off",
    "no-restricted-syntax": [
      "error",
      {
        selector:
          "CallExpression[callee.object.name='console'][callee.property.name!=/^(warn|error|info|trace|assert)$/]",
        message: "Unexpected property on console object was called",
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true },
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};
