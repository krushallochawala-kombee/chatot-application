
import { FaqCard } from "@/components/faq/faq-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Filter } from "lucide-react";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "To reset your password, click on the 'Forgot Password' link on the login page. You will receive an email with instructions to create a new password. Follow the link in the email to set up a new password for your account.",
    category: "Account",
    updated: "2023-11-15",
    status: "Active",
  },
  {
    question: "How to upgrade my subscription plan?",
    answer:
      "You can upgrade your subscription plan by going to your account settings and selecting 'Subscription'. From there, you can view available plans and select the one that best suits your needs. Changes will take place immediately.",
    category: "Billing",
    updated: "2023-11-10",
    status: "Active",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support PayPal and direct bank transfers for annual subscriptions.",
    category: "Billing",
    updated: "2023-10-28",
    status: "Inactive",
  },
  {
    question: "What are the system requirements?",
    answer:
      "Our platform works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version of your preferred browser for the best experience. Mobile apps are available for both iOS and Android.",
    category: "Technical",
    updated: "2023-11-08",
    status: "Active",
  },
  {
    question: "How do I connect third-party integrations?",
    answer:
      "To connect third-party integrations, go to Settings > Integrations. You'll see a list of available integrations. Click on the one you want to connect and follow the authentication process.",
    category: "Technical",
    updated: "2023-11-14",
    status: "Active",
  },
  {
    question: "Can I transfer my subscription to another account?",
    answer:
      "Subscription transfers between accounts are not supported automatically. Please contact our support team with both account details, and we can assist you with the transfer process.",
    category: "Billing",
    updated: "2023-10-30",
    status: "Inactive",
  },
];

export default function FaqPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">FAQ Management</h1>
        <Button>+ Add New FAQ</Button>
      </div>

      <Tabs defaultValue="english" className="mb-6">
        <TabsList>
          <TabsTrigger value="english">English</TabsTrigger>
          <TabsTrigger value="spanish">Spanish</TabsTrigger>
          <TabsTrigger value="french">French</TabsTrigger>
          <TabsTrigger value="german">German</TabsTrigger>
          <TabsTrigger value="japanese">Japanese</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex justify-between items-center mb-4">
        <p className="text-sm text-muted-foreground">Showing 6 FAQs</p>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                Sort by: Last Updated
                <ChevronDown className="h-4 w-4 ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Newest First</DropdownMenuItem>
              <DropdownMenuItem>Oldest First</DropdownMenuItem>
              <DropdownMenuItem>Most popular</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faqs.map((faq) => (
          <FaqCard key={faq.question} {...faq} />
        ))}
      </div>
    </div>
  );
}
