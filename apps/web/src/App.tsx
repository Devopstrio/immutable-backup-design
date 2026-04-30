import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ResilienceDashboard from './pages/ResilienceDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The backup orchestration engine is synchronizing cross-region immutable vaults. This recovery interface will be available upon completion of the verification cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<ResilienceDashboard />} />
          <Route path="/vaults" element={<Placeholder name="Immutable Vault Management" />} />
          <Route path="/backups" element={<Placeholder name="Backup Protection & Encryption" />} />
          <Route path="/recovery" element={<Placeholder name="Automated Recovery Orchestration" />} />
          <Route path="/replication" element={<Placeholder name="Cross-Region Replication Map" />} />
          <Route path="/dr" element={<Placeholder name="Disaster Recovery Playbooks" />} />
          <Route path="/storage" element={<Placeholder name="WORM Storage Capacity Metrics" />} />
          <Route path="/audit" element={<Placeholder name="Backup Integrity & Security Audit" />} />
          <Route path="/alerts" element={<Placeholder name="Ransomware & Anomaly Detection" />} />
          <Route path="/settings" element={<Placeholder name="Platform & Integration Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
