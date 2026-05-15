import { useState, useRef, useEffect } from "react";
import { allRooms } from "../data/rooms";
import { buildings } from "../data/buildings";

export default function RoomSearch({ onBuildingSelect, onRoomSelect }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const q = query.toLowerCase();

    // Search buildings
    const buildingResults = buildings
      .filter(
        (b) =>
          b.name.toLowerCase().includes(q) ||
          b.code.toLowerCase().includes(q) ||
          b.departments.some((d) => d.toLowerCase().includes(q))
      )
      .slice(0, 3)
      .map((b) => ({ ...b, resultType: "building" }));

    // Search rooms
    const roomResults = allRooms
      .filter(
        (r) =>
          r.number.toLowerCase().includes(q) ||
          r.name.toLowerCase().includes(q) ||
          r.searchTerms.some((t) => t.toLowerCase().includes(q)) ||
          `${r.buildingCode} ${r.number}`.toLowerCase().includes(q)
      )
      .slice(0, 6)
      .map((r) => ({ ...r, resultType: "room" }));

    setResults([...buildingResults, ...roomResults]);
    setIsOpen(true);
  }, [query]);

  const handleSelect = (result) => {
    if (result.resultType === "building") {
      onBuildingSelect(result);
    } else {
      // Find the parent building and select it, then open floor plan
      const building = buildings.find((b) => b.code === result.buildingCode);
      if (building) onBuildingSelect(building);
      onRoomSelect(result);
    }
    setQuery("");
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="🔍  Search buildings, rooms, departments..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setIsOpen(true)}
          className="w-full pl-4 pr-10 py-2.5 text-sm bg-white/15 text-white placeholder-blue-200 border border-white/20 rounded-xl focus:outline-none focus:border-cody-gold focus:bg-white/20 transition"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-3 top-3 text-blue-200 hover:text-white text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
          
          {/* Building results */}
          {results.filter((r) => r.resultType === "building").length > 0 && (
            <div>
              <p className="text-xs text-gray-400 font-semibold px-3 pt-2 pb-1 uppercase tracking-wide">
                Buildings
              </p>
              {results
                .filter((r) => r.resultType === "building")
                .map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result)}
                    className="w-full text-left px-3 py-2.5 hover:bg-blue-50 flex items-center gap-3 transition"
                  >
                    <span className="text-lg">🏢</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{result.name}</p>
                      <p className="text-xs text-gray-400">{result.code} · {result.description}</p>
                    </div>
                  </button>
                ))}
            </div>
          )}

          {/* Room results */}
          {results.filter((r) => r.resultType === "room").length > 0 && (
            <div className="border-t border-gray-50">
              <p className="text-xs text-gray-400 font-semibold px-3 pt-2 pb-1 uppercase tracking-wide">
                Rooms & Offices
              </p>
              {results
                .filter((r) => r.resultType === "room")
                .map((result) => (
                  <button
                    key={result.id}
                    onClick={() => handleSelect(result)}
                    className="w-full text-left px-3 py-2.5 hover:bg-blue-50 flex items-center gap-3 transition"
                  >
                    <span className="text-lg">📍</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">
                        {result.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {result.buildingCode} Room {result.number} · {result.floorLabel}
                      </p>
                    </div>
                    <span className="text-xs bg-blue-50 text-cody-blue font-mono px-2 py-0.5 rounded flex-shrink-0">
                      {result.buildingCode}
                    </span>
                  </button>
                ))}
            </div>
          )}

          {/* No results */}
          {results.length === 0 && (
            <div className="px-4 py-6 text-center text-gray-400">
              <span className="text-2xl">🐺</span>
              <p className="text-sm mt-1">No results found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}