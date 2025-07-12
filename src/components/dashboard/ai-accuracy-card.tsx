"use client";

import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
} from "@/components/ui/chart";

export function AIAccuracyCard() {
  const chartData = [
    { name: "Accuracy", value: 94, fill: "hsl(var(--primary))" },
    { name: "Remaining", value: 6, fill: "hsl(var(--muted))" },
  ];

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>AI Accuracy</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex items-center justify-center pb-0">
        <ChartContainer
          config={{}}
          className="mx-auto aspect-square h-[250px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={80}
              outerRadius={100}
              startAngle={90}
              endAngle={450}
              cornerRadius={50}
            >
            </Pie>
            <foreignObject x="50%" y="50%" className="overflow-visible">
                <div className="flex flex-col items-center justify-center text-center -translate-x-1/2 -translate-y-1/2">
                    <span className="text-4xl font-bold text-primary">94%</span>
                    <span className="text-sm text-muted-foreground">Accuracy</span>
                </div>
            </foreignObject>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex w-full items-center justify-between text-muted-foreground">
          <span>Last Month</span>
          <span>91%</span>
        </div>
        <div className="flex w-full items-center justify-between text-muted-foreground">
          <span>Target</span>
          <span>95%</span>
        </div>
        <div className="flex w-full items-center justify-between font-medium">
          <span>Improvement</span>
          <span className="text-green-600">+3%</span>
        </div>
      </CardFooter>
    </Card>
  );
}
