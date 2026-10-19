/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

// ৪টি আন্তর্জাতিক মানের ইউনিক অ্যাপারেল ও ফ্যাক্টরি প্রোডাকশন ছবি
const heroSlides = [
  {
    title: "Global Apparel Sourcing & Showroom Line",
    url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Precision Garment Manufacturing Floor",
    url: "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "High-End Denim & Authentic Fabric Finishing",
    url: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Sustainable Raw Textile Fabrics & Organic Cotton",
    url: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // প্রতি ৫ সেকেন্ডে ব্যাকগ্রাউন্ড ইমেজ স্বয়ংক্রিয়ভাবে চেঞ্জ হবে
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[88vh] lg:min-h-[90vh] flex items-center justify-center py-20 lg:py-28 bg-[#071D2E] text-white font-sans">
      
      {/* ── ১. ব্যাকগ্রাউন্ড ইমেজ স্লাইডার ── */}
      <div className="absolute inset-0 pointer-events-none">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-85 scale-105 z-10"
                : "opacity-0 scale-100 z-0"
            }`}
            style={{
              backgroundImage: `url('${slide.url}')`,
            }}
          />
        ))}
      </div>

      {/* ── ২. ব্যালান্সড ডার্ক ওভারলে (আগের চেয়ে বাড়ানো হয়েছে যাতে টেক্সট ক্রিস্টাল ক্লিয়ার থাকে) ── */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(7, 29, 46, 0.72) 0%, rgba(7, 29, 46, 0.60) 50%, rgba(7, 29, 46, 0.78) 100%)`,
        }}
      />

      {/* ── ৩. মেইন সেন্টারড কনটেন্ট ── */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* লাইভ টপ ব্যাজ */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D2E]/90 border border-emerald-500/40 shadow-md mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-bold tracking-wider text-emerald-300 uppercase">
            STRATEGIC APPAREL SOURCING &middot; BANGLADESH
          </span>
        </div>

        {/* মেইন বোল্ড হেডলাইন */}
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white lg:leading-[1.18] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
          Connecting Global Fashion With <br className="hidden sm:inline" />
          <span className="text-emerald-400">
            Certified Factories
          </span>
        </h1>

        {/* সাব-টাইটেল */}
        <p className="mt-6 text-base sm:text-xl text-slate-100 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
          Your agile RMG buying agency in Bangladesh. Transparent open-book costing, sustainable green facilities, and strict AQL 1.5 zero-defect guarantee.
        </p>

        {/* বাটন গ্রুপ */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg shadow-black/40 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Request Quotation (RFQ)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/products"
            className="px-8 py-4 rounded-xl bg-[#071D2E]/80 hover:bg-[#071D2E] text-white font-bold text-sm border border-emerald-500/40 hover:border-emerald-400 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <span>Browse Products</span>
          </Link>
        </div>

      </div>
    </section>
  );
}