import React, {useState, useCallback} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Articles from "../Articles/Articles";
import Search from "../Search/Search";
import Landing from "../Landing/Landing";
import { search } from "../../utils/getPlaces";
import "./Main.css";

function Main() {
  const [searchLocation, setSearchLocation] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = useCallback(async (searchLocation) => {
    if (!searchLocation) return; // Prevent unnecessary API calls

    setLoading(true);
    setSearchLocation(searchLocation);
    localStorage.setItem("lastSearchTerm", searchLocation);

    try {
      const fetchedPlaces = await search(searchLocation);
      setSearchResults(fetchedPlaces);
      navigate("/search");
    } catch (error) {
      console.error("Error in handleSearch:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              searchLocation={searchLocation}
              handleSearchChange={handleSearchChange}
              handleSearch={handleSearch}
              input={input}
            />
          }
        />
        <Route
          path="/search"
          element={
            <Search
              searchLocation={searchLocation}
              handleSearchChange={handleSearchChange}
              handleSearch={handleSearch}
              searchResults={searchResults}
              loading={loading}
              input={input}
            />
          }
        />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </main>
  );
}

export default Main;
