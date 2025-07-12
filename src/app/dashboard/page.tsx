import { SystemUptimeCard } from "@/components/dashboard/system-uptime-card";
import { ServiceStatusSection } from "@/components/dashboard/service-status-section";
import { WebhookEndpointsCard } from "@/components/dashboard/webhook-endpoints-card";
import { AuditLogsCard } from "@/components/dashboard/audit-logs-card";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">System Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor your system's health and performance
        </p>
      </div>
      <SystemUptimeCard />
      <ServiceStatusSection />
      <WebhookEndpointsCard />
      <AuditLogsCard />
    </div>
  );
}
