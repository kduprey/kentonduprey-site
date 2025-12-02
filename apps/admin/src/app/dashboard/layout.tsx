import type { PropsWithChildren } from "react";
import { DashboardLayout } from "~/components/dashboard-layout";

const Layout = ({ children }: PropsWithChildren) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default Layout;
