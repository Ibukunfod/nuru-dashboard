"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", revenue: 52000, expenses: 31000 },
  { month: "Feb", revenue: 58000, expenses: 33000 },
  { month: "Mar", revenue: 61000, expenses: 35000 },
  { month: "Apr", revenue: 59000, expenses: 34000 },
  { month: "May", revenue: 67000, expenses: 38000 },
  { month: "Jun", revenue: 71000, expenses: 40000 },
  { month: "Jul", revenue: 68000, expenses: 39000 },
  { month: "Aug", revenue: 75000, expenses: 42000 },
  { month: "Sep", revenue: 79000, expenses: 44000 },
  { month: "Oct", revenue: 83000, expenses: 46000 },
  { month: "Nov", revenue: 81000, expenses: 45000 },
  { month: "Dec", revenue: 88000, expenses: 48000 },
];

export function RevenueExpensesChart() {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (!active || !payload || !payload.length) {
      return null;
    }

    return (
      <div
        style={{
          backgroundColor: "#18181B",
          border: "0.5px solid #27272A",
          borderRadius: "6px",
          padding: "8px 10px",
          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.24)",
          minWidth: "140px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#A1A1AA",
            marginBottom: "6px",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          {label}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {payload.map((entry: any, index: number) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: "#E4E4E7",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "2px",
                    backgroundColor: entry.color,
                  }}
                />
                {entry.dataKey === "revenue" ? "Revenue" : "Expenses"}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#FAFAFA",
                  marginLeft: "12px",
                }}
              >
                ₦{(entry.value / 1000).toFixed(0)}K
              </span>
            </div>
          ))}
        </div>
      </div>
    );
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
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "1px",
          position: "relative",
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
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
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

        {/* More Options Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "0",
              }}
            >
              <MoreVertical style={{ width: "16px", height: "16px", color: "#6B7280" }} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>View Details</DropdownMenuItem>
            <DropdownMenuItem>Export data</DropdownMenuItem>
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
              stroke="#E5E7EB"
              strokeWidth={0.6}
              vertical={false}
              strokeDasharray="3 3"
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
              content={<CustomTooltip />}
              cursor={{
                stroke: "#D1D5DB",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              isAnimationActive={false}
              position={{ y: 0 }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#10B981"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
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
              type="monotone"
              dataKey="expenses"
              stroke="#EF4444"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
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