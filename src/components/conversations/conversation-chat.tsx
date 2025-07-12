"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const messages = [
  {
    sender: "Sarah Johnson",
    time: "10:32 AM",
    avatar: "SJ",
    content: "Hi there, I'm having an issue with my recent bill. I was charged twice for my monthly subscription and I'd like to get a refund for the duplicate charge.",
    confidence: 95,
  },
  {
    sender: "Michael Chen",
    role: "Agent",
    time: "10:33 AM",
    avatar: "MC",
    content: "Hello Sarah, I'm sorry to hear about the duplicate charge. I'd be happy to look into this for you. Could you please provide your account number or the email address associated with your account so I can locate your billing information?",
    confidence: 92,
  },
  {
    sender: "Sarah Johnson",
    time: "10:35 AM",
    avatar: "SJ",
    content: "Sure, my email is sarah.johnson@example.com. The duplicate charges were on May 14th and 15th, both for $29.99.",
    confidence: 90,
  },
  {
    sender: "Michael Chen",
    role: "Agent",
    time: "10:38 AM",
    avatar: "MC",
    content: "Thank you for providing that information, Sarah. I'm looking at your account now, and I can see the duplicate charges you mentioned. You're right, there was an error in our billing system that caused your subscription to be charged twice. I'll process a refund for the duplicate charge of $29.99 right away. The refund should appear on your account within 3-5 business days.",
    confidence: 85,
    confidenceLabel: "Good",
  },
   {
    sender: "Sarah Johnson",
    time: "10:40 AM",
    avatar: "SJ",
    content: "That's great, thank you! Will I receive an email confirmation of the refund?",
    confidence: 94,
  },
    {
    sender: "Michael Chen",
    role: "Agent",
    time: "10:42 AM",
    avatar: "MC",
    content: "Yes, you'll receive an automatic email confirmation once the refund is processed, which should happen within the next hour. The email will include details about the refund amount and when you can expect it to appear on your statement.\n\nIs there anything else I can help you with today?",
    confidence: 75,
    confidenceLabel: "Medium",
  },
  {
    sender: "Sarah Johnson",
    time: "10:44 AM",
    avatar: "SJ",
    content: "No, that's all I needed. Thank you for your help and for resolving this so quickly!",
    confidence: 96,
  },
  {
    sender: "Michael Chen",
    role: "Agent",
    time: "10:45 AM",
    avatar: "MC",
    content: "You're welcome, Sarah! I'm glad I could help resolve this issue for you. If you have any other questions or concerns in the future, please don't hesitate to reach out to us again. Have a wonderful day!",
    confidence: 93,
  },
];

const ConfidenceBadge = ({ confidence, label }: { confidence: number, label?: string }) => {
    const getConfidenceColor = () => {
        if (confidence >= 90) return 'bg-green-100 text-green-800';
        if (confidence >= 80) return 'bg-blue-100 text-blue-800';
        if (confidence >= 70) return 'bg-yellow-100 text-yellow-800';
        return 'bg-red-100 text-red-800';
    }

    const confidenceText = label ? `${label} Confidence` : 'High Confidence';

    return (
        <Badge variant="outline" className={`border-0 text-xs font-medium ${getConfidenceColor()}`}>
            <CheckCircle className="h-3 w-3 mr-1"/>
            {confidenceText} ({confidence}%)
        </Badge>
    )
}

export function ConversationChat() {
  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      <div className="text-center text-sm text-muted-foreground">
        Conversation started via Live Chat on May 16, 2023 at 10:32 AM
      </div>
      {messages.map((msg, index) => (
        <div key={index} className="flex items-start gap-4">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{msg.avatar}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-baseline gap-2">
              <p className="font-semibold">{msg.sender}</p>
              {msg.role && <p className="text-xs text-muted-foreground">{msg.role}</p>}
              <p className="text-xs text-muted-foreground">{msg.time}</p>
            </div>
            <div className="p-3 bg-card rounded-lg mt-1 whitespace-pre-wrap">
              <p className="text-sm text-foreground">{msg.content}</p>
            </div>
             <div className="mt-2">
                <ConfidenceBadge confidence={msg.confidence} label={msg.confidenceLabel}/>
            </div>
          </div>
        </div>
      ))}
       <div className="text-center text-sm text-muted-foreground">
        Conversation ended on May 16, 2023 at 10:45 AM
      </div>
    </div>
  );
}
