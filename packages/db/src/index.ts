import { type Prisma, PrismaClient } from "@prisma/client";

export * from "@prisma/client";
export { prisma };

export const prismaConfig: Prisma.PrismaClientOptions =
  process.env.NODE_ENV === "production"
    ? {
        log: ["query", "info", "warn", "error"],
        errorFormat: "minimal",
      }
    : {
        log: ["query", "info", "warn", "error"],
        errorFormat: "pretty",
      };

const prismaClientSingleton = () => {
  return new PrismaClient({ ...prismaConfig });
};

declare const globalThis: {
  prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
