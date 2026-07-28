import { at, defineMigration, unset } from "sanity/migrate";

/**
 * HOW-189 removed the skills feature from the schema (home.skillsSection,
 * project.projectSkills) but left the data on existing documents, which Studio
 * now flags as "field not defined in schema". Unsets both fields.
 *
 * Run with: pnpm --filter @kduprey/cms migration[:live[:prod]]
 * (runs every migration in this directory — see apps/cms/migrations/README.md)
 */
export default defineMigration({
  documentTypes: ["home", "project"],
  migrate: {
    document(doc: Record<string, unknown>) {
      if (doc._type === "home" && "skillsSection" in doc) {
        return at("skillsSection", unset());
      }
      if (doc._type === "project" && "projectSkills" in doc) {
        return at("projectSkills", unset());
      }
    },
  },
  title: "Remove orphaned skills fields from home and project documents",
});
