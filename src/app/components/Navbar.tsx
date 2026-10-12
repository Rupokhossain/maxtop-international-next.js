"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  ShieldCheck,
  Menu,
  X,
  FileText,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const [useFallbackLogo, setUseFallbackLogo] = useState(false);

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
              <span>rfq@maxtopinternational.com</span>
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
              /* 
                ১. h-14 sm:h-16 এবং overflow-hidden: ইমেজকে হেডারের ভেতরেই লক রাখে (ডার্ক বারে সাদা ছড়াবে না)
                ২. ইমেজে h-20 sm:h-24 এবং -my-3.5 -ml-2: চারপাশের খালি সাদা বর্ডার কেটে লোগোকে অনেক বড় ও স্পষ্ট করে
              */
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

          {/* DESKTOP NAVIGATION LINKS (Contact Us সহ পূর্ণাঙ্গ মেনু) */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-emerald-600 transition">
              Home
            </Link>

            <Link href="#about" className="hover:text-emerald-600 transition">
              About Us
            </Link>

            {/* Product Range Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <Link
                href="#products"
                className="flex items-center gap-1 hover:text-emerald-600 transition py-2"
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-transform" />
              </Link>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white border border-slate-100 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    href="#products"
                    className="flex flex-col px-4 py-2.5 hover:bg-emerald-50/70 transition group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Knitwear Collection
                    </span>
                    <span className="text-[11px] text-slate-500">
                      T-Shirts, Polos, Hoodies &amp; Fleece
                    </span>
                  </Link>

                  <Link
                    href="#products"
                    className="flex flex-col px-4 py-2.5 hover:bg-emerald-50/70 transition group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Woven &amp; Casual Shirts
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Formal, Oxford &amp; Linen Blends
                    </span>
                  </Link>

                  <Link
                    href="#products"
                    className="flex flex-col px-4 py-2.5 hover:bg-emerald-50/70 transition group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Denim &amp; Bottoms
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Rigid, Stretch, Chinos &amp; Cargo
                    </span>
                  </Link>

                  <Link
                    href="#products"
                    className="flex flex-col px-4 py-2.5 hover:bg-emerald-50/70 transition group"
                  >
                    <span className="text-xs font-bold text-slate-800 group-hover:text-emerald-700">
                      Activewear &amp; Outerwear
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Performance quick-dry &amp; jackets
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <Link href="#services" className="hover:text-emerald-600 transition">
              Services
            </Link>

            <Link href="#gallery" className="hover:text-emerald-600 transition">
              Factory Gallery
            </Link>

            <Link href="#sustainability" className="hover:text-emerald-600 transition">
              Sustainability
            </Link>

            <Link href="#contact" className="hover:text-emerald-600 transition">
              Contact Us
            </Link>
          </nav>

          {/* RIGHT ACTION BUTTON */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#0C2340] hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#0C2340]/15"
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
              className="text-slate-700 hover:text-emerald-600 p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── ৩. MOBILE SLIDE-DOWN MENU ── */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-5 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Home
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            About Us
          </Link>
          <Link
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Products Collection
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Services &amp; QA
          </Link>
          <Link
            href="#gallery"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Factory Floor Gallery
          </Link>
          <Link
            href="#sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Sustainability
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-semibold text-slate-800 hover:text-emerald-600"
          >
            Contact Us
          </Link>

          <div className="pt-3">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#0C2340] text-white text-xs font-bold py-3 rounded-lg shadow"
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