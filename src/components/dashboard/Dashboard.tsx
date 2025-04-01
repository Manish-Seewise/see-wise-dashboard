
import React, { useState } from 'react';
import Header from '../layout/Header';
import Navigation from '../layout/Navigation';
import SafetyMonitoring from './SafetyMonitoring';
import WorkforceTracking from './WorkforceTracking';
import EquipmentMonitoring from './EquipmentMonitoring';
import QualityControl from './QualityControl';
import ReportsSection from './ReportsSection';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'safety':
        return <SafetyMonitoring />;
      case 'workforce':
        return <WorkforceTracking />;
      case 'equipment':
        return <EquipmentMonitoring />;
      case 'quality':
        return <QualityControl />;
      case 'reports':
        return <ReportsSection />;
      default:
        // Home tab shows an overview with one widget from each section
        return (
          <div className="p-6 space-y-6">
            <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-3">
                <SafetyMonitoring />
              </div>
              <div className="lg:col-span-3">
                <WorkforceTracking />
              </div>
              <div className="lg:col-span-3">
                <EquipmentMonitoring />
              </div>
              <div className="lg:col-span-3">
                <QualityControl />
              </div>
              <div className="lg:col-span-3">
                <ReportsSection />
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Dashboard;
