import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Target, Calendar, TrendingUp } from "lucide-react";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    description: "Save for unexpected expenses",
    target: 5000,
    current: 3200,
    deadline: "Dec 2024",
    category: "Savings",
    priority: "high"
  },
  {
    id: 2,
    title: "New Laptop",
    description: "MacBook Pro for coding projects",
    target: 2500,
    current: 1800,
    deadline: "Sep 2024",
    category: "Tech",
    priority: "medium"
  },
  {
    id: 3,
    title: "Summer Vacation",
    description: "Trip to Europe with friends",
    target: 3000,
    current: 850,
    deadline: "Jun 2025",
    category: "Travel",
    priority: "low"
  },
  {
    id: 4,
    title: "Investment Portfolio",
    description: "Start investing in index funds",
    target: 1000,
    current: 200,
    deadline: "Nov 2024",
    category: "Investment",
    priority: "high"
  }
];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'destructive';
    case 'medium': return 'secondary';
    case 'low': return 'outline';
    default: return 'outline';
  }
};

const getProgressColor = (percentage: number) => {
  if (percentage >= 80) return 'text-success';
  if (percentage >= 50) return 'text-warning';
  return 'text-muted-foreground';
};

export const GoalsTracker = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Financial Goals
            </CardTitle>
            <CardDescription>Track your progress towards financial milestones</CardDescription>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Goal
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {goals.map((goal) => {
          const percentage = (goal.current / goal.target) * 100;
          const remaining = goal.target - goal.current;
          
          return (
            <div key={goal.id} className="space-y-3 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold">{goal.title}</h4>
                    <Badge variant={getPriorityColor(goal.priority)} className="text-xs">
                      {goal.priority}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {goal.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {goal.deadline}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      ${remaining.toLocaleString()} to go
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">${goal.current.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">of ${goal.target.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${getProgressColor(percentage)}`}>
                    {percentage.toFixed(1)}% Complete
                  </span>
                  <span className="text-muted-foreground">
                    {percentage >= 100 ? '🎉 Goal Achieved!' : `$${remaining.toLocaleString()} remaining`}
                  </span>
                </div>
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className="h-2"
                />
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};