import { useState, useRef } from "react";
import CodyMap from "./components/Map";
import Sidebar from "./components/Sidebar";
import IndoorLayer from "./components/IndoorLayer";

export default function App() {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [indoorBuilding, setIndoorBuilding] = useState(null);
  const [activeFloor, setActiveFloor] = useState(1);
  const [mapView, setMapView] = useState(null);

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <Sidebar
        onBuildingSelect={(building) => {
          setSelectedBuilding(building);
          if (building.code === "SU") {
            setIndoorBuilding("SU");
            setActiveFloor(1);
          } else {
            setIndoorBuilding(null);
          }
        }}
        selectedBuilding={selectedBuilding}
      />

      <div className="flex-1 relative">
        <CodyMap
          selectedBuilding={selectedBuilding}
          onViewReady={(view) => {  console.log("onViewReady received view:", view); // add this 
          setMapView(view)}}
        />

        {/* Indoor layer drawn on map */}
        {indoorBuilding && mapView && (
          <IndoorLayer
            view={mapView}
            buildingCode={indoorBuilding}
            activeFloor={activeFloor}
          />
        )}

        {/* Floor switcher panel */}
        {indoorBuilding && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 border border-gray-100">
            <span className="text-xs font-bold text-cody-blue">🏢 SMSU Floor</span>
            {[1, 2].map((floor) => (
  <button
    key={floor}
    onClick={() => setActiveFloor(floor)}
    className={`w-9 h-9 rounded-full text-sm font-bold transition ${
      activeFloor === floor
        ? "bg-cody-blue text-white shadow"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    {floor}
  </button>
))}
            <button
              onClick={() => setIndoorBuilding(null)}
              className="ml-2 text-xs text-gray-400 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}