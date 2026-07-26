"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import {
  Anchor,
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
  AppShellSection,
  Burger,
  Group,
  NavLink,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { links } from "@/src/data/links";

export const DashboardLayout = ({ children }: PropsWithChildren) => {
  const [opened, { toggle }] = useDisclosure();
  const path = usePathname();
  return (
    <AppShell
      bg="black"
      header={{ height: { base: 60, lg: 80, md: 70 } }}
      navbar={{
        breakpoint: "sm",
        collapsed: { mobile: !opened },
        width: { base: 200, md: 250 },
      }}
      padding="md"
    >
      <AppShellHeader bg="black">
        <Group h="100%" px="md">
          <Burger hiddenFrom="sm" onClick={toggle} opened={opened} size="sm" />

          <Anchor component={Link} href="/dashboard" underline="never">
            <Title
              c="white"
              mx={{ base: "auto", sm: 0 }}
              order={1}
              style={{ lineClamp: 0 }}
              ta={{ base: "center", sm: "left" }}
            >
              Haus of Web, LLC.
            </Title>
          </Anchor>
        </Group>
      </AppShellHeader>
      <AppShellNavbar bg="black" p="md">
        <AppShellSection grow>
          {links.map((link) => (
            <NavLink
              active={path === link.href}
              component={Link}
              href={link.href}
              key={link.href}
              label={link.label}
              onClick={toggle}
            />
          ))}
        </AppShellSection>
        <AppShellSection>
          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </AppShellSection>
      </AppShellNavbar>
      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
};
