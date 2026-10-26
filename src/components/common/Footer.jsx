import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, CreditCard, RefreshCw } from "lucide-react";
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
            <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
              <CreditCard className="w-3.5 h-3.5 text-indigo-600" />
              <span>Secured by Razorpay • 100% Digital Delivery</span>
            </div>
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
                <Link to="/refund" className="hover:text-indigo-600 transition-colors flex items-center gap-1">
                  <RefreshCw className="w-3 h-3 text-emerald-600" /> 7-Day Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust, Legal & Support (Razorpay Mandatory Links) */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-[11px]">
              Trust & Legal Compliance
            </h4>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1 text-[11px] text-slate-600">
              <div className="flex items-center gap-1.5 font-semibold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Verified Student Telemetry
              </div>
              <p className="leading-snug">
                Encrypted in-transit (TLS 1.3) and at-rest (AES-256). Zero data monetization.
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1 text-[11px] text-slate-500">
              <Link to="/terms" className="hover:text-indigo-600 transition-colors font-medium">Terms of Service</Link>
              <span>•</span>
              <Link to="/privacy" className="hover:text-indigo-600 transition-colors font-medium">Privacy Policy</Link>
              <span>•</span>
              <Link to="/refund" className="hover:text-indigo-600 transition-colors font-medium">Refund Policy</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-indigo-600 transition-colors font-medium">Contact Us</Link>
              <span>•</span>
              <Link to="/security" className="hover:text-indigo-600 transition-colors font-medium">Security</Link>
            </div>

            <div className="pt-1 text-[11px] text-slate-500 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
              <span>Support: <a href="mailto:support@flashedu.in" className="text-slate-700 font-semibold hover:text-indigo-600 underline">support@flashedu.in</a></span>
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
            <span>© {new Date().getFullYear()} FLASH Innovations. Built for engineering placement excellence.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hover:text-slate-800">Support Desk</Link>
            <span>•</span>
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
