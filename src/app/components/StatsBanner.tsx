"use client";

import { statsData } from "@/data/statsData";

export default function StatsBanner() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden border-b border-slate-800">
      {/* ── ১. ব্যাকগ্রাউন্ড পোশাক শো-রুম ছবি ও ডার্ক ব্লু ওভারলে ── */}
      <img
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
        alt="Garments Showroom"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* ডার্ক নেভি ওভারলে (স্ক্রিনশটের মতো শেড) */}
      <div className="absolute inset-0 bg-[#0B2B43]/90 bg-gradient-to-r from-[#071d2e]/95 via-[#0B2B43]/90 to-[#071d2e]/95 backdrop-blur-[1px]" />

      {/* ── ২. ৫টি ফ্রেমড কার্ডস গ্রিড ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`p-6 sm:p-8 rounded-xl bg-white/[0.04] border border-white/20 backdrop-blur-sm hover:border-emerald-400/60 hover:bg-white/[0.08] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center group cursor-default ${
                // মোবাইলে ৫ম আইটেমটি সেন্টারে ২ কলাম জুড়ে বসবে
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              {/* বড় বোল্ড সংখ্যা */}
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>

              {/* সাব-টাইটেল ও বিবরণী */}
              <div className="mt-3 space-y-0.5">
                <span className="block text-[10px] sm:text-[11px] font-bold text-slate-200 uppercase tracking-widest leading-tight">
                  {stat.label}
                </span>
                {stat.subLabel && (
                  <span className="block text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-widest leading-tight">
                    {stat.subLabel}
                  </span>
                )}
              </div>

              {/* হোভারে সূক্ষ্ম এমারেল্ড লাইন */}
              <div className="w-5 h-0.5 bg-emerald-400 mt-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}