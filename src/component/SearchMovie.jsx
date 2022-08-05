import React from "react";
import LongMovieCard from "./LongMovieCard";

// movie 페이지 검색 및 정렬
const SearchMovie = ({ sortMovie, genreList, searchMovie, keyword }) => {
  console.log("searchMovie", searchMovie);

  let firstHalf = {};
  let secondHalf = {};
  //  어떤 것을 첫번째로 페이지화 할지
  if (searchMovie.results !== null || keyword !== null) {
    // 검색했을 시
    firstHalf = searchMovie.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = searchMovie.results?.slice(0).filter((_, i) => i % 2 === 1);
  }

  if (
    searchMovie.results[0]?.title === "null" ||
    (sortMovie.results !== null && keyword === null)
  ) {
    // 무비 롱페이지에서 제일 처음 보여지는 부분
    firstHalf = sortMovie.results?.slice(0).filter((_, i) => i % 2 === 0);
    secondHalf = sortMovie.results?.slice(0).filter((_, i) => i % 2 === 1);
  }
  return (
    <div className="LMC">
      {firstHalf?.map((item) => (
        <LongMovieCard item={item} key={item.id} />
      ))}
      {secondHalf?.map((item) => (
        <LongMovieCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default SearchMovie;
