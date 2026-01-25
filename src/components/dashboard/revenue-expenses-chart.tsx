"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

const data = [
  { month: "Jan", revenue: 45000, expenses: 28000 },
  { month: "Feb", revenue: 52000, expenses: 31000 },
  { month: "Mar", revenue: 48000, expenses: 29000 },
  { month: "Apr", revenue: 61000, expenses: 35000 },
  { month: "May", revenue: 55000, expenses: 33000 },
  { month: "Jun", revenue: 67000, expenses: 38000 },
  { month: "Jul", revenue: 72000, expenses: 41000 },
  { month: "Aug", revenue: 68000, expenses: 39000 },
  { month: "Sep", revenue: 76000, expenses: 43000 },
  { month: "Oct", revenue: 82000, expenses: 46000 },
  { month: "Nov", revenue: 78000, expenses: 44000 },
  { month: "Dec", revenue: 88000, expenses: 49000 },
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
            paddingTop: "4px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "14px",
                height: "2.5px",
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
                height: "2.5px",
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
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
          >
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.08} />
                <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#EF4444" stopOpacity={0.06} />
                <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="0"
              stroke="#E5E7EB"
              strokeWidth={0.6}
              vertical={false}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
              dy={8}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11, fontWeight: 500 }}
              tickFormatter={(value) => `₦${(value / 1000).toFixed(0)}K`}
              dx={-5}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#FFFFFF",
                border: "0.6px solid #E5E7EB",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "12px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
              }}
              formatter={(value: number | undefined) => [`₦${(value ?? 0).toLocaleString()}`, ""]}
              labelStyle={{ fontWeight: 500, marginBottom: "4px", color: "#111827" }}
            />

            <Area
              type="natural"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={2}
              fill="url(#revenueGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "#10B981",
                strokeWidth: 2,
                stroke: "#FFFFFF",
              }}
            />

            <Area
              type="natural"
              dataKey="expenses"
              stroke="#EF4444"
              strokeWidth={2}
              fill="url(#expensesGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "#EF4444",
                strokeWidth: 2,
                stroke: "#FFFFFF",
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}