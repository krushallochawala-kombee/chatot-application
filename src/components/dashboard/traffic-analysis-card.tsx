"use client"

import { Line, LineChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"

const chartData = [
  { time: "1:00", queries: 450 },
  { time: "3:00", queries: 520 },
  { time: "5:00", queries: 200 },
  { time: "7:00", queries: 310 },
  { time: "9:00", queries: 580 },
  { time: "11:00", queries: 400 },
  { time: "13:00", queries: 620 },
  { time: "15:00", queries: 500 },
  { time: "17:00", queries: 150 },
  { time: "19:00", queries: 300 },
  { time: "21:00", queries: 400 },
  { time: "23:00", queries: 320 },
]

const chartConfig = {
  queries: {
    label: "Queries",
    color: "hsl(var(--primary))",
  },
}

export function TrafficAnalysisCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Traffic Analysis</CardTitle>
          <div className="flex gap-2">
            <Button variant="default" size="sm">Queries</Button>
            <Button variant="outline" size="sm">Heatmap</Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Line
                dataKey="queries"
                type="monotone"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={true}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
