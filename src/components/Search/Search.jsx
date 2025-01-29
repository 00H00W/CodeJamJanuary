import "./Search.css";
import React from "react";
import { search, data } from "../../Utils/ShelterAPI";
import MapDisplay from "../MapDisplay/MapDisplay";
import SearchCard from "../SearchCard/SearchCard";

function Search({ searchLocation, handleSearchChange }) {
  const [shelterData, setShelterData] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    setShelterData(data);
  };

  React.useEffect(() => {
    // console.log("Hello!");
    setShelterData(data);
  }, []);

  return (
    <section className="search">
      <div className="search__column-container">
        <div className="search__map">
          <MapDisplay />
        </div>
        <div className="search__menu">
          <div className="search__form">
            <form
              onSubmit={handleSubmit}
              action=""
              className="search__form_test"
            >
              <label htmlFor="search-input" className="search__form-label">
                Your Location:
                <span className="search__search-bar">
                  <input
                    onChange={handleSearchChange}
                    value={searchLocation}
                    className="search__form-input"
                    required
                    type="text"
                    placeholder="los angeles"
                    id="search-input"
                  />
                  <button
                    type="submit"
                    htmlFor="search-input"
                    className="search__form-submit"
                    //   onClick={handleSubmit}
                  >
                    Search
                  </button>
                </span>
              </label>
            </form>
          </div>
          <ul className="search__results-container">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;
