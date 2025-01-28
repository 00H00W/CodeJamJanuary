import "./Search.css";
import React from "react";
import { search, data } from "../../Utils/ShelterAPI";
import MapDisplay from "../MapDisplay/MapDisplay";
import Carousel from "../Carousel/Carousel";

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
      {/* {console.log("Draw")} */}
      <div className="search__container">
        <form onSubmit={handleSubmit} action="" className="search__form_test">
          <label htmlFor="search-input" className="form__label">
            Your Location:
            <input
              onChange={handleSearchChange}
              value={searchLocation}
              className="text__input"
              required
              type="text"
              placeholder="los angeles"
              id="search-input"
            />
          </label>
          <button
            type="submit"
            htmlFor="search-input"
            className="search__btn"
            //   onClick={handleSubmit}
          >
            Search
          </button>
        </form>
      </div>

      <div className="container">
        <div className="testing">
          <MapDisplay className="map" />
        </div>
        <div className="search__results">
          <ul className="search__results-container">
            {/* {shelterData.map((item, index) => {
            return <div key={index}>{item}</div>;
          })} */}
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
            <li className="search__result">
              <h3 className="search__result-name">Community Shelter</h3>
              <p className="search__result-address-title">Address:</p>
              <p className="search__result-address">42 Wallaby Way, Sydney</p>
              <p className="search__result-phone-title">Phone:</p>
              <p className="search__result-phone-num">(555) 012-3456</p>
              {/* we add the image here if possible */}
              <p className="search__result-web"> Click to visit website</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Search;
