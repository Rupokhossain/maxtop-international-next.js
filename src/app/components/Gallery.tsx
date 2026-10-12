"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Camera,
  Eye,
  X,
  ShieldCheck,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
} from "lucide-react";
import {
  galleryCategories,
  galleryImages,
  type GalleryItem,
} from "@/data/galleryData";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeModalImg, setActiveModalImg] = useState<GalleryItem | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ── ১. হেডার ও টপ ফ্যাক্টরি ক্যাপাসিটি রিবন ── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STATE-OF-THE-ART MANUFACTURING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
              Factory Floor &amp; Workplace Gallery
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore our audited manufacturing lines, advanced German &amp; Japanese machinery, and rigorous in-house quality testing facilities across Dhaka &amp; Chittagong.
            </p>
          </div>

          {/* টপ কি-ম্যাট্রিক্স ব্যাজ */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <Cpu className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="block text-xs font-black text-[#0B2B43]">120+ Sewing Lines</span>
                <span className="text-[10px] text-slate-500 font-semibold">Juki &amp; Brother Automatics</span>
              </div>
            </div>
            <div className="px-4 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <div>
                <span className="block text-xs font-black text-[#0B2B43]">100% Audited</span>
                <span className="text-[10px] text-slate-500 font-semibold">RSC &amp; BSCI Compliant</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ২. ক্যাটাগরি ফিল্টার পিলস ── */}
        <div className="flex flex-wrap items-center gap-2.5">
          {galleryCategories.map((cat) => {
            const count =
              cat.id === "all"
                ? galleryImages.length
                : galleryImages.filter((img) => img.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#0B2B43] text-white shadow-md shadow-[#0B2B43]/20 scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    activeCategory === cat.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── ৩. গ্যালারি গ্রিড (৩ কলামে অত্যাধুনিক কার্ড) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalImg(item)}
              className="group rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col cursor-pointer"
            >
              {/* ছবির অংশ ও ব্যাজেস */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                />

                {/* ছবি ওভারলে গ্রেডিয়েন্ট */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                {/* টপ ক্যাটাগরি ও ক্যাপাসিটি ট্যাগ */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                    {item.categoryLabel}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-emerald-500/30">
                    ⚡ {item.capacity}
                  </span>
                </div>

                {/* হোভার আইকন */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* কার্ড ডেসক্রিপশন ও স্পেসিফিকেশন */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    <Cpu className="w-3.5 h-3.5" />
                    <span className="truncate">{item.machinery}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B2B43] group-hover:text-emerald-700 transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>

                {/* কমপ্লায়েন্স ট্যাগ ও ইনস্পেক্ট বাটন */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md text-[11px]">
                    ✓ {item.complianceTag}
                  </span>
                  <span className="font-bold text-emerald-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Inspect</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ৪. ট্রাস্ট ফুটার ও ফ্যাক্টরি ট্যুর ব্যানার ── */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B2B43] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              AUDIT VERIFICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Want a Live Video Tour of Our Production Floor?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We arrange live Zoom or WhatsApp video walkthroughs of running sewing lines, fabric testing labs, and sample rooms for prospective buyers.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0B2B43] text-xs font-bold transition-all shadow-md hover:shadow-lg"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Live Factory Tour</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── ৫. প্রিমিয়াম ফুলস্ক্রিন ইমেজ লাইটবক্স (MODAL) ── */}
      {activeModalImg && (
        <div
          onClick={() => setActiveModalImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-3xl shadow-2xl cursor-default flex flex-col md:flex-row overflow-hidden border border-slate-100"
          >
            {/* ক্লোজ বাটন */}
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition shadow-lg"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* মোডাল ছবি */}
            <div className="md:w-1/2 aspect-[4/3] md:aspect-auto bg-slate-900 relative">
              <img
                src={activeModalImg.image}
                alt={activeModalImg.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                {activeModalImg.categoryLabel}
              </div>
            </div>

            {/* মোডাল ডিটেইলস ও স্পেক্স */}
            <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">
                  Machinery: {activeModalImg.machinery}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2B43] leading-snug">
                  {activeModalImg.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-3">
                  {activeModalImg.desc}
                </p>

                {/* টেকনিক্যাল স্পেসিফিকেশন */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Technical Capabilities:
                  </span>
                  {activeModalImg.specifications.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* মোডাল ফুটার */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">
                    Daily Capacity
                  </span>
                  <span className="text-xs font-black text-[#0B2B43]">
                    {activeModalImg.capacity}
                  </span>
                </div>

                <Link
                  href="#contact"
                  onClick={() => setActiveModalImg(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-xs font-bold transition-all"
                >
                  <span>Inquire This Line</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}