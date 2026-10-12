"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { howWeWorkSteps } from "@/data/howWeWorkData";

// হাইড্রোশন এরর প্রতিরোধের জন্য সংখ্যা রাউন্ড করার হেল্পার
const round = (val: number) => Math.round(val * 10) / 10;

export default function HowWeWork() {
  const [activeStepId, setActiveStepId] = useState<number>(2); // ডিফল্টভাবে ২ নম্বর স্টেপ একটিভ

  const activeStep =
    howWeWorkSteps.find((s) => s.id === activeStepId) || howWeWorkSteps[0];

  // ৬টি ডোনাট স্লাইস তৈরির ফিক্সড ও রাউন্ডেড ক্যালকুলেটর (Zero Hydration Mismatch)
  const renderDonutSlice = (index: number, total: number) => {
    const cx = 200;
    const cy = 200;
    const rOuter = 188;
    const rInner = 86;
    const angleStep = 360 / total; // ৬০ ডিগ্রি
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
    const rMid = (rOuter + rInner) / 2;
    const xMid = round(cx + rMid * Math.cos(toRad(midAngle)));
    const yMid = round(cy + rMid * Math.sin(toRad(midAngle)));

    return { pathData, xMid, yMid };
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ── ১. বাম পাশ: হেডার ও অ্যাক্টিভ স্টেপ ডিটেইলস ── */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WORKING PROCESS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
              How We Work
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We prioritize your requirements, functioning as your committed on-ground representative in Bangladesh. Our approach involves assessing inquiries, locking in factory cost savings, and safeguarding quality from design to vessel departure.
            </p>

            {/* অ্যাক্টিভ স্টেপ স্পেসিফিকেশন কার্ড */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-md space-y-4 transition-all">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                    0{activeStep.id}
                  </span>
                  <h3 className="text-lg font-bold text-[#0B2B43]">
                    {activeStep.fullTitle}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full">
                  ⏱ {activeStep.timeline}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeStep.summary}
              </p>

              {/* ডেলিভারেবল চেকলিস্ট */}
              <div className="space-y-2 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Key Milestones:
                </span>
                {activeStep.deliverables.map((del, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* কল টু অ্যাকশন বাটন */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Start Sourcing Inquiry</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>
              <span className="text-xs text-slate-500 font-medium">
                Click any step on the wheel to view details ↺
              </span>
            </div>
          </div>

          {/* ── ২. ডান পাশ: Anoosha স্টাইলের সার্কুলার হুইল ── */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* ডোনাট হুইল */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] select-none">
              
              <div className="absolute inset-0 rounded-full border border-dashed border-slate-300 pointer-events-none scale-105" />

              <svg
                viewBox="0 0 400 400"
                className="w-full h-full drop-shadow-xl"
              >
                {howWeWorkSteps.map((step, idx) => {
                  const isActive = step.id === activeStepId;
                  const { pathData, xMid, yMid } = renderDonutSlice(
                    idx,
                    howWeWorkSteps.length
                  );
                  const Icon = step.icon;

                  return (
                    <g
                      key={step.id}
                      className="cursor-pointer transition-all duration-300 group"
                      onClick={() => setActiveStepId(step.id)}
                    >
                      {/* স্লাইস পাথ */}
                      <path
                        d={pathData}
                        fill={isActive ? "#00A86B" : "#0B2B43"}
                        className="transition-colors duration-300 hover:brightness-110"
                      />

                      {/* স্লাইস টেক্সট ও আইকন */}
                      <foreignObject
                        x={round(xMid - 46)}
                        y={round(yMid - 32)}
                        width="92"
                        height="64"
                        className="pointer-events-none"
                      >
                        <div className="w-full h-full flex flex-col items-center justify-center text-center text-white px-1">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 mb-1 text-white/90" />
                          <span className="text-[10px] sm:text-[11px] font-bold leading-tight line-clamp-2">
                            {step.id}. {step.shortTitle}
                          </span>
                        </div>
                      </foreignObject>
                    </g>
                  );
                })}

                {/* সেন্ট্রাল কোর ব্র্যান্ড লোগো */}
                <circle
                  cx="200"
                  cy="200"
                  r="82"
                  fill="#FFFFFF"
                  className="drop-shadow-md"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="74"
                  fill="#F8FAFC"
                  stroke="#E2E8F0"
                  strokeWidth="2"
                />
              </svg>

              {/* সেন্টার ব্র্যান্ডিং টেক্সট */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
                <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                  MAXTOP
                </span>
                <span className="text-xs sm:text-sm font-black text-[#0B2B43] tracking-tight leading-tight">
                  INTERNATIONAL
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                  SOURCING LTD
                </span>
              </div>
            </div>

            {/* মোবাইল ট্যাবস */}
            <div className="mt-8 grid grid-cols-3 gap-2 w-full sm:hidden">
              {howWeWorkSteps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStepId(s.id)}
                  className={`p-2 rounded-xl text-xs font-bold text-center transition-all ${
                    activeStepId === s.id
                      ? "bg-emerald-600 text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200"
                  }`}
                >
                  Step {s.id}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}