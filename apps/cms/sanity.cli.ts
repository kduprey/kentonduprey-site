/**
 * This configuration file lets you run `$ sanity [command]` in this folder
 * Go to https://www.sanity.io/docs/cli to learn more.
 **/
import { defineCliConfig } from "sanity/cli";
import { z } from "zod";

const projectId = z
  .string({
    message: "Environment variable NEXT_PUBLIC_SANITY_PROJECT_ID is required",
  })
  .parse(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
const dataset = z
  .string({
    message: "Environment variable NEXT_PUBLIC_SANITY_DATASET is required",
  })
  .parse(process.env.NEXT_PUBLIC_SANITY_DATASET);

export default defineCliConfig({ api: { dataset, projectId } });
