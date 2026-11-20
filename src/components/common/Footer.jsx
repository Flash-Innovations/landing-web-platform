import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, CreditCard, RefreshCw, Swords } from "lucide-react";
import { ARENA_PORTAL_URL } from "../../config/env";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 text-xs py-14 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 shadow-sm flex items-center justify-center">
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
                <span className="text-[10px] font-semibold text-amber-400 font-mono tracking-wider uppercase -mt-1">
                  Esports Coding Arena
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              The premier 1v1 speed coding esports arena and competitive algorithmic platform for engineers. Challenge peers in real-time DSA battles, climb the national Gladiator ELO ranks, and forge verifiable proof of skill.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
              <CreditCard className="w-3.5 h-3.5 text-brand-amber shrink-0" />
              <span>Secured by Razorpay • 100% Digital Delivery</span>
            </div>
          </div>

          {/* Links Col 1: Platform Modules */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">
              Arena Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#arena-features" className="hover:text-white transition-colors">
                  1v1 Speed DSA Battles
                </a>
              </li>
              <li>
                <a href="#interactive-demo" className="hover:text-white transition-colors">
                  Interactive Battle Chamber
                </a>
              </li>
              <li>
                <a href="#game-modes" className="hover:text-white transition-colors">
                  Code Golf & Sudden Death
                </a>
              </li>
              <li>
                <a href="#gladiator-ladder" className="hover:text-white transition-colors">
                  Ranked Gladiator ELO Ladder
                </a>
              </li>
              <li>
                <a href="#tournaments" className="hover:text-white transition-colors">
                  Contest Studio & Tournaments
                </a>
              </li>
              <li>
                <span className="text-slate-500 flex items-center gap-1.5 cursor-not-allowed">
                  <span>Student Career Suite</span>
                  <span className="text-[9px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    Coming Soon
                  </span>
                </span>
              </li>
            </ul>
          </div>

          {/* Links Col 2: Legal & Trust (Razorpay Mandatory Links) */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">
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
                  href={ARENA_PORTAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-amber hover:text-amber-300 font-semibold transition-colors flex items-center gap-1 mt-1"
                >
                  <Swords className="w-3.5 h-3.5" />
                  <span>Enter Flash Arena &rarr;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Institutional Trust */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 font-mono">
              Support & Security
            </h4>
            <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800 space-y-1.5 text-[11px] text-slate-400">
              <div className="flex items-center gap-1.5 font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                Verified Fair-Play Telemetry
              </div>
              <p className="leading-snug">
                Anti-cheat full-screen lock and focus telemetry. Zero data monetization.
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} FLASH Innovations. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Arena Systems Operational
            </span>
            <span className="text-slate-600">•</span>
            <span>Made with precision for competitive engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
