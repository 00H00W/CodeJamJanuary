import "./Search.css";

function Search() {
  return (
    <section className="search">
      <div className="search__header">
        <div className="search__overlay"></div>
        <h1 className="search__title">Sh3ltr</h1>
        <p id="nav-search-target" className="search__subtitle">
          Find a place to stay in times of disaster
        </p>
        <form action="" className="search__form">
          <label htmlFor="search-input" className="form__label">
            Your Location:
            <input
              className="text__input"
              required
              type="text"
              placeholder="los angeles"
              id="search-input"
            />
          </label>
          <label htmlFor="search-input" className="form__btn-label">
            <button htmlFor="search-input" className="search__btn">
              Search
            </button>
          </label>
        </form>
      </div>
      <div className="search__results">
        <ul className="search__results-container">
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
    </section>
  );
}

export default Search;
