import { SysMonitorSidebar } from "@/components/dashboard/sys-monitor-sidebar";
import { SysMonitorHeader } from "@/components/dashboard/sys-monitor-header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full">
      <SysMonitorSidebar />
      <div className="flex flex-col w-full">
        <SysMonitorHeader />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
