import "./MapDisplay.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

function MapDisplay() {
  return (
    <APIProvider apiKey={"AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY"}>
      <div className="map-display">
        <Map
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"cooperative"}
          disableDefaultUI={true}
        />
      </div>
    </APIProvider>
  );
}

export default MapDisplay;
