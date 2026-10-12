export interface GalleryItem {
  id: number;
  title: string;
  category: "cutting" | "sewing" | "quality" | "finishing" | "lab" | "showroom";
  categoryLabel: string;
  machinery: string;
  capacity: string;
  complianceTag: string;
  desc: string;
  image: string;
  specifications: string[];
}

export const galleryCategories = [
  { id: "all", label: "All Facilities" },
  { id: "cutting", label: "CAD & Cutting" },
  { id: "sewing", label: "Sewing Floors" },
  { id: "lab", label: "Textile Lab & R&D" },
  { id: "finishing", label: "Finishing & Packing" },
  { id: "showroom", label: "Sample Showroom" },
];

export const galleryImages: GalleryItem[] = [
  {
    id: 1,
    title: "Automated CAD Spreading & Cutting Unit",
    category: "cutting",
    categoryLabel: "Cutting Facility",
    machinery: "Gerber & Lectra Automated Cutters",
    capacity: "45,000 Pcs / Day",
    complianceTag: "Zero Fabric Wastage",
    desc: "Computerized CAD marker planning and automated CNC fabric spreaders ensuring millimeter-level precision across bulk jersey and denim cuts.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "High-ply vacuum table cutting",
      "99.8% pattern precision tolerance",
      "Integrated fabric relaxation zone",
    ],
  },
  {
    id: 2,
    title: "High-Speed Lean Sewing Assembly Lines",
    category: "sewing",
    categoryLabel: "Sewing Operations",
    machinery: "Juki DDL-9000C & Brother Digital Lines",
    capacity: "600,000 Pcs / Month",
    complianceTag: "RSC Remediated",
    desc: "Multi-line climate-controlled sewing floor structured in U-shaped lean modules, equipped with automatic thread trimmers and needle positioners.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "120+ active operator sewing lines",
      "Real-time digital hourly output boards",
      "Ergonomic seating & LED daylighting",
    ],
  },
  {
    id: 3,
    title: "In-House Physical & Chemical Textile Testing Lab",
    category: "lab",
    categoryLabel: "Testing Laboratory",
    machinery: "SDL Atlas & DataColor Spectrophotometer",
    capacity: "100% In-House Batch Testing",
    complianceTag: "ISO 17025 Compliant",
    desc: "Certified testing laboratory conducting wash durability, color fastness, dimensional stability, tensile strength, and GSM calibration.",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "Spectrophotometer color matching (Delta E < 0.5)",
      "4-cycle wash shrinkage & spirality testing",
      "OEKO-TEX & REACH chemical verification",
    ],
  },
  {
    id: 4,
    title: "Inline & Pre-Shipment Quality Inspection Tables",
    category: "finishing",
    categoryLabel: "Quality Assurance",
    machinery: "Illuminated 4-Point Inspection Tables",
    capacity: "AQL 1.5 / 2.5 Standard",
    complianceTag: "Stationed QC Auditors",
    desc: "Strict pre-wash and post-sewing inspection stations verifying measurement tolerances, stitch tension, seam strength, and symmetrical balance.",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "100% measurement audit on initial lot",
      "Daily digital tablet QC sync with buyers",
      "Defect classification barcode tagging",
    ],
  },
  {
    id: 5,
    title: "Industrial Steam Tunnel & Metal Detection Finishing",
    category: "finishing",
    categoryLabel: "Finishing & Packaging",
    machinery: "Hashima 9-Point Needle Detector & Steam Presses",
    capacity: "50,000 Garments / Day",
    complianceTag: "100% Needle-Free Scan",
    desc: "Vacuum ironing tables and dual-head conveyor metal detectors guaranteeing zero metallic contamination before master carton sealing.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "Automated continuous needle-scanner tunnel",
      "Individual polybag barcode labelling",
      "Moisture-controlled export carton packing",
    ],
  },
  {
    id: 6,
    title: "Yarn Knitting & Circular Jacquard Fabric Mill",
    category: "cutting",
    categoryLabel: "Fabric Knitting",
    machinery: "Mayer & Cie Circular Knitting Machines",
    capacity: "25 Tons Fabric / Day",
    complianceTag: "GOTS & GRS Certified",
    desc: "High-gauge German circular knitting machinery fabricating premium combed single jersey, interlock, pique, French terry, and ribs.",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "100% combed compact cotton & Lycra blends",
      "Automated yarn tension & fault detectors",
      "Low torque zero-skewing guarantee",
    ],
  },
  {
    id: 7,
    title: "Eco-Friendly Washing & Ozone Denim Processing",
    category: "finishing",
    categoryLabel: "Sustainable Washing",
    machinery: "Tonello Laser & Ozone Washing Plant",
    capacity: "20,000 Pcs / Day",
    complianceTag: "65% Water Recycled",
    desc: "Water-saving ozone and enzyme washing plant reducing chemical consumption while producing authentic vintage washes on denim and twills.",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "Biological ETP purified water recycling",
      "Laser whiskering (zero sandblasting)",
      "Zero harmful potassium permanganate spray",
    ],
  },
  {
    id: 8,
    title: "Executive Showroom & Buyer Sample Suite (Dhaka HQ)",
    category: "showroom",
    categoryLabel: "Buyer Showroom",
    machinery: "3D CLO Digital Design & Physical Racks",
    capacity: "2,500+ Active Styles On Display",
    complianceTag: "Private Meeting Suites",
    desc: "Our central buyer showroom in Dhaka houses over 2,500 development samples, fabric swatch archives, and private conference rooms for tech-pack fit meetings.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    specifications: [
      "Pantone TCX swatch library & yarn swatches",
      "3D digital sample presentation monitors",
      "Full seasonal Men, Women & Kids collections",
    ],
  },
];