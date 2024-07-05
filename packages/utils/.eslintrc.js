/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kduprey/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
};
