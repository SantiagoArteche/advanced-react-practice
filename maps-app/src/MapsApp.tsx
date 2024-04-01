import { MapProvider } from "./context/map/MapProvider";
import { PlacesProvider } from "./context/places/PlacesProvider";
import { HomeScreen } from "./screens/HomeScreen";

function MapsApp() {
  return (
    <PlacesProvider>
      <HomeScreen />
      <MapProvider />
    </PlacesProvider>
  );
}

export default MapsApp;
