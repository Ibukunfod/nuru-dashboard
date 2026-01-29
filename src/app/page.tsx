import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { PageHeader } from "@/components/dashboard/page-header";
import { MetricsGrid } from "@/components/dashboard/metrics-grid";
import { RevenueExpensesChart } from "@/components/dashboard/revenue-expenses-chart";
import { TopCustomers } from "@/components/dashboard/top-customers";
import { RecentTransactions } from "@/components/dashboard/recent-transactions";

export default function DashboardPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <DashboardHeader />
      {/* Changes made here:
        1. Added "custom-scrollbar" to the className.
        This ensures the styling applies to this specific scrollable area.
      */}
      <div 
        className="overflow-y-auto custom-scrollbar" 
        style={{ height: "calc(100% - 52px)" }}
      >
        <PageHeader />
        <MetricsGrid />

        <div
          style={{
            marginTop: "10px",
            paddingLeft: "16px",
            paddingRight: "16px",
            display: "grid",
            gridTemplateColumns: "65fr 35fr",
            gap: "10px",
          }}
        >
          <RevenueExpensesChart />
          <TopCustomers />
        </div>

        <div
          style={{
            marginTop: "10px",
            paddingLeft: "16px",
            paddingRight: "16px",
            marginBottom: "10px",
          }}
        >
          <RecentTransactions />
        </div>

      </div>
    </div>
  );
}