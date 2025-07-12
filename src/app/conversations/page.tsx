import { ConversationHeader } from "@/components/conversations/conversation-header";
import { ConversationChat } from "@/components/conversations/conversation-chat";
import { ConversationFooter } from "@/components/conversations/conversation-footer";

export default function ConversationPage() {
  return (
    <div className="flex flex-col h-full">
      <ConversationHeader />
      <ConversationChat />
      <ConversationFooter />
    </div>
  );
}
