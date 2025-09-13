import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, ArrowUpRight, ArrowDownLeft } from "lucide-react";

const transactions = [
  {
    id: 1,
    type: "expense",
    amount: -45.32,
    description: "Grocery Store",
    category: "Food",
    date: "Today",
    merchant: "Whole Foods",
    icon: "🛒"
  },
  {
    id: 2,
    type: "income",
    amount: 2300.00,
    description: "Salary Deposit",
    category: "Income",
    date: "Yesterday",
    merchant: "TechCorp Inc",
    icon: "💼"
  },
  {
    id: 3,
    type: "expense",
    amount: -12.99,
    description: "Coffee Shop",
    category: "Food",
    date: "Yesterday",
    merchant: "Starbucks",
    icon: "☕"
  },
  {
    id: 4,
    type: "expense",
    amount: -89.99,
    description: "Online Shopping",
    category: "Shopping",
    date: "2 days ago",
    merchant: "Amazon",
    icon: "📦"
  },
  {
    id: 5,
    type: "expense",
    amount: -15.50,
    description: "Bus Pass",
    category: "Transport",
    date: "3 days ago",
    merchant: "City Transit",
    icon: "🚌"
  },
  {
    id: 6,
    type: "income",
    amount: 50.00,
    description: "Freelance Work",
    category: "Income",
    date: "3 days ago",
    merchant: "Client ABC",
    icon: "💻"
  }
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    "Food": "bg-chart-1 text-chart-1-foreground",
    "Transport": "bg-chart-2 text-chart-2-foreground",
    "Shopping": "bg-chart-3 text-chart-3-foreground",
    "Income": "bg-success text-success-foreground",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

export const RecentTransactions = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activity</CardDescription>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Transaction
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center gap-4 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
            <Avatar className="h-10 w-10">
              <AvatarFallback className="text-lg">
                {transaction.icon}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{transaction.description}</h4>
                <div className="flex items-center gap-2">
                  <span className={`font-bold ${
                    transaction.type === 'income' ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </span>
                  {transaction.type === 'income' ? 
                    <ArrowDownLeft className="h-4 w-4 text-success" /> :
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  }
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`text-xs ${getCategoryColor(transaction.category)}`}>
                    {transaction.category}
                  </Badge>
                  <span className="text-muted-foreground">{transaction.merchant}</span>
                </div>
                <span className="text-muted-foreground">{transaction.date}</span>
              </div>
            </div>
          </div>
        ))}
        
        <Button variant="outline" className="w-full">
          View All Transactions
        </Button>
      </CardContent>
    </Card>
  );
};