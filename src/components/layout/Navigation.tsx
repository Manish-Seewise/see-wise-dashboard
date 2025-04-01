
import React, { useState } from 'react';
import { Home, Shield, Users, Construction, CheckSquare, BarChart } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'safety', label: 'Safety', icon: <Shield size={18} /> },
    { id: 'workforce', label: 'Workforce', icon: <Users size={18} /> },
    { id: 'equipment', label: 'Equipment', icon: <Construction size={18} /> },
    { id: 'quality', label: 'Quality Control', icon: <CheckSquare size={18} /> },
    { id: 'reports', label: 'Reports', icon: <BarChart size={18} /> },
  ];

  return (
    <nav className="bg-dashboard-darkblue border-b border-white/10 px-4">
      <div className="flex space-x-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-tab ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
