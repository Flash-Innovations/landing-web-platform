import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, RefreshCw, Clock, CheckCircle2, AlertCircle, HelpCircle, Mail, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "../../components/common/Button";

export function RefundPolicyPage() {
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
            <RefreshCw className="w-3.5 h-3.5" />
            Customer Protection & Transparency
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Cancellation & Refund Policy
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Last updated: October 2026 • Governing subscription cancellations, money-back eligibility, and Razorpay settlement timelines.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-sm font-bold text-slate-900">7-Day Guarantee</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              New subscribers can request a 100% full refund within 7 calendar days of initial plan activation.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <Clock className="w-5 h-5 text-[#4338ca]" />
            <h3 className="text-sm font-bold text-slate-900">24-48h Approval</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our support team reviews and approves eligible refund applications within 24 to 48 business hours.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
            <CreditCard className="w-5 h-5 text-indigo-600" />
            <h3 className="text-sm font-bold text-slate-900">5–7 Day Bank Settlement</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Processed through Razorpay directly to your original payment method (UPI / Card / Bank) within 5–7 working days.
            </p>
          </div>
        </div>

        {/* 1. Subscription Cancellation */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-indigo-600" />
            1. Subscription Cancellation Policy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            At FLASH Innovations, we believe in giving students complete control over their learning investments. You can cancel your monthly subscription (Basic Pass ₹99/mo or Premium Pass ₹199/mo) at any time without any cancellation penalty or lock-in contract.
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 space-y-2 text-xs text-slate-700">
            <p className="font-semibold text-slate-800">How to Cancel:</p>
            <ul className="list-disc list-inside space-y-1 pl-1">
              <li><strong>Self-Service via Portal:</strong> Navigate to your <em>Student Dashboard &rarr; Profile Settings &rarr; Subscription & Billing</em> and click <strong>Cancel Subscription</strong>.</li>
              <li><strong>Via Support Email:</strong> Alternatively, email us at <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a> from your registered student email with the subject line <em>"Subscription Cancellation Request"</em>.</li>
            </ul>
            <p className="pt-1 text-slate-600">
              <strong>Effect of Cancellation:</strong> When you cancel, recurring auto-debit renewals are stopped immediately. You retain uninterrupted access to all paid features until the final date of your current billing period.
            </p>
          </div>
        </section>

        {/* 2. Refund Eligibility & Criteria */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            2. Refund Eligibility Guidelines
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We honor refunds under the following fair-use circumstances:
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li><strong>7-Day Initial Subscription Review:</strong> If you purchased a monthly subscription for the first time and are unsatisfied with the learning modules or if your device is incompatible, you may request a 100% refund within 7 calendar days of purchase.</li>
            <li><strong>Duplicate or Accidental Deductions:</strong> If a network glitch or gateway timeout results in multiple charges for a single subscription cycle, the extra payment(s) will be refunded 100% immediately upon verification.</li>
            <li><strong>Platform Technical Failure:</strong> If a persistent technical defect on our platform prevents you from utilizing core paid features (such as the Coding Arena compiler or AI Mock Interview engine) for more than 48 continuous hours and our engineering team is unable to resolve it, a pro-rated or full refund will be granted.</li>
          </ul>

          <div className="mt-4 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900 space-y-1">
            <p className="font-semibold flex items-center gap-1.5 text-amber-950">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              Non-Refundable Circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-1 text-amber-800">
              <li>Refund requests submitted after 7 calendar days from the transaction date.</li>
              <li>One-time event passes (such as National Coding Contest entry passes or specialized GD passes) once the contest or event has commenced.</li>
              <li>Accounts that have been banned or suspended due to academic dishonesty, bot scraping, or violating the User Code of Conduct.</li>
            </ul>
          </div>
        </section>

        {/* 3. Refund Request & Settlement Process */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            3. Refund Procedure & Bank Settlement Timeline
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Here is the step-by-step process for claiming and receiving an eligible refund:
          </p>
          <div className="space-y-3 pt-1">
            <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">1</span>
              <div className="text-xs text-slate-700 space-y-0.5">
                <p className="font-semibold text-slate-900">Step 1: Submit Your Request</p>
                <p>Send an email to <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a> with your registered email ID, the Razorpay Payment ID (from your receipt), and a brief explanation of why you are requesting a refund.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">2</span>
              <div className="text-xs text-slate-700 space-y-0.5">
                <p className="font-semibold text-slate-900">Step 2: Internal Verification (24–48 Hours)</p>
                <p>Our billing operations team verifies the transaction with Razorpay and validates eligibility. You will receive an email confirmation once approved.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs flex items-center justify-center shrink-0">3</span>
              <div className="text-xs text-slate-700 space-y-0.5">
                <p className="font-semibold text-slate-900">Step 3: Razorpay Gateway Refund Initiation</p>
                <p>Once approved, the refund is initiated directly via Razorpay back to the original source payment method (UPI account, Credit/Debit card, or Net Banking).</p>
              </div>
            </div>

            <div className="flex gap-3 items-start p-3 bg-indigo-50/70 rounded-xl border border-indigo-200/80">
              <span className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">4</span>
              <div className="text-xs text-indigo-950 space-y-0.5">
                <p className="font-bold">Step 4: Bank Settlement Timeline (5 to 7 Working Days)</p>
                <p>As per Reserve Bank of India (RBI) regulations and standard Indian banking turnaround times, the credited funds will reflect on your card statement or bank account within <strong>5 to 7 business days</strong> (excluding national holidays and weekends).</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Digital Shipping & Service Delivery */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            4. Shipping & Digital Service Delivery Policy
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            All offerings on the FLASH Placement Arena (including practice modules, AI mock interview credits, contest passes, and diagnostic reports) are strictly <strong>digital services and cloud software</strong>.
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1.5 pl-2">
            <li>There are <strong>no physical items</strong>, books, or materials shipped to your postal address.</li>
            <li>Delivery is electronic and instantaneous: your account tier is upgraded immediately upon Razorpay's payment confirmation webhook.</li>
            <li>A digital invoice and payment confirmation is sent instantly to your registered email address.</li>
          </ul>
        </section>

        {/* 5. Contact Information */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4 text-indigo-600" />
            5. Contact Billing Support
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            For any queries regarding an ongoing refund, billing errors, or subscription updates, our billing desk is ready to help:
          </p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs text-slate-700 space-y-1">
            <p><strong>Entity:</strong> FLASH Innovations</p>
            <p><strong>Billing Desk:</strong> Customer Support & Refunds</p>
            <p><strong>Support Email:</strong> <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a></p>
            <p><strong>Working Hours:</strong> Monday to Saturday, 9:00 AM – 7:00 PM IST</p>
            <p><strong>Response Time:</strong> Within 24 hours</p>
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

export default RefundPolicyPage;
