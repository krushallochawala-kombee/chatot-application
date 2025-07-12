
import { FaqHeader } from "@/components/faq/faq-header";
import { FaqSidebar } from "@/components/faq/faq-sidebar";

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-muted/40">
      <FaqSidebar />
      <div className="flex flex-col flex-1">
        <FaqHeader />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
