import { Button } from "@/components/ui/button";
import {
  Bookmark,
  ChevronDown,
  Download,
  Star,
  Search,
  Bell,
  Settings,
  HelpCircle,
} from "lucide-react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";

const ConfidenceTimeline = () => (
  <div className="w-full bg-muted rounded-full h-2.5 flex">
    <div className="h-2.5 rounded-l-full bg-green-500" style={{ width: "35%" }}></div>
    <div className="h-2.5 bg-green-500" style={{ width: "10%" }}></div>
    <div className="h-2.5 bg-green-500" style={{ width: "20%" }}></div>
    <div className="h-2.5 bg-blue-500" style={{ width: "10%" }}></div>
    <div className="h-2.5 bg-yellow-500" style={{ width: "10%" }}></div>
    <div className="h-2.5 rounded-r-full bg-red-500" style={{ width: "15%" }}></div>
  </div>
);

const TimelineLegend = () => (
    <div className="flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-green-500"></div><span>High</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span>Good</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-yellow-500"></div><span>Medium</span></div>
        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-full bg-red-500"></div><span>Low</span></div>
    </div>
)

export function ConversationHeader() {
  return (
    <header className="border-b p-4 space-y-4">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Conversation with Sarah Johnson</h1>
          <p className="text-sm text-muted-foreground">
            Started May 16, 2023 - 10:32 AM • Agent: Michael Chen • Billing Inquiry
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Star className="h-5 w-5" />
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-medium">Confidence Timeline:</h3>
            <TimelineLegend />
        </div>
        <ConfidenceTimeline />
      </div>
    </header>
  );
}
