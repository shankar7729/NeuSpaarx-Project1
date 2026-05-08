export default function MaybeBucket() {
  const candidates = [
    {
      id: 1,
      name: "Kavya Nair",
      experience: "2 yrs exp · Experienced",
      score: 74,
      responsibilities: "40/60",
      skills: "34/40",
      gap: "Missing Next.js",
      status: "pending",
    },
    {
      id: 2,
      name: "Deepak Verma",
      experience: "1.5 yrs exp · Experienced",
      score: 61,
      responsibilities: "33/60",
      skills: "28/40",
      gap: "Redux missing, limited team exp",
      status: "pending",
    },
    {
      id: 3,
      name: "Ananya Singh",
      experience: "Fresher · 0 yrs exp",
      score: 67,
      responsibilities: "37/60",
      skills: "30/40",
      gap: "Projects strong, certs lacking",
      status: "pending",
    },
  ];

  const handleApprove = (candidateName) => {
    alert(`${candidateName} Approved`);
  };

  const handleDecline = (candidateName) => {
    alert(`${candidateName} Declined`);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fc] flex font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div>
          <h2 className="!text-xs font-bold tracking-wider text-gray-400 mb-4 uppercase">
            Overview
          </h2>

          <nav className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition">
              <span>📊</span>
              <span className="font-small">Dashboard</span>
            </button>

            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition">
              <span>⚪</span>
              <span className="font-small">All Candidates</span>
            </button>
          </nav>
        </div>

        <div className="mt-10">
          <h2 className="!text-xs font-bold tracking-wider text-gray-400 mb-4 uppercase">
            Review Queues
          </h2>

          <button className="w-full flex items-center justify-between bg-blue-50 text-blue-700 px-1 py-1 rounded-xl border border-blue-100">
            <div className="flex items-center gap-2">
              <span>💠</span>
              <span className="font-small">Maybe Bucket</span>
            </div>

            <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
              12
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="!-ml-200 !-mt-2 !text-[20px] font-semibold text-slate-900">
            Maybe Bucket — HR Action Required
          </h1>

          <p className="text-[15px] text-slate-500 !-ml-118 !-mt-5 mb-6">
            12 candidates scored 50–79. You must approve or decline
            each before any email is sent to them.
          </p>

          {/* Warning Banner */}
          <div className="bg-orange-50 border border-orange-200 text-orange-600 rounded-l px-1 py-1 mt-2 mb-6">
            ⚠️ No rejection or shortlist email will be sent to these
            candidates until you take action. Review each scorecard and
            click Approve or Decline.
          </div>

          {/* Table */}
          <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-7 bg-[#f8fafc] px-4 py-3 border-b border-slate-200 text-[11px] font-semibold tracking-wide uppercase text-slate-500">
              <div>Candidate</div>
              <div>Score</div>
              <div>Responsibilities</div>
              <div>Skills</div>
              <div>Key Gap</div>
              <div>Action</div>
            </div>

            {/* Rows */}
            {candidates.map((candidate) => (
              <div
                key={candidate.id}
                className="grid grid-cols-7 items-center px-6 py-3 border-b border-slate-100 hover:bg-slate-50 transition"
              >
                {/* Candidate */}
                <div>
                  <h3 className="!text-[14px] font-semibold">
                    {candidate.name}
                  </h3>
                  <p className="!text-[14px] text-slate-500 mt-1">
                    {candidate.experience}
                  </p>
                </div>

                {/* Score */}
                <div className="!text-[14px] text-slate-500 mt-1">
                  {candidate.score}
                </div>

                {/* Responsibilities */}
                <div className="text-[18px] font-medium">
                  {candidate.responsibilities}
                </div>

                {/* Skills */}
                <div className="text-[18px] font-medium">
                  {candidate.skills}
                </div>

                {/* Gap */}
                <div>
                  <span className="bg-gray-100 text-gray-600 px-1 py-1 rounded-lg text-xs inline-block">
                    {candidate.gap}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(candidate.name)}
                    className="ml-10 px-1 py-1 rounded-xl border border-green-300 text-green-600 font-semibold text-xs hover:bg-green-50 transition"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => handleDecline(candidate.name)}
                    className="px-1 py-1 rounded-xl border border-red-300 text-red-500 font-semibold text-xs hover:bg-red-50 transition"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
