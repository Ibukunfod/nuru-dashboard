"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "1px",
        }}
      >
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

        {/* Legend - Middle */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "14px",
                height: "1.5px",
                backgroundColor: "#10B981",
                borderRadius: "2px",
              }}
            />
            <span style={{ fontSize: "13px", color: "#6B7280" }}>Revenue</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "14px",
                height: "1.5px",
                backgroundColor: "#EF4444",
                borderRadius: "2px",
              }}
            />
            <span style={{ fontSize: "13px", color: "#6B7280" }}>Expenses</span>
          </div>
        </div>

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

      {/* Chart */}
      <div style={{ marginTop: "20px", paddingRight: "16px" }}>
        <ResponsiveContainer width="100%" height={280}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#E5E7EB"
              vertical={false}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}K`}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "0.6px solid #E5E7EB",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "12px",
              }}
              formatter={(value: number | undefined) => value !== undefined ? [`₦${value.toLocaleString()}`, ""] : ["", ""]}
              labelStyle={{ fontWeight: 500, marginBottom: "4px" }}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: "#10B981" }}
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#EF4444"
              strokeWidth={1.5}
              dot={false}
              activeDot={{ r: 4, fill: "#EF4444" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}