/* eslint-disable @typescript-eslint/no-explicit-any */
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

  // ডোনাট স্লাইস ক্যালকুলেটর
  const renderValueSlice = (index: number, total: number) => {
    const cx = 220;
    const cy = 220;
    const rOuter = 210;
    const rInner = 88;
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
    const rMid = 149;
    const xMid = round(cx + rMid * Math.cos(toRad(midAngle)));
    const yMid = round(cy + rMid * Math.sin(toRad(midAngle)));

    return { pathData, xMid, yMid };
  };

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ══════════════════════════════════════════════════════════════
            অংশ ১: WHY CHOOSE US (কার্ডগুলো একটু বড় ও স্পষ্ট করা হয়েছে)
        ══════════════════════════════════════════════════════════════ */}
        <div>
          {/* হেডার */}
          <div className="flex items-center justify-center mb-12">
            <div className="relative flex items-center justify-center w-full max-w-xl">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative px-8 py-3 bg-white border border-slate-300 rounded-xl shadow-sm">
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

                      {/* বড় ও স্পষ্ট টাইটেল */}
                      <h3 className="text-lg font-bold text-center text-[#0B2B43] mb-3 leading-snug">
                        {card.title}
                      </h3>

                      {/* আরামদায়ক ফন্ট সাইজ */}
                      <p className="text-sm text-slate-600 text-center leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 text-center">
                      <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200/60 px-3.5 py-1.5 rounded-full">
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
                      <h3 className="text-xl font-bold text-center text-[#0B2B43] mb-3">
                        {card.title}
                      </h3>
                      <p className="text-base text-slate-600 text-center leading-relaxed mb-6">
                        {card.desc}
                      </p>
                      <div className="text-center">
                        <span className="text-sm font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-4 py-1.5 rounded-full">
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


      </div>
    </section>
  );
}