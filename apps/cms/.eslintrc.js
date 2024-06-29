/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kduprey/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
