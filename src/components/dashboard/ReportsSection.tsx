
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, LineChart, Calendar, Download, AlertTriangle, CheckCircle } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart as RechartsLineChart, Line } from 'recharts';

// Sample data for safety trends
const safetyTrendsData = [
  { name: 'Week 1', violations: 12, incidents: 2, nearMisses: 5 },
  { name: 'Week 2', violations: 8, incidents: 1, nearMisses: 4 },
  { name: 'Week 3', violations: 15, incidents: 0, nearMisses: 7 },
  { name: 'Week 4', violations: 10, incidents: 1, nearMisses: 3 },
];

// Sample data for productivity trends
const productivityData = [
  { name: 'Mon', actual: 72, expected: 80 },
  { name: 'Tue', actual: 85, expected: 80 },
  { name: 'Wed', actual: 78, expected: 80 },
  { name: 'Thu', actual: 90, expected: 80 },
  { name: 'Fri', actual: 85, expected: 80 },
];

// Sample insights data
const insights = [
  { id: 1, type: 'warning', message: 'Safety violations increased by 25% in Zone B compared to last week', action: 'Investigate' },
  { id: 2, type: 'success', message: 'Team C productivity exceeded targets by 15% for the third consecutive week', action: 'View Details' },
  { id: 3, type: 'warning', message: 'Three excavators show early signs of maintenance needs', action: 'Schedule' },
  { id: 4, type: 'success', message: 'Quality control compliance reached 98% this month', action: 'View Report' },
];

// Sample reports data
const availableReports = [
  { id: 1, name: 'Monthly Safety Summary', type: 'PDF', date: 'June 2023' },
  { id: 2, name: 'Workforce Efficiency Analysis', type: 'Excel', date: 'Q2 2023' },
  { id: 3, name: 'Equipment Utilization Report', type: 'PDF', date: 'May 2023' },
  { id: 4, name: 'Construction Quality Metrics', type: 'PDF', date: 'June 2023' },
];

const ReportsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Safety Trends */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Safety Trends</CardTitle>
          <BarChart className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart
                data={safetyTrendsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="name" stroke="#8E9196" />
                <YAxis stroke="#8E9196" />
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#2d3748' }} />
                <Legend />
                <Bar dataKey="violations" fill="#ea384c" name="Safety Violations" />
                <Bar dataKey="incidents" fill="#9b87f5" name="Incidents" />
                <Bar dataKey="nearMisses" fill="#FBBF24" name="Near Misses" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* AI-Generated Insights */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">AI-Generated Insights</CardTitle>
          <div className="flex items-center gap-1 text-dashboard-blue text-xs">
            <span>POWERED BY</span>
            <span className="font-bold">AI</span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {insights.map((insight) => (
              <div key={insight.id} className="bg-dashboard-darkblue rounded-lg p-3 border border-white/10">
                <div className="flex gap-2">
                  {insight.type === 'warning' ? (
                    <AlertTriangle className="h-4 w-4 text-dashboard-yellow shrink-0 mt-0.5" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-dashboard-green shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="text-sm">{insight.message}</p>
                    <button className="text-dashboard-blue text-xs mt-1 hover:underline">
                      {insight.action}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Productivity Comparison */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Productivity Comparison</CardTitle>
          <LineChart className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart
                data={productivityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="name" stroke="#8E9196" />
                <YAxis stroke="#8E9196" />
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#2d3748' }} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="expected" 
                  stroke="#8E9196" 
                  strokeDasharray="5 5" 
                  name="Expected Productivity"
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#4ADE80" 
                  activeDot={{ r: 8 }} 
                  name="Actual Productivity"
                  strokeWidth={2}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-4">
            <div className="bg-dashboard-darkblue rounded-lg p-3 text-center">
              <div className="text-sm text-dashboard-gray">Weekly Average</div>
              <div className="text-xl font-bold text-dashboard-green">82%</div>
              <div className="text-xs text-dashboard-green">+2% vs target</div>
            </div>
            <div className="bg-dashboard-darkblue rounded-lg p-3 text-center">
              <div className="text-sm text-dashboard-gray">AI Prediction</div>
              <div className="text-xl font-bold text-dashboard-blue">88%</div>
              <div className="text-xs text-dashboard-blue">Next week forecast</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Downloadable Reports */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Downloadable Reports</CardTitle>
          <Calendar className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {availableReports.map((report) => (
              <div key={report.id} className="flex justify-between items-center bg-dashboard-darkblue rounded-lg p-3 border border-white/10">
                <div>
                  <div className="font-medium text-sm">{report.name}</div>
                  <div className="text-xs text-dashboard-gray">{report.date}</div>
                </div>
                <button className="bg-dashboard-blue/20 text-dashboard-blue px-2 py-1 rounded text-xs hover:bg-dashboard-blue/30 transition-colors flex items-center gap-1">
                  <Download className="h-3 w-3" />
                  {report.type}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="bg-dashboard-darkblue border border-white/10 rounded-md py-2 text-xs hover:bg-white/5 transition-colors">
              Custom Report
            </button>
            <button className="bg-dashboard-blue text-white rounded-md py-2 text-xs hover:bg-dashboard-blue/80 transition-colors">
              Schedule Reports
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsSection;
