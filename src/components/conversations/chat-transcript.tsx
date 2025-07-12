import { Info, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { TranscriptHeader } from "./transcript-header";
import { TranscriptToolbar } from "./transcript-toolbar";

const messages = [
  {
    sender: "Sarah Johnson",
    agent: false,
    time: "10:32 AM",
    text: "Hi there, I'm having an issue with my recent bill. I was charged twice for my monthly subscription and I'd like to get a refund for the duplicate charge.",
    confidence: { level: "High", value: 95, color: "bg-green-100", textColor: "text-green-700" }
  },
  {
    sender: "Michael Chen",
    agent: true,
    time: "10:33 AM",
    text: "Hello Sarah, I'm sorry to hear about the duplicate charge. I'd be happy to look into this for you. Could you please provide your account number or the email address associated with your account so I can locate your billing information?",
    confidence: { level: "High", value: 92, color: "bg-green-100", textColor: "text-green-700" }
  },
  {
    sender: "Sarah Johnson",
    agent: false,
    time: "10:35 AM",
    text: "Sure, my email is sarah.johnson@example.com. The duplicate charges were on May 14th and 15th, both for $29.99.",
    confidence: { level: "High", value: 90, color: "bg-green-100", textColor: "text-green-700" }
  },
  {
    sender: "Michael Chen",
    agent: true,
    time: "10:38 AM",
    text: "Thank you for providing that information, Sarah. I'm looking at your account now, and I can see the duplicate charges you mentioned. You're right, there was an error in our billing system that caused your subscription to be charged twice.\n\nI'll process a refund for the duplicate charge of $29.99 right away. The refund should appear on your account within 3-5 business days.",
    confidence: { level: "Good", value: 85, color: "bg-blue-100", textColor: "text-blue-700" }
  },
  {
    sender: "Sarah Johnson",
    agent: false,
    time: "10:40 AM",
    text: "That's great, thank you! Will I receive an email confirmation of the refund?",
    confidence: { level: "High", value: 94, color: "bg-green-100", textColor: "text-green-700" }
  },
  {
    sender: "Michael Chen",
    agent: true,
    time: "10:42 AM",
    text: "Yes, you'll receive an automatic email confirmation once the refund is processed, which should happen within the next hour. The email will include details about the refund amount and when you can expect it to appear on your statement.\n\nIs there anything else I can help you with today?",
    confidence: { level: "Medium", value: 75, color: "bg-yellow-100", textColor: "text-yellow-700" }
  },
  {
    sender: "Sarah Johnson",
    agent: false,
    time: "10:44 AM",
    text: "No, that's all I needed. Thank you for your help and for resolving this so quickly!",
    confidence: { level: "High", value: 96, color: "bg-green-100", textColor: "text-green-700" }
  },
  {
    sender: "Michael Chen",
    agent: true,
    time: "10:45 AM",
    text: "You're welcome, Sarah! I'm glad I could help resolve this issue for you. If you have any other questions or concerns in the future, please don't hesitate to reach out to us again.\n\nHave a wonderful day!",
    confidence: { level: "High", value: 93, color: "bg-green-100", textColor: "text-green-700" }
  },
];

const Message = ({ msg }: { msg: (typeof messages)[0] }) => (
  <div className="flex items-start gap-4 pr-4">
    <Avatar className="w-8 h-8 border">
      <AvatarFallback>{msg.sender.charAt(0)}{msg.agent ? 'C' : 'J'}</AvatarFallback>
    </Avatar>
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <p className="font-semibold">{msg.sender}{msg.agent && <span className="text-muted-foreground font-normal"> (Agent)</span>}</p>
        <p className="text-xs text-muted-foreground">{msg.time}</p>
      </div>
      <div className={cn("p-3 rounded-lg mt-1", msg.agent ? "bg-muted" : "bg-card")}>
        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
      </div>
      <div className="text-xs mt-1.5 flex items-center">
        <span className={cn("px-2 py-0.5 rounded-full text-xs font-medium", msg.confidence.color, msg.confidence.textColor)}>
          {msg.confidence.level} Confidence ({msg.confidence.value}%)
        </span>
      </div>
    </div>
  </div>
);

export function ChatTranscript() {
  return (
    <div className="flex flex-col h-full bg-white">
        <TranscriptHeader />
        <ScrollArea className="flex-1">
            <div className="p-4 space-y-6">
                <div className="flex items-center justify-center text-sm text-muted-foreground bg-muted p-2 rounded-lg">
                    <Info className="w-4 h-4 mr-2"/>
                    Conversation started via Live Chat on May 16, 2023 at 10:32 AM
                </div>
                {messages.map((msg, index) => (
                    <Message key={index} msg={msg} />
                ))}
                <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MessageSquare className="w-4 h-4 mr-2"/>
                    Conversation ended on May 16, 2023 at 10:45 AM
                </div>
            </div>
        </ScrollArea>
        <TranscriptToolbar />
    </div>
  );
}
