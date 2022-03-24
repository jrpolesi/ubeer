import { Dispatch } from "react";

export interface Location {
  lat: number;
  lng: number;
}

export interface MapContextInterface {
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