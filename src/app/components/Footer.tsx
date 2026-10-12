"use client";

import Link from "next/link";
import {
  ArrowUp,
  MessageCircle,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#071D2E] text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* ── ১. টপ ব্র্যান্ড ও ন্যাভিগেশন গ্রিড ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-800">
          
          {/* ব্র্যান্ড ও ভূমিকা */}
          <div className="lg:col-span-2 space-y-5">
            
            {/* ── প্রিমিয়াম টাইপোগ্রাফি ব্র্যান্ডিং (কোনো ইমেজ লোগো নেই) ── */}
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-slate-100 transition">
                    MAXTOP
                  </span>
                  <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                    .
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] text-emerald-400 uppercase -mt-0.5">
                  INTERNATIONAL
                </span>
                <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-1">
                  Global Apparel Sourcing House
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Your committed on-ground apparel sourcing agency in Dhaka, Bangladesh. We bridge international fashion brands with audited, BSCI/OEKO-TEX compliant garment manufacturing lines.
            </p>

            {/* সরকারি ও ইন্ড্রাস্ট্রি মেম্বারশিপ ব্যাজ */}
            <div className="flex flex-wrap gap-2 text-[10px] font-bold text-slate-400">
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                BGBA Member
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                ISO 9001:2015
              </span>
              <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-md">
                Gov. Registered Sourcing House
              </span>
            </div>

            {/* ── সোশ্যাল মিডিয়া লিঙ্কস ── */}
            <div className="pt-2 space-y-2.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Follow &amp; Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801711000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-105"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* প্রোডাক্ট স্কোপ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Apparel Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="#products" className="hover:text-emerald-300 transition">Heavyweight T-Shirts &amp; Polos</Link></li>
              <li><Link href="#products" className="hover:text-emerald-300 transition">Denim Jeans &amp; Jackets</Link></li>
              <li><Link href="#products" className="hover:text-emerald-300 transition">Woven Casual Shirts</Link></li>
              <li><Link href="#products" className="hover:text-emerald-300 transition">French Terry Hoodies</Link></li>
              <li><Link href="#products" className="hover:text-emerald-300 transition">Gym &amp; Activewear</Link></li>
              <li><Link href="#products" className="hover:text-emerald-300 transition">Kids &amp; Toddler Wear</Link></li>
            </ul>
          </div>

          {/* সোর্সিং সার্ভিসেস */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Our Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="#services" className="hover:text-emerald-300 transition">2D/3D CAD Fit Sampling</Link></li>
              <li><Link href="#services" className="hover:text-emerald-300 transition">Direct Yarn &amp; Trims Sourcing</Link></li>
              <li><Link href="#services" className="hover:text-emerald-300 transition">In-Line AQL 2.5 Quality Audits</Link></li>
              <li><Link href="#services" className="hover:text-emerald-300 transition">In-House Textile Testing Lab</Link></li>
              <li><Link href="#services" className="hover:text-emerald-300 transition">Chittagong Port Logistics</Link></li>
              <li><Link href="#services" className="hover:text-emerald-300 transition">Factory Compliance Audits</Link></li>
            </ul>
          </div>

          {/* হেড অফিস ও কন্টাক্ট */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Dhaka Headquarters
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="leading-snug">
                House 18, Road 04, Sector 03, Uttara, Dhaka-1230, Bangladesh
              </p>
              <p>
                <strong className="text-white">Email:</strong>{" "}
                <a href="mailto:sourcing@maxtopintl.com" className="hover:underline">
                  sourcing@maxtopintl.com
                </a>
              </p>
              <p>
                <strong className="text-white">Phone:</strong> +880 1711-000000
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Port Liaison Desk: Agrabad C/A, Chittagong
              </p>
            </div>
          </div>

        </div>

        {/* ── ২. বটম কপিরাইট ও ব্যাক-টু-টপ বার ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; 2026 <strong className="text-slate-200">Maxtop International Ltd.</strong> All rights reserved. Registered Garments Buying House in Bangladesh.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#terms" className="hover:text-slate-200 transition">
              Vendor Code of Conduct
            </Link>
            <Link href="#privacy" className="hover:text-slate-200 transition">
              Privacy Policy
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}