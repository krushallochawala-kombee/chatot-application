import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnalysisCard, MetricBar, KeyInsight } from "./analysis-card";
import { Lightbulb, Smile, Frown } from 'lucide-react';

const sentimentData = {
    initial: 25,
    final: 85,
  };

export function ConversationAnalysis() {
  return (
    <div className="bg-muted/50 h-full">
        <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
                <h2 className="text-lg font-semibold px-2">Conversation Analysis</h2>
                
                <AnalysisCard title="OVERALL METRICS">
                    <div className="space-y-3">
                        <MetricBar label="AI Confidence Score" value="92/100" percentage={92} colorClass="bg-primary" />
                        <MetricBar label="Response Accuracy" value="88%" percentage={88} colorClass="bg-chart-2" />
                        <MetricBar label="Resolution Time" value="13 min" percentage={65} colorClass="bg-chart-3" />
                    </div>
                </AnalysisCard>
                
                <AnalysisCard title="KEY INSIGHTS">
                    <div className="space-y-3">
                        <KeyInsight insight="Agent correctly identified the billing issue and provided a clear resolution path." iconColorClass="bg-green-500" />
                        <KeyInsight insight="Verification of customer identity was handled efficiently and securely." iconColorClass="bg-green-500" />
                        <KeyInsight insight="Information about refund timing could have been more specific." iconColorClass="bg-yellow-500" />
                    </div>
                </AnalysisCard>

                <AnalysisCard title="SENTIMENT ANALYSIS">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>Initial</span>
                        <span>Final</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Frown className="text-red-500" size={20} />
                        <Progress value={(sentimentData.final + sentimentData.initial)/2} className="h-2" />
                        <Smile className="text-green-500" size={20} />
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-semibold text-red-600">Concerned</span>
                        <span className="font-semibold text-green-600">Satisfied</span>
                      </div>
                    </div>
                </AnalysisCard>

                <AnalysisCard title="TRAINING OPPORTUNITIES">
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-foreground">Provide more specific timeframes for financial transactions</p>
                                <p className="text-xs text-muted-foreground">Medium priority</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-3">
                            <Lightbulb className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                            <div>
                                <p className="text-sm font-medium text-foreground">Consider offering additional compensation for billing errors</p>
                                <p className="text-xs text-muted-foreground">Low priority</p>
                            </div>
                        </div>
                    </div>
                </AnalysisCard>

                <AnalysisCard title="TAGS">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Billing Issue</Badge>
                        <Badge variant="secondary">Refund</Badge>
                        <Badge variant="secondary">Duplicate Charge</Badge>
                        <Badge variant="secondary">Quick Resolution</Badge>
                        <Badge variant="secondary">Positive Outcome</Badge>
                    </div>
                </AnalysisCard>
            </div>
        </ScrollArea>
    </div>
  );
}
