import React from "react";
import { SearchResults, SearchResultsInfo, SearchResultsDescription, SearchResultsRange, SearchResultsPrice } from "./SearchResultStyles"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

const SearchResult = ({ image, location, title, description, star, price, total }) => {
  return (
    <>
      <SearchResults>
        <img src={image} alt="Image Places"/>
        <FavoriteBorderIcon className="searchResultHeart" />

        <SearchResultsInfo>
          <SearchResultsDescription>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>_____</p>
            <p>{description}</p>
          </SearchResultsDescription>

          <SearchResultsRange>
            <div>
              <StarIcon />
              <p>
                <strong>{star}</strong>
              </p>
            </div>
          </SearchResultsRange>

          <SearchResultsPrice>
            <h2>{price}</h2>
            <p>{total}</p>
          </SearchResultsPrice>
        </SearchResultsInfo>

      </SearchResults>
    </>
  );
};

export default SearchResult;
