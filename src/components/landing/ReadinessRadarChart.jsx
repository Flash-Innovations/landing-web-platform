import React, { useState } from "react";

export function ReadinessRadarChart({ dark = true }) {
  const [activeMetric, setActiveMetric] = useState(null);

  const metrics = [
    { label: "Quantitative", score: 92, benchmark: 75 },
    { label: "Logical Reasoning", score: 85, benchmark: 75 },
    { label: "Verbal Ability", score: 80, benchmark: 70 },
    { label: "DSA Coding", score: 88, benchmark: 75 },
    { label: "Core CS MCQs", score: 84, benchmark: 70 },
    { label: "Mock Speed", score: 86, benchmark: 70 },
  ];

  const totalAxes = metrics.length;
  const size = 300;
  const center = size / 2;
  const maxRadius = 95;

  const getAngle = (index) => (index * 2 * Math.PI) / totalAxes - Math.PI / 2;

  const getCoordinates = (index, value) => {
    const angle = getAngle(index);
    const radius = (value / 100) * maxRadius;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y };
  };

  const scorePoints = metrics
    .map((m, i) => {
      const { x, y } = getCoordinates(i, m.score);
      return `${x},${y}`;
    })
    .join(" ");

  const benchmarkPoints = metrics
    .map((m, i) => {
      const { x, y } = getCoordinates(i, m.benchmark);
      return `${x},${y}`;
    })
    .join(" ");

  const levels = [40, 60, 80, 100];
  const gridStroke = dark ? "rgba(255, 255, 255, 0.12)" : "#E2E8F0";
  const labelColor = dark ? "#94A3B8" : "#475569";
  const activeLabelColor = dark ? "#A5B4FC" : "#5D3BEE";
  const legendColor = dark ? "text-slate-400" : "text-slate-600";

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full max-w-[300px] h-[240px] flex items-center justify-center">
        <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full overflow-visible">
          {levels.map((lvl) => {
            const levelPoints = metrics
              .map((_, i) => {
                const { x, y } = getCoordinates(i, lvl);
                return `${x},${y}`;
              })
              .join(" ");
            return (
              <polygon
                key={lvl}
                points={levelPoints}
                fill="none"
                stroke={gridStroke}
                strokeWidth="1"
                strokeDasharray={lvl === 100 ? "none" : "2 2"}
              />
            );
          })}

          {metrics.map((_, i) => {
            const { x, y } = getCoordinates(i, 100);
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={x}
                y2={y}
                stroke={gridStroke}
                strokeWidth="1"
              />
            );
          })}

          <polygon
            points={benchmarkPoints}
            fill="rgba(245, 158, 11, 0.18)"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />

          <polygon
            points={scorePoints}
            fill="rgba(99, 102, 241, 0.28)"
            stroke="#6366F1"
            strokeWidth="2.5"
            className="transition-all duration-300"
          />

          {metrics.map((m, i) => {
            const { x, y } = getCoordinates(i, m.score);
            const isHovered = activeMetric === i;
            return (
              <g
                key={i}
                className="cursor-pointer"
                onMouseEnter={() => setActiveMetric(i)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={isHovered ? 6 : 4}
                  fill="#6366F1"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  className="transition-all duration-150"
                />
              </g>
            );
          })}

          {metrics.map((m, i) => {
            const angle = getAngle(i);
            const labelRadius = maxRadius + 22;
            const x = center + labelRadius * Math.cos(angle);
            const y = center + labelRadius * Math.sin(angle);
            const isHovered = activeMetric === i;

            let textAnchor = "middle";
            if (Math.cos(angle) > 0.3) textAnchor = "start";
            else if (Math.cos(angle) < -0.3) textAnchor = "end";

            return (
              <text
                key={m.label}
                x={x}
                y={y + 3}
                textAnchor={textAnchor}
                fontSize="10"
                fontWeight={isHovered ? "bold" : "600"}
                fill={isHovered ? activeLabelColor : labelColor}
                fontFamily="inherit"
                className="cursor-pointer transition-colors"
                onMouseEnter={() => setActiveMetric(i)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                {m.label} {isHovered ? `(${m.score}%)` : ""}
              </text>
            );
          })}
        </svg>
      </div>

      <div className={`flex items-center justify-center gap-5 mt-2 text-[11px] font-semibold ${legendColor}`}>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-[#6366F1]/30 border border-[#6366F1]"></span>
          Candidate Score
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-0.5 border-t-2 border-dashed border-[#F59E0B]"></span>
          Tier-1 Benchmark
        </span>
      </div>
    </div>
  );
}

export default ReadinessRadarChart;
