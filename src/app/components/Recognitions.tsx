"use client";

import {
  recognizedByLogos,
  partnerCertificationsLogos,
} from "@/data/recognitionsData";

export default function Recognitions() {
  // ইনফিনিট লুপের জন্য পারফেক্ট ডুপ্লিকেশন
  const row1Items = [
    ...recognizedByLogos,
    ...recognizedByLogos,
    ...recognizedByLogos,
    ...recognizedByLogos,
  ];
  const row2Items = [
    ...partnerCertificationsLogos,
    ...partnerCertificationsLogos,
    ...partnerCertificationsLogos,
  ];

  return (
    <section
      id="certifications"
      className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ══════════════════════════════════════════════════════════════
            সেকশন ১: WE ARE RECOGNIZED BY (👈 বাম থেকে ডানে যাবে)
        ══════════════════════════════════════════════════════════════ */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B43] tracking-tight">
              We Are Recognized By
            </h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className="relative w-full overflow-hidden">
            {/* দুই পাশের ফেড গ্রাডিয়েন্ট */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

            {/* বাম থেকে ডানের ট্র্যাক */}
            <div className="maxtop-marquee-left-to-right">
              {row1Items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  title={item.tooltip}
                  className="w-44 sm:w-52 h-24 sm:h-28 mx-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/50 flex items-center justify-center p-4 transition-all shrink-0 cursor-pointer"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-700">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            সেকশন ২: OUR PARTNER CERTIFICATIONS (👉 ডান থেকে বামে যাবে)
        ══════════════════════════════════════════════════════════════ */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B43] tracking-tight">
              Our Partner Certifications
            </h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
          </div>

          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

            {/* ডান থেকে বামের ট্র্যাক */}
            <div className="maxtop-marquee-right-to-left">
              {row2Items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  title={item.tooltip}
                  className="w-44 sm:w-52 h-24 sm:h-28 mx-3 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/50 flex items-center justify-center p-4 transition-all shrink-0 cursor-pointer"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-700">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── বিপরীতমুখী (Dual-Directional) স্মুথ সিএসএস ── */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* রো ১: বাম থেকে ডান দিকে স্ক্রল (Left to Right) */
          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
          .maxtop-marquee-left-to-right {
            display: flex;
            width: max-content;
            animation: scrollLeftToRight 24s linear infinite;
          }

          /* রো ২: ডান থেকে বাম দিকে স্ক্রল (Right to Left) */
          @keyframes scrollRightToLeft {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .maxtop-marquee-right-to-left {
            display: flex;
            width: max-content;
            animation: scrollRightToLeft 28s linear infinite;
          }

          /* মাউস হোভার করলে পজ হবে */
          .maxtop-marquee-left-to-right:hover,
          .maxtop-marquee-right-to-left:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}