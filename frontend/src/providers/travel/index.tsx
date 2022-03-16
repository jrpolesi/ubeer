import React, { createContext, ReactNode, useState } from "react";
import {
  TravelContextInterface,
  TravelData,
  TravelStatus,
} from "../../types/travelContext";

export const TravelContext = createContext<TravelContextInterface>(
  {} as TravelContextInterface
);

export function TravelProvider({ children }: { children: ReactNode }) {
  const [travel, setTravel] = useState<TravelData>({} as TravelData);
  const [travelStatus, setTravelStatus] = useState<TravelStatus>(false);

  function updateTravel(newTravel: TravelData) {
    setTravel(newTravel);
  }

  function updateTravelStatus(travelStatus: TravelStatus) {
    setTravelStatus(travelStatus);
  }

  return (
    <TravelContext.Provider
      value={{ travel, travelStatus, updateTravel, updateTravelStatus }}
    >
      {children}
    </TravelContext.Provider>
  );
}
