import { createContext, useEffect, useReducer } from "react";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";

interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const PlacesContext = createContext({} as PlacesContextProps);

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const INITIAL_STATE: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);

  useEffect(() => {
    getUserLocation().then((lngLat) =>
      dispatch({ type: "setUserLocation", payload: lngLat })
    );
  }, []);

  return (
    <PlacesContext.Provider value={{ ...state }}>
      {children}
    </PlacesContext.Provider>
  );
};
