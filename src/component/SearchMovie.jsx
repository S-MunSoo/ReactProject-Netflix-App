import React from "react";
import LongMovieCard from "./LongMovieCard";

// movie 페이지 검색 및 정렬
const SearchMovie = ({ sortMovie, genreList }) => {
  return (
    <div className="LMC">
      {sortMovie.results &&
        sortMovie.results.map((item) => (
          <LongMovieCard item={item} key={item.id} />
        ))}
    </div>
  );
};

export default SearchMovie;
