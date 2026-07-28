# Migrations

Create a new migration:

```bash
pnpm --filter @kduprey/cms migration:create -- my-migration-name
```

This generates `migrations/YYYYMMDDHHMMSS-my-migration-name.ts` (a 14-digit
UTC timestamp prefix followed by a kebab-case name — same idea as
`packages/db/prisma/migrations`, dash instead of underscore since filenames
here are linted as kebab-case) from a boilerplate template. The timestamp
determines run order — using a timestamp instead of an incrementing counter
means two branches creating a migration off the same base won't generate the
same ID and silently collide on merge.

Run all pending migrations, in timestamp order, against a dataset:

```bash
pnpm --filter @kduprey/cms migration            # dry run against staging (preview only)
pnpm --filter @kduprey/cms migration:live        # apply against staging
pnpm --filter @kduprey/cms migration:prod        # dry run against production (preview only)
pnpm --filter @kduprey/cms migration:live:prod   # apply against production
```

`--project` defaults to `NEXT_PUBLIC_SANITY_PROJECT_ID` from `.env`; pass
`-- --project <id>` to override.

## Order of operations

Per Sanity's guidance ([Important considerations for schema and content
migrations](https://www.sanity.io/docs/content-lake/important-considerations-for-schema-and-content-migrations)):

1. **Deploy the schema change** (Studio) so both old and new field shapes are
   valid — Sanity's Content Lake is schemaless, so old documents don't break
   just because the schema changed.
2. **Deploy frontend/app code defensively** — it should handle both the old
   and new data shapes, since documents won't be migrated yet.
3. **Run the migration last**, after schema and app code are live. This
   minimizes the window where the two are out of sync, and avoids migrating
   data into a shape the deployed code doesn't expect yet.

Always dry-run and test against `staging` before running against
`production`.
