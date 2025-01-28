import "./Landing.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { search } from "../../Utils/ShelterAPI";

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
        <p id="nav-search-target" className="search__subtitle">
          Find a place to stay in times of disaster
        </p>
        <form onSubmit={handleSubmit} action="" className="search__form">
          <label htmlFor="search-input" className="form__label">
            Your Location:
            <input
              onChange={handleSearchChange}
              value={searchLocation}
              className="search__input"
              required
              type="text"
              placeholder="los angeles"
              id="search-input"
            />
          </label>
          <label htmlFor="search-input" className="form__btn-label">
            <button
              type="submit"
              htmlFor="search-input"
              className="search__btn"
              //   onClick={handleSubmit}
            >
              Search
            </button>
          </label>
        </form>
      </div>
    </section>
  );
}

export default Landing;
