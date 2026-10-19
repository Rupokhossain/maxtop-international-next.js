"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // ৫টি মূল নেভিগেশন মেনু
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  // মেনু একটিভ কি না তা শনাক্ত করার ফাংশন
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/90 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ন্যাভবার হাইট ও স্পেসিং (Airy 84px Height) */}
        <div className="flex justify-between items-center h-20 sm:h-[84px]">
          
          {/* ══════════════════════════════════════════════════════════════
              ১. টাইপোগ্রাফিক লোগো (মাঝে সফট শ্যাডো ডিভাইডার লাইন সহ)
          ══════════════════════════════════════════════════════════════ */}
          <Link href="/" className="flex items-center py-1 select-none group">
<div className="flex flex-col justify-center">
  {/* মেইন ব্র্যান্ড নেম */}
  <div className="flex items-baseline gap-1 leading-none">
    <span className="text-2xl sm:text-[28px] font-black tracking-tight text-[#0B2B43]">
      MAX<span className="text-emerald-600">TOP</span>
    </span>
    <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 inline-block" />
  </div>

  {/* দুই পাশে উইং লাইন */}
  <div className="flex items-center gap-1.5 mt-1">
    <span className="h-[1.5px] w-3.5 bg-emerald-500 rounded-full" />
    <span className="text-[9.5px] sm:text-[10.5px] font-black tracking-[0.25em] text-[#0B2B43] uppercase">
      INTERNATIONAL
    </span>
    <span className="h-[1.5px] flex-grow bg-slate-300 rounded-full" />
  </div>
</div>
          </Link>

          {/* ══════════════════════════════════════════════════════════════
              ২. ডেক্সটপ নেভিগেশন মেনু (উন্নত স্পেসিং ও স্পষ্ট ফন্ট)
          ══════════════════════════════════════════════════════════════ */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-[15px]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2.5 font-bold transition-colors duration-200 ${
                    active
                      ? "text-emerald-600"
                      : "text-slate-700 hover:text-emerald-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {/* একটিভ মেনুর নিচে এমারেল্ড আন্ডারলাইন ইন্ডিকেটর */}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ══════════════════════════════════════════════════════════════
              ৩. আরএফকিউ বাটন (Right Action Button)
          ══════════════════════════════════════════════════════════════ */}
          <div className="hidden sm:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0B2B43] hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-5 py-3 rounded-xl transition-all shadow-md shadow-[#0B2B43]/10 hover:shadow-lg hover:scale-[1.02] cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Request Quote (RFQ)</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* ══════════════════════════════════════════════════════════════
              ৪. মোবাইল মেনু টগল বাটন
          ══════════════════════════════════════════════════════════════ */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-emerald-600 p-2 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          ৫. মোবাইল স্লাইড-ডাউন মেনু
      ══════════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 pt-4 pb-7 space-y-2.5 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm transition-all ${
                  active
                    ? "bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600"
                    : "text-slate-700 font-semibold hover:bg-slate-50 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="pt-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0B2B43] text-white text-xs font-bold py-3.5 rounded-xl shadow-md transition hover:bg-emerald-600 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Submit RFQ / Tech-Pack</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}