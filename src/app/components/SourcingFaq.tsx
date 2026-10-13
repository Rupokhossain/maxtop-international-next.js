"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Sparkles,
  HelpCircle,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { faqCategories, faqData } from "@/data/faqData";

export default function SourcingFaq() {
  const [activeCategory, setActiveCategory] = useState("all");
  // ডিফল্টভাবে ১ম প্রশ্নটি ওপেন থাকবে যাতে বায়ারদের আকৃষ্ট করে
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const filteredFaqs =
    activeCategory === "all"
      ? faqData
      : faqData.filter(
          (faq) => faq.category === activeCategory || faq.category === "all"
        );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ── ১. হেডার ── */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOURCING TRANSPARENCY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
            Frequently Asked Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Everything you need to know about working with Maxtop International: low MOQs, rapid sampling protocols, payment security, and global shipping.
          </p>
        </div>

        {/* ── ২. ক্যাটাগরি ফিল্টার বাটনস ── */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0B2B43] text-white shadow-md shadow-[#0B2B43]/20 scale-105"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ── ৩. অ্যাকর্ডিয়ন লিস্ট ── */}
        <div className="space-y-4 pt-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#F8FAFC] border-emerald-500/60 shadow-md"
                    : "bg-white border-slate-200 hover:border-slate-300 shadow-xs"
                }`}
              >
                {/* প্রশ্ন হেডার (ক্লিকযোগ্য) */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 transition-colors ${
                        isOpen
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      0{faq.id}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#0B2B43] leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "bg-emerald-100 text-emerald-700 rotate-180"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* উত্তর কনটেন্ট */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4 animate-in fade-in duration-200">
                    <p className="pl-11">{faq.answer}</p>
                    <div className="pl-11 mt-3">
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                        ✓ {faq.categoryLabel}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── ৪. সরাসরি বায়ার হেল্পডেস্ক ও হোয়াটসঅ্যাপ কল-টু-অ্যাকশন ── */}
        <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0B2B43]">
                Have a customized inquiry or target costing spec?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our senior merchandising directors respond within 2 to 4 hours.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-xs font-bold transition-all shadow-md"
            >
              <span>Submit RFQ Tech-Pack</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}