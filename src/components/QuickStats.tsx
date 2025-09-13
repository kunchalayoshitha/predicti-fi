import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, DollarSign, CreditCard, Wallet, Target } from "lucide-react";

const stats = [
  {
    title: "Total Balance",
    value: "$4,850.32",
    change: "+12.5%",
    trend: "up",
    description: "Across all accounts",
    icon: Wallet,
    color: "text-primary"
  },
  {
    title: "Monthly Income",
    value: "$2,300.00",
    change: "+8.2%",
    trend: "up",
    description: "This month",
    icon: DollarSign,
    color: "text-success"
  },
  {
    title: "Monthly Expenses",
    value: "$1,295.50",
    change: "-3.1%",
    trend: "down",
    description: "This month",
    icon: CreditCard,
    color: "text-chart-1"
  },
  {
    title: "Savings Rate",
    value: "43.6%",
    change: "+5.8%",
    trend: "up",
    description: "Of total income",
    icon: Target,
    color: "text-accent"
  }
];

export const QuickStats = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
        
        return (
          <Card key={stat.title} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <Icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className={`flex items-center gap-1 ${
                  stat.trend === 'up' ? 'text-success' : 'text-destructive'
                }`}>
                  <TrendIcon className="h-3 w-3" />
                  {stat.change}
                </div>
                <span>{stat.description}</span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};