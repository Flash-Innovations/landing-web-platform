import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Scale, FileText, CreditCard, ShieldAlert, Award, RefreshCw, Mail, CheckCircle2 } from "lucide-react";
import { Button } from "../../components/common/Button";

export function TermsOfServicePage() {
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
            <Scale className="w-3.5 h-3.5" />
            Legal Terms & Platform Usage
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Last updated: October 2026 • Governing platform access, subscription billing, and student usage of FLASH Placement Arena.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Overview Box */}
        <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
          <p className="text-xs text-indigo-950 leading-relaxed">
            Welcome to <strong>FLASH Innovations</strong> ("FLASH", "we", "us", or "our"). These Terms of Service ("Terms") govern your access to and use of our career intelligence and placement preparation platform at <strong>flashedu.in</strong> and <strong>student.flashedu.in</strong> ("Platform"). By creating an account or subscribing to our services, you agree to be bound by these Terms.
          </p>
        </div>

        {/* 1. Acceptance */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            1. Acceptance & Eligibility
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            By registering for an account or using our Platform, you represent that you are at least 18 years of age (or have valid parental/guardian consent if between 16 and 18) and have full legal capacity to enter into this agreement. If you access the Platform on behalf of an institution, you warrant that you are authorized to bind that entity.
          </p>
        </section>

        {/* 2. Platform Services & Digital Delivery */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600" />
            2. Platform Services & Instant Digital Delivery
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FLASH Placement Arena provides automated placement preparation tools, including curated MCQ test suites, a sandboxed Coding Arena with cloud-based code execution (Judge0), real-time conversational AI mock interviews, company-specific preparation tracks, and ATS resume scoring.
          </p>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-1">
            <p className="font-semibold text-slate-800">Digital Service Provisioning:</p>
            <p>
              All platform features, subscriptions, and add-on passes are 100% digital cloud services. Upon successful payment confirmation via our payment gateway, access is provisioned immediately to your registered student account. No physical goods or packages are shipped.
            </p>
          </div>
        </section>

        {/* 3. Subscriptions, Payments & Razorpay */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-indigo-600" />
            3. Subscription Plans, Billing & Razorpay Payment Gateway
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We provide both free access tiers and paid subscription plans to unlock advanced features:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li><strong>Free Community Tier:</strong> Limited daily practice questions, public problem catalog access, and basic progress telemetry.</li>
            <li><strong>Basic Pass (₹99 / Month):</strong> Full access to subject MCQs, core coding challenges, and standard compiler runs.</li>
            <li><strong>Premium Tier (₹199 / Month):</strong> Unlimited coding arena executions, AI-driven conversational mock interviews, advanced company test series, and comprehensive diagnostic rubrics.</li>
            <li><strong>Add-on Passes:</strong> Dedicated event passes for National Coding Contests and specialized Group Discussion arenas.</li>
          </ul>
          <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 space-y-2 mt-2">
            <p className="font-semibold text-slate-800">Billing Currency & Gateway Terms:</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li>All subscription fees are denominated in <strong>Indian Rupees (INR)</strong> and are inclusive of or clearly display applicable Goods and Services Tax (18% GST).</li>
              <li>Payments are securely processed through our PCI-DSS Level 1 certified partner gateway, <strong>Razorpay</strong>. We accept UPI, Credit Cards, Debit Cards, Net Banking, and approved digital wallets.</li>
              <li>We do not store your raw debit/credit card numbers or CVV. All card data is handled exclusively within Razorpay's secure payment infrastructure.</li>
              <li>For recurring subscription plans, your payment method will be charged automatically at the beginning of each billing cycle unless cancelled prior to renewal.</li>
            </ul>
          </div>
        </section>

        {/* 4. Cancellations & Refunds */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-indigo-600" />
            4. Cancellation & Refund Policy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            You may cancel your recurring subscription at any time directly through your Student Profile dashboard or by emailing <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a>. Upon cancellation, your paid benefits will remain active until the end of your current paid billing period, with no subsequent renewal charges.
          </p>
          <p className="text-xs text-slate-600 leading-relaxed">
            We provide a <strong>7-day money-back guarantee</strong> for initial subscription purchases if you are unsatisfied or encounter unresolved technical issues. For full refund guidelines and bank settlement timelines (5–7 business days via Razorpay), please review our dedicated <Link to="/refund" className="text-indigo-600 font-semibold underline">Cancellation & Refund Policy</Link>.
          </p>
        </section>

        {/* 5. User Code of Conduct & Academic Honesty */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            5. User Code of Conduct & Academic Integrity
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            To preserve accurate placement readiness benchmarks for candidates and partner institutions:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li>You agree to submit authentic, original code solutions during ranked coding contests and practice assessments.</li>
            <li>You may not use automated bots, scraping scripts, or unauthorized reverse-engineering tools to access platform content or simulate test attempts.</li>
            <li>Sharing account credentials with third parties or attempting to bypass rate limits and subscription restrictions is strictly prohibited and will result in immediate account termination without refund.</li>
          </ul>
        </section>

        {/* 6. Intellectual Property */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            6. Intellectual Property Rights
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All algorithms, UI/UX designs, problem statements, diagnostic frameworks, and educational materials made available on the Platform are the exclusive property of FLASH Innovations and protected by Indian copyright and intellectual property laws. You retain ownership of the original code solutions written by you during practice sessions.
          </p>
        </section>

        {/* 7. Limitation of Liability */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <FileText className="w-4 h-4 text-indigo-600" />
            7. Limitation of Liability & Career Disclaimers
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            FLASH Placement Arena is an educational training and preparation tool. While our curriculum, mock interviews, and diagnostics are aligned with enterprise recruitment standards, FLASH does not guarantee campus placement, job offers, or specific compensation packages from any hiring company. In no event shall FLASH Innovations be liable for indirect, incidental, or consequential damages.
          </p>
        </section>

        {/* 8. Governing Law & Jurisdiction */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Scale className="w-4 h-4 text-indigo-600" />
            8. Governing Law & Dispute Resolution
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka, India.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-600" />
            9. Contact & Support Information
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            If you have questions, feedback, or compliance inquiries regarding these Terms of Service, please reach out to our team:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
            <p><strong>Entity:</strong> FLASH Innovations</p>
            <p><strong>Product:</strong> FLASH Placement Arena</p>
            <p><strong>Support Email:</strong> <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a></p>
            <p><strong>Website:</strong> <a href="https://flashedu.in" className="text-indigo-600 hover:underline">https://flashedu.in</a></p>
            <p><strong>Operating Hours:</strong> Monday – Saturday, 9:00 AM – 7:00 PM IST</p>
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

export default TermsOfServicePage;
