import { Map } from "mapbox-gl";
import { MapProps } from "./MapProvider";

type MapAction = { type: "setMap"; payload: Map };

export const mapReducer = (state: MapProps, actions: MapAction): MapProps => {
  switch (actions.type) {
    default:
      return state;
  }
};
