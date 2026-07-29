// biome-ignore-all lint/suspicious/noExplicitAny: pnpm resolves a duplicate @types/react instance here, so spread props aren't nominally the same as the ambient JSX namespace expects
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../lib/utils";

export const H1 = ({ className, ...props }: ComponentPropsWithoutRef<"h1">) => (
  <h1
    className={cn("font-bold text-3xl leading-tight md:text-5xl", className)}
    {...(props as any)}
  />
);

export const H2 = ({ className, ...props }: ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={cn("font-bold text-2xl leading-tight md:text-3xl", className)}
    {...(props as any)}
  />
);

export const H3 = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={cn("font-medium text-xl leading-tight md:text-2xl", className)}
    {...(props as any)}
  />
);

export const H4 = ({ className, ...props }: ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={cn("font-medium text-lg leading-tight md:text-xl", className)}
    {...(props as any)}
  />
);

export const P = ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn("text-gray-500 md:text-lg dark:text-gray-200", className)}
    {...(props as any)}
  />
);

export const Lead = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn("font-semibold text-black dark:text-white", className)}
    {...(props as any)}
  />
);

export const Muted = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => (
  <p className={cn("text-gray-500 text-sm", className)} {...(props as any)} />
);
