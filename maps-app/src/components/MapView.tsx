import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesProvider";
import { Loading } from "./Loading";
import { Map } from "mapbox-gl";
import { MapContext } from "../context/map/MapProvider";

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);

  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });

      setMap(map);
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      ref={mapDiv}
      className="bg-red-500 h-screen w-screen fixed top-0 left-0"
    >
      {userLocation?.join(",")}
    </div>
  );
};
