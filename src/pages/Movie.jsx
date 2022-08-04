import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { useSearchParams } from "react-router-dom";
import SearchMovie from "../component/SearchMovie";
import Pagination from "react-js-pagination";
import Footer from "../component/Footer";
import ClipLoader from "react-spinners/ClipLoader";

const Movie = () => {
  const [page, setPage] = useState(1);
  // const [sortTitle, setSortTitle] = useState("");
  const [query, setQuery] = useSearchParams();
  let keyword = query.get("query");

  const dispatch = useDispatch();
  const { sortMovie, loading, genreList, searchMovie } = useSelector(
    (state) => state.movie
  );
  // console.log("searchMovie", searchMovie);
  // console.log("sortMovie", sortMovie);

  // 페이지 네이션
  const pageHandlerChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(movieAction.getMovies(page, keyword));
  }, [page, keyword]);

  if (loading) {
    return (
      <div className="movie-loading">
        <ClipLoader color="#B22222" loading={loading} size={150} />
      </div>
    );
  } else {
    return (
      <div className="movie-back">
        <SearchMovie
          sortMovie={sortMovie}
          genreList={genreList}
          searchMovie={searchMovie}
        />
        <div className="moive-naviton">
          <Pagination
            activePage={page}
            hideDisabled={true}
            itemsCountPerPage={20}
            totalItemsCount={10000}
            pageRangeDisplayed={5}
            onChange={pageHandlerChange}
          />
        </div>
        <Footer />
      </div>
    );
  }
};

export default Movie;
