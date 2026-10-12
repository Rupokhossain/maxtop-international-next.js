"use client";

import Link from "next/link";
import {
  Search,
  Scissors,
  ShieldCheck,
  DollarSign,
  Award,
  Truck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Layers,
  Check,
  BadgeCheck,
  FileText,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ServicesPage() {
  // ১. রেফারেন্স ইমেজের ৬টি কোর সার্ভিসেস (সঠিক ও ১০০% সচল ছবি সহ)
  const coreServices = [
    {
      number: "01",
      title: "Sourcing & Merchandising",
      subtitle: "Yarn, Fabric & Accredited Mills Linkage",
      desc: "Direct connection with top-tier spinning, knitting, and weaving mills across Bangladesh and Asia, ensuring premium raw material availability at competitive mill rates.",
      image:
        "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=800&auto=format&fit=crop&q=80",
      icon: Search,
      deliverables: [
        "100% Combed cotton, BCI, GOTS organic & blended yarns",
        "Direct mill allocation with guaranteed lead-time control",
        "300+ pre-audited fabric and trims suppliers",
      ],
      tag: "Raw Material Sourcing",
    },
    {
      number: "02",
      title: "Design & Product Development",
      subtitle: "3D CAD Prototyping & Trend Engineering",
      desc: "Transforming buyer tech-packs, runway sketches, and moodboards into production-ready physical and digital samples with fast turnaround.",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&auto=format&fit=crop&q=80",
      icon: Scissors,
      deliverables: [
        "Digital 3D CLO virtual fit verification & rendering",
        "Rapid 5-7 business days physical counter-sampling",
        "Precision pattern grading across all international size specs",
      ],
      tag: "Prototyping & R&D",
    },
    {
      number: "03",
      title: "Production & Quality Assurance",
      subtitle: "Strict AQL 1.5 & 2.5 Multi-Stage Inspections",
      desc: "Dedicated on-site QA officers monitor every single manufacturing process from cut-to-pack, enforcing zero tolerance for measurement or structural flaws.",
      // আসল গার্মেন্টস প্রোডাকশন ও সুইং ইন্সপেকশন ফটো
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=800&auto=format&fit=crop&q=80",
      icon: ShieldCheck,
      deliverables: [
        "Continuous inline, mid-line & Final Random Inspection (FRI)",
        "In-house physical lab tests (shrinkage, colorfastness, GSM)",
        "100% metal detector screening and carton barcode audits",
      ],
      tag: "Zero-Defect QA",
    },
    {
      number: "04",
      title: "Cost Re-engineering Support",
      subtitle: "Open-Book Costing & Yield Optimization",
      desc: "Detailed technical analysis of garment tech-packs to optimize fabric consumption, seam construction, and leverage duty-free GSP tariff benefits.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop&q=80",
      icon: DollarSign,
      deliverables: [
        "Transparent open-book FOB / CIF price breakdowns",
        "Marker nesting efficiency maximizing fabric yield per yard",
        "Duty-free tariff benefits for EU, UK, Canada & Australia",
      ],
      tag: "Margin Optimization",
    },
    {
      number: "05",
      title: "Audits & Compliance Support",
      subtitle: "Ethical Manufacturing & LEED Green Standards",
      desc: "Exclusive collaboration with fully compliant, socially audited garment manufacturing units upholding the strictest global standards.",
      // ১০০% সচল ও ভেরিফাইড আধুনিক পোশাক কারখানার ছবি
      image:
        "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=80",
      icon: Award,
      deliverables: [
        "amfori BSCI, Sedex SMETA 4-Pillar, and WRAP Gold certified",
        "Accord / RSC workplace safety & fire protection compliance",
        "OEKO-TEX Standard 100 & GOTS chemical safety protocols",
      ],
      tag: "100% Ethical & LEED",
    },
    {
      number: "06",
      title: "Shipping & Logistics Support",
      subtitle: "Customs Clearance & Global Multi-Modal Freight",
      desc: "Complete logistics management from factory packaging to container loading at Chittagong Port or air dispatch from Dhaka Airport.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
      icon: Truck,
      deliverables: [
        "Comprehensive FOB, CFR, CIF, and DDP export documentation",
        "Seamless customs export clearance at port of origin",
        "Real-time vessel GPS tracking and Bill of Lading management",
      ],
      tag: "Global Freight",
    },
  ];

  // ২. প্রোডাক্টভিত্তিক সার্ভিস সক্ষমতা
  const productCapabilities = [
    {
      title: "Knitwear & Cut-and-Sew",
      items: "T-Shirts, Polos, Hoodies, Sweatshirts & Joggers",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=800&auto=format&fit=crop&q=80",
      gsm: "140 - 360 GSM",
      moq: "500 Pcs / Color",
      leadTime: "45-60 Days",
      servicesList: [
        "100% Combed cotton, BCI organic, CVC & French Terry",
        "Bio-polish, silicone softener & vintage acid wash",
        "Puff printing, silk-screen, embroidery & custom labels",
        "AQL 1.5 inline inspection & metal detector check",
      ],
    },
    {
      title: "Denim & Jeans Line",
      items: "5-Pocket Jeans, Denim Jackets, Shorts & Overalls",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop&q=80",
      gsm: "9.5 - 14.5 Oz",
      moq: "1,000 Pcs / Style",
      leadTime: "60-75 Days",
      servicesList: [
        "Rigid selvedge, comfort stretch & recycled denim weaves",
        "Laser whiskering, ozone bleaching & eco stone washing",
        "Anti-rust brass rivets, YKK zippers & leather patches",
        "Seam slippage strength testing & shrinkage control",
      ],
    },
    {
      title: "Woven Casual & Formal",
      items: "Oxford Shirts, Flannels, Linen Blends & Poplin",
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
      gsm: "110 - 220 GSM",
      moq: "600 Pcs / Style",
      leadTime: "50-65 Days",
      servicesList: [
        "Fine yarn-dyed checks, stripes, twill & linen blends",
        "High-grade German Wendler collar & cuff fusing",
        "16-18 stitches per inch (SPI) precision tailoring",
        "Stand-up collar butterfly presentation packaging",
      ],
    },
    {
      title: "Outerwear & Puffer Jackets",
      items: "Down Jackets, Waterproof Parkas & Windbreakers",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
      gsm: "Light to Heavy Duty",
      moq: "500 Pcs / Style",
      leadTime: "65-85 Days",
      servicesList: [
        "Ripstop nylon, taslan shell & RDS certified down",
        "100% Seam-sealed waterproof tape & DWR coating",
        "Waterproof reverse coil zippers & storm-flaps",
        "Down leakage prevention & thermal chamber testing",
      ],
    },
    {
      title: "Activewear & Athleisure",
      items: "Gym Leggings, Performance Tees & Sports Bras",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
      gsm: "180 - 280 GSM",
      moq: "500 Pcs / Set",
      leadTime: "45-60 Days",
      servicesList: [
        "Poly-Spandex, Nylon-Elastane & quick-dry moisture wicking",
        "4-needle 6-thread flatlock anti-chafing stitching",
        "3M reflective safety heat transfers & vivid sublimation",
        "Squat-proof opacity & stretch modulus certification",
      ],
    },
    {
      title: "Sweaters & Knitwear",
      items: "Pullovers, Cable Knits, Cardigans & Cashmere Blends",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&auto=format&fit=crop&q=80",
      gsm: "7 to 12 Gauge",
      moq: "500 Pcs / Style",
      leadTime: "55-70 Days",
      servicesList: [
        "100% Cotton, merino wool blends, chenille & recycled yarns",
        "Stoll & Shima Seiki computerized jacquard knitting",
        "Soft silicone wash, steaming & dimensional stability",
        "Precision dial linking & dropped-stitch QA checks",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        {/* ═════════════════════════════════════════════════════════════════
            ১. হিরো ব্যানার (স্পষ্ট ব্যাকগ্রাউন্ড ফটো + ডার্ক প্রিমিয়াম ওভারলে)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="relative bg-[#071D2E] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* পেছনের স্পষ্ট গার্মেন্টস ও টেক্সটাইল ফটো */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80')",
            }}
          />
          {/* ব্যালেন্সড নেভি গ্রেডিয়েন্ট ওভারলে যাতে লেখাটি একদম স্পষ্ট ও উজ্জ্বল থাকে */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#071D2E]/85 via-[#071D2E]/70 to-[#071D2E]/95" />

          <div className="relative max-w-7xl mx-auto text-center">
            {/* ব্রেডক্রাম্ব */}
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-3">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-slate-300">Services</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>END-TO-END RMG SOURCING & MANUFACTURING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight drop-shadow-sm">
              Our Services
            </h1>

            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
              We believe that superior service leads to superior success.
            </p>

            {/* ৪টি কী-মেট্রিক্স স্ট্রিপ */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-slate-600/60 text-center">
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">18M+</div>
                <div className="text-xs text-slate-300 mt-1 uppercase font-medium">Pieces Annual Capacity</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">45+</div>
                <div className="text-xs text-slate-300 mt-1 uppercase font-medium">Audited Partner Units</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">100%</div>
                <div className="text-xs text-slate-300 mt-1 uppercase font-medium">Accord / RSC Compliant</div>
              </div>
              <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-sm">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">22+</div>
                <div className="text-xs text-slate-300 mt-1 uppercase font-medium">Export Destinations</div>
              </div>
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ২. ৬টি কোর সার্ভিসেস (Luxury Editorial Cards - ৩x২ গ্রিড)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Core Sourcing Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D2E] tracking-tight mt-3">
              Comprehensive Apparel Supply Chain Solutions
            </h2>
            <p className="mt-3 text-slate-600 text-base">
              Providing international fashion brands with agile, ethical, and risk-free manufacturing execution in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.number}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* ফটো হেডার */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                      {/* সার্ভিস নাম্বার ব্যাজ */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-[#071D2E] text-xs font-extrabold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        SERVICE {service.number}
                      </div>

                      {/* সার্ভিস ট্যাগ */}
                      <div className="absolute top-4 right-4 bg-emerald-600/95 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-sm">
                        {service.tag}
                      </div>

                      {/* ফ্লোটিং আইকন */}
                      <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-white shadow-md flex items-center justify-center text-emerald-600 group-hover:bg-[#071D2E] group-hover:text-emerald-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* বডি কন্টেন্ট */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#071D2E] group-hover:text-emerald-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-600 mt-1">
                        {service.subtitle}
                      </p>
                      <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* চেকলিস্ট ডেলিভারেবলস */}
                      <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                          Key Deliverables:
                        </div>
                        {service.deliverables.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                    >
                      <span>Inquire this service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ৩. প্রোডাক্টভিত্তিক সার্ভিস সক্ষমতা (Product + Services Showcase)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Product Categories & Technical Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071D2E] tracking-tight mt-2">
                What We Manufacture & How We Deliver
              </h2>
              <p className="mt-3 text-slate-600 text-base">
                Discover the specific manufacturing, washing, and quality control services we provide across each major garment division.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productCapabilities.map((prod, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* প্রোডাক্টের ছবি */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-200">
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071D2E]/85 via-black/20 to-transparent" />

                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <h4 className="text-lg font-extrabold text-white">
                          {prod.title}
                        </h4>
                        <p className="text-xs text-slate-300 truncate">
                          {prod.items}
                        </p>
                      </div>
                    </div>

                    {/* টেকনিক্যাল স্পেক্স স্ট্রিপ */}
                    <div className="p-3 bg-[#071D2E] text-white grid grid-cols-3 text-center text-xs border-t border-slate-800">
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Weight</div>
                        <div className="font-bold text-white text-[11px] mt-0.5">{prod.gsm}</div>
                      </div>
                      <div className="border-x border-slate-700/60">
                        <div className="text-[10px] text-slate-400 uppercase">Lead Time</div>
                        <div className="font-bold text-emerald-400 text-[11px] mt-0.5">{prod.leadTime}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 uppercase">Min MOQ</div>
                        <div className="font-bold text-white text-[11px] mt-0.5">{prod.moq}</div>
                      </div>
                    </div>

                    {/* সার্ভিসেস তালিকা */}
                    <div className="p-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Services Provided For This Category:</span>
                      </div>

                      <div className="space-y-2.5">
                        {prod.servicesList.map((srv, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5 stroke-[3]" />
                            <span className="leading-snug">{srv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#071D2E] text-[#071D2E] hover:text-white font-bold text-xs border border-slate-200 hover:border-[#071D2E] shadow-sm transition-all"
                    >
                      <span>Inquire This Line</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ৪. ৫-ধাপের স্বচ্ছ সোর্সিং প্রসেস (Sourcing Lifecycle)
        ═════════════════════════════════════════════════════════════════ */}
        <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">
                Transparent Execution
              </span>
              <h2 className="text-3xl font-extrabold text-[#071D2E] tracking-tight mt-1">
                Our 5-Stage Order Execution Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", title: "Tech-Pack & Costing", desc: "Buyer submits target price, specs & reference sample." },
                { step: "02", title: "Prototyping & Dips", desc: "Open-book FOB quote & physical counter-sample in 5-7 days." },
                { step: "03", title: "Fabric Milling", desc: "Lab dip shades approval & bulk fabric yarn knitting/weaving." },
                { step: "04", title: "Bulk Sewing & QA", desc: "Continuous inline, mid-line & AQL 1.5 final inspections." },
                { step: "05", title: "Port Export & Dispatch", desc: "Final audit, customs clearance & sea/air freight dispatch." },
              ].map((st, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#071D2E] text-emerald-400 font-extrabold text-xs flex items-center justify-center mb-3 shadow-sm">
                      {st.step}
                    </div>
                    <h3 className="font-bold text-[#071D2E] text-sm mb-1.5">{st.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                    <BadgeCheck className="w-3.5 h-3.5" /> Stage Cleared
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═════════════════════════════════════════════════════════════════
            ৫. আরএফকিউ কল-টু-অ্যাকশন ব্যানার
        ═════════════════════════════════════════════════════════════════ */}
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#071D2E] via-[#0B2B43] to-[#071D2E] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3 border border-emerald-500/30">
                <FileText className="w-3.5 h-3.5" />
                <span>FAST 24-HOUR RFQ RESPONSE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Ready To Source Your Next Apparel Collection?
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-xl">
                Send us your design sketches, required quantity, or target price point. Our technical merchandising team will provide factory allocation and price estimation within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                <span>View Full Catalog</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}