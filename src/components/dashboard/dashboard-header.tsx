import { House } from "lucide-react";

export function DashboardHeader() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "0.6px solid #E5E7EB",
        paddingLeft: "17px",
        display: "flex",
        alignItems: "center",
        height: "52px", // Fixed height instead of padding
      }}
    >
      <House size={14} strokeWidth={1.5} style={{ color: "#111827" }} />
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
        Dashboard
      </span>
    </div>
  );
}