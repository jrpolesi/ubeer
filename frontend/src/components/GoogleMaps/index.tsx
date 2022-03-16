import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "60vh",
};

interface Location {
  lat: number;
  lng: number;
}

function MapUbeer() {
  const [center, setCenter] = useState({} as Location);

  navigator.geolocation.watchPosition((position) =>
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  );

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY as string,
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapUbeer;
