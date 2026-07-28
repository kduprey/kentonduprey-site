#!/usr/bin/env node
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const MIGRATIONS_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "migrations"
);

const SEQUENCE_PREFIX = /^(\d{4})-/;
const NON_ALPHANUMERIC = /[^a-z0-9]+/g;
const LEADING_TRAILING_DASHES = /^-+|-+$/g;

function toKebabCase(name) {
  return name
    .toLowerCase()
    .replace(NON_ALPHANUMERIC, "-")
    .replace(LEADING_TRAILING_DASHES, "");
}

function nextSequenceNumber() {
  if (!existsSync(MIGRATIONS_DIR)) {
    return 1;
  }
  const numbers = readdirSync(MIGRATIONS_DIR)
    .map((file) => file.match(SEQUENCE_PREFIX)?.[1])
    .filter(Boolean)
    .map(Number);
  return numbers.length === 0 ? 1 : Math.max(...numbers) + 1;
}

function titleCase(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

const rawName = process.argv.slice(2).find((arg) => arg !== "--");
if (!rawName) {
  console.error("Usage: create-migration <name>");
  process.exit(1);
}

const kebabName = toKebabCase(rawName);
const sequenceNumber = String(nextSequenceNumber()).padStart(4, "0");
const id = `${sequenceNumber}-${kebabName}`;
const filePath = path.join(MIGRATIONS_DIR, `${id}.ts`);

mkdirSync(MIGRATIONS_DIR, { recursive: true });

const template = `import { at, defineMigration, set } from "sanity/migrate";

/**
 * TODO: describe what this migration does and why.
 *
 * Run with: pnpm --filter @kduprey/cms migration[:live[:prod]]
 * (runs every migration in this directory, in sequence order — see apps/cms/migrations/README.md)
 */
export default defineMigration({
  documentTypes: ["TODO"],
  migrate: {
    document(doc: Record<string, unknown>) {
      // TODO: return an at(path, set(value) | unset()) patch, or nothing to skip this document.
    },
  },
  title: "${titleCase(kebabName)}",
});
`;

writeFileSync(filePath, template);
console.log(`Created ${path.relative(process.cwd(), filePath)}`);
