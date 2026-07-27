import { MantineProvider } from "@mantine/core";
import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement } from "react";
import { theme } from "../src/theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
  <MantineProvider theme={theme}>{children}</MantineProvider>
);

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
