import React, { useState } from "react";

export function DailyTrendChart({ dark = true }) {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const accuracy = [72, 78, 85, 82, 90, 88, 92];
  const problems = [25, 30, 45, 35, 50, 40, 60];

  const width = 500;
  const height = 160;
  const paddingLeft = 32;
  const paddingRight = 16;
  const paddingTop = 16;
  const paddingBottom = 26;

  const chartW = width - paddingLeft - paddingRight;
  const chartH = height - paddingTop - paddingBottom;

  const minY = 20;
  const maxY = 100;

  const getX = (index) => paddingLeft + (index / (days.length - 1)) * chartW;
  const getY = (val) => paddingTop + chartH - ((val - minY) / (maxY - minY)) * chartH;

  const accuracyPoints = accuracy.map((val, i) => `${getX(i)},${getY(val)}`);
  const accuracyLine = `M ${accuracyPoints.join(" L ")}`;
  const accuracyArea = `M ${getX(0)},${paddingTop + chartH} L ${accuracyPoints.join(" L ")} L ${getX(days.length - 1)},${paddingTop + chartH} Z`;

  const problemsPoints = problems.map((val, i) => `${getX(i)},${getY(val)}`);
  const problemsLine = `M ${problemsPoints.join(" L ")}`;

  const yTicks = [20, 40, 60, 80, 100];

  const gridColor = dark ? "rgba(255, 255, 255, 0.08)" : "#E2E8F0";
  const axisTextColor = dark ? "#64748B" : "#94A3B8";
  const badgeBg = dark ? "bg-indigo-950/80 text-indigo-300 border-indigo-700/50" : "bg-indigo-50 text-[#5D3BEE] border-indigo-100";
  const labelHeaderColor = dark ? "text-slate-400" : "text-slate-600";

  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none">
      <div className="flex items-center justify-between mb-2 px-1">
        <div className={`flex items-center gap-4 text-[10px] font-semibold ${labelHeaderColor}`}>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#6366F1] inline-block shadow-xs"></span>
            Accuracy %
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-[#F59E0B] inline-block"></span>
            Problems Solved
          </span>
        </div>
        {hoveredIdx !== null && (
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border ${badgeBg}`}>
            {days[hoveredIdx]}: {accuracy[hoveredIdx]}% Acc • {problems[hoveredIdx]} Solved
          </span>
        )}
      </div>

      <div className="relative w-full h-40">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="purpleGradientDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {yTicks.map((tick) => {
            const y = getY(tick);
            return (
              <g key={tick}>
                <line
                  x1={paddingLeft}
                  y1={y}
                  x2={width - paddingRight}
                  y2={y}
                  stroke={gridColor}
                  strokeWidth="1"
                  strokeDasharray={tick === 20 ? "none" : "2 2"}
                />
                <text
                  x={paddingLeft - 6}
                  y={y + 3}
                  textAnchor="end"
                  fontSize="9"
                  fill={axisTextColor}
                  fontFamily="inherit"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          <path d={accuracyArea} fill="url(#purpleGradientDark)" />

          <path
            d={problemsLine}
            fill="none"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          <path
            d={accuracyLine}
            fill="none"
            stroke="#6366F1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {days.map((day, i) => {
            const x = getX(i);
            const isHovered = hoveredIdx === i;
            return (
              <g key={day}>
                <text
                  x={x}
                  y={height - 6}
                  textAnchor="middle"
                  fontSize="10"
                  fontWeight={isHovered ? "bold" : "500"}
                  fill={isHovered ? "#F8FAFC" : axisTextColor}
                  fontFamily="inherit"
                >
                  {day}
                </text>
                <circle
                  cx={x}
                  cy={getY(accuracy[i])}
                  r={isHovered ? 5 : 3.5}
                  fill={isHovered ? "#FFFFFF" : "#6366F1"}
                  stroke="#6366F1"
                  strokeWidth="2"
                  className="transition-all duration-150 cursor-pointer"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

export default DailyTrendChart;
