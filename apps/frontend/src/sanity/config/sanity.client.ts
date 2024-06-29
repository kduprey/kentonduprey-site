import { createClient } from "next-sanity";
import { SERVER_CMS_URL } from "@kduprey/config";
import { apiVersion, dataset, projectId } from "./sanity.api";

export const client = createClient({
  apiVersion: apiVersion ?? "",
  dataset,
  perspective: "published",
  projectId,
  stega: {
    enabled: false,
    filter: (props) => {
      if (props.sourcePath.at(-1) === "title") return true;

      return props.filterDefault(props);
    },
    logger: console,
    studioUrl: () => ({ baseUrl: SERVER_CMS_URL, workspace: dataset }),
  },
  useCdn: false,
});
