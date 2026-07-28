import { PUBLIC_SITE_URL } from "@kduprey/config";
import { visionTool } from "@sanity/vision";
import { defineConfig, type WorkspaceOptions } from "sanity";
import { presentationTool } from "sanity/presentation";
import { structureTool } from "sanity/structure";
import { homeSchema } from "@/schemas/home";
import { project } from "@/schemas/project";
import { siteSettings } from "@/schemas/site-settings";

import {
  deskStructure,
  documentActions,
  schemaTemplatesFilter,
} from "./desk-structure";
import { locate, mainDocuments } from "./locate";

const schemaTypes = [homeSchema, project, siteSettings];

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
      allowOrigins: [
        "https://kentonduprey.com",
        "https://www.kentonduprey.com",
        "https://kd.hausofwebstage.dev",
        "https://kd.hausofweb.dev",
      ],
      previewUrl: {
        draftMode: {
          enable: "https://kentonduprey.com/api/draft-mode/enable",
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
      allowOrigins: [
        "https://kentonduprey.com",
        "https://www.kentonduprey.com",
        "https://kd.hausofwebstage.dev",
        "https://kd.hausofweb.dev",
      ],
      previewUrl: {
        draftMode: {
          enable: `${PUBLIC_SITE_URL}/api/draft-mode/enable`,
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
    : [staging, production]
);
