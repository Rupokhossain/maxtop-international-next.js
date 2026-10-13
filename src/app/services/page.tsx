"use client";

import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Layers,
  Scissors,
  Shirt,
  ShieldCheck,
  Award,
  Ship,
  FileSpreadsheet,
  TestTube2,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ── ১. বায়িং হাউজের পূর্ণাঙ্গ সার্ভিসসমূহ (১০০% নিখুঁত গার্মেন্ট ইমেজ সহ) ──
const coreServices = [
  {
    title: "Yarn, Fabric & Trims Sourcing",
    tagline: "RAW MATERIAL PROCUREMENT",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop",
    desc: "Direct mill linkage across Bangladesh & South Asia. Sourcing combed cotton, BCI organic yarn, CVC, linen, and specialized synthetic blends with zero broker overhead.",
    points: [
      "Mill-direct rates with strict yarn quality audit",
      "Custom pantone lab dips (3-5 days turnaround)",
      "High-grade trims, YKK zippers & custom metal hardware",
    ],
  },
  {
    title: "CAD Pattern & Sample Prototyping",
    tagline: "DESIGN & RAPID SAMPLING",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
    desc: "Transforming buyer tech-packs and moodboards into production-grade patterns. Utilizing 2D/3D CAD to verify drape, tension, and fit before cutting bulk fabric.",
    points: [
      "Physical counter & fit samples in 5-7 days",
      "CLO 3D virtual fittings for rapid buyer sign-off",
      "Precision grading for US, EU & Asian size specs",
    ],
  },
  {
    title: "Factory Allocation & Merchandising",
    tagline: "VETTED VENDOR SELECTION",
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=800&auto=format&fit=crop",
    desc: "Allocating your orders to the most suitable audited manufacturing lines based on machine capability, gauge, washing specialty, and target lead-time.",
    points: [
      "Dedicated merchandiser managing daily T&A calendar",
      "Accord / RSC, BSCI, SEDEX vetted partner factories",
      "High capacity for Knitwear, Wovens, Denim & Outerwear",
    ],
  },
  {
    title: "Multi-Stage Quality Control (AQL 1.5)",
    tagline: "STATIONED IN-LINE AUDITS",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    desc: "Our on-site QA officers monitor every manufacturing stage from cut-to-pack, enforcing zero tolerance for measurement tolerances or sewing defects.",
    points: [
      "Strict ISO 2859-1 (AQL 1.5 / 2.5) inspection standards",
      "4-point fabric inspection & in-line roving checks",
      "100% metal detector scan prior to carton sealing",
    ],
  },
  {
    title: "In-House Lab Testing & Compliance",
    tagline: "SAFETY & CHEMICAL STANDARDS",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop",
    desc: "Comprehensive physical and chemical laboratory testing ensuring every batch complies with international consumer safety and eco-regulations.",
    points: [
      "Wash fastness, rub fastness, pilling & shrinkage tests",
      "OEKO-TEX Standard 100, REACH & GOTS verification",
      "Detailed laboratory test reports issued before dispatch",
    ],
  },
  {
    title: "Chittagong Port Logistics & Export",
    tagline: "FOB CTG & CIF SHIPPING",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
    desc: "From factory warehouse loading to container gate-in at Chittagong Port (CTG), our logistics department manages all customs clearing and export manifests.",
    points: [
      "Export documentation (BL, GSP Form A, Packing List, CO)",
      "Vessel space booking during peak shipping seasons",
      "Flexible Incoterms: FOB Chittagong, CIF, CFR & Air Express",
    ],
  },
];

