import "./Search.css";
import React from "react";
import MapDisplay from "../MapDisplay/MapDisplay";
import Preloader from "../PreLoader/PreLoader";
import NothingFound from "../NothingFound/NothingFound";
import PlacesList from "../PlacesList/PlacesList";

function Search({
  searchLocation,
  handleSearchChange,
  handleSearch,
  searchResults,
  loading,
  input,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setErrorMessage("Please enter a keyword");
    } else {
      handleSearch(trimmedInput);
    }
  };

  return (
    <section className="search">
      <div className="search__column-container">
        <div className="search__map">
          <MapDisplay results={searchResults} />
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
                    value={input}
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
                  >
                    Search
                  </button>
                </span>
              </label>
            </form>
          </div>
          {loading ? (
            <Preloader />
          ) : (
            <>
              {console.log(searchResults)}
              {searchLocation && searchResults.length === 0 && <NothingFound />}
              {searchResults.length > 0 && (
                <PlacesList places={searchResults} />
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
