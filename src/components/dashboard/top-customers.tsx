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
    <div style={{ marginBottom: "24px" }}>
      {/* Section Header */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
        <h4 style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{title}</h4>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "#111827", fontVariantNumeric: "tabular-nums" }}>
          ₦{total.toLocaleString()}
        </span>
      </div>

      {/* Segmented Bar with Subtle Gaps */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "8px", // Maintains the thickness
          borderRadius: "2px", // Slightly less rounded for a more technical look
          overflow: "hidden",
          marginBottom: "16px",
          backgroundColor: "transparent", // Transparent so gaps show the card background
          cursor: "pointer",
          gap: "2.5px", // The subtle enterprise gap
        }}
      >
        {items.map((item, index) => {
          const percentage = (item.amount / totalAmount) * 100;
          return (
            <div
              key={index}
              style={{
                width: `${percentage}%`,
                backgroundColor: item.color,
                transition: "all 0.2s ease",
                opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.3,
                borderRadius: "2px", // Gives each segment slightly softened edges
              }}
              onMouseEnter={() => onHover(index)}
              onMouseLeave={() => onHover(null)}
            />
          );
        })}
      </div>

      {/* Static Legend (Reacts to Bar Hover) */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "all 0.2s ease",
              opacity: hoveredIndex === null ? 1 : hoveredIndex === index ? 1 : 0.4,
              transform: hoveredIndex === index ? "translateX(4px)" : "translateX(0)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div 
                style={{ 
                  width: "6px", 
                  height: "6px", 
                  borderRadius: "50%", 
                  backgroundColor: item.color,
                  boxShadow: hoveredIndex === index ? `0 0 8px ${item.color}80` : "none" 
                }} 
              />
              <span style={{ 
                fontSize: "13px", 
                fontWeight: hoveredIndex === index ? 600 : 500, 
                color: "#111827",
                transition: "font-weight 0.2s ease"
              }}>
                {item.label}
              </span>
            </div>
            <span style={{ fontSize: "12px", color: "#6B7280", fontVariantNumeric: "tabular-nums" }}>
              ₦{item.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopCustomers() {
  const [revIdx, setRevIdx] = useState<number | null>(null);
  const [expIdx, setExpIdx] = useState<number | null>(null);

  const totalRevenue = revenueData.reduce((s, i) => s + i.amount, 0);
  const totalExpenses = expensesData.reduce((s, i) => s + i.amount, 0);

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
      {/* Fixed Header - No extra horizontal padding to keep title aligned with border */}
      <div style={{ padding: "12px 10px 8px 10px", backgroundColor: "#FFFFFF", zIndex: 1 }}>
        <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#374151" }}>Financial Breakdown</h3>
      </div>

      {/* Content Container - Extra horizontal padding added here */}
      <div 
        className="custom-scrollbar"
        style={{ 
          flex: 1, 
          overflowY: "auto", 
          padding: "0 18px", // Increased horizontal padding for the "inset" vibe
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div style={{ paddingTop: "12px", paddingBottom: "4px" }}>
          <BreakdownSection
            title="Revenue"
            items={revenueData}
            total={totalRevenue}
            onHover={setRevIdx}
            hoveredIndex={revIdx}
          />

          <div 
            style={{ 
              height: "0.6px", 
              backgroundColor: "#F3F4F6", 
              margin: "8px 0 24px 0" 
            }} 
          />

          <BreakdownSection
            title="Expenses"
            items={expensesData}
            total={totalExpenses}
            onHover={setExpIdx}
            hoveredIndex={expIdx}
          />
        </div>
      </div>
    </div>
  );
}