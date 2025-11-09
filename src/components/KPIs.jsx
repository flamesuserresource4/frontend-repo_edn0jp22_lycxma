import React from 'react';

const KPIs = () => {
  const cards = [
    { label: 'Total Balance', value: '$24,580', delta: '+$1,240' },
    { label: 'Monthly Spend', value: '$3,420', delta: '-4.2%' },
    { label: 'Savings Rate', value: '22%', delta: '+2.1%' },
    { label: 'Investments', value: '$12,300', delta: '+$380' },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((c) => (
        <div key={c.label} className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm text-gray-500">{c.label}</p>
          <div className="mt-2 flex items-end justify-between">
            <span className="text-2xl font-semibold text-gray-900">{c.value}</span>
            <span className={`text-sm ${c.delta.startsWith('-') ? 'text-red-600' : 'text-emerald-600'}`}>{c.delta}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KPIs;
