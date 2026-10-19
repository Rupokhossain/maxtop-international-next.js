/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle, MessageSquare } from "lucide-react";
import Link from "next/link";
import { faqData } from "@/data/faqData";

// ছবির উচ্চতার সাথে সামঞ্জস্য রাখার জন্য ৪টি নির্বাচিত মূল প্রশ্ন
const fallbackFaqs = [
  {
    id: 1,
    question: "What is your standard Minimum Order Quantity (MOQ)?",
    answer:
      "Our standard MOQ starts from 1,000 to 1,500 pieces per style/color for knitwear and wovens. Flexible low-MOQ options are available for emerging brands and trial orders.",
  },
  {
    id: 2,
    question: "How long does rapid sample development take?",
    answer:
      "Our dedicated 3D CAD pattern & sampling lab produces physical counter-samples within 5 to 7 business days upon receiving your tech pack and fabric approval.",
  },
  {
    id: 3,
    question: "What international quality standard do you follow?",
    answer:
      "We strictly adhere to ISO 2859-1 (AQL 1.5 standard) with dedicated resident QA/QC inspectors checking every stage from fabric knit-dye to final carton packing.",
  },
  {
    id: 4,
    question: "Are your partner factories socially compliant?",
    answer:
      "Yes, 100% of our partner mills are certified and audited by Accord/RSC, BSCI, SEDEX, OEKO-TEX Standard 100, and WRAP.",
  },
];

export default function SourcingFaq() {
  // ডান পাশের ছবির উচ্চতার সাথে নিখুঁত ব্যালান্স রাখতে ১ম প্রশ্নটি ডিফল্টভাবে ওপেন থাকবে
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  // ডান পাশের ছবির সাইজের সাথে সমান রাখতে ৪টি প্রশ্ন দেখানো হচ্ছে
  const rawList = faqData && faqData.length > 0 ? faqData : fallbackFaqs;
  const displayedFaqs = rawList.slice(0, 4);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ══════════════════════════════════════════════════════════════
              বাম পাশ: হেডার ও প্রশ্নাবলী (FAQ Accordion)
          ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200 uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4 text-emerald-600" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B2B43] tracking-tight leading-tight">
                Got Questions? <br />
                <span className="text-emerald-600">We Have Answers.</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl">
                Everything you need to know about our sourcing, sampling timeline, MOQs, and global export compliance.
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-3.5 pt-2">
              {displayedFaqs.map((faq: any, idx: number) => {
                const isOpen = openFaqId === (faq.id || idx + 1);
                const faqKey = faq.id || idx + 1;

                return (
                  <div
                    key={faqKey}
                    className={`transition-all duration-300 rounded-2xl border ${
                      isOpen
                        ? "bg-white border-emerald-500/40 shadow-lg shadow-emerald-950/5 ring-1 ring-emerald-500/20"
                        : "bg-white/80 hover:bg-white border-slate-200/80 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faqKey)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left focus:outline-none"
                    >
                      <span
                        className={`text-base sm:text-lg font-bold transition-colors pr-4 ${
                          isOpen ? "text-[#0B2B43]" : "text-slate-800 hover:text-emerald-700"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? "bg-emerald-600 text-white rotate-180"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* কন্টাক্ট সাপোর্ট লিংক */}
            <div className="pt-2 flex items-center gap-2 text-sm text-slate-600">
              <span>Still have questions?</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to our sourcing experts</span>
              </Link>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ডান পাশ: সরাসরি সেকশনের ব্যাকগ্রাউন্ডে ইলাস্ট্রেশন (No Box/Card)
          ══════════════════════════════════════════════════════════════ */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center">
            <div className="w-full max-w-[500px] lg:max-w-[560px] xl:max-w-[620px] flex items-center justify-center">
              <img
                src="/images/interfaq.png"
                alt="Frequently Asked Questions"
                className="w-full h-auto object-contain select-none"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg";
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}