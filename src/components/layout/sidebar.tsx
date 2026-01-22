"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  House,
  RefreshCcw,
  File,
  UsersRound,
  Package,
  Command,
} from "lucide-react";

type NavItem = "dashboard" | "transactions" | "reports" | "customers" | "inventory";

interface NavItemConfig {
  id: NavItem;
  label: string;
  icon: typeof House;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: "dashboard", label: "Dashboard", icon: House },
  { id: "transactions", label: "Transactions", icon: RefreshCcw },
  { id: "reports", label: "Reports", icon: File },
  { id: "customers", label: "Customers", icon: UsersRound },
  { id: "inventory", label: "Inventory", icon: Package },
];

export function Sidebar() {
  const [selectedItem, setSelectedItem] = useState<NavItem>("dashboard");

  return (
    <aside
      className="w-[272px] flex flex-col"
      style={{
        backgroundColor: "#FBFBFB",
        borderRight: "0.6px solid #E5E7EB",
      }}
    >
      {/* Logo Section */}
      <div className="pt-[15px] pl-3">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Nuru"
            width={25}
            height={25}
            style={{ width: "25px", height: "25px" }}
          />
          <span
            className="text-[16px] font-medium leading-none"
            style={{ letterSpacing: "-0.03em" }}
          >
            Nuru
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-[11px]">
        <div style={{ height: "0.6px", backgroundColor: "#E5E7EB" }} />
      </div>

      {/* Quick Actions & Search */}
      <div style={{ marginTop: "10px", marginLeft: "9px" }}>
        <div className="flex items-center" style={{ gap: "8px" }}>
          <QuickActionsButton />
          <SearchButton />
        </div>
      </div>

      {/* Navigation Section - 12px below Quick Actions */}
      <nav className="flex-1 overflow-y-auto" style={{ marginTop: "12px", marginLeft: "9px" }}>
        {NAV_ITEMS.map((item, index) => (
          <NavButton
            key={item.id}
            item={item}
            isSelected={selectedItem === item.id}
            isFirst={index === 0}
            onClick={() => setSelectedItem(item.id)}
          />
        ))}
      </nav>
    </aside>
  );
}

function QuickActionsButton() {
  return (
    <button
      className="flex items-center relative"
      style={{
        width: "194px",
        height: "27px",
        backgroundColor: "#FFFFFF",
        border: "none",
        borderRadius: "6px",
        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
        paddingLeft: "8px",
      }}
    >
      <div style={{ width: "13px", height: "14.4px", flexShrink: 0 }}>
        <Image
          src="/quick-actions-icon.svg"
          alt=""
          width={13}
          height={14.4}
          style={{ width: "13px", height: "14.4px" }}
        />
      </div>

      <span
        className="font-medium"
        style={{
          marginLeft: "5px",
          fontSize: "14px",
          letterSpacing: "-0.03em",
          color: "#111827",
          lineHeight: "1",
          display: "inline-block",
          transform: "translateY(-0.5px)",
        }}
      >
        Quick actions
      </span>

      <div
        className="absolute flex items-center justify-center font-bold"
        style={{
          right: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "#FBFBFB",
          color: "#6B7280",
          fontSize: "8px",
          height: "19px",
          paddingLeft: "3px",
          paddingRight: "3px",
          borderRadius: "5px",
          border: "0.6px solid #E5E7EB",
          display: "flex",
          alignItems: "center",
          gap: "2px",
        }}
      >
        <Command size={9} strokeWidth={2.5} />
        <span style={{ fontSize: "10px", lineHeight: "1", fontWeight: "medium" }}>N</span>
      </div>
    </button>
  );
}

function SearchButton() {
  return (
    <button
      className="flex items-center relative"
      style={{
        width: "52px",
        height: "27px",
        backgroundColor: "#FFFFFF",
        border: "none",
        borderRadius: "6px",
        boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.08)",
        cursor: "pointer",
        paddingLeft: "6px",
      }}
    >
      <Search size={16} strokeWidth={2} style={{ color: "#111827" }} />

      <div
        className="absolute flex items-center justify-center"
        style={{
          right: "4px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "19px",
          height: "19px",
          backgroundColor: "#FBFBFB",
          border: "0.6px solid #E5E7EB",
          borderRadius: "5px",
        }}
      >
        <span style={{ color: "#6B7280", fontSize: "12px", lineHeight: "1" }}>/</span>
      </div>
    </button>
  );
}

interface NavButtonProps {
  item: NavItemConfig;
  isSelected: boolean;
  isFirst: boolean;
  onClick: () => void;
}

function NavButton({ item, isSelected, isFirst, onClick }: NavButtonProps) {
  const Icon = item.icon;

  return (
    <button
      onClick={onClick}
      className="flex items-center font-medium"
      style={{
        width: "254px",
        height: "29px",
        backgroundColor: isSelected ? "#EDEEF1" : "transparent",
        border: "none",
        borderRadius: "6px",
        paddingLeft: "9px",
        marginTop: isFirst ? "0" : "3px",
        cursor: "pointer",
      }}
    >
      <Icon size={14} strokeWidth={2} style={{ color: "#111827" }} />
      <span
        style={{
          marginLeft: "8px",
          fontSize: "14px",
          letterSpacing: "-0.03em",
          color: "#111827",
          lineHeight: "1",
        }}
      >
        {item.label}
      </span>
    </button>
  );
}