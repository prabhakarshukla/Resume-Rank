"use client";

import Link from "next/link";
import { ChevronsUpDown, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { currentUser } from "@/features/dashboard/data";

type UserMenuProps = {
  collapsed?: boolean;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
};

export function UserMenu({
  collapsed = false,
  align = "start",
  side = "top",
}: UserMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "hover:bg-sidebar-accent flex w-full items-center gap-2.5 rounded-lg p-1.5 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
          collapsed && "justify-center",
        )}
      >
        <Avatar size="sm">
          <AvatarFallback className="bg-brand text-brand-foreground text-xs font-semibold">
            {currentUser.initials}
          </AvatarFallback>
        </Avatar>
        {!collapsed && (
          <>
            <div className="flex min-w-0 flex-col leading-tight">
              <span className="text-sidebar-foreground truncate text-sm font-medium">
                {currentUser.name}
              </span>
              <span className="text-sidebar-foreground/60 truncate text-xs">
                {currentUser.email}
              </span>
            </div>
            <ChevronsUpDown className="text-sidebar-foreground/50 ml-auto size-4 shrink-0" />
          </>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        side={side}
        sideOffset={8}
        className="w-60"
      >
        <DropdownMenuLabel className="flex items-center gap-2.5 py-2">
          <Avatar size="sm">
            <AvatarFallback className="bg-brand text-brand-foreground text-xs font-semibold">
              {currentUser.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col leading-tight">
            <span className="text-foreground truncate text-sm font-medium">
              {currentUser.name}
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              {currentUser.role}
            </span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
        nativeButton={false} 
        render={<Link href="/profile" />}>
          <User />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem 
        nativeButton={false} 
        render={<Link href="/settings" />}>
          <Settings />
          Settings
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOut />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
