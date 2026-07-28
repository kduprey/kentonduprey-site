#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CMS_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const MIGRATIONS_DIR = path.join(CMS_DIR, "migrations");

try {
  process.loadEnvFile(path.join(CMS_DIR, ".env"));
} catch {
  // no .env file — rely on already-set environment variables (e.g. in CI)
}

function parseArgs(argv) {
  const args = {};
  for (const [index, value] of argv.entries()) {
    if (value === "--dataset") {
      args.dataset = argv[index + 1];
    } else if (value === "--project") {
      args.project = argv[index + 1];
    } else if (value === "--dry-run") {
      args.dryRun = true;
    }
  }
  return args;
}

const parsed = parseArgs(process.argv.slice(2));
const { dataset, dryRun } = parsed;
const project = parsed.project ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;

if (!dataset) {
  console.error(
    "Usage: run-migrations --dataset <dataset> [--project <id>] [--dry-run]"
  );
  process.exit(1);
}

const TS_EXTENSION = /\.ts$/;
const SEQUENCE_PREFIX = /^\d{4}-/;

const migrationFiles = readdirSync(MIGRATIONS_DIR).filter((file) =>
  file.endsWith(".ts")
);

const unprefixed = migrationFiles.filter((file) => !SEQUENCE_PREFIX.test(file));
if (unprefixed.length > 0) {
  console.error(
    `Migration files must start with a 4-digit sequence number (e.g. 0001-my-migration.ts): ${unprefixed.join(", ")}\nUse "pnpm --filter @kduprey/cms migration:create -- <name>" to generate one.`
  );
  process.exit(1);
}

// Sequence numbers determine run order, not alphabetical filename order.
const migrationIds = migrationFiles
  .map((file) => file.replace(TS_EXTENSION, ""))
  .sort();

if (migrationIds.length === 0) {
  console.log("No migrations found.");
  process.exit(0);
}

for (const id of migrationIds) {
  console.log(`\n--- Running migration: ${id} (dataset: ${dataset}) ---`);

  const args = ["migrations", "run", id, "--dataset", dataset, "--no-confirm"];
  if (project) {
    args.push("--project", project);
  }
  if (!dryRun) {
    args.push("--no-dry-run");
  }

  const result = spawnSync("sanity", args, { stdio: "inherit" });
  if (result.status !== 0) {
    console.error(`Migration "${id}" failed (exit code ${result.status}).`);
    process.exit(result.status ?? 1);
  }
}

console.log("\nAll migrations completed.");
