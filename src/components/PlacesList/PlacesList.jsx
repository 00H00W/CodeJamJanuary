import { useState, useEffect, useMemo } from "react";
import SearchCard from "../SearchCard/SearchCard";

function PlacesList({ places }) {
  return (
    <>
      <ul className="search__results-container">
        {places.map((place) => (
          <SearchCard key={place.name} place={place}/>
        ))}
      </ul>
    </>
  );
}

export default PlacesList;
