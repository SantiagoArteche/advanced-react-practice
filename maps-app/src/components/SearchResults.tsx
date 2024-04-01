import { useContext, useState } from "react";
import { PlacesContext } from "../context/places/PlacesProvider";
import { Feature } from "../interfaces/places";
import { MapContext } from "../context/map/MapProvider";

export const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);
  const [activeId, setActiveId] = useState("");

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    if (!userLocation) return;
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation, [lng, lat]);
  };
  if (isLoadingPlaces) {
    return (
      <div className="flex justify-center items-center  text-black">
        <div className="text-center">
          <h3 className="text-3xl">Wait please...</h3>
          <span>Searching...</span>
        </div>
      </div>
    );
  }

  if (places.length === 0) {
    return <></>;
  }

  return (
    <ul className=" rounded mt-2 p-2">
      {places.map((place) => {
        return (
          <li
            className="outline outline-blue-500 mb-5  bg-transparent rounded bg-slate-300 flex flex-col cursor-pointer"
            key={place.id}
            onClick={() => onPlaceClicked(place)}
          >
            <h6
              className={`pt-3 ms-1 text-xl capitalize font-bold ${
                activeId === place.id && "text-blue-600"
              }`}
            >
              {place.text}
            </h6>
            <p className=" text-xs my-5 mx-3">{place.place_name}</p>
            <button
              onClick={() => getRoute(place)}
              className="border outline align-middle justify-self-center ms-1.5 text-sm font-bold outline-blue-600 w-[50%] p-3  shadow-inner shadow-blue-900 mb-5"
            >
              Directions
            </button>
          </li>
        );
      })}
    </ul>
  );
};
