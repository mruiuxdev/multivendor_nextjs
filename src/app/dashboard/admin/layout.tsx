import DashboardHeader from "@/components/dashboard/header/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await currentUser();
  const isAdmin = user?.privateMetadata?.role === "ADMIN";
  if (!user || !isAdmin) redirect("/");

  return (
    <SidebarProvider>
      <DashboardSidebar isAdmin={isAdmin} />
      <main className="w-full">
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
