export interface LogoItem {
  id: string;
  name: string;
  tooltip: string;
  image: string; // 👈 এখানে আপনার ছবির পাথ বা URL বসাবেন (যেমন: "/logos/gov.png" অথবা অনলাইন লিংক)
}

// ── ১. সরকারি ও ট্রেড অ্যাসোসিয়েশন লোগো (Row 1) ──
export const recognizedByLogos: LogoItem[] = [
  {
    id: "gov-bd",
    name: "Government of Bangladesh",
    tooltip: "Government of the People's Republic of Bangladesh",
    image: "/images/r3.webp",  
  },
  {
    id: "bgba",
    name: "BGBA",
    tooltip: "Bangladesh Garment Buying House Association",
    image: "/images/r4.webp", // 👈 এখানে BGBA লোগো পাথ দিন
  },
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    tooltip: "ISO 9001:2015 Quality Management Certified",
    image: "/images/r5.webp", // 👈 এখানে ISO লোগো পাথ দিন
  },
  {
    id: "dcci",
    name: "DCCI",
    tooltip: "Dhaka Chamber of Commerce & Industry",
    image: "/images/r2.webp", // 👈 এখানে DCCI লোগো পাথ দিন
  },
  {
    id: "bgmea",
    name: "BGMEA",
    tooltip: "Bangladesh Garment Manufacturers and Exporters Association",
    image: "/images/r1.webp", // 👈 এখানে BGMEA লোগো পাথ দিন
  },
];

// ── ২. আন্তর্জাতিক পার্টনার সার্টিফিকেশন লোগো (Row 2) ──
export const partnerCertificationsLogos: LogoItem[] = [
  {
    id: "ocs",
    name: "OCS Organic Blended",
    tooltip: "Organic Blended Content Standard",
    image: "/images/p1.webp", // 👈 OCS লোগো পাথ দিন
  },
  {
    id: "rcs",
    name: "RCS Recycled Blended",
    tooltip: "Recycled Blended Claim Standard",
    image: "/images/p2.webp", // 👈 RCS লোগো পাথ দিন
  },
  {
    id: "recycled-100",
    name: "Recycled 100",
    tooltip: "Recycled 100 Claim Standard",
    image: "/images/p3.webp", // 👈 Recycled 100 লোগো পাথ দিন
  },
  {
    id: "leed-gold",
    name: "LEED Gold Certified",
    tooltip: "U.S. Green Building Council - LEED Gold Certified Factory",
    image: "/images/p4.webp", // 👈 LEED Gold লোগো পাথ দিন
  },
  {
    id: "oeko-tex",
    name: "OEKO-TEX® Standard 100",
    tooltip: "OEKO-TEX® Standard 100 - Confidence in Textiles",
    image: "/images/p5.webp", // 👈 OEKO-TEX লোগো পাথ দিন
  },
  {
    id: "bsci",
    name: "amfori BSCI",
    tooltip: "amfori BSCI Social Compliance Audit",
    image: "/images/p6.webp", // 👈 BSCI লোগো পাথ দিন
  },
  {
    id: "gots",
    name: "GOTS Organic",
    tooltip: "Global Organic Textile Standard",
    image: "/images/p7.webp", // 👈 GOTS লোগো পাথ দিন (যদি চান)
  },
  {
    id: "sedex",
    name: "Sedex SMETA",
    tooltip: "Sedex 4-Pillar Ethical Trade Audit",
    image: "/images/p8.webp", // 👈 Sedex লোগো পাথ দিন (যদি চান)
  },
];