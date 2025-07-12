import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Paperclip,
  Send,
  FileDown
} from "lucide-react";

export function ConversationFooter() {
  return (
    <div className="border-t bg-background p-4">
      <div className="relative">
        <Input
          placeholder="Type a message..."
          className="pr-24"
        />
        <div className="absolute inset-y-0 right-2 flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Paperclip className="h-5 w-5" />
          </Button>
          <Button size="icon">
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">Message 3 of 8</span>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <FileDown className="mr-2 h-4 w-4" />
            PDF
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
}
