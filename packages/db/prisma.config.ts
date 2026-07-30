import { config } from "dotenv";
import { defineConfig, env } from "prisma/config";

config({ path: [".env.local", ".env"] });

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
