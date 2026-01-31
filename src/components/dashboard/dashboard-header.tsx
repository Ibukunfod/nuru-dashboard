"use client";

import { usePathname } from "next/navigation";
import { RotateCcw, House, RefreshCcw, File, UsersRound, Package } from "lucide-react";

const PAGE_CONFIG: Record<string, { title: string; icon: typeof House }> = {
  "/": { title: "Dashboard", icon: House },
  "/transactions": { title: "Transactions", icon: RefreshCcw },
  "/reports": { title: "Reports", icon: File },
  "/customers": { title: "Customers", icon: UsersRound },
  "/inventory": { title: "Inventory", icon: Package },
};

export function DashboardHeader() {
  const pathname = usePathname();
  const config = PAGE_CONFIG[pathname] || { title: "Dashboard", icon: House };
  const Icon = config.icon;

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "0.6px solid #E5E7EB",
        paddingLeft: "17px",
        paddingRight: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "52px",
      }}
    >
      {/* Left side - Icon and Page title */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Icon size={14} strokeWidth={1.5} style={{ color: "#111827" }} />
        <span
          style={{
            marginLeft: "6px",
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            color: "#111827",
            lineHeight: "1",
          }}
        >
          {config.title}
        </span>
      </div>

      {/* Right side - Last Refresh */}
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <RotateCcw size={13} strokeWidth={2} style={{ color: "#6B7280" }} />
        <span style={{ fontSize: "12px", color: "#6B7280", whiteSpace: "nowrap" }}>
          Last refresh: <span style={{ fontWeight: 500 }}>TODAY 09:41 AM</span>
        </span>
      </div>
    </div>
  );
}