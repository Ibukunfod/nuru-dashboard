"use client";

import * as React from "react";
import { MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Transaction {
  id: string;
  date: string;
  type: "sale" | "expense";
  party: string;
  amount: number;
  description: string;
  status: "completed" | "pending";
}

function formatAmount(amount: number): string {
  const formatted = Math.abs(amount).toLocaleString();
  return `₦${formatted}`;
}

const transactions: Transaction[] = [
  {
    id: "1",
    date: "27 Jan 2026",
    type: "sale",
    party: "O. Damilola",
    amount: 45000,
    description: "Invoice paid for January supplies",
    status: "completed",
  },
  {
    id: "2",
    date: "26 Jan 2026",
    type: "expense",
    party: "MTN Nigeria",
    amount: -15000,
    description: "Internet subscription - January",
    status: "completed",
  },
  {
    id: "3",
    date: "25 Jan 2026",
    type: "sale",
    party: "J. Aliyu",
    amount: 32500,
    description: "Product delivery - Order #1843",
    status: "completed",
  },
  {
    id: "4",
    date: "24 Jan 2026",
    type: "expense",
    party: "GIG Logistics",
    amount: -8900,
    description: "Delivery fees for 12 packages",
    status: "completed",
  },
  {
    id: "5",
    date: "23 Jan 2026",
    type: "sale",
    party: "O. Darasimi",
    amount: 28000,
    description: "Bulk order payment",
    status: "pending",
  },
];

export function RecentTransactions() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());

  const selectAll = selectedRows.size === transactions.length;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(new Set(transactions.map((row) => row.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#374151",
            margin: 0,
          }}
        >
          Recent Transactions
        </h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
                padding: "0",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#F3F4F6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <MoreVertical
                style={{
                  width: "14px",
                  height: "14px",
                  color: "#6B7280",
                  strokeWidth: 2,
                }}
              />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View all transactions</DropdownMenuItem>
            <DropdownMenuItem>Export data</DropdownMenuItem>
            <DropdownMenuItem>Filter transactions</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="w-8 py-2">
              <Checkbox
                id="select-all-checkbox"
                name="select-all-checkbox"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              />
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2">
              Date
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2">
              Type
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2">
              Party
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2 text-right">
              Amount
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2">
              Description
            </TableHead>
            <TableHead className="text-xs font-medium text-gray-500 py-2">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              data-state={selectedRows.has(transaction.id) ? "selected" : undefined}
            >
              <TableCell className="py-2.5">
                <Checkbox
                  id={`row-${transaction.id}-checkbox`}
                  name={`row-${transaction.id}-checkbox`}
                  checked={selectedRows.has(transaction.id)}
                  onCheckedChange={(checked) =>
                    handleSelectRow(transaction.id, checked === true)
                  }
                />
              </TableCell>
              <TableCell className="text-sm text-gray-500 py-2.5">
                {transaction.date}
              </TableCell>
              <TableCell className="py-2.5">
                <span
                  className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                    transaction.type === "sale"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-rose-50 text-rose-700 border border-rose-200"
                  }`}
                >
                  {transaction.type === "sale" ? "Sale" : "Expense"}
                </span>
              </TableCell>
              <TableCell className="font-medium py-2.5">
                {transaction.party}
              </TableCell>
              <TableCell className="text-right font-medium tabular-nums py-2.5">
                {formatAmount(transaction.amount)}
              </TableCell>
              <TableCell className="text-sm text-gray-500 py-2.5 truncate max-w-xs">
                {transaction.description}
              </TableCell>
              <TableCell className="py-2.5">
                <span className="inline-flex items-center gap-1.5 text-xs text-gray-600">
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      transaction.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  />
                  {transaction.status === "completed" ? "Completed" : "Pending"}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}