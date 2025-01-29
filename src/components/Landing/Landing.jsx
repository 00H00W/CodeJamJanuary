import "./Landing.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { search } from "../../utils/getPlaces";

function Landing({ searchLocation, handleSearchChange, handleSearch, input }) {
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
    <section className="hero">
      <div className="hero__header">
        <div className="hero__overlay"></div>
        <h1 className="hero__title">Sh3ltr</h1>
        <p className="hero__subtitle">
          Find a place to stay in times of disaster
        </p>
        <div className="hero__search-bar">
          <SearchBar
            handleSubmit={handleSubmit}
            handleSearchChange={handleSearchChange}
            searchLocation={searchLocation}
            input={input}
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
