import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Package } from "lucide-react";

export default function InventoryPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <DashboardHeader />
      <div className="flex items-center justify-center" style={{ height: "calc(100% - 52px)" }}>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Package size={48} strokeWidth={1} />
            </EmptyMedia>
            <EmptyTitle>Inventory</EmptyTitle>
            <EmptyDescription className="max-w-xs text-pretty">
              Inventory tracking and management will be available here soon.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  );
}