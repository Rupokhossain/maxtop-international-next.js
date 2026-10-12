import {
  HelpCircle,
  Users,
  ClipboardCheck,
  ShieldCheck,
  Truck,
  Headphones,
  type LucideIcon,
} from "lucide-react";

export interface WorkStepItem {
  id: number;
  stepNumber: string;
  shortTitle: string;
  fullTitle: string;
  icon: LucideIcon;
  timeline: string;
  summary: string;
  deliverables: string[];
}

export const howWeWorkSteps: WorkStepItem[] = [
  {
    id: 1,
    stepNumber: "1",
    shortTitle: "Receiving Query",
    fullTitle: "1. Receiving Query & Costing",
    icon: HelpCircle,
    timeline: "24–48 Hours",
    summary:
      "We thoroughly analyze your design tech-packs, target price, and fabric requirements. Our team calculates open-book FOB costing with zero hidden fees.",
    deliverables: [
      "Tech-pack & fabric consumption analysis",
      "Competitive FOB/CIF target costing",
      "Lead time & MOQ feasibility breakdown",
    ],
  },
  {
    id: 2,
    stepNumber: "2",
    shortTitle: "Vendor Selection",
    fullTitle: "2. Compliant Vendor Allocation",
    icon: Users,
    timeline: "2–3 Days",
    summary:
      "We match your order with the most suitable partner factory based on specialized machinery, BSCI/Sedex compliance, and product category.",
    deliverables: [
      "BSCI / Sedex / WRAP audited factory mapping",
      "Category-specific production line locking",
      "Social & environmental compliance check",
    ],
  },
  {
    id: 3,
    stepNumber: "3",
    shortTitle: "Order & Execution",
    fullTitle: "3. Sampling & Order Execution",
    icon: ClipboardCheck,
    timeline: "7–10 Days",
    summary:
      "We develop proto samples, fit approvals, and Pantone TCX lab-dips. Bulk raw material procurement begins only after buyer sign-off.",
    deliverables: [
      "Physical proto & salesman samples",
      "Pantone-matched fabric lab dips (48h)",
      "Bulk raw material yarn & trim lock",
    ],
  },
  {
    id: 4,
    stepNumber: "4",
    shortTitle: "Quality Assurance",
    fullTitle: "4. Strict Quality Assurance (AQL 2.5)",
    icon: ShieldCheck,
    timeline: "Continuous",
    summary:
      "Our stationed QC engineers monitor knitting, dying, cutting, and line sewing. Strict 4-point fabric inspection and pre-shipment AQL 2.5 audits.",
    deliverables: [
      "Daily digital inline inspection reports",
      "Strict AQL 1.5 / 2.5 defect audits",
      "100% metal/needle detection scan",
    ],
  },
  {
    id: 5,
    stepNumber: "5",
    shortTitle: "Shipping & Logistic",
    fullTitle: "5. Global Shipping & Logistics",
    icon: Truck,
    timeline: "On-Schedule",
    summary:
      "Seamless freight coordination out of Chittagong Port. We handle commercial invoices, packing lists, bill of lading, and GSP+ duty-free documentation.",
    deliverables: [
      "Chittagong (CTG) Port vessel booking",
      "Duty-free GSP+ / Form-A customs papers",
      "Real-time container GPS voyage tracking",
    ],
  },
  {
    id: 6,
    stepNumber: "6",
    shortTitle: "After Sales Services",
    fullTitle: "6. After-Sales & Ongoing Support",
    icon: Headphones,
    timeline: "Post-Delivery",
    summary:
      "Our partnership continues after shipment arrival. We gather buyer feedback, review retail sell-through rates, and plan rapid repeat replenishment.",
    deliverables: [
      "Post-delivery quality satisfaction review",
      "Repeat order buffer stock management",
      "Continuous fabric R&D seasonal updates",
    ],
  },
];