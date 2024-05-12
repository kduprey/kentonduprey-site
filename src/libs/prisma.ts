import { PrismaClient } from "@prisma/client";
import type { PrismaClientOptions } from "@prisma/client/runtime/library";

export { prisma };

declare global {
	// allow global `var` declarations
	// eslint-disable-next-line no-var -- Adding gloabl PrismaClient
	var prisma: PrismaClient | undefined;
}

const dev = process.env.VERCEL_ENV === "development";

export const prismaConfig = dev
	? {
			log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
			errorFormat: "pretty" as PrismaClientOptions["errorFormat"],
	  }
	: {
			log: ["query", "info", "warn", "error"] as PrismaClientOptions["log"],
			errorFormat: "minimal" as PrismaClientOptions["errorFormat"],
	  };

// eslint-disable-next-line import/no-mutable-exports -- Adding gloabl PrismaClient
let prisma: PrismaClient;

if (typeof window === "undefined") {
	if (process.env.VERCEL_ENV === "production") {
		prisma =
			global.prisma ?? new PrismaClient(dev ? { ...prismaConfig } : undefined);
	} else {
		if (!global.prisma) {
			global.prisma = new PrismaClient(dev ? { ...prismaConfig } : undefined);
		}

		prisma = global.prisma;
	}
}
