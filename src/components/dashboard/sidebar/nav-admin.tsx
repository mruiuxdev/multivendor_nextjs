"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SidebarContent } from "@/components/ui/sidebar";
import { icons } from "@/constants/icons";
import { DashboardSidebarMenuInterface } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarNavAdmin({
  menuLinks,
}: {
  menuLinks: DashboardSidebarMenuInterface[];
}) {
  const pathname = usePathname();

  return (
    <SidebarContent>
      <Command>
        <CommandInput placeholder="Type a search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {menuLinks.map((link, i) => {
              let icon;
              const findIcon = icons.find((icon) => icon.value === link.icon);
              if (findIcon) icon = <findIcon.path />;

              return (
                <CommandItem
                  key={i}
                  className={cn("w-full h-12 cursor-pointer", {
                    "bg-primary": link.link === pathname,
                  })}
                >
                  <Link href={link.link} className="items-center flex gap-2">
                    {icon}
                    <span>{link.label}</span>
                  </Link>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </CommandList>
      </Command>
    </SidebarContent>
  );
}
