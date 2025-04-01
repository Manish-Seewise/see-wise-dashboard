
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckSquare, FileText, Image, Download, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Sample data for defect detection
const defectData = [
  { 
    id: 1, 
    location: 'Foundation Wall B', 
    issue: 'Concrete Cracking', 
    severity: 'High', 
    detectedAt: '2023-06-10 09:45 AM', 
    status: 'Review Required' 
  },
  { 
    id: 2, 
    location: 'Steel Column F7', 
    issue: 'Weld Quality', 
    severity: 'Medium', 
    detectedAt: '2023-06-09 02:17 PM', 
    status: 'Under Repair' 
  },
  { 
    id: 3, 
    location: 'Electrical Conduit C3', 
    issue: 'Improper Installation', 
    severity: 'Medium', 
    detectedAt: '2023-06-08 11:32 AM', 
    status: 'Resolved' 
  },
  { 
    id: 4, 
    location: 'Drywall Section 2B', 
    issue: 'Alignment Issue', 
    severity: 'Low', 
    detectedAt: '2023-06-07 03:50 PM', 
    status: 'Resolved' 
  },
];

// Sample data for compliance reports
const complianceReports = [
  { id: 1, name: 'Daily Safety Inspection', date: 'Today', status: 'Complete', downloadType: 'PDF' },
  { id: 2, name: 'Weekly Quality Assessment', date: 'June 10, 2023', status: 'Complete', downloadType: 'PDF' },
  { id: 3, name: 'Monthly Compliance Report', date: 'June 01, 2023', status: 'Complete', downloadType: 'Excel' },
  { id: 4, name: 'Structural Integrity Check', date: 'May 29, 2023', status: 'Complete', downloadType: 'PDF' },
];

const QualityControl = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Structural Inspection Results */}
      <Card className="lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Structural Inspection Results</CardTitle>
          <AlertTriangle className="h-4 w-4 text-dashboard-yellow" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {defectData.map((defect) => (
              <div 
                key={defect.id} 
                className={`bg-dashboard-darkblue rounded-lg p-4 border-l-4 ${
                  defect.severity === 'High' ? 'border-dashboard-red' :
                  defect.severity === 'Medium' ? 'border-dashboard-yellow' :
                  'border-dashboard-green'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{defect.location}</h4>
                    <p className="text-sm text-dashboard-gray mt-1">{defect.issue}</p>
                  </div>
                  <Badge
                    className={`${
                      defect.severity === 'High' ? 'bg-dashboard-red' :
                      defect.severity === 'Medium' ? 'bg-dashboard-yellow' :
                      'bg-dashboard-green'
                    }`}
                  >
                    {defect.severity}
                  </Badge>
                </div>
                <div className="mt-3 flex justify-between items-center text-xs">
                  <span className="text-dashboard-gray">{defect.detectedAt}</span>
                  <span className={`${
                    defect.status === 'Review Required' ? 'text-dashboard-yellow' :
                    defect.status === 'Under Repair' ? 'text-dashboard-blue' :
                    'text-dashboard-green'
                  }`}>
                    {defect.status}
                  </span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <div className="bg-dashboard-dark border border-white/10 w-16 h-12 rounded flex items-center justify-center">
                    <Image className="h-4 w-4 text-dashboard-blue" />
                  </div>
                  <button className="text-dashboard-blue hover:underline text-xs">View Images (3)</button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Automated Compliance Reports */}
      <Card className="lg:col-span-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">Automated Compliance Reports</CardTitle>
          <FileText className="h-4 w-4 text-dashboard-blue" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceReports.map((report) => (
              <div key={report.id} className="bg-dashboard-darkblue rounded-lg p-4 border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-dashboard-blue" />
                      {report.name}
                    </h4>
                    <p className="text-xs text-dashboard-gray mt-1">{report.date}</p>
                  </div>
                  <Badge className="bg-dashboard-green">
                    {report.status}
                  </Badge>
                </div>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-dashboard-gray">Report #{report.id}</span>
                  <button className="bg-dashboard-blue text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 hover:bg-dashboard-blue/80 transition-colors">
                    <Download className="h-3 w-3" />
                    Download {report.downloadType}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="w-full bg-dashboard-darkblue border border-dashboard-blue/30 text-dashboard-blue rounded-md py-2 text-sm hover:bg-dashboard-blue/10 transition-colors">
              Generate Custom Report
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QualityControl;
