import "dotenv/config";
import { defineConfig, env } from "prisma/config";

interface Env {
  DATABASE_URL: string;
}

export default defineConfig({
  datasource: {
    url: env<Env>("DATABASE_URL"),
  },
  migrations: {
    path: "prisma/migrations",
  },
  schema: "prisma/schema.prisma",
});
