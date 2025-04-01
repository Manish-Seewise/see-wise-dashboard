
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, AlertTriangle, Clock, MapPin } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

// Sample data for equipment utilization
const equipmentUtilizationData = [
  { name: 'Active', value: 65, color: '#4ADE80' },
  { name: 'Idle', value: 25, color: '#FBBF24' },
  { name: 'Maintenance', value: 10, color: '#ea384c' },
];

// Sample data for maintenance alerts
const maintenanceAlerts = [
  { id: 1, equipment: 'Excavator #103', issue: 'Oil pressure low', urgency: 'High', dueDate: 'Today' },
  { id: 2, equipment: 'Crane #A22', issue: 'Scheduled maintenance', urgency: 'Medium', dueDate: 'Tomorrow' },
  { id: 3, equipment: 'Bulldozer #B11', issue: 'Fuel level low', urgency: 'Low', dueDate: '3 days' },
  { id: 4, equipment: 'Generator #G05', issue: 'Overheating detected', urgency: 'High', dueDate: 'Today' },
  { id: 5, equipment: 'Concrete Mixer #M08', issue: 'Unusual vibration', urgency: 'Medium', dueDate: '2 days' },
];

// Sample data for equipment location
const equipmentLocations = [
  { id: 1, name: 'Excavator #103', location: 'North Section B2', lastUpdated: '2 mins ago', status: 'Active' },
  { id: 2, name: 'Crane #A22', location: 'South Tower', lastUpdated: '5 mins ago', status: 'Idle' },
  { id: 3, name: 'Bulldozer #B11', location: 'East Perimeter', lastUpdated: '12 mins ago', status: 'Active' },
];

const EquipmentMonitoring = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Heavy Equipment Utilization */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Equipment Utilization</CardTitle>
          <Construction className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={equipmentUtilizationData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {equipmentUtilizationData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#2d3748' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center text-sm">
            <div className="bg-dashboard-darkblue rounded-lg p-2">
              <div className="font-medium">Total Units</div>
              <div className="text-2xl font-bold">42</div>
            </div>
            <div className="bg-dashboard-darkblue rounded-lg p-2">
              <div className="font-medium">Operational</div>
              <div className="text-2xl font-bold text-dashboard-green">38</div>
            </div>
            <div className="bg-dashboard-darkblue rounded-lg p-2">
              <div className="font-medium">In Repair</div>
              <div className="text-2xl font-bold text-dashboard-red">4</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Predictive Maintenance Alerts */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Predictive Maintenance Alerts</CardTitle>
          <AlertTriangle className="h-4 w-4 text-dashboard-yellow" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">Equipment</th>
                  <th className="text-left py-3 px-4">Issue</th>
                  <th className="text-left py-3 px-4">Urgency</th>
                  <th className="text-left py-3 px-4">Due Date</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceAlerts.map((alert) => (
                  <tr key={alert.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium">{alert.equipment}</td>
                    <td className="py-3 px-4">{alert.issue}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.urgency === 'High' ? 'bg-dashboard-red/20 text-dashboard-red' :
                        alert.urgency === 'Medium' ? 'bg-dashboard-yellow/20 text-dashboard-yellow' :
                        'bg-dashboard-green/20 text-dashboard-green'
                      }`}>
                        {alert.urgency}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {alert.dueDate}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <button className="bg-dashboard-blue/20 text-dashboard-blue px-2 py-1 rounded text-xs hover:bg-dashboard-blue/30 transition-colors">
                        Schedule
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Asset Tracking & Theft Prevention */}
      <Card className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Equipment Location Tracking</CardTitle>
          <MapPin className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="mb-4 h-64 bg-dashboard-darkblue rounded-lg border border-white/10 flex items-center justify-center">
            <div className="text-dashboard-gray">
              Interactive Map View
              <div className="text-xs mt-1">Click on equipment icons to view details</div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">Equipment</th>
                  <th className="text-left py-3 px-4">Current Location</th>
                  <th className="text-left py-3 px-4">Last Updated</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {equipmentLocations.map((item) => (
                  <tr key={item.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4 font-medium">{item.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1 text-dashboard-blue" />
                        {item.location}
                      </div>
                    </td>
                    <td className="py-3 px-4">{item.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.status === 'Active' ? 'bg-dashboard-green/20 text-dashboard-green' :
                        'bg-dashboard-yellow/20 text-dashboard-yellow'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-dashboard-blue hover:underline text-xs">Track</button>
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

export default EquipmentMonitoring;
