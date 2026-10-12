"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { whyChooseUsCards, ourValuesData } from "@/data/whyChooseUsData";

// হাইড্রোশন এরর মুক্ত রাউন্ডিং হেল্পার
const round = (val: number) => Math.round(val * 10) / 10;

export default function WhyChooseUs() {
  const [activeValueId, setActiveValueId] = useState<number>(2); // ডিফল্টভাবে ২ নম্বর (Collaboration) হাইলাইটেড
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  // ক্যারোসেল নেভিগেশন
  const handlePrev = () => {
    setActiveCardIndex((prev) =>
      prev === 0 ? whyChooseUsCards.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveCardIndex((prev) =>
      prev === whyChooseUsCards.length - 1 ? 0 : prev + 1
    );
  };

  // ✅ আপগ্রেডেড ও চওড়া ডোনাট স্লাইস ক্যালকুলেটর (কোনো লেখা গায়ে লাগবে না)
  const renderValueSlice = (index: number, total: number) => {
    const cx = 220;
    const cy = 220;
    const rOuter = 210; // বাইরে পরিধি বাড়ানো হয়েছে
    const rInner = 88;  // ভেতরের পুরুত্ব বৃদ্ধি করা হয়েছে (১২২ পিক্সেল চওড়া স্পেস)
    const angleStep = 360 / total;
    const gap = 2.5;

    const startAngle = -90 + index * angleStep + gap / 2;
    const endAngle = -90 + (index + 1) * angleStep - gap / 2;
    const toRad = (deg: number) => (deg * Math.PI) / 180;

    const x1Out = round(cx + rOuter * Math.cos(toRad(startAngle)));
    const y1Out = round(cy + rOuter * Math.sin(toRad(startAngle)));
    const x2Out = round(cx + rOuter * Math.cos(toRad(endAngle)));
    const y2Out = round(cy + rOuter * Math.sin(toRad(endAngle)));

    const x1In = round(cx + rInner * Math.cos(toRad(startAngle)));
    const y1In = round(cy + rInner * Math.sin(toRad(startAngle)));
    const x2In = round(cx + rInner * Math.cos(toRad(endAngle)));
    const y2In = round(cy + rInner * Math.sin(toRad(endAngle)));

    const pathData = `M ${x1Out} ${y1Out} A ${rOuter} ${rOuter} 0 0 1 ${x2Out} ${y2Out} L ${x2In} ${y2In} A ${rInner} ${rInner} 0 0 0 ${x1In} ${y1In} Z`;

    const midAngle = -90 + (index + 0.5) * angleStep;
    const rMid = 149; // টেক্সট সেন্টারিং পয়েন্ট
    const xMid = round(cx + rMid * Math.cos(toRad(midAngle)));
    const yMid = round(cy + rMid * Math.sin(toRad(midAngle)));

    return { pathData, xMid, yMid };
  };

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ══════════════════════════════════════════════════════════════
            অংশ ১: WHY CHOOSE US (ক্যারোসেল ও কার্ডস)
        ══════════════════════════════════════════════════════════════ */}
        <div>
          {/* হেডার */}
          <div className="flex items-center justify-center mb-14">
            <div className="relative flex items-center justify-center w-full max-w-xl">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative px-8 py-3 bg-white border border-slate-300 rounded-lg shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-black text-[#0B2B43] tracking-tight">
                  Why Choose Us
                </h2>
              </div>
            </div>
          </div>

          {/* ৪টি কার্ড গ্রিড ও স্লাইডার */}
          <div className="relative">
            {/* ডেক্সটপ ৪টি কার্ড */}
            <div className="hidden lg:grid grid-cols-4 gap-6">
              {whyChooseUsCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className="p-7 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-slate-50 border-2 border-slate-200 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:border-emerald-500 transition-all">
                        <Icon className="w-8 h-8 text-emerald-600" />
                      </div>

                      <h3 className="text-base font-bold text-center text-[#0B2B43] mb-3 leading-snug">
                        {card.title}
                      </h3>

                      <p className="text-xs text-slate-600 text-center leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 text-center">
                      <span className="inline-block text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        {card.highlight}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* মোবাইল স্লাইডার */}
            <div className="lg:hidden">
              <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-md">
                {(() => {
                  const card = whyChooseUsCards[activeCardIndex];
                  const Icon = card.icon;
                  return (
                    <div>
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-slate-50 border-2 border-emerald-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-bold text-center text-[#0B2B43] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-sm text-slate-600 text-center leading-relaxed mb-6">
                        {card.desc}
                      </p>
                      <div className="text-center">
                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full">
                          {card.highlight}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              <div className="flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 shadow-sm"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {whyChooseUsCards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveCardIndex(idx)}
                      className={`h-2.5 rounded-full transition-all ${
                        activeCardIndex === idx
                          ? "w-7 bg-emerald-600"
                          : "w-2.5 bg-slate-300"
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-slate-100 shadow-sm"
                  aria-label="Next card"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            অংশ ২: OUR VALUES (ব্যালান্সড গ্রিড ও নো-ওভারল্যাপ হুইল)
        ══════════════════════════════════════════════════════════════ */}
        <div className="pt-12 border-t border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ── বাম পাশ: ৫ কলাম জুড়ে বড় সার্কুলার হুইল + ওয়াটারমার্ক (ফাঁকা জায়গা থাকবে না) ── */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[450px] lg:h-[450px] select-none">
                
                {/* সূক্ষ্ম আউটার ড্যাশড সার্কেল */}
                <div className="absolute inset-0 rounded-full border border-dashed border-slate-300/80 pointer-events-none scale-105" />

                <svg viewBox="0 0 440 440" className="w-full h-full drop-shadow-xl overflow-visible">
                  {/* কার্ভড ওয়াটারমার্ক পাথ (Anoosha স্টাইল টেক্সট রিং) */}
                  <defs>
                    <path
                      id="textRingPath"
                      d="M 220, 220 m -228, 0 a 228,228 0 1,1 456,0 a 228,228 0 1,1 -456,0"
                      fill="none"
                    />
                  </defs>
                  <text className="text-[10px] font-bold tracking-[0.22em] fill-slate-400/70 uppercase">
                    <textPath href="#textRingPath" startOffset="5%">
                      MAXTOP INTERNATIONAL • APPAREL SOURCING LTD • 360° ETHICAL COMMITMENT •
                    </textPath>
                  </text>

                  {/* ৬টি ডোনাট স্লাইস */}
                  {ourValuesData.map((val, idx) => {
                    const isActive = val.id === activeValueId;
                    const { pathData, xMid, yMid } = renderValueSlice(
                      idx,
                      ourValuesData.length
                    );
                    const Icon = val.icon;

                    return (
                      <g
                        key={val.id}
                        className="cursor-pointer transition-all duration-300 group"
                        onClick={() => setActiveValueId(val.id)}
                      >
                        {/* স্লাইস পাথ */}
                        <path
                          d={pathData}
                          fill={isActive ? "#00A86B" : "#0B2B43"}
                          className="transition-colors duration-300 hover:brightness-110"
                        />

                        {/* ✅ বড় ও চওড়া টেক্সট বক্স (কোনো লেখা গায়ে লাগবে না) */}
                        <foreignObject
                          x={round(xMid - 52)}
                          y={round(yMid - 28)}
                          width="104"
                          height="56"
                          className="pointer-events-none"
                        >
                          <div className="w-full h-full flex flex-col items-center justify-center text-center text-white px-0.5">
                            <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 mb-1 text-white/95" />
                            <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-tight leading-tight line-clamp-1">
                              {val.name}
                            </span>
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}

                  {/* সেন্টার কোর লোগো বৃত্ত */}
                  <circle cx="220" cy="220" r="80" fill="#FFFFFF" className="drop-shadow-md" />
                  <circle cx="220" cy="220" r="72" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                </svg>

                {/* সেন্টার টেক্সট ব্র্যান্ডিং */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                  <span className="text-[9px] font-black tracking-widest text-emerald-600 uppercase">
                    MAXTOP
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#0B2B43] tracking-tight leading-tight">
                    INTERNATIONAL
                  </span>
                  <span className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                    OUR VALUES
                  </span>
                </div>
              </div>

              {/* মোবাইল ভ্যালু বাটনস */}
              <div className="mt-8 grid grid-cols-3 gap-2 w-full sm:hidden">
                {ourValuesData.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActiveValueId(v.id)}
                    className={`p-2 rounded-xl text-xs font-bold text-center transition-all ${
                      activeValueId === v.id
                        ? "bg-emerald-600 text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200"
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* ── ডান পাশ: ৭ কলাম জুড়ে ভ্যালুর বিবরণী ── */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORPORATE ETHICS</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0B2B43] tracking-tight">
                Our Values
              </h2>

              {/* ৬টি ভ্যালুর লিস্ট */}
              <div className="space-y-3.5">
                {ourValuesData.map((val) => {
                  const isActive = val.id === activeValueId;
                  return (
                    <div
                      key={val.id}
                      onClick={() => setActiveValueId(val.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-emerald-50/50 border-emerald-500 shadow-sm"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <h3 className="text-sm font-bold text-[#0B2B43] mb-1 flex items-center gap-2">
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive ? "bg-emerald-600" : "bg-slate-300"
                          }`}
                        />
                        <span>{val.name}:</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4">
                        {val.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* সিটিএ বাটন */}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
                >
                  <span>Work With An Ethical Partner</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}