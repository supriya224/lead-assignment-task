export interface IPlaces {
  "place name": string;
  longitude: number;
  state: string;
  "state abbreviation": string;
  latitude: number;
}
export interface IPostCodeResponse {
  "post code": string;
  country: string;
  "country abbreviation": string;
  places: IPlaces[];
}

