import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { UsersRound } from "lucide-react";

export function TopCustomers() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <div style={{ marginTop: "1px" }}>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#374151",
          }}
        >
          Top Customers
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: "#6B7280",
            marginTop: "4px",
          }}
        >
          by Revenue This Year
        </p>
      </div>

      <Empty className="h-[280px]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UsersRound />
          </EmptyMedia>
          <EmptyTitle>No customer data</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            Customer insights will appear here once data is available.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}