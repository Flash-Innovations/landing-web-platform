import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Clock, MapPin, MessageSquare, Send, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { Button } from "../../components/common/Button";

export function ContactUsPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission or mailto trigger
    window.location.href = `mailto:support@flashedu.in?subject=${encodeURIComponent(`[${formData.subject.toUpperCase()}] Inquiry from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    setSubmitted(true);
  };

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
            <MessageSquare className="w-3.5 h-3.5" />
            Candidate Support & Assistance
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Have questions about your subscription, practice questions, or institutional partnerships? We are here to support your career journey.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Details Cards */}
          <div className="md:col-span-1 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Support</h3>
                <a href="mailto:support@flashedu.in" className="text-sm font-bold text-indigo-600 hover:underline">
                  support@flashedu.in
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Average reply time: &lt; 24 business hours</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">Operating Hours</h3>
                <p className="text-xs font-bold text-slate-800">Monday – Saturday</p>
                <p className="text-[11px] text-slate-600">9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>

                <p className="text-xs font-bold text-slate-800">FLASH Innovations</p>
                <p className="text-[11px] text-slate-600">Kanpur, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>

          {/* Contact Message Box */}
          <div className="md:col-span-2">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Send an Inquiry</h2>
                <p className="text-xs text-slate-600 mt-1">
                  Fill in the details below or email directly at <a href="mailto:support@flashedu.in" className="text-indigo-600 font-semibold underline">support@flashedu.in</a>.
                </p>
              </div>

              {submitted ? (
                <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Inquiry Prepared!
                  </div>
                  <p className="text-xs text-emerald-800">
                    Your email client should have opened with your inquiry addressed to <strong>support@flashedu.in</strong>. If not, please send an email directly from your email app.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="text-xs"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@college.edu"
                        className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Inquiry Category</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-white"
                    >
                      <option value="billing">Billing & Razorpay Subscription (Refunds / Invoices)</option>
                      <option value="technical">Technical Support (Coding Sandbox / MCQs)</option>
                      <option value="interview">AI Mock Interview Feedback</option>
                      <option value="campus">Institutional & TPO College Inquiries</option>
                      <option value="general">General Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share your questions or describe the issue you are encountering..."
                      className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="bg-[#4338ca] hover:bg-[#2a14b4] text-xs font-bold w-full sm:w-auto"
                  >
                    <Send className="w-3.5 h-3.5 mr-1.5" /> Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <section className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-600">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <p className="font-semibold text-slate-800">How soon do I get access after paying?</p>
              <p>Immediately! All subscriptions are digital cloud services provisioned instantaneously once payment is verified via Razorpay.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <p className="font-semibold text-slate-800">How do I request a refund?</p>
              <p>Simply email <a href="mailto:support@flashedu.in" className="text-indigo-600 underline">support@flashedu.in</a> within 7 days of your purchase with your Payment ID. Refunds settle in 5-7 working days.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <p className="font-semibold text-slate-800">Can colleges partner with FLASH?</p>
              <p>Yes. TPOs and placement coordinators can contact us for campus-wide licenses, proctored batch drives, and diagnostic dashboards.</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
              <p className="font-semibold text-slate-800">Is my payment information secure?</p>
              <p>Yes. All payment transactions are encrypted and processed by Razorpay's PCI-DSS Level 1 compliant gateway. FLASH never stores your card data.</p>
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

export default ContactUsPage;
