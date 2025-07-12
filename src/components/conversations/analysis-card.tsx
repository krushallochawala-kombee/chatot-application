import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AnalysisCardProps {
    title: string;
    children: ReactNode;
    className?: string;
  }
  
export const AnalysisCard = ({ title, children, className }: AnalysisCardProps) => (
    <div className={cn("bg-card rounded-lg", className)}>
      <h3 className="text-sm font-semibold text-muted-foreground px-4 pt-3 pb-2">{title}</h3>
      <div className="px-4 pb-4">
        {children}
      </div>
    </div>
  );
  
interface MetricBarProps {
    label: string;
    value: string;
    percentage: number;
    colorClass: string;
  }
  
export const MetricBar = ({ label, value, percentage, colorClass }: MetricBarProps) => (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground">{label}</span>
        <span className="font-semibold text-foreground">{value}</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div className={cn("h-2 rounded-full", colorClass)} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
  
interface KeyInsightProps {
    insight: string;
    iconColorClass: string;
  }
  
export const KeyInsight = ({ insight, iconColorClass }: KeyInsightProps) => (
    <div className="flex items-start gap-3">
      <div className={cn("w-2 h-2 rounded-full mt-1.5 flex-shrink-0", iconColorClass)} />
      <p className="text-sm text-foreground">{insight}</p>
    </div>
  );
