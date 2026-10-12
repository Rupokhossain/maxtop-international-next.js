/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import {
  Download,
  ArrowRight,
  ArrowLeft,
  X,
  CheckCircle2,
  Send,
  Tag,
} from "lucide-react";
import {
  productCategories,
  allProductsCatalog,
  ProductCategory,
  ProductItem,
} from "@/data/productsData";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [subFilter, setSubFilter] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentCatObj: ProductCategory | undefined = productCategories.find(
    (c) => c.id === selectedCategory
  );

  const displayedItems = allProductsCatalog.filter((item) => {
    const matchCategory = selectedCategory ? item.categoryId === selectedCategory : true;
    const matchSubFilter = subFilter === "all" ? true : item.audience === subFilter;
    return matchCategory && matchSubFilter;
  });

  // ক্যাটাগরি পরিবর্তনের সাথে সাথে মোবাইলে স্ক্রল স্মুথ করার ফাংশন
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
    <section id="products" className="py-14 sm:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ══════════════════════════════════════════════════════════════════
            VIEW ১: ১২টি প্রধান ক্যাটাগরি গ্রিড (সঠিক পোশাকের ছবি সহ)
        ══════════════════════════════════════════════════════════════════ */}
        {!selectedCategory ? (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3">
              <div className="inline-block border border-slate-300 bg-white px-4 py-1.5 rounded shadow-xs">
                <h2 className="text-xl sm:text-2xl font-black tracking-tight text-[#0C2340] uppercase">
                  Our Products
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Explore our full-package manufacturing categories. Click any category to view tailored specs, fabrics, and sample options.
              </p>
            </div>

            {/* ১২টি ক্যাটাগরি কার্ড */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
              {productCategories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat.id)}
                  className="group relative h-40 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-200/80 hover:border-emerald-500 hover:scale-[1.02]"
                >
                  <img
                    src={cat.coverImg}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 group-hover:from-emerald-950/85 group-hover:via-black/30 transition-colors duration-300" />

                  <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
                    <h3 className="text-lg sm:text-2xl font-black text-white tracking-wide drop-shadow-md group-hover:text-emerald-300 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity mt-1 hidden sm:flex items-center gap-1 font-semibold">
                      <span>View Products</span>
                      <ArrowRight className="w-3 h-3 text-emerald-400" />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="mt-12 text-center">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold transition-all shadow-sm hover:shadow"
              >
                <Download className="w-4 h-4 text-emerald-600" />
                <span>Download Full 2026 Production Catalog (PDF)</span>
              </a>
            </div> */}
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════════
              VIEW ২ & ৩: ক্যাটাগরি ব্যানার ও মেন/ওমেন/কিডস ক্যাটালগ
          ══════════════════════════════════════════════════════════════════ */
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            
            {/* ── ✅ ফিক্সড রেসপন্সিভ ব্যাক বাটন বার (মোবাইলে কখনোই ভাঙবে না) ── */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
              <button
                onClick={() => handleCategorySelect(null)}
                className="w-fit inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4 text-emerald-600" />
                <span>Back to All Categories</span>
              </button>

              {/* মোবাইলে সুন্দর ব্যাজ ভিউ */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 font-semibold text-[11px] uppercase tracking-wider">
                  Category:
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0C2340] text-emerald-400 text-xs font-black uppercase tracking-wide shadow-xs">
                  <Tag className="w-3 h-3 text-emerald-400" />
                  <span>{currentCatObj?.name}</span>
                </span>
              </div>
            </div>

            {/* ক্যাটাগরি ব্যানার */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden min-h-[140px] sm:h-60 shadow-xl border border-slate-200 flex items-center justify-center text-center p-6">
              <img
                src={currentCatObj?.bannerImg}
                alt={currentCatObj?.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0C2340]/90 via-[#0C2340]/80 to-[#0C2340]/90" />
              
              <div className="relative z-10 px-2 max-w-xl space-y-1.5">
                <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                  Maxtop Apparel Sourcing
                </span>
                <h2 className="text-xl sm:text-4xl font-black text-white tracking-tight drop-shadow">
                  {currentCatObj?.fullName}
                </h2>
                <p className="text-[11px] sm:text-sm text-slate-200 leading-snug">
                  {currentCatObj?.desc}
                </p>
              </div>
            </div>

            {/* সাব-ফিল্টার ট্যাব (ALL | MEN | WOMEN | KIDS) */}
            <div className="flex justify-center pt-1">
              <div className="inline-flex items-center p-1 rounded-xl bg-slate-200/80 border border-slate-300 gap-1 w-full sm:w-auto justify-center">
                {[
                  { id: "all", label: "ALL" },
                  { id: "men", label: "MEN" },
                  { id: "women", label: "WOMEN" },
                  { id: "kids", label: "KIDS" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSubFilter(tab.id)}
                    className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 rounded-lg text-xs font-black transition-all ${
                      subFilter === tab.id
                        ? "bg-[#0C2340] text-white shadow"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* প্রোডাক্ট গ্রিড */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-2">
              {displayedItems.length > 0 ? (
                displayedItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* কাপড়ের ফ্ল্যাট-লে ছবি */}
                      <div className="relative aspect-square bg-[#F8FAFC] p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-2 right-2 flex items-center gap-1 opacity-40 group-hover:opacity-80 transition-opacity">
                          <span className="text-[9px] font-black text-slate-400">MAXTOP</span>
                        </div>
                      </div>

                      {/* প্রোডাক্ট স্পেসিফিকেশন */}
                      <div className="p-4 space-y-1.5">
                        <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {item.name}
                        </h4>
                        
                        <div className="text-[11px] text-slate-500 space-y-0.5">
                          <p><strong className="text-slate-700">Description:</strong> {item.desc}</p>
                          <p><strong className="text-slate-700">Material:</strong> {item.material}</p>
                          <p><strong className="text-slate-700">Weight:</strong> {item.gsm} · <strong className="text-emerald-600">MOQ:</strong> {item.moq}</p>
                        </div>
                      </div>
                    </div>

                    {/* স্যাম্পল ইনকোয়ারি বাটন */}
                    <div className="p-4 pt-0">
                      <button
                        onClick={() => setSelectedProduct(item)}
                        className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#0C2340] text-slate-700 hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-2xs"
                      >
                        <span>Inquire Sample / Spec</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-16 text-center text-slate-400">
                  <p className="text-sm">No items found in this sub-category for {currentCatObj?.name}.</p>
                  <button
                    onClick={() => setSubFilter("all")}
                    className="mt-2 text-xs font-bold text-emerald-600 underline"
                  >
                    View all {currentCatObj?.name} items
                  </button>
                </div>
              )}
            </div>

          </div>
        )}

      </div>

      {/* ── স্যাম্পল ইনকোয়ারি পপআপ (MODAL) ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
            
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-100">
              <span className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase">
                Sample Request Form
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                Request Sample: {selectedProduct.name}
              </h3>

              <div className="flex items-center gap-3 mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-10 h-10 rounded-lg object-contain bg-slate-50"
                />
                <div className="flex-1 truncate">
                  <span className="font-bold text-slate-800">{selectedProduct.material}</span>
                  <div className="text-[11px] text-slate-400 mt-0.5">
                    Weight: {selectedProduct.gsm} · MOQ: {selectedProduct.moq}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Sample Inquiry Received!
                  </h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Our merchandising team will review your specifications and send you sample swatches within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@brand.com"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Brand / Company *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Urban Label"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Sample Target Qty
                      </label>
                      <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                        <option>1-2 Pcs (Proto Sample)</option>
                        <option>3-5 Pcs (Size-Set Sample)</option>
                        <option>Salesman Sample (SMS)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Target Colorway / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Heather grey colorway, custom woven labels..."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
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