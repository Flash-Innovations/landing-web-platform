import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, CreditCard, RefreshCw } from "lucide-react";
import { STUDENT_PORTAL_URL } from "../../config/env";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 text-xs py-14 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-1 shadow-sm flex items-center justify-center">
                <img
                  src="/branding/flash-logo-compact.png"
                  alt="FLASH Mascot"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight flex items-center gap-0.5">
                  FLASH<span className="text-brand-amber text-base leading-none">.</span>
                </span>
                <span className="text-[10px] font-semibold text-indigo-300 tracking-wider uppercase -mt-1">
                  Placement Arena
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              The unified placement preparation platform for engineering candidates. Master aptitude, algorithms, timed company mock tests, and spoken AI interviews in one integrated ecosystem.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <CreditCard className="w-3.5 h-3.5 text-brand-amber shrink-0" />
              <span>Secured by Razorpay • 100% Digital Delivery</span>
            </div>
          </div>

          {/* Links Col 1: Platform Modules */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Platform Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Practice Hub (1,000+ MCQs)
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">
                  Coding Arena (Judge0)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Timed Company Assessments
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Spoken AI Mock Interview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Resume ATS Scanner
                </a>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Legal & Trust (Razorpay Mandatory Links) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Trust & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <RefreshCw className="w-3 h-3 text-brand-amber shrink-0" />
                  <span>7-Day Refund Policy</span>
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Student Data Encryption
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Us & Support
                </Link>
              </li>
              <li>
                <a
                  href={`${STUDENT_PORTAL_URL}/login`}
                  className="text-brand-amber hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 mt-1"
                >
                  Student Portal &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Institutional Trust */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">
              Support & Security
            </h4>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                Verified Student Telemetry
              </div>
              <p className="leading-snug">
                Encrypted in-transit (TLS 1.3) and at-rest (AES-256). Zero data monetization.
              </p>
            </div>
            <div className="pt-1 text-[11px] text-slate-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-amber shrink-0" />
              <span>
                Support:{" "}
                <a
                  href="mailto:support@flashedu.in"
                  className="text-slate-300 font-semibold hover:text-white underline"
                >
                  support@flashedu.in
                </a>
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} FLASH Innovations (flashedu.in). Built for engineering placement excellence.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-300">
              Support Desk
            </Link>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">LinkedIn</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Twitter / X</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">YouTube Prep</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Telegram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
