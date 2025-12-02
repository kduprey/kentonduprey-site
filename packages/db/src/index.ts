import { env } from "prisma/config";
import { PrismaClient, Prisma } from "./generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'

export * from "@prisma/client";
export { prisma };
const connectionString = env("DATABASE_URL");

export const prismaConfig: Prisma.PrismaClientOptions=
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

const prismaClientSingleton = () => {
  return new PrismaClient({ 
   ...prismaConfig
   });
};

declare const globalThis: {
  prismaGlobal?: PrismaClient;
} & typeof global;

const prisma: PrismaClient = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