// ── ২. বায়িং হাউজ যেভাবে সার্ভিস দেয় (৫-ধাপের অর্ডার প্রসেস) ──
const executionSteps = [
  {
    step: "01",
    title: "Tech-Pack & Costing",
    time: "24 - 48 Hours",
    desc: "You send your garment sketch or specs. We calculate fabric yield and provide a transparent, open-book quote.",
  },
  {
    step: "02",
    title: "Sampling & Fit Approval",
    time: "5 - 7 Days",
    desc: "We develop physical counter-samples and color lab dips. You review fit, fabric weight, and hand-feel for approval.",
  },
  {
    step: "03",
    title: "Milling & Trims Booking",
    time: "15 - 20 Days",
    desc: "Mill yarn spinning, fabric knitting/weaving, dyeing, and custom trims development (custom buttons, YKK zips, labels).",
  },
  {
    step: "04",
    title: "Bulk Production & In-Line QC",
    time: "30 - 45 Days",
    desc: "Cutting, sewing, and washing lines operate with our resident QC inspectors checking every seam, stitch, and measurement.",
  },
  {
    step: "05",
    title: "Final Audit & Port Dispatch",
    time: "On Schedule",
    desc: "Final AQL 1.5 audit, export carton packing, customs clearance, and container handover at Chittagong Port for vessel departure.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-slate-800">
        <Navbar/>
      {/* ══════════════════════════════════════════════════════════════
          ১. হেডার ব্যানার (Hero: স্পষ্ট গার্মেন্টস শোরুম ব্যাকগ্রাউন্ড ছবি + ব্যালান্সড ডার্ক নেভি ওভারলে)
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden border-b border-slate-800">
        
        {/* ব্যাকগ্রাউন্ড শোরুম / গার্মেন্টস ছবি */}
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80"
          alt="Apparel Buying House Production"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* ব্যালান্সড নেভি ওভারলে (যাতে পেছনের ছবি সুন্দর দেখা যায় এবং লেখা ১০০% স্পষ্ট থাকে) */}
        <div className="absolute inset-0 bg-[#0B2B43]/80 bg-gradient-to-b from-[#071D2E]/85 via-[#0B2B43]/75 to-[#071D2E]/90" />

        {/* কনটেন্ট */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            Full-Service Apparel Buying House
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            How We Power Your Apparel Brand In Bangladesh
          </h1>

          <p className="text-base sm:text-lg text-slate-200 font-normal max-w-2xl mx-auto leading-relaxed">
            A transparent, reliable buying and sourcing partner. From fabric milling and rapid proto sampling to bulk manufacturing and port clearance.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ২. কী কী দিচ্ছি: ছবিযুক্ত ৬টি পূর্ণাঙ্গ বায়িং সার্ভিস কার্ড
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
            WHAT WE PROVIDE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0B2B43] tracking-tight">
            End-To-End Sourcing &amp; Manufacturing Services
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Managing your entire supply chain with transparent costing, audited compliance, and strict AQL quality standards.
          </p>
        </div>

        {/* সার্ভিস কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-emerald-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* কার্ডের উপরের ছবি ও ক্যাটাগরি ট্যাগ */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  <span className="absolute bottom-3 left-4 text-[10px] font-bold px-2.5 py-1 rounded-md bg-white/95 text-slate-900 uppercase tracking-wider backdrop-blur-sm shadow-sm">
                    {service.tagline}
                  </span>
                </div>

                {/* কার্ডের টেক্সট কনটেন্ট */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0B2B43] tracking-tight mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* চেকলিস্ট */}
                  <div className="space-y-2 pt-4 border-t border-slate-100">
                    {service.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* কার্ডের নিচের লিংক */}
              <div className="px-6 pb-6 pt-2">
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Inquire this service</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ৩. কীভাবে সার্ভিস দিচ্ছি: ৫-ধাপের ক্লিয়ার অর্ডার প্রসেস
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block mb-1">
              HOW WE DELIVER
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0B2B43] tracking-tight">
              The 5-Step Order Execution Journey
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              From your initial tech-pack submission to final container dispatch at Chittagong Port.
            </p>
          </div>

          {/* ৫টি হরাইজন্টাল স্টেপ কার্ডস */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {executionSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-400 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#0B2B43]">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      {step.time}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0B2B43] tracking-tight mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SOP Compliant</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ৪. কল-টু-অ্যাকশন ব্যানার (RFQ / Tech-Pack Submission)
      ══════════════════════════════════════════════════════════════ */}
      {/* ══════════════════════════════════════════════════════════════
          ৪. কল-টু-অ্যাকশন ব্যানার (Floating Box: ফুটারের সাথে আর মিশবে না)
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* চারদিকে প্যাডিং ও রাউন্ডেড কর্নার সহ ফ্লোটিং ডার্ক কার্ড */}
          <div className="relative rounded-3xl overflow-hidden bg-[#0B2B43] text-white p-8 sm:p-12 lg:p-16 border border-slate-700/60 shadow-2xl">
            
            {/* কার্ডের ভেতরে হালকা টেক্সচার ব্যাকগ্রাউন্ড (১৫% অপাসিটি) */}
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
              alt="Garments Showroom"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-15 pointer-events-none"
            />

            {/* আধুনিক ব্যাকগ্রাউন্ড গ্লো ইফেক্ট */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#071D2E] rounded-full blur-2xl pointer-events-none" />

            {/* কনটেন্ট */}
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                Start Your Production With Us
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Have a Tech-Pack or Looking for a Reliable Sourcing Partner?
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
                Send us your garment specs or sketches. We will revert with a detailed open-costing proposal within 24–48 hours.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2"
                >
                  <span>Request Sourcing Quotation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/products"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors border border-white/20 flex items-center justify-center"
                >
                  <span>Explore Products</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
        <Footer/>
    </main>
  );
}