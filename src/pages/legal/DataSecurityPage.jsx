import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Lock, Server, KeyRound, FileCheck, CheckCircle2, CreditCard } from "lucide-react";
import { Button } from "../../components/common/Button";

export function DataSecurityPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img
              src="/branding/flash-logo-compact.png"
              alt="FLASH Logo"
              className="h-9 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => navigate("/login")}
              className="bg-[#4338ca] hover:bg-[#2a14b4] text-xs font-bold"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="bg-white border-b border-slate-200/80 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Security & Data Protection
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Security Architecture & Compliance
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Overview of technical controls, Judge0 sandbox isolation, Razorpay PCI-DSS compliance, and end-to-end data encryption.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Lock className="w-5 h-5 text-[#4338ca]" />
            <h3 className="text-sm font-bold text-slate-900">End-to-End Encryption</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All browser communications utilize TLS 1.3 encryption. Passwords are salted and hashed using bcrypt, and candidate telemetry is securely stored with AES-256 encryption at rest.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <CreditCard className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">PCI-DSS Payment Security</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All payment transactions are handled exclusively via Razorpay's Level 1 PCI-DSS certified gateway. FLASH never stores or intercepts raw credit/debit card details.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Server className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">Judge0 Sandboxed Execution</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Candidate coding solutions run within isolated, disposable Linux containers with strict CPU time limits, memory caps, and restricted network egress.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <KeyRound className="w-5 h-5 text-amber-600" />
            <h3 className="text-sm font-bold text-slate-900">Role-Based Access Control (RBAC)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cryptographic JWT authentication and scoped session policies ensure candidate profiles, test histories, and billing records remain private and tamper-proof.
            </p>
          </div>
        </div>

        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900">
            Enterprise & Institutional Cloud Infrastructure
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FLASH is engineered for high-throughput placement seasons and national coding contests. Our microservices architecture decouples candidate practice, coding evaluation, and AI mock interview pipelines with 99.9% availability.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Docker & Container Isolation
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> PostgreSQL & Redis Caching
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Node.js & React Client Stack
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono">
            <img src="/branding/flash-logo-compact.png" alt="FLASH Logo" className="w-4 h-4 object-contain" />
            <span>FLASH Platform // Engineering Placement Excellence</span>
          </div>
          <div>© {new Date().getFullYear()} FLASH Innovations. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default DataSecurityPage;
