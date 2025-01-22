import { DashboardSidebarMenuInterface } from "@/lib/types";

export const adminDashboardSidebarOptions: DashboardSidebarMenuInterface[] = [
  {
    label: "Dashboard",
    icon: "dashboard",
    link: "/dashboard/admin",
  },
  {
    label: "Stores",
    icon: "stores",
    link: "/dashboard/admin/stores",
  },
  {
    label: "Orders",
    icon: "orders",
    link: "/dashboard/admin/orders",
  },
  {
    label: "Categories",
    icon: "categories",
    link: "/dashboard/admin/categories",
  },
  {
    label: "Sub-Categories",
    icon: "sub-categories",
    link: "/dashboard/admin/sub-categories",
  },
  {
    label: "Coupons",
    icon: "coupons",
    link: "/dashboard/admin/coupons",
  },
];
