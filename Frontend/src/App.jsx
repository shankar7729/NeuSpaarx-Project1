
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PostJD from "./PostJD";
import CandidatesList from "./CandidatesList";
import ScorecardView from "./ScorecardView";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";
import ShortlistedPage from "./ShortlistedPage";
import { Settings } from "lucide-react";
import SettingsPage from "./SettingsPage";

const App = () => {
  const [candidates, setCandidates] = useState([
    {
      id: 1,
      name: "Arjun Sharma",
      email: "arjun.sharma@gmail.com",
      phone: "+91 98765 43210",
      experience: "3.5 years experience",
      score: 92,
    },
    {
      id: 2,
      name: "Priya Rao",
      email: "priya.rao@gmail.com",
      phone: "+91 91234 56789",
      experience: "2.8 years experience",
      score: 84,
    },
    {
      id: 3,
      name: "Rahul Verma",
      email: "rahul@gmail.com",
      phone: "+91 99887 66554",
      experience: "4.1 years experience",
      score: 79,
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedCandidate = candidates[selectedIndex];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/PostJD" element={<PostJD />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/shortlisted" element={<ShortlistedPage />} />
        <Route path="/candidates" element={<CandidatesList candidates={candidates} setSelectedIndex={setSelectedIndex}/>}/>
        <Route path="/scorecard" element={selectedCandidate ? (<ScorecardView
        candidate={selectedCandidate}
        candidates={candidates}
        setCandidates={setCandidates}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />) : (<CandidatesList candidates={candidates} setSelectedIndex={setSelectedIndex}/>)}/>
       <Route path="/login" element={<LoginPage />} />
       <Route path="/settings" element={<SettingsPage/>} />

      </Routes>
    </div>
  );
};

export default App;
