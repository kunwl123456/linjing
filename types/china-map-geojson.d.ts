declare module "china-map-geojson" {
  export const ChinaData: {
    type: "FeatureCollection";
    features: Array<{
      type: "Feature";
      properties: { id?: string; name: string; cp?: [number, number] };
      geometry: unknown;
    }>;
  };
  export const ProvinceData: Record<string, unknown>;
}
