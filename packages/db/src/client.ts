import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "prisma/config";
import { type Prisma, PrismaClient } from "./generated/prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const connectionString = env("DATABASE_URL");

export const prismaConfig: Prisma.PrismaClientOptions =
  process.env.NODE_ENV === "production"
    ? {
        adapter: new PrismaPg({ connectionString }),
        errorFormat: "minimal",

        log: ["query", "info", "warn", "error"],
      }
    : {
        adapter: new PrismaPg({ connectionString }),
        errorFormat: "pretty",
        log: ["query", "info", "warn", "error"],
      };

export const prisma =
  global.prisma ||
  new PrismaClient({
    ...prismaConfig,
  });

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
