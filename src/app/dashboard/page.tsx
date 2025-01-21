import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  // Get user
  const user = await currentUser();
  if (user?.privateMetadata?.role) {
    switch (user.privateMetadata.role) {
      case "USER":
        redirect("/");
      case "ADMIN":
        redirect("/dashboard/admin");
      case "SELLER":
        redirect("/dashboard/seller");
      default:
        break;
    }
  }
}
