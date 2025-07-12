
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, Edit, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FaqCardProps = {
  question: string;
  answer: string;
  category: string;
  updated: string;
  status: "Active" | "Inactive";
};

export function FaqCard({
  question,
  answer,
  category,
  updated,
  status,
}: FaqCardProps) {
  const isActive = status === "Active";
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-semibold pr-4">{question}</CardTitle>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground">{answer}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
        <div>
          <Badge variant="secondary" className="mr-2">{category}</Badge>
          <span>Updated: {updated}</span>
        </div>
        <div
          className={cn(
            "flex items-center gap-2 text-sm",
            isActive ? "text-green-600" : "text-muted-foreground"
          )}
        >
          {isActive ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <Circle className="h-4 w-4" />
          )}
          <span>{status}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
