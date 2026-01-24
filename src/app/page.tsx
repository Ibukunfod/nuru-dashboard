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
      <div className="overflow-y-auto" style={{ height: "calc(100% - 52px)" }}>
        <PageHeader />
        <MetricsGrid />

        <div
          style={{
            marginTop: "10px",
            paddingLeft: "16px",
            paddingRight: "16px",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "10px",
          }}
        >
          <RevenueExpensesChart />
          <TopCustomers />


          <RecentTransactions />
        </div>
      </div>
    </div>

  );
}