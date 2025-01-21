import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { FC } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { Logo } from "@/components/shared/logo";
import UserInfo from "./user-info";

interface SidebarProps {
  isAdmin?: boolean;
}

export const DashboardSidebar: FC<SidebarProps> = async ({ isAdmin }) => {
  const user = await currentUser();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2">
          <UserInfo user={user} />
        </div>
      </SidebarHeader>
      <SidebarContent></SidebarContent>
      <SidebarFooter>Footer here</SidebarFooter>
    </Sidebar>
  );
};
