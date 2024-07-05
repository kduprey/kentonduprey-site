import { render, type RenderOptions } from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
import type { ReactElement } from "react";
import { theme } from "../src/theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
