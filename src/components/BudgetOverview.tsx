import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const budgetCategories = [
  {
    category: "Food & Dining",
    spent: 320,
    budget: 400,
    color: "chart-1",
    trend: "down",
    trendValue: -5.2
  },
  {
    category: "Transportation",
    spent: 180,
    budget: 200,
    color: "chart-2",
    trend: "up",
    trendValue: 12.3
  },
  {
    category: "Entertainment",
    spent: 90,
    budget: 150,
    color: "chart-3",
    trend: "down",
    trendValue: -8.1
  },
  {
    category: "Books & Education",
    spent: 75,
    budget: 100,
    color: "chart-4",
    trend: "up",
    trendValue: 3.5
  }
];

const getBudgetStatus = (spent: number, budget: number) => {
  const percentage = (spent / budget) * 100;
  if (percentage >= 90) return { status: "danger", icon: AlertTriangle, text: "Over Budget" };
  if (percentage >= 75) return { status: "warning", icon: AlertTriangle, text: "Near Limit" };
  return { status: "safe", icon: CheckCircle, text: "On Track" };
};

export const BudgetOverview = () => {
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0);
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.budget, 0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>Your spending vs budget for this month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Total Budget Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Total Budget</h4>
            <span className="text-sm text-muted-foreground">
              ${totalSpent} / ${totalBudget}
            </span>
          </div>
          <Progress 
            value={(totalSpent / totalBudget) * 100} 
            className="h-3"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% used
            </span>
            <span className="font-medium text-success">
              ${totalBudget - totalSpent} remaining
            </span>
          </div>
        </div>

        {/* Category Breakdowns */}
        <div className="space-y-4">
          <h4 className="font-semibold">By Category</h4>
          {budgetCategories.map((cat) => {
            const percentage = (cat.spent / cat.budget) * 100;
            const status = getBudgetStatus(cat.spent, cat.budget);
            const StatusIcon = status.icon;

            return (
              <div key={cat.category} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{cat.category}</span>
                    <Badge 
                      variant={status.status === "danger" ? "destructive" : 
                              status.status === "warning" ? "secondary" : "outline"}
                      className="h-5 text-xs"
                    >
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {status.text}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      ${cat.spent} / ${cat.budget}
                    </span>
                    <div className={`flex items-center gap-1 text-xs ${
                      cat.trend === 'up' ? 'text-destructive' : 'text-success'
                    }`}>
                      {cat.trend === 'up' ? 
                        <TrendingUp className="h-3 w-3" /> : 
                        <TrendingDown className="h-3 w-3" />
                      }
                      {Math.abs(cat.trendValue)}%
                    </div>
                  </div>
                </div>
                <Progress 
                  value={percentage} 
                  className="h-2"
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};