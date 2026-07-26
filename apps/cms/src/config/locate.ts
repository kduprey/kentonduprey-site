// ./sanity/presentation/locate.ts

import {
  type DocumentLocationResolvers,
  defineDocuments,
  defineLocations,
} from "sanity/presentation";

export function resolveHref(documentType?: string): string {
  switch (documentType) {
    case "home":
      return "/";
    case "about":
      return "/about";
    case "photoAndVideo":
      return "/photo-and-video";
    case "links":
      return "/links";
    case "events":
      return "/events";
    case "contact":
      return "/contact";
    default:
      console.warn("Invalid document type:", documentType);
      return "";
  }
}

export const mainDocuments = defineDocuments([
  {
    route: "/",
    type: "home",
  },
  {
    route: "/about",
    type: "about",
  },
  {
    route: "/photo-and-video",
    type: "photo-and-video",
  },
  {
    route: "/links",
    type: "links",
  },
  {
    route: "/events",
    type: "events",
  },
  {
    route: "/contact",
    type: "contact",
  },
]);

export const locate: DocumentLocationResolvers = {
  about: defineLocations({
    locations: [
      {
        href: resolveHref("about"),
        title: "About Page",
      },
    ],
    message: "This document is used to render the about page",
    tone: "positive",
  }),
  contact: defineLocations({
    locations: [
      {
        href: resolveHref("contact"),
        title: "Contact Section",
      },
    ],
    message: "This document is used to render the contact section",
    tone: "positive",
  }),
  events: defineLocations({
    locations: [
      {
        href: resolveHref("events"),
        title: "Events Page",
      },
    ],
    message: "This document is used to render the events page",
    tone: "positive",
  }),
  home: defineLocations({
    locations: [{ href: resolveHref("home"), title: "Home Page" }],
    message: "This document is used to render the front page",
    tone: "positive",
  }),
  links: defineLocations({
    locations: [
      {
        href: resolveHref("links"),
        title: "Links Page",
      },
    ],
    message: "This document is used to render the links page",
    tone: "positive",
  }),
  "photo-and-video": defineLocations({
    locations: [
      {
        href: resolveHref("photoAndVideo"),
        title: "Photo and Video Page",
      },
    ],
    message: "This document is used to render the photo and video page",
    tone: "positive",
  }),
  siteSettings: defineLocations({
    message: "This document is used on all pages",
    tone: "caution",
  }),
};
