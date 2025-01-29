import "./SearchCard.css";

function SearchCard() {
  return (
    <li className="search-card">
      <h3 className="search-card__title">Shelter Name</h3>
      <p className="search-card__label">Address:</p>
      <p className="search-card__value">42 Wallaby Way, Sydney</p>
      <p className="search-card__label">Phone:</p>
      <p className="search-card__value">(555) 012-3456</p>
    </li>
  );
}

export default SearchCard;
