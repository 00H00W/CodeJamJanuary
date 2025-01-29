import { useState, useEffect, useMemo } from "react";
import SearchCard from "../SearchCard/SearchCard";
import "./PlacesList.css";

function PlacesList({ places }) {
  return (
    <>
      <ul className="places-list">
        {places.map((place) => (
          <SearchCard key={place.name} place={place} />
        ))}
      </ul>
    </>
  );
}

export default PlacesList;
