import * as schemas from "@/schemas";
import { PUBLIC_SITE_URL } from "@kduprey/config";
import { visionTool } from "@sanity/vision";
import { type WorkspaceOptions, defineConfig } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";

import {
  deskStructure,
  documentActions,
  schemaTemplatesFilter,
} from "./deskStructure";
import { locate, mainDocuments } from "./locate";

const schemaTypes = Object.values(schemas);

export const PROJECT_ID = "b6x3by70";

const defaultConfig = {
  document: {
    actions: documentActions,
  },
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
  schema: {
    templates: schemaTemplatesFilter,
    types: schemaTypes,
  },
};

const production: WorkspaceOptions = {
  ...defaultConfig,
  basePath: "/production",
  dataset: "production",
  name: "production",
  plugins: [
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: "https://kentonduprey.com/api/draft",
        },
      },
      resolve: { locations: locate, mainDocuments },
    }),
    ...defaultConfig.plugins,
  ],
  projectId: PROJECT_ID,
  title: "Haus of Web, LLC - Production",
};

const staging: WorkspaceOptions = {
  ...defaultConfig,
  basePath: "/staging",
  dataset: "staging",
  name: "staging",
  plugins: [
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: `${PUBLIC_SITE_URL}/api/draft`,
        },
      },
      resolve: { locations: locate, mainDocuments },
    }),
    ...defaultConfig.plugins,
  ],
  projectId: PROJECT_ID,
  title: "Haus of Web, LLC - Staging",
};

export default defineConfig(
  process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_VERCEL_ENV === "production"
    ? [production, staging]
    : [staging, production],
);
