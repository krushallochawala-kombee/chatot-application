import { ConversationList } from "@/components/conversations/conversation-list";
import { ChatTranscript } from "@/components/conversations/chat-transcript";
import { ConversationAnalysis } from "@/components/conversations/conversation-analysis";

export default function ConversationsPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] xl:grid-cols-[350px_1fr_380px] h-full">
      <ConversationList />
      <div className="hidden lg:flex flex-col border-l border-r border-border h-full">
        <ChatTranscript />
      </div>
      <div className="hidden xl:flex flex-col border-border h-full">
        <ConversationAnalysis />
      </div>
    </div>
  );
}
