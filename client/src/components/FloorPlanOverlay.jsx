import { useEffect, useRef } from "react";
import MediaLayer from "@arcgis/core/layers/MediaLayer";
import ImageElement from "@arcgis/core/layers/support/ImageElement";
import ExtentAndRotationGeoreference from "@arcgis/core/layers/support/ExtentAndRotationGeoreference";
import Extent from "@arcgis/core/geometry/Extent";

const BUILDING_BOUNDS = {
  SU: {
    floors: {
      1: { xmin: -117.32422, ymin: 34.18068, xmax: -117.32321, ymax: 34.18175 },
      2: { xmin: -117.32422, ymin: 34.18068, xmax: -117.32321, ymax: 34.18175 },
      3: { xmin: -117.32422, ymin: 34.18068, xmax: -117.32321, ymax: 34.18175 },
    }
  },
  SB: {
    floors: {
      0: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
      1: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
      2: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
      3: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
      4: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
      5: { xmin: -117.32450, ymin: 34.18090, xmax: -117.32360, ymax: 34.18155 },
    }
  }
};

export default function FloorPlanOverlay({ view, buildingCode, floor, imageUrl, opacity = 0.85 }) {
  const layerRef = useRef(null);

  useEffect(() => {
    if (!view || !buildingCode || floor === null || !imageUrl) return;

    const bounds = BUILDING_BOUNDS[buildingCode]?.floors[floor];
    if (!bounds) return;

    // Remove existing overlay layer
    if (layerRef.current) {
      view.map.remove(layerRef.current);
      layerRef.current = null;
    }

    const extent = new Extent({
      xmin: bounds.xmin,
      ymin: bounds.ymin,
      xmax: bounds.xmax,
      ymax: bounds.ymax,
      spatialReference: { wkid: 4326 },
    });

    const imageElement = new ImageElement({
      image: imageUrl,
      georeference: new ExtentAndRotationGeoreference({ extent }),
    });

    const mediaLayer = new MediaLayer({
      source: [imageElement],
      opacity,
      title: `${buildingCode} Floor ${floor} Plan`,
    });

    view.map.add(mediaLayer);
    layerRef.current = mediaLayer;

    // Fly map to the building
    view.goTo({ extent: extent.expand(1.5) }, { duration: 1000 });

    return () => {
      if (layerRef.current) {
        view.map.remove(layerRef.current);
        layerRef.current = null;
      }
    };
  }, [view, buildingCode, floor, imageUrl, opacity]);

  return null;
}