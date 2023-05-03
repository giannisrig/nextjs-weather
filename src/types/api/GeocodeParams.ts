export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface GeocodeParams {
  location?: string;
  coordinates?: Coordinates;
}
