# Migrations

Run all pending migrations against a dataset:

```
pnpm --filter @kduprey/cms migrate -- --dataset staging
pnpm --filter @kduprey/cms migrate -- --dataset production
```

Add `--dry-run` to preview mutations first. `--project` defaults to
`NEXT_PUBLIC_SANITY_PROJECT_ID` from `.env`; pass it explicitly to override.

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
