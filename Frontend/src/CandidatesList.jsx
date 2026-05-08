import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidatesList = ({ candidater = [], setSelectedIndex = () => { } }) => {

    const navigate = useNavigate();

    const handleOpenScorecard = (candidateId) => {
        const index = candidates.findIndex((item) => item.id === candidateId);

        if (index === -1) return;

        setSelectedIndex(index);
        navigate("/scorecard");
    };



    const [activeBucket, setActiveBucket] = useState("Strong");


    const candidates = [
        {
            id: 1,
            name: "Arjun Sharma",
            email: "arjun@email.com",
            type: "Experienced",
            score: 92,
            responsibilities: "55/60",
            skills: "37/40",
            bucket: "Strong",
        },
        {
            id: 2,
            name: "Sneha Patel",
            email: "sneha@email.com",
            type: "Fresher",
            score: 88,
            responsibilities: "52/60",
            skills: "36/40",
            bucket: "Strong",
        },
        {
            id: 3,
            name: "Kavya Nair",
            email: "kavya@email.com",
            type: "Experienced",
            score: 74,
            responsibilities: "40/60",
            skills: "34/40",
            bucket: "Maybe",
        },
        {
            id: 4,
            name: "Deepak Verma",
            email: "deepak@email.com",
            type: "Experienced",
            score: 61,
            responsibilities: "33/60",
            skills: "28/40",
            bucket: "Maybe",
        },
        {
            id: 5,
            name: "Raj Kumar",
            email: "raj@email.com",
            type: "Fresher",
            score: 38,
            responsibilities: "18/60",
            skills: "20/40",
            bucket: "Weak",
        },
    ];

    // const [selectedIndex, setSelectedIndex] = useState(0)
    // const selectedCandidate = candidates[selectedIndex];


    const filteredCandidates =
        activeBucket === "All"
            ? candidates
            : candidates.filter((item) => item.bucket === activeBucket);

    return (

        <div className="flex min-h-screen bg-[#f5f7fb]">
            {/* SIDEBAR */}
            <div className="w-[260px] bg-white border-r border-gray-200 -mx-2 py-[-3]">
                {/* OVERVIEW */}
                <p className="text-[12px] tracking-[2px] font-bold text-slate-400 uppercase mb-5">
                    Overview
                </p>

                <div className="space-y-2">
                    {/* Dashboard */}
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                    >
                        <span className="text-lg">▦</span>
                        <span className="font-medium text-[17px]">Dashboard</span>
                    </button>

                    {/* Post JD */}
                    <button
                        onClick={() => navigate("/PostJD")}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100 transition"
                    >
                        <span className="text-lg">＋</span>
                        <span className="font-medium text-[17px]">Post a JD</span>
                    </button>

                    {/* All Candidates */}
                    <button
                        onClick={() => navigate("/candidates")}
                        className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-blue-50 text-blue-600"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-lg">◉</span>
                            <span className="font-semibold text-[17px]">
                                All Candidates
                            </span>
                        </div>

                        <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {candidates.length}
                        </span>
                    </button>
                </div>

                {/* FILTER SECTION */}
                <div className="mt-10">
                    <p className="text-[12px] tracking-[2px] font-bold text-slate-400 uppercase mb-5">
                        Filter By Bucket
                    </p>

                    <div className="space-y-3">
                        {/* Strong */}
                        <button
                            onClick={() => setActiveBucket("Strong")}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${activeBucket === "Strong"
                                ? "bg-purple-50 text-purple-600"
                                : "text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span>✦</span>
                                <span className="font-semibold text-[16px]">
                                    Strong (70–100)
                                </span>
                            </div>

                            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {
                                    candidates.filter((item) => item.bucket === "Strong").length
                                }
                            </span>
                        </button>

                        {/* Maybe */}
                        <button
                            onClick={() => setActiveBucket("Maybe")}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition ${activeBucket === "Maybe"
                                ? "bg-orange-50 text-orange-600"
                                : "text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <span>◈</span>
                                <span className="font-semibold text-[16px]">
                                    Maybe (40–69)
                                </span>
                            </div>

                            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                {
                                    candidates.filter((item) => item.bucket === "Maybe").length
                                }
                            </span>
                        </button>

                        {/* Weak */}
                        <button
                            onClick={() => setActiveBucket("Weak")}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeBucket === "Weak"
                                ? "bg-red-50 text-red-500"
                                : "text-slate-600 hover:bg-slate-100"
                                }`}
                        >
                            <span>○</span>
                            <span className="font-semibold text-[16px]">
                                Weak (below 39)
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            {/* MAIN CONTENT */}
            <div className="flex-1 p-3 bg-[#f6f8fc] min-h-screen">
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                    <div>
                        <h1 className="-mt-[20px] !text-[28px] leading-none font-bold text-[#0f172a]">
                            All Candidates — Frontend Developer
                        </h1>

                        <p className="text-[15px] text-slate-500 -mt-[6px]">
                            248 applications · 241 scored · 7 flagged for format issues
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex gap-3">
                        <select className="px-2 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-700 outline-none">
                            <option>All buckets</option>
                            <option>Strong</option>
                            <option>Maybe</option>
                            <option>Weak</option>
                        </select>

                        <select className="px-2 py-1 text-xs rounded-md border border-slate-200 bg-white text-slate-700 outline-none">
                            <option>All types</option>
                            <option>Experienced</option>
                            <option>Fresher</option>
                        </select>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden">
                    {/* Table Header */}
                    <div className="grid grid-cols-7 bg-[#f8fafc] px-4 py-3 border-b border-slate-200 text-[11px] font-semibold tracking-wide uppercase text-slate-500">
                        <div>Candidate</div>
                        <div>Type</div>
                        <div>Score</div>
                        <div>Responsibilities</div>
                        <div>Skills</div>
                        <div>Bucket</div>
                        <div>Action</div>
                    </div>

                    {/* Table Body */}
                    {filteredCandidates.map((candidate, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-7 items-center px-6 py-3 border-b border-slate-100 hover:bg-slate-50 transition"
                        >
                            {/* Candidate */}
                            <div>
                                <h2 className="!text-[14px] font-semibold">
                                    {candidate.name}
                                </h2>

                                <p className="!text-[14px] text-slate-500 mt-1">
                                    {candidate.email}
                                </p>
                            </div>

                            {/* Type */}
                            <div>
                                <span
                                    className={`px-3 py-1 rounded-full text-[10px] font-semibold ${candidate.type === "Experienced"
                                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                                        : "bg-purple-50 text-purple-600 border border-purple-200"
                                        }`}
                                >
                                    {candidate.type}
                                </span>
                            </div>

                            {/* Score */}
                            <div className="flex flex-col items-center justify-center gap-1">
                                <div className="w-[60px] h-2 bg-slate-200 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full ${candidate.score >= 80
                                            ? "bg-green-600"
                                            : candidate.score >= 50
                                                ? "bg-orange-500"
                                                : "bg-red-500"
                                            }`}
                                        style={{ width: `${candidate.score}%` }}
                                    />
                                </div>

                                <span
                                    className={`text-[14px] font-semibold ${candidate.score >= 80
                                        ? "text-green-600"
                                        : candidate.score >= 50
                                            ? "text-orange-500"
                                            : "text-red-500"
                                        }`}
                                >
                                    {candidate.score}
                                </span>
                            </div>

                            {/* Responsibilities */}
                            <div
                                className={`text-[18px] font-medium ${candidate.score >= 80
                                    ? "text-green-600"
                                    : candidate.score >= 50
                                        ? "text-orange-500"
                                        : "text-red-500"
                                    }`}
                            >
                                {candidate.responsibilities}
                            </div>

                            {/* Skills */}
                            <div
                                className={`text-[18px] font-medium ${candidate.score >= 80
                                    ? "text-green-600"
                                    : candidate.score >= 50
                                        ? "text-orange-500"
                                        : "text-red-500"
                                    }`}
                            >
                                {candidate.skills}
                            </div>

                            {/* Bucket */}
                            <div>
                                <span
                                    className={`px-3 py-1 rounded-full text-[12px] font-semibold ${candidate.bucket === "Strong"
                                        ? "bg-green-50 text-green-600 border border-green-200"
                                        : candidate.bucket === "Maybe"
                                            ? "bg-orange-50 text-orange-500 border border-orange-200"
                                            : "bg-red-50 text-red-500 border border-red-200"
                                        }`}
                                >
                                    {candidate.bucket}
                                </span>
                            </div>

                            {/* Action */}
                            <div>
                                {candidate.bucket === "Strong" ? (
                                    <button
                                        onClick={() => handleOpenScorecard(candidate.id)}
                                        className="px-3 py-1 rounded-xl border border-slate-300 text-slate-600 text-[12px] font-semibold hover:bg-slate-50 transition"
                                    >
                                        View scorecard
                                    </button>
                                ) : candidate.bucket === "Maybe" ? (
                                    <button
                                        onClick={() => handleOpenScorecard(candidate.id)}
                                        className="px-2 py-1 rounded-xl bg-blue-400 text-white text-[12px] font-semibold shadow hover:bg-blue-600 transition"
                                    >
                                        Review now
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleOpenScorecard(candidate.id)}
                                        className="px-2 py-1 rounded-xl border border-slate-300 text-slate-500 text-[12px] font-semibold hover:bg-slate-50 transition"
                                    >
                                        Override
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CandidatesList;