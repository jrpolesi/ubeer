import { Car } from "./userContext";

export type TravelStatus =
  | false
  | "waiting for driver"
  | "in transit"
  | "finished";

export interface Travel {
  id: string;
  from: string;
  to: string;
  departureDate: Date;
  arrivedDate: Date;
  value: number;
}

export interface Feedbacks {
  id: string;
  start: number;
  description: string;
}

export interface Driver {
  id: string;
  name: string;
  car: Car;
  rating: {
    starsAverage: number;
    feedbacks: Feedbacks[];
  };
}

export interface TravelData {
  travel: Travel;
  driver: Driver;
}

export interface TravelContextInterface {
  travel: TravelData;
  travelStatus: TravelStatus;
  updateTravel: (travel: TravelData) => void;
  updateTravelStatus: (travelStatus: TravelStatus) => void;
}
