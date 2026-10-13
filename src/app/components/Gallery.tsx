"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Maximize2, Sparkles, ArrowRight } from "lucide-react";
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
        
        {/* ── ১. সিম্পল ও আধুনিক হেডার ── */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ON-GROUND INFRASTRUCTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
            Inside Our Production Floor
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A visual overview of our audited manufacturing lines, advanced Japanese machinery, and certified testing facilities in Bangladesh.
          </p>
        </div>

        {/* ── ২. ক্লিন ক্যাটাগরি ফিল্টার পিলস ── */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0B2B43] text-white shadow-sm scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-2xs"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── ৩. প্রিমিয়াম বেন্টো / এডিটরিয়াল ফটো গ্রিড ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredImages.map((item, idx) => {
            // প্রথম ছবিটি অল-ক্যাটাগরিতে বড় ফিচারড ব্যানার হিসেবে দেখাবে
            const isFeatured = activeCategory === "all" && idx === 0;

            return (
              <div
                key={item.id}
                onClick={() => setActiveModalImg(item)}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer bg-slate-950 shadow-sm hover:shadow-2xl transition-all duration-500 ${
                  isFeatured
                    ? "sm:col-span-2 lg:col-span-2 min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]"
                    : "min-h-[260px] sm:min-h-[290px]"
                }`}
              >
                {/* ইমেজ */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 brightness-[0.92] group-hover:brightness-100"
                />

                {/* সিনেমাটিক ডার্ক ওভারলে */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent group-hover:via-slate-950/20 transition-all duration-300" />

                {/* টপ-রাইট এক্সপ্যান্ড আইকন */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* বটম ক্যাপশন (ক্লিন ও লাক্সারি) */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold text-emerald-400 uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 flex items-center gap-2 pt-0.5">
                    <span>{item.machinery}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{item.location}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── ৪. সিম্পল ও ডিসেন্ট ফ্যাক্টরি ট্যুর লিংক ── */}
        <div className="text-center pt-6 border-t border-slate-200/80">
          <p className="text-xs sm:text-sm text-slate-600">
            Planning an on-ground physical audit or live video walkthrough?{" "}
            <Link
              href="/contact"
              className="font-bold text-emerald-700 hover:text-emerald-800 hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Schedule A Factory Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

      </div>

      {/* ── ৫. সিনেমাটিক ক্লিন ইমেজ ভিউয়ার (LIGHTBOX) ── */}
      {activeModalImg && (
        <div
          onClick={() => setActiveModalImg(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 cursor-default"
          >
            {/* ক্লোজ বাটন */}
            <button
              onClick={() => setActiveModalImg(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition cursor-pointer"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* বড় ছবি */}
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeModalImg.image}
                alt={activeModalImg.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* ছবির নিচের তথ্য */}
            <div className="p-4 sm:p-6 bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10 text-white">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                  {activeModalImg.categoryLabel}
                </span>
                <h4 className="text-base sm:text-lg font-bold mt-0.5">
                  {activeModalImg.title}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {activeModalImg.machinery} · {activeModalImg.location}
                </p>
              </div>

              <Link
                href="/contact"
                onClick={() => setActiveModalImg(null)}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-all text-center shrink-0"
              >
                Inquire This Line
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}