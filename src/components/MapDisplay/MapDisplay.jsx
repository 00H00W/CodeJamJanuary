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
    <div className="map-display">
      {position ? (
        <APIProvider apiKey={"AIzaSyDtw4jIS0wrL1nl7HC50zDT-ZhMNx5Jb94"}>
          <div className="map-display">
            <Map
              mapId={"mapId"}
              defaultCenter={{
                lat: position.latitude,
                lng: position.longitude,
              }}
              defaultZoom={10}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
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
          </div>
        </APIProvider>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
}

export default MapDisplay;
