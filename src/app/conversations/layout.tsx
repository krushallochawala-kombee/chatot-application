import { ConvoHeader } from "@/components/conversations/convo-header";

export default function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <ConvoHeader />
      <main className="flex-1 min-h-0">
        {children}
      </main>
    </div>
  );
}
