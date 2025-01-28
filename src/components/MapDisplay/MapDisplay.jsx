import "./MapDisplay.css";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import React from "react";

function MapDisplay() {
  const [openMarkerIndex, setOpenMarkerIndex] = React.useState();
  const [position, setPosition] = React.useState();
  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition(pos.coords);
        console.log(pos);
      });
    } else {
      setPosition({ latitude: 0, longitude: 0 });
    }
  }, []);

  const testPoints = [
    { lat: 5, lng: 10 },
    { lat: 10, lng: 5 },
    { lat: 20, lng: 15 },
  ];

  return (
    <section>
      {position ? (
        <APIProvider apiKey={"AIzaSyBKsxB7SuZvOCJUCfWSsW9jkBRKtYBa0MY"}>
          <Map
            mapId={"test"}
            style={{ width: "75vw", height: "50vh" }}
            defaultCenter={{ lat: position.latitude, lng: position.longitude }}
            defaultZoom={3}
            gestureHandling={"greedy"}
            disableDefaultUI={true}
          >
            <AdvancedMarker
              position={{ lat: position.latitude, lng: position.longitude }}
              clickable={true}
              onClick={() => alert("marker was clicked!")}
              title={"Your location"}
            />

            {testPoints.map((item, index) => (
              <div key={index}>
                {/* AdvancedMarker */}
                <AdvancedMarker
                  position={item}
                  onClick={() => setOpenMarkerIndex(index)}
                ></AdvancedMarker>

                {/* Conditionally render InfoWindow */}
                {openMarkerIndex === index && (
                  <InfoWindow
                    position={item}
                    onCloseClick={() => setOpenMarkerIndex(null)}
                  >
                    <div>
                      <h3>
                        {item.lat}, {item.lng}
                      </h3>
                      <p>{item.name}</p>
                    </div>
                  </InfoWindow>
                )}
              </div>
            ))}
          </Map>
        </APIProvider>
      ) : (
        <p>Loading</p>
      )}
    </section>
  );
}

export default MapDisplay;
