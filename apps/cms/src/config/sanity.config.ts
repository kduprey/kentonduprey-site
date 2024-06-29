import { visionTool } from "@sanity/vision";
import { type WorkspaceOptions, defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { PUBLIC_SITE_URL } from "@kduprey/config";
import * as schemas from "@/schemas";
import {
  deskStructure,
  documentActions,
  schemaTemplatesFilter,
} from "./deskStructure";
import { locate, mainDocuments } from "./locate";

const schemaTypes = Object.values(schemas);

export const PROJECT_ID = "b6x3by70";

const defaultConfig = {
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    templates: schemaTemplatesFilter,
  },
  document: {
    actions: documentActions,
  },
};

const production: WorkspaceOptions = {
  ...defaultConfig,
  name: "production",
  title: "Haus of Web, LLC - Production",
  basePath: "/production",
  projectId: PROJECT_ID,
  dataset: "production",
  plugins: [
    presentationTool({
      resolve: { mainDocuments, locations: locate },
      previewUrl: {
        draftMode: {
          enable: "https://kentonduprey.com/api/draft",
        },
      },
    }),
    ...defaultConfig.plugins,
  ],
};

const staging: WorkspaceOptions = {
  ...defaultConfig,
  name: "staging",
  title: "Haus of Web, LLC - Staging",
  basePath: "/staging",
  projectId: PROJECT_ID,
  dataset: "staging",
  plugins: [
    presentationTool({
      resolve: { mainDocuments, locations: locate },
      previewUrl: {
        draftMode: {
          enable: `${PUBLIC_SITE_URL}/api/draft`,
        },
      },
    }),
    ...defaultConfig.plugins,
  ],
};

export default defineConfig(
  process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? [production, staging]
    : [staging, production],
);
