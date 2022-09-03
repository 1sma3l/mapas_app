import { Feature } from "@/interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; //longitud y Latitud
    isLoadingPlaces: boolean;
    places: Feature[];
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined,
        isLoadingPlaces: false,
        places: [],
    }
}

export default state;