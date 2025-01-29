/**
 * Converts a place into latitude and longitude using Google Maps Geocoding API.
 * @param {string} place - The name or address of the place.
 * @param {string} apiKey - Your Google Maps API key.
 * @returns {Promise<{lat: number, lng: number}>} - A promise that resolves to an object with latitude and longitude.
 */
export default async function getLatLng(place, apiKey) {
    const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      place
    )}&key=${apiKey}`;
  
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      if (data.status !== "OK") {
        throw new Error(`Geocoding error: ${data.status}`);
      }
  
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } catch (error) {
      console.error("Error fetching geolocation:", error);
      throw error;
    }
  }
  

    