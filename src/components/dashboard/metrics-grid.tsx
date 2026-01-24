import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const metrics = [
  {
    title: "Revenue",
    value: "₦237K",
    change: "+15%",
    changeType: "positive" as const,
  },
  {
    title: "Expenses",
    value: "₦82K",
    change: "-11%",
    changeType: "negative" as const,
  },
  {
    title: "Net Profit",
    value: "₦155K",
    change: "+17%",
    changeType: "positive" as const,
  },
  {
    title: "Avg. Order Value",
    value: "₦15K",
    change: "+9%",
    changeType: "positive" as const,
  },
];

export function MetricsGrid() {
  return (
    <div
      style={{
        marginTop: "14px",
        paddingLeft: "20px",
        paddingRight: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
      }}
    >
      {metrics.map((metric) => (
        <div
          key={metric.title}
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
            }}
          >
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#374151",
              }}
            >
              {metric.title}
            </span>
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
                  <MoreVertical
                    style={{ width: "16px", height: "16px", color: "#6B7280" }}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuItem>Export data</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div
            style={{
              fontSize: "42px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#111827",
              marginTop: "0",
            }}
          >
            {metric.value}
          </div>

          <p
            style={{
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "#6B7280",
              marginTop: "0",
            }}
          >
            {metric.change} vs prior period
          </p>
        </div>
      ))}
    </div>
  );
}