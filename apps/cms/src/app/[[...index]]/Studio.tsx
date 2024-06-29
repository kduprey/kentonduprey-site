"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/config/sanity.config";

export const Studio = () => {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
};
