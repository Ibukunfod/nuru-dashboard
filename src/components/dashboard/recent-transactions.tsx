import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const transactions = [
  {
    date: "12/07/2025",
    type: "Sale",
    party: "Bradenburg",
    amount: "+₦120,000",
    description: "Invoice paid for July supplies",
    status: "Completed",
  },
  {
    date: "12/07/2025",
    type: "Expense",
    party: "MTN Nigeria",
    amount: "-₦18,500",
    description: "Internet subscription",
    status: "Completed",
  },
  {
    date: "11/07/2025",
    type: "Sale",
    party: "Bible Wonderland",
    amount: "+₦85,000",
    description: "Invoice paid for July supplies",
    status: "Pending",
  },
  {
    date: "11/07/2025",
    type: "Sale",
    party: "Staleg Mall",
    amount: "-₦43,200",
    description: "Restocking",
    status: "Completed",
  },
  {
    date: "10/07/2025",
    type: "Expense",
    party: "GIG Logistics",
    amount: "-₦6,200",
    description: "Delivery to customer",
    status: "Completed",
  },
  {
    date: "09/07/2025",
    type: "Sale",
    party: "Winners",
    amount: "+₦55,000",
    description: "Cash sale",
    status: "Pending",
  },
  {
    date: "08/07/2025",
    type: "Sale",
    party: "Nuru ;)",
    amount: "+₦120,000",
    description: "Refund for surcharge",
    status: "Completed",
  },
];

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <CardTitle>Recent Transactions</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Party</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction, index) => (
              <TableRow key={index}>
                <TableCell className="text-sm">{transaction.date}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      transaction.type === "Sale"
                        ? "text-green-700 border-green-200 bg-green-50"
                        : "text-red-700 border-red-200 bg-red-50"
                    }
                  >
                    {transaction.type}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm">{transaction.party}</TableCell>
                <TableCell className="text-sm font-medium">{transaction.amount}</TableCell>
                <TableCell className="text-sm text-muted-foreground">
                  {transaction.description}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        transaction.status === "Completed" ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    />
                    <span className="text-sm">{transaction.status}</span>
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