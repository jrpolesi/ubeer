export interface Car {
  model: string;
  plate: string;
}

export interface FavoritesPlaces {
  id: string;
  name: string;
}

export interface TravelHistoric {
  id: string;
  from: string;
  to: string;
  departureDate: string;
  arrivedDate: string;
  value: number;
}

export interface UserData {
  id: string;
  name: string;
  email: string;
  car: Car;
  favoritesPlaces: FavoritesPlaces[];
  travelHistoric: TravelHistoric[];
  budget: number;
}

export interface UserContextInterface {
  updateUser: (userUpdated: UserData) => void;
  updateToken: (newToken:string) => void;
  logOut: () => void;
  user: UserData | null;
  token: string | null
}
