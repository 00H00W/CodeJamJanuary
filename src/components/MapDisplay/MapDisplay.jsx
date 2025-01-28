import "./MapDisplay.css";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

function MapDisplay() {
  return (
    <section>
      <APIProvider apiKey={"AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY"}>
        <Map
          style={{ width: "75vw", height: "50vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider>
    </section>
  );
}

export default MapDisplay;
