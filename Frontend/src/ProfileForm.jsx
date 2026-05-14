import React from 'react'

const ProfileForm = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#f3f5fb] flex items-center justify-center p-4">
      <div className="w-full max-w-[540px] bg-white rounded-[28px] border border-[#dfe4f2] shadow-sm px-10 py-9">
        
        {/* Progress Lines */}
        <div className="flex gap-3 mb-10">
          <div className="h-[6px] flex-1 rounded-full bg-[#2f66f6]" />
          <div className="h-[6px] flex-1 rounded-full bg-[#2f66f6]" />
          <div className="h-[6px] flex-1 rounded-full bg-[#2f66f6]" />
        </div>

        {/* Step Badge */}
        <div className="inline-flex items-center gap-2 border border-[#dbe4ff] bg-[#f4f7ff] px-5 py-2 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-[#2f66f6]" />
          <span className="text-[#2f66f6] text-sm font-semibold tracking-wide uppercase">
            Step 3 of 3
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[44px] leading-[50px] font-bold text-[#1f2440] mb-4">
          Complete your profile
        </h1>

        <p className="text-[#7b84a6] text-[22px] leading-[38px] mb-10">
          Tell us a bit about yourself. This helps personalise your dashboard
          and lets candidates know who to contact.
        </p>

        {/* First & Last Name */}
        <div className="grid grid-cols-2 gap-5 mb-7">
          <div>
            <label className="block text-[#687197] font-semibold text-[18px] mb-3">
              First name
            </label>

            <div className="h-[68px] border border-[#dbe1ef] rounded-2xl px-5 flex items-center gap-4">
              <Circle size={16} className="text-[#7a82a8]" />
              <input
                type="text"
                placeholder="Priya"
                className="w-full outline-none text-[20px] text-[#5e647d] placeholder:text-[#7a7a7a]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#687197] font-semibold text-[18px] mb-3">
              Last name
            </label>

            <div className="h-[68px] border border-[#dbe1ef] rounded-2xl px-5 flex items-center gap-4">
              <Circle size={16} className="text-[#7a82a8]" />
              <input
                type="text"
                placeholder="Sharma"
                className="w-full outline-none text-[20px] text-[#5e647d] placeholder:text-[#7a7a7a]"
              />
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block text-[#687197] font-semibold text-[18px] mb-3">
            Work email
          </label>

          <div className="h-[68px] border border-[#dbe1ef] rounded-2xl px-5 flex items-center gap-4">
            <Mail size={22} className="text-[#7a82a8]" />

            <input
              type="email"
              placeholder="priya@company.com"
              className="w-full outline-none text-[20px] text-[#5e647d] placeholder:text-[#7a7a7a]"
            />
          </div>
        </div>

        <p className="text-[#8a92b2] text-[16px] mb-8 mt-3">
          Pre-filled from your verified email — you can update this.
        </p>

        {/* Phone */}
        <div className="mb-8">
          <label className="block text-[#687197] font-semibold text-[18px] mb-3">
            Phone number
          </label>

          <div className="flex gap-3">
            {/* Country Code */}
            <div className="w-[100px] h-[68px] rounded-2xl border border-[#dbe1ef] bg-[#f5f7fd] flex items-center justify-center text-[22px] font-semibold text-[#1f2440]">
              +91
            </div>

            {/* Phone Input */}
            <div className="flex-1 h-[68px] border border-[#dbe1ef] rounded-2xl px-5 flex items-center gap-4">
              <Phone size={22} className="text-pink-500" />

              <input
                type="text"
                placeholder="98765 43210"
                className="w-full outline-none text-[20px] text-[#5e647d] placeholder:text-[#7a7a7a]"
              />
            </div>
          </div>
        </div>

        {/* Designation */}
        <div className="mb-10">
          <label className="block text-[#687197] font-semibold text-[18px] mb-3">
            Designation{" "}
            <span className="font-normal text-[#7b84a6]">(optional)</span>
          </label>

          <div className="h-[68px] border border-[#dbe1ef] rounded-2xl px-5 flex items-center gap-4">
            <BriefcaseBusiness
              size={22}
              className="text-[#7a82a8]"
            />

            <input
              type="text"
              placeholder="e.g. Senior HR Manager"
              className="w-full outline-none text-[20px] text-[#5e647d] placeholder:text-[#7a7a7a]"
            />
          </div>
        </div>

        {/* Button */}
        <button className="w-full h-[72px] rounded-2xl bg-[#2f66f6] hover:bg-[#2456dd] transition-all duration-300 text-white text-[24px] font-semibold shadow-[0_12px_30px_rgba(47,102,246,0.25)]">
          Enter Dashboard →
        </button>

        {/* Footer */}
        <p className="text-center text-[#8a92b2] text-[16px] mt-8">
          Your information is only visible to your organisation's admin.
        </p>
      </div>
    </div>

    </div>
  )
}

export default ProfileForm
