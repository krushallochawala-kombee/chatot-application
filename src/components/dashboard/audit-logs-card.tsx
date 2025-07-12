import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, Filter, FileUp } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const logs = [
    { timestamp: "2023-12-01 14:32:45", user: "admin@example.com", service: "AI API", action: "Configuration Updated", status: "Success" },
    { timestamp: "2023-12-01 13:15:22", user: "system", service: "Database", action: "Automatic Backup", status: "Success" },
    { timestamp: "2023-12-01 12:45:11", user: "john.doe@example.com", service: "Storage", action: "Permission Change", status: "Success" },
    { timestamp: "2023-12-01 11:23:05", user: "jane.smith@example.com", service: "AI API", action: "Model Deployment", status: "Failed" },
    { timestamp: "2023-12-01 10:17:33", user: "system", service: "Webhook", action: "Endpoint Test", status: "Warning" },
    { timestamp: "2023-12-01 09:05:18", user: "admin@example.com", service: "Database", action: "Schema Migration", status: "Success" },
    { timestamp: "2023-12-01 08:42:51", user: "system", service: "Storage", action: "Cleanup Process", status: "Success" },
];

const FilterDropdown = ({ title, options }: { title: string, options: string[] }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-8">
            {title}
            <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
        {options.map(option => <DropdownMenuItem key={option}>{option}</DropdownMenuItem>)}
        </DropdownMenuContent>
    </DropdownMenu>
);

export function AuditLogsCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <CardTitle>Audit Logs</CardTitle>
            <div className="flex items-center gap-2">
                <FilterDropdown title="Last 24 hours" options={['Last 7 days', 'Last 30 days']} />
                <FilterDropdown title="All Services" options={['AI API', 'Database', 'Storage']} />
                <FilterDropdown title="All Actions" options={['Create', 'Update', 'Delete']} />
                <FilterDropdown title="All Users" options={['Admin', 'User']} />
                <Button variant="outline" size="sm" className="h-8">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                    <FileUp className="mr-2 h-4 w-4" />
                    Export
                </Button>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>User</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.timestamp}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.user}</TableCell>
                <TableCell>{log.service}</TableCell>
                <TableCell>{log.action}</TableCell>
                <TableCell>
                  <Badge
                    variant={log.status === 'Success' ? 'secondary' : log.status === 'Failed' ? 'destructive' : 'outline'}
                    className={cn(
                        log.status === "Success" && "bg-green-100 text-green-700",
                        log.status === "Failed" && "bg-red-100 text-red-700",
                        log.status === "Warning" && "bg-yellow-100 text-yellow-700 border-yellow-200"
                    )}
                  >
                    {log.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Link href="#" className="text-primary hover:underline">
                    View &gt;
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
       <CardFooter className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Showing 1-7 of 124 logs</span>
            <div className="flex items-center gap-1">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="icon" className="h-8 w-8">1</Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">2</Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">3</Button>
                <Button variant="outline" size="sm">Next</Button>
            </div>
       </CardFooter>
    </Card>
  );
}
