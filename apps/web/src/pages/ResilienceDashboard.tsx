import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';
import { 
  ShieldCheck, 
  Lock, 
  RotateCcw, 
  Database,
  TrendingUp,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
  HardDrive,
  Zap
} from 'lucide-react';

const backupHealth = [
  { name: 'Monday', success: 98, fail: 2 },
  { name: 'Tuesday', success: 99, fail: 1 },
  { name: 'Wednesday', success: 97, fail: 3 },
  { name: 'Thursday', success: 100, fail: 0 },
  { name: 'Friday', success: 98, fail: 2 },
  { name: 'Saturday', success: 99, fail: 1 },
  { name: 'Sunday', success: 99, fail: 1 },
];

const storageGrowth = [
  { time: 'M1', aws: 400, azure: 300, gcp: 200 },
  { time: 'M2', aws: 450, azure: 340, gcp: 220 },
  { time: 'M3', aws: 520, azure: 400, gcp: 280 },
  { time: 'M4', aws: 600, azure: 480, gcp: 350 },
  { time: 'M5', aws: 720, azure: 550, gcp: 420 },
  { time: 'M6', aws: 850, azure: 650, gcp: 500 },
];

const KPI_CARDS = [
  { title: 'Immutable Data', value: '4.2 PB', trend: 'Compliance Lock', color: 'rose', icon: Lock },
  { title: 'Recovery Success', value: '100%', trend: 'Verified RTO', color: 'rose', icon: ShieldCheck },
  { title: 'Ransomware Scans', value: '12k', trend: 'No anomalies', color: 'rose', icon: RotateCcw },
  { title: 'Global Vaults', value: '24', trend: 'Multi-Region', color: 'rose', icon: Database },
];

const ResilienceDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Immutable Ransomware Resilience</h1>
          <p className="text-slate-400">Institutional data protection and WORM-enforced recovery orchestration.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Security Audit
          </button>
          <button className="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Trigger Emergency Recovery
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-${card.color}-500/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-${card.color}-500`} />
              </div>
              <div className="text-xs font-medium text-rose-400 flex items-center">
                <ShieldCheck size={14} className="mr-1" />
                Protected
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
              <p className="text-xs text-slate-400 mt-1">{card.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Backup Success History */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Daily Backup Integrity Success Rate</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={backupHealth}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Bar dataKey="success" stackId="a" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="fail" stackId="a" fill="#1e293b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Global Vault Multi-Cloud Trend */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Immutable Storage Distribution</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={storageGrowth}>
                <defs>
                  <linearGradient id="colorRose" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="aws" stroke="#f43f5e" strokeWidth={3} fillOpacity={1} fill="url(#colorRose)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Critical Recovery Points Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Verified Immutable Recovery Points</h3>
          <button className="text-rose-400 hover:text-rose-300 text-sm font-medium">Global Recovery Catalog</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Vault / Dataset</th>
                <th className="px-6 py-4 font-semibold">Lock Mode</th>
                <th className="px-6 py-4 font-semibold">Encryption</th>
                <th className="px-6 py-4 font-semibold">Retention End</th>
                <th className="px-6 py-4 font-semibold">Validation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'SAP-HANA-PROD-VAULT', mode: 'Compliance', enc: 'AES-256-KMS', end: '2028-04-30', status: 'Verified' },
                { name: 'K8S-CLUSTER-APP-V1', mode: 'Governance', enc: 'Vault-Managed', end: '2025-12-15', status: 'Secure' },
                { name: 'AD-FOREST-SYSTEM-STATE', mode: 'WORM', enc: 'AES-256-GCM', end: '2030-01-01', status: 'Immune' },
              ].map((vault) => (
                <tr key={vault.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-rose-500/10 rounded-lg text-rose-500">
                        <HardDrive size={18} />
                      </div>
                      <span className="text-sm font-bold text-white">{vault.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{vault.mode}</td>
                  <td className="px-6 py-4 text-sm text-slate-400 font-mono">{vault.enc}</td>
                  <td className="px-6 py-4 text-sm text-slate-400">{vault.end}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={16} className="text-emerald-500" />
                      <span className="text-sm font-medium text-emerald-500 uppercase tracking-wider">{vault.status}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResilienceDashboard;
