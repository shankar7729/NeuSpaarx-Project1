import React, { useState } from "react";
import { Mail, Zap, Layers3, Sparkles, Phone, Check, ZapIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";



const LoginPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

//  const handleSendOtp = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Validation
//     if (!email) {
//       setError("Email address is required");
//       return;
//     }

//     if (!emailRegex.test(email)) {
//       setError("Enter a valid email address");
//       return;
//     }

//     setError("");

//     // Generate Random 6 Digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000);

//     // Store OTP
//     setGeneratedOtp(otp);

//     // console.log("Generated OTP:", otp);
//     alert(`Your OTP is ${otp}`);

//     // ============================================
//     // API CALL TO SEND OTP TO HR EMAIL
//     // ============================================

//     try {
//       const response = await fetch("http://localhost:5000/send-otp", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//           otp: otp,
//         }),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert("OTP sent successfully to HR Email");
//         setStep(2);
//       } else {
//         alert("Failed to send OTP");
//       }
//     } catch (err) {
//       console.log(err);
//       alert("Server Error");
//     }
//   };
   const handleSendOtp = async () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // VALIDATION
  if (!email) {
    setError("Email address is required");
    return;
  }

  if (!emailRegex.test(email)) {
    setError("Enter a valid email address");
    return;
  }

  setError("");

  try {
    const response = await fetch("http://localhost:5000/send-otp", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      alert("OTP sent successfully");

      setStep(2);
    } else {
      alert(data.message || "Failed to send OTP");
    }

  } catch (err) {
    console.log(err);

    alert("Server Error");
  }
};
  return (
    <div className="min-h-screen flex bg-[#f4f5fb]">

      {/* LEFT SIDE */}
      <div className="w-1/2 bg-gradient-to-br from-[#0f1545] to-[#1d2a7a] text-white relative overflow-hidden">

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />

        <div className="relative z-10 h-full flex flex-col justify-between px-14 py-12">

          {/* Top Content */}
          <div>

            {/* Logo */}
            <div className="flex items-center gap-2 mt-[-45px]">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center font-bold text-sm shadow-lg">
                R
              </div>

              <h1 className="!text-xl font-bold !text-white">
                Neuspaarx Resume Agent
              </h1>
            </div>

            {/* Heading */}
            <div className="mt-3">
              <p className="uppercase tracking-[2px] text-xs text-indigo-300 font-semibold !mr-70">
                HR Intelligence Platform
              </p>

              <h2 className="!text-3xl font-bold leading-tight !mt-6 !text-white !mr-87">
                Hire faster.
                <br />
                <span className="text-indigo-300 !ml-6">
                  Score smarter.
                </span>
              </h2>

              <p className="mt-5 text-left !ml-6 !flex gap-4 text-sm leading-9 text-indigo-100 max-w-xl !text-[#ffffff8C]">
                Neuspaarx Resume Agent automatically ranks every
                application against your JD — so your team spends time
                on conversations, not CVs.
              </p>
            </div>

            {/* Features */}
            <div className="mt-10 space-y-8">

              <div className="flex items-start gap-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Zap size={20} />
                </div>

                <div>
                  <h3 className="text-xs font-semibold mr-46 ">
                    LLM-Powered Scoring
                  </h3>

                  <p className="text-indigo-100 mt-1 text-sm mr-25">
                    Every resume scored against your JD in seconds.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Layers3 size={20} />
                </div>

                <div>
                  <h3 className="text-xs font-semibold mr-40">
                    Smart Bucket System
                  </h3>

                  <p className="text-indigo-100 mt-1 text-sm mr-30">
                    Strong, Maybe, and Weak candidate filtering.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <Sparkles size={20} />
                </div>

                <div>
                  <h3 className="text-xs font-semibold mr-40">
                    Multi-Role Management
                  </h3>

                  <p className="text-indigo-100 mt-1 text-sm mr-60">
                    Manage all candidate pipelines in one place.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Stats */}
          <div className="border-t border-white/10 flex items-center gap-2 opacity-80">

            <div>
              <h2 className="font-bold !text-white ">10×</h2>
              <p className="text-indigo-200 mt-1 uppercase text-xs">
                Faster Screening
              </p>
            </div>

            <div>
              <h2 className=" font-bold !text-white ">471</h2>
              <p className="text-indigo-200 mt-1 uppercase text-xs">
                Resumes Scored Today
              </p>
            </div>

            <div>
              <h2 className=" font-bold !text-white ">98%</h2>
              <p className="text-indigo-200 mt-1 uppercase text-xs">
                HR Satisfaction
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 mt-[-70px] min-h-screen flex items-center justify-center bg-[#f5f6fb] relative">

        {/* Login Card */}
        <div className="w-[500px] bg-white rounded-[20px] shadow-xl border border-gray-100 p-3">

          {/* Step Badge */}
          {step === 1 && (
            <div>

              <div className="mr-70 uppercase inline-flex items-center px-1 py-[-1] rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                secure access
              </div>

              {/* Heading */}
              <h1 className="!text-2xl font-bold text-[#1a1f36] !mt-4 !mr-50">
                Welcome back 👋
              </h1>

              <p className="text-left text-gray-500 text-xs !mt-[-2] leading-5">
                Enter your work email address and we'll send you a one-time password to verify your access.
              </p>

              {/* INPUT */}
              <div className="mt-3">

                <label className="block  text-xs text-[#6b7299] font-semibold mb-1 !mr-70">
                  Work email address
                </label>

                {/* <div className="h-10 border border-gray-200 hover:border-blue-500 shadow-l rounded-l px-3 flex items-center gap-3">
                  <Mail className="text-gray-400" size={20} />

                  <input
                    type="email"
                    placeholder="priya@company.com"
                    className="flex-1 outline-none text-sm hover:bg-gray-50 transition rounded-r"
                  />
                </div> */}
                <div
                  className={`h-10 border rounded-lg px-3 flex items-center gap-3 transition
              ${error
                      ? "border-red-500"
                      : "border-gray-200 hover:border-blue-500"
                    }`}
                >
                  <Mail className="text-gray-400" size={20} />

                  <input
                    type="email"
                    placeholder="priya@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className="flex-1 outline-none text-sm"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <p className="text-red-500 text-xs mt-1 text-left">
                    {error}
                  </p>
                )}
                <p className="text-left text-gray-400 text-xs mt-2">
                  Only email addresses whitelisted by your admin can access this platform.
                </p>

              </div>

              {/* BUTTON */}
              <button
                onClick={handleSendOtp}
                className="w-full h-10 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xl font-semibold mt-10 shadow-lg hover:scale-[1.01] transition"
              >
                Send OTP →
              </button>
              {/* Terms */}
              <p className="text-center text-gray-400 text-sm mt-8 leading-7">
                By continuing you agree to Neuspaarx Resume Agent's
                <span className="text-blue-600 cursor-pointer"> Terms of Service </span>
                and
                <span className="text-blue-600 cursor-pointer"> Privacy Policy.</span>
              </p>

            </div>
          )}

          {/* ================= STEP 2 ================= */}

          {step === 2 && (
            <div>

              <button
                onClick={() => setStep(1)}
                className="mr-80 mb-3 text-[#6b7299] text-sm hover:text-blue-600 transition"
              >
                ← Back
              </button>

              <div className="!text-sm uppercase mr-60 inline-flex items-center px-1 py-[-1] rounded-full bg-blue-50 text-blue-600 text-sm font-semibold border border-blue-100">
                otp verification
              </div>

              <h1 className="!text-xl font-bold text-[#1a1f36] !mt-4 !mr-60">
                Check your inbox
              </h1>

              <p className="text-left text-gray-500 text-sm !ml-5 leading-5">
                We've sent a 6-digit OTP to
                <span className="font-semibold text-[#1a1f36]">
                  {" "}
                  priya@company.com.
                </span>
                It expires in 10 minutes.
              </p>

              {/* EMAIL BOX */}
              <div className="mt-3 h-10 border border-gray-200 rounded-xl px-3 flex items-center justify-between bg-[#f8f9fc]">

                <div className="flex items-center gap-1">

                  <Mail size={15} className="text-[#6b7299]" />

                  <p className="text-sm text-[#1a1f36]">
                    priya@company.com
                  </p>

                </div>

                <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">
                  Change
                </button>

              </div>

              {/* OTP INPUTS */}
              <div className="flex gap-1 mt-3">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <input
                    key={item}
                    maxLength={1}
                    className="w-12 h-12 ml-3 border border-gray-200 rounded-xl text-center text-xl font-semibold outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition"
                  />
                ))}

              </div>

              {/* RESEND */}
              <div className="flex items-center justify-between mt-3 ">

                <button className="text-sm ml-4 text-blue-400 font-semibold hover:text-blue-600 transition">
                  Resend OTP
                </button>

                <p className="text-sm ml-4 text-[#6b7299] text-lg">
                  Resend in 0:21
                </p>

              </div>

              {/* VERIFY BUTTON */}
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full h-10 rounded-xl bg-gradient-to-r from-[#8da5f8] to-[#7e97f5] text-white text-xl font-semibold mt-5 shadow-lg hover:scale-[1.01] transition"
              >
                Verify & Continue →
              </button>

              {/* FOOTER */}
              <p className="text-center text-sm text-[#6b7299] text-base mt-7 leading-6">

                Didn't receive the email? Check your spam folder or

                <span className="text-blue-600 cursor-pointer hover:text-blue-700">
                  {" "}
                  request a new OTP.
                </span>

              </p>

            </div>
          )}



        </div>

      </div>
    </div>

  );
};

export default LoginPage;