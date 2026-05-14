// import React, { useState } from 'react'
// import axios from "axios";

// const MainJD = () => {
//   const [files, setFiles] = useState([
//     { name: 'Arjun_Sharma_Resume.pdf', size: '1.2 MB', status: 'Valid' },
//     { name: 'Sneha_Patel_CV.pdf', size: '960 KB', status: 'Valid' },
//     { name: 'Rohan_Mehta_Resume.docx', size: '710 KB', status: 'Valid' },
//   ]);
//   const [jdFile, setJdFile] = useState(null);
//   const [jdFileName, setJdFileName] = useState("");
//   const [fileName, setFileName] = useState("");

//   function handleFileChange(e) {
//     const selected = e.target.files[0];
//     if (!selected) return;
//     // setFile(selected);
//     setFileName(selected.name);
//     console.log("Selected file:", selected);
//   }
//   function handleFileChange(e) {
//     const selected = e.target.files[0];

//     if (!selected) return;

//     // setFile(selected);           // ✅ IMPORTANT
//     setFileName(selected.name);  // ✅ For UI

//     console.log(selected);
//   }

//   const handleUpload = async () => {
//     const formData = new FormData();

//     const validFiles = files.filter((f) => f.file);

//     // if (validFiles.length === 0) {
//     //   alert("No valid files to upload");
//     //   return;
//     // }

//     validFiles.forEach((f) => {
//       formData.append("resumes", f.file);
//     });

//     try {
//       await axios.post("https://varying-childhood-upheld.ngrok-free.dev/resume_analyse", formData);
//       alert("Uploaded successfully");
//     } catch (err) {
//       console.log(err);
//       alert("Upload failed");
//     }
//   };
//   function handleJDFileChange(e) {
//     const selected = e.target.files[0];

//     if (!selected) return;

//     // Validation
//     if (
//       selected.type !== "application/pdf" &&
//       selected.type !==
//       "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
//     ) {
//       alert("Only PDF or DOCX allowed");
//       return;
//     }

//     setJdFile(selected);
//     setJdFileName(selected.name);
//   }
//   return (
//     <div className="w-full flex-1 min-h-screen mx-auto p-5 bg-slate-50 min-h-screen font-sans text-slate-800">
//       {/* Page Header */}
//       <header className="mb-2">
//         <h1 className="text-xl font-bold">Post a Job Description</h1>
//         <p className="text-slate-500 text-sm">The LLM will automatically parse your JD and extract required skills and responsibilities for scoring.</p>
//       </header>

//       <div className="space-y-6">
//         {/* Section 1: Job Details */}
//         <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">📋</div>
//             <h2 className="font-bold">Job details</h2>
//           </div>

//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Job title *</label>
//               <input type="text" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" defaultValue="Senior Frontend Developer" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Department *</label>
//               <input type="text" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm" defaultValue="Engineering" />
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Experience required</label>
//               <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white">
//                 <option>2–4 years</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Location</label>
//               <input type="text" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm" defaultValue="Bangalore, India (Hybrid)" />
//             </div>
//           </div>
//         </section>

//         {/* Section 2: Job Description & Skills */}
//         <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//           <div className="flex items-center gap-2 mb-2">
//             <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">✨</div>
//             <h2 className="font-bold">Job Description & Skills *</h2>
//           </div>
//           <p className="text-xs text-slate-400 mb-6 italic">The LLM will automatically extract required skills and responsibilities from the JD text you provide below — no need to list them separately.</p>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Job description — paste the full JD here</label>
//               {/* <textarea
//                 className="w-full p-4 border border-slate-200 rounded-lg text-sm h-32 focus:ring-2 focus:ring-blue-500 outline-none"
//                 defaultValue="We are looking for a Senior Frontend Developer with strong experience in React.js and TypeScript..."
//               /> */}
//               <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">📄</div>
//                   <h2 className="font-bold">Upload Job Description</h2>
//                 </div>
//                 <p className="text-xs text-slate-400 mb-6">
//                   Upload JD file (PDF or DOCX). The system will extract skills automatically.
//                 </p>
//                 <div
//                   className="border-2 border-dashed border-blue-200 rounded-xl p-10 bg-blue-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
//                   onClick={() => document.getElementById("jdInput").click()}>
//                   <span className="text-2xl mb-3">📄</span>
//                   <p className="font-semibold">Click to upload JD file</p>
//                   <p className="text-xs text-gray-400">PDF / DOCX · Max 5MB</p>
//                   {jdFileName && (<p className="text-green-600 mt-3">Selected: {jdFileName}</p>)}
//                   <input id="jdInput" type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleJDFileChange}/>
//                 </div>
//               </section>

