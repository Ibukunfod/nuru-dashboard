"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from "lucide-react";

const data = [
  { month: 'Jan', revenue: 65000, expenses: 32000 },
  { month: 'Feb', revenue: 59000, expenses: 35000 },
  { month: 'Mar', revenue: 62000, expenses: 38000 },
  { month: 'Apr', revenue: 68000, expenses: 42000 },
  { month: 'May', revenue: 71000, expenses: 45000 },
  { month: 'Jun', revenue: 75000, expenses: 31000 },
  { month: 'Jul', revenue: 85500, expenses: 35000 },
  { month: 'Aug', revenue: 78000, expenses: 39000 },
  { month: 'Sep', revenue: 72000, expenses: 48000 },
  { month: 'Oct', revenue: 79000, expenses: 51000 },
  { month: 'Nov', revenue: 83000, expenses: 52000 },
  { month: 'Dec', revenue: 86000, expenses: 50000 },
];

export function RevenueExpensesChart() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#374151",
          }}
        >
          Revenue vs Expenses
        </h3>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                paddingLeft: "12px",
                paddingRight: "12px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "10px",
                border: "0.6px solid #E5E7EB",
                backgroundColor: "#FFFFFF",
                fontSize: "14px",
                fontWeight: 500,
                color: "#111827",
                cursor: "pointer",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
              }}
            >
              Monthly
              <ChevronDown size={14} strokeWidth={2} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Monthly</DropdownMenuItem>
            <DropdownMenuItem>Quarterly</DropdownMenuItem>
            <DropdownMenuItem>Yearly</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            tick={{ fontSize: 12 }}
            stroke="#888"
          />
          <YAxis
            tick={{ fontSize: 12 }}
            stroke="#888"
            tickFormatter={(value) => `${value / 1000}K`}
          />
          <Tooltip
            formatter={(value) => value !== undefined ? `₦${(value as number).toLocaleString()}` : ''}
            contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#10b981"
            strokeWidth={2}
            name="Revenue"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="expenses"
            stroke="#ef4444"
            strokeWidth={2}
            name="Expenses"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}