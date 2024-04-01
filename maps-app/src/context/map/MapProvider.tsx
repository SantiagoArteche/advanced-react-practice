import { Map } from "mapbox-gl";
import { createContext, useReducer } from "react";
import { mapReducer } from "./mapReducer";

export interface MapProps {
  isMapReady: boolean;
  map?: Map;
}

export const MapContext = createContext({} as MapProps);

const INITIAL_STATE = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);
  return (
    <MapContext.Provider value={{ ...state }}>{children}</MapContext.Provider>
  );
};
