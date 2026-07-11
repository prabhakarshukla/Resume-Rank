import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  History,
  ChartColumn,
  User,
  Settings,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const primaryNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "My Resumes", href: "/resumes", icon: FileText, badge: "8" },
  { title: "AI Analysis", href: "/analysis", icon: Sparkles },
  { title: "History", href: "/history", icon: History },
  { title: "Analytics", href: "/analytics", icon: ChartColumn },
];

export const secondaryNav: NavItem[] = [
  { title: "Profile", href: "/profile", icon: User },
  { title: "Settings", href: "/settings", icon: Settings },
];
