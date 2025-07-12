"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Frown,
  Info,
  Lightbulb,
  Smile,
} from "lucide-react";

const keyInsights = [
  {
    text: "Agent correctly identified the billing issue and provided a clear resolution path.",
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    text: "Verification of customer identity was handled efficiently and securely.",
    icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
  },
  {
    text: "Information about refund timing could have been more specific.",
    icon: <Info className="h-5 w-5 text-yellow-500" />,
  },
];

const trainingOpportunities = [
  {
    text: "Provide more specific timeframes for financial transactions",
    priority: "Medium priority",
  },
  {
    text: "Consider offering additional compensation for billing errors",
    priority: "Low priority",
  },
];

const tags = [
  "Billing Issue",
  "Refund",
  "Duplicate Charge",
  "Quick Resolution",
  "Positive Outcome",
];

export function ConversationAnalysisSidebar() {
  return (
    <aside className="hidden xl:flex flex-col w-96 border-l bg-background p-6 space-y-6 overflow-y-auto">
      <h2 className="text-xl font-bold">Conversation Analysis</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Overall Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">AI Confidence Score</span>
              <span className="text-sm font-bold">92/100</span>
            </div>
            <Progress value={92} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Response Accuracy</span>
              <span className="text-sm font-bold">88%</span>
            </div>
            <Progress value={88} />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Resolution Time</span>
              <span className="text-sm font-bold">13 min</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Key Insights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {keyInsights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3">
              {insight.icon}
              <p className="text-sm text-muted-foreground">{insight.text}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Sentiment Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center mb-2">
            <div className="text-center">
              <Frown className="h-6 w-6 mx-auto text-muted-foreground" />
              <span className="text-xs">Concerned</span>
            </div>
            <div className="text-center">
              <Smile className="h-6 w-6 mx-auto text-primary" />
              <span className="text-xs">Satisfied</span>
            </div>
          </div>
          <div className="relative h-2 bg-muted rounded-full">
            <div className="absolute h-2 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full w-full"></div>
            <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-background border-2 border-muted-foreground rounded-full" style={{left: '15%'}}></div>
            <div className="absolute top-1/2 -translate-y-1/2 h-4 w-4 bg-background border-2 border-primary rounded-full" style={{left: '85%'}}></div>
          </div>
           <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>Initial</span>
              <span>Final</span>
            </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Training Opportunities</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {trainingOpportunities.map((opportunity, index) => (
            <div key={index} className="flex items-start gap-3">
              <Lightbulb className="h-5 w-5 text-blue-500 mt-0.5" />
              <div>
                <p className="text-sm text-muted-foreground">
                  {opportunity.text}
                </p>
                <Badge variant="outline" className="mt-1 text-xs">
                  {opportunity.priority}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <div>
        <h3 className="text-sm font-semibold mb-3">TAGS</h3>
        <div className="flex flex-wrap gap-2">
            {tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
        </div>
      </div>
    </aside>
  );
}
