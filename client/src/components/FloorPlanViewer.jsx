import { useState } from "react";
import { rooms, floorPlans } from "../data/rooms";

export default function FloorPlanViewer({ buildingCode, onClose, onShowOnMap  }) {
  const building = rooms[buildingCode];
  if (!building) return null;

  const [activeFloor, setActiveFloor] = useState(building.floors[0].level);
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedRoom, setHighlightedRoom] = useState(null);

  const currentFloor = building.floors.find((f) => f.level === activeFloor);
  const floorPlanImage = floorPlans[buildingCode]?.[activeFloor];

  const filteredRooms = currentFloor?.rooms.filter((room) => {
    const q = searchQuery.toLowerCase();
    return (
      room.number.toLowerCase().includes(q) ||
      room.name.toLowerCase().includes(q) ||
      room.searchTerms.some((t) => t.toLowerCase().includes(q))
    );
  });

  const roomTypeColors = {
    classroom: "bg-blue-100 text-blue-700 border-blue-200",
    office: "bg-purple-100 text-purple-700 border-purple-200",
    service: "bg-green-100 text-green-700 border-green-200",
    dining: "bg-orange-100 text-orange-700 border-orange-200",
    event: "bg-yellow-100 text-yellow-700 border-yellow-200",
    resource: "bg-teal-100 text-teal-700 border-teal-200",
    recreation: "bg-red-100 text-red-700 border-red-200",
    wellness: "bg-pink-100 text-pink-700 border-pink-200",
    admin: "bg-gray-100 text-gray-700 border-gray-200",
    common: "bg-indigo-100 text-indigo-700 border-indigo-200",
    utility: "bg-gray-50 text-gray-500 border-gray-100",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full sm:w-[90vw] sm:max-w-5xl h-[92vh] sm:h-[88vh] rounded-t-3xl sm:rounded-2xl flex flex-col overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="bg-cody-blue px-5 py-4 flex items-center justify-between flex-shrink-0">
          <div>
            <h2 className="text-white font-bold text-lg leading-tight">
              🏢 {building.buildingName}
            </h2>
            <p className="text-blue-200 text-xs mt-0.5">
              Indoor Map · {building.floors.length} floors
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl w-9 h-9 flex items-center justify-center rounded-full hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        {/* Floor Selector */}
        <div className="flex gap-2 px-4 py-3 overflow-x-auto bg-gray-50 border-b border-gray-100 flex-shrink-0">
          {building.floors.map((floor) => (
            <button
              key={floor.level}
              onClick={() => {
                setActiveFloor(floor.level);
                setHighlightedRoom(null);
                setSearchQuery("");
              }}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                activeFloor === floor.level
                  ? "bg-cody-blue text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-cody-blue hover:text-cody-blue"
              }`}
            >
              {floor.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">

          {/* Left — Floor Plan Image */}
          <div className="flex-1 relative bg-gray-100 overflow-hidden">
            {floorPlanImage ? (
              <img
                src={floorPlanImage}
                alt={`${building.buildingName} ${currentFloor?.label}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 flex-col gap-2">
                <span className="text-4xl">🗺️</span>
                <p className="text-sm">Floor plan not available</p>
              </div>
            )}

            {/* Floor label watermark */}
            <div className="absolute top-3 left-3 bg-cody-blue/80 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
              {currentFloor?.label}
            </div>
          </div>

          {/* Right — Room List */}
          <div className="w-72 flex flex-col border-l border-gray-100 bg-white flex-shrink-0">

            {/* Room Search */}
            <div className="px-3 py-3 border-b border-gray-100">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search rooms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-cody-blue transition"
                />
                <span className="absolute left-2.5 top-2.5 text-gray-400 text-sm">🔍</span>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2.5 text-gray-400 text-xs hover:text-gray-600"
                  >
                    ✕
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                {filteredRooms?.length} rooms on {currentFloor?.label}
              </p>
            </div>

            {/* Room List */}
            <div className="flex-1 overflow-y-auto">
              {filteredRooms?.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-32 text-gray-400">
                  <span className="text-2xl">🐺</span>
                  <p className="text-xs mt-1">No rooms found</p>
                </div>
              ) : (
                filteredRooms?.map((room) => (
                  <button
                    key={room.id}
                    onClick={() => setHighlightedRoom(room)}
                    className={`w-full text-left px-3 py-2.5 border-b border-gray-50 hover:bg-blue-50 transition group ${
                      highlightedRoom?.id === room.id
                        ? "bg-blue-50 border-l-4 border-l-cody-blue"
                        : "border-l-4 border-l-transparent"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="font-mono text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded flex-shrink-0">
                          {room.number}
                        </span>
                        <span className="text-sm text-gray-800 truncate font-medium">
                          {room.name}
                        </span>
                      </div>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border flex-shrink-0 ${
                          roomTypeColors[room.type] || roomTypeColors.utility
                        }`}
                      >
                        {room.type}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>

            {/* Selected Room Detail */}
            {highlightedRoom && (
              <div className="border-t border-gray-100 bg-blue-50 px-4 py-3 flex-shrink-0">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs text-blue-400 font-medium uppercase tracking-wide">
                      Selected Room
                    </p>
                    <p className="font-bold text-cody-blue text-sm mt-0.5">
                      {highlightedRoom.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Room {highlightedRoom.number} · {currentFloor?.label}
                    </p>
                  </div>
                  <span className="text-2xl">📍</span>
                </div>
                <button
                  onClick={() => onShowOnMap(buildingCode, activeFloor)}
                  className="mt-2 w-full bg-cody-blue text-white text-xs font-bold py-2 rounded-lg hover:bg-blue-900 transition"
                >
                  🗺️ Show on Map
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}