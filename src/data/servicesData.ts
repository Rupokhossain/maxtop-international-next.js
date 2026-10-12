import {
  Scissors,
  Layers,
  SearchCheck,
  FlaskConical,
  Ship,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  category: string;
  icon: LucideIcon;
  image: string;
  desc: string;
  deliverables: string[];
  tags: string[];
}

export interface SourcingStep {
  step: string;
  title: string;
  timeline: string;
  desc: string;
}

// ── ১. কোর সার্ভিস ডাটা (৬টি পারফেক্ট ও ক্রিস্প ইমেজ সহ) ──
export const servicesData: ServiceItem[] = [
  {
    id: "design-sampling",
    num: "01",
    title: "Design & R&D Sampling",
    category: "Product Development",
    icon: Scissors,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    desc: "From initial CAD tech-packs to fit sign-off. Our master pattern makers engineer sales-ready prototypes in 7–10 days.",
    deliverables: [
      "2D/3D CLO digital fit simulation & grading",
      "Proto & salesman sample turnaround in 7–10 days",
      "Cost-optimized fabric consumption planning",
    ],
    tags: ["2D/3D CAD", "Proto Samples", "Size Grading"],
  },
  {
    id: "fabric-procurement",
    num: "02",
    title: "Fabric & Trims Procurement",
    category: "Raw Material Sourcing",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=800&q=80",
    desc: "Direct yarn sourcing from certified mills. Pantone-matched lab dips, GOTS organic cotton, and eco-certified hardware trims.",
    deliverables: [
      "Mill-direct yarn booking for competitive pricing",
      "Pantone TCX lab-dip approval within 48–72 hours",
      "OEKO-TEX & GRS certified trims and accessories",
    ],
    tags: ["Mill Direct", "Pantone Lab Dips", "OEKO-TEX Trims"],
  },
  {
    id: "quality-control",
    num: "03",
    title: "Inline & Final QA (AQL 2.5)",
    category: "Quality Assurance",
    icon: SearchCheck,
    // ✅ ফিক্সড: মেজারিং টেপ দিয়ে নিখুঁত গার্মেন্টস মেজারমেন্ট ও কোয়ালিটি চেকিংয়ের ক্রিস্টাল ক্লিয়ার এইচডি ছবি
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80",
    desc: "On-ground QC inspectors stationed on factory floors conducting 4-point raw fabric audits, inline checks, and final pre-shipment sign-off.",
    deliverables: [
      "Daily digital inline inspection defect reports",
      "Strict AQL 1.5 / 2.5 international standard audits",
      "100% carton barcode & needle detection scanning",
    ],
    tags: ["AQL 2.5 Standard", "Daily Reports", "Pre-Shipment"],
  },
  {
    id: "textile-testing",
    num: "04",
    title: "Textile Laboratory Testing",
    category: "Lab & Compliance",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    desc: "Comprehensive in-house physical and chemical lab tests adhering to ISO, ASTM, and AATCC global buyer requirements.",
    deliverables: [
      "Dimensional stability, shrinkage & torque testing",
      "Color fastness to washing, perspiration & light",
      "Yarn count, GSM calibration & pilling resistance",
    ],
    tags: ["ISO / AATCC", "Color Fastness", "GSM Calibration"],
  },
  {
    id: "logistics-shipping",
    num: "05",
    title: "Global Export & Logistics",
    category: "Freight & Customs",
    icon: Ship,
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    desc: "Turnkey FOB, CIF, or DDP terms. Direct vessel booking out of Chittagong port with seamless customs clearance and documentation.",
    deliverables: [
      "Fast container clearance via Chittagong (CTG) Port",
      "Duty-free GSP+ / EU / US preferential trade docs",
      "Live container GPS tracking till warehouse delivery",
    ],
    tags: ["FOB / CIF / DDP", "Duty-Free GSP+", "Port Handling"],
  },
  {
    id: "ethical-compliance",
    num: "06",
    title: "Social & Environmental Audit",
    category: "Compliance & Safety",
    icon: ShieldCheck,
    // ✅ ফিক্সড: ১০০% অ্যাক্টিভ আধুনিক গ্রিন ফ্যাক্টরি ও ইন্ডাস্ট্রিয়াল সেফটি অডিট ছবি
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    desc: "Every order is placed in BSCI, Sedex SMETA, WRAP, and LEED Green-certified garment factories with strict fire & building safety.",
    deliverables: [
      "100% child-labor-free audited factory floor allocation",
      "Higg Index environmental & water footprint audits",
      "Transparent worker wage & safety compliance checks",
    ],
    tags: ["BSCI & Sedex", "LEED Certified", "Zero Child Labor"],
  },
];

// ── ২. ফাইভ-স্টেপ সোর্সিং লাইফসাইকেল ──
export const sourcingStepsData: SourcingStep[] = [
  {
    step: "01",
    title: "Tech-Pack & Costing",
    timeline: "24–48 Hours",
    desc: "Share your spec sheets or target price. We calculate breakdown costing with zero hidden fees.",
  },
  {
    step: "02",
    title: "Proto & Fit Approval",
    timeline: "7–10 Days",
    desc: "Salesman sample & Pantone TCX lab-dip sign-off prior to purchasing bulk fabric.",
  },
  {
    step: "03",
    title: "Bulk Milling & Sewing",
    timeline: "30–45 Days",
    desc: "Knitting/weaving at certified partner mills and tracked line sewing across supervised lines.",
  },
  {
    step: "04",
    title: "AQL 2.5 Final Audit",
    timeline: "Pre-Shipment",
    desc: "Stationed QC pre-shipment audit. Full measurement and visual defect report sent to buyer.",
  },
  {
    step: "05",
    title: "Customs & Vessel Sailing",
    timeline: "On-Schedule",
    desc: "Container stuffing, bill of lading, GSP+ duty-free certificate, and global freight dispatch.",
  },
];