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

function BreakdownSection({
  title,
  total,
  items,
  onHover,
  hoveredIndex,
}: {
  title: string;
  total: number;
  items: BreakdownItem[];
  onHover: (index: number | null) => void;
  hoveredIndex: number | null;
}) {
  const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div>
      {/* Section Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "12px",
        }}
      >
        <h4
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#111827",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h4>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#111827",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          ₦{total.toLocaleString()}
        </span>
      </div>

      {/* Segmented Bar */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "10px",
          borderRadius: "9999px",
          overflow: "hidden",
          marginBottom: "16px",
          backgroundColor: "#F3F4F6",
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
                transition: "opacity 0.15s ease",
                opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.6,
                cursor: "default",
              }}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
              role="img"
              aria-label={`${item.label}: ${item.amount}`}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item, index) => {
          const isHovered = hoveredIndex === index;
          
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "opacity 0.15s ease",
                opacity: hoveredIndex === null ? 1 : isHovered ? 1 : 0.5,
              }}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: item.color,
                    flexShrink: 0,
                  }}
                  aria-hidden="true"
                />
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  {item.label}
                </span>
              </div>
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#6B7280",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                ₦{item.amount.toLocaleString()}
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

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0);
  const totalExpenses = expensesData.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      {/* Header */}
      <div style={{ marginTop: "1px", marginBottom: "12px" }}>
        <h3
          style={{
            fontSize: "14px",
            fontWeight: 500,
            letterSpacing: "-0.02em",
            color: "#374151",
          }}
        >
          Financial Breakdown
        </h3>
      </div>

      {/* Revenue Section */}
      <BreakdownSection
        title="Revenue"
        total={totalRevenue}
        items={revenueData}
        onHover={setRevenueHoveredIndex}
        hoveredIndex={revenueHoveredIndex}
      />

      {/* Divider */}
      <div
        style={{
          height: "0.6px",
          backgroundColor: "#E5E7EB",
          margin: "20px 0",
        }}
      />

      {/* Expenses Section */}
      <BreakdownSection
        title="Expenses"
        total={totalExpenses}
        items={expensesData}
        onHover={setExpensesHoveredIndex}
        hoveredIndex={expensesHoveredIndex}
      />
    </div>
  );
}