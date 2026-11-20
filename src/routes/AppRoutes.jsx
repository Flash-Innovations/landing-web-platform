import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ARENA_PORTAL_URL } from "../config/env";

const PrivacyPolicyPage = lazy(() => import("../pages/legal/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("../pages/legal/TermsOfServicePage").then(m => ({ default: m.TermsOfServicePage })));
const RefundPolicyPage = lazy(() => import("../pages/legal/RefundPolicyPage").then(m => ({ default: m.RefundPolicyPage })));
const ContactUsPage = lazy(() => import("../pages/legal/ContactUsPage").then(m => ({ default: m.ContactUsPage })));
const DataSecurityPage = lazy(() => import("../pages/legal/DataSecurityPage").then(m => ({ default: m.DataSecurityPage })));
const PublicProfilePage = lazy(() => import("../pages/PublicProfilePage").then(m => ({ default: m.PublicProfilePage })));

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
    </div>
  );
}

function PortalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-300">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
        <p className="text-xs font-mono font-medium text-slate-400">Entering Flash Arena Platform...</p>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Native Public Candidate Career Portfolio & Arena Gladiator Showcase */}
        <Route path="/u/:username" element={<PublicProfilePage />} />
        
        {/* Arena Platform Auth & Launch Redirect Routes */}
        <Route path="/login" element={<PortalRedirect to={`${ARENA_PORTAL_URL}`} />} />
        <Route path="/register" element={<PortalRedirect to={`${ARENA_PORTAL_URL}`} />} />
        <Route path="/onboarding" element={<PortalRedirect to={`${ARENA_PORTAL_URL}`} />} />
        <Route path="/pricing" element={<LandingPage defaultScrollTo="pricing" />} />

        {/* Legal & Compliance Pages (Razorpay Mandate) */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/refund" element={<RefundPolicyPage />} />
        <Route path="/cancellation-refund" element={<RefundPolicyPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/security" element={<DataSecurityPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
