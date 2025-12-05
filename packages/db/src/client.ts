import { env } from "prisma/config";
import { Prisma, PrismaClient } from "./generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = env("DATABASE_URL");

export const prismaConfig: Prisma.PrismaClientOptions =
  process.env.NODE_ENV === "production"
    ? {
        adapter: new PrismaPg({ connectionString }),

        log: ["query", "info", "warn", "error"],
        errorFormat: "minimal",
      }
    : {
        adapter: new PrismaPg({ connectionString }),
        log: ["query", "info", "warn", "error"],
        errorFormat: "pretty",
      };

export const prisma =
  global.prisma ||
  new PrismaClient({
    ...prismaConfig,
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;
