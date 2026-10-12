"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  UploadCloud,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export default function ContactRfq() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── ১. হেডার ── */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START SOURCING TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0B2B43]">
            Request A Factory Costing Or Visit Our Dhaka HQ
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Send your design tech-pack or target FOB requirements. Our senior merchandising team provides transparent, open-book factory costing within 24 to 48 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* ── ২. বাম পাশ: অফিস ডিটেইলস ── */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest block">
                    HEADQUARTERS
                  </span>
                  <h3 className="text-xl font-bold text-[#0B2B43]">
                    Dhaka Corporate Office
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-1" />
                  <p className="leading-snug">
                    House 18, Road 04, Sector 03, Uttara, Dhaka-1230, Bangladesh
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="tel:+8801711000000" className="hover:text-emerald-600 transition">
                    +880 1711-000000 (Direct Merchandising)
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="mailto:sourcing@maxtopintl.com" className="hover:text-emerald-600 transition">
                    sourcing@maxtopintl.com
                  </a>
                </div>

                <div className="flex items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Sunday – Thursday: 9:00 AM – 7:00 PM (BST)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                  EXPORT LOGISTICS DESK
                </span>
                <h4 className="text-sm font-bold text-[#0B2B43] mt-0.5">
                  Chittagong Port Liaison Office
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  Agrabad Commercial Area, Chittagong-4100
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60">
                CTG Port
              </span>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B2B43] text-white space-y-3 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-[#0B2B43] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Need Immediate WhatsApp Sourcing Assistance?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Average response time: Under 30 minutes
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/8801711000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-[#0B2B43] font-bold text-xs transition"
              >
                <span>Chat With Merchandising Director</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* ── ৩. ডান পাশ: বি২বি কোটেশন (RFQ) ফর্ম ── */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-4 animate-in fade-in">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-[#0B2B43]">
                  Tech-Pack Received Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Maxtop International. Our apparel merchandising team has logged your inquiry. You will receive an official costing sheet within 24–48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-black text-[#0B2B43]">
                    Submit Request For Quotation (RFQ)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your project requirements or upload design tech-packs below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@fashionbrand.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Company / Brand Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Brand or Retailer Name"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Destination Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Germany, UK, USA, Australia"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                {/* ✅ বায়ার যাতে নিজের ইচ্ছামতো টাইপ করতে পারে (Flexible Typeable Inputs) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  {/* ১. প্রোডাক্ট ক্যাটাগরি (এখন ইচ্ছামতো টাইপ করা যাবে) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Product Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Knitwear, Denim, Uniform..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* ২. অর্ডার কোয়ান্টিটি (যেকোনো সংখ্যা বা পিস টাইপ করা যাবে) */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Order Quantity
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 500 Pcs, 2,500 Pcs..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  {/* ৩. টার্গেট FOB প্রাইস */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">
                      Target FOB ($)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. $4.50 - $6.00"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>
                </div>

                {/* টেক-প্যাক আপলোড ড্রপজোন */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Upload Tech-Pack / Design Spec Sheet (PDF, AI, ZIP)
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 hover:border-emerald-500/60 rounded-2xl cursor-pointer bg-slate-50/60 transition group">
                    <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-emerald-600 transition-colors mb-2" />
                    <span className="text-xs font-bold text-slate-700">
                      {fileName ? (
                        <span className="text-emerald-700">{fileName}</span>
                      ) : (
                        "Click to browse or drag & drop files here"
                      )}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">
                      Max file size: 25MB (Tech-pack, measurement chart, or photo)
                    </span>
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.zip,.rar,.ai,.png,.jpg,.jpeg"
                    />
                  </label>
                </div>

                {/* স্পেসিফিকেশন ও মেসেজ */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Additional Specifications &amp; Target Delivery Date
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify fabric GSM, wash type, organic requirements, or target delivery window..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:border-emerald-500 focus:outline-none"
                  />
                </div>

                {/* সাবমিট বাটন */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0B2B43] hover:bg-[#071d2e] text-white text-sm font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Submit RFQ For 24h Factory Costing</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Strict NDA policy: Your designs and tech-packs remain 100% confidential.</span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}