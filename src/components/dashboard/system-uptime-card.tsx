"use client";

import * as React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

const chartData = [
  { month: "Jan", uptime: 99.85 },
  { month: "Feb", uptime: 99.88 },
  { month: "Mar", uptime: 99.92 },
  { month: "Apr", uptime: 99.9 },
  { month: "May", uptime: 99.93 },
  { month: "Jun", uptime: 99.95 },
  { month: "Jul", uptime: 99.92 },
  { month: "Aug", uptime: 99.94 },
  { month: "Sep", uptime: 99.96 },
  { month: "Oct", uptime: 99.91 },
  { month: "Nov", uptime: 99.89 },
  { month: "Dec", uptime: 99.93 },
];

const chartConfig = {
    uptime: {
      label: "Uptime",
      color: "hsl(var(--chart-1))",
    },
};

export function SystemUptimeCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>System Uptime</CardTitle>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Last 12 months <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Last 30 days</DropdownMenuItem>
            <DropdownMenuItem>Last 7 days</DropdownMenuItem>
            <DropdownMenuItem>Last 24 hours</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center justify-center">
          <div className="relative h-40 w-40">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-muted/50"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="text-primary"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray="99.9, 100"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeLinecap="round"
                transform="rotate(90 18 18)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">99.9%</span>
              <span className="text-sm text-muted-foreground">Uptime</span>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 h-[250px]">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorUptime" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                    </linearGradient>
                </defs>
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                domain={[99.8, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Area
                type="monotone"
                dataKey="uptime"
                stroke="hsl(var(--chart-1))"
                fillOpacity={1}
                fill="url(#colorUptime)"
                strokeWidth={2}
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
