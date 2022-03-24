import React, { Dispatch } from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { TravelContext } from "../travel";
import { UserContext } from "../user";

interface Location {
  lat: number;
  lng: number;
}

interface MapContextInterface {
  hasOrigin: boolean;
  setHasOrigin: Dispatch<React.SetStateAction<boolean>>;
  origin: string;
  setOrigin: Dispatch<React.SetStateAction<string>>;
  destination: string;
  setDestination: Dispatch<React.SetStateAction<string>>;
  response: google.maps.DirectionsResult | null;
  setResponse: Dispatch<React.SetStateAction<google.maps.DirectionsResult | null>>;
  requestError: string | boolean;
  setRequestError: Dispatch<React.SetStateAction<string | boolean>>;
  notificationWaiting: boolean;
  setNotificationWaiting: Dispatch<React.SetStateAction<boolean>>;
  messageOnRoute: boolean;
  setMessageOnRoute: Dispatch<React.SetStateAction<boolean>>
  clientPosition: Location;
  setClientPosition: Dispatch<React.SetStateAction<Location>>;
  center: Location;
  setCenter: Dispatch<React.SetStateAction<Location>>;
  getNewTravelFromAPI: () => void;
  resetMap: () => void;
}

export const MapContext = createContext<MapContextInterface>(
  {} as MapContextInterface
);

export const MapProvider = ({ children }: { children: ReactNode }) => {
  const { updateTravelStatus, updateTravel } =
    useContext(TravelContext);
  const { user, token, updateUser } = useContext(UserContext);

  const [hasOrigin, setHasOrigin] = useState(false);
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [response, setResponse] = useState<google.maps.DirectionsResult | null>(
    null
  );

  const [requestError, setRequestError] = useState<string | boolean>(false);
  const [notificationWaiting, setNotificationWaiting] =
    useState<boolean>(false);
  const [messageOnRoute, setMessageOnRoute] = useState<boolean>(false);

  const [clientPosition, setClientPosition] = useState<Location>({
    lat: -23.55052,
    lng: -46.633309,
  });
  const [center, setCenter] = useState<Location>({
    lat: -23.55052,
    lng: -46.633309,
  });

  const resetMap = () => {
    setHasOrigin(false);
    setOrigin("");
    setDestination("");
    setResponse(null);
    setCenter(clientPosition);
  };

  const getNewTravelFromAPI = () => {
    if (response && origin !== destination) {
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
          setNotificationWaiting(true);
        })
        .catch((err) => {
          setRequestError(err.response.data.message);
        });
    } else {
      setRequestError(
        "Ops, você pode está pra lá de Bagdá, mas precisa escolher dois lugares diferentes"
      );
    }
  };

  return (
    <MapContext.Provider
      value={{
        hasOrigin,
        setHasOrigin,
        origin,
        setOrigin,
        destination,
        setDestination,
        response,
        setResponse,
        requestError,
        setRequestError,
        notificationWaiting,
        setNotificationWaiting,
        messageOnRoute,
        setMessageOnRoute,
        clientPosition,
        setClientPosition,
        center,
        setCenter,
        getNewTravelFromAPI,
        resetMap,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};
