import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
  Autocomplete,
  DirectionsServiceProps,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "60vh",
};

interface Location {
  lat: number;
  lng: number;
}

const arrayPlace: (
  | "places"
  | "drawing"
  | "geometry"
  | "localContext"
  | "visualization"
)[] = ["places"];

function MapUbeer() {
  const [center, setCenter] = useState({} as Location);
  const [destination, setDestination] = useState("bauru");
  const [origin, setOrigin] = useState("campinas");
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  /*   navigator.geolocation.watchPosition((position) =>
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  ); */

  /*   const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEY as string,
  });
 */

  const position = {
    lat: -27.49865,
    lng: -48.13651,
  };

  const [map, setMap] = useState<google.maps.Map>();
  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const onLoad = (ref: google.maps.places.SearchBox) => {
    console.log("olá, mundo");
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    console.log("oi");
    const places = searchBox?.getPlaces();
    console.log(places);
    const place = places?.[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    };
    map?.panTo(location);
  };

  const onMapLoad = (map: google.maps.Map) => {
    console.log(map);
    setMap(map);
  };

  const directionsCallback = useCallback(
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
      console.log(result, status);
      if (result !== null && status === "OK") {
        setResponse(result);
      }
    },
    []
  );

  const directionsServiceOptions = useMemo(() => {
    return {
      origin,
      destination,
      travelMode: "DRIVING" as google.maps.TravelMode,
    };
  }, [origin, destination]);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY as string}
        libraries={arrayPlace}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100vw", height: "60vh" }}
          center={position}
          zoom={15}
        >
          {origin && destination && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              placeholder="digite aqui"
              style={{
                width: "240px",
                height: "32px",
                position: "absolute",
                left: "50%",
              }}
            />
          </StandaloneSearchBox>
          <Marker
            position={position}
            options={{
              label: {
                text: "Posição Teste",
              },
            }}
          />
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default MapUbeer;
