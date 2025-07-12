import { ConversationListSidebar } from "@/components/conversations/conversation-list-sidebar";
import { ConversationAnalysisSidebar } from "@/components/conversations/conversation-analysis-sidebar";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-muted/40">
      <ConversationListSidebar />
      <div className="flex flex-col flex-1">
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
      <ConversationAnalysisSidebar />
    </div>
  );
}
