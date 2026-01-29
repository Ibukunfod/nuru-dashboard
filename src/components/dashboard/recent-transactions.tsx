"use client";

import { MoreVertical, ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
    date: "Jan 27, 2026",
    type: "sale",
    party: "O. Damilola",
    amount: 45000,
    description: "Invoice paid for January supplies",
    status: "completed",
  },
  {
    id: "2",
    date: "Jan 26, 2026",
    type: "expense",
    party: "MTN Nigeria",
    amount: -15000,
    description: "Internet subscription - January",
    status: "completed",
  },
  {
    id: "3",
    date: "Jan 25, 2026",
    type: "sale",
    party: "J. Aliyu",
    amount: 32500,
    description: "Product delivery - Order #1843",
    status: "completed",
  },
  {
    id: "4",
    date: "Jan 24, 2026",
    type: "expense",
    party: "GIG Logistics",
    amount: -8900,
    description: "Delivery fees for 12 packages",
    status: "completed",
  },
  {
    id: "5",
    date: "Jan 23, 2026",
    type: "sale",
    party: "O. Darasimi",
    amount: 28000,
    description: "Bulk order payment",
    status: "pending",
  },
];

export function RecentTransactions() {
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
      <div style={{ width: "100%" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
          }}
        >
          <thead>
            <tr
              style={{
                borderBottom: "1px solid #D1D5DB",
              }}
            >
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Date
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Type
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Party
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
              <th
                style={{
                  textAlign: "right",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    gap: "4px",
                  }}
                >
                  Amount
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Description
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "8px 12px 10px 12px",
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#000000",
                  letterSpacing: "0.01em",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  Status
                  <ArrowUpDown
                    style={{
                      width: "10px",
                      height: "10px",
                      color: "#9CA3AF",
                      strokeWidth: 2.5,
                    }}
                  />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr
                key={transaction.id}
                style={{
                  transition: "background-color 0.08s ease",
                  cursor: "pointer",
                  backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#FAFBFC",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E8F4FD";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? "#FFFFFF" : "#FAFBFC";
                }}
              >
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#1F2937",
                  }}
                >
                  {transaction.date}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      backgroundColor:
                        transaction.type === "sale" ? "#ECFDF5" : "#FEF2F2",
                      color: transaction.type === "sale" ? "#059669" : "#DC2626",
                      border: "0.5px solid",
                      borderColor:
                        transaction.type === "sale" ? "#A7F3D0" : "#FECACA",
                    }}
                  >
                    {transaction.type === "sale" ? "Sale" : "Expense"}
                  </span>
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#1F2937",
                  }}
                >
                  {transaction.party}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#1F2937",
                    textAlign: "right",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {formatAmount(transaction.amount)}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#6B7280",
                  }}
                >
                  {transaction.description}
                </td>
                <td
                  style={{
                    padding: "10px 12px",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "#1F2937",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor:
                          transaction.status === "completed" ? "#10B981" : "#F59E0B",
                      }}
                    />
                    <span style={{ textTransform: "capitalize" }}>
                      {transaction.status}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}