import { useEffect, useRef, useState } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import SceneView from "@arcgis/core/views/SceneView";
import Locate from "@arcgis/core/widgets/Locate.js";
import Search from "@arcgis/core/widgets/Search.js";
import SceneLayer from "@arcgis/core/layers/SceneLayer";
import "@arcgis/core/assets/esri/themes/light/main.css";
import RoomSearch from "./RoomSearch";
import FloorPlanViewer from "./FloorPlanViewer";
import * as reactiveUtils from "@arcgis/core/core/reactiveUtils";


esriConfig.apiKey = import.meta.env.VITE_ARCGIS_API_KEY;

const CSUSB_CENTER = {
    latitude: 34.182,
    longitude: -117.3228,
};

export default function CodyMap({selectedBuilding, onViewReady  }) {
    const mapDiv = useRef(null);
    const viewRef = useRef(null);
    const [is3D, setIs3D] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const [floorPlanBuilding, setFloorPlanBuilding] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const [overlayBuilding, setOverlayBuilding] = useState(null);
    const [overlayFloor, setOverlayFloor] = useState(null);
    const [overlayOpacity, setOverlayOpacity] = useState(0.85);

    useEffect(() => {
        if (!mapDiv.current) return;

        if (viewRef.current) {
            viewRef.current.destroy();
            viewRef.current = null;
        }

        setIsLoading(true);
        let view;

        if (is3D) {
            const scene = new Map({
                basemap: "streets-navigation-vector",
                ground: "world-elevation",
            });

            // Esri's detailed OSM 3D buildings — covers CSUSB campus
            const osmBuildings = new SceneLayer({
                url: "https://basemaps3d.arcgis.com/arcgis/rest/services/OpenStreetMap3D_Buildings_v1/SceneServer",
                title: "3D Buildings",
                opacity: 1,
                castShadows: true,
                popupTemplate: {
                    title: "{name}",
                    content: "Building on CSUSB Campus",
                },
            });

            scene.add(osmBuildings);

            view = new SceneView({
                container: mapDiv.current,
                map: scene,
                qualityProfile: "high",
                camera: {
                    position: {
                        longitude: CSUSB_CENTER.longitude,
                        latitude: CSUSB_CENTER.latitude - 0.006,
                        z: 350,
                    },
                    tilt: 72,
                    heading: 355,
                },
                environment: {
                    atmosphere: {
                        quality: "high",
                    },
                    lighting: {
                        date: new Date(),
                        directShadowsEnabled: true,
                        ambientOcclusionEnabled: true,
                    },
                },
                ui: { components: ["zoom", "navigation-toggle", "compass"] },
                popup: {
                    defaultPopupTemplateEnabled: true,
                },
            });

            view.when(() => {
                setIsLoading(false);

                // Lock 3D view to campus area
                view.constraints = {
                    altitude: {
                        min: 100,   // can't go below 100m (no underground)
                        max: 2000,  // can't zoom out past 2km up
                    },
                };

                // If user tries to pan away, snap back
                reactiveUtils.watch(
                    () => view.camera,
                    (camera) => {
                        const { longitude, latitude } = camera.position;
                        const bounds = {
                        xmin: -117.335, ymin: 34.175,
                        xmax: -117.310, ymax: 34.192,
                        };
                        if (
                        longitude < bounds.xmin || longitude > bounds.xmax ||
                        latitude < bounds.ymin  || latitude > bounds.ymax
                        ) {
                        view.goTo({
                            position: {
                            longitude: CSUSB_CENTER.longitude,
                            latitude: CSUSB_CENTER.latitude,
                            z: camera.position.z,
                            },
                        });
                        }
                    }
                    );
            });

        } else {
            const map = new Map({
                basemap: "streets-navigation-vector",
            });

            view = new MapView({
                container: mapDiv.current,
                map,
                center: [CSUSB_CENTER.longitude, CSUSB_CENTER.latitude],
                zoom: 16,
                constraints: {
                    minZoom: 15,
                    maxZoom: 20,
                    geometry: {
                        type: "extent",
                        xmin: -117.335,
                        ymin: 34.175,
                        xmax: -117.310,
                        ymax: 34.192,
                        spatialReference: { wkid: 4326 },
                    },
                },
                ui: { components: ["zoom"] },
            });
        }

        // GPS blue dot
        view.when(() => {
            const locateBtn = document.createElement("arcgis-locate");
            locateBtn.setAttribute("reference-element", "mapView");
            view.ui.add(locateBtn, "bottom-right");
        });

        view.when(() => {
            setIsLoading(false);
        });

        view.when(() => {
            setIsLoading(false);
            console.log("View ready, calling onViewReady");
            if (onViewReady) onViewReady(view); // ← add this line
            });

        // Fly to building when selected from sidebar
        if (selectedBuilding && viewRef.current) {
            viewRef.current.goTo({
                center: [selectedBuilding.lng, selectedBuilding.lat],
                zoom: 18,
            }, { duration: 1500 });
        }

        viewRef.current = view;

        return () => {
            view?.destroy();
        };
    }, [is3D]);

    // Add a second useEffect just for flying to buildings
    useEffect(() => {
    if (!selectedBuilding || !viewRef.current) return;
    viewRef.current.goTo(
        { center: [selectedBuilding.lng, selectedBuilding.lat], zoom: 18 },
        { duration: 1500, easing: "ease-in-out" }
    );
    }, [selectedBuilding]);
    
    return (
        <div className="relative w-full h-screen">
            {/* Map container */}
            <div ref={mapDiv} className="w-full h-full" />

            {/* Loading overlay */}
            {isLoading && (
                <div className="absolute inset-0 z-20 bg-cody-blue flex flex-col items-center justify-center gap-3">
                    <span className="text-5xl animate-bounce">🐺</span>
                    <span className="text-white text-xl font-bold">Cody Go</span>
                    <span className="text-blue-200 text-sm">Loading CSUSB Campus...</span>
                    <div className="w-48 h-1 bg-blue-800 rounded-full overflow-hidden mt-2">
                        <div className="h-full bg-cody-gold rounded-full animate-pulse w-3/4" />
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 bg-cody-blue px-4 py-3 shadow-md">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white tracking-wide">🐺 Cody Go</span>
                        <span className="text-xs text-blue-200">CSUSB Campus Navigator</span>
                    </div>
                    <button
                        onClick={() => setIs3D((prev) => !prev)}
                        className="flex items-center gap-1 bg-cody-gold text-cody-blue text-sm font-bold px-3 py-1 rounded-full shadow hover:brightness-110 transition"
                    >
                        {is3D ? "🗺️ 2D" : "🏢 3D"}
                    </button>
                </div>

                {/* Global Room + Building Search */}
                <RoomSearch
                    onBuildingSelect={(building) => {
                        // Fly map to building
                        if (viewRef.current) {
                            viewRef.current.goTo(
                                { center: [building.lng, building.lat], zoom: 18 },
                                { duration: 1000 }
                            );
                        }
                    }}
                    onRoomSelect={(room) => {
                        // Open floor plan viewer for that building
                        setFloorPlanBuilding(room.buildingCode);
                        setSelectedRoom(room);
                    }}
                />
            </div>

            {/* Floor Plan Viewer Modal */}
            {floorPlanBuilding && (
            <FloorPlanViewer
                buildingCode={floorPlanBuilding}
                initialRoom={selectedRoom}
                onClose={() => {
                setFloorPlanBuilding(null);
                setSelectedRoom(null);
                }}
                onShowOnMap={(buildingCode, floor) => {
    setFloorPlanBuilding(null); // close modal
    // Tell map to show overlay
    setOverlayBuilding(buildingCode);
    setOverlayFloor(floor);
  }}
            />
            )}

            {/* 3D controls hint */}
            {is3D && !isLoading && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 bg-black/60 text-white text-xs px-4 py-2 rounded-full backdrop-blur-sm">
                    🖱️ Left drag to orbit · Scroll to zoom · Right drag to pan
                </div>
            )}

            {overlayBuilding !== null && overlayFloor !== null && viewRef.current && (
                <FloorPlanOverlay
                    view={viewRef.current}
                    buildingCode={overlayBuilding}
                    floor={overlayFloor}
                    imageUrl={floorPlans[overlayBuilding]?.[overlayFloor]}
                    opacity={overlayOpacity}
                />
            )}

            {overlayBuilding && (
  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 bg-white rounded-2xl shadow-xl px-5 py-3 flex items-center gap-4 border border-gray-100">
    <span className="text-sm font-bold text-cody-blue">
      🏢 {overlayBuilding} — Floor {overlayFloor}
    </span>
    <div className="flex items-center gap-2">
      <span className="text-xs text-gray-400">Opacity</span>
      <input
        type="range"
        min="0.2"
        max="1"
        step="0.05"
        value={overlayOpacity}
        onChange={(e) => setOverlayOpacity(parseFloat(e.target.value))}
        className="w-24"
      />
    </div>
    <button
      onClick={() => { setOverlayBuilding(null); setOverlayFloor(null); }}
      className="text-xs bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 px-3 py-1 rounded-full transition"
    >
      ✕ Close
    </button>
  </div>
)}
        </div>
    );
}