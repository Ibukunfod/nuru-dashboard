"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp } from "lucide-react";

const data = [
  { month: 'Jan', revenue: 65000, expenses: 32000 },
  { month: 'Feb', revenue: 59000, expenses: 35000 },
  { month: 'Mar', revenue: 62000, expenses: 38000 },
  { month: 'Apr', revenue: 68000, expenses: 42000 },
  { month: 'May', revenue: 71000, expenses: 45000 },
  { month: 'Jun', revenue: 75000, expenses: 31000 },
  { month: 'Jul', revenue: 85500, expenses: 35000 },
  { month: 'Aug', revenue: 78000, expenses: 39000 },
  { month: 'Sep', revenue: 72000, expenses: 48000 },
  { month: 'Oct', revenue: 79000, expenses: 51000 },
  { month: 'Nov', revenue: 83000, expenses: 52000 },
  { month: 'Dec', revenue: 86000, expenses: 50000 },
];

export function RevenueExpensesChart() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4" />
          <CardTitle>Revenue vs Expenses</CardTitle>
        </div>
        <Select defaultValue="monthly">
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12 }}
              stroke="#888"
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              stroke="#888"
              tickFormatter={(value) => `${value / 1000}K`}
            />
            <Tooltip 
              formatter={(value) => value !== undefined ? `₦${(value as number).toLocaleString()}` : ''}
              contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="revenue" 
              stroke="#10b981" 
              strokeWidth={2}
              name="Revenue"
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#ef4444" 
              strokeWidth={2}
              name="Expenses"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}