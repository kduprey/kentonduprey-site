import type { PropsWithChildren } from "react";
import { DashboardLayout } from "@/components/DashboardLayout/DashboardLayout";

const Layout = ({ children }: PropsWithChildren) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default Layout;
