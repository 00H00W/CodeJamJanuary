import "./SearchCard.css";

function SearchCard({place}) {
  return (
    <li className="search-card">
      <a className="search__card-link" href={place.websiteUri} target="_blank" rel="noopener noreferrer">
        <h3 className="search-card__title">{place.displayName.text}</h3>
        <p className="search-card__label">Address:</p>
        <p className="search-card__value">{place.formattedAddress}</p>
        <p className="search-card__label">Phone:</p>
        <p className="search-card__value">{place.nationalPhoneNumber}</p>
      </a>
    </li>

    
  );
}

export default SearchCard;