import type { PrismaClient } from "./src";

declare global {
  var prisma: PrismaClient;
}
