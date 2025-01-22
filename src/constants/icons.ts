import {
  ChartBarStacked,
  ChartColumnStacked,
  CirclePercent,
  LayoutDashboard,
  PackageOpen,
  ShoppingBag,
} from "lucide-react";

export const icons = [
  {
    label: "Dashboard",
    value: "dashboard",
    path: LayoutDashboard,
  },
  {
    label: "Stores",
    value: "stores",
    path: ShoppingBag,
  },
  {
    label: "Orders",
    value: "orders",
    path: PackageOpen,
  },
  {
    label: "Categories",
    value: "categories",
    path: ChartBarStacked,
  },
  {
    label: "Sub-Categories",
    value: "sub-categories",
    path: ChartColumnStacked,
  },
  {
    label: "Coupons",
    value: "coupons",
    path: CirclePercent,
  },
];
