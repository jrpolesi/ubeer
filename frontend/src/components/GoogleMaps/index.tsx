import React, {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Modal from "../Modal";
import ModalDriver from "../ModalDriver";
import InputMaps from "../InputMaps";
import { Search, Indicator } from "grommet-icons";
import { TravelContext } from "../../providers/travel";
import { DivModal, MapContainer } from "./styles";
import Button from "../Button";
import api from "../../services/api";
import { UserContext } from "../../providers/user";

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
  const { travelStatus, updateTravelStatus, updateTravel } =
    useContext(TravelContext);
  const { user, token } = useContext(UserContext);
  const [hasOrigin, setHasOrigin] = useState(false);
  const [center, setCenter] = useState({} as Location);
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  useEffect(() => {
    navigator.geolocation.watchPosition((position) =>
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
  }, []);

  const [map, setMap] = useState<google.maps.Map>();

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const places = searchBox?.getPlaces();
    const place = places?.[0];

    setCenter({
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,
    });

    map?.panTo(center);
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
    <MapContainer>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY as string}
        libraries={arrayPlace}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={
            hasOrigin
              ? { width: "100vw", height: "38vh" }
              : { width: "100vw", height: "60vh" }
          }
          center={center}
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

          {!response && (
            <Marker
              position={center}
              options={{
                label: {
                  text: "Sua localização",
                  color: "red",
                  className: "marker",
                },
              }}
            />
          )}
        </GoogleMap>

        {!travelStatus && (
          <Modal
            setOrigin={setOrigin}
            setDestination={setDestination}
            setHasOrigin={setHasOrigin}
            hasOrigin={hasOrigin}
          >
            <DivModal>
              <StandaloneSearchBox
                onLoad={onLoad}
                onPlacesChanged={onPlacesChanged}
              >
                <InputMaps
                  icon={<Search color="#FBD50E" />}
                  placeholder={origin ? origin : "Digite Aqui"}
                  onBlur={(event) => {
                    if (!hasOrigin) {
                      setHasOrigin(true);
                    }

                    setOrigin(event.target.value);
                  }}
                />
              </StandaloneSearchBox>

              {hasOrigin && (
                <>
                  <StandaloneSearchBox
                    onLoad={onLoad}
                    onPlacesChanged={onPlacesChanged}
                  >
                    <InputMaps
                      icon={<Indicator color="#FBD50E" />}
                      placeholder={destination ? destination : "Digite Aqui"}
                      onBlur={(event) => setDestination(event.target.value)}
                    />
                  </StandaloneSearchBox>
                  {/* <p>
                    {" "}
                    R$
                    {response &&
                      response.routes[0].legs[0].distance.value / 1000}
                  </p> */}

                  <Button
                    variant="rounded"
                    onClick={() => {
                      const travelRequest = {
                        from: origin,
                        to: destination,
                        distance: 654,
                      };

                      // Chamada da API
                      api
                        .post(
                          `/travels/newTravel/users/${user && user.id}`,
                          travelRequest,
                          { headers: { Authorization: `Bearer ${token}` } }
                        )
                        .then((response) => {
                          updateTravelStatus("waiting for driver");
                          updateTravel(response.data);
                          console.log(response.data);
                        });
                    }}
                  >
                    Chamar motorista
                  </Button>
                </>
              )}
            </DivModal>
          </Modal>
        )}

        <ModalDriver />
      </LoadScript>
    </MapContainer>
  );
}

export default MapUbeer;
