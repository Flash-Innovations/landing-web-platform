import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Home, Zap } from "lucide-react";
import { Button } from "../components/common/Button";

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center text-slate-100">
      <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
        <Zap className="w-8 h-8" />
      </div>
      <h1 className="text-5xl font-black text-white tracking-tight">404</h1>
      <h2 className="text-xl font-bold text-slate-300 mt-2">Page Not Found</h2>
      <p className="text-xs text-slate-400 max-w-md mt-2 mb-8">
        The page or showcase module you are looking for does not exist or has been relocated.
      </p>
      <div className="flex gap-3">
        <Button
          variant="outline"
          icon={ArrowLeft}
          onClick={() => navigate(-1)}
          className="border-slate-800 text-slate-300 hover:bg-slate-900"
        >
          Go Back
        </Button>
        <Button
          variant="primary"
          icon={Home}
          onClick={() => navigate("/")}
        >
          Return Home
        </Button>
      </div>
    </div>
  );
}
