import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ChevronRight } from "lucide-react";

const customers = [
  { name: "O. Damilola", revenue: 89900, percentage: 100 },
  { name: "J. Aliyu", revenue: 61870, percentage: 69 },
  { name: "O. Darasimi", revenue: 53990, percentage: 60 },
  { name: "A. Ogechukwu", revenue: 48600, percentage: 54 },
  { name: "T. Bello", revenue: 33345, percentage: 37 },
];

export function TopCustomers() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "0.6px solid #E5E7EB",
        borderRadius: "8px",
        padding: "16px",
      }}
    >
      <h3
        style={{
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "-0.02em",
          color: "#374151",
          marginBottom: "4px",
        }}
      >
        Top Customers
      </h3>
      <p className="text-sm text-muted-foreground mb-4">by Revenue This Year</p>

      <div className="space-y-4">
        {customers.map((customer) => (
          <div key={customer.name}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{customer.name}</span>
              <span className="text-sm font-semibold">₦{customer.revenue.toLocaleString()}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${customer.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mt-4">
        More
        <ChevronRight className="h-4 w-4" />
      </button>

    </div>
  );
}