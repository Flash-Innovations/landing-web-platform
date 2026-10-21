import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { STUDENT_PORTAL_URL } from "../../config/env";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 text-slate-600 text-xs py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-slate-100">
          
          {/* Brand Column */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <img
                src="/branding/flash-logo-compact.png"
                alt="FLASH"
                className="w-7 h-7 object-contain"
              />
              <span className="font-extrabold text-base tracking-tight text-slate-900">
                FLASH
              </span>
              <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200">
                Placement Arena
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              AI-powered student career intelligence, MCQs, sandboxed coding arena, and real-time conversational mock interviews.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Preparation Modules
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">
                  Practice MCQs
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">
                  Coding Arena (Judge0)
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">
                  AI Mock Interviews
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">
                  ATS Resume Optimizer
                </a>
              </li>
            </ul>
          </div>

          {/* Student Access & Portal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Student Portal
            </h4>
            <ul className="space-y-2">
              <li>
                <a href={`${STUDENT_PORTAL_URL}/login`} className="hover:text-indigo-600 transition-colors font-semibold text-indigo-600">
                  Student Sign In &rarr;
                </a>
              </li>
              <li>
                <a href={`${STUDENT_PORTAL_URL}/register`} className="hover:text-indigo-600 transition-colors font-semibold text-emerald-600">
                  Create Student Account &rarr;
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-indigo-600 transition-colors">
                  Plans & Pricing Tiers
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-indigo-600 transition-colors">
                  Verified Placement Outcomes
                </a>
              </li>
            </ul>
          </div>

          {/* Institutional Trust & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Institutional Trust
            </h4>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Student Telemetry
              </div>
              <p className="leading-snug">
                Anonymized outcome records shared with partner university placement cells with strict candidate consent.
              </p>
            </div>
            <div className="flex items-center gap-3 pt-1 text-[11px] text-slate-400">
              <Link to="/privacy" className="hover:text-slate-600">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-slate-600">Terms of Service</Link>
              <span>•</span>
              <Link to="/security" className="hover:text-slate-600">Security</Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div className="flex items-center gap-2">
            <img
              src="/branding/flash-logo-compact.png"
              alt="FLASH"
              className="w-4 h-4 object-contain"
            />
            <span>© {new Date().getFullYear()} FLASH Platform. Built for engineering placement excellence.</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`${STUDENT_PORTAL_URL}/login`}
              className="text-indigo-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Open Student Portal &rarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
