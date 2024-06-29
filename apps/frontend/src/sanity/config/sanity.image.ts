import createImageUrlBuilder from "@sanity/image-url";
import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId } from "./sanity.api";

const imageBuilder = createImageUrlBuilder({
  dataset,
  projectId: projectId || "",
});

export const urlForImage = (source: SanityImageSource | undefined) => {
  if (source) return imageBuilder.image(source).auto("format").fit("max");

  return null;
};

export function urlForOpenGraphImage(image: SanityImageSource | undefined) {
  return urlForImage(image)?.width(1200).height(627).fit("crop").url();
}
