"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  MapPin,
  Mail,
  ShieldCheck,
  Menu,
  X,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);
  
  // বর্তমান পেজের পাথ শনাক্ত করতে usePathname ব্যবহার
  const pathname = usePathname();

  // ৫টি মূল নেভিগেশন মেনু
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  // মেনু একটিভ কি না তা চেক করার ফাংশন
  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* ── ১. TOP UTILITY BAR (Maxtop Global Liaison) ── */}
      <div className="bg-[#0C2340] text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Dhaka HQ, Bangladesh · Liaison: London &amp; New York</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>sourcing@maxtopintl.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] sm:text-xs">
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> Accord / RSC &amp; BSCI Certified
            </span>
            <span className="hidden lg:inline text-slate-500">|</span>
            <span className="hidden lg:inline text-slate-300">
              ⚡ Inquiry response within 12h
            </span>
          </div>
        </div>
      </div>

      {/* ── ২. MAIN NAVBAR ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* MAXTOP INTERNATIONAL BRAND LOGO */}
          <Link href="/" className="flex items-center group py-1">
            {!useFallbackLogo ? (
              <div className="relative flex items-center h-14 sm:h-16 w-auto max-w-[260px] sm:max-w-[320px] overflow-hidden">
                <Image
                  src="/images/maxtop-logo.png"
                  alt="Maxtop International"
                  width={340}
                  height={110}
                  priority
                  className="h-20 sm:h-28 w-auto max-w-none object-contain mix-blend-multiply -my-3.5 -ml-2 transition-transform duration-200 group-hover:scale-105"
                  onError={() => setUseFallbackLogo(true)}
                />
              </div>
            ) : (
              /* ব্যাকআপ ভেক্টর লোগো */
              <div className="flex items-center gap-3">
                <svg
                  className="w-11 h-11 shrink-0"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="50,5 68,36 32,36" fill="#00A86B" />
                  <polygon points="12,38 32,38 32,88 12,88" fill="#0C2340" />
                  <polygon points="68,38 88,38 88,88 68,88" fill="#0C2340" />
                  <polygon points="12,38 32,38 68,75 56,88" fill="#0C2340" />
                  <polygon points="88,38 68,38 12,78 24,88" fill="#00A86B" />
                </svg>
                <div className="flex flex-col">
                  <div className="flex items-baseline font-black tracking-tight text-2xl leading-none">
                    <span className="text-[#0C2340]">MAX</span>
                    <span className="text-[#00A86B]">TOP</span>
                  </div>
                  <span className="text-[9px] font-bold tracking-[0.28em] text-[#0C2340] uppercase mt-1">
                    INTERNATIONAL
                  </span>
                </div>
              </div>
            )}
          </Link>

          {/* DESKTOP NAVIGATION LINKS (Active State সহ ৫টি মেনু) */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-2 font-semibold transition-colors duration-200 ${
                    active
                      ? "text-emerald-600 font-bold"
                      : "text-slate-700 hover:text-emerald-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {/* একটিভ মেনুর নিচে প্রিমিয়াম সবুজ আন্ডারলাইন ইন্ডিকেটর */}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-emerald-600 rounded-full animate-in fade-in duration-300" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION BUTTON (সরাসরি /contact পেজে লিংক করা) */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0C2340] hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-[#0C2340]/15 hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-400" />
              <span>Request Quote (RFQ)</span>
              <ArrowRight className="w-3.5 h-3.5 ml-0.5 opacity-70" />
            </Link>
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 hover:text-emerald-600 p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── ৩. MOBILE SLIDE-DOWN MENU ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3.5 py-2.5 rounded-xl text-sm transition-all ${
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
              className="w-full flex items-center justify-center gap-2 bg-[#0C2340] text-white text-xs font-bold py-3 rounded-xl shadow transition hover:bg-emerald-600"
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