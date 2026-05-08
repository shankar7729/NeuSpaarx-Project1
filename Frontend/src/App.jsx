// import React from 'react'
// import Homepage from './Homepage'
// import { Route, Routes } from 'react-router-dom'
// import PostJD from './PostJD'
// import CandidatesList from './CandidatesList'
// import ScorecardView from './ScorecardView'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/dashboard" element={<Homepage />} />
//         <Route path="/PostJD" element={<PostJD />} />
//         <Route path="/candidates" element={<CandidatesList />} />
//         <Route path="/scorecard" element={<ScorecardView />} />
//       </Routes>

//     </div>
//   )
// }

// export default App

import React, { useState } from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import PostJD from "./PostJD";
import CandidatesList from "./CandidatesList";
import ScorecardView from "./ScorecardView";
import HRMaybeBucketDashboard from "./MaybeBucket";

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
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Homepage />} />
        <Route path="/PostJD" element={<PostJD />} />
        <Route path="/maybe" element={<HRMaybeBucketDashboard />} />
        <Route path="/candidates" element={<CandidatesList candidates={candidates} setSelectedIndex={setSelectedIndex}/>}/>
        <Route path="/scorecard" element={selectedCandidate ? (<ScorecardView
        candidate={selectedCandidate}
        candidates={candidates}
        setCandidates={setCandidates}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />) : (<CandidatesList candidates={candidates} setSelectedIndex={setSelectedIndex}/>)}/>
      </Routes>
    </div>
  );
};

export default App;
