import {
  ShieldCheck,
  Truck,
  TrendingDown,
  Users,
  Scale,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Smile,
  Award,
  type LucideIcon,
} from "lucide-react";

export interface WhyChooseUsCard {
  id: number;
  title: string;
  desc: string;
  highlight: string;
  icon: LucideIcon;
}

export interface ValueItem {
  id: number;
  name: string;
  icon: LucideIcon;
  desc: string;
}

// ── ১. Why Choose Us কার্ডস ডাটা (ছবি ১ অনুযায়ী) ──
export const whyChooseUsCards: WhyChooseUsCard[] = [
  {
    id: 1,
    title: "In-House Quality Control Solutions",
    desc: "Stationed on-ground QC inspectors conducting 4-point raw fabric inspection, in-line sewing audits, and final AQL 2.5 pre-shipment sign-offs.",
    highlight: "Zero-Defect AQL 2.5",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Full Logistics & Supply Chain Services",
    desc: "Seamless freight forwarding and container booking out of Chittagong (CTG) Port, customs clearance, and GSP+ duty-free trade documentation.",
    highlight: "FOB / CIF / DDP Terms",
    icon: Truck,
  },
  {
    id: 3,
    title: "Cost Effectiveness & Factory Direct Prices",
    desc: "Transparent open-book costing directly with certified spinning mills. We re-engineer pattern consumption to maximize your gross margin.",
    highlight: "15–20% Cost Advantage",
    icon: TrendingDown,
  },
  {
    id: 4,
    title: "Low MOQ & Seasoned Technical Team",
    desc: "Support for growing fashion brands with flexible MOQs starting from 500 pcs per style and dedicated merchandisers with 15+ years experience.",
    highlight: "Low MOQ from 500 Pcs",
    icon: Users,
  },
];

// ── ২. Our Values ডাটা (ছবি ২ অনুযায়ী) ──
export const ourValuesData: ValueItem[] = [
  {
    id: 1,
    name: "Integrity",
    icon: Scale,
    desc: "We create trust through responsible action, open-book factory costing, and honest client communication.",
  },
  {
    id: 2,
    name: "Collaboration",
    icon: HeartHandshake,
    desc: "We function as your dedicated on-ground extension in Bangladesh, aligning partner mills with your brand vision.",
  },
  {
    id: 3,
    name: "Accountability",
    icon: CheckCircle2,
    desc: "We take 100% ownership of tech-pack specifications, lab-dip approvals, and on-time vessel delivery.",
  },
  {
    id: 4,
    name: "Respect",
    icon: Users,
    desc: "We advocate fair wages, worker empowerment, and zero-tolerance for child labor across all partner factories.",
  },
  {
    id: 5,
    name: "Customer Focus",
    icon: Smile,
    desc: "Your retail success is our ultimate milestone. Every stitch and carton is engineered to delight your buyers.",
  },
  {
    id: 6,
    name: "Excellence",
    icon: Award,
    desc: "We relentlessly pursue manufacturing precision, utilizing 3D CLO virtual sampling and certified textile testing.",
  },
];