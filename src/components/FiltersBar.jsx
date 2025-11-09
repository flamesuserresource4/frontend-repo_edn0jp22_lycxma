import React from 'react';
import { Calendar, Filter, SlidersHorizontal } from 'lucide-react';

const FiltersBar = () => {
  return (
    <div className="flex w-full flex-col gap-3 rounded-xl border border-gray-200 bg-white/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-700">
          <Calendar className="h-4 w-4 text-gray-600" />
          Last 30 days
        </span>
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
          <Filter className="h-4 w-4 text-gray-600" />
          Filters
        </button>
      </div>
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-50">
          <SlidersHorizontal className="h-4 w-4 text-gray-600" />
          Customize
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;
