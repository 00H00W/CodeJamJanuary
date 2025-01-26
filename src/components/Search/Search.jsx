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
            <h3 className="search__result-title">Community Shelter</h3>
            <p className="search__result-discription">Shelter description</p>
          </li>
          <li className="search__result">
            <h3 className="search__result-title">Community Shelter</h3>
            <p className="search__result-discription">Shelter description</p>
          </li>
          <li className="search__result">
            <h3 className="search__result-title">Community Shelter</h3>
            <p className="search__result-discription">Shelter description</p>
          </li>
          <li className="search__result">
            <h3 className="search__result-title">Community Shelter</h3>
            <p className="search__result-discription">Shelter description</p>
          </li>
          <li className="search__result">
            <h3 className="search__result-title">Community Shelter</h3>
            <p className="search__result-discription">Shelter description</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Search;
