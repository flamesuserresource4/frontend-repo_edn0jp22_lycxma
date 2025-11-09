import React from 'react';

const LineChart = ({ data, labels, color = '#10B981' }) => {
  const width = 600;
  const height = 200;
  const padding = 24;
  const max = Math.max(...data) * 1.1;
  const min = Math.min(...data) * 0.9;
  const xStep = (width - padding * 2) / (data.length - 1);
  const points = data
    .map((d, i) => {
      const x = padding + i * xStep;
      const y = padding + (1 - (d - min) / (max - min)) * (height - padding * 2);
      return `${x},${y}`;
    })
    .join(' ');

  const areaPoints = `M ${padding},${height - padding} L ${points.replaceAll(',', ' ')} L ${width - padding},${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
      <defs>
        <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width={width} height={height} fill="transparent" />
      <path d={areaPoints} fill="url(#lineFill)" />
      <polyline points={points} fill="none" stroke={color} strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
      {data.map((d, i) => {
        const x = padding + i * xStep;
        const y = padding + (1 - (d - min) / (max - min)) * (height - padding * 2);
        return <circle key={i} cx={x} cy={y} r="3.5" fill="#fff" stroke={color} strokeWidth="2" />;
      })}
      {/* x-axis labels */}
      {labels.map((l, i) => {
        const x = padding + i * xStep;
        return (
          <text key={l} x={x} y={height - 6} textAnchor="middle" className="fill-gray-400 text-[10px]">
            {l}
          </text>
        );
      })}
    </svg>
  );
};

const BarChart = ({ data, labels, color = '#6366F1' }) => {
  const width = 360;
  const height = 200;
  const padding = 24;
  const max = Math.max(...data) * 1.1;
  const barWidth = (width - padding * 2) / data.length - 12;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-64">
      {data.map((d, i) => {
        const x = padding + i * (barWidth + 12);
        const h = ((d / max) * (height - padding * 2));
        const y = height - padding - h;
        return (
          <g key={labels[i]}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={h}
              rx="8"
              fill={color}
              opacity="0.85"
            />
            <text x={x + barWidth / 2} y={height - 6} textAnchor="middle" className="fill-gray-400 text-[10px]">
              {labels[i]}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

const ChartsGrid = () => {
  const income = [2000, 2100, 1900, 2050, 2200, 2150, 2300];
  const spend = [1200, 980, 1100, 900, 1300, 1250, 1400];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
  const categories = ['Rent', 'Groceries', 'Dining', 'Travel', 'Utilities', 'Other'];
  const categorySpend = [950, 380, 220, 150, 120, 180];

  const net = income.map((v, i) => v - spend[i]);

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="col-span-1 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-2">
        <h3 className="mb-3 text-sm font-medium text-gray-700">Income vs Spending</h3>
        <LineChart data={spend} labels={months} color="#10B981" />
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="mb-3 text-sm font-medium text-gray-700">Spending by Category</h3>
        <BarChart data={categorySpend} labels={categories} color="#6366F1" />
      </div>
      <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:col-span-3">
        <h3 className="mb-3 text-sm font-medium text-gray-700">Net Savings Trend</h3>
        <LineChart data={net} labels={months} color="#3B82F6" />
      </div>
    </div>
  );
};

export default ChartsGrid;
