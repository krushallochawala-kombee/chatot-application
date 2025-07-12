import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const conversations = [
  {
    name: "Sarah Johnson",
    topic: "Billing Inquiry",
    status: "Resolved",
    agent: "Michael Chen",
    time: "10:32 AM",
    aiScore: 92,
    active: true,
  },
  {
    name: "Robert Williams",
    topic: "Product Return",
    status: "In Progress",
    statusColor: "bg-blue-200 text-blue-800",
    agent: "Jessica Taylor",
    time: "9:15 AM",
    aiScore: 78,
  },
  {
    name: "Emily Davis",
    topic: "Technical Support",
    status: "Escalated",
    statusColor: "bg-red-200 text-red-800",
    agent: "David Wilson",
    time: "Yesterday",
    aiScore: 65,
  },
  {
    name: "James Miller",
    topic: "Account Access",
    status: "Resolved",
    agent: "Michael Chen",
    time: "Yesterday",
    aiScore: 88,
  },
  {
    name: "Patricia Moore",
    topic: "Subscription Cancellation",
    status: "Resolved",
    agent: "Jessica Taylor",
    time: "2 days ago",
    aiScore: 72,
  },
  {
    name: "Thomas Brown",
    topic: "Shipping Delay",
    status: "Resolved",
    agent: "David Wilson",
    time: "2 days ago",
    aiScore: 81,
  },
  {
    name: "Jennifer Garcia",
    topic: "Product Information",
    status: "Resolved",
    agent: "Michael Chen",
    time: "3 days ago",
    aiScore: 95,
  },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Resolved':
            return 'bg-green-200 text-green-800';
        case 'In Progress':
            return 'bg-blue-200 text-blue-800';
        case 'Escalated':
            return 'bg-orange-200 text-orange-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
}

export function ConversationListSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-96 border-r bg-background">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold mb-4">Conversations</h2>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter conversations..." className="pl-8" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        {conversations.map((convo) => (
          <Link href="/conversations" key={convo.name}>
            <div
              className={cn(
                "p-4 border-b hover:bg-muted/50 cursor-pointer",
                convo.active && "bg-muted"
              )}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">{convo.name}</p>
                  <p className="text-sm text-muted-foreground">{convo.topic}</p>
                  <div className="flex items-center gap-2 mt-1">
                     <Badge className={`text-xs rounded-sm border-0 ${getStatusColor(convo.status)}`}>{convo.status}</Badge>
                     <span className="text-xs text-muted-foreground"> {convo.agent}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{convo.time}</p>
                  <Badge variant="outline" className="mt-2 flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                    AI: {convo.aiScore}
                  </Badge>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full">
          View All
        </Button>
      </div>
    </aside>
  );
}
