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
        <div className="p-8 space-y-6">
          <PageHeader />
          <MetricsGrid />
          
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2">
              <RevenueExpensesChart />
            </div>
            <div>
              <TopCustomers />
            </div>
          </div>

          <RecentTransactions />
        </div>
      </div>
    </div>
  );
}