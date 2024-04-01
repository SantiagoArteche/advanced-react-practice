import { PlacesState } from "./PlacesProvider";

type PlacesAction = { type: "setUserLocation"; payload: [number, number] };
export const placesReducer = (
  state: PlacesState,
  actions: PlacesAction
): PlacesState => {
  switch (actions.type) {
    case "setUserLocation":
      return { ...state, isLoading: false, userLocation: actions.payload };

    default:
      return state;
  }
};
