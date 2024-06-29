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
  siteSettings: defineLocations({
    message: "This document is used on all pages",
    tone: "caution",
  }),
  home: defineLocations({
    message: "This document is used to render the front page",
    tone: "positive",
    locations: [{ title: "Home Page", href: resolveHref("home") }],
  }),
  about: defineLocations({
    locations: [
      {
        title: "About Page",
        href: resolveHref("about"),
      },
    ],
    message: "This document is used to render the about page",
    tone: "positive",
  }),
  "photo-and-video": defineLocations({
    locations: [
      {
        title: "Photo and Video Page",
        href: resolveHref("photoAndVideo"),
      },
    ],
    message: "This document is used to render the photo and video page",
    tone: "positive",
  }),
  links: defineLocations({
    locations: [
      {
        title: "Links Page",
        href: resolveHref("links"),
      },
    ],
    message: "This document is used to render the links page",
    tone: "positive",
  }),
  events: defineLocations({
    locations: [
      {
        title: "Events Page",
        href: resolveHref("events"),
      },
    ],
    message: "This document is used to render the events page",
    tone: "positive",
  }),
  contact: defineLocations({
    locations: [
      {
        title: "Contact Section",
        href: resolveHref("contact"),
      },
    ],
    message: "This document is used to render the contact section",
    tone: "positive",
  }),
};
