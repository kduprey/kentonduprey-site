import { CogIcon } from "@sanity/icons/Cog";
import type {
  DocumentActionComponent,
  DocumentActionsContext,
  SchemaTypeDefinition,
  Template,
} from "sanity";
import type {
  ListBuilder,
  ListItemBuilder,
  StructureBuilder,
} from "sanity/structure";

import { homeSchema } from "@/schemas/home";
import { siteSettings } from "@/schemas/site-settings";

export const singleTypes: SchemaTypeDefinition[] = [homeSchema, siteSettings];

const singletonListItem = (
  S: StructureBuilder,
  type: SchemaTypeDefinition
): ListItemBuilder =>
  S.listItem()
    .title(type.title ?? type.name)
    .child(S.document().schemaType(type.name).documentId(type.name))
    .icon(type.icon);

export const deskStructure = (S: StructureBuilder): ListBuilder =>
  S.list()
    .title("Content")
    .items([
      singletonListItem(S, homeSchema),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !singleTypes.map((e) => e.title).includes(listItem.getTitle())
      ),
      S.divider(),
      S.listItem()
        .title("Site Settings")
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings")
        )
        .icon(CogIcon),
    ]);

const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export const documentActions = (
  input: DocumentActionComponent[],
  context: DocumentActionsContext
): DocumentActionComponent[] =>
  singleTypes.map((e) => e.name).includes(context.schemaType)
    ? input.filter(({ action }) => action && singletonActions.has(action))
    : input;

export const schemaTemplatesFilter = (templates: Template[]): Template[] =>
  templates.filter(
    ({ schemaType }) => !singleTypes.map((e) => e.name).includes(schemaType)
  );
