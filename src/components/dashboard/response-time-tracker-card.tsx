"use client"

import { Area, AreaChart, CartesianGrid, XAxis, Tooltip, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from "../ui/button"
import { ChevronLeft, ChevronRight, Circle } from "lucide-react"

const chartData = Array.from({ length: 30 }, (_, i) => ({
  day: i + 1,
  time: (Math.random() * 1.5 + 0.5).toFixed(1), // Random time between 0.5 and 2.0
}))

const chartConfig = {
  time: {
    label: "Response Time",
    color: "hsl(var(--accent))",
  },
}

export function ResponseTimeTrackerCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
            <CardTitle>Response Time Tracker</CardTitle>
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm font-medium">May 2023</span>
                 <Button variant="ghost" size="icon">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{
                top: 5,
                right: 10,
                left: -20,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="fillTime" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--color-time)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--color-time)" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={10}
              />
              <Tooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="time"
                type="natural"
                fill="url(#fillTime)"
                stroke="var(--color-time)"
                stackId="a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-center gap-8 text-sm">
        <div className="flex items-center gap-2">
            <Circle className="h-2.5 w-2.5 fill-accent/50 text-accent/50" />
            <span>Avg. Response Time: 1.8s</span>
        </div>
        <div className="flex items-center gap-2">
             <Circle className="h-2.5 w-2.5 fill-red-500" />
            <span>Target Threshold: 2.5s</span>
        </div>
      </CardFooter>
    </Card>
  )
}
