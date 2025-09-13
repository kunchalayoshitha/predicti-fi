import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const monthlyData = [
  { month: 'Jan', expenses: 1200, income: 2000 },
  { month: 'Feb', expenses: 1100, income: 2000 },
  { month: 'Mar', expenses: 1350, income: 2200 },
  { month: 'Apr', expenses: 1250, income: 2100 },
  { month: 'May', expenses: 1400, income: 2300 },
  { month: 'Jun', expenses: 1300, income: 2000 },
];

const categoryData = [
  { name: 'Food', value: 400, color: 'hsl(var(--chart-1))' },
  { name: 'Transport', value: 200, color: 'hsl(var(--chart-2))' },
  { name: 'Entertainment', value: 150, color: 'hsl(var(--chart-3))' },
  { name: 'Books', value: 100, color: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 80, color: 'hsl(var(--chart-5))' },
];

const trendData = [
  { day: 'Mon', spending: 45 },
  { day: 'Tue', spending: 32 },
  { day: 'Wed', spending: 67 },
  { day: 'Thu', spending: 28 },
  { day: 'Fri', spending: 89 },
  { day: 'Sat', spending: 156 },
  { day: 'Sun', spending: 78 },
];

export const ExpenseChart = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Monthly Overview</CardTitle>
          <CardDescription>Income vs Expenses over the last 6 months</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="income" fill="hsl(var(--chart-2))" name="Income" />
              <Bar dataKey="expenses" fill="hsl(var(--chart-1))" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Spending by Category</CardTitle>
          <CardDescription>This month's breakdown</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardHeader>
          <CardTitle>Weekly Spending Trend</CardTitle>
          <CardDescription>AI-powered predictive analysis of your spending patterns</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="spending" 
                stroke="hsl(var(--chart-3))" 
                strokeWidth={3}
                dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};