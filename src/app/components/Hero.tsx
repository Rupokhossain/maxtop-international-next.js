"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Factory,
  FileSpreadsheet,
  SearchCheck,
  Ship,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
} from "lucide-react";

// ৪টি অত্যন্ত স্পষ্ট ও আকর্ষণীয় গার্মেন্টস প্রোডাক্ট ক্যাটাগরি
const heroProducts = [
  {
    category: "Denim & Jeans Line",
    desc: "Rigid & stretch denim, enzyme/acid washes, custom hardware",
    url: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2000&auto=format&fit=crop",
  },
  {
    category: "Knitwear & Polo Collection",
    desc: "100% Combed cotton polos, pique knits, tees & fleece hoodies",
    url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop",
  },
  {
    category: "Woven & Casual Shirts",
    desc: "Yarn-dyed poplin, Oxford cotton, linen blends & dress shirts",
    url: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    category: "Outerwear & Activewear",
    desc: "Waterproof windbreakers, technical quick-dry & padded jackets",
    url: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // প্রতি ৫ সেকেন্ড পরপর ছবি স্বয়ংক্রিয়ভাবে পরিবর্তিত হবে
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroProducts.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroProducts.length) % heroProducts.length);

  return (
    <section className="relative overflow-hidden min-h-[92vh] flex items-center py-16 lg:py-20 bg-[#0B2338] text-white">
      
      {/* ── ১. ব্যাকগ্রাউন্ড প্রোডাক্ট ইমেজ স্লাইডার (একদম ব্রাইট ও স্পষ্ট) ── */}
      <div className="absolute inset-0 pointer-events-none">
        {heroProducts.map((product, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-105 z-10"
                : "opacity-0 scale-100 z-0"
            }`}
            style={{ backgroundImage: `url('${product.url}')` }}
          />
        ))}
      </div>

      {/* ── ২. ব্যালেন্সড সফট ওভারলে (বামপাশে লেখা স্পষ্ট থাকবে, কিন্তু ডানপাশে প্রোডাক্ট ১০০% পরিষ্কার দেখা যাবে) ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, rgba(11, 35, 56, 0.90) 0%, rgba(11, 35, 56, 0.72) 42%, rgba(11, 35, 56, 0.25) 100%)`,
        }}
      />

      {/* ── ৩. মেইন কনটেন্ট কন্টেইনার ── */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ── LEFT COLUMN: হেডলাইন ও অ্যাকশন বাটন ── */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* লাইভ প্রোডাক্ট ক্যাটাগরি ফ্লিপ ব্যাজ */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0C2340]/80 border border-emerald-400/40 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
              </span>
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-300 uppercase">
                FEATURED LINE: {heroProducts[currentSlide].category}
              </span>
            </div>

            {/* মেইন হেডলাইন */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black tracking-tight text-white leading-[1.12] drop-shadow-md">
              Your Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                Premium Apparel
              </span>{" "}
              <br />
              Sourcing &amp; Production
            </h1>

            {/* স্টিচ ডিভাইডার */}
            <div className="flex items-center gap-3 max-w-xs pt-0.5">
              <div className="h-[2px] bg-gradient-to-r from-emerald-400 to-transparent flex-1"></div>
              <div className="w-2.5 h-2.5 rotate-45 bg-emerald-400 shadow-sm shadow-emerald-400/80"></div>
              <div className="h-[1.5px] bg-slate-400/50 w-16"></div>
            </div>

            {/* সাব-হেডলাইন */}
            <p className="text-base sm:text-lg text-slate-100 max-w-xl font-normal leading-relaxed drop-shadow">
              End-to-end garments buying agency connecting global fashion brands with certified Bangladesh factories. Low MOQ from 500 pcs, transparent FOB pricing, and strict AQL 2.5 zero-defect guarantee.
            </p>

            {/* বাটন গ্রুপ */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-xl shadow-emerald-500/30 flex items-center gap-2 group hover:translate-y-[-1px]"
              >
                <span>Request a Quote (RFQ)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#products"
                className="px-7 py-3.5 rounded-xl bg-[#0C2340]/75 hover:bg-[#0C2340] text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all flex items-center gap-2 hover:border-emerald-400/60 shadow"
              >
                <span>View Full Catalog</span>
              </Link>
            </div>

            {/* ── ৪টি বায়ার ট্রাস্ট মেট্রিক্স ── */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/20 max-w-2xl">
              <div>
                <p className="text-2xl font-black text-white">500 <span className="text-emerald-400 text-base font-bold">Pcs</span></p>
                <p className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold">Low MOQ Support</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">AQL 2.5</p>
                <p className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold">Zero-Defect QA</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">18M+</p>
                <p className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold">Annual Capacity</p>
              </div>
              <div>
                <p className="text-2xl font-black text-white">60+</p>
                <p className="text-[11px] text-slate-200 uppercase tracking-wider font-semibold">Audited Mills</p>
              </div>
            </div>

          </div>

          {/* ── RIGHT COLUMN: "WHAT WE HANDLE FOR YOU" ফ্রস্টেড গ্লাস কার্ড ── */}
          <div className="lg:col-span-5">
            <div className="bg-[#0C2340]/80 backdrop-blur-xl rounded-3xl border border-white/25 p-6 sm:p-7 shadow-2xl shadow-black/50 relative overflow-hidden group">
              
              {/* ব্যাকগ্রাউন্ড হালকা সফট লাইটিং */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* কার্ড টাইটেল বার */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/15">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80"></span>
                  <span className="text-xs font-mono tracking-[0.2em] text-emerald-300 uppercase font-black">
                    WHAT WE HANDLE FOR YOU
                  </span>
                </div>
                <span className="text-[10px] text-slate-200 font-bold bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20 uppercase tracking-wide">
                  Turnkey
                </span>
              </div>

              {/* ৪টি কোর সার্ভিস আইটেম */}
              <div className="space-y-3.5">
                
                {/* 1. Factory Sourcing & Vetting */}
                <div className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/40 shadow-sm">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Factory Sourcing &amp; Vetting
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                      Matching your tech-pack with Accord, BSCI &amp; OEKO-TEX audited facilities.
                    </p>
                  </div>
                </div>

                {/* 2. Costing & Negotiation */}
                <div className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/40 shadow-sm">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      FOB Costing &amp; Negotiation
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                      Transparent open-book yarn, fabric &amp; CM cost breakdown for best margins.
                    </p>
                  </div>
                </div>

                {/* 3. Quality & Compliance */}
                <div className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/40 shadow-sm">
                    <SearchCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Strict AQL 2.5 Quality Control
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                      4-stage inspection: Initial, In-line, During-Production &amp; Final AQL 2.5.
                    </p>
                  </div>
                </div>

                {/* 4. Shipment & Documentation */}
                <div className="flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-white/10 transition-all border border-transparent hover:border-white/15">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-500/40 shadow-sm">
                    <Ship className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      Export Logistics &amp; Customs
                    </h4>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                      Complete BL, CO, Form-A clearance with sea/air port tracking to delivery.
                    </p>
                  </div>
                </div>

              </div>

              {/* কার্ড ফুটার গ্যারান্টি বার */}
              <div className="mt-3.5 pt-3 border-t border-white/15 flex items-center justify-between text-xs text-slate-200">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="w-4 h-4" /> 100% On-Time Shipment Guarantee
                </span>
                <span className="text-[11px] text-slate-300 font-mono">Dhaka HQ</span>
              </div>

            </div>
          </div>

        </div>

        {/* ── ৪. লাইভ স্লাইডার কন্ট্রোল ও প্রগ্রেস নেভিগেশন (নিচে) ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/20">
          <div className="flex items-center gap-3">
            <span className="text-emerald-400 font-mono text-xs font-bold px-2 py-0.5 bg-white/10 rounded">
              0{currentSlide + 1} / 0{heroProducts.length}
            </span>
            <p className="text-xs text-slate-200 font-medium">
              <span className="text-white font-bold">{heroProducts[currentSlide].category}:</span> {heroProducts[currentSlide].desc}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}