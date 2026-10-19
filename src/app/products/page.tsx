/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/products/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  productCategories,
  allProductsCatalog,
  ProductCategory,
  ProductItem,
} from "@/data/productsData";
import {
  ArrowRight,
  Search,
  Sparkles,
  X,
  CheckCircle2,
  Send,
  Layers,
  Ruler,
  Tag,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// আন্তর্জাতিক সাইজ কনভার্সন ডেটা (US, UK, EU, AU)
const internationalSizeGuide = [
  { standard: "XS", usa: "0~2", uk_au: "2~4", eu: "30~32" },
  { standard: "S", usa: "4~6", uk_au: "6~8", eu: "34~36" },
  { standard: "M", usa: "8~10", uk_au: "10~12", eu: "38~40" },
  { standard: "L", usa: "12~14", uk_au: "14~16", eu: "42~44" },
  { standard: "XL", usa: "16~18", uk_au: "18~20", eu: "46~48" },
  { standard: "2XL", usa: "20~22", uk_au: "22~24", eu: "50~52" },
];

export default function ProductsPage() {
  // বাই ডিফল্ট "all" সিলেক্টেড থাকবে (সব প্রোডাক্ট দেখাবে)
  const [selectedCatId, setSelectedCatId] = useState<string>("all");
  const [selectedAudience, setSelectedAudience] = useState<"all" | "men" | "women" | "kids">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryProduct, setInquiryProduct] = useState<ProductItem | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // সাইজ চার্ট মোডাল স্টেট
  const [showSizeModal, setShowSizeModal] = useState(false);

  // প্রতিটি প্রোডাক্টের সিলেক্টেড সাইজ রিজিয়ন (ডিফল্ট: US)
  const [cardRegions, setCardRegions] = useState<Record<string, "us" | "uk" | "eu" | "au">>({});

  // সক্রিয় ক্যাটাগরি তথ্য
  const activeCategory: ProductCategory | undefined =
    productCategories.find((c) => c.id === selectedCatId);

  // ফিল্টার করা প্রোডাক্ট তালিকা (ক্যাটাগরি + অডিয়েন্স + সার্চ)
  const filteredProducts = allProductsCatalog.filter((item) => {
    const matchCat = selectedCatId === "all" ? true : item.categoryId === selectedCatId;
    const matchAudience =
      selectedAudience === "all" || item.audience === selectedAudience;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.desc && item.desc.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchCat && matchAudience && matchSearch;
  });

  const handleCategorySelect = (id: string) => {
    setSelectedCatId(id);
    setSelectedAudience("all");
    const el = document.getElementById("products-grid");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryProduct(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ── ১. টপ হেডার ব্যানার (মার্জিত ডার্ক নেভি ও এমারেল্ড অ্যাকসেন্ট) ── */}
        <section
          className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center text-white bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(7, 29, 46, 0.85), rgba(7, 29, 46, 0.92)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')`,
          }}
        >
          <div className="relative max-w-4xl mx-auto z-10 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-widest backdrop-blur-md">
              Export Ready RMG Catalog &middot; 50+ Partner Lines
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-sm">
              Our Apparel Products
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Explore our full-package manufacturing capability spanning 12+ categories. Vetted green facilities, custom GSM weights, and flexible MOQs.
            </p>
          </div>
        </section>

        {/* ── ২. ১২টি ক্যাটাগরি ফটো গ্রিড ("ALL" অপশন সহ) ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-bold uppercase tracking-wider">
              <span>Manufacturing Divisions</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B2B43] tracking-tight">
              Select A Category To Filter
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto">
              Click any division below to view tailored specs, or view our full export collection.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* বিশেষ "ALL PRODUCTS" কার্ড */}
            <button
              onClick={() => handleCategorySelect("all")}
              className={`group relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border-2 text-center flex items-center justify-center cursor-pointer ${
                selectedCatId === "all"
                  ? "border-emerald-500 ring-4 ring-emerald-500/20 scale-[1.02]"
                  : "border-slate-200 hover:border-emerald-400"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B2B43] to-[#071D2E]" />
              <div className="relative z-10 p-3">
                <span className="block text-base sm:text-xl font-black text-white tracking-wide">
                  All Collections
                </span>
                <span className="text-[10px] sm:text-xs text-emerald-400 font-bold block mt-0.5">
                  View Full Catalog &rarr;
                </span>
              </div>
            </button>

            {/* ১২টি ক্যাটাগরি কার্ড */}
            {productCategories.map((cat) => {
              const isSelected = selectedCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className={`group relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border-2 text-center flex items-center justify-center cursor-pointer ${
                    isSelected
                      ? "border-emerald-500 ring-4 ring-emerald-500/20 scale-[1.02]"
                      : "border-transparent hover:border-slate-300"
                  }`}
                >
                  <img
                    src={cat.coverImg}
                    alt={cat.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity ${
                      isSelected
                        ? "bg-[#071D2E]/80"
                        : "bg-slate-950/60 group-hover:bg-slate-950/40"
                    }`}
                  />
                  <span className="relative z-10 text-base sm:text-lg font-black text-white tracking-wide drop-shadow-md group-hover:scale-105 transition-transform px-2">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── ৩. অ্যাক্টিভ ক্যাটাগরি ব্যানার (যদি ক্যাটাগরি ফিল্টার করা থাকে) ── */}
        <div id="products-grid" className="scroll-mt-24">
          {selectedCatId !== "all" && activeCategory && (
            <section
              className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center overflow-hidden mb-8"
              style={{
                backgroundImage: `linear-gradient(rgba(11, 43, 67, 0.88), rgba(11, 43, 67, 0.94)), url('${activeCategory.bannerImg}')`,
              }}
            >
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                    Active Division Filter
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                    {activeCategory.fullName}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                    {activeCategory.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleCategorySelect("all")}
                    className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition border border-white/20 cursor-pointer"
                  >
                    Clear Filter (View All)
                  </button>
                  <Link
                    href="/contact"
                    className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#071D2E] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-1.5"
                  >
                    <span>Request Custom MOQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* ── ৪. জেন্ডার ফিল্টার ট্যাব, সাইজ চার্ট বাটন ও সার্চ বার ── */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            
            {/* জেন্ডার ট্যাব */}
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { id: "all", label: "ALL COLLECTION" },
                { id: "men", label: "MEN" },
                { id: "women", label: "WOMEN" },
                { id: "kids", label: "KIDS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAudience(tab.id as any)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                    selectedAudience === tab.id
                      ? "bg-[#0B2B43] text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* সাইজ চার্ট বাটন ও সার্চ ইনপুট */}
            <div className="flex items-center gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setShowSizeModal(true)}
                className="shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 transition shadow-2xs cursor-pointer"
              >
                <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                <span>📐 Size Chart</span>
              </button>

              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search fabric or style..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
                />
              </div>
            </div>

          </div>

          {/* স্ট্যাটাস বার: কতগুলো প্রোডাক্ট দেখাচ্ছে */}
          <div className="pt-3 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-[#0B2B43]">{filteredProducts.length}</strong> styles in{" "}
              <strong className="text-emerald-700">
                {selectedCatId === "all" ? "All Divisions" : activeCategory?.name}
              </strong>
            </span>
            {selectedCatId !== "all" && (
              <button
                onClick={() => handleCategorySelect("all")}
                className="text-emerald-700 font-bold hover:underline cursor-pointer"
              >
                &larr; Switch back to All Products
              </button>
            )}
          </div>
        </section>

        {/* ── ৫. প্রোডাক্ট কার্ড গ্রিড (স্ক্রিনশটের মতো নিখুঁত ৩×২ সাইজ গ্রিড সহ) ── */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {filteredProducts.length === 0 ? (
            <div className="py-16 text-center bg-white rounded-3xl border border-dashed border-slate-300 p-8">
              <Layers className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No styles found for this filter</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                We have over 50+ archived styles for this category. Send us your tech-pack for instant custom sampling.
              </p>
              <button
                onClick={() => {
                  setSelectedCatId("all");
                  setSelectedAudience("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-5 py-2.5 rounded-xl bg-[#0B2B43] text-white text-xs font-bold transition hover:bg-emerald-600"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((item) => {
                const productColors: string[] =
                  Array.isArray(item.colors) && item.colors.length > 0
                    ? item.colors
                    : ["#0B2B43", "#334155", "#64748B", "#FFFFFF"];

                // কার্ডের বর্তমান সিলেক্টেড রিজিয়ন (ডিফল্ট: US)
                const activeRegion = cardRegions[item.id] || "us";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* ১. প্রোডাক্ট ছবি */}
                      <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <span className="absolute top-3 left-3 bg-[#0B2B43]/85 text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                          {item.audience}
                        </span>
                      </div>

                      {/* ২. বিবরণী ও জিএসএম */}
                      <div className="p-5 sm:p-6 space-y-4">
                        <div>
                          <div className="flex items-start justify-between gap-3">
                            <h4 className="text-lg sm:text-xl font-black text-[#0B2B43] leading-snug">
                              {item.name}
                            </h4>
                            {item.gsm && (
                              <span className="shrink-0 px-2.5 py-1 rounded-md bg-slate-100 text-[#0B2B43] text-xs font-black uppercase tracking-wider">
                                {item.gsm}
                              </span>
                            )}
                          </div>

                          <p className="text-xs sm:text-sm font-bold text-emerald-700 mt-1">
                            {item.material}
                          </p>

                          {item.desc && (
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-2">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        {/* কালার ও সাইজ সেকশন */}
                        <div className="pt-3.5 border-t border-slate-100 space-y-3.5">
                          
                          {/* কালার প্যালেট */}
                          <div className="flex items-center gap-3">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              Colors:
                            </span>
                            <div className="flex items-center gap-2">
                              {productColors.map((color: string, i: number) => (
                                <span
                                  key={i}
                                  className="w-4 h-4 rounded-full border border-slate-300 shadow-2xs hover:scale-110 transition-transform"
                                  style={{ backgroundColor: color }}
                                  title={`Color option ${i + 1}`}
                                />
                              ))}
                            </div>
                          </div>

                          {/* ── সাইজ সেকশন (US · UK · EU · AU + নিখুঁত ৩×২ গ্রিড) ── */}
                          <div className="space-y-2.5 pt-1 border-t border-slate-100">
                            
                            {/* টপ রো: SIZES লেবেল + রিজিয়ন সুইচ ক্যাপসুল + Chart বাটন */}
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                                Sizes:
                              </span>

                              {/* ৪টি আন্তর্জাতিক মার্কেট বাটন */}
                              <div className="inline-flex items-center p-0.5 rounded-lg bg-slate-100 border border-slate-200">
                                {(["us", "uk", "eu", "au"] as const).map((reg) => (
                                  <button
                                    type="button"
                                    key={reg}
                                    onClick={() =>
                                      setCardRegions((prev) => ({ ...prev, [item.id]: reg }))
                                    }
                                    className={`px-2.5 py-1 rounded-md text-[11px] font-black uppercase transition-all cursor-pointer ${
                                      activeRegion === reg
                                        ? "bg-[#0B2B43] text-white shadow-xs"
                                        : "text-slate-500 hover:text-slate-900"
                                    }`}
                                  >
                                    {reg}
                                  </button>
                                ))}
                              </div>

                              {/* চার্ট বাটন */}
                              <button
                                type="button"
                                onClick={() => setShowSizeModal(true)}
                                className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer"
                              >
                                <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Chart</span>
                              </button>
                            </div>

                            {/* ── নিখুঁত ৩×২ গ্রিড: আরামদায়ক গ্যাপ ও সুষম সাইজ ── */}
                            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1">
                              {internationalSizeGuide.map((sizeObj) => {
                                let displayText = "";
                                if (activeRegion === "us") displayText = `${sizeObj.usa} (${sizeObj.standard})`;
                                if (activeRegion === "uk") displayText = `${sizeObj.uk_au} (${sizeObj.standard})`;
                                if (activeRegion === "eu") displayText = `${sizeObj.eu} (${sizeObj.standard})`;
                                if (activeRegion === "au") displayText = `${sizeObj.uk_au} (${sizeObj.standard})`;

                                return (
                                  <div
                                    key={sizeObj.standard}
                                    className="py-2 sm:py-2.5 px-2 rounded-lg bg-slate-50/90 border border-slate-200/90 text-slate-800 text-xs font-bold text-center shadow-2xs hover:border-emerald-400 hover:bg-emerald-50/40 transition-all"
                                  >
                                    {displayText}
                                  </div>
                                );
                              })}
                            </div>

                            <p className="text-[10px] text-slate-400 font-medium pt-0.5">
                              * Click <strong>US</strong>, <strong>UK</strong>, <strong>EU</strong>, or <strong>AU</strong> to see converted measurements.
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* ৩. স্যাম্পল ইনকোয়ারি বাটন */}
                    <div className="p-5 sm:p-6 pt-0">
                      <button
                        onClick={() => setInquiryProduct(item)}
                        className="w-full py-3.5 rounded-xl bg-[#0B2B43] hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                      >
                        <span>Inquire Sample / Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* কাস্টম আরএফকিউ ব্যানার */}
          <div className="mt-16 bg-gradient-to-r from-[#071D2E] to-[#0B2B43] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" /> Custom R&amp;D Development
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Need Custom Fabrication or Private Label Trims?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Send us your Pantone specs, artwork, and measurements. Our in-house merchandising team will develop fast-track prototype samples in 7–10 days.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#071D2E] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
              >
                <span>Submit Tech-Pack (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── ৬. আন্তর্জাতিক সাইজ চার্ট মোডাল ── */}
        {showSizeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              
              <button
                onClick={() => setShowSizeModal(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 bg-slate-50 border-b border-slate-200">
                <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                  International Apparel Sizing Conversion
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0B2B43] mt-1">
                  US · UK · EU · AU Sizing Standard
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Standard export grading applied to all Maxtop woven, knit, and denim product lines.
                </p>
              </div>

              <div className="p-6 overflow-x-auto">
                <table className="w-full text-center border-collapse border border-slate-200 text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-[#0B2B43] font-black">
                      <th className="border border-slate-200 py-3 px-3 text-left">Standard Region</th>
                      {internationalSizeGuide.map((item) => (
                        <th
                          key={item.standard}
                          className={`border border-slate-200 py-3 px-2 ${
                            ["XS", "M", "XL"].includes(item.standard)
                              ? "bg-emerald-50 text-emerald-800"
                              : ""
                          }`}
                        >
                          {item.standard}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 font-semibold text-slate-700">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="border border-slate-200 py-3 px-3 text-left font-bold text-slate-900 bg-slate-50/50">
                        USA (United States)
                      </td>
                      {internationalSizeGuide.map((item) => (
                        <td key={item.standard} className="border border-slate-200 py-3 px-2 font-mono">
                          {item.usa}
                        </td>
                      ))}
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="border border-slate-200 py-3 px-3 text-left font-bold text-slate-900 bg-slate-50/50">
                        UK &amp; Australia (AU)
                      </td>
                      {internationalSizeGuide.map((item) => (
                        <td key={item.standard} className="border border-slate-200 py-3 px-2 font-mono">
                          {item.uk_au}
                        </td>
                      ))}
                    </tr>

                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="border border-slate-200 py-3 px-3 text-left font-bold text-slate-900 bg-slate-50/50">
                        EU (European Union)
                      </td>
                      {internationalSizeGuide.map((item) => (
                        <td key={item.standard} className="border border-slate-200 py-3 px-2 font-mono">
                          {item.eu}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>

                <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                  💡 <strong className="text-slate-800">Custom Tech-Packs:</strong> We strictly follow buyers custom grading specs, tolerance limits (±0.5cm), and proportion charts as per your Purchase Order (PO) sheet.
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowSizeModal(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#0B2B43] hover:bg-emerald-600 text-white text-xs font-bold transition cursor-pointer"
                >
                  Close Chart
                </button>
              </div>

            </div>
          </div>
        )}

        {/* ── ৭. স্যাম্পল ইনকোয়ারি মডাল ── */}
        {inquiryProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
              <button
                onClick={() => setInquiryProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 bg-slate-50 border-b border-slate-100">
                <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                  Sample Request Protocol
                </span>
                <h3 className="text-xl font-extrabold text-[#0B2B43] mt-1">
                  Request Sample: {inquiryProduct.name}
                </h3>
                <div className="flex items-center gap-3 mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <img
                    src={inquiryProduct.image}
                    alt={inquiryProduct.name}
                    className="w-12 h-12 rounded-lg object-cover bg-slate-100 shrink-0"
                  />
                  <div className="flex-1 truncate">
                    <span className="font-bold text-slate-800">{inquiryProduct.material}</span>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Weight: <strong className="text-slate-800">{inquiryProduct.gsm}</strong> · Graded: US/UK/EU/AU
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {isSubmitted ? (
                  <div className="py-8 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0B2B43]">
                      Sample Request Received!
                    </h4>
                    <p className="text-xs text-slate-500 max-w-xs mx-auto">
                      Our merchandising desk in Dhaka will review your request and contact you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSampleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Miller"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="david@brand.com"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Company / Brand *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Next Retail Ltd"
                          className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Target Sizing Standard
                        </label>
                        <select className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                          <option>USA Standard Sizing</option>
                          <option>UK / Australia Sizing</option>
                          <option>European (EU) Sizing</option>
                          <option>Custom Buyer Tech-Pack Spec</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Specific Colorways / Target Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention colorways, target delivery timeline, or branding requirements..."
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Sample Request</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}