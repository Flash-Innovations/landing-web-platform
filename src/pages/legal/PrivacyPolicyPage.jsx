import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Lock, Eye, Server, FileText, CreditCard, Mic, UserCheck, Mail } from "lucide-react";
import { Button } from "../../components/common/Button";

export function PrivacyPolicyPage() {
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-[#4338ca] border border-indigo-200 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Candidate Privacy & Data Security
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Last updated: October 2026 • Effective for all candidates, students, and institutional users of FLASH Placement Arena.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Eye className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">Zero Data Monetization</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We never sell, rent, or trade student profiles, resumes, or assessment results to third-party advertisers or data brokers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <CreditCard className="w-5 h-5 text-[#4338ca]" />
            <h3 className="text-sm font-bold text-slate-900">PCI-DSS Payment Security</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Transactions are handled by Razorpay's PCI-DSS Level 1 certified gateway. We never store raw card numbers or CVVs.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Server className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">Encrypted Infrastructure</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All web traffic and candidate telemetry are encrypted in-transit (TLS 1.3) and encrypted at-rest using AES-256.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            1. Information We Collect
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FLASH Innovations collects information essential to providing automated placement preparation, coding sandbox execution, and diagnostic feedback:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li><strong>Account & Profile Information:</strong> Full name, verified email address, mobile number, college/university name, department/branch, and graduation year.</li>
            <li><strong>Coding Arena & Submission Telemetry:</strong> Code editor submissions, programming language preference, execution times, memory usage, and Judge0 test suite results.</li>
            <li><strong>Practice & MCQ Diagnostics:</strong> Practice module attempts, accuracy metrics, topic completion history, and contest leaderboards.</li>
            <li><strong>AI Mock Interview Audio & Telemetry:</strong> Audio streams and transcription data recorded during conversational mock interviews, used exclusively to compute speech pace (WPM), clarity, STAR methodology adherence, and technical depth.</li>
            <li><strong>Payment & Billing Data:</strong> Transaction ID, subscription tier, billing dates, and payment confirmation status transmitted by Razorpay. Raw credit/debit card numbers and UPI MPINs are never stored or seen by FLASH.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-indigo-600" />
            2. How We Use Your Information
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            The data collected is utilized solely to power your learning journey and deliver platform capabilities:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li>Computing your real-time Placement Readiness Index (0–100) and personalized skill gap analyses.</li>
            <li>Executing sandboxed code against test suites in real time and providing instantaneous algorithmic feedback.</li>
            <li>Providing automated, objective AI interview feedback and STAR rubric scoring.</li>
            <li>Authenticating user sessions, preventing account sharing or bot cheating in ranked contests.</li>
            <li>Processing subscription upgrades, plan renewals, and payment receipts via Razorpay.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Mic className="w-4 h-4 text-indigo-600" />
            3. AI & Speech Processing Privacy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            When you participate in FLASH AI Mock Interviews, your audio input is transcribed and processed using real-time enterprise AI models (such as Google Gemini). 
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your conversational interview audio is processed ephemerally to generate qualitative feedback rubrics. We do <strong>not</strong> sell, distribute, or use your private mock interview recordings to train public foundation models without your explicit opt-in consent.
          </p>
        </section>

        {/* Section 4 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-indigo-600" />
            4. Razorpay Payment Gateway & Data Handling
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All payments made on FLASH Placement Arena are processed via <strong>Razorpay Software Private Limited</strong>. 
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li>Razorpay operates under strict Reserve Bank of India (RBI) regulations and maintains full PCI-DSS Level 1 compliance.</li>
            <li>Your sensitive payment credentials (such as 16-digit card numbers, CVVs, and netbanking credentials) are encrypted and communicated directly from your browser to Razorpay's secure server infrastructure.</li>
            <li>FLASH receives only a tokenized transaction confirmation containing the payment status, amount paid, and Razorpay Order/Payment ID for verification.</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Lock className="w-4 h-4 text-indigo-600" />
            5. Candidate Rights, Data Portability & Account Deletion
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            As a candidate on FLASH Placement Arena, you retain full sovereignty over your personal data:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li><strong>Access & Correction:</strong> You can review and edit your profile information, academic records, and college affiliation at any time within your Student Dashboard.</li>
            <li><strong>Public Portfolio Toggle:</strong> You can toggle your public profile portfolio (<code className="bg-slate-100 px-1 py-0.5 rounded font-mono text-[11px]">/u/:username</code>) on or off at will.</li>
            <li><strong>Right to Deletion:</strong> You have the right to request permanent deletion of your account and all associated test histories by emailing <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a>. All personal identifiers will be permanently purged within 30 business days.</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-600" />
            6. Grievance Officer & Contact Information
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            In accordance with the Information Technology Act 2000 and the Digital Personal Data Protection (DPDP) Act, if you have any questions, concerns, or grievances regarding our privacy practices, please contact our designated Grievance Officer:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
            <p><strong>Entity:</strong> FLASH Innovations</p>
            <p><strong>Grievance & Privacy Desk:</strong> Grievance Officer</p>
            <p><strong>Official Email:</strong> <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a></p>
            <p><strong>Location:</strong> Bengaluru, Karnataka, India</p>
            <p><strong>Response Turnaround:</strong> Acknowledged within 24 hours; resolved within 15 working days.</p>
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

export default PrivacyPolicyPage;
