"use client";

import { useState } from "react";
import { Search, Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

const conversations = [
  {
    id: 1,
    name: "Sarah Johnson",
    topic: "Billing Inquiry",
    status: "Resolved",
    statusColor: "bg-green-500",
    agent: "Michael Chen",
    time: "10:32 AM",
    aiScore: 92,
    unread: false,
  },
  {
    id: 2,
    name: "Robert Williams",
    topic: "Product Return",
    status: "In Progress",
    statusColor: "bg-blue-500",
    agent: "Jessica Taylor",
    time: "9:15 AM",
    aiScore: 78,
    unread: false,
  },
  {
    id: 3,
    name: "Emily Davis",
    topic: "Technical Support",
    status: "Escalated",
    statusColor: "bg-red-500",
    agent: "David Wilson",
    time: "Yesterday",
    aiScore: 65,
    unread: false,
  },
  {
    id: 4,
    name: "James Miller",
    topic: "Account Access",
    status: "Resolved",
    statusColor: "bg-green-500",
    agent: "Michael Chen",
    time: "Yesterday",
    aiScore: 88,
    unread: false,
  },
  {
    id: 5,
    name: "Patricia Moore",
    topic: "Subscription Cancellation",
    status: "Resolved",
    statusColor: "bg-green-500",
    agent: "Jessica Taylor",
    time: "2 days ago",
    aiScore: 72,
    unread: false,
  },
    {
    id: 6,
    name: "Thomas Brown",
    topic: "Shipping Delay",
    status: "Resolved",
    statusColor: "bg-green-500",
    agent: "David Wilson",
    time: "2 days ago",
    aiScore: 81,
    unread: false,
  },
  {
    id: 7,
    name: "Jennifer Garcia",
    topic: "Product Information",
    status: "Resolved",
    statusColor: "bg-green-500",
    agent: "Michael Chen",
    time: "3 days ago",
    aiScore: 95,
    unread: false,
  },
];

const ConversationItem = ({ convo, isActive }: { convo: (typeof conversations)[0], isActive: boolean }) => (
  <div className={cn("p-3 hover:bg-muted cursor-pointer border-l-4", isActive ? "bg-muted border-primary" : "border-transparent")}>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-semibold text-sm">{convo.name}</h3>
        <p className="text-xs text-muted-foreground">{convo.topic}</p>
      </div>
      <p className="text-xs text-muted-foreground">{convo.time}</p>
    </div>
    <div className="flex justify-between items-center mt-2">
      <div className="flex items-center gap-2">
        <div className={cn("w-2 h-2 rounded-full", convo.statusColor)}></div>
        <p className="text-xs">{convo.status}</p>
        <p className="text-xs text-muted-foreground">· {convo.agent}</p>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <Star className="w-3 h-3 text-yellow-400 fill-current" />
        <span className="font-medium">AI: {convo.aiScore}</span>
      </div>
    </div>
  </div>
);


export function ConversationList() {
    const [activeConversation, setActiveConversation] = useState(1);
    
  return (
    <div className="bg-card h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Conversations</h2>
            <Button variant="link" className="text-sm">View All</Button>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Filter conversations..." className="pl-8" />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="divide-y">
            {conversations.map((convo) => (
                <div key={convo.id} onClick={() => setActiveConversation(convo.id)}>
                    <ConversationItem convo={convo} isActive={activeConversation === convo.id} />
                </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
