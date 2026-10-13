"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// ৪টি উজ্জ্বল ও রিচ কালারের ফ্যাশন ব্যাকগ্রাউন্ড ইমেজ
const heroSlides = [
  {
    title: "Premium Denim Collection",
    url: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Apparel Showroom & Sourcing",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Knitwear & Combed Cotton",
    url: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Woven & Casual Shirts",
    url: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // প্রতি ৫ সেকেন্ডে ব্যাকগ্রাউন্ড ইমেজ স্বয়ংক্রিয়ভাবে চেঞ্জ হবে (কোনো বুলেটের প্রয়োজন নেই)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center py-20 lg:py-28 bg-[#071D2E] text-white">
      
      {/* ── ১. ব্যাকগ্রাউন্ড ইমেজ স্লাইডার (হাই-কনট্রাস্ট ও স্যাচুরেটেড - নো গ্রে হেজ!) ── */}
      <div className="absolute inset-0 pointer-events-none">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-65 scale-105 z-10"
                : "opacity-0 scale-100 z-0"
            }`}
            style={{
              backgroundImage: `url('${slide.url}')`,
              filter: "contrast(1.1) saturate(1.15)", // রঙের জীবন্ত ভাব ধরে রাখবে
            }}
          />
        ))}
      </div>

      {/* ── ২. সিগনেচার ম্যাক্সটপ নেভি ওভারলে (কোনো ঘোলাটে ধূসর ভাব থাকবে না) ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(7, 29, 46, 0.70) 0%, rgba(7, 29, 46, 0.50) 45%, rgba(7, 29, 46, 0.85) 100%)`,
        }}
      />

      {/* ── ৩. মেইন সেন্টারড কনটেন্ট ── */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* লাইভ টপ ব্যাজ (ম্যাক্সটপ নেভি ও এমারেল্ড থিম) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D2E]/90 border border-emerald-500/40 shadow-md mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
            STRATEGIC APPAREL SOURCING &middot; BANGLADESH
          </span>
        </div>

        {/* মেইন শর্ট ও বোল্ড হেডলাইন */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white lg:leading-22 drop-shadow-md">
          Connecting Global Fashion With <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            Certified Factories
          </span>
        </h1>

        {/* সাব-টাইটেল */}
        <p className="mt-6 text-base sm:text-xl text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
          Your agile RMG buying agency in Bangladesh. Transparent open-book costing, sustainable green facilities, and strict AQL 1.5 zero-defect guarantee.
        </p>

        {/* বাটন গ্রুপ (ব্র্যান্ড কালারের সাথে ১০০% ম্যাচিং) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-900/40 flex items-center gap-2 hover:scale-105"
          >
            <span>Request Quotation (RFQ)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/products"
            className="px-8 py-4 rounded-xl bg-[#071D2E]/80 hover:bg-[#071D2E] text-white font-bold text-sm border border-emerald-500/40 hover:border-emerald-400 shadow-md transition-all hover:scale-105"
          >
            <span>Browse Products</span>
          </Link>
        </div>

        {/* ── ৪. বটম মেট্রিক্স বার (ডিপ নেভি ও এমারেল্ড অ্যাকসেন্ট - নো গ্রে বক্স!) ── */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#071D2E]/90 backdrop-blur-xl rounded-2xl border border-emerald-500/30 p-4 sm:p-6 shadow-2xl text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-700/60">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                500 <span className="text-emerald-400 text-sm font-bold">Pcs</span>
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Flexible Low MOQ
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                AQL 1.5
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Strict QA Standard
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-white">
                18M+
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Annual Capacity
              </div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                45+
              </div>
              <div className="text-xs text-slate-300 uppercase tracking-wider font-semibold mt-1">
                Audited Units
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}