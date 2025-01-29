import "./SearchBar.css";

function SearchBar({ searchLocation, handleSearchChange, handleSubmit, input }) {
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} action="" className="search-bar__form">
        <label htmlFor="search-input" className="search-bar__form-label">
          Your Location:
        </label>
        <span className="search-bar__border">
          <input
            onChange={handleSearchChange}
            value={input}
            className="search-bar__form-input"
            required
            type="text"
            placeholder="los angeles"
            id="search-input"
          />
          <button
            type="submit"
            htmlFor="search-input"
            className="search-bar__form-submit"
            //   onClick={handleSubmit}
          >
            Search
          </button>
        </span>
      </form>
    </div>
  );
}

export default SearchBar;
