import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Brain,
  FileCheck2,
  Crown,
  Sparkles,
  Mic,
  Award,
  Play,
  RotateCcw,
  Check,
  X,
  ChevronDown,
  LayoutDashboard,
  Timer,
  Bot,
  TrendingUp,
  Flag,
  AlertCircle,
  Menu,
  Clock,
  UploadCloud,
  PlayCircle
} from "lucide-react";
import { Footer } from "../components/common/Footer";
import { DailyTrendChart } from "../components/landing/DailyTrendChart";
import { ReadinessRadarChart } from "../components/landing/ReadinessRadarChart";
import { STUDENT_PORTAL_URL } from "../config/env";

export function LandingPage({ defaultScrollTo = null }) {
  // Navigation & Interactive states
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Coding Arena preview state
  const [codeLanguage, setCodeLanguage] = useState("Python 3.11");
  const [codeRunState, setCodeRunState] = useState("idle"); // 'idle' | 'running' | 'success'

  // Modals
  const [questionModalOpen, setQuestionModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const [interviewModalOpen, setInterviewModalOpen] = useState(false);
  const [interviewInput, setInterviewInput] = useState("");
  const [interviewFeedbackOpen, setInterviewFeedbackOpen] = useState(false);

  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [resumeScanOpen, setResumeScanOpen] = useState(false);

  // Toast feedback
  const [toastMsg, setToastMsg] = useState(null);

  const showToast = (msg) => {
    setToastMsg(msg);
  };

  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => {
        setToastMsg(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  // Code snippets by language
  const codeSnippets = {
    "Python 3.11": `def lengthOfLongestSubstring(s: str) -> int:
    char_map = {}
    left = 0
    max_len = 0
    
    for right in range(len(s)):
        if s[right] in char_map and char_map[s[right]] >= left:
            left = char_map[s[right]] + 1
        char_map[s[right]] = right
        max_len = max(max_len, right - left + 1)
        
    return max_len`,
    "C++ 20": `int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> charMap;
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); ++right) {
        if (charMap.count(s[right]) && charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        charMap[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    "Java 17": `public int lengthOfLongestSubstring(String s) {
    Map<Character, Integer> charMap = new HashMap<>();
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); right++) {
        char c = s.charAt(right);
        if (charMap.containsKey(c) && charMap.get(c) >= left) {
            left = charMap.get(c) + 1;
        }
        charMap.put(c, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
    "JavaScript (ES6)": `function lengthOfLongestSubstring(s) {
    const charMap = new Map();
    let left = 0, maxLen = 0;
    
    for (let right = 0; right < s.length; right++) {
        if (charMap.has(s[right]) && charMap[s[right]] >= left) {
            left = charMap[s[right]] + 1;
        }
        charMap.set(s[right], right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
  };

  const handleRunCode = () => {
    setCodeRunState("running");
    setTimeout(() => {
      setCodeRunState("success");
      showToast("Code executed with sub-second feedback! (3/3 Passed)");
    }, 400);
  };

  const goToStudentPortal = (path = "") => {
    window.location.href = `${STUDENT_PORTAL_URL}${path}`;
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (defaultScrollTo === "pricing" || window.location.hash === "#pricing") {
      setTimeout(() => {
        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }, [defaultScrollTo]);

  return (
    <div className="min-h-screen bg-brand-surface text-slate-800 font-sans antialiased selection:bg-brand-purple selection:text-white flex flex-col">
      
      {/* ================= TOP NOTICE BAR ================= */}
      <div className="bg-brand-dark text-white text-xs py-2 px-4 border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-amber text-brand-dark">
              FREE STARTER
            </span>
            <span className="text-slate-300">
              100 Subject & Aptitude MCQs + 50 Core DSA Problems available free today!
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-indigo-200">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Razorpay Secured
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1">
              <RotateCcw className="w-3.5 h-3.5 text-brand-amber" /> 7-Day Refund Policy
            </span>
          </div>
        </div>
      </div>

      {/* ================= HERO & NAVIGATION WRAPPER ================= */}
      <header className="hero-contour-bg relative text-white pt-4 pb-28 md:pb-36 overflow-hidden">
        {/* Navbar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo with official mascot */}
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="bg-white rounded-2xl p-1 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="/branding/flash-logo-compact.png"
                  alt="FLASH Mascot"
                  className="h-9 w-9 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-white flex items-center gap-0.5">
                  FLASH<span className="text-brand-amber text-xl leading-none">.</span>
                </span>
                <span className="text-[10px] font-semibold text-indigo-200 tracking-wider uppercase -mt-1">
                  Placement Arena
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-indigo-100">
              <a href="#features" className="hover:text-white transition-colors">
                Features
              </a>
              <a href="#practice-hub" className="hover:text-white transition-colors">
                Practice Hub
              </a>
              <a href="#readiness" className="hover:text-white transition-colors">
                Readiness Tracker
              </a>
              <a href="#pricing" className="hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#faq" className="hover:text-white transition-colors">
                FAQ
              </a>
            </div>

            {/* Auth & CTA Buttons */}
            <div className="flex items-center gap-3">
              <a
                href={`${STUDENT_PORTAL_URL}/login`}
                className="text-sm font-semibold text-white/90 hover:text-white px-3 py-2 transition-colors cursor-pointer"
              >
                Log in
              </a>
              <a
                href={`${STUDENT_PORTAL_URL}/register`}
                className="bg-white text-brand-purple hover:bg-slate-50 px-5 py-2 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                Sign up
              </a>
              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="md:hidden text-white p-2 rounded-lg hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Mobile dropdown nav */}
          {mobileNavOpen && (
            <div className="md:hidden pt-4 pb-3 border-t border-white/10 mt-2 bg-brand-deep/95 backdrop-blur-md rounded-2xl px-4 shadow-xl">
              <div className="flex flex-col space-y-3 text-sm font-medium text-white/90">
                <a
                  href="#features"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#practice-hub"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Practice Hub
                </a>
                <a
                  href="#readiness"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Readiness Tracker
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  FAQ
                </a>
              </div>
            </div>
          )}
        </nav>

        {/* ================= HERO CONTENT SECTION ================= */}
        <div id="hero" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 md:pt-20 text-center relative z-10">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs sm:text-sm font-medium mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-amber animate-pulse"></span>
            <span>AI-Powered Placement Preparation & Interview Mastery</span>
          </div>

          {/* Hero Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Your placement preparation.<br className="hidden sm:inline" />{" "}
            <span className="text-white drop-shadow-sm">One platform.</span>
          </h1>

          {/* Hero Subhead */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-indigo-100 font-normal leading-relaxed mb-10">
            Practice aptitude, master coding, take timed company assessments, and prepare for technical interviews with a structured learning experience built for campus placements.
          </p>

          {/* Start Practicing Free Button */}
          <div className="max-w-xl mx-auto mb-8 flex flex-col items-center">
            <a
              href={`${STUDENT_PORTAL_URL}/register`}
              className="inline-flex items-center justify-center gap-3 bg-brand-amber hover:bg-brand-amberDark text-brand-dark px-10 py-4 rounded-full text-base sm:text-lg font-black shadow-glow-amber transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>Start Practicing Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-6 mt-4 text-xs text-indigo-200 font-medium flex-wrap">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-amber" /> 100 MCQs + 50 DSA Free
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-amber" /> Instant Access
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-brand-amber" /> No Credit Card Required
              </span>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("interactive-demo")}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <PlayCircle className="w-4 h-4 text-brand-amber" /> Explore Interactive Features
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-indigo-100 hover:text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" /> View Plans (from ₹0 to ₹199/mo)
            </button>
          </div>

        </div>

        {/* ================= FLOATING APP DASHBOARD PREVIEW ================= */}
        <div id="interactive-demo" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 relative z-20">
          <div className="relative bg-white rounded-3xl shadow-dashboard border border-white/70 p-4 sm:p-6 md:p-8 text-slate-800 transition-all">
            
            {/* Mockup Top Bar: User Welcome + Status Badges */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-purple to-indigo-400 text-white flex items-center justify-center font-bold text-lg shadow-md">
                  RS
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">Hello, Rahul Sharma 👋</h3>
                    <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      🔥 14-Day Streak
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium">
                    Aspiring Software Engineer • Target: SDE-1 / Software Developer
                  </p>
                </div>
              </div>

              {/* XP & Readiness Score Widgets */}
              <div className="flex items-center gap-3">
                <div className="bg-indigo-50 border border-indigo-100 px-4 py-2 rounded-2xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-brand-purple text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    ⚡
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Practice XP</span>
                    <span className="text-sm font-extrabold text-brand-purple">2,450 XP</span>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    🎯
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Placement Ready</span>
                    <span className="text-sm font-extrabold text-emerald-600">84% Score</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Mockup Feature Navigation Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-100">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "overview"
                    ? "bg-brand-purple text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <LayoutDashboard className="w-4 h-4" /> Readiness Dashboard
              </button>
              <button
                onClick={() => setActiveTab("aptitude")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "aptitude"
                    ? "bg-brand-purple text-white shadow-sm font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Brain className="w-4 h-4" /> Practice Hub
              </button>
              <button
                onClick={() => setActiveTab("coding")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "coding"
                    ? "bg-brand-purple text-white shadow-sm font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Code2 className="w-4 h-4" /> Coding Arena
              </button>
              <button
                onClick={() => setActiveTab("assessments")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "assessments"
                    ? "bg-brand-purple text-white shadow-sm font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Timer className="w-4 h-4" /> Timed Mock Tests
              </button>
              <button
                onClick={() => setActiveTab("interview")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === "interview"
                    ? "bg-brand-purple text-white shadow-sm font-bold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <Bot className="w-4 h-4" /> AI Mock Interview
              </button>
            </div>

            {/* ================= TAB 1: OVERVIEW & READINESS ================= */}
            {activeTab === "overview" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column (7 cols): Today's Active Placement Modules */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                      Today's Placement Modules
                    </h4>
                    <span
                      className="text-xs font-semibold text-brand-purple hover:underline cursor-pointer"
                      onClick={() => {
                        setSelectedOption(null);
                        setQuestionModalOpen(true);
                      }}
                    >
                      Solve Next Problem &rarr;
                    </span>
                  </div>

                  {/* Card 1: Aptitude & Reasoning */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-brand-purple/40 hover:shadow-card-soft transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-violet-100 text-brand-purple flex items-center justify-center font-bold text-xl flex-shrink-0">
                        📖
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-slate-900">
                            Permutations, Probability & Speed Math
                          </h5>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-violet-100 text-brand-purple">
                            Aptitude
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          24 of 30 problems completed • 92% Accuracy
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs font-bold text-emerald-600">80% Done</span>
                        <div className="w-20 bg-slate-100 h-2 rounded-full mt-1 overflow-hidden">
                          <div className="bg-emerald-500 h-full rounded-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedOption(null);
                          setQuestionModalOpen(true);
                        }}
                        className="px-3.5 py-1.5 rounded-xl bg-brand-purple hover:bg-brand-deep text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        Continue
                      </button>
                    </div>
                  </div>

                  {/* Card 2: Coding & DSA */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-white hover:border-brand-purple/40 hover:shadow-card-soft transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                        💻
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-bold text-slate-900">
                            Binary Tree Traversals & Recursion
                          </h5>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                            Coding Arena
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Medium Difficulty • C++, Java, Python supported
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right">
                        <span className="text-xs font-bold text-amber-600">65% Done</span>
                        <div className="w-20 bg-slate-100 h-2 rounded-full mt-1 overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab("coding")}
                        className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                      >
                        Code Now
                      </button>
                    </div>
                  </div>

                  {/* Learning Activity Chart inside Dashboard Mockup */}
                  <div className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/70">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-brand-purple" /> Daily Accuracy & Practice Trend
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        Last 7 Days (Avg: 88%)
                      </span>
                    </div>
                    <div className="relative h-44 w-full">
                      <DailyTrendChart />
                    </div>
                  </div>
                </div>

                {/* Right Column (5 cols): Badges, Target & Quick Stats */}
                <div className="lg:col-span-5 space-y-4">
                  
                  {/* Set Target & Timeline Card */}
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-md relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full">
                          Goal Tracker
                        </span>
                        <Flag className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-base font-bold mb-1">
                        Target Role: SDE-1 / Software Developer
                      </h4>
                      <p className="text-xs text-pink-100 mb-3">
                        Next Timed Mock Test: TCS NQT & Infosys DSE in 2 days
                      </p>
                      <div className="flex items-center justify-between text-xs bg-white/10 rounded-xl p-2.5 backdrop-blur-sm">
                        <span>Questions Solved: <strong>412 / 500</strong></span>
                        <span className="font-bold text-white">82%</span>
                      </div>
                    </div>
                  </div>

                  {/* Milestone & Achievement Badge */}
                  <div className="p-5 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-md flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/25 px-2 py-0.5 rounded-full">
                        Achievement
                      </span>
                      <h4 className="text-base font-bold mt-1.5">Aptitude Master Rank</h4>
                      <p className="text-xs text-amber-100 mt-0.5">
                        Top 8% percentile among active candidates
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl shadow-inner flex-shrink-0">
                      🏅
                    </div>
                  </div>

                  {/* Weak Area Diagnostic & Recommended Action */}
                  <div className="p-4 rounded-2xl border border-slate-200 bg-white">
                    <h5 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-brand-purple" /> Targeted Improvement Focus
                    </h5>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Data Interpretation</span>
                        <span className="font-bold text-rose-500">62% (Needs work)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Dynamic Programming</span>
                        <span className="font-bold text-amber-600">71% (Moderate)</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-600">
                        <span>Quantitative Aptitude</span>
                        <span className="font-bold text-emerald-600">94% (Strong)</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedOption(null);
                        setQuestionModalOpen(true);
                      }}
                      className="w-full mt-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Practice 10 Diagnostic Questions
                    </button>
                  </div>

                </div>
              </div>
            )}

            {/* ================= TAB 2: PRACTICE HUB PREVIEW ================= */}
            {activeTab === "aptitude" && (
              <div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">
                        Practice Hub — 1,000+ Curated Placement MCQs
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        Structured syllabus covering Quantitative, Logical Reasoning, Verbal, and Core CS with detailed solutions.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedOption(null);
                        setQuestionModalOpen(true);
                      }}
                      className="bg-brand-purple hover:bg-brand-deep text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Try a Live Sample Problem
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Module 1 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="text-2xl mb-2">🔢</div>
                      <h5 className="font-bold text-sm text-slate-900">Quantitative Aptitude</h5>
                      <p className="text-xs text-slate-500 mt-1 mb-3">
                        Time & Work, Percentages, Profit & Loss, Speed & Distance, Probability, Permutations.
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-400 border-t pt-2">
                        <span>Detailed Solutions</span>
                        <span className="text-emerald-600 font-bold">100 Free MCQs</span>
                      </div>
                    </div>

                    {/* Module 2 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="text-2xl mb-2">🧩</div>
                      <h5 className="font-bold text-sm text-slate-900">Logical & Critical Reasoning</h5>
                      <p className="text-xs text-slate-500 mt-1 mb-3">
                        Syllogisms, Blood Relations, Seating Arrangements, Coding-Decoding, Data Sufficiency.
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-400 border-t pt-2">
                        <span>Step-by-step logic</span>
                        <span className="text-emerald-600 font-bold">Free access</span>
                      </div>
                    </div>

                    {/* Module 3 */}
                    <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="text-2xl mb-2">💻</div>
                      <h5 className="font-bold text-sm text-slate-900">Core CS Fundamentals</h5>
                      <p className="text-xs text-slate-500 mt-1 mb-3">
                        Operating Systems, DBMS, SQL Queries, Computer Networks, OOP Principles.
                      </p>
                      <div className="flex items-center justify-between text-xs text-slate-400 border-t pt-2">
                        <span>MCQs & Viva Questions</span>
                        <span className="text-brand-purple font-bold">Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 3: CODING ARENA PREVIEW ================= */}
            {activeTab === "coding" && (
              <div>
                <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-amber-500 text-slate-950 font-bold text-[10px] px-2 py-0.5 rounded">
                          MEDIUM
                        </span>
                        <h4 className="font-bold text-sm text-white">
                          Problem: Longest Substring Without Repeating Characters
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 mt-1">
                        Frequently asked in technical interview coding rounds.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={codeLanguage}
                        onChange={(e) => setCodeLanguage(e.target.value)}
                        className="bg-slate-800 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none cursor-pointer"
                      >
                        <option>Python 3.11</option>
                        <option>C++ 20</option>
                        <option>Java 17</option>
                        <option>JavaScript (ES6)</option>
                      </select>
                      <button
                        onClick={handleRunCode}
                        className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-xs px-4 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Run Code
                      </button>
                    </div>
                  </div>

                  {/* Code snippet display */}
                  <pre className="bg-slate-950 p-4 rounded-xl text-xs font-mono text-emerald-400 overflow-x-auto border border-slate-800 leading-relaxed">
                    <code>{codeSnippets[codeLanguage]}</code>
                  </pre>

                  <div className="mt-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    {codeRunState === "running" ? (
                      <span className="text-amber-400 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                        Compiling with Judge0 execution sandbox...
                      </span>
                    ) : codeRunState === "success" ? (
                      <span className="text-slate-400">
                        Status:{" "}
                        <strong className="text-emerald-400 font-mono">
                          Testcases Passed (3/3) • Runtime: 42ms • Sub-second Execution
                        </strong>
                      </span>
                    ) : (
                      <span className="text-slate-400">
                        Status:{" "}
                        <strong className="text-slate-300 font-mono">Ready to compile & test</strong>
                      </span>
                    )}
                    <span className="text-[11px] text-slate-500">
                      Supports C++, Python, Java & JavaScript
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 4: TIMED ASSESSMENTS PREVIEW ================= */}
            {activeTab === "assessments" && (
              <div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    Company-Specific Placement Mock Tests
                  </h4>
                  <p className="text-xs text-slate-500 mb-6">
                    Real test patterns timed to replicate actual recruitment drive conditions.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-extrabold text-sm text-slate-800">TCS NQT Full Mock</span>
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          65 Mins
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">
                        Numerical Ability, Reasoning, Verbal, and Hands-on Coding.
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Active Test</span>
                        <a
                          href={`${STUDENT_PORTAL_URL}/register`}
                          className="text-brand-purple font-bold hover:underline"
                        >
                          Start Test &rarr;
                        </a>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-extrabold text-sm text-slate-800">Infosys DSE / SP Mock</span>
                        <span className="text-[10px] font-bold bg-purple-100 text-purple-800 px-2 py-0.5 rounded">
                          90 Mins
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">
                        Advanced Data Structures, Algorithms, Mathematical logic.
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Active Test</span>
                        <a
                          href={`${STUDENT_PORTAL_URL}/register`}
                          className="text-brand-purple font-bold hover:underline"
                        >
                          Start Test &rarr;
                        </a>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-extrabold text-sm text-slate-800">Cognizant GenC Mock</span>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                          60 Mins
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mb-4">
                        Aptitude, Domain MCQs, and algorithmic debugging.
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400">Active Test</span>
                        <a
                          href={`${STUDENT_PORTAL_URL}/register`}
                          className="text-brand-purple font-bold hover:underline"
                        >
                          Start Test &rarr;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= TAB 5: AI MOCK INTERVIEW PREVIEW ================= */}
            {activeTab === "interview" && (
              <div>
                <div className="bg-indigo-900 text-white p-6 rounded-2xl relative overflow-hidden">
                  <div className="relative z-10 max-w-2xl">
                    <span className="bg-brand-amber text-brand-dark text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                      Real-Time Conversational AI
                    </span>
                    <h4 className="text-xl font-bold mt-2">
                      Spoken Mock Interviews with Sarah (Principal AI)
                    </h4>
                    <p className="text-xs text-indigo-200 mt-1 mb-4">
                      Experience real-time voice and text mock interviews tailored to your target role. Get immediate feedback on technical precision, STAR methodology, and communication confidence.
                    </p>
                    
                    <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md mb-4 text-xs space-y-2">
                      <p className="font-semibold text-brand-amber">Sarah (Principal AI Interviewer):</p>
                      <p className="text-slate-100 italic">
                        "Can you explain the difference between a process and a thread, and describe how deadlocks occur in a multi-threaded application?"
                      </p>
                    </div>

                    <button
                      onClick={() => setInterviewModalOpen(true)}
                      className="bg-brand-amber hover:bg-brand-amberDark text-brand-dark px-5 py-2.5 rounded-full text-xs font-bold transition-all shadow-glow-amber cursor-pointer"
                    >
                      Try 3-Minute Sample Mock Interview
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>

        {/* Soft curved bottom divider into content */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-12 sm:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z" fill="#F8F9FE"></path>
          </svg>
        </div>
      </header>

      {/* ================= AUTHENTIC METRICS SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 -mt-6 sm:-mt-10 relative z-30">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card-soft border border-slate-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-purple">1,000+</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Placement MCQs</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Quantitative, Logical & Core CS</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-purple">50+</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Core DSA Challenges</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Sub-second code compilation</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-purple">Live Audio</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Spoken AI Mock Interviews</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Real-time voice dialogue</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-purple">ATS Audit</div>
              <div className="text-xs font-bold text-slate-800 mt-1">Enterprise Resume Scanner</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Keyword & action verb scoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: PRODUCT FEATURES ================= */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-violet-100 text-brand-purple uppercase tracking-wider mb-3">
            Comprehensive Preparation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need To Master Your Placement Rounds
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            No need to juggle multiple fragmented tools. FLASH unifies daily aptitude, coding challenges, company-pattern assessments, and spoken interview prep into one seamless flow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Feature 1: Practice Hub */}
          <div id="practice-hub" className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-brand-purple flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              📚
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Practice Hub</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Master quantitative aptitude, logical reasoning, verbal ability, and core CS fundamentals with granular, step-by-step topic breakdowns.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Topic-wise difficulty tiers
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Detailed step-by-step solutions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Daily curated practice streaks
              </li>
            </ul>
            <button
              onClick={() => {
                setActiveTab("aptitude");
                scrollToSection("interactive-demo");
              }}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              Explore Practice Hub <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 2: Coding Arena */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-brand-amberDark flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              💻
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Coding Arena</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Solve core Data Structures & Algorithms problems. Run your code in C++, Python, Java, or JavaScript with sub-second execution and instant testcase feedback.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Multi-language support (C++, Python, Java, JS)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant testcase and edge-case evaluation
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Placement-focused problem catalog
              </li>
            </ul>
            <button
              onClick={() => {
                setActiveTab("coding");
                scrollToSection("interactive-demo");
              }}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              Try Coding Arena <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 3: Timed Mock Assessments */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              ⏱️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Timed Mock Assessments</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Replicate the actual exam pressure of hiring drives with section-timed mock tests matching company patterns.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Company-accurate timing & section switching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Automated score breakdown and ranking
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Detailed answer keys and explanations
              </li>
            </ul>
            <button
              onClick={() => {
                setActiveTab("assessments");
                scrollToSection("interactive-demo");
              }}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              View Mock Tests <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 4: Spoken AI Mock Interviews */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              🎙️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Spoken AI Mock Interviews</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Conduct real-time voice conversations with Sarah (Principal AI). Practice technical DSA viva, core CS subjects, system design, and behavioral STAR interviews.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Natural real-time spoken audio dialogue
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> STAR method feedback for HR rounds
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant constructive feedback & tips
              </li>
            </ul>
            <button
              onClick={() => setInterviewModalOpen(true)}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              Launch Spoken Interview Simulator <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 5: Smart Resume Scanner */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              📄
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Resume ATS Optimizer</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Scan your resume against enterprise applicant tracking standards. Find missing technical keywords, quantify action verbs, and improve shortlisting rates.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Tech industry keyword matching
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Action verb & impact phrase review
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Formatted ATS readability score
              </li>
            </ul>
            <button
              onClick={() => {
                setResumeScanOpen(false);
                setResumeModalOpen(true);
              }}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              Check Resume Score <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Feature 6: Contests & Challenges */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/80 hover:border-brand-purple/50 hover:shadow-card-soft transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform shadow-sm">
              🏆
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Coding Contests & XP</h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Participate in regular and premium coding contests. Benchmark your problem-solving speed and accuracy while building your streak and XP.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Live contest leaderboards
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Practice XP and milestone badges
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Detailed solution write-ups
              </li>
            </ul>
            <a
              href={`${STUDENT_PORTAL_URL}/register`}
              className="text-xs font-bold text-brand-purple flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer"
            >
              Join Next Contest <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: DEMONSTRATE PROGRESS (Readiness Tracker) ================= */}
      <section id="readiness" className="bg-white py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Explanation */}
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 uppercase tracking-wider">
                Measurable Placement Readiness
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Know Exactly Where You Stand Before Your First Interview
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Practice is only half the battle. FLASH turns every question and mock test into actionable insights — pinpointing weak topics so you never enter a placement test guessing.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Topic-by-Topic Accuracy Tracking</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      See precise hit-rates across Quantitative, Logical, Verbal, and Core CS domains.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Placement Readiness Score (0 - 100)</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      A weighted composite score calculated against real technical hiring cutoffs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Personalized Practice Roadmaps</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      The platform recommends daily high-yield questions to plug your specific score leaks.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`${STUDENT_PORTAL_URL}/register`}
                  className="inline-block bg-brand-purple hover:bg-brand-deep text-white px-7 py-3 rounded-full text-sm font-bold shadow-glow-purple transition-all cursor-pointer"
                >
                  Calculate Your Placement Readiness Score
                </a>
              </div>
            </div>

            {/* Right: Interactive Readiness Radar & Breakdown Card */}
            <div className="lg:col-span-7">
              <div className="bg-brand-surface rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card-soft">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">Comprehensive Skill Diagnostic</h4>
                    <span className="text-xs text-slate-500">Benchmark against recruitment round cutoffs</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 self-start sm:self-auto">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 84/100 Readiness
                  </span>
                </div>

                {/* Radar / Skill Distribution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-6 items-center">
                  <div className="relative h-60 w-full flex items-center justify-center">
                    <ReadinessRadarChart />
                  </div>

                  {/* Metrics breakdown */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-700">DSA & Problem Solving</span>
                        <span className="text-brand-purple font-bold">88%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-brand-purple h-full rounded-full" style={{ width: "88%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-700">Quantitative Aptitude</span>
                        <span className="text-brand-purple font-bold">92%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-brand-purple h-full rounded-full" style={{ width: "92%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-700">Interview Communication</span>
                        <span className="text-amber-600 font-bold">78%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-semibold mb-1">
                        <span className="text-slate-700">Core CS MCQs (OS/DBMS/CN)</span>
                        <span className="text-emerald-600 font-bold">84%</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-emerald-500 h-full rounded-full" style={{ width: "84%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-amber shrink-0" />
                    <span className="text-slate-700">
                      Recommendation: Complete 2 Graph Traversal sets to push DSA above 95%.
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedOption(null);
                      setQuestionModalOpen(true);
                    }}
                    className="text-brand-purple font-bold hover:underline whitespace-nowrap ml-2 cursor-pointer"
                  >
                    Practice Set &rarr;
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: TRUST, PRIVACY & INTEGRITY ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                🔒
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Zero Data Monetization & Strict Student Privacy
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your resume, interview recordings, and assessment performance are 100% encrypted in-transit (TLS 1.3) and at-rest (AES-256). We never sell your personal contact details or profile to advertisers.
                </p>
              </div>
            </div>
            <div id="privacy" className="flex-shrink-0">
              <Link
                to="/privacy"
                className="px-5 py-2.5 rounded-full border border-slate-300 hover:border-brand-purple text-slate-700 hover:text-brand-purple text-xs font-bold transition-all inline-block"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: PLANS & PRICING ================= */}
      <section id="pricing" className="py-20 relative bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-brand-purple uppercase tracking-wider bg-violet-100 px-3 py-1 rounded-full">
              Affordable Student Pricing
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Price For All Your Needs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Transparent, accessible plans built for students. <strong>All prices are inclusive of all taxes.</strong> Start free or upgrade for unlimited practice and real-time spoken AI mock interviews.
            </p>

            {/* Monthly / Yearly Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm ${!isYearly ? "font-bold text-brand-purple" : "font-semibold text-slate-600"}`}>
                Monthly
              </span>
              <button
                type="button"
                onClick={() => {
                  const nextState = !isYearly;
                  setIsYearly(nextState);
                  showToast(nextState ? "Yearly plan selected: ₹999/yr & ₹1,999/yr (inclusive of all taxes)" : "Monthly billing selected: ₹99/mo & ₹199/mo (inclusive of all taxes)");
                }}
                className={`w-14 h-8 rounded-full p-1 relative transition-colors focus:outline-none cursor-pointer ${
                  isYearly ? "bg-brand-purple" : "bg-slate-300"
                }`}
                aria-label="Toggle billing duration"
              >
                <div
                  className={`w-6 h-6 bg-white rounded-full transition-transform transform shadow-md ${
                    isYearly ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </button>
              <span className={`text-sm flex items-center gap-1.5 ${isYearly ? "font-bold text-brand-purple" : "font-semibold text-slate-600"}`}>
                Yearly{" "}
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  Save ~16%
                </span>
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Tier 1: Starter (₹0) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Starter</h3>
                  <span className="bg-slate-100 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full">
                    Forever Free
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Perfect for trying FLASH and kicking off your placement preparation.
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">₹0</span>
                  <span className="text-xs text-slate-500 font-medium"> / forever (free)</span>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">
                    No payment required • Instant access
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900">100 Subject & Aptitude MCQs</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900">50 Core DSA Coding Problems</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Sub-Second Code Compilation (C++, Java, Python, JS)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>1 Full ATS Resume Scan</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>Spoken Voice AI Mock Interviews</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>Premium Contests Entry</span>
                  </div>
                </div>
              </div>

              <a
                href={`${STUDENT_PORTAL_URL}/register`}
                className="mt-8 block w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-900 py-3 rounded-full text-xs font-bold transition-all cursor-pointer"
              >
                Start Practicing Free
              </a>
            </div>

            {/* Tier 2: Standard Plan (₹99/mo or ₹999/yr) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Standard Plan</h3>
                  <span className="bg-indigo-50 text-brand-purple text-xs font-bold px-2.5 py-1 rounded-full">
                    Core Prep
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Unlimited practice problems and 300 minutes of spoken AI interview preparation.
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-900">
                    {isYearly ? "₹999" : "₹99"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {isYearly ? " / year" : " / month"}
                  </span>
                  <div className="text-[11px] text-brand-purple font-semibold mt-1">
                    {isYearly
                      ? "₹999/year (inclusive of all taxes) • ~₹83/mo"
                      : "₹99/month (inclusive of all taxes)"}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900">Unlimited MCQs across all subjects</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-slate-900">Unlimited DSA Coding Problems</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-semibold text-brand-purple">
                      300 Mins / Month Spoken AI Interviews
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free Entry to Regular Contests</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Topic-wise Accuracy Diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-400">
                    <X className="w-4 h-4 text-slate-300 shrink-0" />
                    <span>Premium Contests Entry</span>
                  </div>
                </div>
              </div>

              <a
                href={`${STUDENT_PORTAL_URL}/register`}
                className="mt-8 block w-full text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                Get Standard Plan
              </a>
            </div>

            {/* Tier 3: Premium Plan (₹199/mo or ₹1999/yr) */}
            <div className="bg-white rounded-3xl p-8 border-2 border-brand-purple shadow-glow-purple relative flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3.5 right-8 bg-brand-amber text-brand-dark font-extrabold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                Recommended
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">Premium Plan</h3>
                  <span className="bg-violet-100 text-brand-purple text-xs font-bold px-2.5 py-1 rounded-full">
                    Full Mastery
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Complete interview mastery with 1,000 spoken minutes and unlimited ATS rescans.
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-black text-brand-purple">
                    {isYearly ? "₹1,999" : "₹199"}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {isYearly ? " / year" : " / month"}
                  </span>
                  <div className="text-[11px] text-brand-purple font-semibold mt-1">
                    {isYearly
                      ? "₹1,999/year (inclusive of all taxes) • ~₹166/mo"
                      : "₹199/month (inclusive of all taxes)"}
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-6 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-bold text-brand-purple">
                      1,000 Mins / Month Spoken AI Interviews
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-bold text-slate-900">Unlimited MCQs & Coding Challenges</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Unlimited ATS Resume Rescans & Keyword Audits</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Free Entry to All Premium Contests</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Real-Time Voice Dialogue with Sarah (Principal AI)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Priority Doubt Support</span>
                  </div>
                </div>
              </div>

              <a
                href={`${STUDENT_PORTAL_URL}/register`}
                className="mt-8 block w-full text-center bg-brand-amber hover:bg-brand-amberDark text-brand-dark py-3.5 rounded-full text-xs font-extrabold shadow-glow-amber transition-all transform hover:scale-[1.02] cursor-pointer"
              >
                Get Premium Plan
              </a>
            </div>

          </div>

          {/* Trust Badges Under Pricing */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500">
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Secured by Razorpay
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-purple" /> Instant Digital Activation
            </span>
            <span className="flex items-center gap-2">
              <RotateCcw className="w-4 h-4 text-brand-amber" /> 7-Day Refund Policy
            </span>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: FAQ ACCORDION ================= */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-brand-purple uppercase tracking-wider bg-violet-100 px-3 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          
          {/* FAQ Item 1 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 1 ? null : 1)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-brand-purple transition-colors cursor-pointer"
            >
              <span>What is FLASH and how does it help with placement preparation?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  activeFaq === 1 ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeFaq === 1 && (
              <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed">
                FLASH is an all-in-one placement preparation arena that combines 1,000+ subject and aptitude MCQs, a sub-second multi-language coding environment, spoken voice AI mock interviews with Sarah (Principal AI), and an enterprise ATS resume optimizer to prepare you thoroughly for campus and off-campus technical drives.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 2 ? null : 2)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-brand-purple transition-colors cursor-pointer"
            >
              <span>Can I start for free without entering payment details?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  activeFaq === 2 ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeFaq === 2 && (
              <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed">
                Yes! The Starter Tier is forever free. You get 100 Subject & Aptitude MCQs, 50 Core DSA Coding Problems, code execution in 4 languages, and 1 full ATS resume scan without providing a credit card.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 3 ? null : 3)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-brand-purple transition-colors cursor-pointer"
            >
              <span>How do the Spoken AI Mock Interviews work?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  activeFaq === 3 ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeFaq === 3 && (
              <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed">
                You engage in a two-way conversational voice session with Sarah (Principal AI). You speak your responses naturally. The AI evaluates technical correctness, STAR methodology, and response clarity, giving you structured post-interview diagnostics to help you improve.
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden">
            <button
              onClick={() => setActiveFaq(activeFaq === 4 ? null : 4)}
              className="w-full px-6 py-4 text-left flex items-center justify-between font-bold text-slate-900 text-sm hover:text-brand-purple transition-colors cursor-pointer"
            >
              <span>What is the refund policy?</span>
              <ChevronDown
                className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  activeFaq === 4 ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeFaq === 4 && (
              <div className="px-6 pb-4 text-xs text-slate-600 leading-relaxed">
                We offer a transparent 7-Day Refund Policy. If you upgrade to a paid plan and feel FLASH does not meet your preparation expectations, simply contact support@flashedu.in within 7 days for a full refund.
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA BANNER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-16">
        <div className="bg-brand-purple rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden shadow-glow-purple">
          {/* Curved SVG patterns */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 1000 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" />
              <circle cx="800" cy="200" r="220" stroke="white" strokeWidth="60" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white uppercase tracking-wider mb-4">
              Ready to Crack Your Placements?
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              Start Practising Free Today
            </h2>
            <p className="text-indigo-100 text-sm sm:text-base mb-8">
              Join thousands of engineering students who use FLASH to eliminate placement anxiety. Zero setup, 100 MCQs + 50 DSA free.
            </p>

            <div className="flex flex-col items-center justify-center">
              <a
                href={`${STUDENT_PORTAL_URL}/register`}
                className="inline-flex items-center justify-center gap-3 bg-brand-amber hover:bg-brand-amberDark text-brand-dark px-10 py-4 rounded-full text-base sm:text-lg font-black shadow-glow-amber transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <span>Start Practicing Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <span className="text-xs text-indigo-200 mt-3 font-medium">
                Instant redirect to student.flashedu.in • Free forever starter plan
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= INTERACTIVE MODALS ================= */}

      {/* Modal 1: Live Sample Practice Question */}
      {questionModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => setQuestionModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded bg-violet-100 text-brand-purple">
                Quantitative Aptitude
              </span>
              <span className="text-xs text-slate-400">Sample Problem</span>
            </div>

            <h4 className="text-sm font-bold text-slate-900 mb-4 leading-relaxed">
              A train 180 meters long is traveling at 54 km/hr. How many seconds will it take to completely pass a platform that is 270 meters long?
            </h4>

            <div className="space-y-2 mb-6">
              {[
                { label: "A) 25 seconds", correct: false, id: "A" },
                { label: "B) 30 seconds", correct: true, id: "B" },
                { label: "C) 35 seconds", correct: false, id: "C" },
                { label: "D) 40 seconds", correct: false, id: "D" },
              ].map((opt) => {
                const isSelected = selectedOption === opt.id;
                let btnStyle = "border-slate-200 text-slate-700 hover:bg-slate-50";

                if (selectedOption) {
                  if (opt.correct) {
                    btnStyle = "border-2 border-emerald-500 bg-emerald-50 text-emerald-800 font-bold";
                  } else if (isSelected) {
                    btnStyle = "border-2 border-rose-500 bg-rose-50 text-rose-800 font-bold";
                  } else {
                    btnStyle = "border-slate-200 text-slate-400 bg-slate-50 opacity-60";
                  }
                }

                return (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSelectedOption(opt.id);
                      if (opt.correct) {
                        showToast("🎉 Correct answer! 30 seconds.");
                      } else {
                        showToast("Incorrect. Check the explanation below.");
                      }
                    }}
                    className={`w-full text-left p-3 rounded-xl border text-xs font-medium transition-colors cursor-pointer ${btnStyle}`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>

            {selectedOption && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 mb-4">
                <strong>Correct! (30 seconds)</strong><br />
                Total distance = Train length + Platform = 180m + 270m = 450 meters.<br />
                Speed = 54 km/h = 54 × (5/18) = 15 m/s.<br />
                Time = 450 / 15 = <strong>30 seconds</strong>.
              </div>
            )}

            <button
              onClick={() => {
                setQuestionModalOpen(false);
                goToStudentPortal("/register");
              }}
              className="w-full bg-brand-purple hover:bg-brand-deep text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Solve More Free Problems &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Modal 2: AI Mock Interview Simulator */}
      {interviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => {
                setInterviewModalOpen(false);
                setInterviewFeedbackOpen(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center text-sm font-bold">
                🎙️
              </div>
              <span className="font-extrabold text-slate-900 text-lg">
                Spoken AI Interview Simulator
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Live Conversational Mock with Sarah (Principal AI)
            </p>

            <div className="p-4 bg-slate-900 text-slate-100 rounded-2xl text-xs mb-4 space-y-3">
              <div className="flex items-start gap-2">
                <span className="bg-rose-500 text-[10px] font-bold px-1.5 py-0.5 rounded text-white flex-shrink-0">
                  Sarah AI
                </span>
                <p className="text-slate-200">
                  "Explain what happens under the hood when a user visits a URL in a browser. Focus on DNS lookup, TCP handshake, and HTTP/HTTPS headers."
                </p>
              </div>
              <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 text-slate-300">
                <p className="text-[11px] text-slate-400 mb-1">Your response will be evaluated on:</p>
                <div className="flex items-center gap-2 text-[10px] flex-wrap">
                  <span className="bg-emerald-900/60 text-emerald-300 px-2 py-0.5 rounded">
                    Technical Precision
                  </span>
                  <span className="bg-indigo-900/60 text-indigo-300 px-2 py-0.5 rounded">
                    STAR Structure
                  </span>
                  <span className="bg-amber-900/60 text-amber-300 px-2 py-0.5 rounded">
                    Communication Clarity
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <textarea
                value={interviewInput}
                onChange={(e) => setInterviewInput(e.target.value)}
                placeholder="Type your spoken or written response here (e.g., DNS resolver checks cache, initiates 3-way TCP handshake SYN, SYN-ACK, ACK)..."
                rows={3}
                className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-purple"
              ></textarea>
              <button
                onClick={() => {
                  if (!interviewInput.trim()) {
                    showToast("Please type a brief response first!");
                    return;
                  }
                  setInterviewFeedbackOpen(true);
                  showToast("⚡ AI feedback generated successfully!");
                }}
                className="w-full bg-brand-purple hover:bg-brand-deep text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
              >
                Submit for Instant AI Review
              </button>
            </div>

            {interviewFeedbackOpen && (
              <div className="mt-4 p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900">
                <strong>Score: 8.5/10 • Strong Technical Depth!</strong><br />
                Tip: Make sure to explicitly mention the 3-way TCP handshake flags (SYN, SYN-ACK, ACK) and TLS certificate validation to score maximum points in Tier-1 technical rounds.
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal 3: Resume ATS Score Simulator */}
      {resumeModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={() => {
                setResumeModalOpen(false);
                setResumeScanOpen(false);
              }}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 text-white flex items-center justify-center font-bold">
                📄
              </div>
              <span className="font-extrabold text-slate-900 text-lg">
                Enterprise ATS Resume Scanner
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Audit your resume keywords and formatting against top enterprise hiring filters.
            </p>

            <div
              className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center mb-4 hover:border-brand-purple cursor-pointer transition-colors"
              onClick={() => {
                setResumeScanOpen(true);
                showToast("📄 ATS Resume Score calculated!");
              }}
            >
              <UploadCloud className="w-8 h-8 text-brand-purple mx-auto mb-2" />
              <p className="text-xs font-bold text-slate-800">
                Upload PDF Resume or Click to Demo
              </p>
              <span className="text-[10px] text-slate-400">
                Standard single-page technical resume
              </span>
            </div>

            {resumeScanOpen && (
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>Overall ATS Match Score</span>
                  <span className="text-brand-purple font-extrabold text-sm">82 / 100</span>
                </div>
                <p className="text-slate-600 text-[11px]">
                  ✓ Found core keywords: Data Structures, SQL, REST APIs, Git.
                </p>
                <p className="text-amber-700 text-[11px]">
                  💡 Tip: Add quantified metrics (e.g. "reduced query latency by 25%") to your project bullet points.
                </p>
              </div>
            )}

            <button
              onClick={() => {
                setResumeModalOpen(false);
                goToStudentPortal("/register");
              }}
              className="w-full mt-3 bg-brand-purple hover:bg-brand-deep text-white py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
            >
              Scan Full Resume on Student Portal &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Toast Notification Container */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></div>
          <span>{toastMsg}</span>
        </div>
      )}

    </div>
  );
}

export default LandingPage;
