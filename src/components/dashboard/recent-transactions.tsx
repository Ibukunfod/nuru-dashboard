import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RefreshCcw } from "lucide-react";

export function RecentTransactions() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        height: "360px",
        borderRadius: "8px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
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
          Recent Transactions
        </h3>
      </div>

      <Empty className="h-[200px]">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <RefreshCcw />
          </EmptyMedia>
          <EmptyTitle>No transactions yet</EmptyTitle>
          <EmptyDescription className="max-w-xs text-pretty">
            Your recent transactions will appear here.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  );
}