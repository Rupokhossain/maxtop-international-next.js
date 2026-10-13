export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  machinery: string;
  image: string;
}

export const galleryCategories = [
  { id: "all", label: "All Facilities" },
  { id: "sewing", label: "Sewing Floor" },
  { id: "cutting", label: "CAD & Cutting" },
  { id: "lab", label: "Testing Lab" },
  { id: "sampling", label: "Sampling Room" },
  { id: "warehouse", label: "Fabric Depot" },
];

export const galleryImages: GalleryItem[] = [
  {
    id: "sewing-floor-1",
    title: "Computerized High-Speed Sewing Lines",
    category: "sewing",
    categoryLabel: "Sewing Floor",
    location: "Dhaka HQ Hub",
    machinery: "120+ Juki & Brother Automatics",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "cad-cutting-1",
    title: "Automated CAD Fabric Cutting & Spreading",
    category: "cutting",
    categoryLabel: "CAD & Cutting",
    location: "Chittagong Unit",
    machinery: "Gerber Precision Auto-Cutter",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "lab-testing-1",
    title: "In-House Physical & Chemical Testing Lab",
    category: "lab",
    categoryLabel: "Testing Lab",
    location: "Accredited Lab Desk",
    machinery: "ISO & AATCC Calibrated",
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "sampling-studio-1",
    title: "Master Pattern Grading & Sampling Studio",
    category: "sampling",
    categoryLabel: "Sampling Room",
    location: "R&D Floor",
    machinery: "3D CLO Digital Fitting",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "fabric-storage-1",
    title: "Climate-Controlled Fabric Warehouse",
    category: "warehouse",
    categoryLabel: "Fabric Depot",
    location: "Central Storage",
    machinery: "4-Point Raw Fabric Inspection",
    image:
      "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "finishing-pack-1",
    title: "Precision Metal Detection & Final Finishing",
    category: "sewing",
    categoryLabel: "Finishing & Packing",
    location: "Export Packing Zone",
    machinery: "Hashima Needle Detector",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
];