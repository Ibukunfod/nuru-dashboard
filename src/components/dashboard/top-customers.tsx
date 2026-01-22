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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4" />
          <CardTitle>Top Customers</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
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
      </CardContent>
    </Card>
  );
}