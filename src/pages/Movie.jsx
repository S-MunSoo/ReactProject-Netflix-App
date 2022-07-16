import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import MoviesPage from "../component/MoviesPage";
import MoviePageNation from "../component/MoviePageNation";
const Movie = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies } = useSelector(
    (state) => state.movie
  );

  console.log("popularMovies?", popularMovies);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      <MoviesPage moviesA={popularMovies} />
      <MoviesPage moviesA={topRatedMovies} />
      <MoviesPage moviesA={upcomingMovies} />
      {/* <MoviePageNation /> */}
    </div>
  );
};

export default Movie;
