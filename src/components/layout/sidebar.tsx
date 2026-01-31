"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { useEffect } from "react";
import {
  Search,
  House,
  RefreshCcw,
  File,
  UsersRound,
  Package,
  Command,
  Sparkles,
  User,
  CreditCard,
  Bell,
  LogOut,
  ChevronsUpDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type NavItem = "dashboard" | "transactions" | "reports" | "customers" | "inventory";

interface NavItemConfig {
  id: NavItem;
  label: string;
  icon: typeof House;
  href: string;
}

const NAV_ITEMS: NavItemConfig[] = [
  { id: "dashboard", label: "Dashboard", icon: House, href: "/" },
  { id: "transactions", label: "Transactions", icon: RefreshCcw, href: "/transactions" },
  { id: "reports", label: "Reports", icon: File, href: "/reports" },
  { id: "customers", label: "Customers", icon: UsersRound, href: "/customers" },
  { id: "inventory", label: "Inventory", icon: Package, href: "/inventory" },
];

export function Sidebar() {
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.altKey) && e.key.toLowerCase() === "n") {
        e.preventDefault();
        toast.info("Quick actions is still in development", {
          description: "This feature will be available soon.",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <aside
      className="w-[240px] flex flex-col"
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

      {/* Navigation Section */}
      <nav
        className="flex-1 overflow-y-auto"
        style={{ marginTop: "12px", marginLeft: "9px" }}
      >
        {NAV_ITEMS.map((item, index) => (
          <NavButton
            key={item.id}
            item={item}
            isSelected={pathname === item.href}
            isFirst={index === 0}
          />
        ))}
      </nav>

      {/* User Profile Section */}
      <div style={{ padding: "8px" }}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              className="w-full flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-100/80 transition-all duration-200"
              style={{
                border: "0.6px solid #E5E7EB",
                backgroundColor: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <Avatar className="h-7 w-7">
                <AvatarImage src="https://github.com/shadcn.png" alt="Daniel Parker" />
                <AvatarFallback className="bg-gray-200 text-gray-700 text-xs font-medium">
                  DP
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 text-left overflow-hidden">
                <div
                  className="font-medium truncate"
                  style={{
                    fontSize: "12px",
                    color: "#111827",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Daniel Parker
                </div>
                <div
                  className="truncate"
                  style={{
                    fontSize: "10px",
                    color: "#6B7280",
                  }}
                >
                  daniel.parker@gmail.com
                </div>
              </div>
              <ChevronsUpDown
                size={12}
                strokeWidth={2}
                className="text-gray-400 flex-shrink-0"
              />
            </button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            side="top"
            className="w-40 mb-1.5"
            sideOffset={4}
            style={{
              backgroundColor: "#FFFFFF",
              border: "0.6px solid #E5E7EB",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
            }}
          >
            {/* Upgrade Section */}
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "6px 8px",
                }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span>Upgrade to Pro</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator style={{ backgroundColor: "#E5E7EB", height: "0.6px", margin: "2px 0" }} />

            {/* Account Settings */}
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "6px 8px",
                }}
              >
                <User className="h-3.5 w-3.5" />
                <span>Account</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "6px 8px",
                }}
              >
                <CreditCard className="h-3.5 w-3.5" />
                <span>Billing</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "6px 8px",
                }}
              >
                <Bell className="h-3.5 w-3.5" />
                <span>Notifications</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator style={{ backgroundColor: "#E5E7EB", height: "0.6px", margin: "2px 0" }} />

            {/* Log Out */}
            <DropdownMenuGroup>
              <DropdownMenuItem
                className="cursor-pointer gap-1.5 text-red-600 focus:text-red-600 focus:bg-red-50"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  padding: "6px 8px",
                }}
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </aside>
  );
}

function QuickActionsButton() {
  const handleClick = () => {
    toast.info("Quick actions is still in development", {
      description: "This feature will be available soon.",
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center relative"
      style={{
        width: "162px",
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
        <span style={{ fontSize: "10px", lineHeight: "1", fontWeight: "medium" }}>
          N
        </span>
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
        <span style={{ color: "#6B7280", fontSize: "12px", lineHeight: "1" }}>
          /
        </span>
      </div>
    </button>
  );
}

interface NavButtonProps {
  item: NavItemConfig;
  isSelected: boolean;
  isFirst: boolean;
}

function NavButton({ item, isSelected, isFirst }: NavButtonProps) {
  const Icon = item.icon;

  return (
    <Link href={item.href}>
      <button
        className="flex items-center font-medium"
        style={{
          width: "222px",
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
    </Link>
  );
}