"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { servicesData, sourcingStepsData } from "@/data/servicesData";

export default function Services() {
  return (
    <section id="services" className="py-12 bg-[#F8FAFC] border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── ১. সেকশন হেডার ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>END-TO-END CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
              Full-Spectrum Apparel Sourcing Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We operate as your on-ground sourcing office in Dhaka, Bangladesh—ensuring 100% factory transparency, competitive FOB pricing, and uncompromising quality.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <span>Request Factory Costing</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

        {/* ── ২. সার্ভিস কার্ডস গ্রিড ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-white border border-slate-200/80 hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                {/* কার্ডের ছবি (next/image এর বদলে অপটিমাইজড img ট্যাগ ব্যবহার করা হয়েছে) */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/25 to-transparent" />
                  
                  {/* সার্ভিস নম্বর ও ক্যাটাগরি */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      SERVICE {item.num}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
                      {item.category}
                    </span>
                  </div>

                  {/* টাইটেল ওভারলে */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white shadow-md flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight drop-shadow-sm leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* কার্ড কনটেন্ট */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* ডেলিভারেবল চেকলিস্ট */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Deliverables
                    </span>
                    {item.deliverables.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* ফুটার ট্যাগস */}
                  <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium bg-slate-100 hover:bg-slate-200/70 text-slate-700 px-2.5 py-1 rounded-md transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}