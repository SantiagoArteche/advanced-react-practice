import { ChangeEvent, useContext, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesProvider";
import { SearchResults } from "./SearchResults";

export const SearchBar = () => {
  const { searchPlacesByTerm } = useContext(PlacesContext);
  const debounceRef = useRef<NodeJS.Timeout>();

  const onQueryChanged = (event: ChangeEvent<HTMLInputElement>) => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      searchPlacesByTerm(event.target.value);
    }, 350);
  };
  return (
    <div className="fixed top-5 left-5 bg-white z-10 shadow-slate-700 w-64 p-0.5 rounded">
      <input
        type="text"
        className="w-full h-full border  p-1"
        placeholder="Search place"
        onChange={onQueryChanged}
      />
      <SearchResults />
    </div>
  );
};
