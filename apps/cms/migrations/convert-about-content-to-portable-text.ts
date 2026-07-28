import { randomUUID } from "node:crypto";
import { at, defineMigration, set } from "sanity/migrate";

/**
 * aboutSection.content used to be a plain string; it's now a Portable Text
 * block array. Wraps any remaining string values in a single normal block.
 *
 * Run with: sanity migration run convert-about-content-to-portable-text --dataset <dataset> --no-dry-run
 * (omitting --no-dry-run only prints the mutations, it does not apply them)
 */
export default defineMigration({
  documentTypes: ["home"],
  migrate: {
    document(doc: Record<string, unknown>) {
      const aboutSection = doc.aboutSection as
        | { content?: unknown }
        | undefined;
      const content = aboutSection?.content;
      if (typeof content !== "string") {
        return;
      }

      return at(
        "aboutSection.content",
        set([
          {
            _key: randomUUID(),
            _type: "block",
            children: [
              { _key: randomUUID(), _type: "span", marks: [], text: content },
            ],
            markDefs: [],
            style: "normal",
          },
        ])
      );
    },
  },
  title: "Convert aboutSection.content string to Portable Text",
});
