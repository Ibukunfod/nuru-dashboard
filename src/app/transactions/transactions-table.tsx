"use client";

import * as React from "react";
import { Search, Filter, Download, Trash2, ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Transaction {
  id: string;
  date: string;
  type: "Revenue" | "Expense";
  party: string;
  category: string;
  amount: number;
  description: string;
  status: "completed" | "pending";
}

function formatAmount(amount: number): string {
  const formatted = Math.abs(amount).toLocaleString();
  return `₦${formatted}`;
}

// Extended transaction data
const allTransactions: Transaction[] = [
  {
    id: "1",
    date: "27 Jan 2026",
    type: "Revenue",
    party: "O. Damilola",
    category: "Sales",
    amount: 45000,
    description: "Invoice paid for January supplies",
    status: "completed",
  },
  {
    id: "2",
    date: "26 Jan 2026",
    type: "Expense",
    party: "MTN Nigeria",
    category: "Subscriptions",
    amount: -15000,
    description: "Internet subscription - January",
    status: "completed",
  },
  {
    id: "3",
    date: "25 Jan 2026",
    type: "Revenue",
    party: "J. Aliyu",
    category: "Sales",
    amount: 32500,
    description: "Product delivery - Order #1843",
    status: "completed",
  },
  {
    id: "4",
    date: "24 Jan 2026",
    type: "Expense",
    party: "GIG Logistics",
    category: "Logistics",
    amount: -8900,
    description: "Delivery fees for 12 packages",
    status: "completed",
  },
  {
    id: "5",
    date: "23 Jan 2026",
    type: "Revenue",
    party: "O. Darasimi",
    category: "Sales",
    amount: 28000,
    description: "Bulk order payment",
    status: "pending",
  },
  ...Array.from({ length: 15 }, (_, i) => ({
    id: `${i + 6}`,
    date: `${22 - i} Jan 2026`,
    type: i % 2 === 0 ? "Revenue" as const : "Expense" as const,
    party: ["O. Damilola", "J. Aliyu", "MTN Nigeria", "GIG Logistics"][i % 4],
    category: i % 2 === 0 ? "Sales" : ["Subscriptions", "Logistics", "Supplies"][i % 3],
    amount: i % 2 === 0 ? 25000 + i * 1000 : -(8000 + i * 500),
    description: `Transaction #${i + 6} description`,
    status: i % 3 === 0 ? "pending" as const : "completed" as const,
  })),
];

const ITEMS_PER_PAGE = 10;

export function TransactionsTable() {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const filteredTransactions = React.useMemo(() => {
    if (!searchQuery) return allTransactions;
    const query = searchQuery.toLowerCase();
    return allTransactions.filter(
      (t) =>
        t.party.toLowerCase().includes(query) ||
        t.description.toLowerCase().includes(query) ||
        t.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const totalPages = Math.ceil(filteredTransactions.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTransactions = filteredTransactions.slice(startIndex, endIndex);

  const selectAll = currentTransactions.length > 0 && currentTransactions.every((t) => selectedRows.has(t.id));

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(selectedRows);
      currentTransactions.forEach((t) => newSelected.add(t.id));
      setSelectedRows(newSelected);
    } else {
      const newSelected = new Set(selectedRows);
      currentTransactions.forEach((t) => newSelected.delete(t.id));
      setSelectedRows(newSelected);
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

  const hasSelection = selectedRows.size > 0;

  return (
    <div style={{ marginTop: "16px" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "16px",
          gap: "12px",
        }}
      >
        {/* Search */}
        <div style={{ position: "relative", flex: 1, maxWidth: "360px" }}>
          <Search
            size={16}
            strokeWidth={2}
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9CA3AF",
            }}
          />
          <Input
            placeholder="Search transactions..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            style={{
              paddingLeft: "36px",
              height: "36px",
              fontSize: "13px",
              border: "0.6px solid #E5E7EB",
            }}
          />
        </div>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                style={{
                  height: "36px",
                  fontSize: "13px",
                  fontWeight: 500,
                  gap: "6px",
                  border: "0.6px solid #E5E7EB",
                }}
              >
                <Filter size={14} strokeWidth={2} />
                Filter
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All transactions</DropdownMenuItem>
              <DropdownMenuItem>Revenue only</DropdownMenuItem>
              <DropdownMenuItem>Expenses only</DropdownMenuItem>
              <DropdownMenuItem>Completed</DropdownMenuItem>
              <DropdownMenuItem>Pending</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Export */}
          <Button
            variant="outline"
            size="sm"
            style={{
              height: "36px",
              fontSize: "13px",
              fontWeight: 500,
              gap: "6px",
              border: "0.6px solid #E5E7EB",
            }}
          >
            <Download size={14} strokeWidth={2} />
            Export
          </Button>

          {/* Delete (only show when items selected) */}
          {hasSelection && (
            <Button
              variant="outline"
              size="sm"
              style={{
                height: "36px",
                fontSize: "13px",
                fontWeight: 500,
                gap: "6px",
                border: "0.6px solid #FCA5A5",
                color: "#DC2626",
              }}
            >
              <Trash2 size={14} strokeWidth={2} />
              Delete ({selectedRows.size})
            </Button>
          )}
        </div>
      </div>

      {/* Table Container */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "0.6px solid #E5E7EB",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-8 py-3 bg-gray-50">
                <Checkbox
                  id="select-all-checkbox"
                  name="select-all-checkbox"
                  checked={selectAll}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Date
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Type
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Party
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Category
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50 text-right">
                Amount
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Description
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50">
                Status
              </TableHead>
              <TableHead className="text-xs font-semibold text-gray-600 py-3 bg-gray-50 w-12">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow
                key={transaction.id}
                data-state={selectedRows.has(transaction.id) ? "selected" : undefined}
              >
                <TableCell className="py-3">
                  <Checkbox
                    id={`row-${transaction.id}-checkbox`}
                    name={`row-${transaction.id}-checkbox`}
                    checked={selectedRows.has(transaction.id)}
                    onCheckedChange={(checked) =>
                      handleSelectRow(transaction.id, checked === true)
                    }
                  />
                </TableCell>
                <TableCell className="text-sm text-gray-500 py-3">
                  {transaction.date}
                </TableCell>
                <TableCell className="py-3">
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                      transaction.type === "Revenue"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-rose-50 text-rose-700 border border-rose-200"
                    }`}
                  >
                    {transaction.type}
                  </span>
                </TableCell>
                <TableCell className="font-medium py-3 text-sm">
                  {transaction.party}
                </TableCell>
                <TableCell className="text-sm text-gray-600 py-3">
                  {transaction.category}
                </TableCell>
                <TableCell className="text-right font-medium tabular-nums py-3 text-sm">
                  {formatAmount(transaction.amount)}
                </TableCell>
                <TableCell className="text-sm text-gray-500 py-3 truncate max-w-xs">
                  {transaction.description}
                </TableCell>
                <TableCell className="py-3">
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
                <TableCell className="py-3">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        style={{
                          width: "28px",
                          height: "28px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "transparent",
                          border: "none",
                          cursor: "pointer",
                          borderRadius: "4px",
                          transition: "background-color 0.15s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#F3F4F6";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <MoreHorizontal size={16} strokeWidth={2} style={{ color: "#6B7280" }} />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit transaction</DropdownMenuItem>
                      <DropdownMenuItem>Duplicate</DropdownMenuItem>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600 focus:text-red-600">
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <div style={{ fontSize: "13px", color: "#6B7280" }}>
          Showing {startIndex + 1}–{Math.min(endIndex, filteredTransactions.length)} of{" "}
          {filteredTransactions.length} transactions
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            style={{
              height: "32px",
              width: "32px",
              padding: "0",
              border: "0.6px solid #E5E7EB",
            }}
          >
            <ChevronLeft size={16} strokeWidth={2} />
          </Button>

          <div style={{ fontSize: "13px", color: "#111827", fontWeight: 500 }}>
            Page {currentPage} of {totalPages}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            style={{
              height: "32px",
              width: "32px",
              padding: "0",
              border: "0.6px solid #E5E7EB",
            }}
          >
            <ChevronRight size={16} strokeWidth={2} />
          </Button>
        </div>
      </div>
    </div>
  );
}