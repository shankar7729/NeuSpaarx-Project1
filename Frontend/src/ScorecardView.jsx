import React from "react";
import { useNavigate } from "react-router-dom";
import { Play, Circle } from "lucide-react";

export default function ScorecardView(
  {
  candidateresume,
  candidates,
  setCandidates,
  selectedIndex,
  setSelectedIndex,
  })
   {
  const navigate = useNavigate();
  

  const candidate = {
    
    id: 1,
    name: "Arjun Sharma",
    email: "arjun.sharma@gmail.com",
    phone: "+91 98765 43210",
    experience: "3.5 years experience",
    score: 92,
    resumeFile: "arjun_sharma_resume.pdf",
  };

  const skills = [
    "React.js",
    "TypeScript",
    "Next.js",
    "Redux",
    "REST APIs",
    "Git",
  ];

  const greenFlags = [
    "Led a team of 4 developers",
    "Delivered to enterprise clients",
    "React + TypeScript combo strong",
    "Consistent career progression",
  ];

  const redFlags = [
    "No GraphQL experience",
    "GraphQL not mentioned",
    "CI/CD experience uncleared",
  ];

  const handleSkipCandidate = () => {
  const updatedCandidates = candidates.filter(
    (item) => item.id !== candidate.id
  );

  setCandidates(updatedCandidates);

  if (updatedCandidates.length === 0) {
    navigate("/candidates");
    return;
  }

  if (selectedIndex >= updatedCandidates.length) {
    setSelectedIndex(updatedCandidates.length - 1);
  }
};

  const handleApproveInterview = async (candidate) => {
    try {
      const response = await fetch("https://varying-childhood-upheld.ngrok-free.dev/mail_to_candidate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
      HR_mail_id: "sivanallur88586@gmail.com",
      app_password: "hidz jcxh pzjg ubor",
      candidate_mail_id: "sivanallur88586@gmail.com",
      candidate_name: "S.Sivaprakash",
      company_name: "Nuespaarx Solution And Private Ltd",
      job_role: "AI Engineer",
      company_website: "https://neuspaarx.com"
    })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send email");
      }

      alert(`Interview email sent to ${candidate.email}`);
    } catch (error) {
      console.error(error);
      alert("Unable to send interview email");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex text-[#334155]">
      <aside className="w-[265px] bg-white border-r border-slate-200 px-5 py-6">
        <div className="text-[12px] font-semibold tracking-[0.12em] text-slate-400 mb-4">
          OVERVIEW
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-[16px] hover:bg-slate-50"
        >
          <Circle size={14} /> Dashboard
        </button>

        <button
          onClick={() => navigate("/candidates")}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-[16px] hover:bg-slate-50 mt-1"
        >
          <Circle size={14} /> All Candidates
        </button>

        <div className="text-[12px] font-semibold tracking-[0.12em] text-slate-400 mt-10 mb-3">
          THIS CANDIDATE
        </div>

        <button className="flex items-center gap-3 w-full px-3 py-3 rounded-xl bg-blue-50 text-blue-600 font-medium">
          <Play size={15} /> Scorecard
        </button>

        <button
          onClick={() => navigate("/resume")}
          className="flex items-center gap-3 w-full px-3 py-3 rounded-xl text-slate-500 hover:bg-slate-50 mt-1"
        >
          <Circle size={12} /> Raw Resume
        </button>
      </aside>

      <main className="flex-1 px-5 py-4">
        <div className="flex justify-between items-start border-b border-slate-200 pb-5">
          <div>
            <h1 className="!-ml-65 !text-[30px] font-semibold text-slate-900">
              {candidate.name}
            </h1>

            <div className="text-[15px] text-slate-500">
              {candidate.email} • {candidate.phone} • {candidate.experience}
            </div>

            <div className="flex gap-3 mt-5">
              <span className="px-1 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                Strong Match
              </span>
              <span className="px-1 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                Experienced
              </span>
              <span className="px-1 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                ML Engineer
              </span>
            </div>
          </div>

          <div className="flex items-start gap-8">
            <div className="relative w-22 h-22 rounded-full border-[12px] border-green-500 flex items-center justify-center text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">92</div>
                <div className="text-xs text-slate-500">/100</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-4">
              <button
                onClick={() => handleApproveInterview(candidate)}
                className="px-4 py-1 rounded-l bg-green-50 border border-green-200 text-green-700 font-sm cursor-pointer hover:bg-green-100"
              >
                Approve for Interview
              </button>
              <button
                onClick={handleSkipCandidate}
                className="px-4 py-1 rounded-l border border-slate-200 text-slate-500 font-sm cursor-pointer hover:bg-slate-100"
              >
                Skip this candidate
              </button>

            </div>
          </div>
        </div>

        <div className="mt-8 mr-192 text-[13px] font-semibold tracking-[0.12em] text-slate-400">
          LLM EVIDENCE — RESPONSIBILITIES MATCH
        </div>

        <section className="mt-1 bg-white border border-slate-200 rounded-2xl p-2">
          <div className="text-[13px] mr-215 font-semibold tracking-[0.08em] text-slate-500 mb-4">
            RESPONSIBILITIES MATCH
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-[310px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[92%] h-full bg-green-500" />
            </div>
            <span className="font-semibold text-green-700 text-sm">15/20</span>
          </div>

          <p className="text-slate-500 text-[15px] leading-8 mb-2">
            Candidate demonstrates strong cross-functional team leadership and product delivery experience directly matching JD requirements for senior frontend ownership.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg px-3 py-2 text-[15px] text-blue-700 leading-6">
            "Led a team of 4 frontend developers to deliver a real-time analytics dashboard for 3 enterprise clients, coordinating with backend and design teams across 6-month sprints."
          </div>
        </section>

        <div className="mt-8 mr-210 text-[13px] font-semibold tracking-[0.12em] text-slate-400">
          LLM EVIDENCE — SKILLS MATCH
        </div>

        <section className="mt-1 bg-white border border-slate-200 rounded-2xl p-6">
          <div className="mr-230 text-[13px] font-semibold tracking-[0.08em] text-slate-500 mb-4">
            SKILLS MATCH
          </div>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-[310px] h-1.5 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[92%] h-full bg-green-500" />
            </div>
            <span className="font-semibold text-green-700 text-sm">20/35</span>
          </div>

          <div className="flex flex-wrap gap-3 mb-5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-1 py-1 rounded-lg bg-green-50 text-green-700 text-[11px]"
              >
                ✓ {skill}
              </span>
            ))}

            <span className="px-1 py-1 rounded-lg bg-red-50 text-red-500 text-[11px]">
              ✕ GraphQL
            </span>
            <span className="px-1 py-1 rounded-lg bg-amber-50 text-amber-600 text-[11px]">
              ~ CI/CD (mentioned briefly)
            </span>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-lg px-2 py-2 text-[15px] text-blue-700">
            "Technical Skills: React.js (4 yrs), TypeScript, Next.js, Redux, REST APIs, Node.js basics, Git, HTML/CSS"
          </div>
        </section>

        <div className="mt-8 mr-250 text-[13px] font-semibold tracking-[0.12em] text-slate-400">
          FLAGS
        </div>

        <section className=" bg-white border border-slate-200 rounded-2xl p-4">
          <div className="mr-230 text-green-700 font-semibold mb-2 text-5px">Green flags</div>
          <div className="flex flex-wrap gap-2">
            {greenFlags.map((flag) => (
              <span
                key={flag}
                className="px-2 py-1 rounded-lg bg-green-50 text-green-700 text-xs"
              >
                {flag}
              </span>
            ))}
          </div>
          <hr /> 

          <div className="mr-233 text-red-700 font-semibold mb-1 text-5px ">Red flags</div>
          <div className="flex flex-wrap gap-2">
            {redFlags.map((flag) => (
              <span
                key={flag}
                className="px-2 py-1 rounded-lg bg-red-50 text-red-700 text-xs"
              >
                {flag}
              </span>
            ))}
          </div>
        </section>
        
      </main>
    </div>
  );
}