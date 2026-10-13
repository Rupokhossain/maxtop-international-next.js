/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Globe2,
  TrendingDown,
  Clock,
  Sparkles,
  Layers,
  CheckCircle2,
  Building2,
  Leaf,
  CheckCheck,
  ArrowRight,
} from "lucide-react";

// ৩৬০ ডিগ্রি স্পিনিং হুইলের ৮টি প্রোডাক্ট
const spinningProducts = [
  {
    name: "Outerwear & Jackets",
    spec: "Padded & Fleece",
    img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=400&auto=format&fit=crop",
    pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Denim & Jeans Line",
    spec: "Rigid & Stretch",
    img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop",
    pos: "top-[14%] right-[14%] translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Knitwear & Polos",
    spec: "100% Combed Cotton",
    img: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=400&auto=format&fit=crop",
    pos: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Woven & Dress Shirts",
    spec: "Oxford & Linen",
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400&auto=format&fit=crop",
    pos: "bottom-[14%] right-[14%] translate-x-1/2 translate-y-1/2",
  },
  {
    name: "Hoodies & Sweatshirts",
    spec: "Heavyweight Fleece",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop",
    pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  },
  {
    name: "Activewear & Gym",
    spec: "Quick-Dry Performance",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop",
    pos: "bottom-[14%] left-[14%] -translate-x-1/2 translate-y-1/2",
  },
  {
    name: "Chinos & Cargo Bottoms",
    spec: "Twill & Ripstop",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400&auto=format&fit=crop",
    pos: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    name: "Bags & Lifestyle Gear",
    spec: "Canvas & Nylon",
    img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
    pos: "top-[14%] left-[14%] -translate-x-1/2 -translate-y-1/2",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-14 sm:py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-20 lg:space-y-24">
        
        {/* ══════════════════════════════════════════════════════════════════
            ১. WHO WE ARE: The Bridge Concept (Maxtop Core Story)
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* বামপাশে: স্টোরি ও ৪টি পিলার */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] sm:text-xs font-bold tracking-widest text-emerald-700 uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>WHO WE ARE · STRATEGIC RMG SOURCING</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-[#0C2340] leading-tight sm:leading-[1.18]">
              The Bridge Between{" "}
              <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-4 sm:underline-offset-8">
                Fashion Vision
              </span>{" "}
              &amp; Factory Execution
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              <strong className="text-slate-900 font-semibold">Maxtop International</strong> is a premier apparel sourcing agency and registered buying house headquartered in Dhaka, Bangladesh. We serve as the agile, transparent link between international retail fashion brands and audited, socially compliant RMG manufacturing facilities.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Operating with deep industry expertise across Knitwear, Woven, Denim, and Activewear, we eliminate cross-border manufacturing risks through open-book FOB costing, aggressive lead-time management, and strict AQL 2.5 zero-defect control.
            </p>

            {/* ৪টি কোর পিলার */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 transition-all space-y-1 group">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <TrendingDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span>12–18% Cost Advantage</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Direct mill fabric procurement eliminating middleman markups.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 transition-all space-y-1 group">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span>7–10 Days Sampling</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  In-house CAD pattern masters for rapid proto and fit approvals.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 transition-all space-y-1 group">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span>100% Audited Facilities</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Accord/RSC, BSCI, OEKO-TEX &amp; Sedex audited partner mills.
                </p>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 transition-all space-y-1 group">
                <div className="flex items-center gap-2.5 font-bold text-slate-900 text-xs sm:text-sm">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <span>Low MOQ from 500 Pcs</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  Dedicated flexible lines supporting emerging &amp; boutique labels.
                </p>
              </div>
            </div>

          </div>

          {/* ডানপাশে: ছবি ও ট্রাস্ট ব্যাজ */}
          <div className="lg:col-span-5 pt-2 sm:pt-0">
            <div className="relative">
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-slate-100 bg-slate-100 aspect-[4/3] relative">
                <img
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1000&auto=format&fit=crop"
                  alt="Modern Garment Sewing Floor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/60 via-transparent to-transparent"></div>
              </div>

              {/* সেকেন্ডারি ওভারল্যাপিং ছবি */}
              <div className="hidden sm:block absolute -top-8 -right-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600&auto=format&fit=crop"
                  alt="Fabric Patterning & Inspection"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* ফ্লোটিং এক্সপেরিয়েন্স ব্যাজ */}
              <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-[#0C2340] text-white p-3.5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-slate-700 max-w-[190px] sm:max-w-[220px]">
                <div className="flex items-baseline gap-1 text-2xl sm:text-3xl font-black text-emerald-400">
                  <span>10+</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-slate-300">Years</span>
                </div>
                <div className="text-[11px] sm:text-xs font-bold text-slate-100 mt-0.5 sm:mt-1 uppercase tracking-wider">
                  RMG Excellence
                </div>
                <div className="text-[9.5px] sm:text-[11px] text-slate-400 mt-0.5 leading-snug">
                  Trusted by 30+ European &amp; US retail buyers.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════════
            ২. ANOOSHA BENCHMARK: 
               ঘূর্ণায়মান ৩৬০° প্রোডাক্ট হুইল ও সাস্টেইনেবল টেক্সট
        ══════════════════════════════════════════════════════════════════ */}
        <div className="p-4 sm:p-10 lg:p-14 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-50 via-emerald-50/20 to-slate-50 border border-slate-200/90 shadow-sm overflow-visible">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* ── বামপাশে: ৩৬০° ঘূর্ণায়মান প্রোডাক্ট হুইল (সম্পূর্ণ দৃশ্যমান, নো-কাটিং) ── */}
            <div className="lg:col-span-6 flex justify-center py-8 sm:py-12 px-2 overflow-visible">
              <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[440px] lg:h-[440px] flex items-center justify-center shrink-0">
                
                {/* স্থির ব্যাকগ্রাউন্ড ড্যাশড সার্কেল (নিরাপদ মার্জিনে) */}
                <div className="absolute inset-8 sm:inset-11 rounded-full border border-dashed sm:border-2 border-emerald-300/60 pointer-events-none" />
                <div className="absolute inset-16 sm:inset-22 rounded-full border border-slate-200/80 bg-white/40 pointer-events-none shadow-inner" />

                {/* কেন্দ্রে ফিক্সড Maxtop ব্র্যান্ড হাব */}
                <div className="relative z-30 w-24 h-24 sm:w-34 sm:h-34 lg:w-38 lg:h-38 rounded-full bg-[#0C2340] text-white shadow-xl flex flex-col items-center justify-center text-center p-2 sm:p-3 border-2 sm:border-4 border-emerald-400">
                  <div className="w-5 h-5 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-black text-xs sm:text-sm mb-0.5 sm:mb-1 shadow-md">
                    M
                  </div>
                  <span className="text-[10px] sm:text-sm font-black tracking-wider text-white">
                    MAX<span className="text-emerald-400">TOP</span>
                  </span>
                  <span className="text-[6.5px] sm:text-[9px] font-bold tracking-[0.2em] text-slate-300 uppercase mt-0.5">
                    360° SOURCING
                  </span>
                  <span className="text-[6px] sm:text-[8px] text-emerald-300 font-mono mt-0.5 sm:mt-1 bg-emerald-950/80 px-1.5 sm:px-2 py-0.5 rounded-full border border-emerald-500/40">
                    FULL ECOSYSTEM
                  </span>
                </div>

                {/* 
                  অবিরত ঘূর্ণায়মান অরবিট রিং (safe inset সহ):
                  কার্ডগুলো ভেতরের ট্র্যাকে থাকায় ওপর বা নিচে একটুও কাটবে না
                */}
                <div className="absolute inset-8 sm:inset-11 rounded-full animate-[spin_40s_linear_infinite] hover:[animation-play-state:paused] group">
                  {spinningProducts.map((item, index) => (
                    <div
                      key={index}
                      className={`absolute ${item.pos}`}
                    >
                      {/* কাউন্টার-রোটেশন যাতে ছবি সবসময় সোজা থাকে */}
                      <div className="animate-[spin_40s_linear_infinite_reverse] group-hover:[animation-play-state:paused]">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-xl sm:rounded-2xl bg-white p-1 sm:p-1.5 shadow-md sm:shadow-lg border border-slate-200/90 hover:border-emerald-500 hover:scale-115 sm:hover:scale-125 transition-all duration-300 flex flex-col items-center justify-center group/card cursor-pointer">
                          <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-slate-50">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* হোভার টুলটিপ */}
                          <div className="hidden sm:block absolute -bottom-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/card:opacity-100 transition-opacity bg-[#0C2340] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap pointer-events-none z-40">
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* ── ডানপাশে: সাস্টেইনেবল ও এথিক্যাল ভ্যালু টেক্সট ── */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[11px] sm:text-xs font-bold tracking-wider text-emerald-800 uppercase">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>SUSTAINABLE SOURCING PHILOSOPHY</span>
              </div>

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0C2340] leading-tight">
                We Act For Sourcing{" "}
                <span className="text-emerald-600">Sustainable</span> &amp; High-Spec Products
              </h3>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-slate-900 font-semibold">Maxtop International</strong> is an ISO 9001:2015-certified, progressive apparel export and sourcing company headquartered in Dhaka, Bangladesh. We supply sustainable, high-quality apparel and fashion accessories across Europe, North America, the UK, Australia, and the Middle East.
              </p>

              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Our strategic liaison presence in London and New York enables us to deliver world-class communication, transparent open-book FOB costing, and strict environmental standards—from raw yarn sourcing to final port delivery.
              </p>

              {/* ৩টি সাস্টেইনেবল বেনিফিট বুলেট */}
              <div className="space-y-2.5 sm:space-y-3 pt-1">
                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900">Eco-Certified Materials:</strong> GOTS Organic Cotton, BCI Cotton, and GRS recycled polyester.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900">Green Partner Facilities:</strong> LEED-certified green partner factories with 45%+ water recycling.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900">Global Liaison Coordination:</strong> Dhaka HQ with dedicated liaison support for London &amp; NY time-zones.
                  </p>
                </div>
              </div>

              {/* অ্যাকশন বাটন */}
              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <Link
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0C2340] hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 group text-center"
                >
                  <span>Inquire Sourcing Capacity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-400" />
                </Link>

                <Link
                  href="#products"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs sm:text-sm border border-slate-300 transition-all shadow-xs text-center"
                >
                  <span>Explore Product Catalog</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            ৩. প্রোডাকশন ক্যাপাসিটি কাউন্টার মেট্রিক্স
        ══════════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#0C2340]">18M+</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 sm:mt-1.5 uppercase tracking-wider">
              Pieces Annual Capacity
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="text-2xl sm:text-4xl font-extrabold text-[#0C2340]">45+</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 sm:mt-1.5 uppercase tracking-wider">
              Audited Partner Units
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="text-2xl sm:text-4xl font-extrabold text-emerald-600">100%</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 sm:mt-1.5 uppercase tracking-wider">
              Accord / RSC Compliant
            </div>
          </div>

          <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/80">
            <div className="text-2xl sm:text-4xl font-extrabold text-blue-600">22+</div>
            <div className="text-[10px] sm:text-xs font-bold text-slate-500 mt-1 sm:mt-1.5 uppercase tracking-wider">
              Export Destination Countries
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            ৪. গ্লোবাল কমপ্লায়েন্স ও সার্টিফিকেশন ব্যানার
        ══════════════════════════════════════════════════════════════════ */}
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-10 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <span className="text-[10px] sm:text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
              Certified Sourcing Network
            </span>
            <h3 className="text-base sm:text-xl font-bold text-slate-900 mt-2">
              Adhering to the World's Strictest Social &amp; Environmental Audits
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-4 items-center">
            
            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <Award className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">OEKO-TEX®</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">Standard 100</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <CheckCheck className="w-5 h-5 sm:w-7 sm:h-7 text-blue-600 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">amfori BSCI</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">Social Audit</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-600 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">WRAP</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">Gold Certified</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <Globe2 className="w-5 h-5 sm:w-7 sm:h-7 text-amber-600 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">Sedex SMETA</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">4-Pillar Audited</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <Leaf className="w-5 h-5 sm:w-7 sm:h-7 text-green-600 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">GOTS Organic</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">Eco Certified</span>
            </div>

            <div className="flex flex-col items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-500/50 transition-colors text-center">
              <Building2 className="w-5 h-5 sm:w-7 sm:h-7 text-slate-700 mb-1 sm:mb-1.5" />
              <span className="text-[11px] sm:text-xs font-bold text-slate-900">ISO 9001</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500">Quality Standard</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}