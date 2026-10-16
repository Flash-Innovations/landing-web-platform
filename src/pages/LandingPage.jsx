import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  BrainCircuit,
  FileCheck2,
  Crown,
  Sparkles,
  Mic,
  Star,
  Terminal,
  FileText,
  Award,
  Zap,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "../components/common/Button";
import { Card } from "../components/common/Card";
import { Footer } from "../components/common/Footer";
import { STUDENT_PORTAL_URL } from "../config/env";

export function LandingPage() {
  const goToStudentPortal = (path = "") => {
    window.location.href = `${STUDENT_PORTAL_URL}${path}`;
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 flex flex-col">
      
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/branding/flash-logo-horizontal.png"
              alt="FLASH"
              className="h-8 w-auto max-w-[170px] sm:max-w-[200px] object-contain cursor-pointer"
              onClick={() => goToStudentPortal("/login")}
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Platform Modules</a>
            <a href="#interview" className="hover:text-indigo-600 transition-colors">Gemini Voice Mock</a>
            <a href="#coding" className="hover:text-indigo-600 transition-colors">Sandboxed Coding</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing & Plans</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`${STUDENT_PORTAL_URL}/login`}
              className="text-xs font-bold text-slate-700 hover:text-indigo-600 px-3 py-2 rounded-lg transition-colors cursor-pointer"
            >
              Sign In
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => goToStudentPortal("/register")}
            >
              Start Free Practice <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Campus Placement Intelligence Arena</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Master Your Campus Placements with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                AI Precision
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Eliminate placement anxiety. Practice 1,000+ curated MCQs, compile code in real-time Judge0 sandboxes, take conversational Gemini Live voice mock interviews, and optimize your resume for enterprise ATS.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={() => goToStudentPortal("/register")}
                className="w-full sm:w-auto shadow-lg shadow-indigo-600/20"
              >
                Create Free Student Account <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => goToStudentPortal("/pricing")}
                className="w-full sm:w-auto"
              >
                View Student Plans (Free & Pro)
              </Button>
            </div>

            {/* Quick Stat Highlights */}
            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100 MCQs + 50 DSA Free</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Real-Time Gemini Live Audio</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Sub-Second Judge0 Execution</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section id="features" className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything Needed for Campus Placements
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              From foundational aptitude to advanced technical rounds and HR culture fit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1: MCQ Practice */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/practice")}>
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center mb-4 shadow-xs">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Subject & Aptitude MCQs</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Quantitative, Logical Reasoning, Verbal Ability, OS, DBMS, Computer Networks, and OOP concepts with KaTeX formula rendering.
              </p>
              <div className="text-xs font-semibold text-indigo-600 flex items-center gap-1">
                Explore Questions <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

            {/* Card 2: Coding Arena */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/coding")}>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Sandboxed Coding Arena</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Write code in C++, Python, Java, or JavaScript with Monaco editor. Run test cases against Judge0 execution backend with sub-second feedback.
              </p>
              <div className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                Launch Arena <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

            {/* Card 3: AI Mock Interview */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/interview")}>
              <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center mb-4 shadow-xs">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Gemini Live Spoken Mock</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Real-time conversational voice interview simulator with Sarah (Principal AI). Practice technical, system design, and behavioral STAR interviews.
              </p>
              <div className="text-xs font-semibold text-purple-600 flex items-center gap-1">
                Start Interview <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

            {/* Card 4: ATS Resume */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/resume")}>
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center mb-4 shadow-xs">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">ATS Resume Optimizer</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Audit your resume against FAANG applicant tracking systems. Detect missing tech keywords, quantify action verbs, and boost candidate ranking.
              </p>
              <div className="text-xs font-semibold text-sky-600 flex items-center gap-1">
                Scan Resume <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

            {/* Card 5: Verified Outcomes */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/outcomes")}>
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-amber-600 flex items-center justify-center mb-4 shadow-xs">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Verified Placement Telemetry</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Document verified campus offers and PPOs. Share audited outcome telemetry with your college T&P cell while maintaining full privacy consent.
              </p>
              <div className="text-xs font-semibold text-amber-600 flex items-center gap-1">
                View Cohort Data <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

            {/* Card 6: Fair Pricing */}
            <Card hover className="p-6 cursor-pointer" onClick={() => goToStudentPortal("/pricing")}>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 text-rose-600 flex items-center justify-center mb-4 shadow-xs">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Student-Friendly Pricing</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Free plan includes 100 MCQs and 50 DSA problems. Basic at ₹99/mo and Premium at ₹199/mo unlock unlimited practice and generous mock minutes.
              </p>
              <div className="text-xs font-semibold text-rose-600 flex items-center gap-1">
                View Pricing Tiers <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>

          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple, Predictable Student Pricing
            </h2>
            <p className="text-slate-500 text-sm mt-2">
              Start free today and upgrade as you advance to high-stakes recruitment drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Free */}
            <Card className="p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">Free Tier</h3>
                <div className="my-5">
                  <span className="text-4xl font-black text-slate-900 font-mono">₹0</span>
                  <span className="text-xs text-slate-400 font-medium"> / forever</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 100 Subject & Aptitude MCQs</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 50 Core DSA Coding Problems</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Standard Judge0 Sandbox</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 1 Full ATS Resume Scan</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Button variant="outline" className="w-full" onClick={() => goToStudentPortal("/register")}>
                  Start for Free
                </Button>
              </div>
            </Card>

            {/* Basic */}
            <Card className="p-6 flex flex-col justify-between border-indigo-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Standard</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">Basic Plan</h3>
                <div className="my-5">
                  <span className="text-4xl font-black text-indigo-600 font-mono">₹99</span>
                  <span className="text-xs text-slate-400 font-medium"> / month + GST</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited MCQs</strong> across all subjects</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited DSA Coding Problems</strong></li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>300 Mins/Month</strong> Gemini Live Audio Mocks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Free entry to regular contests</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Button variant="primary" className="w-full" onClick={() => goToStudentPortal("/register")}>
                  Get Basic Plan
                </Button>
              </div>
            </Card>

            {/* Premium */}
            <Card className="p-6 flex flex-col justify-between border-indigo-500 ring-2 ring-indigo-500/20 shadow-md relative bg-gradient-to-b from-indigo-50/20 to-white">
              <div className="absolute -top-3 right-6">
                <span className="bg-indigo-600 text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded shadow-xs">
                  Recommended
                </span>
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">Enterprise Ready</span>
                <h3 className="text-xl font-extrabold text-slate-900 mt-1">Premium Plan</h3>
                <div className="my-5">
                  <span className="text-4xl font-black text-purple-600 font-mono">₹199</span>
                  <span className="text-xs text-slate-400 font-medium"> / month + GST</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-600 border-t border-slate-100 pt-5">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>1,000 Mins/Month</strong> Gemini Live Audio Mocks</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Unlimited MCQs & Coding Challenges</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Unlimited ATS Resume Rescans</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Free Entry to All Premium Contests</li>
                </ul>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Button variant="primary" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" onClick={() => goToStudentPortal("/register")}>
                  Get Premium Plan
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-indigo-950 p-8 sm:p-12 text-white shadow-xl text-center space-y-6 relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Accelerate Your Placement Readiness?
              </h2>
              <p className="text-indigo-200 text-sm sm:text-base leading-relaxed">
                Join engineering students mastering technical and behavioral rounds with AI. Zero credit card required to start.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => goToStudentPortal("/register")}
                className="bg-white text-indigo-900 hover:bg-indigo-50 shadow-none font-bold"
              >
                Sign Up Now — It's Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => goToStudentPortal("/login")}
                className="border-white/30 text-white hover:bg-white/10 bg-transparent"
              >
                Sign In to Student Portal
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default LandingPage;