//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Nice-to-have skills (optional) — comma separated</label>
//               <input type="text" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm" defaultValue="Figma, GraphQL, CI/CD, Docker" />
//             </div>
//           </div>
//         </section>

//         {/* Section 3: Upload Resumes */}
//         <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//           <div className="flex items-center gap-2 mb-1">
//             <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">⬆️</div>
//             <h2 className="font-bold">Upload Resumes</h2>
//           </div>
//           <p className="text-xs text-slate-400 mb-6">Upload multiple resumes at once — all resumes will be evaluated against the JD above. Supported formats: PDF, DOCX · Max 5MB per file.</p>

//           {/* Dropzone */}
//           {/* <div className="border-2 border-dashed border-blue-200 rounded-xl p-10 bg-blue-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors mb-6">
//             <span className="text-2xl mb-4">⬆️</span>
//             <p className="text-sm font-semibold text-slate-700">Drop resumes here or click to browse</p>
//             <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider font-bold">Select multiple files at once · PDF or DOCX · Max 5MB each</p>
//             {fileName && (<p className="text-green-400 mt-4">Selected: {fileName}</p>)}
//             <input type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange}/>
//           </div> */}
//           <div
//             className="border-2 border-dashed border-blue-200 rounded-xl p-10 bg-blue-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors mb-6"
//             onClick={() => document.getElementById("fileInput").click()}
//           >
//             <span className="text-2xl mb-4">⬆️</span>
//             <p className="text-sm font-semibold text-slate-700">
//               Drop resumes here or click to browse
//             </p>

//             {fileName && (
//               <p className="text-green-500 mt-4">
//                 Selected: {fileName}
//               </p>
//             )}

//             <input
//               id="fileInput"
//               type="file"
//               accept=".pdf,.doc,.docx"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//             <button
//               onClick={handleUpload}
//               className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4"
//             >
//               Upload Resume
//             </button>
//           </div>

//           {/* File List */}
//           <div className="border border-slate-100 rounded-lg overflow-hidden">
//             <div className="p-3 bg-slate-50 flex justify-between items-center border-b border-slate-100">
//               <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Uploaded Files ({files.length})</span>
//               <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Ready to process</span>
//             </div>
//             <div className="divide-y divide-slate-100">
//               {files.map((file, idx) => (
//                 <div key={idx} className="p-3 flex justify-between items-center text-xs">
//                   <span className="text-slate-700 font-medium">{file.name}</span>
//                   <div className="flex items-center gap-4">
//                     <span className="text-slate-400">{file.size}</span>
//                     <span className="text-green-600 font-bold flex items-center gap-1">✓ {file.status}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Section 4: Scoring Configuration */}
//         <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
//           <div className="flex items-center gap-2 mb-6">
//             <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">⚙️</div>
//             <h2 className="font-bold">Scoring configuration</h2>
//           </div>

//           <div className="grid grid-cols-2 gap-x-6 gap-y-4">
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Strong match threshold</label>
//               <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white">
//                 <option>80–100 (Recommended)</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Maybe bucket range</label>
//               <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white">
//                 <option>50–79 (Recommended)</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">HR override window (weak candidates)</label>
//               <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white">
//                 <option>7 days (Recommended)</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-xs font-semibold text-slate-500 mb-2">Application deadline</label>
//               <input type="text" className="w-full p-2.5 border border-slate-200 rounded-lg text-sm" defaultValue="30 May 2026" />
//             </div>
//           </div>
//         </section>

