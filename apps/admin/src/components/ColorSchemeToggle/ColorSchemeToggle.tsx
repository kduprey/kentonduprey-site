"use client";

import { Button, Group, useMantineColorScheme } from "@mantine/core";

export const ColorSchemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();

  const setLight = () => setColorScheme("light");
  const setDark = () => setColorScheme("dark");
  const setAuto = () => setColorScheme("auto");

  return (
    <Group justify="center" mt="xl">
      <Button onClick={setLight}>Light</Button>
      <Button onClick={setDark}>Dark</Button>
      <Button onClick={setAuto}>Auto</Button>
    </Group>
  );
};
