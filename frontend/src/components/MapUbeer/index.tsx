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
import ModalFinishedTravel from "../ModalFinishedTravel";
import { Notification } from "grommet";

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
  const { user, token, updateUser } = useContext(UserContext);
  const [requestError, setRequestError] = useState<string | boolean>(false);
  const [hasOrigin, setHasOrigin] = useState(false); //esse
  const [center, setCenter] = useState({} as Location);
  const [origin, setOrigin] = useState<string>(""); //esse
  const [destination, setDestination] = useState<string>(""); //esse
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  const resetMap = () => {
    setHasOrigin(false);
    setOrigin("");
    setDestination("");
    setResponse(null);
  };

  useEffect(() => {
    const navigatorId = navigator.geolocation.watchPosition((position) =>
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );

    return () => navigator.geolocation.clearWatch(navigatorId);
  }, []);

  const [map, setMap] = useState<google.maps.Map>();

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const onLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const getNewTravelFromAPI = () => {
    if (response) {
      const distanceInMeters = response.routes[0].legs[0].distance?.value;

      const travelRequest = {
        from: origin,
        to: destination,
        distance: distanceInMeters ? distanceInMeters / 1000 : 100,
      };

      api
        .post(`/travels/newTravel/users/${user && user.id}`, travelRequest, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const { user, ...rest } = response.data;
          updateTravel(rest);
          updateUser(user);
          updateTravelStatus("waiting for driver");
        })
        .catch((err) => {
          setRequestError(err.response.data.message);
        });
    }
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
    setMap(map);
  };

  const directionsCallback = useCallback(
    (
      result: google.maps.DirectionsResult | null,
      status: google.maps.DirectionsStatus
    ) => {
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
      {requestError && (
        <Notification
          toast
          status="critical"
          title="Falha ao pedir corrida"
          message={requestError as string}
          onClose={() => setRequestError(false)}
        />
      )}
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_KEY as string}
        libraries={arrayPlace}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={
            hasOrigin
              ? { width: "100%", height: "38vh" }
              : { width: "100%", height: "60vh" }
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

                  <Button variant="rounded" onClick={getNewTravelFromAPI}>
                    Chamar motorista
                  </Button>
                </>
              )}
            </DivModal>
          </Modal>
        )}

        {(travelStatus === "waiting for driver" ||
          travelStatus === "in transit") && <ModalDriver />}

        {travelStatus === "finished" && <ModalFinishedTravel resetMap={resetMap} />}
      </LoadScript>
    </MapContainer>
  );
}

export default MapUbeer;
