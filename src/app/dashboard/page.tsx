import { AIAccuracyCard } from "@/components/dashboard/ai-accuracy-card";
import { CategoryDistributionCard } from "@/components/dashboard/category-distribution-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PerformanceScoreCard } from "@/components/dashboard/performance-score-card";
import { ResponseTimeTrackerCard } from "@/components/dashboard/response-time-tracker-card";
import { StatCard } from "@/components/dashboard/stat-card";
import { TopFAQsCard } from "@/components/dashboard/top-faqs-card";
import { TrafficAnalysisCard } from "@/components/dashboard/traffic-analysis-card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <DashboardHeader />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-4 sm:mb-0">
              Dashboard Overview
            </h1>
            <div className="flex items-center gap-2">
              <Button variant="secondary">Last 24 hours</Button>
              <Button variant="default">7 days</Button>
              <Button variant="secondary">30 days</Button>
              <Button variant="secondary">Custom</Button>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm font-medium">Quick Filters:</span>
            <Button variant="outline" size="sm" className="bg-white">
              All Channels <span className="ml-2 text-muted-foreground">x</span>
            </Button>
            <Button variant="outline" size="sm" className="bg-white">
              Customer Support{" "}
              <span className="ml-2 text-muted-foreground">x</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="bg-white">
                  High Priority <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Medium Priority</DropdownMenuItem>
                <DropdownMenuItem>Low Priority</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatCard
              title="Total Queries"
              value="12,546"
              change="+12%"
              changeType="positive"
            />
            <StatCard
              title="Resolution Rate"
              value="92%"
              change="+3%"
              changeType="positive"
            />
            <StatCard
              title="FAQ Usage"
              value="68%"
              change="+5%"
              changeType="positive"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <AIAccuracyCard />
            <PerformanceScoreCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <TrafficAnalysisCard />
            </div>
            <CategoryDistributionCard />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             <div className="lg:col-span-2">
              <ResponseTimeTrackerCard />
            </div>
            <div className="lg:col-span-1">
              <TopFAQsCard />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
