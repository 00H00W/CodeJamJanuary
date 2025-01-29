import React from "react";
import { Routes, Route } from "react-router-dom";
import Articles from "../Articles/Articles";
import Search from "../Search/Search";
import Landing from "../Landing/Landing";
import MapDisplay from "../MapDisplay/MapDisplay";
import "./Main.css";

function Main() {
  const [searchLocation, setSearchLocation] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();

  const handleSearchChange = (e) => {
    setSearchLocation(e.target.value);
  };
  const handleSearchSubmit = () => {
    // this is where the shelter API is called with searchLocation
    // resulting data is passed into a useState
  };

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              searchLocation={searchLocation}
              handleSearchChange={handleSearchChange}
              handleSearchSubmit={handleSearchSubmit}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              searchLocation={searchLocation}
              handleSearchChange={handleSearchChange}
            />
          }
        />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </main>
  );
}

export default Main;
