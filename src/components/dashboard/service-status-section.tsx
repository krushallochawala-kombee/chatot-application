"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { CheckCircle, AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChartContainer, ChartTooltipContent } from "../ui/chart";

const services = [
  {
    name: "AI API",
    status: "Active",
    responseTime: "125ms",
    uptime: "99.95%",
    icon: CheckCircle,
    color: "text-green-500",
    chartColor: "hsl(var(--chart-3))",
    data: Array.from({ length: 10 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * (150 - 100) + 100),
    })),
  },
  {
    name: "Database",
    status: "Degraded",
    responseTime: "210ms",
    uptime: "99.82%",
    icon: AlertTriangle,
    color: "text-yellow-500",
    chartColor: "hsl(var(--chart-2))",
    data: Array.from({ length: 10 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * (250 - 180) + 180),
    })),
  },
  {
    name: "Storage",
    status: "Active",
    responseTime: "32ms",
    uptime: "99.99%",
    icon: CheckCircle,
    color: "text-green-500",
    chartColor: "hsl(var(--chart-3))",
    data: Array.from({ length: 10 }, (_, i) => ({
      time: i,
      value: Math.floor(Math.random() * (40 - 20) + 20),
    })),
  },
];

const ServiceStatusCard = ({ service }: { service: (typeof services)[0] }) => {
    const chartConfig = {
        value: {
          label: "Response Time",
          color: service.chartColor,
        },
      };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <service.icon className={cn("h-5 w-5", service.color)} />
            <CardTitle className="text-base font-semibold">
              {service.name}
            </CardTitle>
          </div>
          <Badge
            variant={service.status === "Active" ? "default" : "destructive"}
            className={cn(
              service.status === "Active" && "bg-green-100 text-green-700",
              service.status === "Degraded" && "bg-yellow-100 text-yellow-700 border-yellow-200",
              service.status === "Failed" && "bg-red-100 text-red-700"
            )}
          >
            {service.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-muted-foreground">Response Time</p>
            <p className="text-xl font-bold">{service.responseTime}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Uptime</p>
            <p className="text-xl font-bold">{service.uptime}</p>
          </div>
        </div>
        <div className="h-20 -mx-6 mb-2">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart data={service.data}>
              <defs>
                <linearGradient id={`color-${service.name.replace(/\s/g, "")}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={service.chartColor} stopOpacity={0.4}/>
                    <stop offset="95%" stopColor={service.chartColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="value"
                type="natural"
                fill={`url(#color-${service.name.replace(/\s/g, "")})`}
                stroke={service.chartColor}
                stackId="a"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
        <div className="text-right">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <RefreshCw className="mr-2 h-3 w-3" />
            Refresh
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export function ServiceStatusSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Service Status</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceStatusCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
}
