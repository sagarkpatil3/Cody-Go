import { useEffect, useRef, useState } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import Graphic from "@arcgis/core/Graphic";
import SimpleFillSymbol from "@arcgis/core/symbols/SimpleFillSymbol";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import Point from "@arcgis/core/geometry/Point";
import Polygon from "@arcgis/core/geometry/Polygon";
import { roomsByFloor } from "../data/smsuPolygons";

export default function IndoorLayer({ view, buildingCode, activeFloor, onFloorChange }) {
  const layerRef = useRef(null);
  const labelLayerRef = useRef(null);
  

  useEffect(() => {
     console.log("IndoorLayer triggered:", { view, buildingCode, activeFloor });
  console.log("Rooms for floor:", roomsByFloor[activeFloor]);
  
  if (!view || buildingCode !== "SU") {
    console.log("EARLY EXIT — view:", !!view, "buildingCode:", buildingCode);
    return;
  }

    // Clean up old layers
    if (layerRef.current) view.map.remove(layerRef.current);
    if (labelLayerRef.current) view.map.remove(labelLayerRef.current);

    const rooms = roomsByFloor[activeFloor];
    if (!rooms) return;

    const roomLayer = new GraphicsLayer({ title: "Indoor Rooms" });
    const labelLayer = new GraphicsLayer({ title: "Room Labels" });

    rooms.forEach((room) => {
      // Room polygon
      const polygon = new Polygon({
        rings: room.rings,
        spatialReference: { wkid: 4326 },
      });

      const fillSymbol = new SimpleFillSymbol({
        color: room.color,
        outline: {
          color: [100, 100, 120, 255],
          width: 1,
        },
      });

      const roomGraphic = new Graphic({
        geometry: polygon,
        symbol: fillSymbol,
        attributes: { name: room.name, number: room.number, type: room.type },
        popupTemplate: {
          title: `${room.number} — ${room.name}`,
          content: `<b>Type:</b> ${room.type}<br/><b>Floor:</b> Level ${activeFloor}`,
        },
      });

      roomLayer.add(roomGraphic);

      // Room label — centered on polygon
      const lngs = room.rings[0].map((p) => p[0]);
      const lats = room.rings[0].map((p) => p[1]);
      const centerLng = (Math.min(...lngs) + Math.max(...lngs)) / 2;
      const centerLat = (Math.min(...lats) + Math.max(...lats)) / 2;

      const labelPoint = new Point({
        longitude: centerLng,
        latitude: centerLat,
        spatialReference: { wkid: 4326 },
      });

      const textSymbol = new TextSymbol({
        text: room.name.length > 12 ? room.number : room.name,
        color: [30, 30, 60, 255],
        font: { size: 9, weight: "bold", family: "sans-serif" },
        haloColor: [255, 255, 255, 200],
        haloSize: 1.5,
      });

      const labelGraphic = new Graphic({
        geometry: labelPoint,
        symbol: textSymbol,
      });

      labelLayer.add(labelGraphic);
    });

    view.map.add(roomLayer);
    view.map.add(labelLayer);

    layerRef.current = roomLayer;
    labelLayerRef.current = labelLayer;

    // Fly to building
    view.goTo({
        center: [-117.32363, 34.18121],
        zoom: 19,
        }, { duration: 800 }).catch(() => {});

    return () => {
      if (layerRef.current) view.map.remove(layerRef.current);
      if (labelLayerRef.current) view.map.remove(labelLayerRef.current);
    };
  }, [view, buildingCode, activeFloor]);

  return null;
}