import { type PropsWithChildren } from "react";
import { DashboardLayout } from "@/components";

const Layout = ({ children }: PropsWithChildren) => (
  <DashboardLayout>{children}</DashboardLayout>
);

export default Layout;
