
import React from 'react';
import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Clock from './Clock';

const Header = () => {
  return (
    <header className="bg-dashboard-darkblue p-4 border-b border-white/10 flex justify-between items-center">
      <div className="flex items-center">
        <div className="mr-2 flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-dashboard-blue flex items-center justify-center">
            <span className="font-bold text-white">SW</span>
          </div>
          <h1 className="text-xl font-bold">SeeWise AI Construction Monitoring</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <Clock />
        
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-dashboard-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h3 className="font-medium">Notifications</h3>
              <div className="text-sm alert-red p-2 rounded-md">
                PPE Violation detected at South Wing - 5 minutes ago
              </div>
              <div className="text-sm alert-yellow p-2 rounded-md">
                Excavator #E102 maintenance due - 30 minutes ago
              </div>
              <div className="text-sm alert-red p-2 rounded-md">
                Unauthorized access at Site B entrance - 45 minutes ago
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-dashboard-blue flex items-center justify-center">
            <User size={16} />
          </div>
          <span className="text-sm font-medium">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
