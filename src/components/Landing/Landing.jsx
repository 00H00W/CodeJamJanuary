import "./Landing.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../../Utils/ShelterAPI";
import SearchBar from "../SearchBar/SearchBar";

function Landing({ searchLocation, handleSearchChange }) {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    navigate("/search");
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
          />
        </div>
      </div>
    </section>
  );
}

export default Landing;
