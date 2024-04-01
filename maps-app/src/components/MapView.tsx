import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesProvider";
import { Loading } from "./Loading";
import mapboxgl from "mapbox-gl";

export const MapView = () => {
  const { userLocation, isLoading } = useContext(PlacesContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      const map = new mapboxgl.Map({
        container: mapDiv.current!, // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: userLocation, // starting position [lng, lat]
        zoom: 14, // starting zoom
      });
    }
  }, [isLoading]);

  if (isLoading) return <Loading />;
  return (
    <div
      ref={mapDiv}
      className="bg-red-500 h-screen w-screen fixed top-0 left-0"
    >
      {userLocation?.join(",")}
    </div>
  );
};
