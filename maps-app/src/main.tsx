import React from "react";
import ReactDOM from "react-dom/client";
import MapsApp from "./MapsApp.tsx";
import "./index.css";

import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

if (!navigator.geolocation) {
  alert("Your browser don't have geolocation");
  throw new Error("Your browser don't have geolocation");
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
