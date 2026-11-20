import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Star,
  GitFork,
  ExternalLink,
  FolderGit2,
  Layers,
  FileText,
  Code,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Swords,
  Trophy,
  Flame,
  Copy,
  Check,
  Share2,
  TrendingUp
} from "lucide-react";
import { B2C_API_URL, ARENA_PORTAL_URL } from "../config/env";

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function PublicProfilePage() {
  const { username } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError("");

    const targetUrl = `${B2C_API_URL}/api/b2c/auth/public/${encodeURIComponent(username || "")}`;

    fetch(targetUrl)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        if (data && data.success && data.profile) {
          setProfile(data.profile);
        } else {
          setError(data?.message || `Candidate profile "@${username}" not found or set to private.`);
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err?.message || "Failed to connect to profile service.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono font-medium text-slate-400">Loading candidate profile & arena records...</p>
        </div>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white">Profile Unavailable</h1>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              {error || `The candidate profile for "/u/${username}" is currently private or does not exist.`}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
            >
              Back to Home
            </Link>
            <a
              href={ARENA_PORTAL_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-colors"
            >
              Enter Flash Arena <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  const arenaStats = profile.arena || {
    rating: 1200,
    tierName: "Combatant",
    tierBadge: "Tier II",
    tierColor: "#38bdf8",
    matchesPlayed: 0,
    matchesWon: 0,
    winRate: 0,
    arenaProfileUrl: `${ARENA_PORTAL_URL}/u/${username}`
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header Navigation */}
      <header className="h-16 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between sticky top-0 z-30">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-black text-sm shadow-md">
            F
          </div>
          <div className="flex items-center gap-2">
            <span className="font-black text-sm tracking-tight text-white">FLASH</span>
            <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded-md bg-indigo-950/80 text-indigo-300 border border-indigo-800/60">
              Verified Showcase
            </span>
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={ARENA_PORTAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider transition-colors shadow-sm"
          >
            <Swords className="w-3.5 h-3.5" />
            <span>Enter Flash Arena</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Profile Card Hero */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
            <div className="flex items-center gap-4">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover shadow-lg border-2 border-indigo-500/40 bg-slate-800"
                />
              ) : (
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 flex items-center justify-center text-white text-2xl font-black shadow-lg border-2 border-indigo-400/40">
                  {(profile.name || "C").charAt(0).toUpperCase()}
                </div>
              )}
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {profile.name}
                  </h1>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/60">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> Verified Candidate
                  </span>
                </div>
                <p className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  {profile.branch && profile.degree && profile.branch.toLowerCase() !== profile.degree.toLowerCase()
                    ? `${profile.degree} • ${profile.branch}`
                    : (profile.branch || profile.degree || "Computer Science Candidate")}
                  {profile.graduationYear && (
                    <span className="text-indigo-400 font-mono font-semibold ml-1">
                      (Class of {profile.graduationYear})
                    </span>
                  )}
                </p>
                <div className="text-[11px] font-mono text-slate-500">
                  flashedu.in/u/{username}
                </div>
              </div>
            </div>

            {/* Social & Action Links */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-bold border border-slate-700 transition-colors cursor-pointer"
                title="Copy shareable profile link"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? "Link Copied!" : "Share"}</span>
              </button>

              {profile.github && (() => {
                const cleanGithub = String(profile.github)
                  .replace(/^(https?:\/\/)?(www\.)?github\.com\//i, "")
                  .replace(/^@+/, "")
                  .replace(/\/+$/, "")
                  .trim();
                return (
                  <a
                    href={`https://github.com/${cleanGithub}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" /> GitHub
                  </a>
                );
              })()}

              {profile.linkedin && (() => {
                const cleanLinkedin = String(profile.linkedin)
                  .replace(/^(https?:\/\/)?(www\.)?linkedin\.com\/in\//i, "")
                  .replace(/^(https?:\/\/)?(www\.)?linkedin\.com\//i, "")
                  .replace(/^@+/, "")
                  .replace(/\/+$/, "")
                  .trim();
                return (
                  <a
                    href={`https://linkedin.com/in/${cleanLinkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 text-blue-300 border border-blue-800/60 text-xs font-bold transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                );
              })()}

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" /> Resume
                </a>
              )}
            </div>
          </div>

          {/* Bio / Elevator Pitch */}
          {profile.bio && (
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-4 border-t border-slate-800">
              {profile.bio}
            </p>
          )}
        </div>

        {/* FLASH ARENA GLADIATOR COMBAT RECORD CARD */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 rounded-3xl border border-indigo-900/40 p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />

          {/* Card Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Swords className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
                  Flash Arena Gladiator Record
                </h2>
                <p className="text-[11px] text-slate-400 font-sans">
                  Real-time competitive 1v1 speed DSA esports battle telemetry
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-700/60 flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5 text-amber-400" />
                <span>{arenaStats.tierName || "Combatant"}</span>
                <span className="text-[10px] text-indigo-400">({arenaStats.tierBadge || "Tier II"})</span>
              </span>
            </div>
          </div>

          {/* Combat Statistics Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* ELO Rating */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase text-slate-400">Gladiator Rating</span>
              <div className="text-2xl font-black font-mono text-white flex items-center gap-1.5">
                <span>{arenaStats.rating || 1200}</span>
                <span className="text-[10px] text-amber-400 font-bold uppercase">ELO</span>
              </div>
              <p className="text-[10px] text-slate-500 font-mono">Ranked Matchmaking</p>
            </div>

            {/* Battles Played */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase text-slate-400">1v1 Duels Fought</span>
              <div className="text-2xl font-black font-mono text-white">
                {arenaStats.matchesPlayed || 0}
              </div>
              <p className="text-[10px] text-slate-500 font-mono">Total Encounters</p>
            </div>

            {/* Victories */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase text-slate-400">Victories</span>
              <div className="text-2xl font-black font-mono text-emerald-400">
                {arenaStats.matchesWon || 0}
              </div>
              <p className="text-[10px] text-emerald-500/80 font-mono">Matches Won</p>
            </div>

            {/* Win Rate */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1">
              <span className="text-[11px] font-mono uppercase text-slate-400">Win Rate</span>
              <div className="text-2xl font-black font-mono text-indigo-300">
                {arenaStats.winRate || 0}%
              </div>
              <p className="text-[10px] text-indigo-400/80 font-mono">Combat Accuracy</p>
            </div>
          </div>

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <a
              href={`${ARENA_PORTAL_URL}/u/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
            >
              <span>View Full Arena Match History & Combat Passport</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <a
              href={`${ARENA_PORTAL_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg transition-all"
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Challenge in Flash Arena</span>
            </a>
          </div>
        </div>

        {/* Verified Technical Skills */}
        {profile.skills && profile.skills.length > 0 && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Verified Technical Skills</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-semibold text-slate-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Featured Showcase Projects */}
        {profile.projects && profile.projects.length > 0 && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-indigo-400" />
              <span>Featured Showcase Projects</span>
            </h2>
            <div className="space-y-3">
              {profile.projects.map((proj, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl border border-slate-800 hover:border-slate-700 bg-slate-950/60 hover:bg-slate-950 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-md bg-indigo-950 text-indigo-300 font-mono text-[10px] font-bold flex items-center justify-center shrink-0 border border-indigo-800/60">
                        #{idx + 1}
                      </span>
                      <a
                        href={proj.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-xs sm:text-sm text-white hover:text-indigo-400 transition-colors truncate flex items-center gap-1"
                      >
                        {proj.name}
                        <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                      </a>
                      {proj.primaryLanguage && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-900 border border-slate-800 text-slate-300">
                          {proj.primaryLanguage}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {proj.description || "Showcase project repository."}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono font-medium text-slate-400 shrink-0">
                    <span className="flex items-center gap-1" title="Stars">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      {proj.stars || 0}
                    </span>
                    <span className="flex items-center gap-1" title="Forks">
                      <GitFork className="w-3.5 h-3.5 text-slate-400" />
                      {proj.forks || 0}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competitive Coding Profiles (LeetCode / Codeforces) */}
        {profile.codingProfiles && profile.codingProfiles.length > 0 && (
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl space-y-4">
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span>External Competitive Programming Profiles</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.codingProfiles.map((cp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-md bg-indigo-600 text-white font-bold text-[10px] flex items-center justify-center">
                        {cp.platform === "LEETCODE" ? "LC" : "CF"}
                      </span>
                      <a
                        href={cp.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-xs text-white hover:text-indigo-400 flex items-center gap-1"
                      >
                        {cp.username}
                        <ExternalLink className="w-2.5 h-2.5 text-slate-500" />
                      </a>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">
                      {cp.platform}
                    </span>
                  </div>

                  {cp.stats && (
                    <div className="pt-2 border-t border-slate-800/80 font-mono text-xs space-y-1.5">
                      {cp.platform === "LEETCODE" && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-sans text-xs">Problems Solved</span>
                            <span className="font-bold text-white">{cp.stats.problemsSolved ?? cp.stats.totalSolved ?? 0}</span>
                          </div>
                          {(cp.stats.globalRank || cp.stats.ranking) && (
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span>Global Rank</span>
                              <span className="font-semibold text-slate-300">#{Number(cp.stats.globalRank || cp.stats.ranking).toLocaleString()}</span>
                            </div>
                          )}
                          {(cp.stats.currentRating || cp.stats.rating) && (
                            <div className="flex items-center justify-between text-[11px] text-slate-400">
                              <span>Contest Rating</span>
                              <span className="font-bold text-indigo-400">{cp.stats.currentRating || cp.stats.rating}</span>
                            </div>
                          )}
                        </>
                      )}
                      {cp.platform === "CODEFORCES" && (
                        <>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400 font-sans text-xs">Rating</span>
                            <span className="font-bold text-indigo-400">{cp.stats.rating || 0}</span>
                          </div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400">
                            <span>Rank</span>
                            <span className="font-semibold capitalize text-slate-300">{cp.stats.rank || "Unrated"}</span>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-6 text-xs text-slate-500 space-y-1">
          <p>Verified Candidate Career Profile • Powered by FLASH Innovations</p>
          <p>© {new Date().getFullYear()} FLASH Innovations. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default PublicProfilePage;
