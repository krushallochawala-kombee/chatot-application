"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Plug,
  FileText,
  Settings,
  LifeBuoy,
  Server,
  Monitor,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "#", label: "Services", icon: Server },
  { href: "#", label: "Webhooks", icon: Plug },
  { href: "#", label: "Audit Logs", icon: FileText },
  { href: "#", label: "Settings", icon: Settings },
  { href: "#", label: "Support", icon: LifeBuoy },
];

export function SysMonitorSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r bg-card md:flex">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <Monitor className="h-6 w-6 text-primary" />
          <span>SysMonitor</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-2 p-4">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
              pathname === item.href && "bg-primary/10 text-primary"
            )}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
