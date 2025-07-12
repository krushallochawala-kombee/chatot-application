
"use client";

import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const categories = [
  { name: "Account", count: 2 },
  { name: "Billing", count: 3 },
  { name: "Technical", count: 2 },
  { name: "Data", count: 1 },
  { name: "Support", count: 1 },
];

const statuses = ["Active", "Inactive"];

export function FaqSidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 border-r bg-background p-6">
      <Link href="/faq" className="text-xl font-bold text-foreground mb-8">
        KnowledgeBase
      </Link>
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            CATEGORIES
          </h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div
                key={category.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Checkbox id={category.name.toLowerCase()} />
                  <label
                    htmlFor={category.name.toLowerCase()}
                    className="text-sm font-medium"
                  >
                    {category.name}
                  </label>
                </div>
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground mb-4">
            STATUS
          </h3>
          <div className="space-y-3">
            {statuses.map((status) => (
              <div key={status} className="flex items-center gap-2">
                <Checkbox id={status.toLowerCase()} />
                <label
                  htmlFor={status.toLowerCase()}
                  className="text-sm font-medium"
                >
                  {status}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