//         {/* Footer Actions */}
//         <div className="flex justify-end gap-3 pt-4 pb-10">
//           <button className="px-6 py-2.5 text-sm font-semibold text-white rounded-lg bg-blue-600 hover:text-slate-700 transition cursor-pointer ">Save draft</button>
//           <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all cursor-pointer">
//             Publish JD — Start accepting applications
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainJD

import { useMemo, useRef, useState } from "react";
import axios from "axios";


const API_URL =
  "https://varying-childhood-upheld.ngrok-free.dev/resume_analyse";
// console.log("Calling API:", API_URL);


const allowedMimeTypes = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/msword",
  "text/plain", // ✅ .txt
  "application/x-tex", // ✅ .tex (latex)
];

function formatFileSize(bytes) {
  if (typeof bytes !== "number") return "-";
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  return `${(kb / 1024).toFixed(1)} MB`;
}



export default function MainJD() {
  const jdInputRef = useRef(null);
  const resumeInputRef = useRef(null);
  const [jobTitle, setJobTitle] = useState("Senior Frontend Developer");
  const [department, setDepartment] = useState("Engineering");
  const [experience, setExperience] = useState("2–4 years");
  const [location, setLocation] = useState("Bangalore, India (Hybrid)");
  const [niceToHave, setNiceToHave] = useState("Figma, GraphQL, CI/CD, Docker");
  const [jdText, setJdText] = useState("");
  const [jdFile, setJdFile] = useState(null);
  const [jdFileName, setJdFileName] = useState("");
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [results, setResults] = useState([]);
  const selectedResumeCount = useMemo(() => files.length, [files]);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);


  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        "https://varying-childhood-upheld.ngrok-free.dev/history"
      );

      console.log("HISTORY:", res.data);

      setHistory([
        ...(res.data.strong_candidate_data || []),
        ...(res.data.moderate_candidate_data || []),
        ...(res.data.weak_candidate_data || [])
      ]);

      setShowHistory(true);

    } catch (err) {
      console.log("FULL ERROR:", err);

      if (err.response) {
        console.log("RESPONSE DATA:", err.response.data);
        console.log("STATUS:", err.response.status);
      }

      if (err.request) {
        console.log("NO RESPONSE FROM SERVER");
      }

      alert("Failed to load history");
    }
  };

  function isValidFile(file) {
    const allowedExtensions = ["pdf", "doc", "docx", "txt", "tex"];
    const fileExtension = file.name.split(".").pop().toLowerCase();
    return (
      allowedMimeTypes.includes(file.type) ||
      allowedExtensions.includes(fileExtension)
    );
  }

  function handleJDFileChange(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;
    if (!isValidFile(selected)) {
      alert("Only PDF or DOCX allowed for JD.");
      e.target.value = "";
      return;
    }
    setJdFile(selected);
    setJdFileName(selected.name);
    setError("");
    setSuccessMsg("");
  }

  //   function handleFileChange(e) {
  //     const selectedFiles = Array.from(e.target.files || []);
  //     if (!selectedFiles.length) return;
  //     const invalidFile = selectedFiles.find((file) => !isValidFile(file));
  //     if (invalidFile) {
  //       alert(
  //         `Only PDF, DOC, or DOCX allowed. Invalid file: ${invalidFile.name}`,
  //       );
  //       e.target.value = "";
  //       return;
  //     }
  //     setFiles((prev) => {
  //       const next = [...prev];
  //       selectedFiles.forEach((file) => {
  //         const exists = next.some(
  //           (item) =>
  //             item.file.name === file.name &&
  //             item.file.size === file.size &&
  //             item.file.lastModified === file.lastModified,
  //         );
  //         if (!exists) {
  //           next.push({
  //             name: file.name,
  //             size: formatFileSize(file.size),
  //             status: "Valid",
  //             file,
  //           });
  //         }
  //       })
  //       return next;
  //     });
  //     // 👇 ADD THIS LINE
  //     setFileName(selectedFiles[selectedFiles.length - 1].name);
  //     setError("");
  //     setSuccessMsg("");
  //     e.target.value = "";
  //   }

  function handleFileChange(e) {
    const selectedFiles = Array.from(e.target.files);

    const formatted = selectedFiles.map(file => ({
      file, // 🔥 important
      name: file.name,
      size: (file.size / 1024).toFixed(1) + " KB",
    }));

    setFiles(prev => [...prev, ...formatted]);
  }

  function removeResume(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function clearAll() {
    setJobTitle("Senior Frontend Developer");
    setDepartment("Engineering");
    setExperience("2–4 years");
    setLocation("Bangalore, India (Hybrid)");
    setNiceToHave("Figma, GraphQL, CI/CD, Docker");
    setJdText("");
    setJdFile(null);
    setJdFileName("");
    setFiles([]);
    setFileName("");
    setError("");
    setSuccessMsg("");
    setResponseData(null);
    if (jdInputRef.current) jdInputRef.current.value = "";
    if (resumeInputRef.current) resumeInputRef.current.value = "";
  }
  //   async function handleUpload() {
  //     setError("");
  //     setSuccessMsg("");
  //     setResponseData(null);
  //     if (!jdFile && !jdText.trim()) {
  //       setError("Please upload a JD file or paste the JD text.");
  //       return;
  //     }
  //     if (files.length === 0) {
  //       setError("Please upload at least one resume.");
  //       return;
  //     }
  //     const formData = new FormData();
  //     if (jdFile) {
  //       formData.append("jd", jdFile);
  //     } else {
  //       const jdBlob = new Blob([jdText], { type: "text/plain" });
  //       formData.append("jd", jdBlob, "job_description.txt");
  //     }
  //     files.forEach((item) => {
  //       if (item.file) {
  //         formData.append("resumes", item.file);
  //       }
  //     });
  //     try {
  //       setUploading(true);
  //       const res = await axios.post(API_URL, formData, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //       setSuccessMsg("Uploaded successfully");
  //       setResponseData(res.data);
  //     } catch (err) {
  //       const msg =
  //         err?.response?.data?.detail ||
  //         err?.response?.data?.message ||
  //         err?.message ||
  //         "Upload failed";
  //       setError(msg);
  //       console.log(err);
  //     } finally {
  //       setUploading(false);
  //     }
  //   }

  //   async function handleUpload() {
  //     if (files.length === 0) {
  //       alert("Please select resumes");
  //       return;
  //     }

  //     const formData = new FormData();

  //     files.forEach(item => {
  //       formData.append("resumes", item.file);
  //     });

  //     try {
  //       const res = await axios.post(
  //         "https://varying-childhood-upheld.ngrok-free.dev/resume_analyse",
  //         formData,
  //         {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         }
  //       );

  //       console.log("API RESPONSE:", res.data);

  //       // ✅ Step 1: set results (for table)
  //       const data = res.data.results || res.data;
  //       setResults(data);

  //       // ✅ Step 2: save into history (PUT HERE 👇)
  //       setHistory((prev) => [
  //         ...prev,
  //         {
  //           date: new Date().toLocaleString(),
  //           files: files,
  //           results: data   // 🔥 store API response also
  //         }
  //       ]);

  //     } catch (err) {
  //   console.log("ERROR FULL:", err.response?.data);
  //   alert(JSON.stringify(err.response?.data, null, 2));
  // }
  //   }

  async function handleUpload() {
    if (!jdFile) {
      alert("Please upload JD file");
      return;
    }

    if (files.length === 0) {
      alert("Please upload resumes");
      return;
    }

    const formData = new FormData();

    formData.append("jd", jdFile);

    files.forEach(item => {
      formData.append("resumes", item.file);
    });

    try {
      const res = await axios.post('https://varying-childhood-upheld.ngrok-free.dev/resume_analyse', formData);
      console.log("SUCCESS:", res.data);
    } catch (err) {
      console.log("ERROR:", err.response.data);
    }
  }
  return (
    <div className=" w-full flex-1 min-h-screen mx-auto p-2 ml-55 bg-slate-50 font-sans text-slate-800">
      <header className="mb-2">
        <h1 className="text-xl font-bold">Post a Job Description</h1>
        <p className="text-slate-500 text-sm">
          The LLM will automatically parse your JD and extract required skills
          and responsibilities for scoring.
        </p>
      </header>

      <div className="space-y-6">
        <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">
              📋
            </div>
            <h2 className="font-bold">Job details</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Job title *
              </label>
              <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Department *
              </label>

              <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Experience required
              </label>
              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>0–1 year</option>
                <option>2–4 years</option>
                <option>5–8 years</option>
                <option>8+ years</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Location
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>

          </div>

        </section>

        <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">
              ✨
            </div>
            <h2 className="font-bold">Job Description & Skills *</h2>
          </div>
          <p className="text-xs text-slate-400 mb-6 italic">
            The LLM will automatically extract required skills and
            responsibilities from the JD text you provide below.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Job description — paste the full JD here
              </label>
              <textarea
                value={jdText}
                onChange={(e) => setJdText(e.target.value)}
                placeholder="Paste the JD text here if you do not want to upload a file..."
                className="w-full p-4 border border-slate-200 rounded-lg text-sm h-32 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">
                  📄
                </div>
                <h2 className="font-bold">Upload Job Description</h2>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                Upload JD file (PDF or DOCX). The system will extract skills
                automatically.
              </p>

              <div
                className="border-2 border-dashed border-blue-200 rounded-xl p-10 bg-blue-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
                onClick={() => jdInputRef.current?.click()}
              >
                <span className="text-2xl mb-3">📄</span>
                <p className="font-semibold">Click to upload JD file</p>
                <p className="text-xs text-gray-400">PDF / DOCX · Max 5MB</p>
                {jdFileName ? (
                  <p className="text-green-600 mt-3">Selected: {jdFileName}</p>
                ) : null}
              </div>

              <input
                ref={jdInputRef}
                id="jdInput"
                type="file"
                accept=".pdf,.doc,.docx,.txt,.tex"
                className="hidden"
                onChange={handleJDFileChange}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Nice-to-have skills (optional) — comma separated
              </label>
              <input
                type="text"
                value={niceToHave}
                onChange={(e) => setNiceToHave(e.target.value)}
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">
              ⬆️
            </div>
            <h2 className="font-bold">Upload Resumes</h2>
          </div>
          <p className="text-xs text-slate-400 mb-6">
            Upload multiple resumes at once — all resumes will be evaluated
            against the JD above. Supported formats: PDF, DOC, DOCX, TXT, TEX ·
            Max 5MB per file.
          </p>

          {/*          <div
            className="border-2 border-dashed border-blue-200 rounded-xl p-10 bg-blue-50/30 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors mb-6"
            onClick={() => resumeInputRef.current?.click()}
          >
            <span className="text-2xl mb-4">⬆️</span>
            <p className="text-sm font-semibold text-slate-700">
              Drop resumes here or click to browse
            </p>

            {selectedResumeCount > 0 ? (
              <p className="text-green-500 mt-4">
                {selectedResumeCount} resume{selectedResumeCount > 1 ? "s" : ""}{" "}
                selected
              </p>
            ) : null}
            {fileName && (
              <p className="text-green-500 mt-2">Last selected: {fileName}</p>
            )}
            <input
              ref={resumeInputRef}
              id="fileInput"
              type="file"
              accept=".pdf,.doc,.docx"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleUpload();
              }}
              disabled={uploading}
              className="bg-green-600 text-white px-6 py-2 rounded-lg mt-4 disabled:opacity-60"
            >
              {uploading ? "Uploading..." : "Upload Resume"}
            </button>
          </div> */}
          <div
            onClick={() => document.getElementById("fileInput").click()}
            className="border-2 border-dashed border-blue-300 p-10 text-center rounded-xl cursor-pointer hover:bg-blue-50"
          >
            <span className="text-2xl">⬆️</span>

            <p className="mt-2 font-semibold">
              Click to upload multiple resumes
            </p>

            <p className="text-sm text-gray-400">
              PDF / DOC / DOCX
            </p>

            <input
              id="fileInput"
              type="file"
              multiple
              className="hidden"
              onChange={handleFileChange}
            />
            <button onClick={handleUpload} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded">
              Upload Resumes
            </button>
          </div>
          {/* {files.map((f, i) => (
            <div key={i} className="flex justify-between mt-2">
              <span>{f.name}</span>
              <span>{f.size}</span>
            </div>
          ))} */}

          <div className="border border-slate-100 rounded-lg overflow-hidden">
            <div className="p-3 bg-slate-50 flex justify-between items-center border-b border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Uploaded Files ({files.length})
              </span>
              <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">
                Ready to process
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {files.length === 0 ? (
                <div className="p-3 text-xs text-slate-400">
                  No resumes selected yet.
                </div>
              ) : (
                files.map((file, idx) => (
                  <div key={`${file.name}-${idx}`} className="p-3 flex justify-between items-center text-xs">
                    <span className="text-slate-700 font-medium">
                      {file.name}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-slate-400">{file.size}</span>
                      <span className="text-green-600 font-bold flex items-center gap-1">
                        ✓ {file.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeResume(idx)}
                        className="text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        {/* {responseData && (
          <section className="bg-white mt-6 p-6 rounded-xl shadow">

            <h2 className="text-lg font-bold mb-4">
              Resume Analysis Results
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="p-2 border">Name</th>
                    <th className="p-2 border">Email</th>
                    <th className="p-2 border">Score</th>
                    <th className="p-2 border">Missing Skills</th>
                    <th className="p-2 border">Remark</th>
                  </tr>
                </thead>

                <tbody>
                  {responseData.map((item, index) => (
                    <tr key={index} className="text-center">
                      <td className="p-2 border">{item.name}</td>
                      <td className="p-2 border">{item.email}</td>
                      <td className="p-2 border">{item.total_score}</td>
                      <td className="p-2 border">
                        {item.missing_skills?.join(", ")}
                      </td>
                      <td className="p-2 border">{item.remark}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </section>
        )} */}



        <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center text-xs">
              ⚙️
            </div>
            <h2 className="font-bold">Scoring configuration</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Strong match threshold
              </label>
              <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>80–100 (Recommended)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Maybe bucket range
              </label>

              <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>50–79 (Recommended)</option>
              </select>
            </div>


            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                HR override window (weak candidates)
              </label>
              <select className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none">
                <option>7 days (Recommended)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-500 mb-2">
                Application deadline
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                defaultValue="30 May 2026"
              />
            </div>
          </div>
        </section>

        {error ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        ) : null}
        {successMsg ? (
          <div className="rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
            {successMsg}
          </div>
        ) : null}
        {responseData ? (

          <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <h2 className="font-bold mb-3">API Response</h2>
            <pre className="text-xs overflow-auto whitespace-pre-wrap break-words">
              <pre>
                {JSON.stringify(responseData, null, 2)}
              </pre>
            </pre>
          </section>
        ) : null}

        <div className="flex justify-end gap-3 pt-4 pb-10">
          <button
            type="button"
            onClick={clearAll}
            className="px-6 py-2.5 text-sm font-semibold text-slate-700 rounded-lg border border-slate-300 hover:bg-slate-50 transition"
          > Clear </button>
          {/* <button
            onClick={fetchHistory}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg">
            View History ({history.length})
          </button> */}
          <button
            type="button"
            onClick={handleUpload}
            disabled={uploading}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all disabled:opacity-60"
          >{uploading ? "Uploading..." : "Analyse Resumes"}
          </button>

        </div>

      </div>

      {/* History Block */}

      {showHistory && (
        <div className="mt-6 bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold mb-4">Uploaded Resume History</h2>

          <table className="w-full text-sm border">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Score</th>
                <th className="p-2 border">Missing Skills</th>
                <th className="p-2 border">Remark</th>
              </tr>
            </thead>

            <tbody>
              {history.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center p-4">
                    No history found
                  </td>
                </tr>
              ) : (
                history.map((item, index) => (
                  <tr key={index}>
                    <td className="p-2 border">{item.candidate_name}</td>
                    <td className="p-2 border">{item.candidate_email}</td>
                    <td className="p-2 border">{item.total_score}</td>
                    <td className="p-2 border">
                      {item.missing_skills?.join(", ")}
                    </td>
                    <td className="p-2 border">{item.remark}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

    </div>

  );

}


