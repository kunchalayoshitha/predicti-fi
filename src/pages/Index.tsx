import { DashboardHeader } from "@/components/DashboardHeader";
import { QuickStats } from "@/components/QuickStats";
import { ExpenseChart } from "@/components/ExpenseChart";
import { BudgetOverview } from "@/components/BudgetOverview";
import { GoalsTracker } from "@/components/GoalsTracker";
import { RecentTransactions } from "@/components/RecentTransactions";
import heroImage from "@/assets/finance-hero.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      <DashboardHeader />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10 px-6 py-12">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={heroImage} 
            alt="Financial Dashboard Analytics" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI-Powered Student Finance Manager
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Smart expense categorization, predictive spending analysis, and personalized budget recommendations to help you achieve your financial goals.
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Quick Stats */}
        <QuickStats />

        {/* Main Dashboard Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-6">
            <ExpenseChart />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BudgetOverview />
            <GoalsTracker />
          </div>
        </div>

        {/* Recent Transactions */}
        <RecentTransactions />
      </main>
    </div>
  );
};

export default Index;