"use client";

import { ModeToggle } from "@/components/shared/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardHeader() {
  return (
    <div className="flex w-full items-center justify-between p-2">
      <SidebarTrigger />
      <div className="flex gap-3">
        <ModeToggle />
        <UserButton />
      </div>
    </div>
  );
}
