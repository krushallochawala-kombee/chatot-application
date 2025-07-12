import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How do I reset my password?",
    views: "1245 views",
    effective: 96,
    color: "bg-green-500",
  },
  {
    question: "Where can I update my billing information?",
    views: "987 views",
    effective: 92,
    color: "bg-green-500",
  },
  {
    question: "How do I connect my account to third-party services?",
    views: "876 views",
    effective: 89,
    color: "bg-orange-400",
  },
  {
    question: "What payment methods do you accept?",
    views: "754 views",
    effective: 94,
    color: "bg-green-500",
  },
  {
    question: "How can I export my data?",
    views: "632 views",
    effective: 91,
    color: "bg-green-500",
  },
];

export function TopFAQsCard() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Top FAQs</CardTitle>
          <Link href="#" className="text-sm text-primary hover:underline">
            View All FAQs →
          </Link>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-1">
                <p className="font-medium text-sm">{faq.question}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                  <span>{faq.views}</span>
                  <span className="text-green-600 font-semibold">{faq.effective}% effective</span>
                </div>
              </div>
              <div className="w-16 flex items-center h-full pt-1">
                  <div className="w-full h-2 rounded-full bg-muted">
                    <div className={cn("h-2 rounded-full", faq.color)} style={{ width: `${faq.effective}%`}}></div>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="justify-center">
        <Button variant="outline">Load More</Button>
      </CardFooter>
    </Card>
  );
}
