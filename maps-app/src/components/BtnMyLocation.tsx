import { useContext } from "react";
import { MapContext } from "../context/map/MapProvider";
import { PlacesContext } from "../context/places/PlacesProvider";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error("Map isn't ready");
    if (!userLocation) throw new Error("Can't get the user location");

    map?.flyTo({
      zoom: 14,
      center: userLocation,
    });
  };
  return (
    <button
      onClick={onClick}
      className="p-3 bg-blue-600 rounded-xl text-white fixed top-5 right-5 z-10"
    >
      My Location
    </button>
  );
};
