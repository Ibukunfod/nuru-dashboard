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
          Business Overview
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
            <Button variant="outline" size="sm">
              This Year
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>This Year</DropdownMenuItem>
            <DropdownMenuItem>This Quarter</DropdownMenuItem>
            <DropdownMenuItem>This Month</DropdownMenuItem>
            <DropdownMenuItem>Last 30 Days</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Refresh Button */}
        <Button variant="outline" size="sm">
          <RotateCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}