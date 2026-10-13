"use client";

import { useState, useEffect, useRef } from "react";
import {
  Factory,
  Layers,
  Globe2,
  Award,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { statsData } from "@/data/statsData";

// ── ১. স্মুথ অ্যানিমেটেড কাউন্টার সাব-কম্পোনেন্ট ──
function AnimatedCounter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // সংখ্যা এবং সাফিক্স আলাদা করা (যেমন: "600K+" -> সংখ্যা: 600, সাফিক্স: "K+")
  const match = value.match(/^([\d.,]+)(.*)$/);
  const targetNum = match ? parseFloat(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const isDecimal = match ? match[1].includes(".") : false;

  useEffect(() => {
    // ইউজার স্ক্রল করে যখন এই সেকশনে আসবে, তখনই এনিমেশন শুরু হবে
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted || targetNum === null) return;

    let startTime: number | null = null;
    const duration = 2000; // ২ সেকেন্ডের প্রিমিয়াম ট্রানজিশন

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // easeOutExpo কার্ভ: শুরুতে স্পিডে উঠবে, শেষের দিকে এসে স্মুথলি থামবে
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeProgress * targetNum;

      if (isDecimal) {
        setDisplayValue(current.toFixed(1));
      } else {
        setDisplayValue(Math.floor(current).toLocaleString());
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(isDecimal ? targetNum.toFixed(1) : targetNum.toLocaleString());
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, targetNum, isDecimal]);

  if (targetNum === null) {
    return <span>{value}</span>;
  }

  return (
    <span ref={elementRef} className="tabular-nums font-black">
      {displayValue}
      {suffix}
    </span>
  );
}

// ── ২. মূল StatsBanner কম্পোনেন্ট ──
export default function StatsBanner() {
  const statIcons = [
    Layers,      // 7 Y+
    Award,       // 16 Y+
    Globe2,      // 18+ Countries
    Factory,     // 100+ Mills
    ShieldCheck, // 600K+ Output
  ];

  return (
    <section className="relative py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* টপ ব্যাজ */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold tracking-widest uppercase">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Manufacturing Scale &amp; Track Record</span>
          </div>
        </div>

        {/* ৫টি ক্লিন কার্ডস (লাইভ কাউন্টার সহ) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => {
            const IconComponent = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.id || idx}
                className={`group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center text-center ${
                  idx === 4 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                {/* এমারেল্ড আইকন বক্স */}
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-5 h-5" />
                </div>

                {/* লাইভ কাউন্টিং সংখ্যা (০ থেকে কাউন্ট হয়ে বাড়বে) */}
                <span className="text-3xl sm:text-4xl lg:text-5xl text-[#071D2E] tracking-tight group-hover:text-emerald-600 transition-colors duration-300">
                  <AnimatedCounter value={stat.value} />
                </span>

                {/* সাব-টাইটেল ও বিবরণী */}
                <div className="mt-2.5 space-y-0.5">
                  <span className="block text-xs font-bold text-slate-700 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </span>
                  {stat.subLabel && (
                    <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider leading-tight">
                      {stat.subLabel}
                    </span>
                  )}
                </div>

                {/* হোভারে এমারেল্ড ইন্ডিকেটর বার */}
                <div className="w-8 h-1 bg-emerald-500 mt-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}