import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { STUDENT_PORTAL_URL } from "../config/env";

const PrivacyPolicyPage = lazy(() => import("../pages/legal/PrivacyPolicyPage").then(m => ({ default: m.PrivacyPolicyPage })));
const TermsOfServicePage = lazy(() => import("../pages/legal/TermsOfServicePage").then(m => ({ default: m.TermsOfServicePage })));
const DataSecurityPage = lazy(() => import("../pages/legal/DataSecurityPage").then(m => ({ default: m.DataSecurityPage })));

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-400">
      <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
    </div>
  );
}

function PortalRedirect({ to }) {
  useEffect(() => {
    window.location.href = to;
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-indigo-600 border-t-transparent animate-spin" />
        <p className="text-xs font-semibold text-slate-700">Redirecting to Flash Student Portal...</p>
      </div>
    </div>
  );
}

export function AppRoutes() {
  return (
    <Suspense fallback={<RouteLoadingFallback />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Student Portal Onboarding & Auth Redirect Routes */}
        <Route path="/login" element={<PortalRedirect to={`${STUDENT_PORTAL_URL}/login`} />} />
        <Route path="/register" element={<PortalRedirect to={`${STUDENT_PORTAL_URL}/register`} />} />
        <Route path="/onboarding" element={<PortalRedirect to={`${STUDENT_PORTAL_URL}/register`} />} />
        <Route path="/pricing" element={<PortalRedirect to={`${STUDENT_PORTAL_URL}/pricing`} />} />

        {/* Legal Pages */}
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/security" element={<DataSecurityPage />} />
        
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
