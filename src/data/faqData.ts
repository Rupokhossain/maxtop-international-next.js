export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: "all" | "moq" | "sampling" | "production" | "payment" | "shipping";
  categoryLabel: string;
}

export const faqCategories = [
  { id: "all", label: "All Questions" },
  { id: "moq", label: "MOQ & Orders" },
  { id: "sampling", label: "Sampling & R&D" },
  { id: "production", label: "Lead Times" },
  { id: "payment", label: "Payment Terms" },
  { id: "shipping", label: "Shipping & Ports" },
];

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is your Minimum Order Quantity (MOQ)?",
    category: "moq",
    categoryLabel: "MOQ & Orders",
    answer:
      "Our flexible MOQ starts from 500 to 800 pcs per style/colorway for knitwear (T-shirts, polos, hoodies), and 800 to 1,000 pcs for woven shirts and denim. For emerging fashion brands and trial orders, we can split MOQs across multiple sizes based on fabric stock availability.",
  },
  {
    id: 2,
    question: "How long does sample development take, and do you charge for proto samples?",
    category: "sampling",
    categoryLabel: "Sampling & R&D",
    answer:
      "Proto samples and 48-hour Pantone TCX lab dips are completed in 7 to 10 working days upon receiving your tech-pack specs. Initial proto samples are developed free of charge for confirmed inquiries (international courier charges apply). Fit and salesman samples are submitted prior to bulk cut sign-off.",
  },
  {
    id: 3,
    question: "What is your typical production turnaround and delivery lead time?",
    category: "production",
    categoryLabel: "Lead Times",
    answer:
      "Bulk garment production typically takes 45 to 60 calendar days from the date of final sample sign-off and payment/L/C confirmation. For repeat orders utilizing in-stock yarn or localized knitting mills, we can fast-track production within 30 to 35 days.",
  },
  {
    id: 4,
    question: "What international payment terms and currencies do you support?",
    category: "payment",
    categoryLabel: "Payment Terms",
    answer:
      "We operate primarily on Irrevocable Letter of Credit (L/C at sight) and Telegraphic Transfer (T/T: 30% advance deposit upon order confirmation and 70% balance against Bill of Lading copy). We transact in USD ($), EUR (€), and GBP (£) with zero foreign exchange hidden fees.",
  },
  {
    id: 5,
    question: "How do you ensure AQL 2.5 quality control across partner factories?",
    category: "all",
    categoryLabel: "Quality Assurance",
    answer:
      "We maintain our own stationed Quality Control (QC) engineers directly on partner factory floors. We enforce strict international AQL 1.5 / 2.5 standards: 4-point raw fabric inspection, inline sewing audits, 100% metal/needle detection scanning, and final pre-shipment audit reports sent digitally to the buyer before container stuffing.",
  },
  {
    id: 6,
    question: "Which shipping terms do you handle, and which sea/air ports are used?",
    category: "shipping",
    categoryLabel: "Shipping & Ports",
    answer:
      "We handle FOB (Chittagong Port - CTG), CIF (named destination port), and DDP (doorstep warehouse delivery). Ocean vessels depart weekly from Chittagong Port, while express air shipments depart via Hazrat Shahjalal International Airport (DAC), Dhaka.",
  },
  {
    id: 7,
    question: "Can your partner mills source organic cotton and GRS-certified recycled fabrics?",
    category: "sampling",
    categoryLabel: "Fabric Sourcing",
    answer:
      "Yes. We have mill-direct partnerships supplying GOTS-certified 100% organic combed cotton, BCI (Better Cotton), GRS-certified recycled polyester, French terry, modal, bamboo, and sustainable low-water washed denim with full transaction certificates (TC).",
  },
  {
    id: 8,
    question: "Are your manufacturing factories compliant with European and US labor standards?",
    category: "all",
    categoryLabel: "Factory Compliance",
    answer:
      "100% of our allocated factories hold active audit certifications including amfori BSCI (Grade A/B), Sedex SMETA (4-Pillar), WRAP Gold, OEKO-TEX Standard 100, and RSC (RMG Sustainability Council) fire, electrical, and structural safety approval.",
  },
];