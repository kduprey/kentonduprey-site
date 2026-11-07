import type { ComponentPropsWithoutRef } from "react";

import { cn } from "../lib/utils";

export const H1 = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h1">) => (
  <h1
    className={cn("text-3xl leading-tight font-bold md:text-5xl", className)}
    {...props}
  >
    {children}
  </h1>
);

export const H2 = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h2">) => (
  <h2
    className={cn("text-2xl leading-tight font-bold md:text-3xl", className)}
    {...props}
  >
    {children}
  </h2>
);

export const H3 = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h3">) => (
  <h3
    className={cn("text-xl leading-tight font-medium md:text-2xl", className)}
    {...props}
  >
    {children}
  </h3>
);

export const H4 = ({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"h4">) => (
  <h4
    className={cn("text-lg leading-tight font-medium md:text-xl", className)}
    {...props}
  >
    {children}
  </h4>
);

export const P = ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn("text-gray-500 md:text-lg dark:text-gray-200", className)}
    {...props}
  />
);

export const Lead = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => (
  <p
    className={cn("font-semibold text-black dark:text-white", className)}
    {...props}
  />
);

export const Muted = ({
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) => (
  <p className={cn("text-sm text-gray-500", className)} {...props} />
);
