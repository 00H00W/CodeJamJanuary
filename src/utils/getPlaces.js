import axios from "axios";
import getLatLng from "./useConvert";

const mapsApiKey = import.meta.env.VITE_MAPS_API_KEY;
const rapidApiKey = import.meta.env.VITE_RAPIDAPI_KEY;

export const search = async (input) => {
  console.log(`API request sent for: ${input}`); // Track API calls

  try {
    const coords = await getLatLng(input, mapsApiKey);
    const placesOptions = {
      method: "POST",
      url: "https://google-map-places-new-v2.p.rapidapi.com/v1/places:searchText",
      headers: {
        "x-rapidapi-key": rapidApiKey,
        "x-rapidapi-host": "google-map-places-new-v2.p.rapidapi.com",
        "Content-Type": "application/json",
        "X-Goog-FieldMask": "*",
      },
      data: {
        textQuery: "shelters",
        openNow: true,
        maxResultCount: 5,
        locationBias: {
          circle: {
            center: { latitude: coords.lat, longitude: coords.lng },
            radius: 10000,
          },
        },
      },
    };

    const response = await axios.request(placesOptions);
    return response.data.places || [];
  } catch (error) {
    console.error("Error fetching shelters:", error);
    return [];
  }
};
