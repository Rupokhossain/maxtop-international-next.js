import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// ১. বডি টেক্সটের জন্য ক্লিন আধুনিক ফন্ট (Amstel & Textilery স্টাইল)
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ২. হেডলাইন ও লাক্সারি ব্র্যান্ডিংয়ের জন্য প্রিমিয়াম সেরিফ ফন্ট (Next Apparels স্টাইল)
const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

// ৩. আন্তর্জাতিক বায়ারদের জন্য হাই-র‍্যাংকিং এসইও মেটাডাটা
export const metadata: Metadata = {
  title: {
    default: "NexThread Global | Apparel Sourcing Agent & Garments Buying House",
    template: "%s | NexThread Global",
  },
  description:
    "Premier apparel sourcing agent and registered garment buying house in Bangladesh. Connecting global fashion brands with BSCI, OEKO-TEX, WRAP, and GOTS certified factories. Low MOQ from 500 units.",
  keywords: [
    "apparel sourcing agent Bangladesh",
    "garments buying house Dhaka",
    "clothing manufacturer Bangladesh",
    "knitwear sourcing",
    "denim manufacturer",
    "woven shirts supplier",
    "sustainable apparel manufacturing",
    "low MOQ garment sourcing",
    "AQL 2.5 quality inspection",
  ],
  authors: [{ name: "NexThread Global Sourcing Ltd" }],
  openGraph: {
    title: "NexThread Global | Sustainable Apparel Sourcing from Bangladesh",
    description:
      "End-to-end garment sourcing solutions: R&D sampling, transparent FOB costing, certified factory production, and global shipping.",
    url: "https://nexthreadsourcing.com",
    siteName: "NexThread Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexThread Global | Apparel Sourcing & Buying House",
    description:
      "Certified sustainable garment manufacturing partner connecting global fashion brands with Bangladesh.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-emerald-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}