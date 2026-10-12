"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Sparkles,
  Building2,
  HelpCircle,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  // ফর্ম সাবমিশন স্টেট
  const [isSubmitted, setIsSubmitted] = useState(false);

  // কাস্টম লিখে দেওয়ার টগল স্টেট
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const [isCustomQuantity, setIsCustomQuantity] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    category: "knitwear",
    customCategory: "",
    quantity: "1000-5000",
    customQuantity: "",
    message: "",
  });

  // এফএকিউ অ্যাকর্ডিয়ন স্টেট
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const faqs = [
    {
      q: "What is your standard turnaround time for counter-samples?",
      a: "Our in-house CAD pattern masters and dedicated sampling lines develop proto and fit samples within 5 to 7 business days once tech-packs and fabric specs are confirmed.",
    },
    {
      q: "What is your Minimum Order Quantity (MOQ)?",
      a: "We offer flexible MOQ options to support emerging boutique brands and large retailers alike—typically starting from 500 pcs per color/style for knitwear and 1,000 pcs for denim.",
    },
    {
      q: "What Incoterms and payment methods do you accept?",
      a: "We regularly handle FOB Chittagong, CFR, CIF, and DDP to your destination warehouse. Payments are accepted via standard International Irrevocable Letter of Credit (L/C at sight) or T/T.",
    },
    {
      q: "Can international buyers schedule an on-ground factory tour in Bangladesh?",
      a: "Yes! We regularly host buying delegations from Europe, North America, and Australia. We arrange airport reception at Dhaka International Airport, executive hotel logistics, and guided tours of our LEED-certified partner factories.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* ═════════════════════════════════════════════════════════════════
            ১. হিরো ব্যানার (ডার্ক নেভি + স্পষ্ট ব্যাকগ্রাউন্ড ইমেজ)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-[#071D2E] text-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-35 mix-blend-luminosity scale-105"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071D2E]/90 via-[#071D2E]/75 to-[#071D2E]/95" />

          <div className="relative max-w-7xl mx-auto text-center">
            {/* ব্রেডক্রাম্ব */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-300">Contact</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEDICATED MERCHANDISING DESK</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 max-w-4xl mx-auto leading-tight">
              Get In Touch With Maxtop International
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
              Submit your RFQ or schedule an on-ground factory tour in Bangladesh. Our technical merchandising team responds within 24 hours.
            </p>

            {/* দ্রুত আস্থার ৩টি ব্যাজ */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>24-Hour RFQ Turnaround</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Confidential Tech-Pack Review</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Merchandiser WhatsApp</span>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ২. প্রধান যোগাযোগ ও RFQ ফরম সেকশন (Split Grid Layout)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* ── বাম কলাম: RFQ কোটেশন ও ইনকোয়ারি ফর্ম (৭ কলাম) ── */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Request A Quotation (RFQ)
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071D2E] tracking-tight mt-3">
                  Tell Us About Your Apparel Requirements
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-2">
                  Please provide your target specifications. Choose from our standard lines or type your custom product and volume.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    Inquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto">
                    Thank you, <span className="font-semibold">{formData.name || "partner"}</span>. Your inquiry for{" "}
                    <span className="font-semibold text-emerald-900">
                      {isCustomCategory ? formData.customCategory : formData.category}
                    </span>{" "}
                    has been forwarded to our Senior Merchandising Desk. We will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsCustomCategory(false);
                      setIsCustomQuantity(false);
                    }}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-[#071D2E] text-white text-xs font-bold hover:bg-emerald-700 transition"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Fashion Brand *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Nordic Apparel Ltd."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Country / Market *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. United Kingdom, Germany, USA"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* ── ড্রপডাউন + কাস্টম লেখার অপশন (Category & Quantity) ── */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* গার্মেন্টস ক্যাটাগরি ফিল্ড */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Garment Category *
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomCategory(!isCustomCategory);
                            if (!isCustomCategory) {
                              setFormData({ ...formData, category: "custom" });
                            } else {
                              setFormData({ ...formData, category: "knitwear", customCategory: "" });
                            }
                          }}
                          className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          {isCustomCategory ? "← Select from list" : "✏️ Type custom"}
                        </button>
                      </div>

                      {isCustomCategory ? (
                        <input
                          type="text"
                          required
                          placeholder="e.g. Babywear, Canvas Bags, Uniforms..."
                          value={formData.customCategory}
                          onChange={(e) => setFormData({ ...formData, customCategory: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-emerald-500 focus:outline-none text-sm bg-white shadow-sm"
                          autoFocus
                        />
                      ) : (
                        <select
                          value={formData.category}
                          onChange={(e) => {
                            if (e.target.value === "custom") {
                              setIsCustomCategory(true);
                            }
                            setFormData({ ...formData, category: e.target.value });
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50 text-slate-800"
                        >
                          <option value="knitwear">Knitwear (T-Shirts, Polos, Hoodies)</option>
                          <option value="denim">Denim & Washed Jeans Line</option>
                          <option value="woven">Woven Casual & Formal Shirts</option>
                          <option value="outerwear">Outerwear, Puffers & Jackets</option>
                          <option value="activewear">Activewear & Performance Gym</option>
                          <option value="sweater">Sweaters & Flat Knitwear</option>
                          <option value="custom">✏️ Other / Type Custom Product...</option>
                        </select>
                      )}
                    </div>

                    {/* অর্ডার ভলিউম / কোয়ান্টিটি ফিল্ড */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Estimated Quantity (MOQ)
                        </label>
                        <button
                          type="button"
                          onClick={() => {
                            setIsCustomQuantity(!isCustomQuantity);
                            if (!isCustomQuantity) {
                              setFormData({ ...formData, quantity: "custom" });
                            } else {
                              setFormData({ ...formData, quantity: "1000-5000", customQuantity: "" });
                            }
                          }}
                          className="text-[11px] font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          {isCustomQuantity ? "← Select from list" : "✏️ Type exact pcs"}
                        </button>
                      </div>

                      {isCustomQuantity ? (
                        <input
                          type="text"
                          required
                          placeholder="e.g. 2,500 Pcs (500 pcs per color)..."
                          value={formData.customQuantity}
                          onChange={(e) => setFormData({ ...formData, customQuantity: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-emerald-500 focus:outline-none text-sm bg-white shadow-sm"
                          autoFocus
                        />
                      ) : (
                        <select
                          value={formData.quantity}
                          onChange={(e) => {
                            if (e.target.value === "custom") {
                              setIsCustomQuantity(true);
                            }
                            setFormData({ ...formData, quantity: e.target.value });
                          }}
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50 text-slate-800"
                        >
                          <option value="sample">Proto Samples & Sampling Only</option>
                          <option value="500-1000">500 – 1,000 Pcs (Flexible MOQ)</option>
                          <option value="1000-5000">1,000 – 5,000 Pcs</option>
                          <option value="5000-20000">5,000 – 20,000 Pcs</option>
                          <option value="20000+">20,000+ Pcs (Large Production)</option>
                          <option value="custom">✏️ Type Exact / Custom Quantity...</option>
                        </select>
                      )}
                    </div>

                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Order Details, Fabric Specs or Target Price Point *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please mention fabric GSM, composition (e.g. 100% Combed Cotton, French Terry), target delivery window, or any questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 text-sm bg-slate-50/50"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#071D2E] hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.01]"
                  >
                    <span>Submit Sourcing Inquiry</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center pt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your design tech-packs and pricing inquiries are protected by strict NDA.</span>
                  </div>
                </form>
              )}
            </div>

            {/* ── ডান কলাম: হেডকোয়ার্টার ও সরাসরি যোগাযোগের কার্ডসমূহ (৫ কলাম) ── */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* ঢাকা হেড অফিস কার্ড */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shadow-sm">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[#071D2E]">
                      Corporate Headquarters
                    </h3>
                    <p className="text-xs text-slate-500">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#071D2E] block">Office Address:</strong>
                      <span>Sector #03, Uttara, Dhaka-1230, Bangladesh</span>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        (Only 10 minutes from Hazrat Shahjalal International Airport)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#071D2E] block">Email Inquiries:</strong>
                      <a href="mailto:sourcing@maxtopintl.com" className="hover:text-emerald-600 transition">
                        sourcing@maxtopintl.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#071D2E] block">Direct Phone / Merchandising:</strong>
                      <span>+880 1711-000000</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#071D2E] block">Operating Hours:</strong>
                      <span>Monday – Saturday: 9:00 AM – 7:00 PM (GMT+6)</span>
                    </div>
                  </div>
                </div>

                {/* সরাসরি WhatsApp চ্যাট বাটন */}
                <div className="mt-6 pt-6 border-t border-slate-100">
                  <a
                    href="https://wa.me/8801711000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </div>

              {/* চট্টগ্রাম পোর্ট ও গ্লোবাল ডেস্ক কার্ড */}
              <div className="bg-[#071D2E] text-white rounded-3xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-base font-extrabold text-white mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span>Port & Global Liaison Network</span>
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-emerald-400 block text-xs">Chittagong Port Liaison Desk</strong>
                    <p className="mt-1 text-slate-300">Agrabad Commercial Area, Chittagong, Bangladesh</p>
                    <span className="text-[10px] text-slate-400">Handling Customs Export & Sea Freight</span>
                  </div>

                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-emerald-400 block text-xs">Global Buyer Coordination</strong>
                    <p className="mt-1 text-slate-300">Coordinating across London (GMT) & New York (EST) business hours for instant technical answers.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ৩. বায়ারদের প্রায়শ জিজ্ঞাসিত প্রশ্ন (FAQ Accordion)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-extrabold text-[#071D2E] tracking-tight mt-3">
                Common Questions From International Apparel Buyers
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#071D2E] hover:text-emerald-700 transition"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform ${
                        openFaq === idx ? "rotate-180 text-emerald-600" : ""
                      }`}
                    />
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ৪. ঢাকা ফ্যাক্টরি ভিজিট ইনভাইটেশন স্ট্রিপ
        ═════════════════════════════════════════════════════════════════ */}
        <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                On-Ground Hospitality
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#071D2E] mt-1">
                Visiting Bangladesh For Garment Sourcing?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-xl">
                We organize airport pickup, secure hotel reservations, and escorted visits to our LEED-certified partner factories and testing laboratories.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href="mailto:sourcing@maxtopintl.com?subject=Schedule%20Dhaka%20Factory%20Visit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#071D2E] hover:bg-emerald-600 text-white font-bold text-xs shadow-md transition-all"
              >
                <span>Schedule An On-Ground Visit</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}