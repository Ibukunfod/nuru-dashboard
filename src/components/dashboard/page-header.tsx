import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, RotateCw } from "lucide-react";

export function PageHeader() {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginTop: "18px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginRight: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#111827",
            lineHeight: "1",
          }}
        >
          Darasimi & Damilola are lazy girls
        </h1>
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: "1.5",
          }}
        >
          A consolidated overview of your business's financial performance and recent activity.
        </p>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
  {/* Filter Dropdown */}
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
        This Year
        <ChevronDown size={16} strokeWidth={2} />
      </button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>This Year</DropdownMenuItem>
      <DropdownMenuItem>This Quarter</DropdownMenuItem>
      <DropdownMenuItem>This Month</DropdownMenuItem>
      <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>

{/* Refresh Button */}
<button
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    border: "0.6px solid #E5E7EB",
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  }}
>
  <RotateCw size={16} strokeWidth={2} style={{ color: "#111827" }} />
</button>
      </div>
    </div>
  );
}