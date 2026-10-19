/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Send,
  Tag,
  Ruler,
} from "lucide-react";
import {
  productCategories,
  allProductsCatalog,
} from "@/data/productsData";

// আন্তর্জাতিক সাইজ কনভার্সন ডেটা (US, UK, EU, AU)
const internationalSizeGuide = [
  { standard: "XS", usa: "0~2", uk_au: "2~4", eu: "30~32" },
  { standard: "S", usa: "4~6", uk_au: "6~8", eu: "34~36" },
  { standard: "M", usa: "8~10", uk_au: "10~12", eu: "38~40" },
  { standard: "L", usa: "12~14", uk_au: "14~16", eu: "42~44" },
  { standard: "XL", usa: "16~18", uk_au: "18~20", eu: "46~48" },
  { standard: "2XL", usa: "20~22", uk_au: "22~24", eu: "50~52" },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subFilter, setSubFilter] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // আন্তর্জাতিক সাইজ চার্ট মোডাল স্টেট
  const [showSizeModal, setShowSizeModal] = useState(false);

  // প্রতিটি প্রোডাক্ট কার্ডের সিলেক্টেড রিজিয়ন (ডিফল্ট: US)
  const [cardRegions, setCardRegions] = useState<Record<string, "us" | "uk" | "eu" | "au">>({});

  const currentCatObj: any = (productCategories as any[]).find(
    (c: any) => c.id === selectedCategory
  );

  // সাব-ক্যাটাগরি ফিল্টারিং
  const displayedItems = (allProductsCatalog as any[]).filter((item: any) => {
    const matchCategory = selectedCategory ? item.categoryId === selectedCategory : true;
    const matchSubFilter = subFilter === "all" ? true : item.audience === subFilter;
    return matchCategory && matchSubFilter;
  });

  const handleCategorySelect = (id: string | null) => {
    setSelectedCategory(id);
    setSubFilter("all");
    const el = document.getElementById("products");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSelectedProduct(null);
    }, 2800);
  };

  return (
    <section id="products" className="py-16 bg-[#F8FAFC] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            VIEW ১: ১২টি প্রধান ম্যানুফ্যাকচারিং ক্যাটাগরি গ্রিড
        ══════════════════════════════════════════════════════════════════ */}
        {!selectedCategory ? (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>RMG Manufacturing Divisions</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B2B43] tracking-tight">
                Our Manufacturing Lines
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore our full-package export divisions. Click any category to view tailored specs, GSM weights, color options, and order details.
              </p>
            </div>

            {/* ১২টি ক্যাটাগরি কার্ড */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {(productCategories as any[]).map((cat: any) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="group relative h-48 sm:h-64 rounded-xl overflow-hidden cursor-pointer border border-slate-200/80 shadow-xs"
                >
                  <img
                    src={cat.coverImg}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 group-hover:from-emerald-950/85 group-hover:via-black/30 transition-colors duration-300" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-wide drop-shadow-md group-hover:text-emerald-300 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity mt-2 flex items-center gap-1.5 font-bold">
                      <span>Explore Catalog</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════════
              VIEW ২: নির্দিষ্ট ক্যাটাগরি ক্যাটালগ
          ══════════════════════════════════════════════════════════════════ */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* ব্যাক বাটন ও সাইজ গাইড বাটন */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <button
                onClick={() => handleCategorySelect(null)}
                className="w-fit inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-[#0B2B43] text-xs font-bold border border-slate-300 transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-600" />
                <span>Back to All Categories</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowSizeModal(true)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300 transition-colors shadow-2xs cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5 text-emerald-600" />
                  <span>📐 View Full Conversion Chart</span>
                </button>

                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0B2B43] text-emerald-400 text-xs font-black uppercase tracking-wide shadow-xs">
                    <Tag className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{currentCatObj?.name}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* ক্যাটাগরি ব্যানার */}
            <div className="relative rounded-2xl overflow-hidden min-h-[160px] sm:h-64 shadow-md border border-slate-200 flex items-center justify-center text-center p-6 sm:p-10">
              <img
                src={currentCatObj?.bannerImg}
                alt={currentCatObj?.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071D2E]/90 via-[#0B2B43]/85 to-[#071D2E]/90" />
              
              <div className="relative z-10 max-w-2xl space-y-2">
                <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
                  Maxtop Apparel Sourcing Division
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight drop-shadow-md">
                  {currentCatObj?.fullName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-lg mx-auto">
                  {currentCatObj?.desc}
                </p>
              </div>
            </div>

            {/* সাব-ফিল্টার ট্যাব */}
            <div className="flex justify-center pt-2">
              <div className="inline-flex items-center p-1.5 rounded-xl bg-slate-200/90 border border-slate-300 gap-1.5 w-full sm:w-auto justify-center shadow-inner">
                {[
                  { id: "all", label: "ALL COLLECTION" },
                  { id: "men", label: "MEN" },
                  { id: "women", label: "WOMEN" },
                  { id: "kids", label: "KIDS" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSubFilter(tab.id)}
                    className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer ${
                      subFilter === tab.id
                        ? "bg-[#0B2B43] text-white shadow-sm scale-[1.01]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                ৩টি ব্যালান্সড কার্ড গ্রিড (US / UK / EU / AU + আরামদায়ক গ্যাপ)
            ══════════════════════════════════════════════════════════════════ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
              {displayedItems.length > 0 ? (
                displayedItems.map((item: any) => {
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

                            {/* ── সাইজ সেকশন (US · UK · EU · AU + আরামদায়ক গ্যাপ) ── */}
                            <div className="space-y-2.5 pt-3 border-t border-slate-100">
                              
                              {/* টপ রো: SIZES লেবেল + রিজিয়ন সুইচ ক্যাপসুল + Chart বাটন */}
                              <div className="flex items-center justify-between gap-2">
                                <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">
                                  Sizes:
                                </span>

                                {/* ── ৪টি মূল আন্তর্জাতিক মার্কেট: US | UK | EU | AU ── */}
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

                              {/* ── নিখুঁত ৩×২ গ্রিড: কিছুটা বড় ও আরামদায়ক গ্যাপ (No Lege-Lege!) ── */}
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
                          onClick={() => setSelectedProduct(item)}
                          className="w-full py-3.5 rounded-xl bg-[#0B2B43] hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                        >
                          <span>Inquire Sample / Spec</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="col-span-full py-16 text-center text-slate-400">
                  <p className="text-base font-semibold">No items found in this sub-category for {currentCatObj?.name}.</p>
                  <button
                    onClick={() => setSubFilter("all")}
                    className="mt-3 text-xs font-bold text-emerald-600 underline cursor-pointer"
                  >
                    View all {currentCatObj?.name} collection
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>

      {/* ══════════════════════════════════════════════════════════════════
          ৪. আন্তর্জাতিক সাইজ চার্ট মোডাল
      ══════════════════════════════════════════════════════════════════ */}
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

      {/* ══════════════════════════════════════════════════════════════════
          ৫. স্যাম্পল ইনকোয়ারি পপআপ (MODAL)
      ══════════════════════════════════════════════════════════════════ */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                Sample &amp; Tech-Pack Request
              </span>
              <h3 className="text-xl font-black text-[#0B2B43] mt-1">
                {selectedProduct.name}
              </h3>

              <div className="flex items-center gap-4 mt-3 p-3 rounded-xl bg-white border border-slate-200 text-xs shadow-xs">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-14 rounded-lg object-cover bg-slate-100 shrink-0"
                />
                <div className="flex-1 truncate space-y-0.5">
                  <span className="font-bold text-slate-900 block truncate">{selectedProduct.material}</span>
                  <div className="text-[11px] font-semibold text-slate-500">
                    Weight: <strong className="text-slate-800">{selectedProduct.gsm}</strong> · Graded: US/UK/EU/AU
                  </div>
                  <div className="flex items-center gap-1 pt-0.5">
                    {((selectedProduct.sizes as string[]) || ["XS", "S", "M", "L", "XL"]).slice(0, 5).map((s: string, idx: number) => (
                      <span key={idx} className="px-1.5 py-0.2 rounded bg-slate-100 text-[10px] font-bold text-slate-600">{s}</span>
                    ))}
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
                    Sample Inquiry Received!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                    Our merchandising team will review your specifications and dispatch physical swatches within 24 to 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
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
                        placeholder="john@brand.com"
                        className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Brand / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Urban Label"
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
                      Target Colorway / Custom Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Heather grey colorway, custom metal buttons, 100% combed cotton..."
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
    </section>
  );
}