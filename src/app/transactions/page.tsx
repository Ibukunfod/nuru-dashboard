import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RefreshCcw } from "lucide-react";

export default function TransactionsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <DashboardHeader />
      <div className="flex items-center justify-center" style={{ height: "calc(100% - 52px)" }}>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <RefreshCcw size={48} strokeWidth={1} />
            </EmptyMedia>
            <EmptyTitle>Transactions</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              Transaction management will be available here soon.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  );
}