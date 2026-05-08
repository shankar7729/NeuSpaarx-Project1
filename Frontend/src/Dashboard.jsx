import React from 'react';

const Dashboard = () => {
  const metrics = [
    { title: "TOTAL APPLICATIONS", value: "248", sub: "Across 3 active roles", color: "border-blue-500" },
    { title: "STRONG MATCHES", value: "9", sub: "Score 80–100 · Auto-flagged", color: "border-green-500" },
    { title: "NEEDS HR REVIEW", value: "12", sub: "Score 50–79 · Action required", color: "border-orange-400" },
    { title: "WEAK MATCHES", value: "27", sub: "Below 50 · 7-day window active", color: "border-red-500" },
  ];

  const candidates = [
    { name: "Arjun Sharma", email: "arjun@email.com", role: "ML Engineer", score: 92, type: "Experienced" },
    { name: "Sneha Patel", email: "sneha@email.com", role: "Frontend Dev", score: 88, type: "Fresher" },
    { name: "Rohan Mehta", email: "rohan@email.com", role: "ML Engineer", score: 85, type: "Experienced" },
  ];

  return (
    <div className="p-5 bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <header className="mr-120 mb-1 mt-[-40] ">
        <h1 className="text-l font-bold text-slate-600 mt-[-90]">Good morning, Priya 👋</h1>
        <p className="ml-100 text-slate-500">Here's what needs your attention today — <span className="font-semibold">12 candidates waiting in the maybe bucket.</span></p>
      </header>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-3">
        {metrics.map((m, i) => (
          <div key={i} className={`bg-white p-4 rounded-xl border-l-4 ${m.color} shadow-sm`}>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.title}</p>
            <p className="text-4xl font-bold text-slate-800 my-1">{m.value}</p>
            <p className="text-xs text-slate-400">{m.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Matches Table */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-[300px] w-[650px] py-1">
          <div className="p-3 flex justify-between items-center border-b border-slate-100">
            <h3 className="font-bold text-slate-800">Recent strong matches</h3>
            <span className="px-1 py-1 bg-green-50 text-green-600 text-[10px] font-bold rounded-full border border-green-100 uppercase">Auto-flagged</span>
          </div>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] uppercase font-bold tracking-widest py-1">
                <th className="px-6 py-4">Candidate</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Score</th>
                <th className="px-6 py-4">Type</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {candidates.map((c, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-1">
                    <p className="font-bold text-slate-800 text-sm">{c.name}</p>
                    <p className="text-xs text-slate-400">{c.email}</p>
                  </td>
                  <td className="px-4 py-1">
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[11px] rounded-md font-medium">{c.role}</span>
                  </td>
                  <td className="px-4 py-1">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-1.5 bg-slate-100 rounded-full">
                        <div className="bg-green-500 h-full rounded-full" style={{ width: `${c.score}%` }}></div>
                      </div>
                      <span className="font-bold text-green-600 text-sm">{c.score}</span>
                    </div>
                  </td>
                  <td className="px-4 py-1">
                    <span className={`px-3 py-1 text-[11px] font-bold rounded-full border ${c.type === 'Fresher' ? 'bg-purple-50 text-purple-600 border-purple-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                      {c.type}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Action Centre */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden h-[400px] ml-[-130px]">
          <div className="p-2 flex justify-between items-center border-b border-slate-100">
            <h3 className="font-bold text-slate-800">HR Action Centre</h3>
            <span className="px-1 py-[-2] bg-red-50 text-red-500 text-[10px] font-bold rounded-full border border-red-100 uppercase">5 urgent</span>
          </div>
          <div className="divide-y divide-slate-100">
            <ActionItem icon="🚩" iconBg="bg-red-50" title="12 candidates awaiting decision" sub="Maybe bucket · No emails sent until you act" btnText="Review now" primary />
            <ActionItem icon="⚠️" iconBg="bg-orange-50" title="7 resumes failed format check" sub="Corrupt or unsupported files · Manual review needed" btnText="View files" />
            <ActionItem icon="🕒" iconBg="bg-indigo-50" title="Frontend Dev JD closes in 3 days" sub="30 May 2026 · 248 applications received so far" btnText="Extend" />
            <ActionItem icon="✉️" iconBg="bg-blue-50" title="9 shortlist emails ready to send" sub="Strong matches approved · Pending your sign-off" btnText="Send all" />
            <ActionItem icon="➕" iconBg="bg-green-50" title="ML Engineer role has no active JD" sub="Last posted 45 days ago · 0 applications open" btnText="Post JD" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionItem = ({ icon, iconBg, title, sub, btnText, primary }) => (
  <div className="p-2 flex items-center gap-4 hover:bg-slate-50 transition-colors">
    <div className={`w-10 h-10 ${iconBg} rounded-lg flex items-center justify-center text-sm`}>{icon}</div>
    <div className="flex-1">
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <p className="text-[11px] text-slate-400">{sub}</p>
    </div>
    <button className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all ${primary ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
      {btnText}
    </button>
  </div>
);

export default Dashboard;