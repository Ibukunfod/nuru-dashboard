import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

const metrics = [
  {
    title: "Revenue",
    value: "₦237K",
    change: "+15%",
    changeType: "positive" as const,
  },
  {
    title: "Expenses",
    value: "₦82K",
    change: "-11%",
    changeType: "negative" as const,
  },
  {
    title: "Net Profit",
    value: "₦155K",
    change: "+17%",
    changeType: "positive" as const,
  },
  {
    title: "Avg. Order Value",
    value: "₦15K",
    change: "+9%",
    changeType: "positive" as const,
  },
];

export function MetricsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {metric.title}
            </CardTitle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View details</DropdownMenuItem>
                <DropdownMenuItem>Export data</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{metric.value}</div>
            <p className={`text-sm mt-1 ${
              metric.changeType === "positive" ? "text-green-600" : "text-red-600"
            }`}>
              {metric.change} vs prior period
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}