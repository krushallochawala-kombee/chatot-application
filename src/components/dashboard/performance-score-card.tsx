import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PerformanceScoreCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-6">
          <p className="text-6xl font-bold text-accent">
            89<span className="text-4xl text-muted-foreground">/100</span>
          </p>
          <p className="text-sm text-muted-foreground">Overall Performance</p>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Response Time</span>
            <span className="text-sm font-medium">85%</span>
          </div>
          <Progress value={85} className="h-2" />
          <div className="flex justify-between items-center">
            <span className="text-sm">Query Resolution</span>
            <span className="text-sm font-medium">92%</span>
          </div>
          <Progress value={92} className="h-2" />
          <div className="flex justify-between items-center">
            <span className="text-sm">User Satisfaction</span>
            <span className="text-sm font-medium">90%</span>
          </div>
          <Progress value={90} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
}
