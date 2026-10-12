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
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProductsPage() {
  const [selectedCatId, setSelectedCatId] = useState("knit");
  const [selectedAudience, setSelectedAudience] = useState<"all" | "men" | "women" | "kids">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [inquiryProduct, setInquiryProduct] = useState<ProductItem | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // বর্তমান সক্রিয় ক্যাটাগরি
  const activeCategory: ProductCategory =
    productCategories.find((c) => c.id === selectedCatId) || productCategories[0];

  // ফিল্টার করা প্রোডাক্ট তালিকা (ক্যাটাগরি + অডিয়েন্স + সার্চ)
  const filteredProducts = allProductsCatalog.filter((item) => {
    const matchCat = item.categoryId === selectedCatId;
    const matchAudience =
      selectedAudience === "all" || item.audience === selectedAudience;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCat && matchAudience && matchSearch;
  });

  const handleSampleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setInquiryProduct(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* ── ১. টপ হেডার ব্যানার ── */}
        <section
          className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center text-white bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(7, 29, 46, 0.85), rgba(7, 29, 46, 0.92)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80')`,
          }}
        >
          <div className="relative max-w-4xl mx-auto z-10 space-y-3">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 uppercase tracking-widest">
              Export Ready RMG Catalog
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Our Apparel Products
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive garment manufacturing capability spanning 12+ categories. Directly vetted partner lines, high-spec fabrics, and low MOQs.
            </p>
          </div>
        </section>

        {/* ── ২. ১২টি ক্যাটাগরি ফটো গ্রিড (১নং রেফারেন্স ছবি) ── */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2B43] tracking-tight border-b-2 border-emerald-500 pb-2 inline-block">
              Our Products
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Select any category below to view styles, specifications, and request swatches.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {productCategories.map((cat) => {
              const isSelected = selectedCatId === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCatId(cat.id);
                    setSelectedAudience("all");
                    const el = document.getElementById("category-display");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`group relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-2 text-center flex items-center justify-center cursor-pointer ${
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
                        ? "bg-[#071D2E]/75"
                        : "bg-slate-900/60 group-hover:bg-slate-900/50"
                    }`}
                  />
                  <span className="relative z-10 text-base sm:text-xl font-extrabold text-white tracking-wide drop-shadow-md group-hover:scale-105 transition-transform">
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── ৩. ক্যাটাগরি স্পেসিফিক ব্যানার (২নং রেফারেন্স ছবি) ── */}
        <div id="category-display" className="scroll-mt-24">
          <section
            className="relative py-14 sm:py-16 px-4 sm:px-6 lg:px-8 text-white bg-cover bg-center overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(11, 43, 67, 0.88), rgba(11, 43, 67, 0.94)), url('${activeCategory.bannerImg}')`,
            }}
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Active Collection
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                  {activeCategory.fullName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
                  {activeCategory.desc}
                </p>
              </div>

              <div className="flex items-center gap-3">
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
        </div>

        {/* ── ৪. জেন্ডার ফিল্টার ট্যাব (৩নং রেফারেন্স ছবি) ── */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              {[
                { id: "all", label: "ALL" },
                { id: "men", label: "MEN" },
                { id: "women", label: "WOMEN" },
                { id: "kids", label: "KIDS" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedAudience(tab.id as any)}
                  className={`px-5 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedAudience === tab.id
                      ? "bg-[#0B2B43] text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search style or fabric..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>
        </section>

        {/* ── ৫. প্রোডাক্ট কার্ড গ্রিড (৩নং রেফারেন্স ছবি) ── */}
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
                  setSelectedAudience("all");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative aspect-[4/4] bg-slate-50 p-4 flex items-center justify-center overflow-hidden border-b border-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute top-3 left-3 bg-[#0B2B43]/80 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md backdrop-blur-xs">
                        {item.audience}
                      </span>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-emerald-700 transition-colors">
                        {item.name}
                      </h3>

                      <div className="text-xs text-slate-500 space-y-1 pt-1 border-t border-slate-100">
                        <p className="leading-snug">
                          <strong className="text-slate-700">Description:</strong> {item.desc}
                        </p>
                        <p className="leading-snug">
                          <strong className="text-slate-700">Material:</strong> {item.material}
                        </p>
                        <p className="leading-snug">
                          <strong className="text-slate-700">Weight:</strong> {item.gsm} ·{" "}
                          <strong className="text-emerald-700">MOQ:</strong> {item.moq}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setInquiryProduct(item)}
                      className="w-full py-2.5 rounded-xl bg-slate-50 hover:bg-emerald-600 text-slate-700 hover:text-white border border-slate-200 hover:border-emerald-600 text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Inquire Sample Swatch</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
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

        {/* ── ৬. স্যাম্পল ইনকোয়ারি মডাল ── */}
        {inquiryProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
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
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                  Request Sample: {inquiryProduct.name}
                </h3>
                <div className="flex items-center gap-3 mt-3 p-2.5 rounded-xl bg-white border border-slate-200 text-xs">
                  <img
                    src={inquiryProduct.image}
                    alt={inquiryProduct.name}
                    className="w-10 h-10 rounded-lg object-contain bg-slate-50"
                  />
                  <div className="flex-1 truncate">
                    <span className="font-bold text-slate-800">{inquiryProduct.material}</span>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      GSM: {inquiryProduct.gsm} · MOQ: {inquiryProduct.moq}
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
                    <h4 className="text-lg font-bold text-slate-900">
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
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Miller"
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
                          placeholder="david@brand.com"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Company / Brand *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Next Retail Ltd"
                          className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-700 mb-1">
                          Target Sample Type
                        </label>
                        <select className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white">
                          <option>Proto Sample (1-2 Pcs)</option>
                          <option>Fit / Size Set (3-5 Pcs)</option>
                          <option>Salesman Sample (SMS)</option>
                          <option>Fabric Swatch Book Only</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Specific Colorways / Target FOB Notes
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention colorways, target delivery timeline, or branding requirements..."
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
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