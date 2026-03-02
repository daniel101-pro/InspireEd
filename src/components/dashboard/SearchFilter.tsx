"use client";

import { Search } from "lucide-react";

interface SearchFilterProps {
  search: string;
  onSearchChange: (v: string) => void;
  filter?: string;
  onFilterChange?: (v: string) => void;
  filterOptions?: { value: string; label: string }[];
  placeholder?: string;
}

export default function SearchFilter({
  search,
  onSearchChange,
  filter,
  onFilterChange,
  filterOptions,
  placeholder = "Search...",
}: SearchFilterProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Search input */}
      <div className="relative flex items-center">
        <Search className="absolute left-0 h-3 w-3 text-dark/30" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="border-b border-dark/20 bg-transparent py-1.5 pl-5 pr-2 text-sm text-dark outline-none transition-colors placeholder:text-dark/30 focus:border-dark/40"
        />
      </div>

      {/* Optional filter dropdown */}
      {filterOptions && onFilterChange && (
        <select
          value={filter ?? ""}
          onChange={(e) => onFilterChange(e.target.value)}
          className="border-b border-dark/20 bg-transparent py-1.5 text-sm text-dark outline-none transition-colors focus:border-dark/40"
        >
          {filterOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
