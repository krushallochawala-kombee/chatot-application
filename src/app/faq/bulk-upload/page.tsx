
"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import {
  CheckCircle2,
  ChevronRight,
  Download,
  Home,
  Info,
  UploadCloud,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const validationData = [
  {
    status: "valid",
    question: "What is your return policy?",
    answer: "You can return items within 30 days of purchase with a valid receipt.",
    category: "Returns",
    tags: ["returns", "policy"],
  },
  {
    status: "valid",
    question: "How do I track my order?",
    answer: "You can track your order by logging into your account and viewing your order history.",
    category: "Orders",
    tags: ["tracking", "orders"],
  },
  {
    status: "valid",
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs vary by location.",
    category: "Shipping",
    tags: ["international", "shipping"],
  },
  {
    status: "error",
    question: "What payment methods do you accept?",
    answer: "",
    category: "Payments",
    tags: ["payment", "methods"],
  },
  {
    status: "valid",
    question: "How do I change my password?",
    answer: 'Go to your account settings and select "Change Password".',
    category: "Account",
    tags: ["password", "account"],
  },
  {
    status: "error",
    question: "",
    answer: "Our customer service team is available 24/7.",
    category: "Support",
    tags: ["customer service", "support"],
  },
  {
    status: "valid",
    question: "Can I modify my order after placing it?",
    answer: "Orders can be modified within 1 hour of placement by contacting customer service.",
    category: "Orders",
    tags: ["modify", "orders"],
  },
  {
    status: "error",
    question: "What is your privacy policy?",
    answer: "We take your privacy seriously and do not share your information with third parties.",
    category: "",
    tags: ["privacy"],
  },
  {
    status: "valid",
    question: "Do you offer gift wrapping?",
    answer: "Yes, gift wrapping is available for an additional $5 per item.",
    category: "Services",
    tags: ["gift", "wrapping"],
  },
  {
    status: "valid",
    question: "How do I apply a discount code?",
    answer: 'Enter your discount code at checkout in the "Promo Code" field.',
    category: "Checkout",
    tags: ["discount", "promo"],
  },
];

export default function BulkUploadPage() {
  const validEntries = validationData.filter((d) => d.status === "valid").length;
  const errorEntries = validationData.filter((d) => d.status === "error").length;

  return (
    <div className="p-6">
      <header className="mb-8">
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Link href="/dashboard"><Home className="h-4 w-4 mr-2" /></Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/faq" className="mx-2">FAQ Management</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="ml-2 text-foreground">Bulk Upload</span>
        </div>
        <h1 className="text-3xl font-bold">Bulk FAQ Upload</h1>
        <p className="text-muted-foreground">
          Upload multiple FAQs at once using our CSV template
        </p>
      </header>

      <div className="border-2 border-dashed border-border rounded-lg p-12 text-center mb-8">
        <UploadCloud className="mx-auto h-12 w-12 text-muted-foreground" />
        <p className="mt-4 text-muted-foreground">
          Drag & drop your CSV file here or
        </p>
        <Button className="mt-4">Browse Files</Button>
        <div className="mt-6">
          <Button variant="link" className="text-primary">
            <Download className="mr-2 h-4 w-4" />
            Download Template
          </Button>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-2">File Validation</h2>
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm">
            <span className="text-green-600 font-medium">{validEntries} valid entries</span>
            <span className="text-muted-foreground"> • </span>
            <span className="text-red-600 font-medium">{errorEntries} entries with errors</span>
          </p>
          <div className="flex items-center gap-2">
            <Switch id="show-errors" />
            <label htmlFor="show-errors" className="text-sm font-medium">
              Show only errors
            </label>
          </div>
        </div>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Status</TableHead>
                <TableHead>Question</TableHead>
                <TableHead>Answer</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Tags</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {validationData.map((item, index) => (
                <TableRow
                  key={index}
                  className={cn(item.status === "error" && "bg-red-500/10")}
                >
                  <TableCell>
                    {item.status === "valid" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.question || (
                      <div className="flex items-center text-red-600">
                        <Info className="h-4 w-4 mr-2" /> Missing Question
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.answer || (
                      <div className="flex items-center text-red-600">
                        <Info className="h-4 w-4 mr-2" /> Missing Answer
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    {item.category || (
                      <div className="flex items-center text-red-600">
                        <Info className="h-4 w-4 mr-2" /> Missing Category
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      <footer className="mt-8 pt-6 border-t flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <Info className="h-4 w-4 mr-2" />
          <p>Please fix all errors before importing</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="secondary">Import Valid Entries Only</Button>
          <Button variant="outline">Fix Errors & Try Again</Button>
          <Button>Import All</Button>
        </div>
      </footer>
    </div>
  );
}
