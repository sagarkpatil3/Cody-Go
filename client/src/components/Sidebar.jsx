import { useState } from "react";
import { buildings, categories, categoryColors } from "../data/buildings";
import { rooms } from "../data/rooms";

export default function Sidebar({ onBuildingSelect, selectedBuilding,onShowFloorPlan  }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = buildings.filter((b) => {
    const matchesCategory =
      activeCategory === "all" || b.category === activeCategory;
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.departments.some((d) =>
        d.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-80 h-full bg-white flex flex-col shadow-xl border-r border-gray-100 z-10">
      
      {/* Sidebar Header */}
      <div className="bg-cody-blue px-4 py-4">
        <h2 className="text-white font-bold text-lg">🏫 Campus Buildings</h2>
        <p className="text-blue-200 text-xs mt-0.5">{buildings.length} locations on campus</p>

        {/* Search Input */}
        <div className="mt-3 relative">
          <input
            type="text"
            placeholder="Search by name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 rounded-lg text-sm bg-white/10 text-white placeholder-blue-200 border border-white/20 focus:outline-none focus:border-cody-gold focus:bg-white/20 transition"
          />
          <span className="absolute left-3 top-2.5 text-blue-200 text-sm">🔍</span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-blue-200 text-sm hover:text-white"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category Filter Chips */}
      <div className="px-3 py-3 flex gap-2 overflow-x-auto scrollbar-hide border-b border-gray-100">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeCategory === cat.id
                ? "bg-cody-blue text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Results count */}
      <div className="px-4 py-2 text-xs text-gray-400 border-b border-gray-50">
        {filtered.length} {filtered.length === 1 ? "result" : "results"} found
      </div>

      {/* Building List */}
      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-40 text-gray-400">
            <span className="text-3xl">🐺</span>
            <p className="text-sm mt-2">No buildings found</p>
            <p className="text-xs">Try a different search</p>
          </div>
        ) : (
          filtered.map((building) => (
            <button
              key={building.id}
              onClick={() => onBuildingSelect(building)}
              className={`w-full text-left px-4 py-3 border-b border-gray-50 hover:bg-blue-50 transition-all group ${
                selectedBuilding?.id === building.id
                  ? "bg-blue-50 border-l-4 border-l-cody-blue"
                  : "border-l-4 border-l-transparent"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Category color dot */}
                <div
                  className="mt-1 w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: categoryColors[building.category] }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-sm text-gray-800 truncate">
                      {building.name}
                    </span>
                    <span className="text-xs font-mono bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded flex-shrink-0">
                      {building.code}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {building.description}
                  </p>
                  <p className="text-xs text-gray-300 mt-0.5">
                    🕐 {building.hours}
                  </p>
                </div>
                <span className="text-gray-300 group-hover:text-cody-blue transition text-sm flex-shrink-0">
                  →
                </span>
              </div>
              {rooms[building.code] && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // don't also trigger building select
                    onShowFloorPlan(building.code);
                  }}
                  className="text-xs bg-cody-gold text-cody-blue font-bold px-2 py-0.5 rounded-full flex-shrink-0 hover:brightness-110 transition"
                >
                  🏢 Indoor
                </button>
              )}
            </button>
            
          ))
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-100">
        <p className="text-xs text-gray-400 text-center">
          🐺 Cody Go · CSUSB Campus Navigator
        </p>
      </div>
    </div>
  );
}

