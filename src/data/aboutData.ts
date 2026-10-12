export interface TimelineEvent {
  year: string;
  title: string;
  subtitle: string;
  desc: string;
  badge: string;
}

export interface TeamMember {
  name: string;
  role: string;
  department: string;
  experience: string;
  bio: string;
  image: string;
}

export interface VettingPillar {
  id: string;
  title: string;
  subtitle: string;
  auditStandard: string;
  points: string[];
}

export interface LabTest {
  id: number;
  name: string;
  standard: string;
  instrument: string;
  purpose: string;
}

// ১. কোম্পানির ইতিহাস ও টাইমলাইন (2016 – 2026)
export const timelineEvents: TimelineEvent[] = [
  {
    year: "2016",
    title: "Founding in Dhaka",
    subtitle: "Inception of Maxtop International",
    desc: "Established as a dedicated liaison agency in Uttara, Dhaka, connecting European mid-tier retailers with reliable knitwear factories.",
    badge: "Origin",
  },
  {
    year: "2019",
    title: "Port Hub & Denim Expansion",
    subtitle: "Chittagong Port Liaison Office",
    desc: "Opened our strategic port liaison office in Agrabad, Chittagong, streamlining customs clearance and launching heavy denim manufacturing lines.",
    badge: "Logistics Hub",
  },
  {
    year: "2022",
    title: "3D CAD & Green Partnering",
    subtitle: "Virtual Sampling & Eco Standards",
    desc: "Introduced 3D CLO virtual prototyping to cut sampling time from 2 weeks to 48 hours, while onboarding LEED-certified green partner factories.",
    badge: "Technology",
  },
  {
    year: "2026",
    title: "18M+ Annual Production",
    subtitle: "Tier-1 Sourcing Ecosystem",
    desc: "Managing over 45 audited partner factories across Dhaka, Gazipur, and Narayanganj with an annual export capacity surpassing 18 million pieces.",
    badge: "Current Milestone",
  },
];

// ২. এক্সিকিউটিভ লিডারশিপ ও মার্চেন্ডাইজিং টিম
export const leadershipTeam: TeamMember[] = [
  {
    name: "Engr. Tariqul Islam",
    role: "Managing Director & Founder",
    department: "Executive Management",
    experience: "18+ Years in RMG Sourcing",
    bio: "Textile engineer with extensive leadership experience across woven and knit supply chains in Bangladesh, overseeing global buyer relations.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Global Merchandising",
    department: "Europe & UK Accounts",
    experience: "14+ Years in Fashion Retail",
    bio: "Leads technical costing and seasonal development for European fashion brands with expertise in Low-MOQ quick-turnaround apparel.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Md. Rafiqul Hassan",
    role: "Director of Quality Assurance",
    department: "Technical QA & Auditing",
    experience: "16+ Years Certified Lead Auditor",
    bio: "Oversees 4-stage AQL 2.5 on-site factory inspections, fabric testing laboratories, and social compliance verifications.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Kazi Nabila Rahman",
    role: "Lead 3D CAD & Pattern Master",
    department: "R&D & Design Studio",
    experience: "10+ Years Pattern Engineering",
    bio: "Directs 3D CLO digital fit development, minimizing physical sample wastage and ensuring millimeter-accurate grading.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

// ৩. আমাদের ৪-পিলার ফ্যাক্টরি অডিটিং ফ্রেমওয়ার্ক
export const vettingPillars: VettingPillar[] = [
  {
    id: "structural",
    title: "Structural & Fire Safety",
    subtitle: "RSC & Accord Engineering Protocols",
    auditStandard: "100% Accord / Nirapon Vetted",
    points: [
      "Rigid building structural load integrity verification",
      "Automatic addressable fire sprinkler & alarm systems",
      "Panic-free wide emergency escape stairwells with fire doors",
      "Certified electrical thermal-imaging scans every 6 months",
    ],
  },
  {
    id: "social",
    title: "Ethical Labor & Human Rights",
    subtitle: "Social Compliance & Fair Living Wages",
    auditStandard: "amfori BSCI & Sedex SMETA 4-Pillar",
    points: [
      "Strict zero-tolerance policy against child and forced labor",
      "On-time transparent digital wage payments with overtime limits",
      "Safe and hygienic worker dining halls, daycare & dispensaries",
      "Elected worker welfare participation committees (PC)",
    ],
  },
  {
    id: "environmental",
    title: "Environmental Sustainability",
    subtitle: "Clean Chemical & Water Treatment (ETP)",
    auditStandard: "OEKO-TEX & GOTS Certified",
    points: [
      "Zero discharge of hazardous chemicals (ZDHC Level 3)",
      "Fully operational biological Effluent Treatment Plants (ETP)",
      "Rainwater harvesting & solar power in Tier-1 partner mills",
      "Traceable organic cotton (GOTS) and recycled polyester (GRS)",
    ],
  },
  {
    id: "technical",
    title: "Machinery & Technical Precision",
    subtitle: "Computerized Gerber & Juki Automation",
    auditStandard: "AQL 1.5 / 2.5 Quality Benchmark",
    points: [
      "Gerber CAD computerized fabric spreading and automatic cutters",
      "Direct-drive high-speed Juki & Brother sewing floor machines",
      "9-point metal & broken needle detection conveyor tunnels",
      "Vacuum steam pressing & moisture-controlled finishing rooms",
    ],
  },
];

// ৪. ইন-হাউস টেক্সটাইল টেস্টিং ল্যাব
export const labTests: LabTest[] = [
  {
    id: 1,
    name: "Color Fastness to Wash & Rubbing",
    standard: "ISO 105-C06 / AATCC 61",
    instrument: "Launder-Ometer & Crockmeter",
    purpose:
      "Ensures dye does not bleed onto white trims or fade after multiple household wash cycles.",
  },
  {
    id: 2,
    name: "Dimensional Stability & Shrinkage",
    standard: "ISO 6330 / AATCC 135",
    instrument: "Wascator & Tumble Dryer",
    purpose:
      "Verifies fabric shrinkage remains strictly within +/- 3% tolerance after washing.",
  },
  {
    id: 3,
    name: "Yarn Count & Fabric Weight (GSM)",
    standard: "ASTM D3776 / ISO 3801",
    instrument: "GSM Circular Cutter & Digital Scale",
    purpose:
      "Guarantees fabric density exactly matches tech-pack weight specifications before cutting.",
  },
  {
    id: 4,
    name: "Seam Strength & Snap Pull Test",
    standard: "ASTM D5034 / BS 7307",
    instrument: "Titan Tensile Strength Tester",
    purpose:
      "Confirms button pull-force exceeds 90 Newtons for infant safety compliance.",
  },
];

// ৫. গ্লোবাল এক্সপোর্ট মার্কেট
export const exportMarkets = [
  { region: "European Union", share: "52%", countries: "Germany, Netherlands, France, Spain, Italy" },
  { region: "United Kingdom", share: "24%", countries: "London, Manchester, Birmingham Retail Chains" },
  { region: "North America", share: "16%", countries: "USA & Canada Fashion Brands" },
  { region: "Oceania & Asia", share: "8%", countries: "Australia, New Zealand, Japan" },
];