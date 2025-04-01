
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Shield, AlertTriangle, CheckCircle, User, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// Sample data for PPE compliance
const ppeComplianceData = [
  { name: 'Helmets', compliant: 92, noncompliant: 8 },
  { name: 'Vests', compliant: 95, noncompliant: 5 },
  { name: 'Safety Boots', compliant: 88, noncompliant: 12 },
  { name: 'Gloves', compliant: 76, noncompliant: 24 },
  { name: 'Eyewear', compliant: 81, noncompliant: 19 },
];

// Sample data for safety alerts
const safetyAlerts = [
  { id: 1, severity: 'high', message: 'Worker without helmet detected in Zone A', time: '10 minutes ago' },
  { id: 2, severity: 'medium', message: 'Unauthorized access at South entrance', time: '25 minutes ago' },
  { id: 3, severity: 'high', message: 'Multiple workers in restricted area B-7', time: '42 minutes ago' },
  { id: 4, severity: 'low', message: 'Worker approaching hazard zone C', time: '1 hour ago' },
];

// Sample data for zone access
const unauthorizedAccess = [
  { id: 1, location: 'Excavation Site', time: '09:45 AM', worker: 'Unknown Person' },
  { id: 2, location: 'Electrical Room', time: '11:23 AM', worker: 'John D. (No Clearance)' },
  { id: 3, location: 'Roof Access', time: '02:17 PM', worker: 'Unknown Person' },
];

const SafetyMonitoring = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Live Safety Alerts */}
      <Card className="lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Live Safety Alerts</CardTitle>
          <Shield className="h-4 w-4 text-dashboard-red" />
        </CardHeader>
        <CardContent className="space-y-4">
          {safetyAlerts.map((alert) => (
            <Alert key={alert.id} 
              className={
                alert.severity === 'high' ? 'alert-red' : 
                alert.severity === 'medium' ? 'alert-yellow' : 
                'alert-green'
              }
            >
              <div className="flex items-start">
                {alert.severity === 'high' ? (
                  <AlertTriangle className="h-4 w-4 mr-2" />
                ) : alert.severity === 'medium' ? (
                  <AlertTriangle className="h-4 w-4 mr-2" />
                ) : (
                  <CheckCircle className="h-4 w-4 mr-2" />
                )}
                <div>
                  <AlertTitle className="text-sm font-medium">{alert.message}</AlertTitle>
                  <AlertDescription className="text-xs mt-1">{alert.time}</AlertDescription>
                </div>
              </div>
            </Alert>
          ))}
        </CardContent>
      </Card>

      {/* PPE Compliance Chart */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">PPE Compliance</CardTitle>
          <div className="flex space-x-2 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dashboard-green rounded-full mr-1"></div>
              <span>Compliant</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-dashboard-red rounded-full mr-1"></div>
              <span>Non-compliant</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ppeComplianceData}
                layout="vertical"
                margin={{ top: 10, right: 30, left: 60, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis type="category" dataKey="name" />
                <Tooltip />
                <Bar dataKey="compliant" stackId="a" fill="#4ADE80" />
                <Bar dataKey="noncompliant" stackId="a" fill="#ea384c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Overall Compliance:</span>
              <span className="text-dashboard-green">86%</span>
            </div>
            <Progress value={86} className="h-2 bg-dashboard-red/20" indicatorClassName="bg-dashboard-green" />
          </div>
        </CardContent>
      </Card>

      {/* Hazardous Zone Access Control */}
      <Card className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Hazardous Zone Access Control</CardTitle>
          <Eye className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">Location</th>
                  <th className="text-left py-3 px-4">Time</th>
                  <th className="text-left py-3 px-4">Person</th>
                  <th className="text-left py-3 px-4">AI Detection</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {unauthorizedAccess.map((entry) => (
                  <tr key={entry.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 text-dashboard-red">{entry.location}</td>
                    <td className="py-3 px-4">{entry.time}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {entry.worker}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-16 h-12 bg-dashboard-darkblue border border-white/10 rounded flex items-center justify-center">
                        <Eye className="h-4 w-4 text-dashboard-red" />
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-dashboard-blue hover:underline text-xs">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyMonitoring;
