"use client"

import * as React from "react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import Link from "next/link"

const chartData = [
  { category: "Account Issues", value: 3245, fill: "var(--color-account)" },
  { category: "Payment Problems", value: 2890, fill: "var(--color-payment)" },
  { category: "Product Features", value: 2456, fill: "var(--color-product)" },
  { category: "Technical Support", value: 2100, fill: "var(--color-technical)" },
  { category: "Order Status", value: 1855, fill: "var(--color-order)" },
]

const chartConfig = {
  value: {
    label: "Queries",
  },
  account: {
    label: "Account Issues",
    color: "hsl(var(--chart-1))",
  },
  payment: {
    label: "Payment Problems",
    color: "hsl(var(--chart-2))",
  },
  product: {
    label: "Product Features",
    color: "hsl(var(--chart-3))",
  },
  technical: {
    label: "Technical Support",
    color: "hsl(var(--chart-4))",
  },
  order: {
    label: "Order Status",
    color: "hsl(var(--chart-5))",
  },
}

export function CategoryDistributionCard() {
  const totalValue = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.value, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-start pb-0">
        <div className="w-full flex justify-between items-center">
            <CardTitle>Category Distribution</CardTitle>
            <Link href="#" className="text-sm text-primary hover:underline">View Details →</Link>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-[200px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="category"
              innerRadius={50}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="w-full grid grid-cols-2 gap-x-4 gap-y-2">
            {chartData.map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }}/>
                        <span className="text-muted-foreground">{item.category}</span>
                    </div>
                    <span className="font-medium">{item.value}</span>
                </div>
            ))}
        </div>
      </CardFooter>
    </Card>
  )
}
