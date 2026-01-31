"use client";

import { useState } from "react";

interface BreakdownItem {
  label: string;
  amount: number;
  color: string;
}

const revenueData: BreakdownItem[] = [
  { label: "O. Damilola", amount: 89900, color: "#2DBE60" },
  { label: "J. Aliyu", amount: 61870, color: "#F5A524" },
  { label: "O. Darasimi", amount: 53990, color: "#F97316" },
  { label: "Others", amount: 31340, color: "#D1D5DB" },
];

const expensesData: BreakdownItem[] = [
  { label: "Subscriptions", amount: 31500, color: "#2563EB" },
  { label: "Logistics", amount: 28800, color: "#60A5FA" },
  { label: "Supplies", amount: 14600, color: "#93C5FD" },
  { label: "Others", amount: 7500, color: "#D1D5DB" },
];

type DisplayMode = "value" | "percentage";

function BreakdownSection({
  title,
  total,
  items,
  onHover,
  hoveredIndex,
  displayMode,
}: {
  title: string;
  total: number;
  items: BreakdownItem[];
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
  displayMode: DisplayMode;
}) {
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div style={{ marginBottom: "24px" }}>
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "12px",
        }}
      >
        <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>
          {title}
        </h4>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 600,
            color: "#111827",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {displayMode === "value" ? `₦${total.toLocaleString()}` : "100%"}
        </span>
      </div>

      {/* Segmented Bar */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "8px",
          borderRadius: "2px",
          overflow: "hidden",
          marginBottom: "16px",
          backgroundColor: "transparent",
          cursor: "pointer",
          gap: "2.5px",
        }}
      >
        {items.map((item, index) => {
          const percentage = (item.amount / totalAmount) * 100;
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              style={{
                width: `${percentage}%`,
                backgroundColor: item.color,
                transition: "all 0.2s ease",
                opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.3,
                borderRadius: "2px",
              }}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
              role="button"
              tabIndex={0}
              aria-label={`${item.label}: ${
                displayMode === "value"
                  ? `₦${item.amount.toLocaleString()}`
                  : `${percentage.toFixed(1)}%`
              }`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item, index) => {
          const percentage = ((item.amount / totalAmount) * 100).toFixed(1);
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "all 0.2s ease",
                opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.4,
                transform: isHovered ? "translateX(4px)" : "translateX(0)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    boxShadow: isHovered ? `0 0 8px ${item.color}80` : "none",
                  }}
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: isHovered ? 600 : 500,
                    color: "#111827",
                    transition: "font-weight 0.2s ease",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <span
                style={{
                  fontSize: "12px",
                  color: "#6B7280",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {displayMode === "value"
                  ? `₦${item.amount.toLocaleString()}`
                  : `${percentage}%`}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function TopCustomers() {
  const [revenueHoveredIndex, setRevenueHoveredIndex] = useState<number | null>(null);
  const [expensesHoveredIndex, setExpensesHoveredIndex] = useState<number | null>(null);
  const [displayMode, setDisplayMode] = useState<DisplayMode>("value");

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expensesData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Fixed Header with Toggle */}
      <div
        style={{
          padding: "12px 10px 8px 10px",
          backgroundColor: "#FFFFFF",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#374151" }}>
          Financial Breakdown
        </h3>

        {/* Toggle Button */}
        <div
          style={{
            display: "flex",
            backgroundColor: "#F3F4F6",
            borderRadius: "6px",
            padding: "2px",
            gap: "2px",
          }}
        >
          <button
            onClick={() => setDisplayMode("value")}
            style={{
              padding: "4px 8px",
              fontSize: "11px",
              fontWeight: 500,
              color: displayMode === "value" ? "#111827" : "#6B7280",
              backgroundColor: displayMode === "value" ? "#FFFFFF" : "transparent",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow:
                displayMode === "value" ? "0px 1px 2px rgba(0, 0, 0, 0.05)" : "none",
            }}
          >
            ₦
          </button>
          <button
            onClick={() => setDisplayMode("percentage")}
            style={{
              padding: "4px 8px",
              fontSize: "11px",
              fontWeight: 500,
              color: displayMode === "percentage" ? "#111827" : "#6B7280",
              backgroundColor: displayMode === "percentage" ? "#FFFFFF" : "transparent",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.15s ease",
              boxShadow:
                displayMode === "percentage" ? "0px 1px 2px rgba(0, 0, 0, 0.05)" : "none",
            }}
          >
            %
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        className="custom-scrollbar"
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "0 10px",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div style={{ paddingTop: "12px", paddingBottom: "4px" }}>
          <BreakdownSection
            title="Revenue"
            items={revenueData}
            total={totalRevenue}
            onHover={setRevenueHoveredIndex}
            hoveredIndex={revenueHoveredIndex}
            displayMode={displayMode}
          />

          <div
            style={{
              height: "0.6px",
              backgroundColor: "#F3F4F6",
              margin: "8px 0 24px 0",
            }}
          />

          <BreakdownSection
            title="Expenses"
            items={expensesData}
            total={totalExpenses}
            onHover={setExpensesHoveredIndex}
            hoveredIndex={expensesHoveredIndex}
            displayMode={displayMode}
          />
        </div>
      </div>
    </div>
  );
}