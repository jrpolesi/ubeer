import React, { useState, useCallback, useMemo, useContext } from "react";
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
import Modal from "../Modal";
import ModalDriver from "../ModalDriver";
import InputMaps from "../InputMaps";
import { Search, Indicator } from "grommet-icons";
import { TravelContext } from "../../providers/travel";
import { DivModal } from "./style";

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
  const { travelStatus, updateTravelStatus } = useContext(TravelContext);
  const [center, setCenter] = useState({} as Location);
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  /*   navigator.geolocation.watchPosition((position) =>
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    })
  ); */

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
          mapContainerStyle={
            travelStatus === "waiting for driver"
              ? { width: "100vw", height: "38vh" }
              : { width: "100vw", height: "60vh" }
          }
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
          <Marker
            position={position}
            options={{
              label: {
                text: "Sua localização",
              },
            }}
          />
        </GoogleMap>
        {travelStatus == false || travelStatus == "waiting for driver" ? (
          <Modal setOrigin={setOrigin} setDestination={setDestination}>
            {travelStatus === false ? (
              <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}
              >
                <InputMaps
                  icon={<Search color="#FBD50E" />}
                  placeholder={origin ? origin : "Digite Aqui"}
                  onBlur={(event) => {
                    updateTravelStatus("waiting for driver");
                    setOrigin(event.target.value);
                  }}
                />
              </StandaloneSearchBox>
            ) : travelStatus === "waiting for driver" ? (
              <DivModal>
                <StandaloneSearchBox
                  onLoad={onLoad}
                  onPlacesChanged={onPlacesChanged}
                >
                  <InputMaps
                    icon={<Search color="#FBD50E" />}
                    placeholder={origin ? origin : "Digite Aqui"}
                    onBlur={(event) => setOrigin(event.target.value)}
                  />
                </StandaloneSearchBox>
                <StandaloneSearchBox
                  onLoad={onLoad}
                  onPlacesChanged={onPlacesChanged}
                >
                  <InputMaps
                    icon={<Indicator color="#FBD50E" />}
                    placeholder="digite aqui"
                    onBlur={(event) => setDestination(event.target.value)}
                  />
                </StandaloneSearchBox>
              </DivModal>
            ) : (
              <></>
            )}
          </Modal>
        ) : (
          <ModalDriver></ModalDriver>
        )}
      </LoadScript>
    </>
  );
}

export default MapUbeer;
