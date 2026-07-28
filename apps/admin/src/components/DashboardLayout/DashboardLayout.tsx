"use client";

import { Show, UserButton } from "@clerk/nextjs";
import { cn } from "@kduprey/ui";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useState } from "react";
import { links } from "@/src/data/links";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [opened, setOpened] = useState(false);
  const path = usePathname();

  const toggleOpened = () => setOpened((o) => !o);
  const closeNav = () => setOpened(false);

  return (
    <div className="min-h-dvh bg-black">
      <header className="flex h-15 items-center gap-4 border-white/10 border-b bg-black px-4 md:h-20">
        <button
          className="text-white sm:hidden"
          onClick={toggleOpened}
          type="button"
        >
          {opened ? <XIcon size={20} /> : <MenuIcon size={20} />}
        </button>
        <Link className="mx-auto sm:mx-0" href="/dashboard">
          <h1 className="text-center font-semibold text-white text-xl">
            Haus of Web, LLC.
          </h1>
        </Link>
      </header>
      <div className="flex">
        <nav
          className={cn(
            "w-full shrink-0 border-white/10 border-b bg-black p-4 sm:block sm:w-[200px] sm:border-r sm:border-b-0 md:w-[250px]",
            opened ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                className={cn(
                  "rounded-lg px-3 py-2 text-sm text-white/70 hover:bg-white/10 hover:text-white",
                  path === link.href && "bg-white/10 text-white"
                )}
                href={link.href}
                key={link.href}
                onClick={closeNav}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Show when="signed-in">
              <UserButton showName />
            </Show>
          </div>
        </nav>
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
};
