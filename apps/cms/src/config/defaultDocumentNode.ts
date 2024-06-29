import { Iframe } from "sanity-plugin-iframe-pane";
import type { DefaultDocumentNodeResolver } from "sanity/structure";

export const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType },
) => {
  switch (schemaType) {
    case "home":
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url:
              process.env.VERCEL_ENV === "production"
                ? "https://kd-cms.kduprey.com/api/preview"
                : "http://localhost:3402/api/preview",
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};
