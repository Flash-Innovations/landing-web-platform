import React, { useState, useEffect } from "react";
import {
  Swords,
  Trophy,
  Zap,
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
  ChevronRight,
  Timer,
  Bot,
  AlertCircle,
  Menu,
  Lock,
  Flame,
  Users,
  Target,
  Terminal,
  ArrowRight
} from "lucide-react";
import { Footer } from "../components/common/Footer";
import { ReadinessRadarChart } from "../components/landing/ReadinessRadarChart";
import { ARENA_PORTAL_URL } from "../config/env";

export function LandingPage() {
  // Navigation & Interactive states
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Coding Arena preview state
  const [codeLanguage, setCodeLanguage] = useState("Python 3.11");
  const [codeRunState, setCodeRunState] = useState("idle"); // 'idle' | 'running' | 'success'

  // Modals & Announcements
  const [comingSoonModalOpen, setComingSoonModalOpen] = useState(false);
  const [comingSoonFeature, setComingSoonFeature] = useState("");

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

  // Code snippets by language for interactive arena preview
  const codeSnippets = {
    "Python 3.11": `def twoSum(nums: list[int], target: int) -> list[int]:
    lookup = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in lookup:
            return [lookup[complement], i]
        lookup[num] = i
    return []`,
    "C++ 20": `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> lookup;
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (lookup.count(complement)) {
            return {lookup[complement], i};
        }
        lookup[nums[i]] = i;
    }
    return {};
}`,
    "Java 17": `public int[] twoSum(int[] nums, int target) {
    Map<Integer, Integer> map = new HashMap<>();
    for (int i = 0; i < nums.length; i++) {
        int complement = target - nums[i];
        if (map.containsKey(complement)) {
            return new int[] { map.get(complement), i };
        }
        map.put(nums[i], i);
    }
    return new int[0];
}`,
    "JavaScript (ES6)": `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
  };

  const handleRunCode = () => {
    setCodeRunState("running");
    setTimeout(() => {
      setCodeRunState("success");
      showToast("Code executed against test suites: 3/3 Passed (38ms runtime)");
    }, 450);
  };

  const handleCareerSuiteClick = (featureName = "Flash Career Suite") => {
    setComingSoonFeature(featureName);
    setComingSoonModalOpen(true);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#09090D] text-slate-100 font-sans antialiased selection:bg-indigo-600 selection:text-white flex flex-col">

      {/* ================= TOP NOTICE BAR ================= */}
      <div className="bg-[#0D0C1D] text-white text-xs py-2 px-4 border-b border-indigo-950/80">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-400 text-slate-950 tracking-wider">
            SEASON 1 LIVE
          </span>
          <span className="text-slate-300 font-medium">
            1v1 Speed DSA Battles, Code Golf and Gladiator ELO Ladders are open.
          </span>
        </div>
      </div>

      {/* ================= REDESIGNED SLEEK STICKY NAVBAR ================= */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#09090D]/85 border-b border-white/10 transition-all">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo */}
            <a href="#hero" className="flex items-center gap-2.5 group">
              <div className="bg-white/10 border border-white/20 rounded-xl p-1.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src="/branding/flash-logo-compact.png"
                  alt="FLASH Mascot"
                  className="h-6 w-6 object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-black tracking-tight text-white flex items-center">
                  FLASH<span className="text-amber-400 text-lg leading-none">.</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-black tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/30">
                  ARENA
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-6 text-xs font-semibold text-slate-300">
              <a
                href="#modes"
                className="hover:text-white transition-colors py-1.5"
              >
                Game Modes
              </a>
              <a
                href="#battle-chamber"
                className="hover:text-white transition-colors py-1.5"
              >
                Battle Chamber
              </a>
              <a
                href="#tiers"
                className="hover:text-white transition-colors py-1.5"
              >
                Gladiator Tiers
              </a>
              <a
                href="#tournaments"
                className="hover:text-white transition-colors py-1.5"
              >
                Tournaments
              </a>
              <button
                onClick={() => handleCareerSuiteClick("Flash Career Suite")}
                className="hover:text-indigo-300 transition-colors flex items-center gap-1.5 text-indigo-300/90 py-1.5 cursor-pointer"
              >
                <span>Career Suite</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-black bg-indigo-950 text-indigo-300 border border-indigo-700/60 uppercase">
                  Coming Soon
                </span>
              </button>
              <a
                href="#faq"
                className="hover:text-white transition-colors py-1.5"
              >
                FAQ
              </a>
            </div>

            {/* Auth & Primary CTAs */}
            <div className="flex items-center gap-3">
              <a
                href={`${ARENA_PORTAL_URL}/login`}
                className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 transition-colors cursor-pointer"
              >
                Sign In
              </a>
              <a
                href={ARENA_PORTAL_URL}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 sm:px-5 py-2 rounded-full text-xs font-black shadow-glow-amber transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Swords className="w-3.5 h-3.5 text-slate-950" />
                <span>Enter 1v1 Arena</span>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>

          {/* Mobile dropdown nav */}
          {mobileNavOpen && (
            <div className="lg:hidden pt-4 pb-4 border-t border-white/10 mt-2 bg-[#121217]/95 backdrop-blur-md rounded-2xl px-4 shadow-2xl border border-white/10">
              <div className="flex flex-col space-y-3 text-sm font-medium text-slate-200">
                <a
                  href="#modes"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Game Modes
                </a>
                <a
                  href="#battle-chamber"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Battle Chamber Simulator
                </a>
                <a
                  href="#tiers"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  Gladiator Tiers & Profiles
                </a>
                <a
                  href="#tournaments"
                  onClick={() => setMobileNavOpen(false)}
                  className="py-2 hover:text-white"
                >
                  College Tournaments
                </a>
                <button
                  onClick={() => {
                    setMobileNavOpen(false);
                    handleCareerSuiteClick("Flash Career Suite");
                  }}
                  className="py-2 text-left hover:text-indigo-300 flex items-center justify-between"
                >
                  <span>Career Suite</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    Coming Soon
                  </span>
                </button>
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
      </header>

      {/* ================= HERO CONTENT SECTION (70% FOCUS) ================= */}
      <section className="hero-contour-bg relative text-white pt-12 pb-24 md:pb-32 overflow-hidden border-b border-white/5">
        <div id="hero" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">

          {/* Hero Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6">
            The 1v1 Coding Arena Where<br className="hidden sm:inline" />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-200 to-amber-500">
              Skills Settle The Score.
            </span>
          </h1>

          {/* Hero Subhead */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10">
            Step into the Battle Chamber. Challenge coders head-to-head in real-time DSA races, optimize byte length in Code Golf, climb official Gladiator ELO tiers, and dominate college tournament brackets.
          </p>

          {/* Primary Action Buttons */}
          <div className="max-w-2xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ARENA_PORTAL_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-950 px-8 py-4 rounded-full text-base sm:text-lg font-black shadow-glow-amber transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <Swords className="w-5 h-5 text-slate-950" />
              <span>Enter 1v1 Arena Queue</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={() => scrollToSection("battle-chamber")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-7 py-4 rounded-full text-base font-bold backdrop-blur-md transition-all cursor-pointer"
            >
              <Terminal className="w-5 h-5 text-indigo-300" />
              <span>Try Battle Simulator</span>
            </button>
          </div>

          {/* ================= INTERACTIVE SPLIT 1V1 BATTLE CHAMBER MOCKUP ================= */}
          <div className="mt-8 max-w-5xl mx-auto rounded-3xl bg-[#0F0E17] border border-white/15 shadow-2xl overflow-hidden text-left relative">
            
            {/* Battle Chamber Header Bar */}
            <div className="bg-[#171624] px-4 sm:px-6 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="text-xs font-black tracking-wider text-rose-400 uppercase">
                  LIVE 1V1 RANKED DUEL
                </span>
                <span className="text-slate-600 hidden sm:inline">•</span>
                <span className="text-xs text-slate-300 font-mono hidden sm:inline">
                  ROOM #8841 • TWO SUM II (ARRAY IS SORTED)
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded-md bg-amber-400/10 text-amber-300 border border-amber-400/30 font-bold flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  Stakes: +28 ELO / -22 ELO
                </span>
              </div>
            </div>

            {/* Split Screen Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
              
              {/* Left Side: Player 1 (You) */}
              <div className="p-5 sm:p-6 bg-[#0E0D18]/90 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-black text-indigo-300">
                        YOU
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        harshsage
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-black bg-amber-400 text-slate-950">
                          GLADIATOR IV
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">Rating: 1840 • Win Rate: 68.4%</div>
                    </div>
                  </div>
                  {/* Chess Clock Player 1 */}
                  <div className="bg-[#1C1A2E] border border-amber-400/40 rounded-xl px-3 py-1.5 text-right shadow-glow-amber">
                    <div className="text-[10px] uppercase font-bold text-amber-300 flex items-center gap-1 justify-end">
                      <Timer className="w-3 h-3 text-amber-400" /> Clock
                    </div>
                    <div className="text-base sm:text-lg font-mono font-black text-amber-400">
                      03:42
                    </div>
                  </div>
                </div>

                {/* Editor Code Preview */}
                <div className="bg-[#090810] border border-white/10 rounded-xl p-3 font-mono text-[11px] leading-relaxed text-indigo-200 mb-4 overflow-hidden shadow-inner">
                  <div className="text-slate-500 mb-1">// Optimal Two-Pointer Algorithm</div>
                  <div className="text-emerald-400">def twoSum(numbers: list[int], target: int):</div>
                  <div className="pl-4 text-slate-300">left, right = 0, len(numbers) - 1</div>
                  <div className="pl-4 text-slate-300">while left &lt; right:</div>
                  <div className="pl-8 text-slate-300">curr_sum = numbers[left] + numbers[right]</div>
                  <div className="pl-8 text-amber-300">if curr_sum == target: return [left + 1, right + 1]</div>
                  <div className="pl-8 text-indigo-300">elif curr_sum &lt; target: left += 1</div>
                  <div className="pl-8 text-indigo-300">else: right -= 1</div>
                </div>

                {/* Test Cases Passed Badge */}
                <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-xs font-bold text-emerald-300">5/5 Test Suites Accepted</div>
                      <div className="text-[10px] text-emerald-400/80 font-mono">Runtime: 42ms • Memory: 14.8MB</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500 text-slate-950 uppercase">
                    100% AC
                  </span>
                </div>
              </div>

              {/* Right Side: Player 2 (Challenger) */}
              <div className="p-5 sm:p-6 bg-[#0E0D18]/90 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-rose-600 to-rose-400 p-0.5 shadow-md">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs font-black text-rose-300">
                        VS
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        rival_coder_99
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-black bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
                          GLADIATOR IV
                        </span>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">Rating: 1812 • Win Rate: 64.1%</div>
                    </div>
                  </div>
                  {/* Chess Clock Player 2 */}
                  <div className="bg-[#1C1A2E] border border-rose-500/40 rounded-xl px-3 py-1.5 text-right">
                    <div className="text-[10px] uppercase font-bold text-rose-300 flex items-center gap-1 justify-end">
                      <Timer className="w-3 h-3 text-rose-400" /> Clock
                    </div>
                    <div className="text-base sm:text-lg font-mono font-black text-rose-400">
                      02:18
                    </div>
                  </div>
                </div>

                {/* Opponent Code Stream (Blurred / Obscured) */}
                <div className="bg-[#090810] border border-white/10 rounded-xl p-3 font-mono text-[11px] leading-relaxed text-slate-400 mb-4 overflow-hidden relative select-none">
                  <div className="absolute inset-0 backdrop-blur-[2px] bg-slate-950/40 flex items-center justify-center z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/90 border border-white/20 text-xs font-mono text-indigo-200 flex items-center gap-1.5 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-amber-400 animate-spin" />
                      Opponent typing at 78 WPM...
                    </span>
                  </div>
                  <div className="text-slate-600">// Opponent Keystream Synced</div>
                  <div>vector&lt;int&gt; twoSum(vector&lt;int&gt;&amp; numbers, int target) &#123;</div>
                  <div className="pl-4">int i = 0, j = numbers.size() - 1;</div>
                  <div className="pl-4">while(i &lt; j) &#123;</div>
                  <div className="pl-8">if(numbers[i] + numbers[j] == target) return &#123;i+1, j+1&#125;;</div>
                  <div className="pl-4">&#125;</div>
                </div>

                {/* Challenger Test Cases Status */}
                <div className="bg-amber-950/30 border border-amber-500/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="text-xs font-bold text-amber-300">3/5 Test Suites Accepted</div>
                      <div className="text-[10px] text-rose-400 font-mono">Test #4: Time Limit Exceeded (TLE)</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                    Revision #3
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Match Footer */}
            <div className="bg-[#12111E] px-6 py-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Anti-Cheat Status: Hardware Webcam Active • Browser Window Locked</span>
              </div>
              <a
                href={ARENA_PORTAL_URL}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                Launch Live Matchmaker <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 1: ESPORTS BATTLE MODES ================= */}
      <section id="modes" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
            COMPETITIVE FORMATS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Four Battle Modes Engineered for Pure Adrenaline.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you thrive on sub-second algorithm speed, code compression, or knockout tournaments, Flash Arena has a competitive format built for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Mode 1: Speed DSA */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 hover:border-amber-400/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 transition-transform">
              <Timer className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
              PRIMARY RANKED
            </div>
            <h3 className="text-xl font-bold text-white mb-2">1v1 Speed DSA Duels</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Dual chess clocks tick down in real time. Solve algorithm problems and hit 100% test case pass before your rival hits submit.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 font-mono">
              <Check className="w-3.5 h-3.5 text-amber-400" /> Rated ELO Stakes (+/- 25)
            </div>
          </div>

          {/* Mode 2: Code Golf */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 hover:border-indigo-400/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-indigo-400 uppercase tracking-wider mb-1">
              BYTE OPTIMIZATION
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Code Golf Battles</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Correctness is merely table stakes. Optimize your code down to the absolute shortest byte footprint to conquer the leaderboard.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 font-mono">
              <Check className="w-3.5 h-3.5 text-indigo-400" /> Byte-Count Telemetry
            </div>
          </div>

          {/* Mode 3: Sudden Death & AI Rival */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 hover:border-rose-400/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-400/30 flex items-center justify-center text-rose-400 mb-5 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-rose-400 uppercase tracking-wider mb-1">
              SOLO & TRAINING
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sudden Death & AI Rivals</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Single wrong submission triggers immediate defeat. Warm up against synthetic AI grandmasters trained on top competitive programming profiles.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 font-mono">
              <Check className="w-3.5 h-3.5 text-rose-400" /> Instant Match Generation
            </div>
          </div>

          {/* Mode 4: Rematch Handshake */}
          <div className="glass-card rounded-3xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-emerald-400 uppercase tracking-wider mb-1">
              RIVALRY PROTOCOL
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Two-Way Rematch Handshake</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Settle the rivalry on the spot. Mutual consent rematch triggers immediate room reset with a fresh problem, or safe return to lobby.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300 font-mono">
              <Check className="w-3.5 h-3.5 text-emerald-400" /> Zero Lag Room Swapping
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 2: INTERACTIVE BATTLE CHAMBER SIMULATOR ================= */}
      <section id="battle-chamber" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs font-black uppercase tracking-wider mb-4">
            LIVE SIMULATOR
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Test Your Speed in the Interactive Code Sandbox.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Experience sub-second compiler execution across Python, C++, Java, and JavaScript before you step into live ranked queues.
          </p>
        </div>

        {/* Interactive Editor Container */}
        <div className="max-w-4xl mx-auto glass-card rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
          
          {/* Editor Header */}
          <div className="bg-[#151422] px-5 py-3 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-bold text-white">Problem: Two Sum (Hash Map Optimization)</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                EASY
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1.5 bg-[#0A0912] p-1 rounded-xl border border-white/10">
              {Object.keys(codeSnippets).map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCodeLanguage(lang);
                    setCodeRunState("idle");
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                    codeLanguage === lang
                      ? "bg-amber-400 text-slate-950 font-bold shadow-xs"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Code Body */}
          <div className="p-6 bg-[#0B0A14] font-mono text-xs sm:text-sm text-slate-200 overflow-x-auto min-h-[220px]">
            <pre className="leading-relaxed">
              <code>{codeSnippets[codeLanguage]}</code>
            </pre>
          </div>

          {/* Execution Bar */}
          <div className="bg-[#141320] px-6 py-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-slate-400">Target Time Limit: &lt; 1000ms</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-400">Memory Limit: 256MB</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRunCode}
                disabled={codeRunState === "running"}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-black shadow-glow-purple transition-all cursor-pointer active:scale-95 disabled:opacity-50"
              >
                {codeRunState === "running" ? (
                  <>
                    <Zap className="w-4 h-4 animate-spin text-amber-400" />
                    <span>Compiling in Sandbox...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-white" />
                    <span>Run & Verify Test Suites</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Results Output (Simulated) */}
          {codeRunState === "success" && (
            <div className="bg-[#0D1512] px-6 py-4 border-t border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>3/3 Test Cases Accepted (Runtime: 38ms • Beats 94.2% of submissions)</span>
              </div>
              <a
                href={ARENA_PORTAL_URL}
                className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
              >
                Challenge Live Opponent in Arena <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

        </div>
      </section>

      {/* ================= SECTION 3: GLADIATOR ELO HIERARCHY & VANITY PORTFOLIO ================= */}
      <section id="tiers" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: ELO Tiers Overview */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-black uppercase tracking-wider mb-4">
              RANKED HIERARCHY
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Six Competitive Tiers. One Permanent Esports Profile.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              Every match updates your official rating according to FIDE-standard ELO formulas calibrated for speed and accuracy. Your achievements live forever on your canonical vanity profile URL.
            </p>

            {/* Tiers List */}
            <div className="space-y-3">
              
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121217] border border-white/10 hover:border-amber-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-400 font-black text-xs flex items-center justify-center">
                    VI
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-2">
                      Grand Champion <Crown className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <div className="text-[11px] text-slate-400">Top 0.5% of Competitive Programmers</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-amber-400">2200+ ELO</div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121217] border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 font-black text-xs flex items-center justify-center">
                    V
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Diamond Gladiator</div>
                    <div className="text-[11px] text-slate-400">Advanced DSA & Algorithmic Optimization</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-indigo-300">1900 - 2199 ELO</div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121217] border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-yellow-500/20 text-yellow-400 font-black text-xs flex items-center justify-center">
                    IV
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Gold Gladiator</div>
                    <div className="text-[11px] text-slate-400">Consistent Problem Solving Under Pressure</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-yellow-300">1600 - 1899 ELO</div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#121217] border border-white/10 hover:border-indigo-400/40 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-500/20 text-slate-300 font-black text-xs flex items-center justify-center">
                    I-III
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Silver, Bronze & Recruit</div>
                    <div className="text-[11px] text-slate-400">Foundations, Syntax Mastery, and Speed Building</div>
                  </div>
                </div>
                <div className="text-xs font-mono font-bold text-slate-400">0 - 1599 ELO</div>
              </div>

            </div>
          </div>

          {/* Right Column: Vanity Profile Mockup Card */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/15 relative overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  flashedu.in/u/johndoe
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                  CANONICAL PROFILE
                </span>
              </div>

              {/* Profile Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-indigo-600 p-0.5 shadow-glow-amber">
                  <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-xl font-black text-white">
                    JD
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    John Doe
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <div className="text-xs text-indigo-300 font-mono">@johndoe • Senior Competitor</div>
                </div>
              </div>

              {/* Combat Card Telemetry */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                <div className="bg-[#0C0B14] rounded-2xl p-3 border border-white/10 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">ELO Rating</div>
                  <div className="text-xl font-black text-amber-400 font-mono">1840</div>
                  <div className="text-[9px] text-amber-300/80">Tier IV Gold</div>
                </div>
                <div className="bg-[#0C0B14] rounded-2xl p-3 border border-white/10 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Win Rate</div>
                  <div className="text-xl font-black text-emerald-400 font-mono">68.4%</div>
                  <div className="text-[9px] text-emerald-300/80">97W - 45L</div>
                </div>
                <div className="bg-[#0C0B14] rounded-2xl p-3 border border-white/10 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">1v1 Duels</div>
                  <div className="text-xl font-black text-indigo-300 font-mono">142</div>
                  <div className="text-[9px] text-indigo-300/80">Ranked Matches</div>
                </div>
                <div className="bg-[#0C0B14] rounded-2xl p-3 border border-white/10 text-center">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Contest Medals</div>
                  <div className="text-xl font-black text-amber-300 font-mono">12</div>
                  <div className="text-[9px] text-amber-300/80">Top 3 Finishes</div>
                </div>
              </div>

              {/* Action Banner */}
              <div className="bg-[#12111F] rounded-2xl p-4 border border-indigo-500/20 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-white">Share Your Combat Card</div>
                  <div className="text-[11px] text-slate-400">Put your verified battle stats on your resume & LinkedIn.</div>
                </div>
                <a
                  href={`${ARENA_PORTAL_URL}`}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-4 py-2 rounded-xl text-xs font-black shadow-glow-amber transition-all cursor-pointer whitespace-nowrap"
                >
                  Claim Handle
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: CAMPUS TOURNAMENT STUDIO ================= */}
      <section id="tournaments" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs font-black uppercase tracking-wider mb-4">
            CAMPUS TOURNAMENTS
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Powering Inter-College Hackathons & Live Esports Arenas.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Host high-stakes coding tournaments on campus with automated knockout brackets, anti-cheat surveillance, and auditorium projector displays.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-cyan-400/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-5">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-cyan-400 uppercase tracking-wider mb-1">
              ROUND 1: FILTERING
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Massive Screening Round</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Evaluate 1,000+ candidates simultaneously across timed MCQ screening, CS fundamentals, and aptitude with instant automated scoring.
            </p>
            <div className="text-xs text-slate-300 font-mono">
              Auto-ranks top 16 / top 32 finalists.
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-amber-400/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-5">
              <Trophy className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-amber-400 uppercase tracking-wider mb-1">
              ROUND 2: KNOCKOUT
            </div>
            <h3 className="text-xl font-bold text-white mb-2">1v1 Knockout Bracket</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Quarterfinals, Semifinals, and Finals play out live on stage. Coders battle head-to-head on matching problem sets with live test metrics.
            </p>
            <div className="text-xs text-slate-300 font-mono">
              Double-elimination or sudden death.
            </div>
          </div>

          <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-indigo-400/40 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="text-xs font-black text-indigo-400 uppercase tracking-wider mb-1">
              AUDITORIUM SPECTATOR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Live Projector Stream</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Project real-time typing diffs, animated test case verifications, and crowd-cheering sound effects directly onto auditorium projector screens.
            </p>
            <div className="text-xs text-slate-300 font-mono">
              Zero lag spectator feed for hosts.
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: STUDENT CAREER SUITE TEASER (30% FOCUS - COMING SOON) ================= */}
      <section id="career-suite" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/5 relative">
        
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/60 text-indigo-300 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Lock className="w-3.5 h-3.5 text-amber-400" />
              <span>FLASH CAREER SUITE • COMING SOON</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
              Next-Generation Placement Intelligence.
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              While you compete in the Arena, our career readiness algorithms are training to prepare you for Tier-1 placements.
            </p>
          </div>

          {/* Three Placement Features */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            
            {/* Feature 1: Spoken Mock Interviews */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5">
                  <Mic className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">AI Spoken Mock Interviews</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    Preview
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Interactive voice agent conducting real-time technical and HR behavioral interviews. Evaluates your spoken communication, problem explanation, and edge case thinking.
                </p>
                <div className="bg-[#09090D] p-3 rounded-xl border border-white/10 text-xs font-mono text-slate-300 mb-4">
                  <div className="text-indigo-400 font-bold mb-1">// Real-time Rubric Evaluation</div>
                  <div className="text-slate-400">• Approach Clarity: 88/100</div>
                  <div className="text-slate-400">• Time Complexity Analysis: 92/100</div>
                </div>
              </div>

              <button
                onClick={() => handleCareerSuiteClick("AI Spoken Mock Interviews")}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Feature Launching Soon</span>
              </button>
            </div>

            {/* Feature 2: ATS Resume Scanner */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">ATS Resume Optimizer</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    Preview
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Parse and benchmark your resume against real Tier-1 job descriptions from Google, Microsoft, and Amazon. Detect missing keywords and formatting red flags.
                </p>
                <div className="bg-[#09090D] p-3 rounded-xl border border-white/10 text-xs font-mono text-slate-300 mb-4">
                  <div className="text-emerald-400 font-bold mb-1">// ATS Score: 87/100</div>
                  <div className="text-slate-400">• High Match: DSA, Distributed Systems</div>
                  <div className="text-amber-400">• Recommended: Add CI/CD projects</div>
                </div>
              </div>

              <button
                onClick={() => handleCareerSuiteClick("ATS Resume Optimizer")}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Feature Launching Soon</span>
              </button>
            </div>

            {/* Feature 3: Readiness Radar Chart */}
            <div className="glass-card rounded-3xl p-7 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center text-indigo-400 mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Readiness Radar</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-950 text-indigo-300 border border-indigo-700/60">
                    Telemetry
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Multi-axial capability decomposition across Quantitative, Logical, Verbal, DSA, Core CS, and Assessment Speed.
                </p>
                {/* Embedded Dark Theme Radar Chart */}
                <div className="bg-[#09090D] p-3 rounded-2xl border border-white/10 flex items-center justify-center mb-4">
                  <ReadinessRadarChart dark={true} />
                </div>
              </div>

              <button
                onClick={() => handleCareerSuiteClick("Placement Readiness Radar")}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Feature Launching Soon</span>
              </button>
            </div>

          </div>

          {/* Career Suite Announcement Box */}
          <div className="max-w-3xl mx-auto rounded-2xl bg-[#12111D] border border-indigo-500/30 p-6 text-center">
            <h4 className="text-base font-bold text-white mb-2">
              Want priority day-one access to the Flash Career Suite?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
              All active Flash Arena competitors receive instant priority onboarding the moment the Career Suite opens.
            </p>
            <a
              href={ARENA_PORTAL_URL}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-glow-purple transition-all cursor-pointer"
            >
              <span>Build Your Arena Ranking Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: FAQ ================= */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-b border-white/5">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-slate-300 text-xs font-black uppercase tracking-wider mb-4">
            QUESTIONS & ANSWERS
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions.
          </h2>
          <p className="text-slate-400 text-base">
            Everything you need to know about 1v1 battles, ELO calculations, anti-cheat, and tournaments.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          
          {[
            {
              q: "How does 1v1 Real-time matchmaking work?",
              a: "When you enter the queue, our matchmaking engine pairs you with a competitor within +/- 100 ELO points. Both participants enter a synchronized Battle Chamber where chess clocks start running, and submissions are benchmarked against live hidden test suites."
            },
            {
              q: "How is ELO calculated in Flash Arena?",
              a: "Flash Arena utilizes a calibrated FIDE ELO implementation that factors in opponent rating, submission time delta, and test case pass efficiency. Winning against a higher-ranked player yields higher ELO gains."
            },
            {
              q: "What anti-cheat protections are enforced during ranked duels?",
              a: "Our Battle Chamber enforces active browser tab focus lock, copy-paste telemetry, hardware webcam verification options, and keystroke rhythm analysis to ensure fair competition."
            },
            {
              q: "Can colleges and student clubs host tournaments on Flash Arena?",
              a: "Yes. Our Contest Studio supports multi-stage tournaments with round 1 aptitude/MCQ screening and round 2 1v1 knockout brackets, along with an auditorium spectator mode for projector displays."
            },
            {
              q: "When will the Flash Career Suite launch?",
              a: "The Flash Career Suite (AI Spoken Mock Interviews, ATS Resume Scanner, and Placement Readiness Analytics) is currently in private preview. All active Arena users will receive priority day-one access upon launch."
            },
            {
              q: "Can I use Flash Arena completely free?",
              a: "Yes. You can participate in unrated duels, daily ranked matches, and access core DSA problems without requiring any credit card."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="font-bold text-white text-sm sm:text-base">{item.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-amber-400 transition-transform ${
                    activeFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                  {item.a}
                </div>
              )}
            </div>
          ))}

        </div>
      </section>

      {/* ================= CAREER SUITE COMING SOON MODAL ================= */}
      {comingSoonModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl text-center relative">
            <button
              onClick={() => setComingSoonModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center mx-auto mb-4">
              <Lock className="w-7 h-7 text-amber-400" />
            </div>

            <span className="px-3 py-1 rounded-full bg-indigo-950 text-indigo-300 border border-indigo-700/60 text-xs font-black uppercase tracking-wider inline-block mb-3">
              COMING SOON
            </span>

            <h3 className="text-xl font-bold text-white mb-2">
              {comingSoonFeature || "Flash Career Suite"}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
              The Flash Career Suite is currently in final testing with Tier-1 hiring partners. It will launch with AI Spoken Mock Interviews, ATS Resume Optimization, and full Placement Analytics.
            </p>

            <div className="bg-[#0C0B14] p-3.5 rounded-2xl border border-white/10 text-xs text-amber-300 font-medium mb-6">
              In the meantime, build your competitive pedigree and rating on Flash Arena!
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={ARENA_PORTAL_URL}
                className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm shadow-glow-amber transition-all cursor-pointer block"
              >
                Enter Flash Arena
              </a>
              <button
                onClick={() => setComingSoonModalOpen(false)}
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-[#171624] text-white px-4 py-3 rounded-2xl border border-amber-400/40 shadow-2xl flex items-center gap-3">
          <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span className="text-xs font-medium">{toastMsg}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default LandingPage;
