import { Bell, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const DashboardHeader = () => {
  return (
    <header className="bg-gradient-to-r from-primary to-accent p-6 text-primary-foreground">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Finance Manager</h1>
          <p className="text-primary-foreground/80">Welcome back, Alex!</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20">
            <Settings className="h-5 w-5" />
          </Button>
          <Avatar>
            <AvatarImage src="/api/placeholder/32/32" />
            <AvatarFallback className="bg-primary-foreground text-primary">AS</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};