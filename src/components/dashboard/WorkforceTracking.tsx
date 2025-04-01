
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Clock, Activity, Calendar } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

// Sample data for attendance trends
const attendanceData = [
  { name: 'Mon', workers: 45 },
  { name: 'Tue', workers: 52 },
  { name: 'Wed', workers: 49 },
  { name: 'Thu', workers: 50 },
  { name: 'Fri', workers: 46 },
  { name: 'Sat', workers: 30 },
  { name: 'Sun', workers: 10 },
];

// Sample data for shift completion
const shiftData = [
  { name: 'Completed', value: 85, color: '#4ADE80' },
  { name: 'Partial', value: 10, color: '#FBBF24' },
  { name: 'Incomplete', value: 5, color: '#ea384c' },
];

// Sample data for worker efficiency
const workerEfficiency = [
  { id: 1, name: 'Team A', role: 'Concrete', efficiency: 92, status: 'Excellent' },
  { id: 2, name: 'Team B', role: 'Electrical', efficiency: 88, status: 'Good' },
  { id: 3, name: 'Team C', role: 'Plumbing', efficiency: 76, status: 'Average' },
  { id: 4, name: 'Team D', role: 'Carpentry', efficiency: 95, status: 'Excellent' },
  { id: 5, name: 'Team E', role: 'Steel Work', efficiency: 83, status: 'Good' },
];

const COLORS = ['#4ADE80', '#FBBF24', '#ea384c'];

const WorkforceTracking = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {/* Worker Attendance & Productivity */}
      <Card className="lg:col-span-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Worker Attendance & Productivity</CardTitle>
          <Users className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-dashboard-darkblue rounded-lg p-4 flex flex-col items-center justify-center">
              <span className="text-sm text-dashboard-gray mb-1">Active Workers</span>
              <span className="text-3xl font-bold text-dashboard-blue">42</span>
              <span className="text-xs text-dashboard-green mt-1">+5 from yesterday</span>
            </div>
            <div className="bg-dashboard-darkblue rounded-lg p-4 flex flex-col items-center justify-center">
              <span className="text-sm text-dashboard-gray mb-1">Expected Today</span>
              <span className="text-3xl font-bold">50</span>
              <span className="text-xs text-dashboard-yellow mt-1">8 pending arrival</span>
            </div>
            <div className="bg-dashboard-darkblue rounded-lg p-4 flex flex-col items-center justify-center">
              <span className="text-sm text-dashboard-gray mb-1">Productivity Score</span>
              <span className="text-3xl font-bold text-dashboard-green">87%</span>
              <span className="text-xs text-dashboard-green mt-1">+3% from last week</span>
            </div>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={attendanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#2d3748" />
                <XAxis dataKey="name" stroke="#8E9196" />
                <YAxis stroke="#8E9196" />
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#2d3748' }} />
                <Line 
                  type="monotone" 
                  dataKey="workers" 
                  stroke="#0EA5E9" 
                  strokeWidth={3}
                  dot={{ stroke: '#0EA5E9', strokeWidth: 2, r: 4, fill: '#1E293B' }}
                  activeDot={{ stroke: '#0EA5E9', strokeWidth: 2, r: 6, fill: '#0EA5E9' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Shift Performance Dashboard */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Shift Completion Rates</CardTitle>
          <Clock className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="h-64 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={shiftData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {shiftData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1E293B', borderColor: '#2d3748' }} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Worker Efficiency Scores */}
      <Card className="lg:col-span-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Worker Efficiency Scores</CardTitle>
          <Activity className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4">Team</th>
                  <th className="text-left py-3 px-4">Role</th>
                  <th className="text-left py-3 px-4">Efficiency Score</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">AI Insight</th>
                </tr>
              </thead>
              <tbody>
                {workerEfficiency.map((worker) => (
                  <tr key={worker.id} className="border-b border-white/5 hover:bg-white/5">
                    <td className="py-3 px-4">{worker.name}</td>
                    <td className="py-3 px-4">{worker.role}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-full bg-dashboard-darkblue rounded-full h-2.5 mr-2">
                          <div 
                            className={`h-2.5 rounded-full ${
                              worker.efficiency >= 90 ? 'bg-dashboard-green' :
                              worker.efficiency >= 80 ? 'bg-dashboard-blue' :
                              worker.efficiency >= 70 ? 'bg-dashboard-yellow' : 'bg-dashboard-red'
                            }`}
                            style={{ width: `${worker.efficiency}%` }}
                          ></div>
                        </div>
                        <span>{worker.efficiency}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        worker.status === 'Excellent' ? 'bg-dashboard-green/20 text-dashboard-green' :
                        worker.status === 'Good' ? 'bg-dashboard-blue/20 text-dashboard-blue' :
                        'bg-dashboard-yellow/20 text-dashboard-yellow'
                      }`}>
                        {worker.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button className="text-dashboard-blue hover:underline text-xs">View Analysis</button>
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

export default WorkforceTracking;
