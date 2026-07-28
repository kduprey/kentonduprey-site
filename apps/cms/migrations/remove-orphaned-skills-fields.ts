import { at, defineMigration, unset } from "sanity/migrate";

/**
 * HOW-189 removed the skills feature from the schema (home.skillsSection,
 * project.projectSkills) but left the data on existing documents, which Studio
 * now flags as "field not defined in schema". Unsets both fields.
 *
 * Run with: sanity migration run remove-orphaned-skills-fields --project b6x3by70 --dataset <dataset> --no-dry-run
 * (omitting --no-dry-run only prints the mutations, it does not apply them)
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
