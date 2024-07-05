/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@kduprey/eslint-config/react.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
