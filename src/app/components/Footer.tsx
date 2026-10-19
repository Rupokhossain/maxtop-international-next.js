"use client";

import Link from "next/link";
import {
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#071D2E] text-white border-t border-slate-800 font-sans">
      
      {/* ── মূল ফুটার গ্রিড ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          
          {/* ব্র্যান্ড পরিচিতি ও সোশ্যাল লিঙ্কস (৫ কলাম) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* ── টাইপোগ্রাফিক লোগো (হুবহু ন্যাভবারের মতো) ── */}
            <Link href="/" className="inline-block group">
              <div className="flex flex-col">
                <div className="flex items-baseline font-black tracking-tight leading-none text-2xl sm:text-3xl">
                  <span className="text-white group-hover:text-emerald-400 transition-colors">
                    MAX
                  </span>
                  <span className="text-emerald-400">TOP</span>
                  <span className="text-emerald-400 text-3xl font-black">.</span>
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-slate-300 uppercase mt-1">
                  INTERNATIONAL
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-emerald-400/90 uppercase mt-0.5">
                  Global Apparel Sourcing House · Dhaka, BD
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-md">
              Your committed on-ground apparel sourcing agency in Dhaka, Bangladesh. We bridge international fashion retailers with audited, BSCI, Accord/RSC, and OEKO-TEX certified garment manufacturing facilities.
            </p>

            {/* সোশ্যাল মিডিয়া লিঙ্কস */}
            <div className="pt-2">
              <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Follow &amp; Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/8801711000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaFacebookF className="w-4 h-4" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaInstagram className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-emerald-600 hover:text-white border border-white/10 flex items-center justify-center text-slate-300 transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* কুইক নেভিগেশন (২ কলাম) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Sourcing Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* প্রোডাক্ট ক্যাটাগরি (২ কলাম) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
              Apparel Lines
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Heavyweight T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Denim Jeans &amp; Washes
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Woven Casual Shirts
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  French Terry Hoodies
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Gym &amp; Activewear
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-emerald-400 hover:translate-x-1 inline-block transition">
                  Sustainable Organic
                </Link>
              </li>
            </ul>
          </div>

          {/* হেড অফিস ও কন্টাক্ট ইনফো (৩ কলাম) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400">
              Dhaka Headquarters
            </h4>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="leading-snug">
                  Sector #03, Uttara, Dhaka-1230, Bangladesh
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:sourcing@maxtopintl.com"
                  className="hover:text-emerald-400 hover:underline transition"
                >
                  sourcing@maxtopintl.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-medium text-slate-200">
                  +880 1711-000000
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Mon – Sat: 9:00 AM – 7:00 PM (GMT+6)</span>
              </div>

            </div>
          </div>

        </div>

        {/* ── বটম কপিরাইট বার ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
          <p className="text-center sm:text-left">
            &copy; 2026{" "}
            <strong className="text-slate-200 font-semibold">
              Maxtop International Ltd.
            </strong>{" "}
            All rights reserved. Registered Garments Buying House in Bangladesh.
          </p>
        </div>

      </div>
    </footer>
  );
}