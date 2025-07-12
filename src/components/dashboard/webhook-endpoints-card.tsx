import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const endpoints = [
  {
    name: "Payment Processor",
    url: "https://api.payments.example.com/webhook",
    status: "Active",
    lastTested: "10 minutes ago",
    responseTime: "230ms",
  },
  {
    name: "User Notification",
    url: "https://notifications.example.com/events",
    status: "Active",
    lastTested: "25 minutes ago",
    responseTime: "189ms",
  },
  {
    name: "Analytics Service",
    url: "https://analytics.example.com/ingest",
    status: "Failed",
    lastTested: "5 minutes ago",
    responseTime: "502ms",
  },
  {
    name: "External API",
    url: "https://partner-api.example.com/webhook",
    status: "Active",
    lastTested: "1 hour ago",
    responseTime: "312ms",
  },
];

export function WebhookEndpointsCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Webhook Endpoints</CardTitle>
        <Button size="sm">
          <Plus className="mr-2 h-4 w-4" />
          Add New Endpoint
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Tested</TableHead>
              <TableHead>Response Time</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {endpoints.map((endpoint) => (
              <TableRow key={endpoint.name}>
                <TableCell className="font-medium">{endpoint.name}</TableCell>
                <TableCell>{endpoint.url}</TableCell>
                <TableCell>
                  <Badge
                    variant={endpoint.status === "Active" ? "secondary" : "destructive"}
                    className={cn(
                      endpoint.status === "Active" &&
                        "bg-green-100 text-green-700",
                      endpoint.status === "Failed" && "bg-red-100 text-red-700"
                    )}
                  >
                    {endpoint.status}
                  </Badge>
                </TableCell>
                <TableCell>{endpoint.lastTested}</TableCell>
                <TableCell>{endpoint.responseTime}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Test
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
