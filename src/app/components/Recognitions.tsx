"use client";

import {
  recognizedByLogos,
  partnerCertificationsLogos,
} from "@/data/recognitionsData";

export default function Recognitions() {
  // ── ১. স্ক্রিন সাইজ নির্বিশেষে মসৃণ ইনফিনিট লুপের জন্য ব্যালান্সড ডুপ্লিকেশন ──
  const repeatCount1 = Math.max(2, Math.ceil(12 / (recognizedByLogos.length || 1)));
  const base1: (typeof recognizedByLogos)[number][] = [];
  for (let i = 0; i < repeatCount1; i++) {
    base1.push(...recognizedByLogos);
  }
  // লুপের জন্য 50% ডুপ্লিকেট ট্র্যাক
  const row1Items = [...base1, ...base1];

  const repeatCount2 = Math.max(2, Math.ceil(12 / (partnerCertificationsLogos.length || 1)));
  const base2: (typeof partnerCertificationsLogos)[number][] = [];
  for (let i = 0; i < repeatCount2; i++) {
    base2.push(...partnerCertificationsLogos);
  }
  // লুপের জন্য 50% ডুপ্লিকেট ট্র্যাক
  const row2Items = [...base2, ...base2];

  // ── ২. উভয় সারির গতি (Pixels Per Second) ১০০% সমান রাখার নিখুঁত টাইমিং ──
  // প্রতি কার্ড অতিক্রম করতে ২.৮ সেকেন্ড সময় নেবে (খুবই আরামদায়ক ও প্রিমিয়াম রিডিং স্পিড)
  const secondsPerCard = 2.8;
  const durationRow1 = Math.round(base1.length * secondsPerCard);
  const durationRow2 = Math.round(base2.length * secondsPerCard);

  return (
    <section
      id="certifications"
      className="py-12 bg-[#F8FAFC] border-slate-200 overflow-hidden w-full"
    >
      <div className="w-full space-y-16">
        
        {/* ══════════════════════════════════════════════════════════════
            সেকশন ১: WE ARE RECOGNIZED BY (👈 বাম থেকে ডানে যাবে)
        ══════════════════════════════════════════════════════════════ */}
        <div>
          {/* হেডলাইন - সেন্টারে সাজানো */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B43] tracking-tight">
              We Are Recognized By
            </h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
          </div>

          {/* সম্পূর্ণ ফুল-উইডথ এজ-টু-এজ ট্র্যাক */}
          <div className="relative w-full overflow-hidden">
            {/* দুই পাশের ফেড গ্রাডিয়েন্ট */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />

            {/* বাম থেকে ডানের ট্র্যাক - গতি নিখুঁতভাবে ব্যালান্সড */}
            <div
              className="maxtop-marquee-left-to-right"
              style={{ animationDuration: `${durationRow1}s` }}
            >
              {row1Items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  title={item.tooltip}
                  className="w-44 sm:w-56 h-24 sm:h-28 mx-3 sm:mx-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/50 flex items-center justify-center p-4 transition-all shrink-0 cursor-pointer"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-700 text-center">
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
          {/* হেডলাইন - সেন্টারে সাজানো */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B43] tracking-tight">
              Our Partner Certifications
            </h2>
            <div className="w-12 h-1 bg-emerald-600 mx-auto mt-2 rounded-full" />
          </div>

          {/* সম্পূর্ণ ফুল-উইডথ এজ-টু-এজ ট্র্যাক */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-10 pointer-events-none" />

            {/* ডান থেকে বামের ট্র্যাক - গতি নিখুঁতভাবে ব্যালান্সড */}
            <div
              className="maxtop-marquee-right-to-left"
              style={{ animationDuration: `${durationRow2}s` }}
            >
              {row2Items.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  title={item.tooltip}
                  className="w-44 sm:w-56 h-24 sm:h-28 mx-3 sm:mx-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-500/50 flex items-center justify-center p-4 transition-all shrink-0 cursor-pointer"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain"
                    />
                  ) : (
                    <span className="text-xs font-bold text-slate-700 text-center">
                      {item.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── বিপরীতমুখী স্মুথ সিএসএস ── */}
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
            animation-name: scrollLeftToRight;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
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
            animation-name: scrollRightToLeft;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          /* মাউস নিলে স্ক্রল পজ হবে */
          .maxtop-marquee-left-to-right:hover,
          .maxtop-marquee-right-to-left:hover {
            animation-play-state: paused;
          }
        `
      }} />
    </section>
  );
}