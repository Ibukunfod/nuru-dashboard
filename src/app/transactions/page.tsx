import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { TransactionsTable } from "@/app/transactions/transactions-table";

export default function TransactionsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF", height: "100%" }}>
      <DashboardHeader />
      <div className="overflow-y-auto" style={{ height: "calc(100% - 52px)" }}>
        {/* Page Header */}
        <div
          style={{
            marginLeft: "20px",
            marginTop: "18px",
            marginRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#111827",
              lineHeight: "1",
            }}
          >
            All Transactions
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
            View and manage all your business transactions in one place.
          </p>
        </div>

        {/* Transactions Table */}
        <div style={{ paddingLeft: "20px", paddingRight: "20px", paddingBottom: "20px" }}>
          <TransactionsTable />
        </div>
      </div>
    </div>
  );
}