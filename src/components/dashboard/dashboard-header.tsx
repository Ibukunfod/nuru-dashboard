import { House, RefreshCw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
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
      {/* Left side - Logo and Dashboard text */}
      <div style={{ display: "flex", alignItems: "center" }}>
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

      {/* Right side - Last Refresh and Avatar */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Last Refresh */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <RefreshCw size={13} strokeWidth={2} style={{ color: "#6B7280" }} />
          <span style={{ fontSize: "12px", color: "#6B7280", whiteSpace: "nowrap" }}>
            Last refresh: <span style={{ fontWeight: 500 }}>TODAY 09:41 AM</span>
          </span>
        </div>

        {/* Avatar Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src="\my-notion-face-portrait.png" alt="User" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-32">
            <DropdownMenuGroup>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}