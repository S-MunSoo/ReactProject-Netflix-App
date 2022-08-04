import React from "react";
import LongMovieCard from "./LongMovieCard";
// import { useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { detailAction } from "../redux/actions/detailAction";
// import { useNavigate } from "react-router-dom";
// movie 페이지 검색 및 정렬
const SearchMovie = ({ sortMovie, genreList, searchMovie }) => {
  console.log("searchMovie", searchMovie);

  return (
    <div className="LMC">
      {sortMovie.results &&
        sortMovie.results.map((item) => (
          <LongMovieCard item={item} key={item.id} />
        ))}
      {searchMovie.results &&
        searchMovie.results.map((item) => (
          <LongMovieCard item={item} key={item.id} />
        ))}
    </div>
  );
};

export default SearchMovie;
