import { Sidebar, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { adminDashboardSidebarOptions } from "@/constants/data";
import { currentUser } from "@clerk/nextjs/server";
import { FC } from "react";
import SidebarNavAdmin from "./nav-admin";
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
      {isAdmin && <SidebarNavAdmin menuLinks={adminDashboardSidebarOptions} />}
      <SidebarFooter className="text-center">
        <small>Copyright © {new Date().getFullYear()}</small>
      </SidebarFooter>
    </Sidebar>
  );
};
