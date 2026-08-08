"use client";

import { useMemo, useRef, useState } from "react";
// The package root also imports every province's drill-down file. This direct
// entry keeps only the national GeoJSON needed by this page.
// @ts-expect-error china-map-geojson does not publish declarations for subpaths.
import ChinaData from "china-map-geojson/lib/china.js";

export type ChinaMapProps = {
  highlighted: string[];
  selectedProvince: string;
  mode: "snake" | "province";
  provinceCounts: Record<string, number>;
  onProvinceClick: (name: string) => void;
};

const VIEW_WIDTH = 1100;
const VIEW_HEIGHT = 650;
const MIN_LNG = 73.3;
const MAX_LNG = 135.1;
const MIN_LAT = 17.8;
const MAX_LAT = 53.9;

type Position = [number, number];
type Ring = Position[];
type Polygon = Ring[];
type Geometry = { type: "Polygon" | "MultiPolygon"; coordinates: Polygon | Polygon[] };
type Feature = {
  properties: { name: string; cp?: Position; longitude?: number; latitude?: number };
  geometry: Geometry;
};

function project([lng, lat]: Position): Position {
  return [
    18 + ((lng - MIN_LNG) / (MAX_LNG - MIN_LNG)) * (VIEW_WIDTH - 36),
    18 + ((MAX_LAT - lat) / (MAX_LAT - MIN_LAT)) * (VIEW_HEIGHT - 36),
  ];
}

function ringPath(ring: Ring) {
  return ring.map((point, index) => {
    const [x, y] = project(point);
    return `${index ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join("") + "Z";
}

function geometryPath(geometry: Geometry) {
  const polygons = geometry.type === "Polygon"
    ? [geometry.coordinates as Polygon]
    : geometry.coordinates as Polygon[];
  return polygons.flatMap((polygon) => polygon.map(ringPath)).join("");
}

const mapFeatures = (ChinaData.features as Feature[]).map((feature) => {
  const properties = feature.properties;
  const center = properties.cp ?? [properties.longitude ?? 104, properties.latitude ?? 35];
  return { name: properties.name, path: geometryPath(feature.geometry), center: project(center) };
});

export default function ChinaMap({
  highlighted,
  selectedProvince,
  mode,
  provinceCounts,
  onProvinceClick,
}: ChinaMapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const dragRef = useRef<{ clientX: number; clientY: number; x: number; y: number } | null>(null);
  const [view, setView] = useState({ scale: 1, x: 0, y: 0 });
  const highlightedSet = useMemo(() => new Set(highlighted), [highlighted]);

  function startDrag(event: React.PointerEvent<SVGSVGElement>) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = { clientX: event.clientX, clientY: event.clientY, x: view.x, y: view.y };
  }

  function drag(event: React.PointerEvent<SVGSVGElement>) {
    if (!dragRef.current || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const dx = (event.clientX - dragRef.current.clientX) * (VIEW_WIDTH / rect.width);
    const dy = (event.clientY - dragRef.current.clientY) * (VIEW_HEIGHT / rect.height);
    setView((current) => ({ ...current, x: dragRef.current!.x + dx, y: dragRef.current!.y + dy }));
  }

  function stopDrag(event: React.PointerEvent<SVGSVGElement>) {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
  }

  function zoom(event: React.WheelEvent<SVGSVGElement>) {
    event.preventDefault();
    const nextScale = Math.min(4, Math.max(1, view.scale * (event.deltaY > 0 ? 0.88 : 1.14)));
    setView((current) => nextScale === 1 ? { scale: 1, x: 0, y: 0 } : { ...current, scale: nextScale });
  }

  return (
    <svg
      ref={svgRef}
      className="china-map-chart"
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      role="img"
      aria-label="中国省级行政区交互地图"
      onPointerDown={startDrag}
      onPointerMove={drag}
      onPointerUp={stopDrag}
      onPointerCancel={stopDrag}
      onWheel={zoom}
    >
      <g transform={`translate(${view.x} ${view.y}) scale(${view.scale})`}>
        {mapFeatures.map((feature) => {
          const active = mode === "province"
            ? feature.name === selectedProvince
            : highlightedSet.has(feature.name);
          return (
            <g
              className={`map-province ${active ? "active" : ""}`}
              key={feature.name}
              role="button"
              tabIndex={0}
              aria-label={`${feature.name}，图鉴收录 ${provinceCounts[feature.name] ?? 0} 种`}
              onClick={() => onProvinceClick(feature.name)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") onProvinceClick(feature.name);
              }}
            >
              <title>{feature.name} · 图鉴收录 {provinceCounts[feature.name] ?? 0} 种 · 点击查看</title>
              <path d={feature.path} vectorEffect="non-scaling-stroke" />
              <text
                x={feature.center[0]}
                y={feature.center[1]}
                textAnchor="middle"
                dominantBaseline="central"
                transform={`scale(${1 / view.scale})`}
                transformOrigin={`${feature.center[0]}px ${feature.center[1]}px`}
              >
                {feature.name}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
